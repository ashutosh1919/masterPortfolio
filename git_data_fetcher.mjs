import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

if (!openSource.githubConvertedToken || !openSource.githubUserName) {
  console.error("Set GITHUB_TOKEN and GITHUB_USERNAME in .env (see env.example).");
  process.exit(1);
}

const query_pr = {
  query: `
	query($login: String!) {
	  user(login: $login){
	    pullRequests(first: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount
      nodes{
        id
        title
        url
        state
	      mergedBy {
	          avatarUrl
	          url
	          login
	      }
	      createdAt
	      number
        changedFiles
	      additions
	      deletions
        baseRepository {
              isPrivate
	          name
	          url
	          owner {
	            avatarUrl
	            login
	            url
	          }
	        }
      }
    }
	}
}
	`,
};

const query_issue = {
  query: `query($login: String!) {

		user(login: $login) {
    issues(first: 100, orderBy: {field:CREATED_AT, direction: DESC}){
      totalCount
      nodes{
      	id
        closed
        title
        createdAt
        url
        number
        assignees(first:100){
          nodes{
            avatarUrl
            name
            url
          }
        }
        repository{
          isPrivate
          name
          url
          owner{
            login
            avatarUrl
            url
          }
        }
      }
    }
  }

	}`,
};

const query_org = {
  query: `query($login: String!) {
	user(login: $login) {
	    repositoriesContributedTo(last: 100, privacy: PUBLIC){
	      totalCount
	      nodes{
	        owner{
	          login
	          avatarUrl
	          __typename
	        }
	      }
	    }
	  }
	}`,
};

const query_pinned_projects = {
  query: `
	query($login: String!) {
	  user(login: $login) {
	    pinnedItems(first: 6, types: REPOSITORY) {
	      totalCount
	      nodes{
	        ... on Repository{
	          id
              isPrivate
		          name
		          createdAt,
		          url,
		          description,
		          isFork,
		          languages(first:10){
		            nodes{
		              name
		            }
		          }
	        }
	      }
		  }
	  }
	}
	`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

async function fetchGitHubData(query) {
  let response;
  try {
    response = await fetch(baseUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...query,
        variables: { login: openSource.githubUserName },
      }),
    });
  } catch (error) {
    const code =
      error && typeof error.code === "string" && /^[A-Z0-9_]+$/.test(error.code)
        ? ` (${error.code})`
        : "";
    throw new Error(`Could not contact GitHub${code}. Check network and TLS settings.`);
  }

  if (!response.ok) {
    throw new Error(
      `GitHub returned HTTP ${response.status}. Check the token and rate limits.`
    );
  }

  let result;
  try {
    result = await response.json();
  } catch (_error) {
    throw new Error("GitHub returned an invalid JSON response.");
  }
  if (result && Array.isArray(result.errors) && result.errors.length > 0) {
    throw new Error(
      "GitHub returned a GraphQL error. Check the username, token permissions, and rate limits."
    );
  }
  if (!result || !result.data || !result.data.user) {
    throw new Error("GitHub user not found or inaccessible. Check GITHUB_USERNAME.");
  }
  return result;
}

function reportFetchFailure(label, error) {
  // Do not print credentials even if an unexpected error includes one.
  const message = String(error && error.message ? error.message : "Unknown error")
    .split(openSource.githubConvertedToken)
    .join("[REDACTED]");
  console.error(`Could not fetch ${label}: ${message}`);
  process.exitCode = 1;
}

function writeData(filename, value) {
  fs.writeFile(filename, JSON.stringify(value), (error) => {
    if (error) {
      console.error(`Could not write ${filename}. Check the output directory and its permissions.`);
      process.exitCode = 1;
    }
  });
}

fetchGitHubData(query_pr)
  .then((data) => {
    var cropped = { data: [] };
    // A broad token can see private and internal repositories. Only publish
    // records whose base repository is explicitly public.
    cropped["data"] = data["data"]["user"]["pullRequests"]["nodes"].filter(
      (pullRequest) => pullRequest?.baseRepository?.isPrivate === false
    );

    var open = 0;
    var closed = 0;
    var merged = 0;
    for (var i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["state"] === "OPEN") open++;
      else if (cropped["data"][i]["state"] === "MERGED") merged++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["merged"] = merged;
    cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching the Pull Request Data.\n");
    writeData("./src/shared/opensource/pull_requests.json", cropped);
  })
  .catch((error) => reportFetchFailure("pull requests", error));

fetchGitHubData(query_issue)
  .then((data) => {
    var cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["issues"]["nodes"].filter(
      (issue) => issue?.repository?.isPrivate === false
    );

    var open = 0;
    var closed = 0;
    for (var i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["closed"] === false) open++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching the Issues Data.\n");
    writeData("./src/shared/opensource/issues.json", cropped);
  })
  .catch((error) => reportFetchFailure("issues", error));

fetchGitHubData(query_org)
  .then((data) => {
    const orgs = data["data"]["user"]["repositoriesContributedTo"]["nodes"];
    var newOrgs = { data: [] };
    for (var i = 0; i < orgs.length; i++) {
      var obj = orgs[i]["owner"];
      if (obj["__typename"] === "Organization") {
        var flag = 0;
        for (var j = 0; j < newOrgs["data"].length; j++) {
          if (JSON.stringify(obj) === JSON.stringify(newOrgs["data"][j])) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          newOrgs["data"].push(obj);
        }
      }
    }

    console.log("Fetching the Contributed Organization Data.\n");
    writeData("./src/shared/opensource/organizations.json", newOrgs);
  })
  .catch((error) => reportFetchFailure("organizations", error));

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
};

fetchGitHubData(query_pinned_projects)
  .then((data) => {
    const projects = data["data"]["user"]["pinnedItems"]["nodes"].filter(
      (project) => project?.isPrivate === false
    );
    var newProjects = { data: [] };
    for (var i = 0; i < projects.length; i++) {
      var obj = projects[i];
      var langobjs = obj["languages"]["nodes"];
      var newLangobjs = [];
      for (var j = 0; j < langobjs.length; j++) {
        if (langobjs[j]["name"] in languages_icons) {
          newLangobjs.push({
            name: langobjs[j]["name"],
            iconifyClass: languages_icons[langobjs[j]["name"]],
          });
        }
      }
      obj["languages"] = newLangobjs;
      newProjects["data"].push(obj);
    }

    console.log("Fetching the Pinned Projects Data.\n");
    writeData("./src/shared/opensource/projects.json", newProjects);
  })
  .catch((error) => reportFetchFailure("pinned projects", error));

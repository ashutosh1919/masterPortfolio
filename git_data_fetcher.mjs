import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

const numify = (number) => Number.isInteger(parseInt(number)) ? parseInt(number) : 100

const argArray = process.argv.slice(2);
const args = {}
argArray.forEach((arg, i) => {
  if (arg.startsWith('-')) {
     args[arg.toLowerCase().replace(/^(--|-)/, "")] = argArray[i+1]?.startsWith("-") ? true : argArray[i+1] || true;
    }
})

const limit = numify(args.limit || args.l);
const pr_limit = numify(args["pr-limit"] || args.pl || limit);
const issue_limit = numify(args["issue-limit"] || args.il || limit);
const org_limit = numify(args["org-limit"] || args.ol || limit);


const query_pr = (cursor) => ({
  query: `
    query {
      user(login: "${openSource.githubUserName}"){
        pullRequests(
          last: 100, 
          ${cursor && `before: "${cursor}"`}
          orderBy: {
            field: CREATED_AT, 
            direction: DESC
          }){
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
              name
              url
              owner {
                avatarUrl
                login
                url
              }
            }
          }
          pageInfo {
            startCursor
          }
        }
      }
    }
  `,
})

const query_issue = (cursor) => ({
  query: `
    query{
      user(login: "${openSource.githubUserName}") {
        issues(
          last: 100,
          ${cursor && `before: "${cursor}"`}
          orderBy: {
            field:CREATED_AT, 
            direction: DESC
          }){
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
              name
              url
              owner{
                login
                avatarUrl
                url
              }
            }
          }
          pageInfo {
            startCursor
          }
        }
      }
    }
  `,
})

const query_org = (cursor) => ({
  query: `query{
    user(login: "${openSource.githubUserName}") {
        repositoriesContributedTo(
          last: 100,
          ${cursor && `before: "${cursor}"`}
          ){
          totalCount
          nodes{
            owner{
              url
              login
              avatarUrl
              __typename
            }
          }
          pageInfo {
            startCursor
          }
        }
      }
    }
  `,
})

const query_pinned_projects = {
  query: `
    query { 
      user(login: "${openSource.githubUserName}") { 
        pinnedItems(
          first: 6, 
          types: REPOSITORY
          ) {
          totalCount
          nodes{
            ... on Repository{
              id
              name
              createdAt
              url
              description
              isFork
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
}

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

const getOptions = (cursor, query) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
     Authorization: "bearer " + openSource.githubConvertedToken,
  },
  body: JSON.stringify(query(cursor)),
})

fetch(baseUrl, getOptions("", query_pr))
  .then((res) => res.json())
  .then(async(response) => {
    let pullRequests = response["data"]["user"]["pullRequests"]["nodes"]
    let cursor = response["data"]["user"]["pullRequests"]["pageInfo"]["startCursor"];
    if (pr_limit <= 100 && pullRequests.length >= pr_limit) {
        pullRequests.length = pr_limit
    }
    while (response["data"]["user"]["pullRequests"]["nodes"].length === 100 && pullRequests.length < pr_limit) {
        const options = getOptions(cursor, query_pr);
        const resp = await fetch(baseUrl, options);
        response = await resp.json();
        const current = response["data"]["user"]["pullRequests"];
        pullRequests = [...current["nodes"], ...pullRequests];
        if (pullRequests.length >= pr_limit) {
            pullRequests.length = pr_limit
            break
        }
        cursor = current["pageInfo"]["startCursor"];
    }
    const cropped = { data: pullRequests };
    
    let open = 0;
    let closed = 0;
    let merged = 0;
    for (let i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["state"] === "OPEN") open++;
      else if (cropped["data"][i]["state"] === "MERGED") merged++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["merged"] = merged;
    cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching Pull Requests Data.\n");
    fs.writeFile(
      "./src/shared/opensource/pull_requests.json",
      JSON.stringify(cropped),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));

fetch(baseUrl, getOptions("", query_issue))
  .then((res) => res.json())
  .then(async(response) => {
    let issues = response["data"]["user"]["issues"]["nodes"];
    let cursor = response["data"]["user"]["issues"]["pageInfo"]["startCursor"];
    if (issue_limit <= 100 && issues.length >= issue_limit) {
        issues.length = issue_limit;
    }
    while (response["data"]["user"]["issues"]["nodes"].length === 100 && issues.length < issue_limit) {
        const options = getOptions(cursor, query_issue);
        const resp = await fetch(baseUrl, options);
        response = await resp.json();
        const current = response["data"]["user"]["issues"];
        issues = [...current["nodes"], ...issues];
        if (issues.length >= issue_limit) {
            issues.length = issue_limit;
            break;
        }
        cursor = current["pageInfo"]["startCursor"];
    }
    const cropped = { data: issues };
    
    let open = 0;
    let closed = 0;
    for (let i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["closed"] === false) open++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching Issues Data.\n");
    fs.writeFile(
      "./src/shared/opensource/issues.json",
      JSON.stringify(cropped),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));

fetch(baseUrl, getOptions("", query_org))
  .then((res) => res.json())
  .then(async(response) => {
    let repositoriesContributedTo = response["data"]["user"]["repositoriesContributedTo"]["nodes"]
    let cursor = response["data"]["user"]["repositoriesContributedTo"]["pageInfo"]["startCursor"];
    if (org_limit <= 100 && repositoriesContributedTo.length >= org_limit) {
        repositoriesContributedTo.length = org_limit
    }
    while (response["data"]["user"]["repositoriesContributedTo"]["nodes"].length === 100 && repositoriesContributedTo.length < org_limit) {
        const options = getOptions(cursor, query_org);
        const resp = await fetch(baseUrl, options);
        response = await resp.json();
        const current = response["data"]["user"]["repositoriesContributedTo"];
        repositoriesContributedTo = [...current["nodes"], ...repositoriesContributedTo];
        if (repositoriesContributedTo.length >= org_limit) {
            repositoriesContributedTo.length = org_limit;
            break;
        }
        cursor = current["pageInfo"]["startCursor"];
    }
    const cropped = { data: repositoriesContributedTo };
    
    const orgs = cropped["data"]
    
    let newOrgs = { data: [] };
    for (let i = 0; i < orgs.length; i++) {
      let obj = orgs[i]["owner"];
      if (obj["__typename"] === "Organization") {
        let flag = 0;
        for (let j = 0; j < newOrgs["data"].length; j++) {
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

    console.log("Fetching Contributed Organizations Data.\n");
    fs.writeFile(
      "./src/shared/opensource/organizations.json",
      JSON.stringify(newOrgs),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));

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

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_pinned_projects),
})
  .then((res) => res.json())
  .then((data) => {  
    const projects = data["data"]["user"]["pinnedItems"]["nodes"];
    let newProjects = { data: [] };
    for (let i = 0; i < projects.length; i++) {
      let obj = projects[i];
      let langobjs = obj["languages"]["nodes"];
      let newLangobjs = [];
      for (let j = 0; j < langobjs.length; j++) {
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

    console.log("Fetching Pinned Projects Data.\n");
    fs.writeFile(
      "./src/shared/opensource/projects.json",
      JSON.stringify(newProjects),
      function (err) {
        if (err) {
          console.log(
            "Error occured in pinned projects 1",
            JSON.stringify(err)
          );
        }
      }
    );
  })
  .catch((error) =>
    console.log("Error occured in pinned projects 2", JSON.stringify(error))
  );

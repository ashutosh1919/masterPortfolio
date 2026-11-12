import React from "react";
import ReactDOM from "react-dom";
import GithubRepoCard from "./githubRepoCard/GithubRepoCard";
import PublicationCard from "./publicationsCard/PublicationCard";

jest.mock("react-reveal", () => ({ Fade: ({ children }) => children }));

const theme = { highlight: "#fff", text: "#000", secondaryText: "#555" };

describe("external project and publication links", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  it.each([
    [
      "project",
      <GithubRepoCard
        theme={theme}
        repo={{
          id: "1",
          name: "Project",
          description: "A project",
          createdAt: "2024-01-01T00:00:00Z",
          url: "https://github.com/example/project",
          languages: [],
        }}
      />,
      "https://github.com/example/project",
    ],
    [
      "publication",
      <PublicationCard
        theme={theme}
        pub={{
          id: "2",
          name: "Publication",
          description: "A publication",
          createdAt: "2024-01-01T00:00:00Z",
          url: "https://example.org/publication",
        }}
      />,
      "https://example.org/publication",
    ],
  ])("renders the %s card as a focusable, isolated link", (_type, card, url) => {
    ReactDOM.render(card, container);
    const link = container.querySelector("a");
    expect(link.href).toBe(url);
    expect(link.target).toBe("_blank");
    expect(link.rel.split(" ")).toEqual(expect.arrayContaining(["noopener", "noreferrer"]));
    link.focus();
    expect(document.activeElement).toBe(link);
  });
});

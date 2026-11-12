import React from "react";
import ReactDOM from "react-dom";
import SocialMedia from "./socialMedia/SocialMedia";
import Footer from "./footer/Footer";

jest.mock("react-reveal", () => ({ Fade: ({ children }) => children }));
jest.mock("../portfolio", () => ({
  greeting: { title: "Portfolio owner" },
  socialMediaLinks: [
    {
      name: "GitHub",
      link: "https://github.com/example",
      fontAwesomeIcon: "fa-github",
      backgroundColor: "#000",
    },
    {
      link: "https://example.com/profile",
      fontAwesomeIcon: "fa-link",
      backgroundColor: "#000",
    },
  ],
}));

describe("accessible social links and footer", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  it("names icon-only links, including a fallback for a missing name", () => {
    ReactDOM.render(<SocialMedia theme={{ text: "#000" }} />, container);
    const links = container.querySelectorAll("a");
    expect(links[0].getAttribute("aria-label")).toBe("GitHub");
    expect(links[1].getAttribute("aria-label")).toBe(
      "https://example.com/profile"
    );
    expect(links[0].querySelector("i").getAttribute("aria-hidden")).toBe(
      "true"
    );
    expect(links[0].rel).toContain("noopener");
  });

  it("exposes the footer landmark and labels the heart emoji", () => {
    ReactDOM.render(<Footer theme={{ secondaryText: "#333" }} />, container);
    const footer = container.querySelector("footer");
    expect(footer.textContent).toContain("Portfolio owner");
    expect(
      footer.querySelector('[role="img"]').getAttribute("aria-label")
    ).toBe("love");
  });
});

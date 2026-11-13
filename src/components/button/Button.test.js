import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "./Button";

const theme = { body: "#fff", text: "#000" };

describe("button links", () => {
  it("isolates external links opened in a new tab", () => {
    render(
      <Button
        text="External"
        href="https://example.com"
        newTab
        theme={theme}
      />,
    );
    const link = screen.getByRole("link", { name: "External" });
    expect(link.getAttribute("href")).toBe("https://example.com");
    expect(link.target).toBe("_blank");
    expect(link.rel.split(" ")).toEqual(
      expect.arrayContaining(["noopener", "noreferrer"]),
    );
  });

  it("resolves internal routes relative to the router basename", () => {
    render(
      <MemoryRouter basename="/site" initialEntries={["/site/contact"]}>
        <Button text="Resume" to="/resume" theme={theme} />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("link", { name: "Resume" }).getAttribute("href"),
    ).toBe("/site/resume");
  });
});

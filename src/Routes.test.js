import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";

// These route smoke tests do not exercise animation, canvas, or PDF rendering.
vi.mock("./components/animation/Reveal", () => ({
  Fade: ({ children }) => children,
  Flip: ({ children }) => children,
}));
vi.mock("@iconify/react", () => ({ Icon: () => null }));
vi.mock("react-chartjs-2", () => ({ Doughnut: () => null }));
vi.mock("react-pdf", () => ({
  Document: ({ children }) => children,
  Page: () => null,
  pdfjs: { version: "test", GlobalWorkerOptions: {} },
}));

describe("route smoke checks", () => {
  afterEach(() => window.history.replaceState({}, "", "/"));

  it.each([
    ["/home", ".greet-main"],
    ["/education", ".education-main"],
    ["/experience", ".experience-main"],
    ["/projects", ".projects-main"],
    ["/opensource", ".opensource-main"],
    ["/contact", ".contact-main"],
    ["/resume", ".resume-main"],
    ["/unknown-route", ".error-main"],
  ])("renders %s", async (route, selector) => {
    window.history.pushState({}, "", route);
    const { container } = render(<App />);
    await waitFor(() => expect(container.querySelector(selector)).not.toBeNull(), { timeout: 5000 });
  });
});

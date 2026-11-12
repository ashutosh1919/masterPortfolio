import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import App from "./App";

// These route smoke tests do not exercise animation, canvas, or PDF rendering.
jest.mock("react-reveal", () => ({
  Fade: ({ children }) => children,
  Flip: ({ children }) => children,
}));
jest.mock("react-chartjs-2", () => ({ Doughnut: () => null }));
jest.mock("react-pdf", () => ({
  Document: ({ children }) => children,
  Page: () => null,
  pdfjs: { version: "test", GlobalWorkerOptions: {} },
}));

describe("route smoke checks", () => {
  const engine = new Styletron();
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    window.history.replaceState({}, "", "/");
  });

  it.each([
    ["/home", ".greet-main"],
    ["/education", ".education-main"],
    ["/experience", ".experience-main"],
    ["/projects", ".projects-main"],
    ["/opensource", ".opensource-main"],
    ["/contact", ".contact-main"],
    ["/resume", ".resume-main"],
    ["/unknown-route", ".error-main"],
  ])("renders %s", (route, selector) => {
    window.history.pushState({}, "", route);
    ReactDOM.render(
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <App />
        </BaseProvider>
      </StyletronProvider>,
      container
    );
    expect(container.querySelector(selector)).not.toBeNull();
  });
});

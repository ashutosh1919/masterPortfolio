import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Document } from "react-pdf";
import ResumePage from "./Resume";

jest.mock("react-pdf", () => ({
  Document: jest.fn(() => null),
  Page: jest.fn(() => null),
  pdfjs: { version: "test", GlobalWorkerOptions: {} },
}));
jest.mock("react-reveal", () => ({ Fade: ({ children }) => children }));
jest.mock("../../components/header/Header", () => () => null);
jest.mock("../../components/footer/Footer", () => () => null);
jest.mock("../../components/button/Button", () => () => null);
jest.mock("../../components/topButton/TopButton", () => () => null);

describe("resume PDF security", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    Document.mockClear();
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("disables PDF.js evaluation and keeps the options stable on resize", () => {
    act(() => {
      ReactDOM.render(<ResumePage theme={{}} />, container);
    });

    const options = Document.mock.calls[0][0].options;
    expect(options).toEqual({ isEvalSupported: false });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(Document.mock.calls[Document.mock.calls.length - 1][0].options).toBe(
      options
    );
  });
});

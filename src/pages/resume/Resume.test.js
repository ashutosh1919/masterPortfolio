import React from "react";
import { act, render, cleanup } from "@testing-library/react";
import { Document, pdfjs } from "react-pdf";
import workerUrl from "@portfolio-pdf-worker";
import ResumePage from "./Resume";

vi.mock("react-pdf", () => ({
  Document: vi.fn(() => null),
  Page: vi.fn(() => null),
  pdfjs: { version: "test", GlobalWorkerOptions: {} },
}));
vi.mock("../../components/animation/Reveal", () => ({ Fade: ({ children }) => children }));
vi.mock("../../components/header/Header", () => ({ default: () => null }));
vi.mock("../../components/footer/Footer", () => ({ default: () => null }));
vi.mock("../../components/button/Button", () => ({ default: () => null }));
vi.mock("../../components/topButton/TopButton", () => ({ default: () => null }));

describe("resume PDF security", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    Document.mockClear();
  });

  afterEach(() => cleanup());

  it("disables PDF.js evaluation and keeps the options stable on resize", () => {
    render(<ResumePage theme={{}} />, { container });
    const options = Document.mock.calls[0][0].options;
    expect(options).toEqual({ isEvalSupported: false });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(Document.mock.calls[Document.mock.calls.length - 1][0].options).toBe(
      options
    );
  });

  it("uses the locally bundled worker for the installed PDF.js", () => {
    expect(pdfjs.GlobalWorkerOptions.workerSrc).toBe(workerUrl);
    expect(workerUrl).toContain("pdf.worker.min");
  });
});

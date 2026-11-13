import React from "react";
import { act, render, cleanup, within } from "@testing-library/react";
import { Document, Page, pdfjs } from "react-pdf";
import workerUrl from "@portfolio-pdf-worker";
import ResumePage from "./Resume";

vi.mock("react-pdf", () => ({
  Document: vi.fn(({ children }) => children),
  Page: vi.fn(() => null),
  pdfjs: { version: "test", GlobalWorkerOptions: {} },
}));
vi.mock("../../components/animation/Reveal", () => ({
  Fade: ({ children }) => children,
}));
vi.mock("../../components/header/Header", () => ({ default: () => null }));
vi.mock("../../components/footer/Footer", () => ({ default: () => null }));
vi.mock("../../components/button/Button", () => ({ default: () => null }));
vi.mock("../../components/topButton/TopButton", () => ({
  default: () => null,
}));

describe("resume PDF security", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    Document.mockClear();
    Page.mockClear();
  });

  afterEach(() => cleanup());

  it("disables PDF.js evaluation and keeps the options stable on resize", () => {
    render(<ResumePage theme={{}} />, { container });
    const options = Document.mock.calls[0][0].options;
    expect(options).toEqual({ isEvalSupported: false });
    // react-pdf 11 defaults to Suspense; opt out so loading and error UI render.
    expect(Document.mock.calls[0][0].suspense).toBe(false);

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(Document.mock.calls[Document.mock.calls.length - 1][0].options).toBe(
      options,
    );
  });

  it.each(["onLoadError", "onSourceError"])(
    "shows the retry UI when %s reports a PDF failure",
    (callback) => {
      const log = vi.spyOn(console, "error").mockImplementation(() => {});
      try {
        render(<ResumePage theme={{}} />, { container });
        act(() => Document.mock.calls[0][0][callback](new Error("Bad PDF")));
        expect(within(container).getByRole("alert").textContent).toContain(
          "Failed to load resume",
        );
        expect(
          within(container).getByRole("button", { name: "Reload resume" }),
        ).toBeTruthy();
      } finally {
        log.mockRestore();
      }
    },
  );

  it.each(["onLoadError", "onRenderError"])(
    "shows the retry UI when a page's %s callback reports a failure",
    (callback) => {
      const log = vi.spyOn(console, "error").mockImplementation(() => {});
      try {
        render(<ResumePage theme={{}} />, { container });
        const pageProps = Page.mock.calls[Page.mock.calls.length - 1][0];
        act(() => pageProps[callback](new Error("Bad PDF page")));
        expect(within(container).getByRole("alert").textContent).toContain(
          "Failed to load resume",
        );
        expect(
          within(container).getByRole("button", { name: "Reload resume" }),
        ).toBeTruthy();
      } finally {
        log.mockRestore();
      }
    },
  );

  it("uses the locally bundled worker for the installed PDF.js", () => {
    expect(pdfjs.GlobalWorkerOptions.workerSrc).toBe(workerUrl);
    expect(workerUrl).toContain("pdf.worker.min");
  });
});

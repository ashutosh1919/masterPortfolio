import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { settings } from "./portfolio";

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

it("renders the initial route without crashing", async () => {
  window.history.replaceState({}, "", "/");
  const { container } = render(<App />);
  const selector = settings.isSplash ? ".logo_wrapper" : ".greet-main";
  await waitFor(() => expect(container.querySelector(selector)).not.toBeNull(), { timeout: 5000 });
});

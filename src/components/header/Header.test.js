import React from "react";
import { act, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { settings } from "../../portfolio";

vi.mock("../animation/Reveal", () => ({ Fade: ({ children }) => children }));
vi.mock("../seoHeader/SeoHeader", () => ({ default: () => null }));

const theme = { text: "#001C55", body: "#EDF9FE", highlight: "#A6E1FA" };

describe("header navigation", () => {
  let container;
  let toggle;
  let navigation;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <Header theme={theme} />
      </MemoryRouter>,
      { container }
    );
    toggle = container.querySelector(
      'button[aria-label="Toggle navigation menu"]'
    );
    navigation = container.querySelector('nav[aria-label="Main navigation"]');
  });

  afterEach(() => {
    cleanup();
    container.remove();
  });

  it("uses a focusable button that identifies the controlled navigation", () => {
    expect(toggle.type).toBe("button");
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(toggle.getAttribute("aria-controls")).toBe(navigation.id);
    expect(navigation.querySelectorAll("a")).toHaveLength(6);
    toggle.focus();
    expect(document.activeElement).toBe(toggle);
  });

  it("updates expanded state and closes after a navigation link is activated", () => {
    act(() => toggle.click());
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    act(() => {
      navigation.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    const homeLink = navigation.querySelector('a[href="/home"]');
    homeLink.focus();
    act(() => homeLink.click());
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(toggle);
  });

  it("closes on Escape and returns keyboard focus to the toggle", () => {
    act(() => toggle.click());
    const link = navigation.querySelector("a");
    link.focus();
    act(() => {
      link.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
      );
    });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(toggle);
  });

  it("marks the current route and keeps the logo link absolute", () => {
    const active = navigation.querySelector('a[href="/home"]');
    expect(active.getAttribute("aria-current")).toBe("page");
    expect(active.style.fontWeight).toBe("bold");
    expect(container.querySelector("a.logo").getAttribute("href")).toBe(
      settings.isSplash ? "/splash" : "/home"
    );
  });
});

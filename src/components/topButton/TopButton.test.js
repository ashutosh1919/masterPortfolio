import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TopButton from "./TopButton";

const theme = { text: "#001c55", body: "#edf9fe" };

describe("back-to-top button", () => {
  const originalScrollY = Object.getOwnPropertyDescriptor(window, "scrollY");

  beforeEach(() => {
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      writable: true,
      value: 0,
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "scrollY", originalScrollY);
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("updates visibility without replacing other listeners and cleans up on unmount", () => {
    const existing = vi.fn();
    const otherListener = vi.fn();
    const oldOnScroll = window.onscroll;
    window.onscroll = existing;
    window.addEventListener("scroll", otherListener);
    const add = vi.spyOn(window, "addEventListener");
    const remove = vi.spyOn(window, "removeEventListener");
    const { container, unmount } = render(<TopButton theme={theme} />);
    const button = container.querySelector("button");
    expect(button.style.visibility).toBe("hidden");
    expect(window.onscroll).toBe(existing);

    window.scrollY = 60;
    fireEvent.scroll(window);
    expect(button.style.visibility).toBe("visible");
    expect(otherListener).toHaveBeenCalledTimes(1);
    expect(existing).toHaveBeenCalledTimes(1);

    const listener = add.mock.calls.find(
      ([event, , options]) => event === "scroll" && options?.passive,
    )[1];
    unmount();
    expect(remove).toHaveBeenCalledWith("scroll", listener);
    fireEvent.scroll(window);
    expect(otherListener).toHaveBeenCalledTimes(2);
    expect(existing).toHaveBeenCalledTimes(2);
    window.removeEventListener("scroll", otherListener);
    window.onscroll = oldOnScroll;
  });

  it.each([
    [true, "instant"],
    [false, "smooth"],
  ])("respects reduced-motion preference %s", (reducedMotion, behavior) => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({ matches: reducedMotion })),
    );
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    window.scrollY = 60;
    const { getByRole } = render(<TopButton theme={theme} />);
    fireEvent.click(getByRole("button", { name: "Back to top" }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior });
  });
});

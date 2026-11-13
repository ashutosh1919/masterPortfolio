import React from "react";
import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Splash from "./Splash";

vi.mock("../../components/Loader/LoaderLogo.js", () => ({ default: () => <div>Logo</div> }));

describe("splash routing", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("redirects to home after the animation", () => {
    render(
      <MemoryRouter initialEntries={["/splash"]}>
        <Routes>
          <Route path="/splash" element={<Splash theme={{ splashBg: "#fff" }} />} />
          <Route path="/home" element={<div>Home page</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Logo")).not.toBeNull();
    act(() => vi.advanceTimersByTime(5500));
    expect(screen.getByText("Home page")).not.toBeNull();
  });

  it("clears the redirect timer when unmounted", () => {
    const { unmount } = render(
      <MemoryRouter><Splash theme={{ splashBg: "#fff" }} /></MemoryRouter>
    );
    expect(vi.getTimerCount()).toBe(1);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});

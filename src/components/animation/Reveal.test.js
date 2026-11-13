import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Fade, Flip } from "./Reveal";

const useReveal = vi.hoisted(() =>
  vi.fn(() => ({
    getProps: (props = {}) => ({ ...props, "data-reveal-test": "yes" }),
  })),
);
vi.mock("@awesome-reveal/react", () => ({ useReveal }));

afterEach(() => useReveal.mockClear());

describe("reveal compatibility", () => {
  it("animates a single DOM child without changing layout or its props", () => {
    const ref = React.createRef();
    const click = vi.fn();
    const { container } = render(
      <Fade left distance="40px" duration={500}>
        <button
          ref={ref}
          className="card"
          style={{ color: "red" }}
          onClick={click}
        >
          Open
        </button>
      </Fade>,
    );
    const button = screen.getByRole("button", { name: "Open" });
    expect(container.firstElementChild).toBe(button);
    expect(ref.current).toBe(button);
    expect(button.className).toBe("card");
    expect(button.style.color).toBe("red");
    expect(button.dataset.revealTest).toBe("yes");
    fireEvent.click(button);
    expect(click).toHaveBeenCalledOnce();
    expect(useReveal).toHaveBeenCalledWith({
      from: { opacity: 0, x: "calc(-1 * 40px)" },
      duration: 500,
    });
  });

  it("wraps multiple children and forwards flip keyframes", () => {
    const { container } = render(
      <Flip left duration={700}>
        <span>One</span>
        <span>Two</span>
      </Flip>,
    );
    expect(container.firstElementChild.dataset.revealTest).toBe("yes");
    expect(container.firstElementChild.children).toHaveLength(2);
    expect(useReveal).toHaveBeenCalledWith({
      duration: 700,
      keyframes: [
        { opacity: 0, transform: "perspective(400px) rotateY(-70deg)" },
        { opacity: 1, transform: "perspective(400px) rotateY(0deg)" },
      ],
    });
  });
});

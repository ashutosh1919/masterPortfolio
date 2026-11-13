import React from "react";
import { useReveal } from "@awesome-reveal/react";

// Animate a single DOM child directly: an extra wrapper changes its flex/grid
// sizing. Multiple children and custom components still get a safe wrapper.
function RevealChild({ children, ...options }) {
  const { getProps } = useReveal(options);
  if (React.isValidElement(children) && typeof children.type === "string") {
    return React.cloneElement(children, getProps(children.props));
  }
  return <div {...getProps()}>{children}</div>;
}

// Preserve the existing direction/distance API while respecting reduced motion
// and keyboard focus through @awesome-reveal/react.
export function Fade({
  children,
  top,
  bottom,
  left,
  right,
  distance = "24px",
  duration,
}) {
  const from = { opacity: 0 };
  if (left) from.x = `calc(-1 * ${distance})`;
  else if (right) from.x = distance;
  else if (top) from.y = `calc(-1 * ${distance})`;
  else if (bottom) from.y = distance;
  return (
    <RevealChild from={from} duration={duration}>
      {children}
    </RevealChild>
  );
}

export function Flip({ children, left, duration }) {
  const degrees = left ? -70 : 70;
  const keyframes = [
    { opacity: 0, transform: `perspective(400px) rotateY(${degrees}deg)` },
    { opacity: 1, transform: "perspective(400px) rotateY(0deg)" },
  ];
  return (
    <RevealChild keyframes={keyframes} duration={duration}>
      {children}
    </RevealChild>
  );
}

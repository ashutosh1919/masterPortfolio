import React, { useEffect, useState } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 30);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      id="topButton"
      aria-label="Back to top"
      title="Back to top"
      style={{
        color: hovered ? theme.text : theme.body,
        backgroundColor: hovered ? theme.body : theme.text,
        border: `solid 1px ${theme.text}`,
        visibility: visible ? "visible" : "hidden",
        "--top-button-focus": theme.text,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}

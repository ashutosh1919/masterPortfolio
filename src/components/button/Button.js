import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({ text, className, href, to, newTab, theme }) {
  const Anchor = to ? Link : "a";
  return (
    <div className={className}>
      <Anchor
        className="main-button"
        {...(to ? { to } : { href })}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
      >
        {text}
      </Anchor>
    </div>
  );
}

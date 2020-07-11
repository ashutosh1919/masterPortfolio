import React from "react";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
	const el = event.target;
	el.style.color = color;
	el.style.backgroundColor = bgColor;
}

const onMouseOut = (event, color, bgColor) => {
	const el = event.target;
	el.style.color = color;
	el.style.backgroundColor = bgColor;
}

export default function Button({ text, className, href, newTab, theme }) {
  return (
		<div className={className}>
			<a
				class="main-button"
				href={href}
				target={newTab && "_blank"}
				style={{
					color: theme.body,
					backgroundColor: theme.text,
          			border: `solid 1px ${theme.text}`
				}}
				onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
				onMouseOut={(event) => onMouseOut(event,theme.body, theme.text)}
			>
				{text}
			</a>
		</div>
	);
}

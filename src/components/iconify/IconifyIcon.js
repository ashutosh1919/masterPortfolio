import React from "react";

/**
 * Displays an Iconify icon based on the provided icon object and size.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.icon - The icon object containing fontAwesomeClassname and style.
 * @param {string} props.size - The font size for the icon.
 * @returns {JSX.Element} - The React element representing the IconifyIcon component.
 */
const IconifyIcon = ({ icon, size }) => {
  const fontSizeStyle = size ? { fontSize: size } : {};

  return (
    <span
      className="iconify bigger"
      data-icon={icon.fontAwesomeClassname}
      style={{ ...icon.style, ...fontSizeStyle }}
      data-inline="false"
    ></span>
  );
};

export default IconifyIcon;

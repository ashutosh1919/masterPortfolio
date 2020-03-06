import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to="/splash" tag={Link} className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">AshutoshHathidara</span>
            <span className="grey-color">/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink to="/home" tag={Link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" tag={Link}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" tag={Link}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" tag={Link}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/opensource" tag={Link}>
                Open Source
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" tag={Link}>
                Blogs
              </NavLink>
            </li>
            <li>
              <a href="/contact">Contact Me</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default Header;

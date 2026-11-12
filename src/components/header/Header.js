import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  state = { menuOpen: false };

  menuButton = React.createRef();

  toggleMenu = () => {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  };

  closeMenu = () => {
    this.setState({ menuOpen: false }, () => this.menuButton.current?.focus());
  };

  handleNavigationClick = (event) => {
    if (this.state.menuOpen && event.target.closest("a")) this.closeMenu();
  };

  handleKeyDown = (event) => {
    if (event.key === "Escape" && this.state.menuOpen) {
      event.preventDefault();
      this.closeMenu();
    }
  };

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header" onKeyDown={this.handleKeyDown}>
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <button
              ref={this.menuButton}
              className="menu-icon"
              type="button"
              aria-label="Toggle navigation menu"
              aria-controls="primary-navigation"
              aria-expanded={this.state.menuOpen}
              onClick={this.toggleMenu}
              style={{ color: theme.text }}
            >
              <span className="navicon" aria-hidden="true"></span>
            </button>
            <nav
              id="primary-navigation"
              className="menu"
              aria-label="Main navigation"
              style={{ backgroundColor: theme.body }}
              onClick={this.handleNavigationClick}
            >
              <ul>
                <li>
                  <NavLink
                    to="/home"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/education"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/experience"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/opensource"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Open Source
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Contact Me
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;

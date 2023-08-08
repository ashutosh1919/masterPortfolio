import React, { Component } from "react";
import "./ToggleSwitch.scss";
import { lightTheme } from "../../theme";
import styled from "styled-components";

export const ToggleDiv = styled.div`
  margin-top: 40px;
  margin-right: 5px;
  float: right;
  display: flex;
  flex-direction: row;
`;

export const SunSvg = styled.svg`
  margin-right: 10px;
`;

export const MoonSvg = styled.svg`
  margin-left: 10px;
`;

export default class ToggleSwitch extends Component {
  render() {
    const theme = this.props.theme;
    const isOn = this.props.theme === lightTheme ? false : true;
    const back = theme.text;
    const butt = theme.body;
    return (
      <ToggleDiv>
        <SunSvg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={back}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </SunSvg>
        <input
          className="react-switch-checkbox"
          checked={isOn}
          onChange={this.props.onToggle}
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: back }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span
            style={{ background: butt }}
            className={`react-switch-button`}
          />
        </label>
        <MoonSvg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={back}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </MoonSvg>
      </ToggleDiv>
    );
  }
}

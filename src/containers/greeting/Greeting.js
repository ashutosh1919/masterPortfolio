import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  const [profilePicIndex, setProfilePicIndex] = useState(0);
  const profilePics = [
    require("../../assests/images/profile-pic.png"),
    require("../../assests/images/profile-pic(2).png"),
    // Add more profile pictures here if needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProfilePicIndex((prevIndex) => (prevIndex + 1) % profilePics.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [profilePics.length]);

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.text }}
              >
                {greeting.subTitle1}
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle2}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="profile-pic" src={profilePics[profilePicIndex]} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

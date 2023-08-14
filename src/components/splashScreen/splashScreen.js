import React, { useEffect, useState } from "react";
import "./splashScreen.css";

function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      animateName();
    }, 1000); // Set a delay of 3 seconds for the loading animation
  }, []);

  const animateName = () => {
    const myName = "Syamil's Portfolio";
    let i = 0;
    const interval = setInterval(() => {
      if (i < myName.length) {
        setName((prevName) => prevName + myName[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust the interval to control character popping speed
  };

  return (
    <div className="SplashScreen">
      {loading ? (
        <div className="loading-container">
          <div className="loading-circle"></div>
        </div>
      ) : (
        <div className="name-container">{name}</div>
      )}
    </div>
  );
}

export default SplashScreen;

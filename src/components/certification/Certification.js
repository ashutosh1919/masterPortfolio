import React from "react";

const Certification = ({ title, organization, icon, topics }) => {
  return (
    <div className="certification">
      <div className="certification-header">
        <img
          src={icon}
          alt="Certification Icon"
          className="certification-icon"
        />
        <div className="certification-details">
          <h2>{title}</h2>
          <p>{organization}</p>
        </div>
      </div>
      <div className="certification-content">
        <h3>Topics Studied:</h3>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certification;

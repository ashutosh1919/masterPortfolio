import React from "react";
import "./Podcast.css";

export default function Podcast({ section }) {
  if (!section) return null;
  const podcasts = Array.isArray(section.podcast) ? section.podcast : [];
  return (
    <div className="main">
      <div className="podcast-header">
        <h1 className="podcast-header-title">{section.title}</h1>
        <p className="subTitle podcast-header-subtitle">{section.subtitle}</p>
      </div>
      <div className="podcast-main-div">
        {podcasts.map((url, index) => (
          <div key={`${url}-${index}`}>
            <iframe
              title={`Podcast ${index + 1}`}
              className="podcast"
              src={url}
              frameBorder="0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

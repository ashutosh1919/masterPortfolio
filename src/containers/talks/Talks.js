import React from "react";
import "./Talks.css";
import TalkCard from "../../components/talkCard/TalkCard";

export default function Talks({ section }) {
  if (!section) return null;
  const talks = Array.isArray(section.talks) ? section.talks : [];
  return (
    <div className="main" id="talks">
      <div className="talk-header">
        <h1 className="talk-header-title">{section.title}</h1>
        <p className="subTitle talk-header-subtitle">{section.subtitle}</p>
        {talks.map((talk, index) => (
          <TalkCard key={`${talk.title}-${index}`} talkDetails={talk} />
        ))}
      </div>
    </div>
  );
}

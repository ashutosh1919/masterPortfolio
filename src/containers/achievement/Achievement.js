import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";

// Optional legacy section: callers can supply their own configuration.
export default function Achievement({ section }) {
  if (!section) return null;
  const cards = Array.isArray(section.achivementsCards)
    ? section.achivementsCards
    : [];
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{section.title}</h1>
          <p className="subTitle achievement-subtitle">{section.subtitle}</p>
        </div>
        <div className="achievement-cards-div">
          {cards.map((card, index) => (
            <AchivementCard
              key={`${card.title}-${index}`}
              cardInfo={{
                title: card.title,
                description: card.subtitle,
                image: card.image,
                footer: card.footerLink,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

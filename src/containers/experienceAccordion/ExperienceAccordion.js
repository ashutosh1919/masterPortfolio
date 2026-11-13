import React, { useRef } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

// Native disclosures preserve independent open panels and keyboard activation
// without the legacy accordion library's React 16-only dependencies.
export default function ExperienceAccordion({ sections, theme }) {
  const accordion = useRef(null);

  const handleKeyDown = (event) => {
    if (!event.target.matches("summary")) return;
    const summaries = Array.from(accordion.current.querySelectorAll("summary"));
    const index = summaries.indexOf(event.target);
    let next;
    if (event.key === "Home") next = 0;
    else if (event.key === "End") next = summaries.length - 1;
    else if (event.key === "ArrowDown") next = Math.min(index + 1, summaries.length - 1);
    else if (event.key === "ArrowUp") next = Math.max(index - 1, 0);
    if (next !== undefined && summaries[next]) {
      event.preventDefault();
      summaries[next].focus();
    }
  };

  return (
    <div
      ref={accordion}
      className="experience-accord"
      onKeyDown={handleKeyDown}
      style={{
        "--accordion-background": theme.body,
        "--accordion-border": theme.headerColor,
        "--accordion-text": theme.text,
        "--accordion-hover": theme.secondaryText,
      }}
    >
      {sections.map((section) => (
        <details className="accord-panel" key={section.title}>
          <summary>{section.title}</summary>
          <div className="accord-content">
            {section.experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.title}-${experience.company}-${index}`}
                index={index}
                totalCards={section.experiences.length}
                experience={experience}
                theme={theme}
              />
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

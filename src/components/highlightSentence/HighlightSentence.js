import React from "react";
import { getTechColor } from "../../shared/tools";
import "../../containers/skills/Skills.css";

export const HighlightedSentence = ({ sentence, allTools, theme }) => {
  const highlightWords = (sentence, allTools) => {
    const words = sentence.split(" ");
    return words.map((word, index) => {
      const isTool = allTools.includes(word);
      const color = getTechColor(word);

      return (
        <span
          key={index}
          style={{
            fontWeight: isTool ? "bold" : "normal",
            color: isTool ? color : theme.secondaryText,
          }}
        >
          {word}
          {index < words.length - 1 && " "} {/* Add space between words */}
        </span>
      );
    });
  };

  return <li className="text">{highlightWords(sentence, allTools)}</li>;
};

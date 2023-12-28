import React from "react";
import { getTechColor } from "../../shared/tools";
export const HighlightedSentence = ({ sentence, allTools, theme }) => {
  const highlightWords = (sentence, allTools) => {
    const words = sentence.split(" ");
    return words.map((word, index) => {
      const isTool = allTools.includes(word);
      const color = getTechColor(word);
      console.log(color);

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

  return (
    <li style={{ color: theme.secondaryText }}>
      {highlightWords(sentence, allTools)}
    </li>
  );
};

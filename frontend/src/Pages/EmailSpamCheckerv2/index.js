import React, { useState } from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const EmailSpamCheckerv2 = () => {
  const [emailText, setEmailText] = useState("");
  const spamWords = ["free", "offer", "winner", "guaranteed", "click"]; // Add more spam words as needed

  const highlightSpam = (text) => {
    let highlightedText = text;
    spamWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span style={{ backgroundColor: 'yellow' }}>${word}</span>`
      );
    });
    return highlightedText;
  };

  const handleInputChange = (event) => {
    setEmailText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={emailText}
        onChange={handleInputChange}
        placeholder="Enter email text..."
        rows="10"
        cols="50"
      />
      <div>
        <SyntaxHighlighter language="htmlbars" style={docco}>
          {highlightSpam(emailText)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default EmailSpamCheckerv2;

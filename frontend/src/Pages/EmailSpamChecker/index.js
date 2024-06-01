import React, { useState, useEffect } from "react";
import { TextField, Typography, Box, Container } from "@mui/material";
import { Button, Img, Input, Line, Text } from "components";

function EmailSpamChecker() {
  const [emailText, setEmailText] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [qualityScore, setQualityScore] = useState(null);
  const spamWords = [
    "free",
    "offer",
    "winner",
    "congratulations",
    "click",
    "opportunity",
    "prize",
    "claim",
    "urgent",
    "exclusive",
    "limited",
    "special",
    "discount",
    "promotion",
    "buy now",
    "act now",
    "subscribe",
    "won",
    "selected",
    "guarantee",
    "risk-free",
    "cheap",
    "bargain",
    "best price",
    "save",
    "earn",
    "income",
    "investment",
    "credit",
    "loans",
    "million",
    "billion",
    "cash",
    "pills",
    "pharmacy",
    "meds",
    "weight loss",
    "viagra",
    "phentermine",
    "casino",
    "betting",
    "gambling",
    "luxury",
    "rolex",
    "rich",
    "deal",
    "winner",
    "selected",
    "exclusive offer",
    "limited time",
    "urgent response",
    "risk free",
    "no credit check",
    "pre-approved",
    "satisfaction guaranteed",
    "not spam",
    "extra cash",
    "extra income",
    "easy payment",
    "financial freedom",
    "get paid",
    "work from home",
    "job offer",
    "salary increase",
    "no experience",
    "no fees",
    "discount rate",
    "lower rates",
    "lowest price",
    "price reduction",
    "special promotion",
    "all natural",
    "certified",
    "organic",
    "pure",
    "fantastic deal",
    "great offer",
    "once in a lifetime",
    "one time",
    "amazing",
    "miraculous",
    "incredible",
    "revolutionary",
    "breakthrough",
    "magic",
    "mystery",
    "secret",
    "unlock",
    "hidden",
    "unseen",
    "unexpected",
    "surprise",
    "amazing discovery",
  ];

  useEffect(() => {
    document.title = "Spam Checker: Free Email Deliverability Test";
  }, []);
  const calculateScore = (text) => {
    // Simple scoring logic, can be improved
    let score = 100;
    spamWords.forEach((word) => {
      if (text.toLowerCase().includes(word)) {
        score -= 10; // Decrease score for each spam word found
      }
    });
    return Math.max(score, 0); // Ensure score is not negative
  };

  // const highlightSpamWords = (text) => {
  //   let highlighted = text;
  //   spamWords.forEach((word) => {
  //     const regex = new RegExp(word, "gi");
  //     highlighted = highlighted.replace(regex, `<mark>${word}</mark>`);
  //   });
  //   return highlighted;
  // };
  const highlightSpamWords = (text) => {
    let highlighted = text;

    // Replace newline characters with <br> tags
    highlighted = highlighted.replace(/\n/g, "<br>");

    // Iterate over each spam word
    spamWords.forEach((word) => {
      // Create a case-insensitive regular expression for the word
      const regex = new RegExp(word, "gi");
      // Replace each occurrence of the word with a highlighted version in red color
      highlighted = highlighted.replace(
        regex,
        `<mark style="background-color: #FF7F7F; color:white; padding:5px;">${word}</mark>`
      );
    });

    return highlighted;
  };

  useEffect(() => {
    // Trigger email checking when the email text changes
    checkEmail();
    console.log(emailText);
  }, [emailText]);

  const checkEmail = () => {
    const score = calculateScore(emailText);
    setQualityScore(score);
    const highlighted = highlightSpamWords(emailText);
    setHighlightedText(highlighted);
  };

  const data = `
  
  ssfsdf
  sdfsdf



  sdfsdf
  `;

  return (
    <div>
      <header className="bg-white-A700 flex md:gap-10 items-center justify-between p-5 md:px-5 rounded-[20px] shadow-bs1 w-full">
        <div className="flex flex-row font-dmserifdisplay gap-1.5 items-center justify-center w-auto">
          <Img
            className="h-6 md:h-auto object-cover w-5"
            src="images/img_.png"
            alt="One"
          />
          <Text
            className="bg-clip-text capitalize text-transparent text-xl w-auto"
            size="txtDMSerifDisplayRegular20"
            style={{ color: "#f68714" }}
          >
            Email warmup
          </Text>
        </div>

        <Button
          className="cursor-pointer flex items-center justify-center min-w-[130px]"
          rightIcon={
            <Img
              className="h-4 ml-1 my-px"
              src="images/img_icfluentarrowdown24filled_1.svg"
              alt="ic_fluent_arrow_down_24_filled 1"
            />
          }
          shape="round"
          color="purple_A700_amber_400"
        >
          <div className="font-poppins font-semibold text-center text-xs">
            Get Started
          </div>
        </Button>
      </header>
      <Container
        maxWidth="xl"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <h1 style={{ fontSize: "26px", fontWeight: "700" }}>Spam Checker</h1>
        <p>
          Copy/Past an email message to detect and remove{" "}
          <span style={{ color: "blue" }}>spam words.</span>
        </p>
        <Box
          sx={{ maxWidth: 700, mx: "auto", my: 4 }}
          display="flex"
          // height="100px"
          boxShadow={3}
        >
          <TextField
            label="Email Text"
            multiline
            rows={15}
            fullWidth
            variant="outlined"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            border="none"
          />
          {qualityScore !== null && (
            <Typography variant="h6" sx={{ mt: 2 }}>
              Email Quality Score: {qualityScore}
            </Typography>
          )}
        </Box>
        <div>
          <Typography variant="h5" sx={{ textAlign: "center", mt: 4, mb: 3 }}>
            Email Spam Word Marked Red
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                maxWidth: "600px",
                border: "1px solid #ddd", // subtle border
                borderRadius: "10px", // rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // shadow for elevated effect
                padding: "20px", // padding inside the box
                textAlign: "left",
                backgroundColor: "#fff", // white background
                marginTop: "10px",
              }}
            >
              {highlightedText && (
                <Typography
                  variant="body1"
                  sx={{ mt: 2 }}
                  dangerouslySetInnerHTML={{ __html: highlightedText }}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default EmailSpamChecker;

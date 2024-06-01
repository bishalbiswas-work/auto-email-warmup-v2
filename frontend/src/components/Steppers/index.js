import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepConnector } from "@mui/material";

import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const steps = ["Email Address", "Email Provider"];

// function CustomStepIcon(props: StepIconProps) {
//   const { active, completed } = props;

//   return (
//     <Box
//       sx={{
//         color: completed ? "#ffcf33" : active ? "#ffcf33" : "grey",
//       }}
//     >
//       {completed ? <CheckCircleIcon /> : <RadioButtonCheckedIcon />}
//     </Box>
//   );
// }

// function CustomStepIcon(props) {
//   const { active, completed } = props;

//   return (
//     <Box
//       sx={{
//         color: completed ? "#ffcf33" : active ? "#ffcf33" : "grey", // Gold for active/completed, grey otherwise
//       }}
//     >
//       {completed ? <CheckCircleIcon /> : <RadioButtonCheckedIcon />}
//     </Box>
//   );
// }

// Custom connector to style the line between steps
// const CustomConnector = () => (
//   <StepConnector
//     sx={{
//       "&.MuiStepConnector-line": {
//         borderColor: "#ffcf33", // Yellow color for the line
//         borderWidth: 2, // Making the line thicker
//       },
//     }}
//   />
// );
export default function Steppers({ step }) {
  // return (
  // <Box sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
  //   <Stepper activeStep={step} alternativeLabel>
  //     {steps.map((label) => (
  //       <Step key={label}>
  //         <StepLabel
  //           StepIconComponent={CustomStepIcon}
  //           sx={{
  //             ".MuiStepLabel-label": {
  //               // Targeting the text label
  //               color: "secondary.main", // Default text color
  //               "&.Mui-active": {
  //                 color: "#ffcf33", // Active text color
  //               },
  //               "&.Mui-completed": {
  //                 color: "#ffcf33", // Completed text color
  //               },
  //             },
  //           }}
  //         >
  //           {label}
  //         </StepLabel>
  //       </Step>
  //     ))}
  //   </Stepper>
  // </Box>
  // );
  ////////////////////////
  // const containerStyle = {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "100%",
  // };

  // const divStyle = {
  //   // width: "40%",
  //   width: "fit-content",
  //   textAlign: "center",
  // };

  // const lineStyle = {
  //   borderBottom: "3px solid #ff7f21",
  //   width: "70%",
  // };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const divStyle = {
    position: "relative", // Set position relative for the container div
    width: "fit-content",
    textAlign: "center",
    marginBottom: "20px", // Add some bottom margin for spacing
  };

  const textStyle = {
    position: "absolute", // Position text absolutely within its relative parent
    width: "100px", // Make the text width equal to its container
    top: "100%", // Position the top of the text just below the image
    left: "-30px", // Align the text left edge with the container
    color: "#ff7f21", // Set the text color (optional)
    fontSize: "0.8rem",
    paddingTop: "10px",
  };
  const textStyle2 = {
    position: "absolute", // Position text absolutely within its relative parent
    width: "100px", // Make the text width equal to its container
    top: "100%", // Position the top of the text just below the image
    left: "-30px", // Align the text left edge with the container
    color: `${step === 1 ? "#d5d5d5" : "#ff7f21"}`, // Set the text color (optional)
    fontSize: "0.8rem",
    paddingTop: "10px",
  };

  const lineStyle = {
    borderBottom: `3px solid ${step === 1 ? "#d5d5d5" : "#ff7f21"}`,
    width: "70%",
    marginBottom: "20px",
  };

  return (
    // <div style={containerStyle}>
    //   <div style={divStyle}>
    //     <img src="images/selector-1.png" alt="Image 1" />
    //   </div>
    //   <div style={lineStyle}></div>
    //   <div style={divStyle}>
    //     <img src="images/selector-2.png" alt="Image 2" />
    //   </div>
    // </div>

    <div style={containerStyle}>
      <div style={divStyle}>
        {step == 2 && <img src="images/selector-1.png" alt="Image 1" />}
        {step == 1 && <img src="images/selector-2.png" alt="Image 2" />}
        <p style={textStyle}>Email address</p>
      </div>
      <div style={lineStyle}></div>
      <div style={divStyle}>
        {step == 2 && <img src="images/selector-2.png" alt="Image 2" />}
        {step == 1 && <img src="images/empty-icon.png" alt="Image 2" />}

        <p style={textStyle2}>Email provider</p>
      </div>
    </div>
  );
}

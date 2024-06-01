import React, { Component, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import { styled } from "@mui/material/styles";

// Auth
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";

//
import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
// import Signup_Sidesection from "../../Components/Signup_Sidesection";

//
// import SelectLanguage from "../Onboarding/SelectLanguage";

//
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";

//
import { useNavigate } from "react-router-dom";

function GoogleSignupv2() {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  // const { isLoggedIn, login } = dataContext.;

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "end",
    gridGap: "0", // Added this line to remove the gap
  };

  const imageStyle = {
    width: "100%",
    height: "100vh", // set to viewport height
    objectFit: "contain",
    display: "block", // this ensures that the image doesn't have any margin or spacing around it
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [value, setvalue] = useState("");
  const handelClick = async () => {
    signInWithPopup(auth, provider).then((data) => {
      setvalue(data.user.email);
      console.log(data.user.uid); // This will print the UID to the console.

      dataContext.setUidFunction({ data: data.user.uid });
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName);

      dataContext.login();
      dataContext.setonboardingUserDetails({
        email: data.user.email,
        name: data.user.displayName,
      });
    });
    // await dataContext.deleteUidIfExists({ uid: data.user.uid });
    navigate("/extract-data");
  };

  useEffect(() => {
    setvalue(localStorage.getItem("email"));

    if (dataContext.isLoggedIn) {
      console.log(dataContext.isLoggedIn);

      // navigate("/onboarding/selectlanguage");

      // return <Redirect to="/onboarding/selectlanguage" />;
    }
  });

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center w-full h-full">
        <div className=" mx-auto p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
              <img
                className="md:hidden"
                style={{ width: "800px" }} // Use inline styles to enforce width
                src="/assets/blogbuild.png"
                alt="Blog Build"
              />
            </div>
            <div style={{ width: "100px" }}></div>
            <div className="w-96 bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Just one last step!</h2>
              <p className="text-gray-500 mb-8">
                Signup to help us create amazing blogs for you 😊
              </p>
              <div>
                {/* <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="+31 | Enter your number"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                    Go
                  </button>
                </div> */}
                <div className="flex items-center justify-center">
                  {/* <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded border border-gray-300"></button>{" "} */}
                  <GoogleButton
                    onClick={handelClick}
                    variant="contained"
                    color="primary"
                  >
                    Google SignUp
                  </GoogleButton>
                </div>
                {/* Add more form fields and style as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleSignupv2;

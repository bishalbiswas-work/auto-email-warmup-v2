import React from "react";
import { useEffect, useState, useRef } from "react";
import { Button, Img, Input, Line, Text } from "components";
import HomeProcessingOneStackthirty from "components/HomeProcessingOneStackthirty";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  GoogleLoginButton,
  MicrosoftLoginButton,
} from "react-social-login-buttons";

import {
  auth,
  microsoftProvider,
  googleProvider,
} from "../../Pages/Auth/Firebase";
import { signInWithPopup } from "firebase/auth";

import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const token =
  "mj8p0rvjgzkqv2j1a16rmzhf8s5rcdesq2ro4dbx7fg6q8x6j64scklkulz66ht6x9rwrh2ly9ua6pp3hswqrjfjglw7v65hxsj6";
const Dashboardv2 = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const texts = [
    "Analyzing data: Initializing...",
    "Analyzing data: Gathering resources...",
    "Analyzing data: Processing information...",
    "Analyzing data: Finalizing analysis...",
    "Analyzing data: Checking everything...",
    "Analysis complete!",
  ];

  const googleLoginButtonRef = useRef(null);
  const intervalTime = 1000; // 3 seconds
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showData, setShowData] = useState(false);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       //   navigate("/automated-email-warm-up");
  //     }, 8000);

  //     return () => clearInterval(interval);
  //   }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    // Check if email exists in localStorage when component mounts
    const storedEmail = localStorage.getItem("email");
    const storedName = localStorage.getItem("name");
    const storedUid = localStorage.getItem("uid"); // Assuming uid is also stored in localStorage
    const status = localStorage.getItem("status"); // Assuming uid is also stored in localStorage

    if (status && storedEmail && storedName && storedUid) {
      setEmail(storedEmail);
      setName(storedName);
      setUid(storedUid);
      setShowData(true);
    } else {
      console.log("submited : ", storedEmail);
      const submitData = {
        email: storedEmail,
        interval: 8440,
        numberOfEmails: 300,
      };
      startEmailWarmUp(submitData);
      setShowData(true);
      localStorage.setItem("status", true);
    }
  }, []);
  const [emailTemp, setEmailTemp] = useState("");

  const handleEmailChange = (e) => {
    if (e && e.target) {
      setEmailTemp(e.target.value);
    } else {
      console.error("Event or target is undefined");
    }
  };

  const handleWarmup = async () => {
    setEmail(emailTemp);
    setName(emailTemp);
    setUid("");
    const submitData = {
      email: emailTemp,
      interval: 10,
      numberOfEmails: 2,
    };
    startEmailWarmUp(submitData);
    setShowData(true);
  };
  const handleLoginGoogle = async () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      setEmail(data.user.email);
      setName(data.user.displayName);
      setUid(data.user.uid);

      console.log("uid : " + data.user.uid, "email : " + data.user.email);

      dataContext.setUidFunction({ data: data.user.uid });
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName);
      localStorage.setItem("uid", data.user.uid);

      dataContext.login();
      dataContext.setonboardingUserDetails({
        email: data.user.email,
        name: data.user.displayName,
        uid: data.user.uid,
      });
      const submitData = {
        email: data.user.email,
        interval: 10,
        numberOfEmails: 2,
      };
      startEmailWarmUp(submitData);
      setShowData(true);
    });
  };
  const handleLoginMicrosoft = async () => {
    signInWithPopup(auth, microsoftProvider).then((data) => {
      console.log(data);

      // const credential = OAuthProvider.credentialFromResult(data);
      // console.log(credential);
      // const accessToken = credential.accessToken;
      // const idToken = credential.idToken;
      // setEmail(data.user.email);
      // setName(data.user.displayName);
      // setUid(data.user.uid);

      // console.log("uid : " + data.user.uid, "email : " + data.user.email);

      // dataContext.setUidFunction({ data: data.user.uid });
      // localStorage.setItem("email", data.user.email);
      // localStorage.setItem("name", data.user.displayName);
      // localStorage.setItem("uid", data.user.uid);

      // dataContext.login();
      // dataContext.setonboardingUserDetails({
      //   email: data.user.email,
      //   name: data.user.displayName,
      //   uid: data.user.uid,
      // });
      // const submitData = {
      //   email: data.user.email,
      //   interval: 10,
      //   numberOfEmails: 2,
      // };
      // startEmailWarmUp(submitData);
      // setShowData(true);
    });
  };
  // This will start the warmup process
  const startEmailWarmUp = async (submitData) => {
    try {
      // Retrieve the token from localStorage or state
      //   const token = localStorage.getItem("token"); // Replace with your token source

      const response = await axios.post(
        `${API_BASE_URL}/api/warmup`,
        submitData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   // Set a timeout to click the button after 1 second
  //   const timer = setTimeout(() => {
  //     if (googleLoginButtonRef.current) {
  //       googleLoginButtonRef.current.click();
  //     }
  //   }, 1000); // 1000 milliseconds = 1 second

  //   // Clear the timeout if the component unmounts
  //   return () => clearTimeout(timer);
  // }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter sm:gap-10 md:gap-10 gap-[132px] items-center justify-start mx-auto p-8 sm:px-5 w-full">
        {!email && (
          <header className="bg-white-A700 flex md:gap-10 items-center justify-between p-5 md:px-5 rounded-[20px] shadow-bs1 w-full">
            <div className="flex flex-row font-dmserifdisplay gap-1.5 items-center justify-center w-auto">
              <Img
                className="h-6 md:h-auto object-fit "
                src="images2/img_.png"
                alt="Three"
              />
              <Text
                className="bg-clip-text capitalize text-transparent text-xl w-auto"
                size="txtDMSerifDisplayRegular20"
                style={{ color: "#f68714" }}
              >
                Email warmup
              </Text>
            </div>

            {/* <Button
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
            </Button> */}
          </header>
        )}
        {email && (
          <div className="top-[0rem] left-[0rem] bg-base-background-white shadow-[0px_-1px_0px_#f1f1f1_inset] w-[100%] flex flex-row items-center justify-between py-[1.25rem] px-[2.25rem] box-border">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[1.5rem]">
              <div className="shrink-0 flex flex-row items-center justify-start">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[0.5rem]">
                  <div className="relative leading-[150%] font-black">
                    Hello, {name ? name : ""}!
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover hidden opacity-[0.9]"
                    alt=""
                    src="/arrowdropdown@2x.png"
                  />
                </div>
              </div>
              <img
                className="relative w-[7rem] h-[2rem] shrink-0 object-cover hidden"
                alt=""
                src="/avatar-stack@2x.png"
              />
            </div>
            {/* <div className="shrink-0 flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem] text-base-background-white">
              <div
                className="rounded-13xl bg-p1 overflow-hidden flex flex-row items-center justify-start py-[0.75rem] pr-[0.75rem] pl-[1.25rem] gap-[0.5rem]"
                style={{
                  background: "#FF3333",
                  color: "white",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/automated-email-warm-up");
                }}
              >
                <div className="relative leading-[100%] font-medium">
                  Add new client
                </div>
                <img
                  className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/add@2x.png"
                />
                <div className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover">
                  {" "}
                  &#x2192;
                </div>
              </div>
              <div className="rounded-13xl bg-base-background-white overflow-hidden flex flex-row items-center justify-start p-[0.75rem] border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/notificationsnone@2x.png"
                />
              </div>
              <img
                className="relative w-[2.5rem] h-[2.5rem] object-cover"
                alt=""
                src="/avatar-single@2x.png"
              />
            </div> */}
          </div>
        )}

        <div className="bg-white-A700 flex flex-col gap-12 items-center justify-center max-w-[871px] mb-[212px] mx-auto md:px-5 px-[60px] py-[60px] rounded-[20px] shadow-bs2 w-full">
          {showData && (
            <div>
              <div className="flex flex-col gap-6 items-center justify-center w-full mb-[50px]">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtInterRegular16"
                >
                  {/* Analysing your Mailbox health score.......⚙️ */}
                  Congrats! Your Email :{" "}
                  <span style={{ fontWeight: "700" }}>
                    {email ? email : ""}
                  </span>{" "}
                  Warm up Process has Began 🥳
                </Text>
                <Line className="bg-black-900_0c h-px w-full" />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-end justify-center w-auto md:w-full">
                {/* <HomeProcessingOneStackthirty className="h-[100px] md:h-[88px] relative w-[33%] md:w-full" /> */}
                <div className="h-[100px] md:h-[88px] relative w-[33%] md:w-full">
                  <img
                    src="images3/meter1.png"
                    // style={{ marginTop: "-30px" }}
                  />
                </div>
                <div className="flex flex-col gap-10 items-center justify-center w-auto">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[208px] rounded-lg text-base text-center"
                    color="red_500_23"
                    size="sm"
                    //   variant="fill"
                    style={{
                      color: "#f68714",
                      backgroundColor: "rgba(255, 127, 127, 0.3)",
                    }}
                  >
                    <>Health score -&gt; 65%</>
                  </Button>

                  <div className="flex flex-row flex-wrap font-manrope gap-4 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images3/Vector(2).png"
                        alt="frame"
                      />
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        SPF
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images3/Vector(2).png"
                        alt="frame"
                      />
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        DKIM
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images3/Vector(2).png"
                        alt="frame"
                      />
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        DMARC
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images3/Vector(2).png"
                        alt="frame_One"
                      />
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        Not blacklisted
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[208px] rounded-lg text-base text-center mt-[20px]"
                  color="red_500_23"
                  size="sm"
                  //   variant="fill"
                  style={{
                    color: "lightred",
                    fontSize: "10px",
                    backgroundColor: "rgba(255, 127, 127, 0.1)",
                  }}
                >
                  <>Restart WarmUp Process</>
                </Button>
              </div> */}
            </div>
          )}
          {!showData && (
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16"
              >
                Thanks for choosing us!
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16"
              >
                Plase connect your account so we can start the email warmup
                process!
              </Text>
              <Line className="bg-black-900_0c h-px w-full" />

              {/* <div style={{ width: "100%" }}>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <input
                    name="fieldbox"
                    placeholder="Enter your email"
                    className="font-lato p-0 placeholder:text-gray-600 text-left text-xs w-full"
                    wrapClassName="border border-gray-200 border-solid flex-1 sm:flex-1 w-[76%] sm:w-full"
                    type="email"
                    value={emailTemp}
                    onChange={handleEmailChange}
                    style={{
                      padding: "10px",
                      borderRadius: "15px",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                    }}
                  ></input>
                  <Button
                    className="cursor-pointer flex h-[51px] items-center justify-center rounded-[25px] px-[10px] w-[200px]"
                    rightIcon={
                      <Img
                        className="h-4 mb-0.5 ml-1"
                        src="images2/img_frame_white_a700.svg"
                        alt="Frame"
                        style={{ paddingRight: "10px" }}
                      />
                    }
                    size="lg"
                    color="purple_A700_amber_400"
                    onClick={handleWarmup}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="font-poppins font-semibold text-center text-xs px-[20px]">
                      Warm up
                    </div>
                  </Button>
                </div>
              </div> */}
              {/* <div
                ref={googleLoginButtonRef} // Attach the ref to the wrapper div
                onClick={() => {
                  handleLoginGoogle();
                }}
                style={{ cursor: "pointer" }} // Optional: to show pointer cursor on hover
              > */}
              <GoogleLoginButton
                onClick={() => {
                  handleLoginGoogle();
                }}
              />
              {/* </div> */}
              {/* <MicrosoftLoginButton
                onClick={() => {
                  handleLoginMicrosoft();
                }}
              /> */}
              {/* <Line className="bg-black-900_0c h-px w-full" /> */}
            </div>
          )}
          {/* {!showData && (
            <div
              style={{
                width: "100%",
                backgroundColor: "#ddd",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  height: "20px",
                  width: `${progress}%`,
                  backgroundColor: "#F0C419",
                  borderRadius: "20px",
                }}
              />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Dashboardv2;

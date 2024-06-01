import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  Switch,
  Text,
} from "components";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
const LandingPagev2 = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  // const handleNext = () => {
  //   navigate("/extract-data");
  // };
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNext = async () => {
    // Get the email from the input

    const name = email.substring(0, email.lastIndexOf("@"));

    // Define a default uid
    const uid = 0;

    // Save to local storage
    localStorage.setItem("email", email);
    localStorage.setItem("status", false);
    localStorage.setItem("name", name);
    localStorage.setItem("uid", uid.toString());
    console.log(email);
    await dataContext.setEmail(email);
    await dataContext.emailSignup(email);
    navigate("/email-warmup");
    // ... rest of your handleNext logic
  };
  // Initialize 8 useState hooks
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToggled(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  const [state7, setState7] = useState(false);
  const [state8, setState8] = useState(false);
  // Counter to keep track of the number of toggles
  const [toggleCount, setToggleCount] = useState(0);

  // useEffect(() => {
  //   // Function to toggle states
  //   const toggleStates = () => {
  //     // Increment the toggle count
  //     setToggleCount((prevCount) => prevCount + 1);

  //     // Calculate the next active state index
  //     const nextIndex = toggleCount % 7;

  //     // Reset all states to false
  //     setState1(false);
  //     setState2(false);
  //     setState3(false);
  //     setState4(false);
  //     setState5(false);
  //     setState6(false);
  //     setState7(false);
  //     setState8(false);

  //     // Set the next state to true
  //     switch (nextIndex) {
  //       case 0:
  //         setState1(true);
  //         break;
  //       case 1:
  //         setState2(true);
  //         break;
  //       case 2:
  //         setState3(true);
  //         break;
  //       case 3:
  //         setState4(true);
  //         break;
  //       case 4:
  //         setState5(true);
  //         break;
  //       case 5:
  //         setState6(true);
  //         break;
  //       case 6:
  //         setState7(true);
  //         break;
  //       case 7:
  //         setState8(true);
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  //   let interval;

  //   interval = setInterval(toggleStates, 500);

  //   // if (toggleCount < 8) {
  //   //   // Set interval to toggle states every 3 seconds
  //   //   interval = setInterval(toggleStates, 3000);
  //   // } else {
  //   //   // Once all states have been toggled, keep state8 true forever
  //   //   setState8(true);
  //   // }

  //   // Clear interval on unmount
  //   return () => clearInterval(interval);
  // }, [toggleCount]); // Updated dependency array

  // This used to change the states of images
  useEffect(() => {
    const toggleStates = () => {
      const nextIndex = (toggleCount % 7) + 1; // Adjust for 8 states

      // Set only the next state to true
      setState1(nextIndex === 1);
      setState2(nextIndex === 2);
      setState3(nextIndex === 3);
      setState4(nextIndex === 4);
      setState5(nextIndex === 5);
      setState6(nextIndex === 6);
      setState7(nextIndex === 7);
      // setState8(nextIndex === 8);

      setToggleCount((prevCount) => prevCount + 1);
    };

    const interval = setInterval(toggleStates, 100);

    return () => clearInterval(interval);
  }, [toggleCount]);

  return (
    <>
      <div className="bg-gradient3  flex flex-col font-inter gap-2 items-center justify-end mx-auto pt-8 w-full">
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
              Auto-warmup
            </Text>
          </div>
          <div>
            <Link to="/">
              <Button style={{ color: "#f68714" }}>Home</Button>
            </Link>
            <a href="https://automatedemailwarmup.com/blog/">
              <Button style={{ color: "#f68714" }}>Blog</Button>
            </a>
            <a href="mailto:hello@automatedemailwarmup.com">
              <Button style={{ color: "#f68714" }}>Contact Us</Button>
            </a>
          </div>
          <div
            className="cursor-pointer flex items-center justify-center min-w-[130px]"
            rightIcon={
              <Img
                className="h-4 mb-0.5 ml-1"
                src="images2/img_icfluentarrowdown24filled_1_white_a700_16x16.svg"
                alt="ic_fluent_arrow_down_24_filled 1"
              />
            }
            shape="round"
            color="purple_A700_amber_400"
          >
            <div
              className="font-poppins font-semibold text-center text-xs"
              onClick={() => {
                navigate("/login");
              }}
              style={{
                // background: "#F0C419",
                background: "linear-gradient(to bottom, #ff7e5f, #feb47b)", // Button background color
                padding: "1px",
                color: "white",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  background: "white",
                  padding: "10px 20px",
                  borderRadius: "25px",
                  // Use background for the gradient and apply it to the text
                  // background: "linear-gradient(to bottom, #ff7e5f, #feb47b)",
                  // WebkitBackgroundClip: "text",
                  color: " #feb47b", // Make the text color transparent to reveal the background
                  // display: "inline-block", // Needed to apply padding and border-radius effectively
                }}
              >
                Login
              </div>
            </div>
            {/* <div
              onClick={() => {
                // Add your login navigation logic here
              }}
              style={{
                background: "linear-gradient(to bottom, #ff7e5f, #feb47b)", // Button background color
                color: "black", // Button text color
                padding: "10px 20px", // Button padding
                // border: "3px solid", // Border width and style
                borderRadius: "25px",
                // borderColor: "transparent", // Transparent border to allow gradient to be visible
                borderRadius: "5px", // Border radius for rounded corners
                cursor: "pointer", // Change cursor on hover
                // outline: "none", // Remove default focus outline
                // backgroundImage: "linear-gradient(to bottom, #ff7e5f, #feb47b)", // Gradient for the border
                // backgroundClip: "padding-box", // Clip the background to the padding box
              }}
            >
              Login
            </div> */}
            {/* {LoginPopup()} */}
          </div>
        </header>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-[60px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] h-[360px] md:h-auto items-start justify-start">
              <div className="flex flex-col gap-3 items-left justify-center w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800 w-full"
                  size="txtAntipastoProDemiBold40"
                >
                  <span className="text-blue_gray-800 font-dmserifdisplay text-left font-normal">
                    Your
                  </span>
                  <span
                    className=" font-dmserifdisplay text-left font-normal"
                    style={{ color: "#F0C419" }}
                  >
                    {" "}
                    Automated
                  </span>
                  <span className="text-blue_gray-800 font-dmserifdisplay text-left font-normal">
                    {" "}
                    Email Warm-up
                  </span>
                </Text>
                <Text
                  className="leading-[170.00%] text-base text-blue_gray-800_bf text-align-left"
                  size="txtLatoRegular16"
                  // style={{ paddingLeft: "-20px" }}
                >
                  <>
                    Let our Automated email warm-up Take your emails From Spam
                    to Inbox. <br />
                    30 Second Setup. Unlimited Warmups.{" "}
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-8 items-center justify-start w-[570px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <input
                    name="fieldbox"
                    placeholder="Enter your email"
                    className="font-lato p-0 placeholder:text-gray-600 text-left text-xs w-full"
                    wrapClassName="border border-gray-200 border-solid flex-1 sm:flex-1 w-[76%] sm:w-full"
                    type="email"
                    value={email} // Controlled component
                    onChange={handleEmailChange} // Update state on change
                    style={{ padding: "15px 20px", borderRadius: "15px" }}
                  ></input>
                  <Button
                    className="cursor-pointer flex h-[51px] items-center justify-center rounded-[25px] px-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mb-0.5 ml-1 "
                        src="images2/img_frame_white_a700.svg"
                        alt="Frame"
                        style={{ paddingRight: "10px" }}
                      />
                    }
                    size="lg"
                    color="purple_A700_amber_400"
                    onClick={() => {
                      handleNext();
                    }}
                    style={{
                      cursor: "pointer",
                      background: "#F0C419",
                      // width: "150px",
                    }}
                  >
                    <div
                      className="font-poppins font-semibold text-center text-xs px-[5px]"
                      style={{ width: "150px" }}
                    >
                      Warm up{" "}
                    </div>
                  </Button>
                </div>
                <List
                  className="sm:flex-col flex-row gap-7 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start py-3 w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 md:flex-1 flex-col gap-2.5 items-center justify-start w-auto md:w-full">
                    <div className="flex flex-row gap-1 items-end justify-end w-auto">
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_One"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Two"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Three"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Four"
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-start justify-center w-auto">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images2/img_64ff14a97ca75b3.svg"
                        alt="64ff14a97ca75bThree"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-800 text-xs w-auto"
                          size="txtInterBold12"
                        >
                          <span className="text-blue_gray-800 font-lato text-left font-bold">
                            4.9
                          </span>
                          <span className="text-blue_gray-800 font-lato text-left font-normal">
                            {" "}
                            on Capterra
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-11 bg-black-900_19 w-px" />
                  <div className="flex flex-1 md:flex-1 flex-col gap-2.5 items-center justify-start w-auto md:w-full">
                    <div className="flex flex-row gap-1 items-end justify-end w-auto">
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_One"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Two"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Three"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Four"
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-start justify-center w-auto">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images2/img_vector.svg"
                        alt="vector"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-800 text-xs w-auto"
                          size="txtInterBold12"
                        >
                          <span className="text-blue_gray-800 font-lato text-left font-bold">
                            5.0
                          </span>
                          <span className="text-blue_gray-800 font-lato text-left font-normal">
                            {" "}
                            on G2
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-11 bg-black-900_19 w-px" />
                  <div className="flex flex-1 md:flex-1 flex-col gap-2.5 items-center justify-start w-auto md:w-full">
                    <div className="flex flex-row gap-1 items-end justify-end w-auto">
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_One"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Two"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Three"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images2/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Four"
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-start justify-center w-auto">
                      <Img
                        className="h-3.5 md:h-auto object-cover w-3.5"
                        src="images2/img_image90.png"
                        alt="imageNinety"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-800 text-xs w-auto"
                          size="txtInterBold12"
                        >
                          <span className="text-blue_gray-800 font-lato text-left font-bold">
                            4.8
                          </span>
                          <span className="text-blue_gray-800 font-lato text-left font-normal">
                            {" "}
                            on Google
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="font-lato relative w-[38%] md:w-full">
              {/* <Img
                className="absolute h-[380px] inset-[0] justify-center m-auto object-cover w-[430px]"
                src="images2/img_frame1000003149.png"
                alt="frame1000003149"
              /> */}

              {/* <img src="images/hero-section-img.png" /> */}
              <img src="images/Hero_animation/Hero-New-Animation.gif" />
              {/* <div style={{ width: "450px" }}>
                {!isToggled && (
                  <div>
                    {state1 && (
                      <img src="images/Hero_animation/warmup-off-1.png" />
                    )}
                    {state2 && (
                      <img src="images/Hero_animation/warmup-off-2.png" />
                    )}
                    {state3 && (
                      <img src="images/Hero_animation/warmup-off-3.png" />
                    )}
                    {state4 && (
                      <img src="images/Hero_animation/warmup-off-4.png" />
                    )}
                    {state5 && (
                      <img src="images/Hero_animation/warmup-off-5.png" />
                    )}
                    {state6 && (
                      <img src="images/Hero_animation/warmup-off-6.png" />
                    )}
                    {state7 && (
                      <img src="images/Hero_animation/warmup-off-7.png" />
                    )}
                  </div>
                )}
                {isToggled && (
                  <div>
                    {state1 && (
                      <img src="images/Hero_animation/warmup-on-1.png" />
                    )}
                    {state2 && (
                      <img src="images/Hero_animation/warmup-on-2.png" />
                    )}
                    {state3 && (
                      <img src="images/Hero_animation/warmup-on-3.png" />
                    )}
                    {state4 && (
                      <img src="images/Hero_animation/warmup-on-4.png" />
                    )}
                    {state5 && (
                      <img src="images/Hero_animation/warmup-on-5.png" />
                    )}
                    {state6 && (
                      <img src="images/Hero_animation/warmup-on-6.png" />
                    )}
                    {state7 && (
                      <img src="images/Hero_animation/warmup-on-7.png" />
                    )}
                  </div>
                )}
              </div> */}
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-dmsans md:gap-10 gap-40 items-center justify-end max-w-[1440px] md:px-10 sm:px-5 px-[200px] py-[60px] w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[360px] items-center justify-start p-[9px] md:px-5 w-[42%] md:w-full"
              style={{
                backgroundImage: "url('images2/img_frame1000003149.png')",
              }}
            >
              {/* <div className="my-3.5 relative w-[394px] sm:w-full">
                <div className="ml-auto my-auto w-[94%] sm:w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start left-[0] p-2.5 rounded-[11px] w-[62%]">
                    <div className="flex flex-col gap-[15px] justify-start mb-0.5 mt-[5px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[5px] w-[98%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[9.46px] text-indigo-900 tracking-[-0.19px]"
                              size="txtDMSansBold946"
                            >
                              Mailbox analysis
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-evenly w-1/5">
                            <Text
                              className="text-[7.1px] text-indigo-200 tracking-[-0.14px]"
                              size="txtDMSansBold71"
                            >
                              Monthly
                            </Text>
                            <Img
                              className="h-[11px] w-[11px]"
                              src="images2/img_lock.svg"
                              alt="lock"
                            />
                          </div>
                        </div>
                        <Img
                          className="h-[84px] w-[84px]"
                          src="images2/img_contrast.svg"
                          alt="contrast"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                        <div className="bg-white-A700 flex flex-row items-center justify-start p-2 rounded-lg shadow-bs3 w-full">
                          <div className="flex flex-col items-center justify-start ml-[15px] w-[15%]">
                            <div className="flex flex-col items-end justify-start w-full">
                              <div className="flex flex-row items-start justify-evenly w-full">
                                <div className="bg-purple-A700 h-1 my-0.5 rounded-[50%] w-1"></div>
                                <Text
                                  className="text-[7.1px] text-indigo-200 tracking-[-0.14px]"
                                  size="txtDMSansMedium71"
                                >
                                  Inbox
                                </Text>
                              </div>
                              <Text
                                className="text-[10.64px] text-indigo-900 tracking-[-0.21px]"
                                size="txtDMSansBold1064"
                              >
                                81%
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray-50 h-[27px] ml-[34px] w-px" />
                          <div className="flex flex-col items-center justify-start ml-[23px] w-[15%]">
                            <div className="flex flex-col items-end justify-start w-full">
                              <div className="flex flex-row items-start justify-evenly w-full">
                                <div className="bg-red-300_01 h-1 rounded-[50%] w-1"></div>
                                <Text
                                  className="text-[7.1px] text-indigo-200 tracking-[-0.14px]"
                                  size="txtDMSansMedium71"
                                >
                                  Spam
                                </Text>
                              </div>
                              <Text
                                className="text-[10.64px] text-indigo-900 tracking-[-0.21px]"
                                size="txtDMSansBold1064"
                              >
                                12%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row font-lato items-start justify-between m-auto relative w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-between w-[36%]">
                      <Text
                        className="mt-1 text-[10.22px] text-gray-600_01"
                        size="txtLatoMedium1022"
                      >
                        One tap activation
                      </Text>
                      <Switch
                        onColor="#9d76ed"
                        offColor="#9d76ed"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={true}
                        className=""
                      />
                    </div>
                    <Img
                      className="h-[311px] md:h-auto object-cover"
                      src="images2/img_image109.png"
                      alt="image109"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col font-lato items-center justify-start left-[0] top-[18%] w-auto">
                  <Button
                    className="bg-transparent border border-solid cursor-pointer flex items-center justify-center min-w-[123px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-4 mb-px mr-2"
                        src="images2/img_frame_16x16.png"
                        alt="Frame"
                      />
                    }
                    color="white_A700"
                    variant="fill"
                  >
                    <div className="!text-purple-A700 font-medium leading-[normal] purple_A700_amber_400_border2 text-left text-xs">
                      Add Mailbox
                    </div>
                  </Button>
                </div>
              </div> */}
              <img
                src="images2/chats-purple.png"
                style={{ paddingTop: "20px" }}
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800 w-full"
                  size="txtDMSerifDisplayRegular40"
                >
                  <span className="text-blue_gray-800 font-dmserifdisplay text-left font-normal">
                    Set and{" "}
                  </span>
                  <span className="text-orange-400_01 font-dmserifdisplay text-left font-normal">
                    Forget
                  </span>
                </Text>
                <Text
                  className="leading-[170.00%] max-w-[509px] md:max-w-full text-base text-blue_gray-800_bf"
                  size="txtLatoRegular16"
                >
                  Setup our tool in just 30 seconds & let the AI warm you up
                  while you inbox rate soars.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-center justify-end max-w-[1440px] md:px-10 sm:px-5 px-[200px] py-[60px] w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800 w-full"
                  size="txtDMSerifDisplayRegular40"
                >
                  Mailbox Management
                </Text>
                <Text
                  className="leading-[170.00%] max-w-[382px] md:max-w-full text-base text-blue_gray-800_bf"
                  size="txtLatoRegular16"
                >
                  See your Email Health, add other users & Switch on or off at
                  any time.
                </Text>
              </div>
            </div>
            <div className="relative w-[51%] md:w-full">
              <Img
                className="absolute h-[360px] inset-y-[0] my-auto object-cover right-[0] w-[430px]"
                src="images2/img_frame1000003149.png"
                alt="frame1000003149_One"
              />
              <Img
                className="h-[312px] my-auto object-cover relative w-[497px]"
                src="images2/img_image110.png"
                alt="image110"
                style={{ padding: "10px" }}
              />
            </div>
          </div>
          <div className="flex flex-col font-dmserifdisplay md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-20 w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-center tracking-[0.28px] w-auto"
                size="txtDMSerifDisplayRegular28"
              >
                <span className="text-blue_gray-800 font-dmserifdisplay font-normal">
                  Set up in{" "}
                </span>
                <span className="text-orange-400_01 font-dmserifdisplay font-normal">
                  30 Seconds
                </span>
                <span className="text-blue_gray-800 font-dmserifdisplay font-normal">
                  {" "}
                  + Your Analytical Dashboard.
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-lemonada md:gap-10 items-start justify-between max-w-[1160px] mx-auto sm:px-5 w-full">
              <div className="relative w-[37%] md:w-full">
                <Img
                  className="absolute h-5 object-cover right-[0] top-[29%] w-[125px]"
                  src="images2/img_svg.png"
                  alt="svg"
                />
                <div className="flex flex-col items-center justify-start my-auto relative w-[300px]">
                  <div className="flex flex-col h-[140px] md:h-auto items-center justify-center pb-[20.85px] w-[223px]">
                    <Text
                      className="bg-clip-text bg-gradient  border border-solid border-white-A700 flex h-[88px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[24.16px] md:text-[26.16px] text-[28.16px] text-center text-shadow-ts text-transparent w-[88px]"
                      size="txtLemonadaRegular2816"
                    >
                      1
                    </Text>
                  </div>
                  <div className="flex flex-col font-lato gap-[15.4px] items-start justify-start pb-[0.6px] w-full">
                    <Text
                      className="text-center text-gray-800 text-xl w-full text-wrap"
                      size="txtLatoBold20"
                    >
                      Connect Your Email in 1 Click
                    </Text>
                    <Text
                      className="text-base text-center text-gray-600_02 w-full"
                      size="txtLatoRegular16Gray60002"
                    >
                      So the AI Can roll up it’s Sleeve
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col h-[140px] md:h-auto items-center justify-center pb-[20.85px] w-[223px]">
                  <Text
                    className="bg-clip-text bg-gradient  border-2 border-solid border-white-A700 flex h-[88px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[24.16px] md:text-[26.16px] text-[28.16px] text-center text-shadow-ts1 text-transparent w-[88px]"
                    size="txtLemonadaRegular2816"
                  >
                    2
                  </Text>
                </div>
                <div className="flex flex-col font-lato gap-[15.4px] items-start justify-start pb-[0.6px] w-[300px]">
                  <Text
                    className="text-center text-gray-800 text-xl w-full"
                    size="txtLatoBold20"
                  >
                    See Your Warmer Score
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[300px] md:max-w-full text-base text-center text-gray-600_02"
                    size="txtLatoRegular16Gray60002"
                  >
                    Know when you’ll be able to safetly tune up your send volume
                  </Text>
                </div>
              </div>
              <div className="relative w-[37%] md:w-full">
                <Img
                  className="absolute h-5 left-[0] object-cover top-[26%] w-[125px]"
                  src="images2/img_svg_20x125.png"
                  alt="svg_One"
                />
                <div className="flex flex-col items-center justify-start ml-auto my-auto relative w-auto">
                  <div className="flex flex-col h-[140px] md:h-auto items-center justify-center pb-[20.85px] w-[223px]">
                    <Text
                      className="bg-clip-text bg-gradient  border-2 border-solid border-white-A700 flex h-[88px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[24.16px] md:text-[26.16px] text-[28.16px] text-center text-shadow-ts2 text-transparent w-[88px]"
                      size="txtLemonadaRegular2816"
                    >
                      3
                    </Text>
                  </div>
                  <div className="flex flex-col font-lato gap-[15.4px] items-start justify-start pb-[0.6px] w-[300px]">
                    <Text
                      className="text-center text-gray-800 text-xl w-full"
                      size="txtLatoBold20"
                    >
                      See Your Inbox % go Up
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[300px] md:max-w-full text-base text-center text-gray-600_02"
                      size="txtLatoRegular16Gray60002"
                    >
                      See Your Inbox rate go up while your competitors go down{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-dmserifdisplay md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-20 w-full">
            <div className="flex flex-col items-center justify-start w-auto sm:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-center tracking-[0.28px] w-auto"
                size="txtDMSerifDisplayRegular28"
              >
                <span className="text-blue_gray-800 font-dmserifdisplay font-normal">
                  Hear Why{" "}
                </span>
                <span className="text-orange-400_01 font-dmserifdisplay font-normal">
                  10,000 Business
                </span>
                <span className="text-blue_gray-800 font-dmserifdisplay font-normal">
                  {" "}
                  Love us...
                </span>
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row font-lato gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start max-w-[1296px] mx-auto w-full"
              orientation="horizontal"
            >
              <div className="border border-solid flex flex-col gap-4 items-center justify-center p-6 purple_A700_amber_400_border3 sm:px-5 rounded-[20px] w-60">
                <Img
                  className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                  src="images2/Guillermo.png"
                  alt="unsplashwmd64tm"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center text-transparent w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#f68714" }}
                    >
                      Guillermo Vallez
                    </Text>
                    <Text
                      className="text-center text-purple-900 text-xs w-auto"
                      size="txtLatoRegular12"
                    >
                      CEO @WiseSheets
                    </Text>
                  </div>
                  <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <Text
                      className="leading-[150.00%] max-w-[192px] md:max-w-full text-blue_gray-700_bf text-center text-xs"
                      size="txtLatoRegular12Bluegray700bf"
                    >
                      “Wow, this was fast yet effective. My open rates have
                      never been higher.”
                    </Text>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="flex justify-between w-[122px]"
                        value={4}
                        starCount={5}
                        color="#c4c4c47f"
                        activeColor="#ffb700"
                        size={19}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid flex flex-col gap-4 items-center justify-center p-6 purple_A700_amber_400_border4 sm:px-5 rounded-[20px] w-60">
                <Img
                  className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                  src="images2/img_unsplashwmd64tmfc4k_72x72.png"
                  alt="unsplashwmd64tm"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center text-transparent w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#f68714" }}
                    >
                      James Campbell
                    </Text>
                    <Text
                      className="text-center text-purple-900 text-xs w-auto"
                      size="txtLatoRegular12"
                    >
                      Founder @Zown
                    </Text>
                  </div>
                  <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <Text
                      className="leading-[150.00%] max-w-[192px] md:max-w-full text-blue_gray-700_bf text-center text-xs"
                      size="txtLatoRegular12Bluegray700bf"
                    >
                      “Finally an automated Email Warm up so I don’t have spent
                      countless hours to do manually. Thank you.”
                    </Text>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="flex justify-between w-[122px]"
                        value={4}
                        starCount={5}
                        color="#c4c4c4"
                        activeColor="#ffb700"
                        size={19}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid flex flex-col gap-4 items-center justify-center p-6 purple_A700_amber_400_border5 sm:px-5 rounded-[20px] w-60">
                <Img
                  className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                  src="images2/img_unsplashwmd64tmfc4k_1.png"
                  alt="unsplashwmd64tm"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center text-transparent w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#f68714" }}
                    >
                      Noah Wilson
                    </Text>
                    <Text
                      className="text-center text-purple-900 text-xs w-auto"
                      size="txtLatoRegular12"
                    >
                      CRO @Chatbase
                    </Text>
                  </div>
                  <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <Text
                      className="leading-[150.00%] max-w-[192px] md:max-w-full text-blue_gray-700_bf text-center text-xs"
                      size="txtLatoRegular12Bluegray700bf"
                    >
                      Unlike other tools, this warms in the background so your
                      inbox doesn’t end up getting drained over night.
                    </Text>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="flex justify-between w-[122px]"
                        value={4}
                        starCount={5}
                        color="#c4c4c4"
                        activeColor="#ffb700"
                        size={19}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid flex flex-col gap-4 items-center justify-center p-6 purple_A700_amber_400_border6 sm:px-5 rounded-[20px] w-60">
                <Img
                  className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                  src="images2/Saum.png"
                  alt="ellipseFive"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center text-transparent w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#f68714" }}
                    >
                      Saum Zadeh
                    </Text>
                    <Text
                      className="text-center text-purple-900 text-xs w-auto"
                      size="txtLatoRegular12"
                    >
                      Saint Orale
                    </Text>
                  </div>
                  <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <Text
                      className="leading-[150.00%] max-w-[192px] md:max-w-full text-blue_gray-700_bf text-center text-xs"
                      size="txtLatoRegular12Bluegray700bf"
                    >
                      “Love how I can add my team members & see which each email
                      is ready to do more”
                    </Text>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="flex justify-between w-[122px]"
                        value={4}
                        starCount={5}
                        color="#c4c4c4"
                        activeColor="#ffb700"
                        size={19}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid flex flex-col gap-4 h-[294px] md:h-auto items-center justify-center p-6 purple_A700_amber_400_border7 sm:px-5 rounded-[20px] w-60">
                <Img
                  className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                  src="images2/MaralZadeh-modified.png"
                  alt="ellipseForty"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center text-transparent w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#f68714" }}
                    >
                      Maral Dhz
                    </Text>
                    <Text
                      className="text-center text-purple-900 text-xs w-auto"
                      size="txtLatoRegular12"
                    >
                      Real Estate Agent
                    </Text>
                  </div>
                  <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <Text
                      className="leading-[150.00%] max-w-[192px] md:max-w-full text-blue_gray-700_bf text-center text-xs"
                      size="txtLatoRegular12Bluegray700bf"
                    >
                      “Must Have for Agents doing cold-outreach. If you’re not
                      warming, you might as well forget about it.”
                    </Text>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="flex justify-between w-[122px]"
                        value={4}
                        starCount={5}
                        color="#c4c4c4"
                        activeColor="#ffb700"
                        size={19}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-dmserifdisplay md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-20 w-full">
            <div className="flex flex-col gap-0.5 items-center justify-start w-auto sm:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-center tracking-[0.56px] w-auto"
                size="txtDMSerifDisplayRegular28"
              >
                {" "}
                Seamlessly Integrates with All Your{" "}
              </Text>
              <Text
                className="bg-clip-text  sm:text-2xl md:text-[26px] text-[28px] text-center text-transparent tracking-[0.56px] w-auto"
                size="txtDMSerifDisplayRegular28PurpleA700"
                style={{ color: "#f68714" }}
              >
                Email Platforms!
              </Text>
            </div>
            <List
              className="flex flex-col font-lato gap-6 items-center max-w-[1160px] mx-auto w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-center my-0 w-full">
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <Img
                    className="h-8 md:h-auto object-cover w-8"
                    src="images2/img_image91.png"
                    alt="imageNinetyOne"
                  />
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Gmail
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-auto">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[39px] sm:w-full"
                      src="images2/img_image107.png"
                      alt="image107"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Elastic mail
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[4.36px] w-auto">
                    <Img
                      className="h-[23px] md:h-auto object-cover w-[21px]"
                      src="images2/img_image96.png"
                      alt="imageNinetySix"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    MailChimp
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[4.36px] w-[31px]">
                    <Img
                      className="h-[23px] md:h-auto object-cover w-[22px]"
                      src="images2/img_image92.png"
                      alt="imageNinetyTwo"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Google workspace
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[4.36px] w-auto">
                    <Img
                      className="h-[23px] md:h-auto object-cover w-5"
                      src="images2/img_image105.png"
                      alt="image105"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Microsoft 365
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-8">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[21px]"
                      src="images2/img_image106.png"
                      alt="image106"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Mailgun
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-center my-0 w-full">
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[6.74px] w-auto">
                    <Img
                      className="h-[18px] md:h-auto object-cover w-[58px] sm:w-full"
                      src="images2/img_image97.png"
                      alt="imageNinetySeven"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    GMX
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-[31px]">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[21px]"
                      src="images2/img_image99.png"
                      alt="imageNinetyNine"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Amaxon AES
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-auto">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[33px] sm:w-full"
                      src="images2/img_image98.png"
                      alt="imageNinetyEight"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Icloud
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.65px] w-8">
                    <Img
                      className="h-5 md:h-auto object-cover w-5"
                      src="images2/img_image95.png"
                      alt="imageNinetyFive"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Mailjet
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.82px] w-auto">
                    <Img
                      className="h-5 md:h-auto object-cover w-8 sm:w-full"
                      src="images2/img_image94.png"
                      alt="imageNinetyFour"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    GetResponse
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-auto">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[29px] sm:w-full"
                      src="images2/img_image108.png"
                      alt="image108"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    SMTP
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-center my-0 w-full">
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-8">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[21px]"
                      src="images2/img_image100.png"
                      alt="image100"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Dreamshot
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-auto">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[29px] sm:w-full"
                      src="images2/img_image93.png"
                      alt="imageNinetyThree"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Customer.io
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-auto">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[60px] sm:w-full"
                      src="images2/img_image104.png"
                      alt="image104"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Zoho
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[6.4px] w-auto">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[47px] sm:w-full"
                      src="images2/img_image103.png"
                      alt="image103"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    AOL mail
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-[33px]">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[22px] sm:w-full"
                      src="images2/img_image101.png"
                      alt="image101"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Outlook
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-8">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[21px]"
                      src="images2/img_image102.png"
                      alt="image102"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-800_01 w-auto"
                    size="txtLatoRegular16Gray80001"
                  >
                    Sendgrid
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white-A700 flex flex-col font-lato h-[509px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-[60px] w-full">
            <div className="bg-gradient4  flex md:flex-col flex-row gap-6 items-center justify-start max-w-[805px] pr-20 md:px-5 py-8 rounded-[20px] w-full">
              <Img
                className="h-[270px] w-[292px]"
                src="images2/img_divneverinfovisualmargin.svg"
                alt="divneverinfovis"
              />
              <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="leading-[130.00%] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_03"
                    size="txtDMSerifDisplayRegular32"
                  >
                    <>
                      Never Get Sent to <br />
                      Spam or Promotions!
                    </>
                  </Text>
                  <Text
                    className="text-blue_gray-700_bf_01 text-sm w-full"
                    size="txtLatoRegular14"
                  >
                    Enter Your Email start warm-up in 30 seconds!
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <input
                    name="fieldbox_One"
                    placeholder="Enter your email"
                    className="p-0 placeholder:text-gray-600 text-left text-xs w-full"
                    wrapClassName="border border-gray-200 border-solid flex-1 sm:flex-1 w-[66%] sm:w-full"
                    type="email"
                    value={email} // Controlled component
                    onChange={handleEmailChange} // Update state on change
                    style={{ padding: "15px 20px", borderRadius: "15px" }}
                  ></input>
                  <div
                    className="bg-gradient  flex flex-row font-poppins gap-1 h-[51px] md:h-auto items-center justify-center sm:px-5 px-6 py-3 rounded-[25px]"
                    onClick={() => {
                      handleNext();
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Text
                      className="text-center text-white-A700 text-xs w-auto"
                      size="txtPoppinsSemiBold12"
                      style={{ width: "80px" }}
                    >
                      Warm up{" "}
                    </Text>
                    <Img
                      className="h-4 md:h-auto object-cover w-5"
                      src="images2/img_ddd1c2476bcb099.png"
                      alt="ddd1c2476bcb099"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="bg-white-A700 flex flex-col font-dmsans items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-[60px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1160px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[81px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 h-full items-start justify-between pb-1 w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
                        size="txtDMSansBold28"
                      >
                        Auto-Warm
                      </Text>
                    </div>
                  </div>
                  {/* <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                    <div className="flex flex-col items-end justify-start w-[7%]">
                      <Img
                        className="h-[18px] md:h-auto object-cover"
                        src="images2/img_facebook.png"
                        alt="facebook"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[11%]">
                      <Img
                        className="h-3.5 md:h-auto object-cover"
                        src="images2/img_twitter.png"
                        alt="twitter"
                      />
                    </div>
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[19px]"
                      src="images2/img_socialmediaicon.png"
                      alt="socialmediaicon"
                    />
                    <div className="flex flex-col items-center justify-start w-[19px]">
                      <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                        <Img
                          className="h-[17px] md:h-auto object-cover w-[18px] sm:w-full"
                          src="images2/img_linkedin_17x18.png"
                          alt="linkedin"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[12%]">
                      <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                        <Img
                          className="h-3.5 md:h-auto object-cover"
                          src="images2/img_youtube.png"
                          alt="youtube"
                        />
                      </div>
                    </div>
                  </div> */}
                  {/* <div style={{ marginLeft: "-10px" }}>
                    <a href="https://automatedemailwarmup.com/">
                      <Button style={{ color: "#f68714" }}>Home</Button>
                    </a>
                    <a href="https://automatedemailwarmup.com/blog/">
                      <Button style={{ color: "#f68714" }}>Contact Us</Button>
                    </a>
                  </div> */}
                </div>

                <div className="flex flex-col font-dmserifdisplay items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    {/* <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[0.16px] w-auto"
                        size="txtDMSerifDisplayRegular16Bluegray900"
                      >
                        About us
                      </Text>
                    </div> */}
                    <div className="flex flex-col font-lato gap-4 items-start justify-start w-auto">
                      <Text
                        size="txtLatoRegular14Bluegray500"
                        className="text-bold"
                      >
                        Blogs
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <a
                          href="https://automatedemailwarmup.com/blog/554-5-7-5-permanent-error-evaluating-dmarc-policy/"
                          className="text-blue-500 text-center text-sm w-auto"
                        >
                          <Text
                            size="txtLatoRegular14Bluegray500"
                            className="underline"
                          >
                            Permanent error evaluating dmarc policy
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <a
                          href="https://automatedemailwarmup.com/blog/gwarm/"
                          className="text-blue-500 text-center text-sm w-auto"
                        >
                          <Text
                            size="txtLatoRegular14Bluegray500"
                            className="underline"
                          >
                            Gwarm
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <a
                          href="https://automatedemailwarmup.com/blog/salesforce-emails-going-to-spam/"
                          className="text-blue-500 text-center text-sm w-auto"
                        >
                          <Text
                            size="txtLatoRegular14Bluegray500"
                            className="underline"
                          >
                            Salesforce emails going to spam
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-dmserifdisplay items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    {/* <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[0.16px] w-auto"
                        size="txtDMSerifDisplayRegular16Bluegray900"
                      >
                        About us
                      </Text>
                    </div> */}
                    <div className="flex flex-col font-lato gap-4 items-start justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <div className="flex flex-col h-5 items-center justify-start w-5">
                          <div className="flex flex-col h-5 items-center justify-start p-[3px] w-5">
                            <Img
                              className="h-2.5"
                              src="images2/img_lock_blue_gray_900.svg"
                              alt="lock_One"
                            />
                          </div>
                        </div>
                        <a
                          href="javascript:"
                          className="text-blue_gray-500 text-center text-sm w-auto"
                        >
                          <Text size="txtLatoRegular14Bluegray500">
                            Contact Us
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images2/img_linkedin.svg"
                          alt="linkedin_One"
                        />
                        <Text
                          className="text-blue_gray-500 text-sm w-auto"
                          size="txtLatoRegular14Bluegray500"
                        >
                          New York, Huston Ave
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagev2;

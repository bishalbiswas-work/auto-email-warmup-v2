import * as React from "react";
import { useEffect } from "react";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import {
  Img,
  Text,
  Button,
  Heading,
  Input,
  Radio,
  RadioGroup,
} from "../../components";

import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

// Import Context
import { useContext } from "react";
import DataContext from "../../ContextAPI/DataState";

// Import Components
import GmailAccountAccess from "Pages/Auth/GoogleAccountAccess";

export default function AppPasswordv2({ email, leftProp, setLeftProp }) {
  const dataContext = useContext(DataContext);

  const [isOpen, setIsOpen] = React.useState(leftProp);
  const [appPassword, setAppPassword] = React.useState(""); // State to hold the input value
  const [error, setError] = React.useState(false); // State to hold the error message
  const [accessToken, setAccessToken] = React.useState(null);

  // Function to close the drawer
  const closeDrawer = () => {
    setIsOpen(false);
    setLeftProp(false);
  };

  // const handleSubmit = async () => {
  //   console.log("Submitted App Password:", appPassword); // Handle the submission, e.g., logging or sending to an API
  //   const data = {
  //     userEmail: email,
  //     password: appPassword,
  //     serverDomain: "smtp.gmail.com",
  //     apiKey: "",
  //   };
  //   const res = await dataContext.newWarmupEmailSetup(data);
  //   if (res.status) {
  //     setError(false);
  //     closeDrawer();
  //   } else {
  //     setError(true);
  //   }
  //   setAppPassword(""); // Clear the input value after submission
  // };

  const handleSubmit = async () => {
    console.log("Submitted App Password:", appPassword); // Log the submitted password
    const data = {
      userEmail: email,
      password: appPassword,
      serverDomain: "smtp.gmail.com",
      apiKey: "",
    };

    try {
      const res = await dataContext.newWarmupEmailSetup(data);
      if (res.status) {
        setError(false);
        closeDrawer(); // Assuming closeDrawer is a method to close a modal or similar component
      } else {
        setError(true);
        console.error("Error: The API call was unsuccessful."); // Optional: log the error message
      }
    } catch (error) {
      setError(true);
      console.error("Error during newWarmupEmailSetup: ", error); // Log the error
    }

    setAppPassword(""); // Clear the input value after submission
  };

  // Function to handle drawer toggle
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return; // Do nothing if the event is a Tab or Shift keydown event
    }
    if (event) {
      event.stopPropagation(); // Stop event propagation
    }
    setIsOpen(open); // Set the open state based on the argument
  };

  React.useEffect(() => {
    setIsOpen(leftProp); // Update isOpen when leftProp changes
  }, [leftProp]);

  useEffect(() => {
    console.log("Gmail Access Token: ", accessToken);

    const uploadToken = async (data) => {
      try {
        const res = await dataContext.newWarmupEmailSetup(data);
        if (res.status) {
          setError(false);
          closeDrawer(); // Assuming closeDrawer is a method to close a modal or similar component
        } else {
          setError(true);
          console.error("Error: The API call was unsuccessful."); // Optional: log the error message
        }
      } catch (error) {
        setError(true);
        console.error("Error during newWarmupEmailSetup: ", error); // Log the error
      }
    };
    const data = {
      userEmail: email,
      password: appPassword,
      serverDomain: "smtp.gmail.com",
      apiKey: "",
      accessToken: accessToken,
      refreshToken: "",
    };
    if (email) {
      uploadToken(data);
    }
  }, [accessToken]);
  const handleGoogleLogin = () => {
    // Open a new window with the provided URL
    window.open(
      `${dataContext.API_BASE_URL}/api/auth/google`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleMicrosoftLogin = () => {
    // Open a new window with the provided URL
    window.open(
      `${dataContext.API_BASE_URL}/api/auth/microsoft`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor="right"
          open={isOpen}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
          style={{ zIndex: 1200 }} // Ensure the drawer has a suitable z-index
        >
          {/* Assuming AppPasswordSection is a component you've defined elsewhere */}
          {/* Pass closeDrawer function so the child component can close the drawer if needed */}
          <div style={{ maxWidth: "400px" }}>
            {/* access grant section */}
            <div className="w-full bg-white-A700">
              {/* access grant header section */}
              <div
                className="flex items-center justify-center bg-yellow-900_0c p-6 sm:flex-col sm:p-5"
                style={{ background: "#fef4e8" }}
              >
                {/* close button row section */}
                <div className="flex flex-1 items-center justify-center gap-3 sm:self-stretch">
                  <Button
                    variant="outline"
                    shape="circle"
                    // color="amber_A400_deep_orange_500"
                    className="!rounded-[18px] w-[36px]"
                  >
                    {/* <Img src="images/img_close.svg" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </Button>

                  {/* access grant title section */}
                  <div className="flex">
                    <Text
                      as="p"
                      className="tracking-[0.18px] self-end !text-gray-900"
                    >
                      Grant access to your mail
                    </Text>
                  </div>
                </div>

                <div
                  onClick={() => {
                    console.log("close button clicked");
                    // toggleDrawer("right", false);
                    closeDrawer();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>

              {/* email connect section */}
              <div className="flex flex-col items-start gap-7 border-b border-solid border-gray-200 bg-white-A700 p-6 sm:p-5">
                <div
                  class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                  role="alert"
                >
                  <span class="font-medium">{email}</span> added successfully,
                  connect email now!
                </div>

                {/* email input section */}
                <div className="flex flex-col gap-5 self-stretch">
                  {/* service provider selection section */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-start">
                      <Text size="xs" as="p">
                        Select service provider{" "}
                        <span style={{ color: "red" }}>*</span>{" "}
                      </Text>
                      {/* <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                          />
                        </svg>
                      </div> */}
                    </div>
                    <RadioGroup name="selectservice1" className="flex">
                      <Radio
                        defaultChecked
                        value="gmail1"
                        label="Gmail"
                        className="rounded-[10px] py-[18px] gap-[35px] pr-[35px] w-full border border-deep_purple-500 bg-deep_purple-A200_0c bg-gradient5 bg-clip-text text-sm font-bold  sm:pr-5 px-2"
                        onClick={() => {
                          handleGoogleLogin();
                        }}
                      />
                      {/* <div className="rounded-[10px] py-[18px] gap-[35px] pr-[35px] w-full border border-deep_purple-500 bg-deep_purple-A200_0c bg-gradient5 bg-clip-text text-sm font-bold  sm:pr-5 px-2">
                        <GmailAccountAccess
                          accessToken={accessToken}
                          setAccessToken={setAccessToken}
                        />
                      </div> */}
                      <Radio
                        // disabled
                        value="outlook1"
                        label="Outlook"
                        className="rounded-[10px] py-[18px] gap-[35px] pr-[35px] ml-3 w-full border border-black-900_0c bg-white-A700 text-sm font-semibold text-blue_gray-900 sm:pr-5 px-2"
                        onClick={() => {
                          handleMicrosoftLogin();
                        }}
                      />
                    </RadioGroup>
                  </div>

                  {/* <div className="flex flex-col items-start gap-3">
                    <div className="flex flex-wrap items-start">
                      <Text size="xs" as="p">
                        Email app password{" "}
                        <span style={{ color: "red" }}>*</span>{" "}
                      </Text>

                    
                    </div>

                    <input
                      type="text"
                      placeholder="Enter your app password"
                      className="input input-bordered w-full max-w-xs"
                      value={appPassword} // Bind input value to state
                      onChange={(e) => setAppPassword(e.target.value)} // Update state on input change
                    />
                    {error && (
                      <p
                        as="p"
                        // className="tracking-[0.18px] self-start !text-gray-900"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        Error while submitting the password! Please try again.
                      </p>
                    )}
                  </div> */}
                </div>

                {/* <button
                  className="btn btn-wide"
                  style={{ background: "#FFC300" }}
                  onClick={handleSubmit} // Handle click event to submit the value
                >
                  {" "}
                  Give access to the mail
                </button> */}
                {/* <div
                  style={{
                    color: "white",
                  }}
                  onClick={handleSubmit} // Handle click event to submit the value
                  className="flex gap-2 justify-between px-4 py-3 text-sm font-medium leading-4 text-white whitespace-nowrap border border-solid bg-[linear-gradient(180deg,#FFC300_0%,#FF5733_100%)] border-[color:var(--G1,#FFC300)] rounded-[32px]"
                >
                  <div className="mb-0.5 cursor-pointer grow">
                    Give access to the mail
                  </div>
    
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div> */}
              </div>

              <div className="gap-[26px] flex flex-col items-center border-b border-solid border-gray-200 bg-white-A700 p-6 sm:p-5">
                <div className="flex self-start">
                  <h4> How to get your email app password?</h4>
                </div>

                <div className="rounded-[11px]  p-[19px] gap-[47px] w-[94%] h-[270px] mb-3 flex flex-col items-start bg-black-900_4c bg-cover bg-no-repeat md:h-auto md:w-full">
                  <iframe
                    width="300"
                    height="auto"
                    src="https://www.youtube.com/embed/5dfRKl07kPc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  {/* <iframe
                    width="150"
                    height="100"
                    src="https://www.youtube.com/embed/5dfRKl07kPc"
                  ></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

// function AppPasswordSection(toggleDrawer) {
//   return (
//     <div style={{ maxWidth: "400px" }}>
//       {/* access grant section */}
//       <div className="w-full bg-white-A700">
//         {/* access grant header section */}
//         <div
//           className="flex items-center justify-center bg-yellow-900_0c p-6 sm:flex-col sm:p-5"
//           style={{ background: "#fef4e8" }}
//         >
//           {/* close button row section */}
//           <div className="flex flex-1 items-center justify-center gap-3 sm:self-stretch">
//             <Button
//               variant="outline"
//               shape="circle"
//               // color="amber_A400_deep_orange_500"
//               className="!rounded-[18px] w-[36px]"
//             >
//               {/* <Img src="images/img_close.svg" /> */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                 />
//               </svg>
//             </Button>

//             {/* access grant title section */}
//             <div className="flex">
//               <Text
//                 as="p"
//                 className="tracking-[0.18px] self-end !text-gray-900"
//               >
//                 Grant access to your mail
//               </Text>
//             </div>
//           </div>

//           <div
//             onClick={() => {
//               toggleDrawer("left", false);
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="w-6 h-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M6 18 18 6M6 6l12 12"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* email connect section */}
//         <div className="flex flex-col items-start gap-7 border-b border-solid border-gray-200 bg-white-A700 p-6 sm:p-5">
//           <div
//             class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
//             role="alert"
//           >
//             <span class="font-medium">Daniyal@betimeful.com</span> added
//             successfully, connect email now!
//           </div>

//           {/* email input section */}
//           <div className="flex flex-col gap-5 self-stretch">
//             {/* service provider selection section */}
//             <div className="flex flex-col gap-3">
//               <div className="flex flex-wrap items-start">
//                 <Text size="xs" as="p">
//                   Select service provider{" "}
//                   <span style={{ color: "red" }}>*</span>{" "}
//                 </Text>

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   class="w-6 h-6"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                   />
//                 </svg>
//               </div>
//               <RadioGroup name="selectservice1" className="flex">
//                 <Radio
//                   value="gmail1"
//                   label="Gmail"
//                   className="rounded-[10px] py-[18px] gap-[35px] pr-[35px] w-full border border-deep_purple-500 bg-deep_purple-A200_0c bg-gradient5 bg-clip-text text-sm font-bold  sm:pr-5 px-2"
//                 />
//                 <Radio
//                   value="outlook1"
//                   label="Outlook"
//                   className="rounded-[10px] py-[18px] gap-[35px] pr-[35px] ml-3 w-full border border-black-900_0c bg-white-A700 text-sm font-semibold text-blue_gray-900 sm:pr-5 px-2"
//                 />
//               </RadioGroup>
//             </div>

//             <div className="flex flex-col items-start gap-3">
//               <div className="flex flex-wrap items-start">
//                 <Text size="xs" as="p">
//                   Email app password <span style={{ color: "red" }}>*</span>{" "}
//                 </Text>

//                 <div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     class="w-6 h-6"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               <input
//                 type="text"
//                 placeholder="Enter your app password"
//                 className="input input-bordered w-full max-w-xs"
//                 // style={{ padding: "0.5rem", borderRadius: "10px" }}
//               />
//             </div>
//           </div>

//           <button className="btn btn-wide" style={{ background: "#FFC300" }}>
//             {" "}
//             Give access to the mail
//           </button>
//         </div>

//         <div className="gap-[26px] flex flex-col items-center border-b border-solid border-gray-200 bg-white-A700 p-6 sm:p-5">
//           <div className="flex self-start">
//             <h4> How to get your email app password?</h4>
//           </div>

//           <div className="rounded-[11px]  p-[19px] gap-[47px] w-[94%] h-[270px] mb-3 flex flex-col items-start bg-black-900_4c bg-cover bg-no-repeat md:h-auto md:w-full">
//             <iframe
//               width="300"
//               height="auto"
//               src={"https://www.youtube.com/watch?v=LXb3EKWsInQ"}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               title="Embedded youtube"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

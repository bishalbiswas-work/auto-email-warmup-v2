import * as React from "react";
import { Radio, RadioGroup } from "components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowImage from "../../assets/images/arrow.png";
import { useState, useEffect } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import { useContext } from "react";
import DataContext from "ContextAPI/DataState";

import Steppers from "components/Steppers";

export default function FormDialog({
  open,
  handleClose,
  addMail,
  userStep,
  setUserStep,
  emailForToken,
}) {
  const dataContext = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [emailVal, setEmailVal] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  useEffect(() => {
    if (userStep === 2) {
      setEmailVal(true);
    }
  }, [userStep]);
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
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"sm"}
        fullWidth={true}
        className="dialog-rad"
        PaperProps={{ sx: { borderRadius: "20px" } }}
      >
        <div
          className="px-4 my-4"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
          }}
        >
          <img
            onClick={() => handleClose()}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd71e1697fc6e94fc4c23aad0211336465c65dd46e572cd6934fa85c22fe5c9?apiKey=599dc50b3d834ed59f450af622cca86d&"
            className="cursor-pointer w-6 aspect-square"
          />
        </div>
        <Steppers step={userStep} />
        {/* <Steppers step={2} /> */}
        <div className="divider my-4"></div>{" "}
        {!emailVal && (
          <div className="flex flex-col p-6 text-base leading-6 bg-white rounded-3xl max-w-[626px] max-md:px-5">
            <div className="flex gap-5 justify-between font-medium text-stone-950 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto">
                Choose your prferred email provided
              </div>
            </div>
            <div className="shrink-0 mt-3 h-px bg-black bg-opacity-10 max-md:max-w-full" />

            <div className="mt-6 text-sm font-medium text-gray-800 text-ellipsis max-md:max-w-full">
              Enter Email Address
            </div>
            <div className="flex flex-col justify-center items-start py-3.5 pr-16 pl-4 mt-2 text-sm whitespace-nowrap bg-white rounded-xl border-solid border-[1.132px] border-[color:var(--Colour-Border-Border-light,#EBEBEB)] text-neutral-800 max-md:pr-5 max-md:max-w-full">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="flex gap-1.5 px-2 py-1 rounded w-[400px] bg-opacity-10"
                style={{
                  outline: "none",
                  background: "white",
                }}
              ></input>
            </div>
            <div className="shrink-0 mt-6 h-px bg-black bg-opacity-10 max-md:max-w-full" />

            <div
              className="cursor-pointer flex gap-3 justify-center self-start px-8 py-3 mt-6 text-center text-white whitespace-nowrap bg-[linear-gradient(180deg,#FFC300_0%,#FF5733_100%)] rounded-[100px] max-md:px-5"
              style={{
                color: "white",
              }}
              onClick={() => {
                addMail(email);
                setEmail("");
                setUserStep(2);
                setEmailVal(true);
                // handleClose();
              }}
            >
              <div className="font-semibold">Add email</div>
              <img
                src={ArrowImage}
                className="aspect-square"
                style={{
                  width: "17px",
                }}
              ></img>
            </div>
          </div>
        )}
        {emailVal && (
          <div className="flex flex-col p-6 text-base leading-6 bg-white rounded-3xl max-w-[626px] max-md:px-5">
            <div className="flex gap-5 justify-between font-medium text-stone-950 max-md:flex-wrap max-md:max-w-full">
              <div>
                <div className="my-4 text-bold">
                  Please select your email provider
                </div>
                <div
                  class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                  role="alert"
                >
                  <span class="font-medium"> {emailForToken}</span> added
                  successfully, connect email now!
                </div>
              </div>
            </div>
            <div className="shrink-0 mt-3 h-px bg-black bg-opacity-10 max-md:max-w-full" />

            <div className="shrink-0 mt-6 h-px bg-black bg-opacity-10 max-md:max-w-full" />
            <div
              name="selectservice1"
              // className="flex"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  width: "200px",
                  // border: "1px solid #ff7f21",
                  border: `1px solid ${
                    optionSelected === "gmail" ? "#ff7f21" : "#E5E4E2"
                  }`,

                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                }}
                onClick={() => {
                  setOptionSelected("gmail");
                  // handleGoogleLogin();
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <img src="images/gmail-icon.png" />
                  </div>
                  <div>
                    {optionSelected === "gmail" ? (
                      <RadioButtonCheckedIcon sx={{ color: "#ff7f21" }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ color: "#E5E4E2" }} />
                    )}
                  </div>
                </div>
                <div style={{ height: "20px" }}></div>
                <div>Gmail</div>
              </div>
              <div
                style={{
                  width: "200px",
                  // border: "1px solid #ff7f21",
                  border: `1px solid ${
                    optionSelected === "microsoft" ? "#ff7f21" : "#E5E4E2"
                  }`,

                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                }}
                onClick={() => {
                  setOptionSelected("microsoft");
                  handleMicrosoftLogin();
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <img src="images/outlook-icon.png" />
                  </div>
                  <div>
                    {optionSelected === "microsoft" ? (
                      <RadioButtonCheckedIcon sx={{ color: "#ff7f21" }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ color: "#E5E4E2" }} />
                    )}
                  </div>
                </div>
                <div style={{ height: "20px" }}></div>
                <div>Outlook</div>
              </div>
            </div>
            <div className="shrink-0 mt-6 h-px bg-black bg-opacity-10 max-md:max-w-full" />

            <div className="shrink-0 mt-6 h-px bg-black bg-opacity-10 max-md:max-w-full" />
          </div>
        )}
      </Dialog>
    </React.Fragment>
  );
}

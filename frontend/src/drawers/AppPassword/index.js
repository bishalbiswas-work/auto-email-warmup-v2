import React from "react";
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

export default function AppPassword({ ...props }) {
  const drawerProps = {
    placement: "right",
    // Any other properties that Drawer expects can be added here
  };
  return (
    <div>
      <div style={{ maxWidth: "400px" }}>
        {/* // <Drawer placement="right" {...drawerProps}> */}

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
            {/* <Img
              src="images/img_frame.svg"
              alt="image"
              className="w-[24px] h-[24px] sm:w-full"
            /> */}
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

          {/* email connect section */}
          <div className="flex flex-col items-start gap-7 border-b border-solid border-gray-200 bg-white-A700 p-6 sm:p-5">
            {/* <Input
              shape="round"
              type="email"
              name="email"
              placeholder={`Daniyal@betimeful.com added successfully, connect email now!`}
              className="tracking-[0.15px] font-bold sm:px-5"
            /> */}

            <div
              class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <span class="font-medium">Daniyal@betimeful.com</span> added
              successfully, connect email now!
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
                  {/* <Heading
                    as="h1"
                    className="w-[6px] h-[5px] mt-1.5 text-xs font-semibold"
                  >
                    *
                  </Heading> */}
                  {/* <Img
                    src="images/img_frame_blue_gray_800_01.svg"
                    alt="image"
                    className="w-[16px] h-[16px]"
                  /> */}
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
                </div>
                <RadioGroup name="selectservice1" className="flex">
                  <Radio
                    value="gmail1"
                    label="Gmail"
                    className="rounded-[10px] py-[18px] gap-[35px] pr-[35px] w-full border border-deep_purple-500 bg-deep_purple-A200_0c bg-gradient5 bg-clip-text text-sm font-bold  sm:pr-5 px-2"
                  />
                  <Radio
                    value="outlook1"
                    label="Outlook"
                    className="rounded-[10px] py-[18px] gap-[35px] pr-[35px] ml-3 w-full border border-black-900_0c bg-white-A700 text-sm font-semibold text-blue_gray-900 sm:pr-5 px-2"
                  />
                </RadioGroup>
              </div>

              {/* email app password section */}
              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-wrap items-start">
                  <Text size="xs" as="p">
                    Email app password
                  </Text>
                  <Heading
                    as="h2"
                    className="w-[6px] h-[5px] mt-1.5 text-xs font-semibold"
                  >
                    *
                  </Heading>
                  <Img
                    src="images/img_frame_blue_gray_800_01.svg"
                    alt="image"
                    className="w-[16px] h-[16px]"
                  />
                </div>
                {/* <Input
                  color="white_A700"
                  size="sm"
                  type="password"
                  name="password"
                  placeholder={`Enter your password`}
                  className="rounded-[10px] border border-solid border-gray-200_01 sm:pr-5"
                /> */}
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  // style={{ padding: "0.5rem", borderRadius: "10px" }}
                />
              </div>
            </div>
            {/* <Button
              size="sm"
              shape="round"
              color="amber_A400_deep_orange_500"
              className="min-w-[254px] mb-[41px] font-semibold sm:px-5"
            >
            
            </Button> */}
            <button className="btn btn-wide" style={{ background: "#FFC300" }}>
              {" "}
              Give access to the mail
            </button>
          </div>

          {/* help section */}
          <div className="gap-[26px] flex flex-col items-center border-b border-solid border-gray-200 bg-white-A700 p-6 sm:p-5">
            <div className="flex self-start">
              {/* <Heading size="s" as="h4" className="!text-blue_gray-800_01">
                How to get your email app password?
              </Heading> */}
              <h4> How to get your email app password?</h4>
            </div>

            {/* youtube instruction section */}
            <div className="rounded-[11px]  p-[19px] gap-[47px] w-[94%] h-[270px] mb-3 flex flex-col items-start bg-black-900_4c bg-cover bg-no-repeat md:h-auto md:w-full">
              <img src="/images/img_assets_youtube.png" />

              <div className="gap-[9px] flex items-center">
                {/* <Button
                  variant="fill"
                  shape="circle"
                  className="!rounded-[18px] w-[36px]"
                >
                  <img src="images/img_assets_youtube.svg" />
                </Button>
                <Text
                  as="p"
                  className="!text-[18.05px] mb-[5px] self-end !text-white-A700"
                >
                  How to access email app password on google
                </Text> */}
              </div>
              {/* <Img
                //   src="images/img_assets_youtube.svg"
                alt="assetsyoutube"
                className="mb-[82px] w-[65px] h-[65px] self-center"
              /> */}
            </div>
          </div>
        </div>
        {/* </Drawer> */}
      </div>
    </div>
  );
}

import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const HomeProcessingPage = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter sm:gap-10 md:gap-10 gap-[78px] items-center justify-start mx-auto p-8 sm:px-5 w-full">
        <header className="bg-white-A700 flex sm:flex-col md:gap-10 items-center  p-5 md:px-5 rounded-[20px] shadow-bs1 w-full ">
          {/* <Sidebar className="!sticky !w-[266px] flex font-dmserifdisplay h-screen md:hidden justify-start overflow-auto top-[0]"> */}
          <Img
            className="h-6 md:h-auto object-cover w-5"
            src="images/img_.png"
            alt="One"
          />
          <Text
            className="bg-clip-text  capitalize ml-[26px]  text-xl w-auto"
            size="txtDMSerifDisplayRegular20"
            style={{ color: "#F0C419" }}
          >
            Automated Email Warm-up
          </Text>
          {/* </Sidebar> */}
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[130px] rounded-[20px] ml-[auto]"
            rightIcon={
              <Img
                className="h-4 ml-1 my-px"
                src="images/img_icfluentarrowdown24filled_1.svg"
                alt="ic_fluent_arrow_down_24_filled 1"
              />
            }
            color="purple_A700_amber_400"
          >
            <div className="font-poppins font-semibold text-center text-xs">
              Get Started
            </div>
          </Button>
        </header>
        <div className="flex md:flex-col flex-row gap-[35px] items-center justify-center mb-[78px] md:px-5 w-[47%] md:w-full">
          <div
            className="bg-gradient  flex flex-col gap-[19px] items-center justify-end pt-[35px] rounded-[15px] w-[48%] md:w-full"
            // style={{ padding: "10px" }}
          >
            <div
              className="flex flex-col gap-[50px] items-start justify-start"
              style={{ paddingLeft: "20px" }}
            >
              <Text
                className="sm:text-[19.33px] md:text-[21.33px] text-[23.33px] text-white-A700"
                size="txtInterRegular2333"
              >
                One Last Step...
              </Text>
              <Text
                className="leading-[18.00px] text-[13.33px] text-white-A700 w-full"
                size="txtInterRegular1333"
              >
                Going from Spam to Inbox Made all the difference in our sales,
                right away.
              </Text>
            </div>
            <div className="h-[313px] relative w-full">
              <Img
                className="h-[313px] m-auto object-cover w-full"
                src="images/img_360f115852367.png"
                alt="360f115852367"
                style={{ borderBottomLeftRadius: "20px" }} // Adjust the radius value as needed
              />

              <div className="absolute flex flex-col md:gap-10 gap-[213px] inset-x-[0] justify-start mx-auto top-[2%] left-[-1%] w-[85%]">
                {/* <Img
                  className="h-[30px] ml-1.5 md:ml-[0] w-[30px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                /> */}
                <div className="h-[30px] ml-1.5 md:ml-[0] w-[30px]"></div>
                <Button
                  className="cursor-pointer font-semibold text-[13.33px] text-center w-[251px]"
                  shape="round"
                  color="black_900_7f"
                  size="md"
                  variant="fill"
                >
                  Mike - Agency Owner
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-solid flex flex-col gap-[35px] items-center justify-end p-5 purple_A700_amber_400_border rounded-[15px] w-[48%] md:w-full">
            <div className="flex flex-col items-start justify-start mt-2.5 w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="bg-clip-text text-xl w-auto"
                  size="txtInterBold20"
                  style={{ color: "#F0C419" }}
                >
                  Simple Pricing
                </Text>
              </div>
              <div className="flex flex-col font-lato gap-8 h-[231px] md:h-auto items-start justify-start mt-[25px] w-60">
                <Text
                  className="text-[16.67px] text-gray-500 w-auto"
                  size="txtLatoRegular1667"
                >
                  Inbox Sales Starts Today.
                </Text>
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="flex flex-row gap-[5.99px] items-center justify-center w-auto">
                    <Img
                      className="h-[17px] w-[17px]"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle"
                    />
                    <Text
                      className="text-[13.47px] text-blue_gray-800 w-auto"
                      size="txtLatoRegular1347"
                    >
                      Automated Email Warmup
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5.99px] items-center justify-center w-auto">
                    <Img
                      className="h-[17px] w-[17px]"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_One"
                    />
                    <Text
                      className="text-[13.47px] text-blue_gray-800 w-auto"
                      size="txtLatoRegular1347"
                    >
                      Up to 100 Emails Per Day
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5.99px] items-center justify-center w-auto">
                    <Img
                      className="h-[17px] w-[17px]"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Two"
                    />
                    <Text
                      className="text-[13.47px] text-blue_gray-800 w-auto"
                      size="txtLatoRegular1347"
                    >
                      Unlimited Deliverability Test
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5.99px] items-center justify-center w-auto">
                    <Img
                      className="h-[17px] w-[17px]"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Three"
                    />
                    <Text
                      className="text-[13.47px] text-blue_gray-800 w-auto"
                      size="txtLatoRegular1347"
                    >
                      Choose Warm-Up Language
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5.99px] items-center justify-center w-auto">
                    <Img
                      className="h-[17px] w-[17px]"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Four"
                    />
                    <Text
                      className="text-[13.47px] text-blue_gray-800 w-auto"
                      size="txtLatoRegular1347"
                    >
                      Dedicated Inbox Success Agent
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mt-[33px] w-full" />
              <Text
                className="mt-[19px] sm:text-[19.95px] md:text-[21.95px] text-[23.95px] text-blue_gray-800"
                size="txtInterBold2395"
              >
                <span className="text-blue_gray-800 font-inter text-left font-bold">
                  $
                </span>
                <span className="text-blue_gray-800 font-inter text-left font-bold">
                  2
                </span>
                <span className="text-blue_gray-800 font-inter text-left font-bold">
                  9
                </span>
                <span className="text-blue_gray-800 font-inter text-left text-[13.47px] font-normal">
                  /month
                </span>
              </Text>
            </div>
            <a href="https://buy.stripe.com/3cs2ax04F0wrcG47sD" target="_blank">
              <Button
                className="cursor-pointer font-semibold min-w-[280px] rounded-lg text-[16.47px] text-center"
                shape="round"
                color="purple_A700_amber_400"
                // onClick={(}
              >
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProcessingPage;

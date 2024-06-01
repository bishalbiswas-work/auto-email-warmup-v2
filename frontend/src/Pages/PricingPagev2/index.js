import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const PricingPagev2 = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter sm:gap-10 md:gap-10 gap-[78px] items-center justify-start mx-auto p-8 sm:px-5 w-full">
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
            {/* <div className="font-poppins font-semibold text-center text-xs">
              Try For Free
            </div> */}
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[34px] items-center justify-center mb-[78px] md:px-5 w-[46%] md:w-full">
          <div
            className="flex flex-col items-start justify-center p-7 sm:px-5 rounded-[15px] w-[48%] md:w-full"
            style={{
              background: "linear-gradient(180deg, #f0c419, #f68714)",
            }}
          >
            <div className="flex flex-row gap-3 items-center justify-end mt-2.5 w-auto">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images2/img_ellipse469.png"
                alt="ellipse469"
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Shreya Babulkar
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-white-A700 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    CMO
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 w-auto">
              <Text
                className="leading-[150.00%] max-w-[242px] md:max-w-full text-white-A700 text-xs"
                size="txtInterRegular12"
              >
                Thanks to this warmup tool I increased my open rates. I started
                interacting with companies from all around the world and the
                business started raising.
              </Text>
            </div>
            <Line className="bg-white-A700_19 h-px mt-[34px] w-full" />
            <div className="h-[114px] md:h-[136px] md:ml-[0] ml-[5px] mt-9 relative w-[96%]">
              <div
                className="absolute bg-cover bg-no-repeat bottom-[2%] flex flex-col h-[102px] inset-x-[0] items-center justify-start mx-auto p-[3px] w-[88%]"
                style={{ backgroundImage: "url('images2/img_group1.svg')" }}
              >
                <div className="flex flex-col gap-[9px] items-center justify-start mb-[55px] mt-[5px] w-[97%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-[73%] md:w-full">
                    <Text
                      className="text-[7.6px] text-center text-white-A700"
                      size="txtInterBold76"
                    >
                      30
                    </Text>
                    <Text
                      className="text-[7.6px] text-center text-white-A700"
                      size="txtInterBold76"
                    >
                      70
                    </Text>
                  </div>
                  <div className="flex flex-row items-end justify-between w-full">
                    <Text
                      className="text-[11.35px] text-center text-red-A700"
                      size="txtInterBold1135"
                      style={{ color: "red" }}
                    >
                      20
                    </Text>
                    <Text
                      className="mt-[5px] text-[7.6px] text-center text-white-A700"
                      size="txtInterBold76"
                    >
                      80
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="absolute bottom-[0] h-2.5 left-[0] text-[7.6px] text-center text-white-A700"
                size="txtInterBold76"
              >
                00
              </Text>
              <Text
                className="absolute bottom-[0] right-[0] text-[7.6px] text-center text-white-A700"
                size="txtInterBold76"
              >
                100
              </Text>
              <Text
                className="absolute bottom-[26%] left-[2%] text-[7.6px] text-center text-white-A700"
                size="txtInterBold76"
              >
                10
              </Text>
              <Text
                className="absolute bottom-1/4 right-[4%] text-[7.94px] text-center text-white-A700"
                size="txtInterBold794"
              >
                90
              </Text>
              <Text
                className="absolute left-[33%] text-[7.6px] text-center text-white-A700 top-[3%]"
                size="txtInterBold76"
              >
                40
              </Text>
              <Text
                className="absolute right-[33%] text-[7.6px] text-center text-white-A700 top-[3%]"
                size="txtInterBold76"
              >
                60
              </Text>
              <Text
                className="absolute inset-x-[0] mx-auto text-[7.6px] text-center text-white-A700 top-[0] w-max"
                size="txtInterBold76"
              >
                50
              </Text>
              <Img
                className="absolute bottom-[0] h-[37px] left-[29%]"
                src="images2/img_settings.svg"
                alt="settings"
              />
            </div>
            <div
              className="flex flex-col gap-3.5 items-center justify-start mb-[15px] md:ml-[0] ml-[29px] mt-[31px] w-auto"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <Text
                className="bg-white-A700_33 border border-solid border-white-A700 justify-center px-4 py-[7px] rounded-lg text-sm text-white-A700 w-auto"
                size="txtInterSemiBold14"
              >
                <span className="text-white-A700 font-inter text-left font-semibold">
                  <>Health score -&gt; </>
                </span>
                <span
                  className="text-red-A700 font-inter text-left font-semibold"
                  style={{ color: "red" }}
                >
                  20%
                </span>
              </Text>
              <Text
                className="text-white-A700 text-xs underline w-auto"
                size="txtInterSemiBold12"
              >
                <span className="text-red-A700_01 font-inter text-left font-semibold">
                  ⚠️
                </span>
                <span className="text-white-A700 font-inter text-left font-semibold">
                  {" "}
                </span>
                <span className="text-white-A700 font-inter text-left font-semibold">
                  Your mailbox needs attention
                </span>
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 border border-solid flex flex-col gap-[35px] items-center justify-end p-[19px] purple_A700_amber_400_border rounded-[15px] w-[48%] md:w-full">
            <div className="flex flex-col items-start justify-start mt-[11px] w-[92%] md:w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="bg-clip-text text-transparent text-xl w-auto"
                  size="txtInterBold20"
                  style={{ color: "#f68714" }}
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
                      src="images2/img_bxscheckcircle.svg"
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
                      src="images2/img_bxscheckcircle.svg"
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
                      src="images2/img_bxscheckcircle.svg"
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
                      src="images2/img_bxscheckcircle.svg"
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
                      src="images2/img_bxscheckcircle.svg"
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
                  3
                </span>
                <span className="text-blue_gray-800 font-inter text-left font-bold">
                  9
                </span>
                <span className="text-blue_gray-800 font-inter text-left text-[13.47px] font-normal">
                  /month
                </span>
              </Text>
            </div>
            <a href="https://buy.stripe.com/14kcPb6t32Ez8pOaF4" target="_blank">
              <Button
                className="cursor-pointer font-semibold min-w-[260px] rounded-lg text-[16.47px] text-center"
                color="purple_A700_amber_400"
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

export default PricingPagev2;

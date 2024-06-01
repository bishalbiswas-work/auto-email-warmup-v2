import React from "react";

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

import { useNavigate } from "react-router-dom";
const ExtensionLandingPagePage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/automated-email-warm-up");
  };
  return (
    <>
      <div className="bg-gradient2  flex flex-col font-lato gap-2 items-center justify-end mx-auto py-[22px] w-full">
        <header className="bg-white-A700 flex md:gap-10 items-center justify-between mt-[9px] p-5 md:px-5 rounded-[20px] shadow-bs1 w-full">
          <div className="flex flex-row font-dmserifdisplay gap-1.5 items-center justify-center w-auto">
            <Img
              className="h-6 md:h-auto object-cover w-5"
              src="images/img_.png"
              alt="Two"
            />
            <Text
              className="bg-clip-text capitalize text-xl w-auto"
              size="txtDMSerifDisplayRegular20"
              style={{ color: "#F0C419" }}
            >
              Auto-warmup
            </Text>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[130px] rounded-[20px]"
            rightIcon={
              <Img
                className="h-4 mb-0.5 ml-1"
                src="images/img_icfluentarrowdown24filled_1_white_a700.svg"
                alt="ic_fluent_arrow_down_24_filled 1"
              />
            }
            color="purple_A700_amber_400"
          >
            <div className="font-poppins font-semibold text-center text-xs">
              Try For Free
            </div>
          </Button>
        </header>
        <div className="flex flex-col h-[3317px] md:h-auto items-start justify-start w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-[60px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] h-[360px] md:h-auto items-start justify-start">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800 w-full"
                  size="txtAntipastoProDemiBold40"
                >
                  <span className="text-blue_gray-800 font-dmserifdisplay text-left font-normal">
                    Your
                  </span>
                  <span className="text-purple-A700 font-dmserifdisplay text-left font-normal">
                    {" "}
                    Automated
                  </span>
                  <span className="text-blue_gray-800 font-dmserifdisplay text-left font-normal">
                    {" "}
                    Email Warm-up
                  </span>
                </Text>
                <Text
                  className="leading-[170.00%] text-base text-blue_gray-800_bf"
                  size="txtLatoRegular16"
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
                  <Input
                    name="fieldbox"
                    placeholder="Enter your email"
                    className="p-0 placeholder:text-gray-600 text-left text-xs w-full"
                    wrapClassName="border border-gray-200 border-solid flex-1 sm:flex-1 w-[76%] sm:w-full"
                    type="email"
                  ></Input>
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
                    >
                      Warm up{" "}
                    </Text>
                    <Img
                      className="h-4 md:h-auto object-cover w-5"
                      src="images/img_ddd1c2476bcb099.png"
                      alt="ddd1c2476bcb099"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-inter gap-7 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start py-3 w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 md:flex-1 flex-col gap-2.5 items-center justify-start w-auto md:w-full">
                    <div className="flex flex-row gap-1 items-end justify-end w-auto">
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_One"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Two"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Three"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Four"
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-start justify-center w-auto">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_64ff14a97ca75b3.svg"
                        alt="64ff14a97ca75bThree"
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
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_One"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Two"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Three"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Four"
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-start justify-center w-auto">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_close.svg"
                        alt="close"
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
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_One"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Two"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Three"
                      />
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[19px]"
                        src="images/img_6343dcbd22ea712.png"
                        alt="6343dcbd22ea712_Four"
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-start justify-center w-auto">
                      <Img
                        className="h-3.5 md:h-auto object-cover w-3.5"
                        src="images/img_image90.png"
                        alt="imageNinety"
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
                            on Google
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="relative w-[38%] md:w-full">
              <Img
                className="absolute h-[360px] inset-[0] justify-center m-auto object-cover w-[430px]"
                src="images/img_frame1000003149.png"
                alt="frame1000003149"
              />
              <div className="md:h-[331px] h-[360px] ml-0.5 my-auto relative w-[94%] sm:w-full">
                <img
                  src="images/hero-section-img.png"
                  alt="automated email warm-up"
                />
                {/* <div className="absolute bg-white-A700 flex flex-col justify-start pb-3.5 right-[13%] rounded-[16px] top-[0] w-[65%]">
                  <Img
                    className="h-[148px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px]"
                    src="images/img_rectangle45.png"
                    alt="rectangleFortyFive"
                  />
                  <Img
                    className="h-16 md:ml-[0] ml-[113px] mt-[75px] w-[63px]"
                    src="images/img_frame1000003232.svg"
                    alt="frame1000003232"
                  />
                  <Text
                    className="leading-[150.00%] md:ml-[0] ml-[129px] text-[10px] text-blue_gray-700 tracking-[0.41px]"
                    size="txtLatoBold10"
                  >
                    <>
                      Gradually incraese
                      <br />
                      your ROI with Warnup
                    </>
                  </Text>
                </div>
                <div className="absolute bottom-[0] h-[164px] left-[0] p-[19.74px] w-[186px]">
                  <div className="absolute h-[164px] ml-auto my-auto w-[88%]">
                    <div className="bg-white-A700 border border-black-900_0c border-solid h-[164px] ml-auto my-auto rounded-[13px] w-full"></div>
                    <div className="absolute flex flex-row gap-[7px] h-max inset-y-[0] items-center justify-between my-auto right-[0] w-[88%]">
                      <List
                        className="sm:flex-col flex-row gap-1.5 grid grid-cols-7 w-[77%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto md:ml-[0] ml-[3px] object-cover"
                            src="images/img_group59.png"
                            alt="groupFiftyNine"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            04
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto md:ml-[0] ml-[3px] object-cover"
                            src="images/img_group59.png"
                            alt="groupSixty"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            05
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto md:ml-[0] ml-[3px] object-cover"
                            src="images/img_group59.png"
                            alt="groupSixtyOne"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            06
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto md:ml-[0] ml-[3px] object-cover"
                            src="images/img_group59.png"
                            alt="groupSixtyTwo"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            07
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto md:ml-[0] ml-[3px] object-cover"
                            src="images/img_group59.png"
                            alt="groupSixtyThree"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            08
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto md:ml-[0] ml-[3px] object-cover"
                            src="images/img_group59.png"
                            alt="groupSixtyFour"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            09
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto ml-0.5 md:ml-[0] object-cover"
                            src="images/img_group59.png"
                            alt="groupSixtyFive"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            10
                          </Text>
                        </div>
                      </List>
                      <List
                        className="sm:flex-col flex-row gap-1.5 grid grid-cols-2 w-[19%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto object-cover"
                            src="images/img_group59.png"
                            alt="groupSixtySix"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            11
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[106px] md:h-auto ml-0.5 md:ml-[0] object-cover"
                            src="images/img_group59.png"
                            alt="groupSixtySeven"
                          />
                          <Text
                            className="h-2.5 text-[8.23px] text-blue-100 tracking-[0.41px]"
                            size="txtLatoRegular823"
                          >
                            12
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[84px] outline outline-[1px] outline-teal-700 rounded"
                    leftIcon={
                      <Img
                        className="h-4 mr-1 right-[13%] absolute"
                        src="images/img_frame.svg"
                        alt="Frame"
                      />
                    }
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-bold text-[10px] text-left tracking-[0.41px]">
                      Up by 28%
                    </div>
                  </Button>
                </div>
                <div className="absolute md:h-[146px] h-[148px] right-[0] top-[21%] w-[43%]">
                  <div className="absolute h-[146px] inset-[0] justify-center m-auto w-full">
                    <div className="h-[146px] m-auto w-full">
                      <Img
                        className="absolute h-[146px] inset-y-[0] my-auto right-[0]"
                        src="images/img_g772.svg"
                        alt="g772"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-start left-[0] top-[21%] w-[48%]"
                        style={{
                          backgroundImage: "url('images/img_group4.png')",
                        }}
                      >
                        <div
                          className="bg-cover bg-no-repeat md:h-9 h-[62px] relative w-full"
                          style={{
                            backgroundImage: "url('images/img_group6.svg')",
                          }}
                        >
                          <Img
                            className="absolute h-9 left-[0] top-[0]"
                            src="images/img_settings.svg"
                            alt="settings"
                          />
                          <Img
                            className="absolute bottom-[18%] h-[23px] right-[0]"
                            src="images/img_settings_white_a700.svg"
                            alt="settings_One"
                          />
                          <Img
                            className="absolute bottom-[0] h-[30px] left-[10%]"
                            src="images/img_settings_white_a700.svg"
                            alt="settings_Two"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[30%] h-[27px] left-[29%] w-[26px]"
                      src="images/img_settings_white_a700_27x26.svg"
                      alt="settings_Three"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[58px] items-start justify-start right-[10%] w-[56%]"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      className="h-[11px] mb-[42px]"
                      src="images/img_path1012.svg"
                      alt="path1012"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[19%] h-7 left-[7%] w-7"
                    src="images/img_frame_amber_300.svg"
                    alt="frame"
                  />
                </div>
                <Button
                  className="absolute flex h-9 items-center justify-center left-[18%] rotate-[-12deg] rounded-md shadow-bs top-[33%] w-9"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_group14.png" alt="groupFourteen" />
                </Button>
                <Button
                  className="absolute flex h-9 items-center justify-center left-[6%] rotate-[12deg] rounded-md top-[9%] w-9"
                  color="amber_300_7f"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_group9.png" alt="groupNine" />
                </Button> */}
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-manrope md:gap-10 gap-40 items-center justify-end max-w-[1440px] md:px-10 sm:px-5 px-[200px] py-[60px] w-full">
            <div className="relative w-[42%] md:w-full">
              <Img
                className="absolute h-[360px] inset-[0] justify-center m-auto object-cover w-[430px]"
                src="images/img_frame1000003149.png"
                alt="frame1000003149_One"
              />
              {/* <div className="m-auto relative w-[394px] sm:w-full">
                <div className="md:h-[311px] h-[360px] ml-auto my-auto w-[94%] sm:w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[204px] items-start justify-end left-[0] p-[11px] w-[62%]"
                    style={{
                      backgroundImage:
                        "url('images/img_productaddbymonth.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[93%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-[7.35px] text-black-900_99"
                          size="txtManropeMedium735"
                        >
                          Warmup Emails sent each month
                        </Text>
                      </div>
                      <div className="flex flex-col font-nunito gap-[9px] items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-start w-4/5 md:w-full">
                          <div className="flex flex-col items-center justify-start w-2.5">
                            <Text
                              className="text-[7.35px] text-black-900_99_01"
                              size="txtNunitoRegular735"
                            >
                              Jan
                            </Text>
                          </div>
                          <Img
                            className="h-[7px] ml-[7px]"
                            src="images/img_progress.svg"
                            alt="progress"
                          />
                          <Text
                            className="ml-[9px] text-[7.35px] text-black-900_02"
                            size="txtNunitoRegular735Black90002"
                          >
                            23,400
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[55%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-3">
                            <Text
                              className="text-[7.35px] text-black-900_99_01"
                              size="txtNunitoRegular735"
                            >
                              Feb
                            </Text>
                          </div>
                          <Img
                            className="h-[7px] ml-1.5"
                            src="images/img_television.svg"
                            alt="television"
                          />
                          <div className="flex flex-col items-center justify-start ml-[9px]">
                            <Text
                              className="text-[7.35px] text-black-900_02"
                              size="txtNunitoRegular735Black90002"
                            >
                              15,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[95%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[7.35px] text-black-900_99_01"
                              size="txtNunitoRegular735"
                            >
                              Mar
                            </Text>
                          </div>
                          <Img
                            className="h-[7px] ml-1"
                            src="images/img_progress.svg"
                            alt="progress_One"
                          />
                          <div className="flex flex-col items-center justify-start ml-[9px]">
                            <Text
                              className="text-[7.35px] text-black-900_02"
                              size="txtNunitoRegular735Black90002"
                            >
                              30,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[72%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-3">
                            <Text
                              className="text-[7.35px] text-black-900_99_01"
                              size="txtNunitoRegular735"
                            >
                              Apr
                            </Text>
                          </div>
                          <Img
                            className="h-[7px] ml-[5px]"
                            src="images/img_television.svg"
                            alt="television_One"
                          />
                          <div className="flex flex-col items-center justify-start ml-[9px]">
                            <Text
                              className="text-[7.35px] text-black-900_02"
                              size="txtNunitoRegular735Black90002"
                            >
                              22,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[46%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[7.35px] text-black-900_99_01"
                              size="txtNunitoRegular735"
                            >
                              May
                            </Text>
                          </div>
                          <div className="bg-blue-A200 h-[7px] ml-1 rounded-br-[18px] rounded-tr-[18px] w-[42%]"></div>
                          <div className="flex flex-col items-center justify-start ml-[9px]">
                            <Text
                              className="text-[7.35px] text-black-900_02"
                              size="txtNunitoRegular735Black90002"
                            >
                              10,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-center justify-start w-2.5">
                            <div className="flex flex-col items-center justify-start w-2.5 md:w-full">
                              <Text
                                className="text-[7.35px] text-black-900_99_01"
                                size="txtNunitoRegular735"
                              >
                                Jun
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[7px]"
                            src="images/img_progress.svg"
                            alt="progress_Two"
                          />
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[7.35px] text-black-900_02"
                              size="txtNunitoRegular735Black90002"
                            >
                              23,400
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[31%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[7.35px] text-black-900_99_01"
                              size="txtNunitoRegular735"
                            >
                              Jul
                            </Text>
                          </div>
                          <div className="bg-blue-A200 h-[7px] ml-[9px] rounded-br-[18px] rounded-tr-[18px] w-[19%]"></div>
                          <div className="flex flex-col items-center justify-start ml-[9px]">
                            <Text
                              className="text-[7.35px] text-black-900_02"
                              size="txtNunitoRegular735Black90002"
                            >
                              5,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-center justify-start w-2.5">
                            <div className="flex flex-col items-center justify-start w-2.5 md:w-full">
                              <Text
                                className="text-[7.35px] text-black-900_99_01"
                                size="txtNunitoRegular735"
                              >
                                Jun
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[7px]"
                            src="images/img_progress.svg"
                            alt="progress_Three"
                          />
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[7.35px] text-black-900_02"
                              size="txtNunitoRegular735Black90002"
                            >
                              23,400
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[311px] object-cover right-[0] top-[0] w-[53%]"
                    src="images/img_image109.png"
                    alt="image109"
                  />
                  <div className="absolute flex flex-row font-lato gap-2.5 items-start justify-between left-[0] top-[32%] w-[36%]">
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
                </div>
                <div className="absolute flex flex-col font-lato items-center justify-start left-[0] top-[16%] w-auto">
                  <Button
                    className="bg-transparent border border-solid cursor-pointer flex items-center justify-center min-w-[123px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-4 mb-px mr-2"
                        src="images/img_frame_16x16.png"
                        alt="Frame"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  >
                    <div className="!text-purple-A700 font-medium leading-[normal] purple_A700_amber_400_border2 text-left text-xs">
                      Add Mailbox
                    </div>
                  </Button>
                </div>
              </div> */}
              <img src="images/section-1.png" />
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
                  className="leading-[170.00%] text-base text-blue_gray-800_bf"
                  size="txtLatoRegular16"
                >
                  <>
                    Setup in 30 seconds & let the AI warm you up while you inbox
                    rate soars.
                    <br />
                    <br />
                    See your Email Health, add other users & Switch on or off at
                    any time.
                  </>
                </Text>
              </div>
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
                  src="images/img_svg.png"
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
                      className="text-center text-gray-800 text-xl w-full"
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
                  src="images/img_svg_20x125.png"
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
                  src="images/img_unsplashwmd64tmfc4k.png"
                  alt="unsplashwmd64tm"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#F0C419" }}
                    >
                      James Pattinson
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
                  src="images/img_unsplashwmd64tmfc4k_72x72.png"
                  alt="unsplashwmd64tm"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#F0C419" }}
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
                  src="images/img_unsplashwmd64tmfc4k_1.png"
                  alt="unsplashwmd64tm"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#F0C419" }}
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
                  src="images/img_ellipse5.png"
                  alt="ellipseFive"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#F0C419" }}
                    >
                      Daniyal Dehleh
                    </Text>
                    <Text
                      className="text-center text-purple-900 text-xs w-auto"
                      size="txtLatoRegular12"
                    >
                      CEO @BeTimeful
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
                  src="images/img_ellipse40.png"
                  alt="ellipseForty"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="bg-clip-text text-base text-center w-auto"
                      size="txtDMSerifDisplayRegular16"
                      style={{ color: "#F0C419" }}
                    >
                      Emily Smith
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
                className="bg-clip-text   sm:text-2xl md:text-[26px] text-[28px] text-center  tracking-[0.56px] w-auto"
                size="txtDMSerifDisplayRegular28PurpleA700"
                style={{ color: "#F0C419" }}
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
                    src="images/img_image91.png"
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
                      src="images/img_image107.png"
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
                      src="images/img_image96.png"
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
                      src="images/img_image92.png"
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
                      src="images/img_image105.png"
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
                      src="images/img_image106.png"
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
                      src="images/img_image97.png"
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
                      src="images/img_image99.png"
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
                      src="images/img_image98.png"
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
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-auto">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[29px] sm:w-full"
                      src="images/img_image108.png"
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
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.65px] w-8">
                    <Img
                      className="h-5 md:h-auto object-cover w-5"
                      src="images/img_image95.png"
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
                      src="images/img_image94.png"
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
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-center my-0 w-full">
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-auto">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[29px] sm:w-full"
                      src="images/img_image93.png"
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
                      src="images/img_image104.png"
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
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-[33px]">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[22px] sm:w-full"
                      src="images/img_image101.png"
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
                  <div className="flex flex-col items-center justify-center p-[6.4px] w-auto">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[47px] sm:w-full"
                      src="images/img_image103.png"
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
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-8">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[21px]"
                      src="images/img_image102.png"
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
                <div className="bg-white-A700 border border-black-900_0c border-solid flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-[10px] w-auto">
                  <div className="flex flex-col items-center justify-center p-[5.33px] w-8">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[21px]"
                      src="images/img_image100.png"
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
              </div>
            </List>
          </div>
          <div className="bg-white-A700 flex flex-col font-lato h-[509px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-[60px] w-full">
            <div className="bg-gradient3  flex md:flex-col flex-row gap-6 items-center justify-start max-w-[805px] pr-20 md:px-5 py-8 rounded-[20px] w-full">
              <Img
                className="h-[270px] w-[292px]"
                src="images/img_divneverinfovisualmargin.svg"
                alt="divneverinfovis"
              />
              <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="leading-[130.00%] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
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
                  <Input
                    name="fieldbox_One"
                    placeholder="Enter your email"
                    className="p-0 placeholder:text-gray-600 text-left text-xs w-full"
                    wrapClassName="border border-gray-200 border-solid flex-1 sm:flex-1 w-[66%] sm:w-full"
                    type="email"
                  ></Input>
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
                    >
                      Warm up{" "}
                    </Text>
                    <Img
                      className="h-4 md:h-auto object-cover w-5"
                      src="images/img_ddd1c2476bcb099.png"
                      alt="ddd1c2476bcb099_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="bg-white-A700 flex flex-col font-dmsans items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[140px] py-[60px] w-full">
            <div className="flex flex-col gap-10 items-center justify-start max-w-[1160px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[81px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 h-full items-start justify-between pb-1 w-full">
                  <div className="flex flex-col h-[110px] md:h-auto items-start justify-between w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
                        size="txtDMSansBold28"
                      >
                        Auto-Warm
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                    <div className="flex flex-col items-end justify-start w-[7%]">
                      <Img
                        className="h-[18px] md:h-auto object-cover"
                        src="images/img_facebook.png"
                        alt="facebook"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[11%]">
                      <Img
                        className="h-3.5 md:h-auto object-cover"
                        src="images/img_twitter.png"
                        alt="twitter"
                      />
                    </div>
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[19px]"
                      src="images/img_socialmediaicon.png"
                      alt="socialmediaicon"
                    />
                    <div className="flex flex-col items-center justify-start w-[19px]">
                      <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                        <Img
                          className="h-[17px] md:h-auto object-cover w-[18px] sm:w-full"
                          src="images/img_linkedin_17x18.png"
                          alt="linkedin"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[12%]">
                      <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                        <Img
                          className="h-3.5 md:h-auto object-cover"
                          src="images/img_youtube.png"
                          alt="youtube"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-dmserifdisplay items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[0.16px] w-auto"
                        size="txtDMSerifDisplayRegular16Bluegray900"
                      >
                        About us
                      </Text>
                    </div>
                    <div className="flex flex-col font-lato gap-4 items-start justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <div className="flex flex-col h-5 items-center justify-start w-5">
                          <div className="flex flex-col h-5 items-center justify-start p-[3px] w-5">
                            <Img
                              className="h-2.5"
                              src="images/img_lock.svg"
                              alt="lock"
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
                          src="images/img_linkedin.svg"
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
              <Line className="bg-gray-300 h-px w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtensionLandingPagePage;

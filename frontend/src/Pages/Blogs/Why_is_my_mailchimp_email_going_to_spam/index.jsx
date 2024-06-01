import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

//
import LoaderBarv2 from "components/LoaderBarv2/LoaderBarv2";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
const Why_is_my_mailchimp_email_going_to_spam = () => {
  const sideBarMenu = [
    { label: "  Travelling is an enriching" },
    { label: "  Pack Lightly and smartly" },
    { label: "  Stay safe and healthy" },
    { label: "  Immerse yourself in local culture" },
    { label: "  Capture Memories" },
    { label: "  Conclusion" },
  ];
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [businessMetaData, setBusinessMetaData] = useState(
    dataContext.businessMetaData
  );
  const [blogs, setBlogs] = useState(dataContext.blogs);

  const [blog, setBlog] = useState(dataContext.blogs[dataContext.selectedBlog]);
  // console.log("Blog: ", blog);
  const handleClickNext = () => {
    navigate("/pricing");
    // navigate("/onboarding/dns-setup");
  };
  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0 });
  }, []);

  // ===========================================================

  // Content Highlighting

  // const [activeSection, setActiveSection] = useState("");

  // const handleScroll = () => {
  //   const positions = {
  //     introduction: introductionRef.current.getBoundingClientRect().top,
  //     firstParagraph: firstParagraphRef.current.getBoundingClientRect().top,
  //     // and so on for each section
  //   };

  //   // Determine which section is active based on scroll position
  //   const currentSection = setActiveSection(currentSection); // logic to determine based on positions
  // };

  // // Add event listener for scroll
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // ===========================================================

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <LoaderBarv2 />
        <header className="bg-white-A700 flex md:gap-10 items-center justify-between px-10 md:px-5 py-5 rounded-tl-[20px] rounded-tr-[20px] shadow-bs2 w-full">
          <Button
            className="flex h-[46px] items-center justify-center w-[46px]"
            shape="circle"
            color="white_A700"
            variant="fill"
          >
            {/* <Img src={dataContext.businessMetaData.faviconUrl} alt="logo" /> */}
            <Img src="/favicon.ico" alt="logo" />
          </Button>
          {/* <div className="flex flex-col items-center justify-start w-auto">
            <Button
              className="bg-gradient cursor-pointer font-semibold py-2 rounded-[50px] shadow-bs2  text-center text-xs md:text-md  w-[200px] mt-[10px]"
              onClick={() => {
                handleClickNext();
              }}
              style={{ fontSize: "10px", color: "white" }}
            >
              Connect to{" "}
              {(dataContext.businessMetaData?.name?.charAt(0)?.toUpperCase() ??
                "") + (dataContext.businessMetaData?.name?.slice(1) ?? "")}{" "}
              <InsertLinkIcon sx={{ marginBottom: "1px" }} />
            </Button>
          </div> */}
        </header>

        <div className="flex flex-col font-lato h-[2516px] md:h-auto items-center justify-start w-auto md:w-full mt-[20px]">
          <div
            className="bg-white-A700 flex flex-col items-start justify-start max-w-[1440px] w-full"
            style={{ width: "1440px !important" }}
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Sidebar className="!sticky !w-[335px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
                {/* <Text
                  className="mb-[658px] ml-[100px] mr-[117px] mt-[39px] text-base text-gray-900 w-auto"
                  size="txtLatoBold16"
                >
                  Table of Content
                </Text>
                <Button
                  className="cursor-pointer font-medium mb-[577px] ml-28 mr-[51px] mt-[113px] rounded-md text-[13px] text-center w-[172px]"
                  color="deep_purple_50"
                  size="sm"
                  variant="fill"
                >
                  Research your destination
                </Button>
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: 0,
                      flexDirection: "column",
                      paddingBottom: "100px",
                      paddingLeft: "100px",
                      color: "#181a2a",
                      fontSize: "13px",
                    },
                  }}
                  className="flex flex-col items-center justify-start mb-[362px] mt-20 md:pr-10 sm:pr-5 pr-[149px] w-[56%]"
                >
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </Menu> */}
                <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col font-worksans gap-6 items-start justify-start left-[0] px-4 py-6 rounded-[12px] top-[0] w-[303px] md:hidden">
                  <Text
                    className="text-gray-900_03 text-lg w-auto"
                    size="txtWorkSansSemiBold18"
                    style={{ fontWeight: "500" }}
                  >
                    Table of Content
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start px-4 w-full">
                    {/* Title */}
                    {blog.content.title && (
                      <Text
                        className="text-gray-900_03 text-sm w-auto"
                        size="txtWorkSansRomanRegular14Gray90003"
                      >
                        {blog.content.title}
                      </Text>
                    )}
                    <Text
                      className="text-gray-900_03 text-sm w-auto"
                      size="txtWorkSansSemiBold18"
                      style={{ fontWeight: "600" }}
                    >
                      Introduction
                    </Text>

                    {/* Paragraph titles */}
                    {blog.content.paragraphs.map((paragraph, index) => (
                      <Text
                        key={index}
                        className="text-gray-900_03 text-sm w-auto"
                        size="txtWorkSansRomanRegular14Gray90003"
                      >
                        {paragraph.title}
                      </Text>
                    ))}

                    {/* Conclusion */}

                    {blog.content.conclusion &&
                      blog.content.conclusion.title && (
                        <>
                          <Text
                            className="text-gray-900_03 text-sm w-auto"
                            size="txtWorkSansSemiBold18"
                            style={{ fontWeight: "600" }}
                          >
                            Conclusion
                          </Text>
                          <Text
                            className="text-gray-900_03 text-sm w-auto"
                            size="txtWorkSansRomanRegular14Gray90003"
                          >
                            {blog.content.conclusion.title}
                          </Text>
                        </>
                      )}
                  </div>
                </div>
              </Sidebar>
              <div className="flex flex-1 flex-col items-start justify-start md:px-5 w-full">
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-10 sm:px-5 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <div className="flex flex-row font-worksans gap-3 items-start justify-start w-auto">
                        {/* <Button
                          className="cursor-pointer font-medium min-w-[101px] rounded-md text-center text-sm"
                          color="indigo_A200"
                          size="sm"
                          variant="fill"
                        >
                          Technology
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[101px] rounded-md text-center text-sm"
                          color="indigo_A200"
                          size="sm"
                          variant="fill"
                        >
                          Technology
                        </Button> */}
                        {blogs[dataContext.selectedBlog].seoKeywords.map(
                          (item, index) => (
                            <Button
                              key={index}
                              className="cursor-pointer font-medium min-w-[97px]  text-center text-sm px-[10px] py-[5px]"
                              style={{
                                backgroundColor: `rgb(75 107 251  )`,
                                color: "white",
                                borderRadius: "5px",
                              }}
                            >
                              {item}
                            </Button>
                          )
                        )}
                      </div>
                      <Text
                        className="leading-[150.00%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtLatoBold24"
                        style={{ fontWeight: "500" }}
                      >
                        <>{blog.title}</>
                      </Text>
                      <div className="flex sm:flex-col flex-row font-lato gap-3 items-start justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-center w-auto">
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtLatoRegular14"
                          >
                            November 20, 2023
                          </Text>
                          <div className="bg-blue_gray-100 h-1 rounded-[50%] w-1"></div>
                          {/* <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtLatoRegular14"
                          >
                            10 min read
                          </Text> */}
                          <div className="bg-blue_gray-100 h-1 rounded-[50%] w-1"></div>
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtLatoRegular14"
                          >
                            <span className="text-gray-500 font-lato text-left font-normal">
                              By{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-gray-500 font-lato text-left font-normal underline"
                            >
                              {businessMetaData.name.charAt(0).toUpperCase() +
                                businessMetaData.name.slice(1)}
                            </a>
                          </Text>
                        </div>
                        {/* <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="text-deep_purple-A200 text-sm underline w-auto"
                            size="txtLatoSemiBold14"
                          >
                            Edit Blogs
                          </Text>
                          <Img
                            className="h-4 w-4"
                            src="/images3/pencile.svg"
                            alt="frame"
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[398px] sm:h-auto object-cover rounded-[12px] w-[708px] md:w-full"
                    src={
                      blog.imagesUrl[0].imageUrl
                        ? blog.imagesUrl[0].imageUrl
                        : ""
                    }
                    alt="rectangleThirtyEight"
                  />
                  {/* <div
                    onClick={() => {
                      handleClickNext();
                    }}
                    className=" border  border-solid flex  flex-row font-roboto gap-3 items-center justify-start px-2 py-3 rounded-[12px] w-full"
                    style={{
                      borderColor: "lightgray",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    <Img
                      className="h-8 w-8"
                      src="/images3/img_play.svg"
                      alt="play"
                    />
                    <div className="flex-1">
                      <Img
                        className="h-[31px] w-full"
                        src="/images3/img_waveform.svg"
                        alt="waveform"
                      />
                    </div>

                    <Text
                      className="text-base text-black-900_01 w-auto"
                      size="txtRobotoRomanRegular16"
                      style={{
                        display: "block",
                        width: "80px",
                        fontSize: "10px",
                      }}
                    >
                      <span className="text-black-900_01 font-roboto text-left font-normal">
                        0:00{" "}
                      </span>
                      <span className="text-black-900_01 font-roboto text-left font-normal">
                        / 1:28
                      </span>
                    </Text>
                    <Img
                      className="h-[22px] w-[22px]"
                      src="/images3/img_volume_black_900_01.svg"
                      alt="volume"
                    />
                  </div> */}
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                      size="txtWorkSansSemiBold24"
                    >
                      {/* {item.title} */}
                    </Text>
                    <Text
                      className="leading-[170.00%] text-blue_gray-700 text-sm"
                      size="txtSourceSerifProRegular20"
                    >
                      {/* {item.body} */}
                      {blog.content.intro}
                    </Text>
                  </div>
                  {blog.content.paragraphs.slice(0, 3).map((item, index) => (
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                        size="txtWorkSansSemiBold24"
                      >
                        {item.title}
                      </Text>
                      <Text
                        className="leading-[170.00%] text-blue_gray-700 text-sm"
                        size="txtSourceSerifProRegular20"
                      >
                        {item.body}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="bg-white-A700 flex flex-1 flex-col h-[718px] md:h-auto items-start justify-start pl-5 md:pr-5 pr-[100px] py-10 w-full"
                style={{ maxWidth: "300px" }}
              >
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-5 items-center justify-start p-4 rounded-[12px] w-auto ">
                  <Line className="bg-gray-900_0c h-px w-[90%]" />

                  <div className="flex flex-col items-start justify-start w-auto ">
                    <List
                      className="flex flex-col gap-[23px] items-center w-full"
                      orientation="vertical"
                    >
                      <Text
                        className="text-[13.5px] text-center text-gray-900_03 w-auto"
                        size="txtWorkSansRomanRegular135"
                      >
                        Share this blog:
                      </Text>
                      <div className="flex flex-row gap-[17.29px] items-start justify-start w-auto">
                        <Button
                          className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images3/img_facebook.svg"
                            alt="facebook"
                          />
                        </Button>
                        <Button
                          className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images3/img_linkedin.svg"
                            alt="linkedin"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[17.29px] items-start justify-start w-auto">
                        <Button
                          className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images3/img_twitter.svg"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                          color="white_A700"
                          size="sm"
                        >
                          <Img
                            className="h-[34px]"
                            src="/images3/img_insta.svg"
                            alt="reddit"
                          />
                        </Button>
                      </div>
                    </List>
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

export default Why_is_my_mailchimp_email_going_to_spam;

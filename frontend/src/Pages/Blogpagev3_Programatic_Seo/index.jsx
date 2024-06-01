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

import jsonData from "./data.json"; // Update the path as per your project structure

const Blogpagev3_Programatic_Seo = () => {
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
  //
  //
  //
  //
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    // Function to replace markdown links with HTML hyperlinks
    function modifyJsonData(data) {
      return data.map((item) => {
        // Replace markdown-style links with HTML hyperlinks
        item.answer = item.answer.replace(
          /\[([^\]]+)]\((https?:\/\/[^\)]+)\)/g,
          '<a style="color: #700; font-weight: bold;" href="$2">$1</a>'
        );

        // Make sentences with **word word** bold
        item.answer = item.answer.replace(
          /\*\*([^*]+)\*\*/g,
          "<strong>$1</strong>"
        );

        return item;
      });
    }

    // Modify jsonData
    var modifiedjsonData = modifyJsonData(jsonData);
    // Function to format the current URL
    const formatUrl = (url) => {
      // Extract the part of the URL that matches the question format
      // Implement the logic based on your URL structure
      return url.split("/").pop();
    };

    // Get the current URL
    const currentUrl = window.location.href;
    const formattedUrl = formatUrl(currentUrl);

    // Find the matching question and set the answer
    const matchingItem = modifiedjsonData.find(
      (item) => item.question.replace(/\s/g, "-").toLowerCase() === formattedUrl
    );
    if (matchingItem) {
      setFaq(matchingItem);
    }
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
            <Img
              className="h-6 md:h-auto object-fit "
              src="images2/img_.png"
              alt="Three"
            />
          </Button>
          <div className="flex flex-col items-center justify-start w-auto">
            <a href="https://automatedemailwarmup.com">
              <Button
                className="bg-gradient cursor-pointer font-semibold py-2 rounded-[50px] shadow-bs2  text-center text-xs md:text-md  w-[200px] mt-[10px]"
                onClick={() => {
                  handleClickNext();
                }}
                style={{ fontSize: "10px", color: "white" }}
              >
                {/* Connect to{" "}
              {(dataContext.businessMetaData?.name?.charAt(0)?.toUpperCase() ??
                "") + (dataContext.businessMetaData?.name?.slice(1) ?? "")}{" "}
              <InsertLinkIcon sx={{ marginBottom: "1px" }} /> */}
                Autoated Email Warmup
              </Button>
            </a>
          </div>
        </header>

        <div className="flex flex-col font-lato h-[1216px] md:h-auto items-center justify-start w-auto md:w-full mt-[20px]">
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
                {/* <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col font-worksans gap-6 items-start justify-start left-[0] px-4 py-6 rounded-[12px] top-[0] w-[303px] md:hidden">
                  <Text
                    className="text-gray-900_03 text-lg w-auto"
                    size="txtWorkSansSemiBold18"
                    style={{ fontWeight: "500" }}
                  >
                    Table of Content
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start px-4 w-full">
     
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

  
                    {blog.content.paragraphs.map((paragraph, index) => (
                      <Text
                        key={index}
                        className="text-gray-900_03 text-sm w-auto"
                        size="txtWorkSansRomanRegular14Gray90003"
                      >
                        {paragraph.title}
                      </Text>
                    ))}
                    <Text
                      className="text-gray-900_03 text-sm w-auto"
                      size="txtWorkSansRomanRegular14Gray90003"
                    >
                      <Text
                        className="text-gray-900_03 text-sm w-auto"
                        size="txtWorkSansRomanRegular14Gray90003"
                      >
                        {faq.answer}
                      </Text>
                    </Text>

                  

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
                </div> */}
              </Sidebar>
              <div className="flex flex-1 flex-col items-start justify-start md:px-5 w-full">
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-10 sm:px-5 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      {/* <div className="flex flex-row font-worksans gap-3 items-start justify-start w-auto">
              
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
                      </div> */}
                      <Text
                        className="leading-[150.00%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtLatoBold24"
                        style={{ fontWeight: "500" }}
                      >
                        {/* <>{blog.title}</> */}
                        {faq && faq.question
                          ? faq.question.charAt(0).toUpperCase() +
                            faq.question.slice(1)
                          : ""}
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
                              href="https://automatedemailwarmup.com"
                              className="text-gray-500 font-lato text-left font-normal underline"
                            >
                              {/* {businessMetaData.name.charAt(0).toUpperCase() +
                                businessMetaData.name.slice(1)} */}
                              Automatedemailwarmup
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
                    // src={
                    //   blog.imagesUrl[0].imageUrl
                    //     ? blog.imagesUrl[0].imageUrl
                    //     : ""
                    // }
                    src="images3/email-filter.png"
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
                      style={{
                        lineHeight: "2",
                      }}
                    >
                      {/* {item.body} */}
                      {/* {blog.content.intro} */}
                      {/* {faq && faq.answer
                        ? faq.answer.charAt(0).toUpperCase() +
                          faq.answer.slice(1)
                        : ""} */}

                      <>
                        {faq && faq.answer ? (
                          <p
                            style={{
                              fontSize: "inherit",
                              lineHeight: "inhert",
                              fontStyle: "inherit",
                            }}
                            dangerouslySetInnerHTML={{
                              __html:
                                faq.answer.charAt(0).toUpperCase() +
                                faq.answer.slice(1),
                            }}
                          />
                        ) : (
                          ""
                        )}
                      </>
                    </Text>
                  </div>
                  {/* {blog.content.paragraphs.slice(0, 3).map((item, index) => (
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
                  ))} */}

                  {/* <div className="backdrop-opacity-[0.5] blur-[4.00px] flex flex-col font-lato items-start justify-start w-full">
                    <Text
                      className="leading-[170.00%] text-blue_gray-700 text-sm"
                      size="txtLatoRegular14Bluegray700"
                    >
                      <span className="text-blue_gray-700 font-lato text-left font-normal">
                        <>
                          Traveling is an enriching experience that opens up new
                          horizons, exposes us to different cultures, and
                          creates memories that last a lifetime. However,
                          traveling can also be stressful and overwhelming,
                          especially if you don&#39;t plan and prepare
                          adequately. In this blog article, we&#39;ll explore
                          tips and tricks for a memorable journey and how to
                          make the most of your travels.
                          <br />
                          <br />
                          One of the most rewarding aspects of{" "}
                        </>
                      </span>
                      <span className="text-blue_gray-700 font-lato text-left font-bold">
                        traveling
                      </span>
                      <span className="text-blue_gray-700 font-lato text-left font-normal">
                        <>
                          {" "}
                          is immersing yourself in the local culture and
                          customs. <br />
                        </>
                      </span>
                      <span className="text-blue_gray-700 font-lato text-left font-normal">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="text-blue_gray-700 font-lato text-left font-normal">
                        <>
                          Traveling is an enriching experience that opens up new
                          horizons, exposes us to different cultures, and
                          creates memories that last a lifetime. However,
                          traveling can also be stressful and overwhelming,
                          especially if you don&#39;t plan and prepare
                          adequately. In this blog article, we&#39;ll explore
                          tips and tricks for a memorable journey and how to
                          make the most of your travels..{" "}
                        </>
                      </span>
                    </Text>
                  </div> */}

                  {/* <div
                    className="bg-deep_purple-A200_19 flex flex-col font-lato gap-8 items-center justify-center sm:px-5 px-8 py-10 rounded-[12px] w-full"
                    style={{ backgroundColor: "rgba(123, 104, 238, 0.1)" }}
                  >
                    <div className="flex flex-col gap-4 items-center justify-center w-full">
                      <Text
                        className="text-base text-center text-deep_purple-A200 w-full"
                        size="txtLatoBold16DeeppurpleA200"
                      >
                        Ready to Rank without Breaking the Bank?
                      </Text>
                      <Text
                        className="leading-[170.00%] text-base text-center text-deep_purple-A200"
                        size="txtLatoBold16DeeppurpleA200"
                      >
                        <>
                          <br />
                          Connect your website to{" "}
                          {(dataContext.businessMetaData?.name
                            ?.charAt(0)
                            ?.toUpperCase() ?? "") +
                            (dataContext.businessMetaData?.name?.slice(1) ??
                              "")}
                          , and watch your business soar to new heights!
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start w-auto">
                      <Button
                        className="bg-gradient cursor-pointer font-semibold py-2 rounded-[50px] shadow-bs2  text-center text-lg w-[230px] mt-[10px]"
                        onClick={() => {
                          handleClickNext();
                        }}
                        style={{ fontSize: "10px", color: "white" }}
                      >
                        Connect to{" "}
                        {(dataContext.businessMetaData?.name
                          ?.charAt(0)
                          ?.toUpperCase() ?? "") +
                          (dataContext.businessMetaData?.name?.slice(1) ??
                            "")}{" "}
                        <InsertLinkIcon sx={{ marginBottom: "1px" }} />
                      </Button>
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className="bg-white-A700 flex flex-1 flex-col h-[718px] md:h-auto items-start justify-start pl-5 md:pr-5 pr-[100px] py-10 w-full"
                style={{ maxWidth: "300px" }}
              >
                {/* <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-5 items-center justify-start p-4 rounded-[12px] w-auto ">
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
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="bg-white-A700 flex flex-col gap-10 items-center justify-center md:px-10 sm:px-5 px-[100px] py-10 w-full">
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl w-auto"
              size="txtLatoBold24Gray90001"
              style={{ fontWeight: "500" }}
            >
              <>We&#39;ve Ranked 10K businesses & Counting...</>
            </Text>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-center mx-auto w-full">
              <div className="h-[300px] w-[11%]"></div>
              <div className="flex flex-col items-center justify-center w-[285px]">
                <div className="bg-gradient  border border-black-900_0c border-solid flex flex-col gap-[17.82px] items-start justify-start p-[17.82px] rounded-[20px] w-full">
                  <div className="flex flex-row gap-[10.69px] items-center justify-start w-auto">
                    <div className="h-7 relative w-7">
                      <div className="bg-white-A700 h-7 m-auto rounded-[50%] w-7"></div>
                      <Img
                        className="absolute h-7 inset-[0] justify-center m-auto object-cover w-7"
                        src="/images3/Ellipse 40.png"
                        alt="maskgroup"
                      />
                    </div>
                    <div className="flex flex-col gap-[3.56px] items-start justify-start w-auto">
                      <Text
                        className="text-[14.26px] text-white-A700 w-auto"
                        size="txtLatoBold1426"
                      >
                        Sarah
                      </Text>
                      <Text
                        className="text-[10.69px] text-white-A700 w-auto"
                        size="txtLatoRegular1069"
                      >
                        Founder @FMF
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <Text
                    className="leading-[170.00%] text-[14.26px] text-white-A700 tracking-[-0.14px]"
                    size="txtLatoMedium1426"
                  >
                    <>
               
                      This is a competition killer. I only focus on product &
                      customers now while autoSEO takes care of the targeted
                      organic traffic.
                    </>
                  </Text>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <div className="flex flex-row gap-[10.69px] items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-[5.35px] items-center justify-start p-[14.26px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-[14.26px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1426"
                      >
                        10K+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[10.69px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1069"
                      >
                        Organic Traffic
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[5.35px] items-center justify-start p-[14.26px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-[14.26px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1426"
                      >
                        9+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[10.69px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1069"
                      >
                        Blogs Ranking
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-80">
                <div className="bg-gradient  border border-black-900_0c border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <div className="h-8 relative w-8">
                      <div className="bg-white-A700 h-8 m-auto rounded-[16px] w-[31px]"></div>
                      <Img
                        className="absolute h-8 inset-[0] justify-center m-auto object-cover w-[31px]"
                        src="/images3/daniyal.png"
                        alt="maskgroup_One"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtLatoBold16WhiteA700"
                      >
                        Daniyal
                      </Text>
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtLatoRegular12"
                      >
                        Founder@BeTimeful
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <Text
                    className="leading-[170.00%] text-base text-white-A700 tracking-[-0.16px]"
                    size="txtLatoMedium16"
                  >
                    <>
                      This is every entrepreneur&#39;s dream. <br />
                      It gives you time back + targeted organic traffic so you
                      drive your business forward.
                    </>
                  </Text>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-1.5 items-center justify-start p-4 rounded-[12px] shadow-bs4 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-base text-center text-transparent w-auto"
                        size="txtLatoSemiBold16"
                      >
                        10K+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-center text-transparent text-xs w-auto"
                        size="txtLatoSemiBold12"
                      >
                        Organic Traffic
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-1.5 items-center justify-start p-4 rounded-[12px] shadow-bs4 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-base text-center text-transparent w-auto"
                        size="txtLatoSemiBold16"
                      >
                        121
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-center text-transparent text-xs w-auto"
                        size="txtLatoSemiBold12"
                      >
                        Blogs Ranking
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex sm:flex-col flex-row gap-[10.71px] items-center  w-[350px]"
                orientation="horizontal"
              >
               
                <div className="bg-gradient  border border-black-900_0c border-solid flex flex-col gap-[17.86px] items-start justify-start p-[17.86px] rounded-[20px] w-full">
                  <div className="flex flex-row gap-[10.71px] items-center justify-start w-auto">
                    <div className="h-7 relative w-9">
                      <div className="bg-white-A700 h-7 m-auto rounded-[50%] w-7"></div>
                      <Img
                        className="absolute h-7 inset-[0] justify-center m-auto object-cover w-7"
                        src="/images3/img_ellipse6.png"
                        alt="maskgroup"
                      />
                    </div>
                    <div className="flex flex-col gap-[3.57px] items-start justify-start w-auto">
                      <Text
                        className="text-[14.29px] text-white-A700 w-auto"
                        size="txtLatoBold1429"
                      >
                        Leo
                      </Text>
                      <Text
                        className="text-[10.71px] text-white-A700 w-auto"
                        size="txtLatoRegular1071"
                      >
                        Lead Designer
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <Text
                    className="leading-[170.00%] text-[14.29px] text-white-A700 tracking-[-0.14px]"
                    size="txtLatoMedium1429"
                  >
                    <>
                      From the moment I integrated the AI SEO tool, I've seen
                      nothing but hassle free targeted growth. It's like having
                      a dedicated SEO expert working 24/7, while I focus on what
                      I do best.
                    </>
                  </Text>
                  <Line className="bg-white-A700_0c h-px w-full" />
                  <div className="flex flex-row gap-[10.71px] items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-[5.36px] items-center justify-start p-[14.29px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-[14.29px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1429"
                      >
                        8k+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[10.71px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1071"
                      >
                        Organic Traffic
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[5.36px] items-center justify-start p-[14.29px] rounded-[10px] shadow-bs3 w-auto">
                      <Text
                        className="bg-clip-text bg-gradient  text-[14.29px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1429"
                      >
                        7+
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[10.71px] text-center text-transparent w-auto"
                        size="txtLatoSemiBold1071"
                      >
                        Blogs Ranking
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="h-[300px] w-[11%]"></div>
            </div>
         
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Blogpagev3_Programatic_Seo;

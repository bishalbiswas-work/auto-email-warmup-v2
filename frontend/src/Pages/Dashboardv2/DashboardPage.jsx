import SemiCircleProgressBar from "react-progressbar-semicircle";
import { CircularProgressWithLabel } from "components/Progress";
import FormDialog from "components/Dialog";
import { useState } from "react";
import { Switch } from "components";
import { useEffect } from "react";

import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
// ----------------------------------------------------------------------

import { useNavigate } from "react-router-dom";
import AppPasswordv2 from "drawers/AppPasswordv2";

export default function DashboardView() {
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  // const [warmupEmailsList, setWarmupEmailList] = useState();
  const [takeAppPasswordEmail, setTakeAppPasswordEmail] = useState("");
  const [takeAppPassword, setTakeAppPassword] = useState(false);
  const [stopReload, setStopReload] = useState(false);
  const [userStep, setUserStep] = useState(1);
  const [emailForToken, setEmailForToken] = useState("");
  // const [mailData, setMailData] = useState(
  //   JSON.parse(localStorage.getItem("mailData")) || []
  // );
  const [mailData, setMailData] = useState();
  // JSON.parse(localStorage.getItem("mailData")) || []

  const percentage = 20;

  const addMail = async (e) => {
    const email = e; // Assuming e contains the email

    const data = {
      mainEmail: mailData[0].mainEmail,
      newWarmupEmail: email,
    };

    try {
      await dataContext.newWarmupEmail(data);
      await reloadWarmUpEmails();
      // setTakeAppPasswordEmail(email);
      // setTakeAppPassword(true);

      // Do something after successfully adding the email
    } catch (error) {
      // Handle error
      console.error("Error adding email:", error);
    }
  };
  async function reloadWarmUpEmails() {
    if (!mailData[0].mainEmail) {
      return;
    } else {
      console.log("email", mailData[0].mainEmail);
      const userDetails = await dataContext.getUserDetails(
        mailData[0].mainEmail
      );
      console.log("userDetails", userDetails);
      const percentage = 20;

      // const userDoc = userDetails.data.userDoc;
      const userDoc = userDetails.userDoc;

      console.log("userDoc", userDoc);

      // Retrieve the warmupEmails array
      const warmupEmails = userDoc.warmupEmails || []; // Ensure this is always an array

      console.log("warmupEmails ", warmupEmails);

      // Map warmupEmails to emaildata, adding predefined values
      const emaildata = warmupEmails.map((item, index) => {
        const lastWarmup = item.lastWarmup || {}; // Use an empty object if lastWarmup is null
        return {
          id: index + 1, // Increment index by 1 to start id from 1
          status: userDoc.status,
          mainEmail: userDoc.email, // Add the main email to the object
          email: item.email,
          accountHealth: 8.5,
          deliverability: percentage,
          notBlack: 81,
          lastWarmupDate: lastWarmup.date || "No date available", // Provide a fallback value
          lastWarmupCount: lastWarmup.count || 0, // Provide a fallback value
          creditsAvailable: item.creditsAvailable || 0, // Provide a fallback if creditsAvailable is null
          warmupStatus: item.warmupStatus || "paused", // Provide a default status if warmupStatus is null
        };
      });

      console.log("emaildata", emaildata);

      // Save the emaildata array into localStorage as a JSON string
      localStorage.setItem("mailData", JSON.stringify(emaildata));
      setReload(true);
      // Optionally store the main email
      // localStorage.setItem("mainEmail", JSON.stringify(userDoc.email));

      // navigate("/dashboard");
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
    console.log("open", open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSwitchChange = async (index, checked) => {
    // Determine the new warmupStatus based on the switch's new state
    const newWarmupStatus = checked ? "active" : "paused";
    // Update specific mail's warmupStatus
    setMailData((currentMailData) =>
      currentMailData.map((mail, mailIndex) =>
        mailIndex === index ? { ...mail, warmupStatus: newWarmupStatus } : mail
      )
    );
    const data = {
      mainEmail: mailData[index].mainEmail,
      warmupEmail: mailData[index].email,
      warmupStatus: checked ? "active" : "paused", // Set warmupStatus to 'active' if checked is true, otherwise 'paused'
    };

    console.log("Update SW data ", data);
    await dataContext.updateUserEmailWarmupStatus(data);
  };
  // const updateWarmupStatus
  useEffect(() => {
    // Attempt to retrieve and parse the 'mailData' item from localStorage
    const mailData = JSON.parse(localStorage.getItem("mailData")) || [];

    // Check if the mailData array is empty
    if (mailData.length === 0) {
      // Redirect to the login page
      navigate("/login");
    }
  }, [navigate]);
  useEffect(() => {
    setMailData(JSON.parse(localStorage.getItem("mailData")) || []);
  }, []);
  useEffect(() => {
    setMailData(JSON.parse(localStorage.getItem("mailData")) || []);
  }, [reload]);

  useEffect(() => {
    const fetchEmailSetup = async () => {
      if (!mailData || mailData.length === 0) {
        return; // Early exit if mailData is empty or undefined
      }

      const userDetails = await dataContext.getUserDetails(
        mailData[0].mainEmail
      );
      console.log("Checking the Access : ", userDetails);

      // Safely accessing warmupEmails with optional chaining
      const warmupEmailsList = userDetails?.userDoc?.warmupEmails;
      console.log("Checking the Access : ", warmupEmailsList);

      if (warmupEmailsList && warmupEmailsList.length > 0) {
        for (let index = 0; index < warmupEmailsList.length; index++) {
          const emailItem = warmupEmailsList[index];
          // try {
          //   const sendData = {
          //     userEmail: emailItem.email,
          //   };
          //   const res = await dataContext.getWarmupEmailSetup(sendData);
          //   console.log("Token ", res);
          //   // Checking res.data.data safely using optional chaining and defaulting with {}
          //   const responseData = res?.data?.data || {};
          //   const accessTokenPresent = responseData.accessToken;
          //   const status = res?.data?.status;

          //   if (!accessTokenPresent || !status) {
          //     setTakeAppPassword(true);
          //     // setTakeAppPasswordEmail(emailItem.email);
          //     handleSwitchChange(index, false);
          //     setOpen(true);
          //     setUserStep(2);
          //     setEmailForToken(emailItem.email);
          //     setStopReload(true);
          //     console.log("Access Token is not present : ", emailItem.email);
          //     // break; // Uncomment if you only want to set the first found without an access token
          //   } else {
          //     console.log("Access Token is present : ", emailItem.email);
          //   }
          // } catch (error) {
          //   console.error("Failed to fetch warmup email setup:", error);
          // }
        }
      }
    };
    if (!stopReload) {
      fetchEmailSetup();
    }
  }, [mailData]); // Dependency on mailData ensures useEffect runs when mailData changes

  const settings = {};
  return (
    <>
      <div className="flex gap-0.5 rounded-3xl max-md:flex-wrap">
        <img
          style={{ marginBottom: "65vh" }}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97e5ac7859a63cd36b4b14a939c0ea633f28526456bf2ebd609a816614ac2fba?apiKey=599dc50b3d834ed59f450af622cca86d&"
          className=""
        />
        <div className="flex flex-col flex-1 max-md:max-w-full">
          {/* <div className="flex flex-col justify-center items-end px-16 py-5 bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex border border-white border-solid">
              <img
                loading="lazy"
                style={{
                  width: "40px",
                  height: "40px",
                }}
                src="https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png"
                className="flex-1 shrink-0 w-full aspect-square"
              />
            </div>
          </div> */}
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-6 pt-6 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
                  {/* <div
                    style={{
                      color: "white",
                    }}
                    className="flex gap-5 justify-between py-1.5 pr-2.5 pl-5 text-sm text-white shadow-lg bg-[linear-gradient(135deg,#7C3AED_0%,#5821B6_100%)] rounded-[100px] max-md:flex-wrap max-md:max-w-full"
                  >
                    <div className="flex gap-3 my-auto font-medium leading-6 max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4868392a8f5e577365890f1317e2099d7db4df8a1f81e96ae4ee455c3e031ac4?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="my-auto w-4 aspect-square"
                      />
                      <div className="flex-auto max-md:max-w-full">
                        Let AI Do Your SEO So You Rank On Google Fast!
                      </div>
                    </div>
                    <div className="flex gap-3 justify-between pr-3 font-bold whitespace-nowrap leading-[140%]">
                      <div className="flex gap-1 justify-between px-2.5 py-1 rounded-sm">
                        <div className="grow">
                          <a href="https://automateseo.co/" target="_blank">
                            Get it now
                          </a>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c0d65d929add1634357883dd69f0136d4b63f3538ea16e9c047863a50e31188?apiKey=599dc50b3d834ed59f450af622cca86d&"
                          className="my-auto w-4 aspect-square"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dfa89efde24e33e51a4c1a42f2b2c3e158d016b1083110e36bd14d35ba6a451?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="my-auto w-4 aspect-square"
                      />
                    </div>
                  </div> */}
                  <div className="flex flex-col justify-center px-5 py-4 mt-8 text-base leading-7 bg-white rounded-2xl border border-solid border-black border-opacity-10 text-neutral-700 max-md:max-w-full">
                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/40a59c38f5424718d11e77dc9f12739aff894320d0e9eee74644652ae2c11154?apiKey=599dc50b3d834ed59f450af622cca86d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/40a59c38f5424718d11e77dc9f12739aff894320d0e9eee74644652ae2c11154?apiKey=599dc50b3d834ed59f450af622cca86d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40a59c38f5424718d11e77dc9f12739aff894320d0e9eee74644652ae2c11154?apiKey=599dc50b3d834ed59f450af622cca86d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/40a59c38f5424718d11e77dc9f12739aff894320d0e9eee74644652ae2c11154?apiKey=599dc50b3d834ed59f450af622cca86d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/40a59c38f5424718d11e77dc9f12739aff894320d0e9eee74644652ae2c11154?apiKey=599dc50b3d834ed59f450af622cca86d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40a59c38f5424718d11e77dc9f12739aff894320d0e9eee74644652ae2c11154?apiKey=599dc50b3d834ed59f450af622cca86d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/40a59c38f5424718d11e77dc9f12739aff894320d0e9eee74644652ae2c11154?apiKey=599dc50b3d834ed59f450af622cca86d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/40a59c38f5424718d11e77dc9f12739aff894320d0e9eee74644652ae2c11154?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="w-8 aspect-square"
                      />
                      <div className="grow max-md:max-w-full mt-2">
                        Your Daily Email Limit is 100. Please Increase by 10 Per
                        day.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto self-start mt-2.5 text-lg font-semibold leading-7 text-neutral-800">
                      Mailbox managment
                    </div>
                    <div
                      style={{
                        color: "white",
                      }}
                      onClick={() => {
                        // console.log("Clicked");
                        handleClickOpen();
                      }}
                      className="flex gap-2 justify-between px-4 py-3 text-sm font-medium leading-4 text-white whitespace-nowrap border border-solid bg-[linear-gradient(180deg,#FFC300_0%,#FF5733_100%)] border-[color:var(--G1,#FFC300)] rounded-[32px]"
                    >
                      <div className="mb-0.5 cursor-pointer grow">
                        Add new mailbox
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/79671c35c08f1ac1ec76b81b1a14f27536f23c838a250f565e219e8939cf74c1?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="w-4 aspect-square"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col px-6 py-5 mt-8 bg-white rounded-xl border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
                    <table>
                      <tr className="pb-5 w-full text-base font-bold leading-6 whitespace-nowrap border-b-2 border-solid border-black border-opacity-10 text-opacity-80 max-md:flex-wrap max-md:max-w-full">
                        <th className="justify-between pr-3  pb-3.5 ">
                          <div className="grow">Status</div>
                        </th>
                        <th className="justify-between pb-3.5 ">
                          <div
                            className="grow"
                            style={{
                              textAlign: "start",
                            }}
                          >
                            Email address
                          </div>
                        </th>
                        <th className="justify-between pb-3.5 ">
                          <div className="grow">Account health</div>
                        </th>
                        <th className="justify-between pr-1.5 pb-3.5 ">
                          <div className="grow">Deliverability</div>
                        </th>
                        <th className="justify-between pb-3.5 ">
                          <div className="grow">Not backlisted</div>
                        </th>
                        <th
                          className="grow pb-3.5"
                          style={{
                            textAlign: "start",
                          }}
                        >
                          Action
                        </th>
                      </tr>

                      {mailData?.length ? (
                        mailData.map((mail, index) => (
                          <tr
                            key={mail?.id}
                            style={{
                              borderBottomWidth: "1px",
                              cellPadding: "25px",
                            }}
                            className="border-b-2  border-black border-opacity-10"
                          >
                            <td className="flex flex-col justify-center py-5 pr-0.5 pl-5 aspect-[1.85] fill-white stroke-[1px] stroke-black">
                              {/* <Switch value={mail?.status} onColor="#FFC300" /> */}
                              {console.log("mail", mail.warmupStatus)}
                              <Switch
                                onChange={(checked) =>
                                  handleSwitchChange(index, checked)
                                }
                                value={mail.warmupStatus === "active"}
                                onColor="#FFC300"
                              />
                            </td>
                            <td className="flex-auto text-sm tracking-tight text-zinc-700  ">
                              {mail?.email}
                            </td>
                            <td className="flex-auto text-sm tracking-tight text-center  text-zinc-700">
                              {mail?.accountHealth}%
                            </td>
                            <td className="grow text-sm tracking-tight text-center  py-5  text-zinc-700">
                              {mail?.deliverability}%
                            </td>
                            <td className="grow text-sm tracking-tight text-center  py-5  text-zinc-700">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1876fec2b50522ab16d508a1b379d624b0e3a1bcc2b3e501c69bd9821209e530?apiKey=599dc50b3d834ed59f450af622cca86d&"
                                className="my-auto aspect-[1.06] fill-[linear-gradient(135deg,#0A9271_0%,#088B83_100%)] mx-auto pb-1"
                              />
                            </td>
                            <td className="flex pl-3 justify-between py-5">
                              {/* <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1876fec2b50522ab16d508a1b379d624b0e3a1bcc2b3e501c69bd9821209e530?apiKey=599dc50b3d834ed59f450af622cca86d&"
                                className="my-auto aspect-[1.06] fill-[linear-gradient(135deg,#0A9271_0%,#088B83_100%)] w-[17px]"
                              /> */}
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/214688b1eec4f626496cc175af94fe20d746775a786ca44f0d6d4d1a3b28883b?apiKey=599dc50b3d834ed59f450af622cca86d&"
                                className="aspect-square w-[30px] cursor-pointer"
                                onClick={() =>
                                  setMailData(
                                    mailData?.filter(
                                      (item) => item.id !== mail?.id
                                    )
                                  )
                                }
                              />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <p
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "20px",
                          }}
                        >
                          No Mails
                        </p>
                      )}
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-6 pt-6 pb-12 w-full font-medium bg-white max-md:px-5">
                  <div className="flex flex-col items-center px-10 py-6 whitespace-nowrap bg-white rounded-xl border border-solid border-black border-opacity-10 max-md:px-5">
                    <div className="text-lg font-semibold tracking-normal text-neutral-700">
                      Deliverability score
                    </div>
                    {/* <div className="flex overflow-hidden relative flex-col justify-center items-center pr-6 mt-6 text-3xl tracking-tighter text-center aspect-[2.05] fill-slate-200 text-neutral-900 w-[209px] max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b3aa5f5155bfab632c289c0a8c39fed042721c447f327cb421eb551726ed52c?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="flex relative flex-col gap-5 justify-between pt-8 aspect-[1.81] fill-emerald-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c5e277947f821f5bb990cdcadcb9b552ae10cc22855ee8ca98d361555e8c9af?apiKey=599dc50b3d834ed59f450af622cca86d&"
                          className="object-cover absolute inset-0 size-full"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d7f65131b827f3688a00b838845f01857f6189ffcad8dcd55c5e3b421b7811?apiKey=599dc50b3d834ed59f450af622cca86d&"
                          className="w-10 aspect-[0.57] fill-zinc-300"
                        />
                        <div className="relative flex-auto self-end mt-10">
                          94%
                        </div>
                      </div>
                    </div> */}
                    <SemiCircleProgressBar
                      percentage={percentage}
                      showPercentValue
                      stroke={"#118868"}
                    />
                    <div className="mt-2 text-xs text-blue-500">
                      Last updated 1 Mar 24
                    </div>
                  </div>
                  <div className="flex overflow-hidden overflow-hidden  flex-col px-5 py-6 mt-6 w-full text-sm bg-white rounded-xl border border-solid border-black border-opacity-10 text-neutral-800">
                    <div
                      className="flex overflow-hidden relative flex-col gap-5 justify-between self-center px-6 py-3 text-base font-semibold text-emerald-600 aspect-[3.13] fill-white stroke-[1px] stroke-black stroke-opacity-10 max-md:px-5"
                      style={{ minHeight: "80px" }}
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9f4e17e3c9781fe0bb4feea40cac0c494c92582bcd8880d5482b0955aa7d85?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div
                        className="relative flex-col justify-center whitespace-nowrap aspect-square"
                        style={{
                          paddingBottom: "45px",
                        }}
                      >
                        <CircularProgressWithLabel value={percentage} />
                        {/* Good Health */}
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-7">
                      <div>Mailbox temp.</div>
                      <div className="bg-clip-text bg-[linear-gradient(180deg,#FFC300_0%,#FF5733_100%)]">
                        <span className="font-bold">100</span> /day
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-7 whitespace-nowrap">
                      <div>SPF</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0e2d4a452f9d21f2c6f03ef6287e62c206970ef4a569bff14fab17e83ae5e0?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="w-5 aspect-square"
                      />
                    </div>
                    <div className="flex gap-5 justify-between mt-4 whitespace-nowrap">
                      <div>DKIM</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0e2d4a452f9d21f2c6f03ef6287e62c206970ef4a569bff14fab17e83ae5e0?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="w-5 aspect-square"
                      />
                    </div>
                    <div className="flex gap-5 justify-between mt-4 whitespace-nowrap">
                      <div>DMARC</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0e2d4a452f9d21f2c6f03ef6287e62c206970ef4a569bff14fab17e83ae5e0?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="w-5 aspect-square"
                      />
                    </div>
                    <div className="flex gap-5 justify-between mt-4">
                      <div>Not blacklisted</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0e2d4a452f9d21f2c6f03ef6287e62c206970ef4a569bff14fab17e83ae5e0?apiKey=599dc50b3d834ed59f450af622cca86d&"
                        className="w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AppPasswordv2
        email={takeAppPasswordEmail}
        leftProp={takeAppPassword}
        setLeftProp={setTakeAppPassword}
      /> */}
      <FormDialog
        open={open}
        handleClose={handleClose}
        addMail={addMail}
        emailForToken={emailForToken}
        userStep={userStep}
        setUserStep={setUserStep}
      />
    </>
  );
}

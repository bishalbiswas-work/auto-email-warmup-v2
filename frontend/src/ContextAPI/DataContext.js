import React from "react";
import DataContext from "./DataState";
import { useState, useEffect } from "react";
import axios from "axios";

// Firebase
import { db } from "../Pages/Auth/Firebase";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getDatabase, ref, onValue, off, get, remove } from "firebase/database";

// End Firebase
const DataState = (props) => {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";
  const APP_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";
  // const APP_ID = "834715744964121";
  // const APP_SECRET = "2582a389247cbe3902699eea25594d1d";
  const [appID, setAppID] = useState("834715744964121");
  const [appSecret, setAppSecret] = useState(
    "2582a389247cbe3902699eea25594d1d"
  );
  // const [appID, setAppID] = useState("267736178943787");
  // const [appSecret, setAppSecret] = useState(
  //   "2cbf96cf1d16da97da365d9964d585bf"
  // );
  const [userDetails, setUserDetails] = useState({
    email: "",
    name: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");

  const [uid, setUid] = useState("");
  const [docId, setDocId] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const [phoneNumber, setPhoneNumber] = useState(""); // Initialize with your default values
  const [website, setWebsite] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m MessengerGPT, ask me anything about MessengerGPT!",
    },
    {
      sender: "bot",
      text: "By the way, did you know you can have your own custom GPT connected to your messenger?",
    },
  ]);
  const [messagesLP, setMessagesLP] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m MessengerGPT, ask me anything about MessengerGPT!",
    },
    {
      sender: "bot",
      text: "By the way, did you know you can have your own custom GPT connected to your messenger?",
    },
  ]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [commonQuestions, setCommonQuestions] = useState([]);
  const [aboutBusiness, setAboutBusiness] = useState("");
  const [collectEmail, setCollectEmail] = useState(false);
  const [collectPhoneNo, setCollectPhoneNo] = useState(false);
  const [collectName, setCollectName] = useState(false);

  const [facebookToken, setFacebookToken] = useState({
    userProfileName: "",
    userProfileEmail: "",
    userId: "",
    userProfileToken: "",
    userProfileLongLiveToken: "",
    pageId: "",
    pageLongLiveToken: "",
    pageProfileImg: "",
  });
  const [facebookPages, setFacebookPages] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedPage, setSelectedPage] = useState();
  const [messageContext, setMessageContext] = useState();
  const [selectedBlog, setSelectedBlog] = useState(1);
  const [urlKeywordStored, setUrlKeywordStored] = useState("");
  // ===========================================

  // ==========================================
  const [businessMetaData, setBusinessMetaData] = useState({
    status: false,
    domain: "",
    facebookLink: "",
    linkedinLink: "",
    twitterLink: "",
    redditLink: "",
    voice: "",
    message: "",
    name: "",
    faviconUrl: "",
    summary: "",
  });
  const [blogs, setBlogs] = useState([
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
          body: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", "stock analysis, comparison, automated data updates"],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
          body: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
        },
      },
    },
    {
      title: "",
      seoKeywords: ["", ""],
      imageKeywords: ["", ""],
      imagesUrl: [
        {
          imageUrl: "",
        },
        {
          imageUrl: "",
        },
      ],
      content: {
        title: "",
        intro: "",
        paragraphs: [
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
          {
            title: "",
            body: "",
          },
        ],
        conclusion: {
          title: "",
        },
      },
    },
  ]);
  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setIsLoggedIn(true);
      console.log("User Logged In");
    }
  }, []);
  const setonboardingUserDetails = ({ email, name }) => {
    setUserDetails({
      email: email,
      name: name,
    });
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const setInputUrlFunction = ({ data }) => {
    setInputUrl(data);
  };
  const setUrlKeywordStoredFunction = ({ data }) => {
    setUrlKeywordStored(data);
  };
  const setBlogsFunction = ({ data }) => {
    setBlogs(data);
  };
  const setSelectedBlogFunction = ({ data }) => {
    setSelectedBlog(data);
  };
  const setBusinessMetaDataFunction = ({ data }) => {
    setBusinessMetaData(data);
  };
  const facebookPagesData = ({ data }) => {
    setFacebookPages(data);
  };
  const setAuthTokenFunction = ({ data }) => {
    setAuthToken(data);
    setIsLoggedIn(true);
  };
  const setUidFunction = ({ data }) => {
    setUid(data);
  };
  const setEmailFunction = ({ data }) => {
    console.log("email updated: ", data);
    setEmail(data);
  };
  const setNameFunction = ({ data }) => {
    console.log("phone number updated: ", data);
    setName(data);
  };
  const setPhoneNumberFunction = ({ data }) => {
    console.log("phone number updated: ", data);
    setPhoneNumber(data);
  };
  const setWebsiteFunction = ({ data }) => {
    setWebsite(data);
  };

  const setSourceUrlFunction = ({ data }) => {
    setSourceUrl(data);
  };
  const setProfileUrlFunction = ({ data }) => {
    setProfileUrl(data);
  };
  const setMessagesFunction = ({ data }) => {
    setMessages(data);
  };
  const setMessagesLPFunction = ({ data }) => {
    setMessagesLP(data);
  };
  const setQuestionsFunction = ({ data }) => {
    setQuestions(data);
  };
  const setAnswersFunction = ({ data }) => {
    setAnswers(data);
  };
  const setCommonQuestionsFunction = ({ data }) => {
    setCommonQuestions(data);
  };
  const setAboutBusinessFunction = ({ data }) => {
    setAboutBusiness(data);
  };
  const setCollectEmailFunction = ({ data }) => {
    setCollectEmail(data);
  };
  const setCollectPhoneNoFunction = ({ data }) => {
    setCollectPhoneNo(data);
  };
  const setCollectNameFunction = ({ data }) => {
    setCollectName(data);
  };
  const updateKnowledgeBase = async () => {
    // const docRef = db.collection("KnowledgeBase ").doc(uid);

    // Fetch the document
    // const docSnapshot = await docRef.get();

    // if (docSnapshot.exists) {
    // If the document exists, retrieve and print its data
    // const docData = docSnapshot.data();
    // console.log("Document data:", docData);

    // // Example: Print dummy field data
    // console.log("Dummy Field 1:", docData.dummyField1);
    // console.log("Dummy Field 2:", docData.dummyField2);
    // await docRef.setDoc({
    //   uid: uid,
    //   questions: questions,
    //   answers: answers,
    //   commonQuestion: commonQuestions,
    //   aboutBusiness: aboutBusiness,
    //   // created_time: serverTimestamp(),
    //   updated_time: serverTimestamp(),
    //   collectEmail: collectEmail,
    //   collectPhoneNo: collectPhoneNo,
    //   collectName: collectName,
    // });
    // } else {
    //   console.log("No document found with ID:", docId);
    // }
    const targetDoc = doc(db, "KnowledgeBase", uid);

    try {
      await setDoc(
        targetDoc,
        {
          uid: uid,
          questions: questions,
          answers: answers,
          commonQuestions: commonQuestions,
          aboutBusiness: aboutBusiness,
          // created_time: serverTimestamp(),
          updated_time: serverTimestamp(),
          collectEmail: collectEmail,
          collectPhoneNo: collectPhoneNo,
          collectName: collectName,
        },
        { merge: true }
      );

      console.log("Document updated successfully");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  //
  //
  //
  //
  const setFacebookUserProfileName = ({ name }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userProfileName: name,
    }));
  };
  const setFacebookUserProfileEmail = ({ email }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userProfileEmail: email,
    }));
  };
  const setFacebookUserID = ({ id }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userId: id,
    }));
  };
  const setFacebookUserProfileToken = ({ token }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userProfileToken: token,
    }));
  };
  const setFacebookUserProfileLongLiveToken = ({ token }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      userProfileLongLiveToken: token,
    }));
  };
  const setFacebookPageId = ({ id }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      pageId: id,
    }));
  };
  const setFacebookPageLongLiveToken = ({ token }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      pageLongLiveToken: token,
    }));
  };
  const setFacebookPageProfileUrl = ({ url }) => {
    setFacebookToken((prevState) => ({
      ...prevState,
      pageProfileImg: url,
    }));
  };
  const setSelectedFacebookPageDetails = ({ data }) => {
    setSelectedPage(data);
    // setSelectedPage((prevState) => ({
    //   ...prevState,
    //   pageLongLiveToken: token,
    // }));
  };
  const setMessageContextDetails = ({ data }) => {
    setMessageContext(data);
    // setSelectedPage((prevState) => ({
    //   ...prevState,
    //   pageLongLiveToken: token,
    // }));
  };
  useEffect(() => {
    console.log(facebookToken);
  }, [facebookToken]);
  const updateOrCreateFirebaseDoc = async () => {
    if (docId) {
      const targetDoc = doc(db, "LP_Visitors_Data_AutoSEO", docId);

      try {
        await setDoc(
          targetDoc,
          {
            username: name,
            phoneNumber: phoneNumber,
            website: website,
            sourceUrl: sourceUrl,
            // messages: messages,

            timestamp: serverTimestamp(),
          },
          { merge: true }
        );

        console.log("Document updated successfully: ", docId);
      } catch (error) {
        console.error("Error updating document:", error);
      }
    } else {
      try {
        const newDocRef = await addDoc(
          collection(db, "LP_Visitors_Data_AutoSEO"),
          {
            username: name,
            phoneNumber: phoneNumber,
            website: website,
            sourceUrl: sourceUrl,
            // messages: messages,
            // messagesLP: messagesLP,
            timestamp: serverTimestamp(),
          }
        );
        setDocId(newDocRef.id); // Update the docId state with the new ID

        console.log("Document created successfully with ID:", newDocRef.id);
      } catch (error) {
        console.error("Error adding new document:", error);
      }
    }
  };

  // ==================================================================
  const createNewFirebaseDoc = async () => {
    try {
      const newDocRef = await addDoc(
        collection(db, "LP_Visitors_Data_AutoSEO"),
        {
          username: name,
          phoneNumber: phoneNumber,
          website: website,
          sourceUrl: sourceUrl,
          // messages: messages,
          // messagesLP: messagesLP,
          timestamp: serverTimestamp(),
        }
      );

      // If you still want to update some state with the new ID, you can keep this
      setDocId(newDocRef.id);

      console.log("Document created successfully with ID:", newDocRef.id);
    } catch (error) {
      console.error("Error adding new document:", error);
    }
  };
  // =====================================================
  const fetchData = async () => {
    console.log("Fetch is called: ", phoneNumber, website);
    // await createNewFirebaseDoc();
    const getSummary = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/get-summary`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    const getBlog = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/get-blogs`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };

    const submitData = {
      websiteUrl: website,
      UserPhoneNumber: phoneNumber,
    };
    // const output = await getLogin(submitData);
    try {
      const output = await getSummary(submitData);
      console.log("Backend Reponse Summary: ", output);
      localStorage.setItem("summary1", JSON.stringify(output.data));

      const submitDataBlogs = {
        summary: output.data.summary,
        // blogCount: 6,
        blogCount: 3,
        wordCount: 2500,
      };
      setBusinessMetaDataFunction({ data: output.data });

      const Blogs = await getBlog(submitDataBlogs);
      console.log("Backend Reponse Blogs: ", Blogs);

      localStorage.setItem("blogs1", JSON.stringify(Blogs.data.blogs));

      setBlogsFunction({ data: Blogs.data.blogs });
      setDataLoaded(true);

      // delay(2000);
      //  navigate("/dashboard");
    } catch (error) {
      //  setstate(false);
      console.error("There was an error with getLogin:", error);
      // Handle the error or set some state here if necessary
    }
  };
  // ==================================================================

  // =====================================================
  const fetchData2 = async ({ data }) => {
    console.log("Fetch is called: ", data.phoneNumber, data.website);
    // await createNewFirebaseDoc();
    const getSummary = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/get-summary`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    const getBlog = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/get-blogs`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };

    const submitData = {
      websiteUrl: data.website,
      UserPhoneNumber: data.phoneNumber,
    };
    // const output = await getLogin(submitData);
    try {
      const output = await getSummary(submitData);
      console.log("Backend Reponse Summary: ", output);
      localStorage.setItem("summary1", JSON.stringify(output.data));

      const submitDataBlogs = {
        summary: output.data.summary,
        // blogCount: 6,
        blogCount: 3,
        wordCount: 2500,
      };
      setBusinessMetaDataFunction({ data: output.data });

      const Blogs = await getBlog(submitDataBlogs);
      console.log("Backend Reponse Blogs: ", Blogs);

      localStorage.setItem("blogs1", JSON.stringify(Blogs.data.blogs));

      setBlogsFunction({ data: Blogs.data.blogs });
      setDataLoaded(true);

      // delay(2000);
      //  navigate("/dashboard");
    } catch (error) {
      //  setstate(false);
      console.error("There was an error with getLogin:", error);
      // Handle the error or set some state here if necessary
    }
  };
  // ==================================================================

  // =====================================================
  const [summaryLoad, setSummaryLoad] = useState(false);

  const generateSummary = async ({ data, uid }) => {
    console.log("Fetch is called: ", data.phoneNumber, data.website);
    // await createNewFirebaseDoc();
    const getSummary = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/get-summary`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };

    const submitData = {
      websiteUrl: data.website,
      UserPhoneNumber: data.phoneNumber,
    };
    // const output = await getLogin(submitData);
    try {
      const output = await getSummary(submitData);
      console.log("Backend Reponse Summary: ", output);
      localStorage.setItem("summary1", JSON.stringify(output.data));

      setSummaryLoad(true);

      // setBusinessMetaDataFunction({ data: output.data });
      setBusinessMetaData((prevState) => ({
        ...prevState,
        name: output.data.name,
        summary: output.data.summary,
        faviconUrl: output.data.faviconUrl,
      }));

      // delay(2000);
      //  navigate("/dashboard");
      await generateBlogs({ summary: output.data.summary, uid: uid });
    } catch (error) {
      //  setstate(false);
      console.error("There was an error with summary:", error);
      // Handle the error or set some state here if necessary
    }
  };
  useEffect(() => {
    console.log("BusinessMetaData: ", businessMetaData);
  }, [businessMetaData]);
  useEffect(
    () => {
      const generateBlogs = async () => {
        await delay(3000);
        const getBlog = async (submitData) => {
          try {
            const response = await axios.post(
              `${API_BASE_URL}/api/get-blogs-lazy`,
              // "http://localhost:5000/api/get-access-token",
              submitData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            return response;
          } catch (err) {
            console.log(err);
          }
        };
        try {
          const submitDataBlogs = {
            summary: businessMetaData.summary,
            uid: uid,
            blogCount: 3,
            wordCount: 2500,
          };
          console.log("BusinessMetaData Get Blogs: ", businessMetaData);
          const Blogs = await getBlog(submitDataBlogs);
          console.log("Backend Reponse Blogs: ", Blogs);

          localStorage.setItem("blogs1", JSON.stringify(Blogs.data.blogs));

          setBlogsFunction({ data: Blogs.data.blogs });
        } catch (err) {
          console.log(err);
        }
      };
      if (uid && summaryLoad) {
        // console.log("blog Generation Started");
        // generateBlogs();
      }
    },
    // [uid, summaryLoad]
    [businessMetaData]
  );

  const generateBlogs = async ({ summary, uid }) => {
    console.log("blog Generation Started");
    await delay(3000);
    const getBlog = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/get-blogs-lazy`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    try {
      const submitDataBlogs = {
        summary: summary,
        uid: uid,
        blogCount: 3,
        wordCount: 2500,
      };
      console.log("BusinessMetaData Get Blogs: ", businessMetaData);
      const Blogs = await getBlog(submitDataBlogs);
      console.log("Backend Reponse Blogs: ", Blogs);

      localStorage.setItem("blogs1", JSON.stringify(Blogs.data.blogs));

      setBlogsFunction({ data: Blogs.data.blogs });
    } catch (err) {
      console.log(err);
    }
  };

  // ==================================================================

  const deleteUidIfExists = async ({ uid }) => {
    const db = getDatabase();
    const dbRef = ref(db, `AutoSEO-Blogs/${uid}`);
    console.log("doc ref:", dbRef);
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        // If the uid exists, delete it
        await remove(dbRef);
        console.log(`UID ${uid} deleted successfully.`);
        setBlogs([]);
        setDataLoaded(false);
      } else {
        console.log(`UID ${uid} does not exist.`);
      }
    } catch (error) {
      console.error(`Error checking or deleting UID ${uid}:`, error);
    }
  };
  // ==================================================================

  useEffect(() => {
    if (uid) {
      const db = getDatabase();
      const dbRef = ref(db, `AutoSEO-Blogs/${uid}`);

      // Subscribe to the database changes
      const unsubscribe = onValue(
        dbRef,
        (snapshot) => {
          const dbData = snapshot.val();
          console.log("Realtime DB: ", dbData);

          if (dbData) {
            setBlogs(dbData);
            setDataLoaded(true);
          }
        },
        {
          onlyOnce: false, // If you want to listen to the changes only once
        }
      );

      // Cleanup subscription on component unmount
      // return () => off(dbRef);
    }
  }, [uid]); // This effect will run whenever the `uid` state changes.
  useEffect(() => {
    const tempUid = localStorage.getItem("uid");
    if (tempUid) {
      setUid(tempUid);
    }
  }, []);

  // ==================================================================

  const pushBlogs = async (docId) => {
    const targetDoc = doc(db, "AutoSEO_Blogs", docId);

    try {
      await setDoc(
        targetDoc,
        {
          ssl: false,
          blogs: blogs,
          businessMetaData: businessMetaData,
          timestamp: serverTimestamp(),
          lastUpdatedTime: serverTimestamp(),
        },
        { merge: true }
      );

      console.log("Document updated successfully: ", docId);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  const verifiyDomainIP = async (submitData) => {
    const getIp = async (submitData) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/check-domain-ip`,
          // "http://localhost:5000/api/get-access-token",
          submitData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    try {
      const response = await getIp(submitData);
      console.log("Backend Check Domain: ", response);
      return response;
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  async function postEmail(email) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("response", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function getUserDetails(email) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/user/get-user-details`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );

      const data = await response.json();
      console.log("response", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function updateUserDetails(dataVal) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/update-user-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataVal),
      });

      const data = await response.json();
      console.log("response", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function updateUserEmailWarmupStatus(dataVal) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/user/update-user-warmupstatus`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataVal),
        }
      );

      const data = await response.json();
      console.log("response", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function emailSignup(email) {
    const endpoint = `${API_BASE_URL}/api/auth/signup-new`;
    const data = {
      email: email, // Assuming the API expects an object with an email property
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST", // Specify the request method
        headers: {
          "Content-Type": "application/json", // Specify the content type in the header
        },
        body: JSON.stringify(data), // Convert the JavaScript object to a string
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); // Throw an error if response is not ok
      }

      const result = await response.json(); // Assuming the server responds with JSON
      console.log("Email sent successfully:", result);
      return result; // Return the result for further processing
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
  async function newWarmupEmail(data) {
    const endpoint = `${API_BASE_URL}/api/auth/add-warmup-email`;

    try {
      const response = await fetch(endpoint, {
        method: "POST", // Specify the request method
        headers: {
          "Content-Type": "application/json", // Specify the content type in the header
        },
        body: JSON.stringify(data), // Convert the JavaScript object to a string
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); // Throw an error if response is not ok
      }

      const result = await response.json(); // Assuming the server responds with JSON
      console.log("Email sent successfully:", result);
      return result; // Return the result for further processing
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
  async function newWarmupEmailSetup(data) {
    const endpoint = `${API_BASE_URL}/api/create-new-email-warmup-setup`;

    try {
      const response = await fetch(endpoint, {
        method: "POST", // Specify the request method
        headers: {
          "Content-Type": "application/json", // Specify the content type in the header
        },
        body: JSON.stringify(data), // Convert the JavaScript object to a string
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); // Throw an error if response is not ok
      }

      const result = await response.json(); // Assuming the server responds with JSON
      console.log("Email sent successfully:", result);
      return result; // Return the result for further processing
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
  async function getWarmupEmailSetup(data) {
    const endpoint = `${API_BASE_URL}/api/user/get-email-warmup-setup`;

    try {
      const response = await fetch(endpoint, {
        method: "POST", // Specify the request method
        headers: {
          "Content-Type": "application/json", // Specify the content type in the header
        },
        body: JSON.stringify(data), // Convert the JavaScript object to a string
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); // Throw an error if response is not ok
      }

      const result = await response.json(); // Assuming the server responds with JSON
      console.log("Email sent successfully:", result);
      return result; // Return the result for further processing
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
  // async function openPaymentPage() {
  //   window.location.href = `${API_BASE_URL}/payment`;
  // }
  async function openPaymentPage() {
    // Check if the email is provided, if not, just navigate to the payment page without parameters
    // console.log("Email X: ", email);
    const url = email
      ? `${API_BASE_URL}/payment?email=${email}`
      : `${API_BASE_URL}/payment`;
    window.location.href = url;
  }

  return (
    <DataContext.Provider
      value={{
        APP_URL,
        API_BASE_URL,
        appID,
        appSecret,
        authToken,
        urlKeywordStored,
        uid,
        name,
        email,
        setEmail,
        inputUrl,
        setonboardingUserDetails,
        profileUrl,
        docId,
        phoneNumber,
        website,
        sourceUrl,
        messages,
        messagesLP,
        questions,
        answers,
        commonQuestions,
        aboutBusiness,
        collectEmail,
        collectPhoneNo,
        collectName,
        isLoggedIn,
        login,
        logout,
        blogs,
        selectedBlog,
        businessMetaData,
        fetchData,
        fetchData2,
        deleteUidIfExists,
        setInputUrlFunction,
        setUrlKeywordStoredFunction,
        setBusinessMetaDataFunction,
        setProfileUrlFunction,
        setAuthTokenFunction,
        setUidFunction,
        setEmailFunction,
        setNameFunction,
        setPhoneNumberFunction,
        setWebsiteFunction,
        setSourceUrlFunction,
        setMessagesFunction,
        setMessagesLPFunction,
        setQuestionsFunction,
        setAnswersFunction,
        setCommonQuestionsFunction,
        setAboutBusinessFunction,
        setCollectEmailFunction,
        setCollectPhoneNoFunction,
        setCollectNameFunction,
        facebookToken,
        facebookPages,
        selectedPage,
        dataLoaded,
        setSelectedPage,
        messageContext,
        setBlogsFunction,
        setSelectedBlogFunction,
        facebookPagesData,
        setFacebookUserProfileName,
        setFacebookUserProfileEmail,
        setFacebookUserID,
        setFacebookUserProfileToken,
        setFacebookUserProfileLongLiveToken,
        setFacebookPageId,
        setFacebookPageProfileUrl,
        setFacebookPageLongLiveToken,
        setSelectedFacebookPageDetails,
        setMessageContextDetails,
        updateOrCreateFirebaseDoc,
        updateKnowledgeBase,
        pushBlogs,
        verifiyDomainIP,
        generateSummary,
        postEmail,
        emailSignup,
        newWarmupEmail,
        getUserDetails,
        updateUserDetails,
        updateUserEmailWarmupStatus,
        openPaymentPage,
        newWarmupEmailSetup,
        getWarmupEmailSetup,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Visual Imports
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
// End of Visual Imports
// Components Imports
// import ReactFacebookLogin from "react-facebook-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
// import Signup_Sidesection from "../Components/Signup_Sidesection";

// End of Components Imports

// ContextAPI
import { useContext } from "react";
import DataContext from "../../ContextAPI/DataState";
// ContentAPI End

// Component Import
// import FacebookLoginButtonBuild from "../Components/FacebookLoginButtonBuild";
// End Compoenet Import
const Signup = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  // const { isLoggedIn, login } = dataContext.;
  //   const [login, setLogin] = useState(false);
  //   const [data, setData] = useState({});
  //   const [picture, setPicture] = useState("");
  //   const [accessToken, setAccessToken] = useState(null);
  //   const [pages, setPages] = useState([]);
  //   const [selectedPage, setSelectedPage] = useState(null);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const getLogin = async (submitData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/get-access-token",
        submitData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // const response = await axios.post(
      //   // "http://localhost:5000/api/get-access-token",
      //   "http://localhost:5000/api",

      //   submitData
      // );
      console.log(response);
      // setData(response.data);
      // setError(null);
    } catch (err) {
      // setError(err.message);
      // setData(null);
      console.log(err);
    }
  };
  const responseFacebook = async (response) => {
    console.log(response);
    console.log("Data Recived");
    console.log(response.data.accessToken);
    if (response.data.accessToken) {
      //   setData(response);
      //   setPicture(response.picture.data.url);
      console.log("Access Log: ", response.data.accessToken);
      //   setAccessToken(response.data.accessToken);
      // Updata Data to ContextAPI
      console.log("User Name: ", response.data.name);
      console.log("User Name: ", response.data.userID);
      dataContext.setNameFunction({ data: response.data.name });
      // const pageId = await fetchPages(response.data.accessToken);
      // console.log("Page ID:  ", pageId);

      dataContext.setFacebookUserProfileName({ name: response.data.name });
      dataContext.setFacebookUserID({
        id: response.data.userID,
      });
      dataContext.setFacebookUserProfileToken({
        token: response.data.accessToken,
      });
      delay(1000);

      setTimeout(() => {
        dataContext.updateOrCreateFirebaseDoc();
        navigate("/extract-data");
      }, 2000); // 2000 milliseconds (i.e., 2 seconds)
      //   setLogin(true);
    } else {
      //   setLogin(false);
    }
  };
  const fetchPages = async (token) => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/v13.0/me/accounts?access_token=${token}`
      );
      const data = await response.json();

      // console.log("fetch: ", data);
      // console.log("fetch: ", data.data);
      // console.log("PageID: ", data.data[0].id);

      return data.data[0].id;
    } catch (error) {
      console.error("Error fetching pages:", error);
    }
  };
  // const fetchPages = async (token) => {
  //   fetch(`https://graph.facebook.com/v13.0/me/accounts?access_token=${token}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("fetch: ", data);

  //       console.log("fetch: ", data.data);
  //       console.log("PageID: ", data.data[0].id);

  //       return data.data[0].id;
  //       // setPages(data.data);

  //       // dataContext.facebookPagesData({ data: data });
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching pages:", error);
  //     });
  // };
  //   const handlePageSelection = (page) => {
  //     setSelectedPage(page);
  //     // You can further ask for permissions or do operations on the selected page
  //     // This is just a selection for now
  //   };
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "end",
    gridGap: "0", // Added this line to remove the gap
  };

  const imageStyle = {
    width: "100%",
    height: "100vh", // set to viewport height
    objectFit: "contain",
    display: "block", // this ensures that the image doesn't have any margin or spacing around it
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <Box sx={{ gridColumn: "1/2", width: "100%" }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          my={3}
          mx={2}
          width="100%"
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#2196f3", fontWeight: "700" }}
          >
            MessangerGPT
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Typography
            variant="h6"
            style={{ marginLeft: "10px", fontSize: "0.9rem" }}
          >
            <span style={{ color: "gray", mx: 1 }}>
              Already have an account?
            </span>
            <Link href="/auth" color="inherit" underline="none">
              <span> </span>Login
            </Link>
          </Typography>
        </Box>
        <Grid
          container
          direction="column"
          // spacing={2}
        >
          <Grid item>
            <Box sx={{ height: "50px" }}></Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box sx={{}}>
                <Typography
                  variant="h6"
                  style={{ marginLeft: "10px", fontSize: "0.9rem" }}
                >
                  <span style={{ color: "gray" }}>
                    Seamless Connection Awaits!
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box textAlign="center" sx={{ width: "400px" }}>
                <Typography
                  variant="h6"
                  style={{ marginLeft: "18px", fontSize: "18px" }}
                >
                  Your one-step gateway to smarter customer interactions!
                </Typography>
              </Box>
            </Box>
            <Box height={25}></Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box sx={{ width: "400px" }}>
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: "10px",
                    fontSize: "0.9rem",
                    color: "grey",
                  }}
                >
                  <span style={{ color: "grey", fontWeight: 400 }}>
                    We understand the importance of your Facebook page and its
                    users. Our secure login process ensures we respect your
                    privacy and only access what’s necessary. By granting
                    access, you’re taking the first step towards revolutionizing
                    the way you communicate with your audience. Let’s get
                    started! 🚀
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Box height={50}></Box>

          <Grid item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LoginSocialFacebook
                // appId={dataContext.appID}
                appId="834715744964121"
                onResolve={(response) => responseFacebook(response)}
                onReject={(response) => {
                  console.log(response);
                }}
                fields="name,email"
                // scope="pages_show_list,public_profile"
                scope="pages_messaging,public_profile"
              >
                <FacebookLoginButton />
              </LoginSocialFacebook>
              {/* <FacebookLoginButtonBuild /> */}
              {/* <FacebookLoginButtonBuild
                appId={dataContext.appID}
                onResolve={(response) => {
                  console.log(response);
                  responseFacebook(response);
                }}
                onReject={(response) => {
                  console.log(response);
                }}
                // fields="name,email,id"
                // scope="pages_show_list,public_profile"
                scope="pages_show_list,pages_messaging,public_profile"
              >
                <FacebookLoginButton />
              </FacebookLoginButtonBuild> */}
            </div>
          </Grid>
        </Grid>
      </Box>

      <div>
        <Box sx={{ background: "linear-gradient(180deg, #FEFAF9, #FEE4C3)" }}>
          {/* <Signup_Sidesection /> */}
        </Box>
      </div>
    </div>
  );
};

export default Signup;

{
  /* {accessToken ? (
            <div>
              <h3>Select a page:</h3>
              <ul>
                {pages.map((page) => (
                  <li key={page.id} onClick={() => handlePageSelection(page)}>
                    <strong>{page.name}</strong> ({page.category})
                    <div>Tasks: {page.tasks.join(", ")}</div>
                  </li>
                ))}
              </ul>
              {selectedPage && (
                <div>
                  <h4>Selected Page:</h4>
                  <p>Name: {selectedPage.name}</p>
                  <p>Category: {selectedPage.category}</p>
                  <p>Tasks: {selectedPage.tasks.join(", ")}</p>
                </div>
              )}
            </div>
          ) : (
              )} */
}
{
  /* <ReactFacebookLogin
              appId="267736178943787"
              autoLoad={true}
              fields="name,email,picture"
              scope="pages_show_list,read_pages_mailboxes,pages_messaging,pages_read_engagement,public_profile"
              callback={responseFacebook}
            /> */
}

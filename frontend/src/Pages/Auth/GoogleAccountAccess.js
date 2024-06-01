import React, { useEffect, useState } from "react";
// import './GmailAPIQuickstart.css'; // Ensure this CSS file exists and is correctly referenced

// import ContextAPI
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";

function GmailAccountAccess({ accessToken, setAccessToken }) {
  const dataContext = useContext(DataContext);

  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [tokenClient, setTokenClient] = useState(null);

  useEffect(() => {
    window.gapi.load("client", initializeGapiClient);
    setTokenClient(
      window.google.accounts.oauth2.initTokenClient({
        client_id:
          "975937758384-7nc285tv9e80i9nue8fuf7o5dfmdm2nt.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/gmail.send",
        callback: "",
      })
    );
    setGisInited(true);
  }, []);

  async function initializeGapiClient() {
    await window.gapi.client.init({
      apiKey: "AIzaSyCPITKO856-NuDk9B4RAbMXZvTk_RylGDM",
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
      ],
    });
    setGapiInited(true);
  }

  function handleAuthClick() {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      console.log("Response: ", resp);
      console.log("Access Token:", resp.access_token);
      setAccessToken(resp.access_token);
      await listLabels();
    };

    if (!window.gapi.client.getToken()) {
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      tokenClient.requestAccessToken({ prompt: "" });
    }
  }

  function handleSignoutClick() {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken("");
    }
  }

  async function listLabels() {
    let response;
    try {
      response = await window.gapi.client.gmail.users.labels.list({
        userId: "me",
      });
    } catch (err) {
      console.error("Failed to list labels:", err);
      return;
    }
    const labels = response.result.labels;
    console.log("Labels:", labels);
  }

  return (
    <div>
      {/* <p>Gmail API Quickstart</p> */}
      <button onClick={handleAuthClick} disabled={!gapiInited || !gisInited}>
        Gmail
      </button>
      {/* <button onClick={handleSignoutClick} disabled={!gapiInited || !gisInited}>
        Sign Out
      </button> */}
    </div>
  );
}

export default GmailAccountAccess;

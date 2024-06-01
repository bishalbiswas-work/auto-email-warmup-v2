// import React, { useState, useEffect } from "react";

// const GoogleSignup_API = () => {
//   const CLIENT_ID =
//     "975937758384-7nc285tv9e80i9nue8fuf7o5dfmdm2nt.apps.googleusercontent.com";
//   const API_KEY = "AIzaSyCPITKO856-NuDk9B4RAbMXZvTk_RylGDM";
//   const DISCOVERY_DOC =
//     "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest";
//   const SCOPES = "https://www.googleapis.com/auth/gmail.send";

//   const [tokenClient, setTokenClient] = useState(null);
//   const [gapiInited, setGapiInited] = useState(false);
//   const [gisInited, setGisInited] = useState(false);
//   const [labels, setLabels] = useState("");
//   const [authorizeButtonText, setAuthorizeButtonText] = useState("Authorize");
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/api.js";
//     script.async = true;
//     script.defer = true;
//     script.onload = () => gapiLoaded();
//     document.body.appendChild(script);

//     const gsiScript = document.createElement("script");
//     gsiScript.src = "https://accounts.google.com/gsi/client";
//     gsiScript.async = true;
//     gsiScript.defer = true;
//     gsiScript.onload = () => gisLoaded();
//     document.body.appendChild(gsiScript);

//     return () => {
//       document.body.removeChild(script);
//       document.body.removeChild(gsiScript);
//     };
//   }, []);

//   const gapiLoaded = () => {
//     window.gapi.load("client", initializeGapiClient);
//   };

//   const initializeGapiClient = async () => {
//     await window.gapi.client.init({
//       apiKey: API_KEY,
//       discoveryDocs: [DISCOVERY_DOC],
//     });
//     setGapiInited(true);
//     maybeEnableButtons();
//   };

//   const gisLoaded = () => {
//     const client = window.google.accounts.oauth2.initTokenClient({
//       client_id: CLIENT_ID,
//       scope: SCOPES,
//       callback: "", // defined later
//     });
//     setTokenClient(client);
//     setGisInited(true);
//     maybeEnableButtons();
//   };

//   const maybeEnableButtons = () => {
//     if (gapiInited && gisInited) {
//       setIsSignedIn(true);
//     }
//   };

//   const handleAuthClick = () => {
//     tokenClient.callback = async (resp) => {
//       if (resp.error !== undefined) {
//         throw resp;
//       }
//       setAuthorizeButtonText("Refresh");
//       setIsSignedIn(true);
//       await listLabels();
//     };

//     if (window.gapi.client.getToken() === null) {
//       tokenClient.requestAccessToken({ prompt: "consent" });
//     } else {
//       tokenClient.requestAccessToken({ prompt: "" });
//     }
//   };

//   const handleSignoutClick = () => {
//     const token = window.gapi.client.getToken();
//     if (token !== null) {
//       window.google.accounts.oauth2.revoke(token.access_token);
//       window.gapi.client.setToken("");
//       setLabels("");
//       setAuthorizeButtonText("Authorize");
//       setIsSignedIn(false);
//     }
//   };

//   const listLabels = async () => {
//     let response;
//     try {
//       response = await window.gapi.client.gmail.users.labels.list({
//         userId: "me",
//       });
//     } catch (err) {
//       setLabels(err.message);
//       return;
//     }
//     const labels = response.result.labels;
//     if (!labels || labels.length === 0) {
//       setLabels("No labels found.");
//       return;
//     }
//     const output = labels.reduce(
//       (str, label) => `${str}${label.name}\n`,
//       "Labels:\n"
//     );
//     setLabels(output);
//     console.log("Labels: ", output);
//   };

//   return (
//     <div>
//       <p>Gmail API Quickstart</p>
//       <button
//         id="authorize_button"
//         onClick={handleAuthClick}
//         // style={{ visibility: isSignedIn ? "visible" : "hidden" }}
//       >
//         {authorizeButtonText}
//       </button>
//       <button id="signout_button" onClick={handleSignoutClick}>
//         Sign Out
//       </button>
//       <pre id="content" style={{ whiteSpace: "pre-wrap" }}>
//         {labels}
//       </pre>
//     </div>
//   );
// };

// export default GoogleSignup_API;

// import React, { useState, useEffect } from "react";

// const GoogleSignup_API = () => {
//   const CLIENT_ID =
//     "975937758384-7nc285tv9e80i9nue8fuf7o5dfmdm2nt.apps.googleusercontent.com";
//   const API_KEY = "AIzaSyCPITKO856-NuDk9B4RAbMXZvTk_RylGDM";
//   const DISCOVERY_DOC =
//     "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest";
//   const SCOPES = "https://www.googleapis.com/auth/gmail.send";

//   const [tokenClient, setTokenClient] = useState(null);
//   const [gapiInited, setGapiInited] = useState(false);
//   const [gisInited, setGisInited] = useState(false);
//   const [labels, setLabels] = useState("");
//   const [authorizeButtonText, setAuthorizeButtonText] = useState("Authorize");
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/api.js";
//     script.async = true;
//     script.defer = true;
//     script.onload = () => gapiLoaded();
//     document.body.appendChild(script);

//     const gsiScript = document.createElement("script");
//     gsiScript.src = "https://accounts.google.com/gsi/client";
//     gsiScript.async = true;
//     gsiScript.defer = true;
//     gsiScript.onload = () => gisLoaded();
//     document.body.appendChild(gsiScript);

//     return () => {
//       document.body.removeChild(script);
//       document.body.removeChild(gsiScript);
//     };
//   }, []);

//   const gapiLoaded = () => {
//     window.gapi.load("client", initializeGapiClient);
//   };
//   const maybeEnableButtons = () => {
//     if (gapiInited && gisInited) {
//       setIsSignedIn(true);
//     }
//   };
//   const initializeGapiClient = async () => {
//     await window.gapi.client.init({
//       apiKey: API_KEY,
//       discoveryDocs: [DISCOVERY_DOC],
//     });
//     setGapiInited(true);
//     maybeEnableButtons();
//   };

//   const gisLoaded = () => {
//     const client = window.google.accounts.oauth2.initTokenClient({
//       client_id: CLIENT_ID,
//       scope: SCOPES,
//       access_type: "offline", // Request offline access
//       callback: tokenResponseCallback, // Handle the response in a separate function
//     });
//     setTokenClient(client);
//     setGisInited(true);
//     maybeEnableButtons();
//   };

//   const tokenResponseCallback = (resp) => {
//     if (resp.error !== undefined) {
//       throw resp;
//     }
//     if (resp.refresh_token) {
//       // Here, handle the refresh token securely
//       console.log("Refresh Token:", resp.refresh_token);
//     }
//     // conso
//     setAuthorizeButtonText("Refresh");
//     setIsSignedIn(true);
//     listLabels();
//   };

//   const handleAuthClick = () => {
//     if (window.gapi.client.getToken() === null) {
//       tokenClient.requestAccessToken({ prompt: "consent" });
//     } else {
//       tokenClient.requestAccessToken({ prompt: "" });
//     }
//   };

//   const handleSignoutClick = () => {
//     const token = window.gapi.client.getToken();
//     if (token !== null) {
//       window.google.accounts.oauth2.revoke(token.access_token);
//       window.gapi.client.setToken(null);
//       setLabels("");
//       setAuthorizeButtonText("Authorize");
//       setIsSignedIn(false);
//     }
//   };

//   const listLabels = async () => {
//     let response;
//     try {
//       response = await window.gapi.client.gmail.users.labels.list({
//         userId: "me",
//       });
//     } catch (err) {
//       setLabels(err.message);
//       return;
//     }
//     const labels = response.result.labels;
//     if (!labels || labels.length === 0) {
//       setLabels("No labels found.");
//       return;
//     }
//     const output = labels.reduce(
//       (str, label) => `${str}${label.name}\n`,
//       "Labels:\n"
//     );
//     setLabels(output);
//     console.log("Labels: ", output);
//   };

//   return (
//     <div>
//       <p>Gmail API Quickstart</p>
//       <button id="authorize_button" onClick={handleAuthClick}>
//         {authorizeButtonText}
//       </button>
//       <button id="signout_button" onClick={handleSignoutClick}>
//         Sign Out
//       </button>
//       <pre id="content" style={{ whiteSpace: "pre-wrap" }}>
//         {labels}
//       </pre>
//     </div>
//   );
// };

// export default GoogleSignup_API;
// import React, { useState, useEffect } from "react";
// const GoogleSignup_API = () => {
//   const CLIENT_ID =
//     "975937758384-7nc285tv9e80i9nue8fuf7o5dfmdm2nt.apps.googleusercontent.com";
//   const API_KEY = "AIzaSyCPITKO856-NuDk9B4RAbMXZvTk_RylGDM";
//   const DISCOVERY_DOC =
//     "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest";
//   const SCOPES = "https://www.googleapis.com/auth/gmail.send";
//   const [tokenClient, setTokenClient] = useState(null);
//   const [gapiInited, setGapiInited] = useState(false);
//   const [gisInited, setGisInited] = useState(false);
//   const [labels, setLabels] = useState("");
//   const [authorizeButtonText, setAuthorizeButtonText] = useState("Authorize");
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [accessToken, setAccessToken] = useState(null); // Add a state variable for access token
//   const [refreshToken, setRefreshToken] = useState(null); // Add a state variable for refresh token
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/api.js";
//     script.async = true;
//     script.defer = true;
//     script.onload = () => gapiLoaded();
//     document.body.appendChild(script);
//     const gsiScript = document.createElement("script");
//     gsiScript.src = "https://accounts.google.com/gsi/client";
//     gsiScript.async = true;
//     gsiScript.defer = true;
//     gsiScript.onload = () => gisLoaded();
//     document.body.appendChild(gsiScript);
//     return () => {
//       document.body.removeChild(script);
//       document.body.removeChild(gsiScript);
//     };
//   }, []);
//   const gapiLoaded = () => {
//     window.gapi.load("client", initializeGapiClient);
//   };
//   const maybeEnableButtons = () => {
//     if (gapiInited && gisInited) {
//       setIsSignedIn(true);
//     }
//   };
//   const initializeGapiClient = async () => {
//     await window.gapi.client.init({
//       apiKey: API_KEY,
//       discoveryDocs: [DISCOVERY_DOC],
//     });
//     setGapiInited(true);
//     maybeEnableButtons();
//   };
//   const gisLoaded = () => {
//     const client = window.google.accounts.oauth2.initTokenClient({
//       client_id: CLIENT_ID,
//       scope: SCOPES,
//       access_type: "offline",
//       callback: tokenResponseCallback,
//     });
//     setTokenClient(client);
//     setGisInited(true);
//     maybeEnableButtons();
//   };
//   const tokenResponseCallback = (resp) => {
//     if (resp.error !== undefined) {
//       throw resp;
//     }
//     if (resp.refresh_token) {
//       console.log("Refresh Token:", resp.refresh_token);
//       setRefreshToken(resp.refresh_token); // Store the refresh token
//     }
//     setAuthorizeButtonText("Refresh");
//     setIsSignedIn(true);
//     setAccessToken(resp.access_token); // Store the access token
//     console.log("Access Token:", resp.access_token); // Log the access token
//     listLabels();
//   };
//   const handleAuthClick = () => {
//     if (window.gapi.client.getToken() === null) {
//       tokenClient.requestAccessToken({ prompt: "consent" });
//     } else {
//       tokenClient.requestAccessToken({ prompt: "" });
//     }
//   };
//   const handleSignoutClick = () => {
//     const token = window.gapi.client.getToken();
//     if (token !== null) {
//       window.google.accounts.oauth2.revoke(token.access_token);
//       window.gapi.client.setToken(null);
//       setLabels("");
//       setAuthorizeButtonText("Authorize");
//       setIsSignedIn(false);
//       setAccessToken(null); // Clear the access token
//       setRefreshToken(null); // Clear the refresh token
//     }
//   };
//   const listLabels = async () => {
//     let response;
//     try {
//       response = await window.gapi.client.gmail.users.labels.list({
//         userId: "me",
//       });
//     } catch (err) {
//       setLabels(err.message);
//       return;
//     }
//     const labels = response.result.labels;
//     if (!labels || labels.length === 0) {
//       setLabels("No labels found.");
//       return;
//     }
//     const output = labels.reduce(
//       (str, label) => `${str}${label.name}\n`,
//       "Labels:\n"
//     );
//     setLabels(output);
//     console.log("Labels: ", output);
//   };
//   const refreshAccessToken = () => {
//     tokenClient.requestAccessToken({
//       prompt: "",
//       refresh_token: refreshToken, // Use the refresh token to request a new access token
//     });
//   };
//   return (
//     <div>
//       <p>Gmail API Quickstart</p>
//       <button id="authorize_button" onClick={handleAuthClick}>
//         {authorizeButtonText}
//       </button>
//       <button id="signout_button" onClick={handleSignoutClick}>
//         Sign Out
//       </button>
//       <button id="refresh_button" onClick={refreshAccessToken}>
//         Refresh Access Token
//       </button>
//       <pre id="content" style={{ whiteSpace: "pre-wrap" }}>
//         {labels}
//       </pre>
//       {accessToken && <p>Access Token: {accessToken}</p>}{" "}
//       {/* Display the access token */}
//       {refreshToken && <p>Refresh Token: {refreshToken}</p>}{" "}
//       {/* Display the refresh token */}
//     </div>
//   );
// };
// export default GoogleSignup_API;

// import React, { useState, useEffect } from "react";
// const GoogleSignup_API = () => {
//   const CLIENT_ID =
//     "975937758384-7nc285tv9e80i9nue8fuf7o5dfmdm2nt.apps.googleusercontent.com";
//   const API_KEY = "AIzaSyCPITKO856-NuDk9B4RAbMXZvTk_RylGDM";
//   const DISCOVERY_DOC =
//     "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest";
//   const SCOPES = "https://www.googleapis.com/auth/gmail.send";
//   const [tokenClient, setTokenClient] = useState(null);
//   const [gapiInited, setGapiInited] = useState(false);
//   const [gisInited, setGisInited] = useState(false);
//   const [labels, setLabels] = useState("");
//   const [authorizeButtonText, setAuthorizeButtonText] = useState("Authorize");
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [accessToken, setAccessToken] = useState(null);
//   const [refreshToken, setRefreshToken] = useState(null);
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/api.js";
//     script.async = true;
//     script.defer = true;
//     script.onload = () => gapiLoaded();
//     document.body.appendChild(script);
//     const gsiScript = document.createElement("script");
//     gsiScript.src = "https://accounts.google.com/gsi/client";
//     gsiScript.async = true;
//     gsiScript.defer = true;
//     gsiScript.onload = () => gisLoaded();
//     document.body.appendChild(gsiScript);
//     return () => {
//       document.body.removeChild(script);
//       document.body.removeChild(gsiScript);
//     };
//   }, []);
//   const gapiLoaded = () => {
//     console.log("gapi loaded");
//     window.gapi.load("client", initializeGapiClient);
//   };
//   const maybeEnableButtons = () => {
//     if (gapiInited && gisInited) {
//       setIsSignedIn(true);
//     }
//   };
//   const initializeGapiClient = async () => {
//     await window.gapi.client.init({
//       apiKey: API_KEY,
//       discoveryDocs: [DISCOVERY_DOC],
//     });
//     console.log("GAPI client initialized");
//     setGapiInited(true);
//     maybeEnableButtons();
//   };
//   const gisLoaded = () => {
//     console.log("Google Identity Services (GIS) loaded");
//     const client = window.google.accounts.oauth2.initTokenClient({
//       client_id: CLIENT_ID,
//       scope: SCOPES,
//       access_type: "offline",
//       callback: tokenResponseCallback,
//     });
//     setTokenClient(client);
//     setGisInited(true);
//     maybeEnableButtons();
//   };
//   const tokenResponseCallback = (resp) => {
//     console.log("Token response received", resp);
//     if (resp.error !== undefined) {
//       console.error("Error in token response", resp.error);
//       throw resp;
//     }
//     if (resp.refresh_token) {
//       console.log("Refresh Token:", resp.refresh_token);
//       setRefreshToken(resp.refresh_token);
//     }
//     setAuthorizeButtonText("Refresh");
//     setIsSignedIn(true);
//     setAccessToken(resp.access_token);
//     console.log("Access Token:", resp.access_token);
//     listLabels();
//   };
//   const handleAuthClick = () => {
//     console.log("Authorization button clicked");
//     if (window.gapi.client.getToken() === null) {
//       tokenClient.requestAccessToken({ prompt: "consent" });
//     } else {
//       tokenClient.requestAccessToken({ prompt: "" });
//     }
//   };
//   const handleSignoutClick = () => {
//     console.log("Sign out button clicked");
//     const token = window.gapi.client.getToken();
//     if (token !== null) {
//       window.google.accounts.oauth2.revoke(token.access_token);
//       window.gapi.client.setToken(null);
//       setLabels("");
//       setAuthorizeButtonText("Authorize");
//       setIsSignedIn(false);
//       setAccessToken(null);
//       setRefreshToken(null);
//     }
//   };
//   const listLabels = async () => {
//     console.log("Listing labels");
//     let response;
//     try {
//       response = await window.gapi.client.gmail.users.labels.list({
//         userId: "me",
//       });
//     } catch (err) {
//       console.error("Error listing labels", err);
//       setLabels(err.message);
//       return;
//     }
//     const labels = response.result.labels;
//     if (!labels || labels.length === 0) {
//       setLabels("No labels found.");
//       return;
//     }
//     const output = labels.reduce(
//       (str, label) => `${str}${label.name}\n`,
//       "Labels:\n"
//     );
//     setLabels(output);
//     console.log("Labels: ", output);
//   };
//   const refreshAccessToken = () => {
//     console.log("Refreshing access token");
//     tokenClient.requestAccessToken({
//       prompt: "",
//       refresh_token: refreshToken,
//     });
//   };
//   return (
//     <div>
//       <p>Gmail API Quickstart</p>
//       <button id="authorize_button" onClick={handleAuthClick}>
//         {authorizeButtonText}
//       </button>
//       <button id="signout_button" onClick={handleSignoutClick}>
//         Sign Out
//       </button>
//       <button id="refresh_button" onClick={refreshAccessToken}>
//         Refresh Access Token
//       </button>
//       <pre id="content" style={{ whiteSpace: "pre-wrap" }}>
//         {labels}
//       </pre>
//       {accessToken && <p>Access Token: {accessToken}</p>}
//       {refreshToken && <p>Refresh Token: {refreshToken}</p>}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
const GoogleSignup_API = () => {
  const CLIENT_ID =
    "975937758384-7nc285tv9e80i9nue8fuf7o5dfmdm2nt.apps.googleusercontent.com";
  const API_KEY = "AIzaSyCPITKO856-NuDk9B4RAbMXZvTk_RylGDM";
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest";
  const SCOPES = "https://www.googleapis.com/auth/gmail.send";
  const [tokenClient, setTokenClient] = useState(null);
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [labels, setLabels] = useState("");
  const [authorizeButtonText, setAuthorizeButtonText] = useState("Authorize");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => gapiLoaded();
    document.body.appendChild(script);
    const gsiScript = document.createElement("script");
    gsiScript.src = "https://accounts.google.com/gsi/client";
    gsiScript.async = true;
    gsiScript.defer = true;
    gsiScript.onload = () => gisLoaded();
    document.body.appendChild(gsiScript);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(gsiScript);
    };
  }, []);
  const gapiLoaded = () => {
    console.log("gapi loaded");
    window.gapi.load("client", initializeGapiClient);
  };
  const maybeEnableButtons = () => {
    if (gapiInited && gisInited) {
      setIsSignedIn(true);
    }
  };
  const initializeGapiClient = async () => {
    await window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    console.log("GAPI client initialized");
    setGapiInited(true);
    maybeEnableButtons();
  };
  const gisLoaded = () => {
    console.log("Google Identity Services (GIS) loaded");
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      access_type: "offline",
      callback: tokenResponseCallback,
    });
    setTokenClient(client);
    setGisInited(true);
    maybeEnableButtons();
  };
  const tokenResponseCallback = (resp) => {
    console.log("Token response received", resp);
    if (resp.error !== undefined) {
      console.error("Error in token response", resp.error);
      throw resp;
    }
    if (resp.refresh_token) {
      console.log("Refresh Token:", resp.refresh_token);
      setRefreshToken(resp.refresh_token);
    }
    setAuthorizeButtonText("Refresh");
    setIsSignedIn(true);
    setAccessToken(resp.access_token);
    console.log("Access Token:", resp.access_token);
    listLabels();
  };
  const handleAuthClick = () => {
    console.log("Authorization button clicked");
    if (window.gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      tokenClient.requestAccessToken({ prompt: "" });
    }
  };
  const handleSignoutClick = () => {
    console.log("Sign out button clicked");
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken(null);
      setLabels("");
      setAuthorizeButtonText("Authorize");
      setIsSignedIn(false);
      setAccessToken(null);
      setRefreshToken(null);
    }
  };
  const listLabels = async () => {
    console.log("Listing labels");
    let response;
    try {
      response = await window.gapi.client.gmail.users.labels.list({
        userId: "me",
      });
    } catch (err) {
      console.error("Error listing labels", err);
      setLabels(err.message);
      return;
    }
    const labels = response.result.labels;
    if (!labels || labels.length === 0) {
      setLabels("No labels found.");
      return;
    }
    const output = labels.reduce(
      (str, label) => `${str}${label.name}\n`,
      "Labels:\n"
    );
    setLabels(output);
    console.log("Labels: ", output);
  };
  const refreshAccessToken = () => {
    console.log("Refreshing access token");
    tokenClient.requestAccessToken({
      prompt: "",
      refresh_token: refreshToken,
    });
  };
  return (
    <div>
      <p>Gmail API Quickstart</p>
      <button id="authorize_button" onClick={handleAuthClick}>
        {authorizeButtonText}
      </button>
      <button id="signout_button" onClick={handleSignoutClick}>
        Sign Out
      </button>
      <button id="refresh_button" onClick={refreshAccessToken}>
        Refresh Access Token
      </button>
      <pre id="content" style={{ whiteSpace: "pre-wrap" }}>
        {labels}
      </pre>
      {accessToken && <p>Access Token: {accessToken}</p>}
      {refreshToken && <p>Refresh Token: {refreshToken}</p>}
    </div>
  );
};
export default GoogleSignup_API;

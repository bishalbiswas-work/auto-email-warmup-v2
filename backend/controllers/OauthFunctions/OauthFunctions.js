const axios = require("axios");
const qs = require("querystring");

require("dotenv").config(); // Load environment variables from .env file

async function getGmailProfileInfo(accessToken) {
  const userInfoUrl = "https://www.googleapis.com/oauth2/v3/userinfo";

  try {
    const response = await axios.get(userInfoUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // if (response.data) {
    //   console.log("Response : ", response.data);
    // }
    // Check if email is returned in the response
    if (response.data && response.data.email) {
      return {
        status: true,
        email: response.data.email,
        name: response.data.name,
        profilePicture: response.data.picture,
      };
    } else {
      return { status: false, message: "Email not found in the user info." };
    }
  } catch (error) {
    console.error("Error fetching user information:", error);
    return {
      status: false,
      message:
        "Failed to fetch user information. Check the access token validity and permissions.",
    };
  }
}

async function getMicrosoftProfileInfo(accessToken) {
  const graphApiUrl = "https://graph.microsoft.com/v1.0/me";

  try {
    const response = await axios.get(graphApiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    // if (response.data) {
    //   console.log("Response : ", response.data);
    // }

    // Check if email is returned in the response
    if (response.data && response.data.mail) {
      return {
        status: true,
        email: response.data.mail,
        name: response.data.displayName,
      };
    } else {
      return { status: false, message: "Email not found in the user info." };
    }
  } catch (error) {
    console.error(
      "Error fetching user information from Microsoft Graph API:",
      error
    );
    return {
      status: false,
      message:
        "Failed to fetch user information. Check the access token validity and permissions.",
    };
  }
}

async function refreshMicrosoftAccessToken(refreshToken) {
  const requestBody = qs.stringify({
    client_id: process.env.MICROSOFT_CLIENT_ID,
    client_secret: process.env.MICROSOFT_CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
    redirect_uri: process.env.MICROSOFT_REDIRECT_URI, // Required if it was included in the original auth request
  });

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await axios.post(
      "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      requestBody,
      config
    );
    console.log("New Access Token:", response.data.access_token);
    return response.data; // This includes the new access token and possibly a new refresh token
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw new Error("Failed to refresh token");
  }
}

async function refreshGoogleAccessToken(refreshToken) {
  const requestBody = qs.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await axios.post(
      "https://oauth2.googleapis.com/token",
      requestBody,
      config
    );
    console.log("New Google Access Token:", response.data.access_token);
    return response.data; // This includes the new access token, scope, expiry time, and potentially a new refresh token
  } catch (error) {
    console.error("Failed to refresh Google token:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
    throw new Error("Failed to refresh Google token");
  }
}
// const token =
//   "ya29.a0AXooCgu_x12niOTN_mICb-Bixyoszbm4uoWgssoOzRbR53sL1Cax6DOjmDShkHA3Tbzcj42ZY8ev_sefso3-WGdkm7HlvUG_qBBpt2CkyMzEWwTVa4C3mjUxUf01_K_ylkQRjL-GFRQHN3142Rn0ovlZo87ln00RcU7maCgYKASMSAQ4SFQHGX2Mi2KvuvcqP9bUd1JZ-Aw1WDw0171";
// getGmailOfAccessToken(token);

// const token =
//   "EwBwA8l6BAAUbDba3x2OMJElkF7gJ4z/VbCPEz0AAe675bXVKIJPrIoK0WAAL2JSRTrbZ0odHYC2xKnR4ZfDYuARPctRz7eOGLhlEoP8QGOeBBN05C7Vz/eFCI+FCHciBhbf6jv3F5UGSYVyzQ0dCFnjwYlKQ088so2CB9yIQXNVGs2hSepKiz9aJvNZYWkuYarxVQBTwSMg0s5Q9lElWeVH5SqOJ3PWO+092nkdxFWLf2byCKF1j4s0VWu9zwpuflTifZRHagkvqi9ypok/4pjcc2HWqt/AjeF9+ftMUkp2Tyc5wp+nCoKls6gHjIj86SnethHdApvAHwmTaHxhaQlin3o7zZe2YZu2GvO9Gkki84OV3BqigHoC6sAyJwIDZgAACNyxbkRNeTrCQAI2K3NNxGEak4dF8zzAzt4/C1pyKEx4JJY2Tq1I4K3iJTMngpbEjyIaQb60KQQye5PZxTAAssXirQcQTIZHUFko2NtEY1VLOMoKygx3CdIDRInL/9hfd3Ay24y05meYFd1Ff+XEXkR5TCecXvHjxURYLYWEd6oJnPMG+AgDv6+vL+l6kmP15ZNu+/85c9UdohXXMMFeUTXvcF0yhjFwR/li1A6OdLRcccTyPpNb8TNkVrV3WySrcLo965keUw1WltWrW8B8RMnnsIcksraH9Nz2wbXulzcqKmGd/LiBH7kRff2oidGlknlgIaeygUcqknFY28/cvpxTk9cyjFvDt+a56/gg1mm/udzdo+F1fZGsTbyEmHiDmYHai4COgeouUvT9mcIKBKRlRdpx7m89QLN73vn7vQHEfKkIzXqqE/tCQ0U7E3wgaKeUl04WPdXVM8I7kbTC0xkv+UQNEMMEYMNDoiB/9NYab3gzQA/zJeAlbXVP5Xh2mb6hALBwqDW1t3/dCIqIcMm1cEPV4dazim+aseqHgzgFStX6gdPx5Mbx9CmMobdQBHOZ2xcFmzJsMAOftsrFCvYBAdAMSQ8fVEMcC/RYaVNrD2qgn2GrhhMJesmsOc8EEkcXn7bWlyORZzk0R8V8t3+Vadxag1Spvb0MaPbuSqEF+rtyDlMjI1DErre4WOk72UTgbqFprQbSjhEU+HCtchgXpG/7n0ve/+QwencX6eZcvVaNmSbGGJmFGim7Qj1tb108fRg4CuNj5X+KAg==";
// getOutlookEmailOfAccessToken(token);
// getGmailProfileInfo(
//   "ya29.a0AXooCgu7Ln6ItpaMOrQ9ReN0rJmyMdzUQXYKzs93oV7RLRyE7sx0eEStQjThs1_SZoI6xr8oY34fkUfdF8sbj6Yzpkj2o-AGDHbmvYdpdYXP9WhdVwYjcjmoUvt0IWqcxNJBQemqT6VlkOhYBw6dcNPAfCSMjS-M4DusaCgYKAXoSAQ4SFQHGX2MiUUFIwt48NTc8FKSJCNW8RQ0171"
// );
// getMicrosoftProfileInfo(
//   "EwBwA8l6BAAUbDba3x2OMJElkF7gJ4z/VbCPEz0AARxUewMCqdBzOXBz5RLmmX4IuFm9vnB6X78TC0rddhOwmH7R98o1BdeIdhB+FBw72ICVxJ2N2tRXIzbads10rGmHVVhIB5QNXAoawwhof24Ig+4XJCjYWh41hAHE5903+xATP1OI3mwt/VAr4E9RW/Qy6GXc1RIR6RL7Z7J4r+ZoaHzYpAGye3Vf9lT3q9fgKWVSCbb5YCE/IYp0lLlMxQQAeQy9tRKfbW6iQEJbiVoNZqG08kctIEsalfyVqlof13FNfWXz6w/fyd/Nv7J6eMLbRKIqlJrPdg55oM4HUkr0GoJF36XUDHK3YOa3HPFRmt5MlKwtcrgpz/MxzzwQfF4DZgAACLuAM2oiczjqQAJ5+PeQwtrJNY7jdz2rkmLqG+LMHVdzUERf905ZY89nQ3go7p6r5M8ZP2Pmup7IDpkv3iuAlYIgID/J8geKv2dbqXFWbIBdDKwlHg1E8qjiJd4ysYZMlKQHNCVpV3YAIojDlXhJPk/UYBWbLBmBlX9EtkzUevP0NzVrebs3Un8NqsJX4CEQY9el6vfCNyk77w14A6TZcsEm2VULJNTkY9JnrBjZOknwwQYM7Tnql4XONko6uYP4Gfir1QjZj3DEo/6knkFNHRh8F2IDUOwXU0Mu4PsmQjqqODQd2HRDF3nv37liCZxmv6mByfZQIWvcS573Xpee115n+uG28JR6S2HQJ1ABfkOr0SQ8/mWZvfy7FfPTVUV8BXaOv2J/W4UKtZwngV06fEfAu46CqkPVKCIgt+lGwXzokWjrpPBfvRcQ3MeQl/mjhb3iIWiIC618a8XDEw9ogJ6w0gCTt6uE9ohMKzYSjiQsq5nYwdNoBdZ5beteO8MZGR+UbCKEUY0C0OyvxSxMlzgVlwltPSW94wYC/DscKiLMvdmpYazsg5ok0kiZ2npkkSjxH7378Gfihl+8kPFkzbZbGl6g7SPWA23iF8zGOeWc9NZ3KfvlN5tg5ui5JV9sZkx9qFSM3qBdTLOECSxbQhfOnELa0adAEfziLE0Eti6F7cVPS3ufUC1rHEcE5QasYeEXU1wgZscW+PxqCG3EtQB/80EecqB6HGFQQb97LRcJqdPlPJDoDONuV6YwiT5EQLNgEIOPAKa0M7COAg=="
// );
module.exports = {
  getGmailProfileInfo,
  getMicrosoftProfileInfo,
  refreshMicrosoftAccessToken,
  refreshGoogleAccessToken,
};

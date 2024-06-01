import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useContext } from "react";
import DataContext from "ContextAPI/DataState";

export default function EmailConnectStatusPage() {
  const location = useLocation();
  const dataContext = useContext(DataContext);
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status"); // 'success' or 'failed'
  const email = queryParams.get("email");
  const provider = queryParams.get("provider");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const isSuccess = status === "success";

  function handleReload() {
    if (provider && provider === "google") {
      window.open(
        `${dataContext.API_BASE_URL}/api/auth/google`,
        "_blank",
        "noopener,noreferrer"
      );
    }
    if (provider && provider === "microsoft") {
      window.open(
        `${dataContext.API_BASE_URL}/api/auth/microsoft`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        window.location.href = `${dataContext.APP_URL}/dashboard`;
      }, 2000); // Wait for 2 seconds before redirecting
    } else {
      handleReload();
    }
  }, [isSuccess]);

  return (
    <div></div>
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   {isSuccess ? (
    //     <>
    //       <div style={{ fontSize: "24px", color: "green" }}>
    //         <span>✔️</span> Connection Successful!
    //       </div>
    //       <p>Your email ({email}) has been successfully connected.</p>
    //     </>
    //   ) : (
    //     <>
    //       <div style={{ fontSize: "24px", color: "red" }}>
    //         <span>❌</span> Connection Failed
    //       </div>
    //       <p>Failed to connect your email ({email}). Please try again.</p>
    //       {/* <button

    //       >
    //         Retry
    //       </button> */}
    //       <div style={{ width: "100%", textAlign: "center" }}>
    //         <button
    //           className="gap-2 justify-between px-4 py-3 text-sm font-medium leading-4 text-white whitespace-nowrap border border-solid bg-[linear-gradient(180deg,#FFC300_0%,#FF5733_100%)] border-[color:var(--G1,#FFC300)] rounded-[32px]"
    //           role="alert"
    //           style={{
    //             padding: "10px 20px",
    //             fontSize: "16px",
    //             cursor: "pointer",
    //             color: "white",
    //           }}
    //           onClick={() => handleReload()}
    //         >
    //           Try Again
    //         </button>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
}

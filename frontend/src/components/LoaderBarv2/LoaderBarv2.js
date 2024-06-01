import React, { useState, useEffect } from "react";

function LoaderBarv2() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = `${(totalScroll / windowHeight) * 100}%`;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gray-200 fixed top-[0px] left-0 h-2 z-50">
      <div
        style={{ width: scroll }}
        className="h-1 rounded-r-md bg-gradient-to-r from-[#352474] to-[#C213FF]"
      ></div>
    </div>
  );
}

export default LoaderBarv2;

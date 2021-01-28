import { useState, useEffect } from "react";
import GlobalStyle from "Theme/GlobalStyle";
import React from "react";

function getWindowHeight() {
  const { innerHeight: height } = window;
  return {
    height,
  };
}

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());

  useEffect(() => {
    function handleResize() {
      setWindowHeight(getWindowHeight());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowHeight;
}

const WindowDimension = () => {
  const windowHeightDimension = useWindowHeight();
  return <GlobalStyle windowHeightDimension={windowHeightDimension} />;
};

export default WindowDimension;

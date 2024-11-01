import React from "react";
import { useState, useEffect } from "react";

function Home({ close }) {
  useEffect(() => {
    console.log("test");
    close();
  }, []);
  return <div id="homepage" className="home-page page-content"></div>;
}

export default Home;

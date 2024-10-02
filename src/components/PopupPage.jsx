import React, { useState, useEffect } from "react";
import { div } from "three/webgpu";
//routing imports
import { Routes, Route } from "react-router-dom";
import { APP_FOLDER_NAME } from "../globals";

//pages
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Testing from "../pages/Testing";

function PopupPage({ active, close, page }) {
  const restPath = "http://localhost/portfolio/wp-json/wp/v2/pages/" + page;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <div className={`popup-mask ${active}`}>
      <article className={`popup`}>
        <button className="close-button" onClick={close}>
          <img src="/x-mark.svg" />
        </button>

        {/* ROUTER GOES HERE */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/testing" element={<Testing />} />
        </Routes>
      </article>
    </div>
  );
}

export default PopupPage;

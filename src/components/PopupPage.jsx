import React, { useState, useEffect } from "react";
import { div } from "three/webgpu";
//routing imports
import { Routes, Route } from "react-router-dom";
import { APP_FOLDER_NAME } from "../globals";

//pages
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Work from "../pages/Work";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

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
        <button className="nav-button close-button" onClick={close}>
          <img src="/x-mark.svg" />
        </button>

        {/* ROUTER GOES HERE */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work/:id" element={<Work />} />
        </Routes>
      </article>
    </div>
  );
}

export default PopupPage;

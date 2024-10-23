import React, { useState, useEffect } from "react";
//routing imports
import { Routes, Route } from "react-router-dom";
import { APP_FOLDER_NAME } from "../globals";
import { useSpring, animated } from "react-spring";

//pages
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Work from "../pages/Work";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

function PopupPage({ active, close, page, animationState, toggleAnimation }) {
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

  //animations
  const { opacity } = useSpring({
    from: { opacity: 0 },
    opacity: animationState ? 1 : 0,
    config: {
      duration: 200,
    },
  });

  const { top } = useSpring({
    from: { top: 64 },
    top: animationState ? 0 : 64,
    config: {
      duration: 200,
    },
  });
  return (
    <animated.div className={`popup-mask ${active}`} style={{ top: top }}>
      <animated.article className={`popup`} style={{ opacity: opacity }}>
        <div className="popup-heading-mask"></div>
        <button
          className="nav-button close-button"
          onClick={() => {
            toggleAnimation();
            close();
          }}
        >
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
      </animated.article>
    </animated.div>
  );
}

export default PopupPage;

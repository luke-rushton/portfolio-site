import React from "react";
//routing imports
import { Routes, Route } from "react-router-dom";
import { useSpring, animated } from "react-spring";

//pages
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Work from "../pages/Work";
import Experience from "../pages/Experience";

function PopupPage({ active, close, animationState, toggleAnimation }) {
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
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                close={() => {
                  toggleAnimation();
                  close();
                }}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work/:id" element={<Work />} />
        </Routes>
      </animated.article>
    </animated.div>
  );
}

export default PopupPage;

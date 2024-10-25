import React, { useEffect } from "react";
import { useSpring, animated, easings } from "react-spring";

function DragInfo() {
  //swipe gesture animation
  const swiper = useSpring({
    from: { left: "10%" },
    to: [{ left: "70%" }, { left: "10%" }],
    loop: true,
    config: {
      friction: 40,
    },
  });

  //disappear on click
  useEffect(() => {
    document.body.addEventListener("mousedown", () => {
      document.getElementById("drag-info-component").style.opacity = 0;
    });
    document.body.addEventListener("touchstart", () => {
      document.getElementById("drag-info-component").style.opacity = 0;
    });
  }, []);

  return (
    <div id="drag-info-component" className="drag-info">
      <animated.img style={swiper} src="/cursor-hollow.svg" />
      <p>Drag to Explore</p>
    </div>
  );
}

export default DragInfo;

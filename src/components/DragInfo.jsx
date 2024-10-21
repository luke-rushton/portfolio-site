import React, { useEffect } from "react";
import { useSpring, animated, easings } from "react-spring";

function DragInfo() {
  //swipe gesture animation
  const swiper = useSpring({
    from: { left: "0%" },
    to: [{ left: "70%" }, { left: "0%" }],
    loop: true,
    config: {
      friction: 40,
    },
  });

  //disappear on click
  useEffect(() => {
    document.body.addEventListener("click", () => {
      document.getElementById("drag-info-component").style.opacity = 0;
    });
  }, []);

  return (
    <div id="drag-info-component" className="drag-info">
      <animated.img style={swiper} src="/cursor-hollow.svg" />
      <h2>Drag to Explore</h2>
    </div>
  );
}

export default DragInfo;

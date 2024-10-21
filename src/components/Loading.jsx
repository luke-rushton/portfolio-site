import React from "react";
import { useSpring, animated, useTrail } from "react-spring";

function Loading() {
  const fallingPillars = useTrail(10, {
    from: { y: "0%" },
    to: { y: "100%" },
    delay: 300,
    config: {
      mass: 5,
      tension: 120,
      friction: 14,
      clamp: true,
    },
  });

  return (
    <div className="loading">
      {fallingPillars.map(({ y }, i) => (
        <animated.div key={i} style={{ y }}></animated.div>
      ))}
    </div>
  );
}

export default Loading;

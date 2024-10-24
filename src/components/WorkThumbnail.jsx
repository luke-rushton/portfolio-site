import React from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";

function WorkThumbnail({ id, title, image }) {
  //animations
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 500,
    },
  });
  return (
    <section className="work-thumbnail">
      <NavLink to={`/work/${id}`}>
        <animated.img src={image} style={fadeIn} />
        <animated.h2 style={fadeIn}>{title}</animated.h2>
      </NavLink>
    </section>
  );
}

export default WorkThumbnail;

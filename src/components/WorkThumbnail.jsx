import React from "react";
import { NavLink } from "react-router-dom";

//individual work pages
//temp
import Testing from "../pages/Work";

function WorkThumbnail({ id, title, image }) {
  return (
    <section className="work-thumbnail">
      <NavLink to={`/work/${id}`}>
        <img src={image} />
        <h2>{title}</h2>
      </NavLink>
    </section>
  );
}

export default WorkThumbnail;

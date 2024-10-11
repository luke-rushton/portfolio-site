import React from "react";
import { NavLink } from "react-router-dom";

//individual work pages
//temp
import Testing from "../pages/Work";

function WorkThumbnail({ id, title, image }) {
  return (
    <section className="work-thumbnail">
      <img src={image} />
      <NavLink to={`/work/${id}`}>{title}</NavLink>
    </section>
  );
}

export default WorkThumbnail;

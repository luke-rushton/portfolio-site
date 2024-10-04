import React from "react";
import { NavLink } from "react-router-dom";

//individual work pages
//temp
import Testing from "../pages/Work";

function WorkThumbnail({ id, title, image }) {
  return (
    <section>
      <NavLink to={`/work/${id}`}>{title}</NavLink>
      <p>{image}</p>
    </section>
  );
}

export default WorkThumbnail;

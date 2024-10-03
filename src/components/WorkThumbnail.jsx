import React from "react";
import { NavLink } from "react-router-dom";

//individual work pages
//temp
import Testing from "../pages/Work";

function WorkThumbnail({ id }) {
  return (
    <section>
      <NavLink to={`/work/${id}`}>{id}</NavLink>
    </section>
  );
}

export default WorkThumbnail;

import React from "react";
import { NavLink } from "react-router-dom";

//individual work pages
//temp
import Testing from "../pages/Testing";

function WorkThumbnail({ id }) {
  return (
    <section>
      <NavLink to={`/testing/${id}`}>{id}</NavLink>
    </section>
  );
}

export default WorkThumbnail;

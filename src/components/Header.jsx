import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header({ open, toggleAnimation }) {
  //detect page change

  return (
    <header>
      <ul>
        <li>
          <NavLink
            onClick={() => {
              open();
              toggleAnimation();
            }}
            to={`/about`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              open();
              toggleAnimation();
            }}
            to={`/works`}
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              open();
              toggleAnimation();
            }}
            to={`/contact`}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              open();
              toggleAnimation();
            }}
            to={`/experience`}
          >
            Experience
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header({ open }) {
  //detect page change

  return (
    <header>
      <ul>
        <li>
          <NavLink onClick={open} to={`/`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={open} to={`/about`}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={open} to={`/works`}>
            Works
          </NavLink>
        </li>
        <li>
          <NavLink onClick={open} to={`/contact`}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink onClick={open} to={`/experience`}>
            Experience
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

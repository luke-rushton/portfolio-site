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
            to={`/experience`}
          >
            Experience
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
            to={`/about`}
          >
            About
          </NavLink>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luke-rushton/" target="_blank">
            <img src="/linkedin.svg" alt="LinkedIn Logo" />
          </a>
        </li>
        <li>
          <a href="https://github.com/luke-rushton" target="_blank">
            <img src="/github_white.svg" alt="Github Logo" />
          </a>
        </li>
        <li>
          <button
            href="#"
            target="_blank"
            onClick={() => {
              navigator.clipboard.writeText("luke.rushtonx@gmail.com");

              // Alert the copied text
              alert("Email address copied!");
            }}
          >
            <img src="/gmail.svg" alt="Gmail Logo" />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;

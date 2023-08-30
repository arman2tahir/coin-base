import React, { useState, useEffect, useRef } from "react";
import Agent from "../../Images/Agent.png";
import "./Header.css";
import { Logo } from "../../Images/Svgs/Logo";
import { SearchIcon } from "../../Images/Svgs/SearchIcon";
import { BellIcon } from "../../Images/Svgs/BellIcon";
import { Sun } from "../../Images/Svgs/Sun";
import { Moon } from "../../Images/Svgs/Moon";

function getDefaultMode() {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "dark";
}

export default function Header() {
  const [isDark, setIsDark] = useState(getDefaultMode());

  useEffect(() => {
    if (isDark === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    localStorage.setItem("theme", isDark);
  }, [isDark]);

  return (
    <header>
      <nav>
        <div className="left">
          <Logo />
        </div>
        <div className="right">
          <div className="searchbar">
            <div className="search">
              <SearchIcon />
              <input id="search" type="search" placeholder="Search e.g cards" />
            </div>
          </div>
          <div className="p-img">
            <img src={Agent} alt="Img" className="n-img" />
            <p className="img-name">Agent Rose</p>
          </div>
          <div className="bell-notification">
            <BellIcon />
            <p className="b-num">24</p>
          </div>
          <button
          className="darkbtn"
          onClick={() => setIsDark(isDark === "light" ? "dark" : "light")}>
          {isDark === "dark" ? <Sun /> : <Moon />}
        </button>
        </div>
      </nav>
    </header>
  );
}

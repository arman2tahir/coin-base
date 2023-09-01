import React, { useState, useEffect } from "react";
import Agent  from "../../assets/images/Agent.png";
import "./styles.css";
import { Logo, SearchIcon, BellIcon, Sun, Moon } from "../../assets/svgs";

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
            onClick={() => setIsDark(isDark === "light" ? "dark" : "light")}
          >
            {isDark === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

import React from "react";
import "./SideBar.css";
import Eye from "../../Images/overview.svg";
import User from "../../Images/users.svg";
import Message from "../../Images/trade.svg";
import Wallet from "../../Images/wallet.svg";
import Reuse from "../../Images/trans.svg";
import Statics from "../../Images/stats.svg";
import Settings from "../../Images/setting.svg";
import { Link } from 'react-router-dom';

import { useState } from "react";

export default function SideBar() {

  const sidebarItems = document.querySelectorAll('.s-overview ');

    function handleItemClick(index) {
      sidebarItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
        console.log("clicked")
      });
    }

  return (
    <aside>
      <div className="sidebar">
        <Link to="/" >
        <div className="s-overview active">
          <div className="s-wrapper">
            <img src={Eye} alt="Overview" className="s-eye" />
            Overview
          </div>
        </div>
        </Link>
        <Link to="/users">
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={User} alt="User" className="s-eye" />
            User
          </div>
        </div>
        </Link>
        <Link to="/">
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Message} alt="Message" className="s-eye" />
            Trade
          </div>
        </div>
        </Link>
        <Link to="/wallet">
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Wallet} alt="Wallet" className="s-eye" />
            Wallet
          </div>
        </div>
        </Link>
        <Link to="/transaction">
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Reuse} alt="Reuse" className="s-eye" />
            Transactions
          </div>
        </div>
        </Link>
        <Link to="/statistics">
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Statics} alt="Statics" className="s-eye" />
            Statistics
          </div>
        </div>
        </Link>
        <Link to="/">
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Settings} alt="Settings" className="s-eye" />
            Settings
          </div>
        </div>
        </Link>
        <div className="account-button">
          <button className="refer">Referral</button>
          <button className="logout">Logout</button>
        </div>
      </div>
    </aside>
  );
}

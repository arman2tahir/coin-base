import React from "react";
import "./SideBar.css";
import Eye from "../../Images/overview.svg";
import User from "../../Images/users.svg";
import Message from "../../Images/trade.svg";
import Wallet from "../../Images/wallet.svg";
import Reuse from "../../Images/trans.svg";
import Statics from "../../Images/stats.svg";
import Settings from "../../Images/setting.svg";

export default function SideBar() {
  const buttons = document.querySelectorAll(".s-overview");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      console.log("clicked");
    });
  });

  return (
    <aside>
      <div className="sidebar">
        <div className="s-overview active">
          <div className="s-wrapper">
            <img src={Eye} alt="Overview" className="s-eye" />
            Overview
          </div>
        </div>
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={User} alt="User" className="s-eye" />
            User
          </div>
        </div>
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Message} alt="Message" className="s-eye" />
            Trade
          </div>
        </div>
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Wallet} alt="Wallet" className="s-eye" />
            Wallet
          </div>
        </div>
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Reuse} alt="Reuse" className="s-eye" />
            Transactions
          </div>
        </div>
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Statics} alt="Statics" className="s-eye" />
            Statistics
          </div>
        </div>
        <div className="s-overview">
          <div className="s-wrapper">
            <img src={Settings} alt="Settings" className="s-eye" />
            Settings
          </div>
        </div>
        <div className="account-button">
          <button className="refer">Referral</button>
          <button className="logout">Logout</button>
        </div>
      </div>
    </aside>
  );
}

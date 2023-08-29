import React, { useEffect, useState } from "react";
import "./SideBar.css";
import Eye from "../../Images/overview.svg";
import User from "../../Images/users.svg";
import Message from "../../Images/trade.svg";
import Wallet from "../../Images/wallet.svg";
import Reuse from "../../Images/trans.svg";
import Statics from "../../Images/stats.svg";
import Settings from "../../Images/setting.svg";
import { Link, useLocation } from 'react-router-dom';


export default function SideBar() {

  const [activeBar, setActiveBar] = useState(0);

  const sidebarItems = [
    { icon: Eye, label: "Overview", path: "/" },
    { icon: User, label: "User", path: "/users" },
    { icon: Message, label: "Trade", path: "/trade" },
    { icon: Wallet, label: "Wallet", path: "/wallet" },
    { icon: Reuse, label: "Transactions", path: "/transaction" },
    { icon: Statics, label: "Statistics", path: "/statistics" },
    { icon: Settings, label: "Setting", path: "/settings" },
    
  ];

  const handleItemClick = (index) => {
    setActiveBar(index);
  };

  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <aside>
      <div className="sidebar">
      {sidebarItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              className={`s-overview ${location.pathname === item.path && "active"}`}
              onClick={() => handleItemClick(index)}
            >
              <div className="s-wrapper">
                <img src={item.icon} alt={item.label} className="s-eye" />
                {item.label}
              </div>
            </div>
          </Link>
        ))}
        <div className="account-button">
          <button className="refer">Referral</button>
          <button className="logout">Logout</button>
        </div>
      </div>
    </aside>
  );
}

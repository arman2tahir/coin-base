import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import {
  EyeIcon,
  UserIcon,
  TradeIcon,
  WalletIcon,
  ReuseIcon,
  StatsIcon,
  SettingIcon,
} from "../../assets/svgs";

export default function SideBar() {
  const [activeBar, setActiveBar] = useState(0);

  const sidebarItems = [
    { icon: <EyeIcon />, label: "Overview", path: "/" },
    { icon: <UserIcon />, label: "User", path: "/users" },
    { icon: <TradeIcon />, label: "Trade", path: "/trade" },
    { icon: <WalletIcon />, label: "Wallet", path: "/wallet" },
    { icon: <ReuseIcon />, label: "Transactions", path: "/transaction" },
    { icon: <StatsIcon />, label: "Statistics", path: "/statistics" },
    { icon: <SettingIcon />, label: "Setting", path: "/settings" },
  ];

  const handleItemClick = (index) => {
    setActiveBar(index);
  };

  let location = useLocation();

  useEffect(() => {}, []);

  return (
    <aside>
      <div className="sidebar">
        {sidebarItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              className={`s-overview ${
                location.pathname === item.path && "active"
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="s-wrapper">
                {item.icon}
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

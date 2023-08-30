import React, { useEffect, useRef, useState } from "react";
import "./OverViewBox.css";
import { DotIcon } from "../../Images/Svgs/DotIcon";
import { Link } from "react-router-dom";

export default function OverviewBox(props) {
  const opt = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!opt.current.contains(e.target)) {
        setIsVisible("");
      } else {
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((preState) => !preState);
  };
  return (
    <div className="overview-box">
      <div onClick={toggleVisibility} className="dots" ref={opt}>
        <DotIcon />
      </div>

      <div className={`b-view-more ${isVisible ? "visible" : ""}`}>
        <Link to="/wallet">View</Link>
        <Link to="/">Delete</Link>
      </div>

      <div className="b-image">
        {/* complete circle */}
        <svg
          className="circle-image"
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="91"
          viewBox="0 0 90 91"
          fill="none"
        >
          <circle
            cx="44.8541"
            cy="45.8248"
            r="39.8541"
            stroke="#FAA9C6"
            strokeWidth="10"
          />
        </svg>

        {/* gradient half circle */}
        <svg
          className="circle-image"
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="91"
          viewBox="0 0 82 91"
          fill="none"
        >
          <path
            d="M38.1566 6.0621C45.2976 5.57765 52.4373 7.02523 58.8257 10.2528C65.2141 13.4803 70.6155 18.3687 74.4624 24.4045C78.3093 30.4403 80.4597 37.4006 80.6879 44.5544C80.916 51.7082 79.2134 58.7914 75.7589 65.06C72.3044 71.3287 67.2255 76.5513 61.0558 80.1793C54.886 83.8074 47.853 85.707 40.6956 85.6785C33.5382 85.6501 26.5206 83.6946 20.3799 80.0176C14.2391 76.3407 9.20192 71.0778 5.79737 64.7819"
            stroke="url(#paint0_linear_1_1376)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1376"
              x1="45.3395"
              y1="-13.15"
              x2="50.4006"
              y2="145.766"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--gradient-pink)" />
              <stop offset="1" stopColor="var(--gradient-blue)" />
            </linearGradient>
          </defs>
        </svg>

        {/* circle upper design */}
        <svg
          className="design"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="43"
          viewBox="0 0 44 43"
          fill="none"
        >
          <path
            opacity="0.518059"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.5924 42.5462C34.5924 42.5462 32.8279 42.4435 36.7354 40.6932C40.643 38.9429 47.8152 23.7466 40.048 19.9222C32.2807 16.0979 39.544 8.42581 36.8254 4.08661C34.1068 -0.252582 31.1685 -0.628557 24.7193 3.65811C18.27 7.94478 5.82797 -3.5045 1.47138 5.58403C-2.88521 14.6725 4.51494 3.63808 4.51494 3.63808L22.6602 9.34638L34.1042 19.3673L34.5924 42.5462Z"
            fill="url(#paint0_linear_1_1373)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1373"
              x1="12.7706"
              y1="43.2224"
              x2="29.3647"
              y2="-25.6748"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--gradient-pink)" />
              <stop offset="1" stopColor="var(--gradient-blue)" />
            </linearGradient>
          </defs>
        </svg>
        {/* circle lower design */}
        <svg
          className="design-2"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="73"
          viewBox="0 0 75 73"
          fill="none"
        >
          <path
            opacity="0.253397"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.902618 53.6112C0.902618 53.6112 1.46088 50.5276 3.65617 57.7788C5.85146 65.03 30.6751 80.9006 38.9846 68.0476C47.2941 55.1946 59.042 69.6173 67.1571 65.7599C75.2723 61.9025 76.5577 56.8116 70.5089 44.5449C64.46 32.2782 79.3393 17.3307 64.5074 7.72094C49.6754 -1.88881 61.1577 0.471983 61.1577 0.471983L61.0821 39.7055L41.2282 57.7052L0.902618 53.6112Z"
            fill="url(#paint0_linear_1_1378)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1378"
              x1="3.89578"
              y1="16.393"
              x2="120.211"
              y2="59.3986"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--gradient-pink)" />
              <stop offset="1" stopColor="var(--gradient-blue)" />
            </linearGradient>
          </defs>
        </svg>
        <p>{props.numbers}</p>
      </div>
      <div className="b-text">
        <h1 className="number-text">
          Total Number
          <br /> Of {props.totalNumbers}
        </h1>
        <div className="graph">
          <div className="percentage">
            <p className="percent-text">{props.percentage} %</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="4"
              viewBox="0 0 7 4"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.2744 3.17075C6.55728 3.49404 6.3277 4 5.89812 4H1.10188C0.672305 4 0.442716 3.49404 0.725595 3.17075L3.12371 0.430043C3.32292 0.20238 3.67708 0.20238 3.87629 0.430044L6.2744 3.17075Z"
                fill="#1CD1A1"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="26"
            viewBox="0 0 63 26"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 26V10.3755L5.60289 18.645L11.8586 14.0553L17.1566 8.95548L22.5442 6.43643L27.8222 8.95548L33.8206 14.6354L39.481 8.95548L45.2619 14.0553L50.9223 3.80797C50.9223 3.80797 52.9538 5.69498 53.7891 7.26675C53.9586 7.58562 62.0776 -1.1916 62.7162 0.137052C63.3548 1.4657 62.7162 26 62.7162 26H0Z"
              fill="url(#paint0_linear_1_1706)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_1706"
                x1="-25.6449"
                y1="-18.7048"
                x2="-25.6449"
                y2="28.4624"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1CD1A1" />
                <stop offset="1" stopColor="var(--primary-color)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Statistics.css";
import { DotIcon } from "../../Images/Svgs/DotIcon";
import { CircleImage1 } from "../../Images/Svgs/CircleImage1";
import { CircleImage2 } from "../../Images/Svgs/CircleImage2";
import { CircleImage3 } from "../../Images/Svgs/CircleImage3";

export default function Statistics() {
  return (
    <div className="statistics">
      <div className="s-titlebar">
        <h1 className="s-title">Statistics</h1>
        <DotIcon />
      </div>
      <h2 className="project-name">My Own Project</h2>

      <div className="bars">
        <div className="bar-numbers">
          <p>60</p>
          <p>50</p>
          <p>40</p>
          <p>30</p>
          <p>20</p>
          <p>10</p>
        </div>
        <div className="bar-lines">
          <div className="lines-inner">
            <p className="Amazon"></p>
          </div>
          <div className="lines-inner">
            <p className="Google"></p>
          </div>
          <div className="lines-inner">
            <p className="iTunes"></p>
          </div>
          <div className="lines-inner">
            <p className="Payoneer"></p>
          </div>
          <div className="lines-inner">
            <p className="Bitcoin"></p>
          </div>
          <div className="lines-inner">
            <p className="Ethereum"></p>
          </div>
          <div className="lines-inner">
            <p className="Tecno"></p>
          </div>
          <div className="lines-inner">
            <p className="Paypal"></p>
          </div>
          <div className="lines-inner">
            <p className="Aliexpress"></p>
          </div>
          <div className="lines-inner">
            <p className="Konga"></p>
          </div>
          <div className="lines-inner">
            <p className="Jumia"></p>
          </div>
        </div>
      </div>

      <div className="bars-2">
        <div className="height"></div>
        <div className="bar-text">
          <p>Amazon</p>
          <p>Google</p>
          <p>iTunes</p>
          <p>Payoneer</p>
          <p>Bitcoin</p>
          <p>Ethereum</p>
          <p>Tecno</p>
          <p>Paypal</p>
          <p>Aliexpress</p>
          <p>Konga</p>
          <p>Jumia</p>
        </div>
      </div>
      <div className="box-main">
        <div className="bars-box">
          <h4>Avarage score</h4>
          <p>146/217</p>
          <div className="progress-line">
            <div className="line"></div>
          </div>
        </div>
        <div className="box-images">
          <CircleImage1 />

          <CircleImage2 />

          <CircleImage3 />
        </div>
      </div>
    </div>
  );
}

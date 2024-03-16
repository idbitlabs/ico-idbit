import React, { useState } from "react";
import shape01 from "../../assets/img/banner/banner_shape011.png";
import shape02 from "../../assets/img/banner/banner_shape033.png";
import shape03 from "../../assets/img/banner/banner_shape033.png";
import fireIcon from "../../assets/img/banner/fire.png";
import CountDownOne from "../CountDown/CountDownOne";


const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img src={shape01} alt="" className="img-one" />
        <img src={shape02} alt="" className="img-two" />
        <img src={shape03} alt="" className="img-three" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src={fireIcon} alt="" />
              <h2 className="title">
                Join Future of Algorithmic <span>Crypto</span> Trading
                Strategies
              </h2>
            </div>
            <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 MATIC= 1000 IDT</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">Token sale status..</h2>

              <CountDownOne />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import img01 from "../../assets/img/biglogo.png";
import img022 from "../../assets/img/biglogo.png";
import { Link } from "react-router-dom";
import img02 from "../../assets/img/banner/banner_shape033.png";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="" />
              <img src={img02} alt="" className="img-two" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  The World’s <span>1st IDT</span> Platform That Offers Rewards
                </h2>
              </div>
              <p>
                The World’s 1st IDT Platform That Offers Rewards and The
                platform helps investors to make easy to purchase and sell their
                tokens
              </p>
              <Link to="https://idt.idbit.org/" className="btn">
                Purchase Tokens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

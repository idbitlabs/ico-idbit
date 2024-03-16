import React from "react";
import chartImg from "../../assets/img/chart.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Sales = () => {
  const chart_info_list = [
    "Contingency: 70%",
    "Business Development: 10%",
    "Investor: 30%",
    "Poland",
    "Legal & Regulation:10%",
    "Czech Republic",
  ];

  return (
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={chartImg} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Funding Allocation"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="1000 IDT = 1 MATIC"
                    description=" The World’s 1st IDT Platform That Offers Rewards and The
                    platform helps investors to make easy to purchase and
                    sell their tokens"
                    link="https://idt.idbit.org/"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;

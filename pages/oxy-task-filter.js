/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Oxytaskfilters() {
  
  return (
    <>
      <Layout>
       

        <section className="section-box">
          <div
            className="banner-hero banner-4"
            style={{ backgroundColor: "#ffded3" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                  OXY Task Filters
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  The custom OXY task filters help you extend the task functionality by helping you create and manage dynamic filter templates that you can fall back on for future use and easy access.<br></br><br></br>
This can help you filter tasks related to invoices, projects, contracts, estimates, expenses, leads and even proposal documents. Everything from the deadlines, assignee, task status and grouping are all possible in this section of the Shadobooks CRM. The task filters also enable you to assign fixed hourly rates and get a grasp of the total hours logged in along with the billable amount at any time during the flow of your projects




                  </p>
                 
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    {/* <a
                      className="popup-youtube btn-play-video-2"
                      onClick={() => setOpen(true)}
                    ></a> */}

                    <img
                      className="img-responsive shape-2"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/banner1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}

export default Oxytaskfilters;

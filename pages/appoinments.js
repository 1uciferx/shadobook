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

function Appoinments() {
  
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
                  Appoinments
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  The appointments management section of the dashboard is a key highlight of the dashboard where you can visualize all your upcoming events in the order of priority and timelines.<br></br><br></br> 
This will help you maintain a coherent and well-informed customer management strategy. The meeting minutes can also be seamlessly added to the description column which will enable all the sales touchpoints to work in perfect sync with each other.<br></br><br></br> 
This feature thus eliminates the chances of missing out on details, redundancy in communication, exhaustive paperwork or the need to operate with multiple applications.




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

export default Appoinments;

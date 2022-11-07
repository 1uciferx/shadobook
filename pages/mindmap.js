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

function Mindmap() {
  
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
                  Mind Map
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Project mind maps are integral in presenting your teammates with diverse perspectives and bringing their vision to life. The project road map section of the Shadobooks CRM helps you with a separate area to store, manage and access all your ideas from anywhere and at any time.<br></br><br></br>
Be it exploring different perspectives in any areas like clients, servicing, dealing with prospects or potential strategic partnerships, mind maps can prove to be an effective tool for enhancing collaboration among teams.

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

export default Mindmap;

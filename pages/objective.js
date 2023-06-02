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

function Objective() {
  
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
                  Objective

                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Objective and Key Results (OKR) reports can help any organization in measuring, managing and tracking revenue-related goals. They help in understanding the core focus of businesses and drive your efforts towards meeting your business goals. <br></br>
                  <br></br>

This section of Shadobooks CRM helps in performance management, revisiting strategies and making informed decisions to drive your business for the better.  The detailed report generated here will help in a better overall understanding of your processes and easy identification of further room for improvement in no time.



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
                      src="assets/imgs/page/homepage4/objective1.png " style={{borderRadius:"30px",height:"610px",width:"700px"}}
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

export default Objective;

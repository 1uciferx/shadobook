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

function Feedback() {
  
  return (
    <>
      <Layout>
       

        <section className="section-box">
          <div
            className="banner-hero banner-4"
            style={{ backgroundColor: "#525252" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 " style={{ color: "#aa976a" }}>
                  Feedback

                  </h1>
                  <p className="text-body-lead-large mt-30 pr-40" style={{ color: "white" }}>
                  Customer feedback management aids in managing better relationships with your clients by resolving all their queries in a fast manner. This will help you offer quick issue resolution.<br></br><br></br>
Shadobooks helps you to keep a track of the feedback you receive and derive insights from these to level up your processes. This will also help you with overall reputation management and better optimisation & channeling of your efforts.


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
                      src="assets/imgs/page/homepage4/feedback.jpg " style={{borderRadius:"30px",height:"610px",width:"700px"}}
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

export default Feedback;

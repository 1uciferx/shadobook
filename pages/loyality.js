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

function Loyality() {
  
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
                  Loyality
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  By digging deeper into your customer behavior and understanding some key insights about their business with you, you can arrive at customer loyalty which is a measure of the relationship the client shares with you.  <br></br><br></br>             

An integral part of Shadobooks is presenting you with detailed insights about each customer. This data can be used for attracting customers even more through targeted incentives, nudging them towards their next sale with you and driving your efforts towards better overall customer management and retention.<br></br><br></br> 
By keeping a thorough track of your interactions, you will also be maintaining a foundationally strong reputation management process with them.



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

export default Loyality;

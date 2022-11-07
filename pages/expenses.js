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

function Expenses() {
  
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
                  Expenses
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  With Shadobooks, you can track, manage and strategies your spending as they happen with the real-time expense tracking solution that it offers. Make way for an easy administrative process with this streamlined CRM that makes it all the easier to record your business expenses, process receipts and request reimbursements all within just a few taps.<br></br><br></br>
With a flexible interface that is also accessible on the go, you can make your whole accounting process hassle-free. The CRM also presents elaborate reports that you can carefully assess to make better spending strategies and control your overall expenses. 





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
                      src="assets/imgs/page/homepage4/expenses.jpg "style={{borderRadius:"30px",height:"500px"}}
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

export default Expenses;

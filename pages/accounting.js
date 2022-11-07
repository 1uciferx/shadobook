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

function Accounting() {
  
  return (
    <>
      <Layout>
       

        <section className="section-box">
          <div
            className="banner-hero banner-1"
            style={{ backgroundColor: "#ffded3" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                  Accounting
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Help your accountants, bookkeepers and tax professionals access all accounting data in one place. This all-inclusive finance platform will help you manage all your sales, revenues, profits, loss and other fiscal elements with absolute organization and precision.<br></br><br></br>
With automated billing processes, flexible general ledger, integrated managing intelligence and easy access, you can streamline, simplify, visualize, analyze and automate the end-to-end of your accounting operations with ease. Keep track of all your accounts, credit notes, payments, expenses and transactions with a profit-loss overview.<br></br><br></br>
 The interface is also designed for helping accountants backtrack all the leads, prospects, and revenues for better strategizing in the future.

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
                      src="assets/imgs/page/homepage4/acc12.png"
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

export default Accounting;

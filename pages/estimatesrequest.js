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

function Estimatesrequest() {
  
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
                  Estimates Request
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  This section of the CRM helps you create forms that can be integrated into your website. These forms enable the user to get in touch with you and request an estimate about your services of yours that they’re looking to avail of.<br></br><br></br>
The estimate feature will give you the option to customize the form that is tailored to give you a better understanding of the customer intent. The CRM will enable assigning this influx of requests to specific teams and employees. The estimated requests can then be created here according to the details you have received and later send it to the respective clientele while also keeping a track of all your touch points.
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

export default Estimatesrequest;

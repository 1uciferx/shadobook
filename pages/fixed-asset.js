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

function Fixed() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div
            className="banner-hero banner-4 bg-about-1 bg-2"
            style={{ backgroundColor: "#ffded3" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                    Fixed Assets
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    The fixed asset section of the platform enables end-to-end
                    visibility of the management process starting from
                    acquisition to disposition. Shadobook offers an elaborate
                    portal for complete tracking of asset movements across your
                    enterprise, request management and also ensure compliance
                    through periodical audits. You can easily maintain, monitor,
                    and manage business assets along with maintenance reporting,
                    audit compliance, licenses management and also asserting
                    depreciation values. <br></br>
                    <br></br>
                    By integrating all your crucial data under one platform, you
                    can also hugely prevent any losses and damages
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
                      src="assets/imgs/page/homepage4/fa.jpg "
                      style={{
                        borderRadius: "30px",
                        height: "500px",maxWidth:"130%"
                      }}
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

export default Fixed;

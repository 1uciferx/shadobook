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
            className="banner-hero banner-4"
            style={{ backgroundColor: "#28506f" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 " style={{ color: "#00b3fd" }}>
                    Webhooks
                  </h1>
                  <p className="text-body-lead-large  mt-30 pr-40"  style={{ color: "#acdced" }}>
                    Shadobooks CRM offers webhooks services that will allow HTTP requests for connecting web APIs and services with a subscribe or publish model. They are user-defined HTTP callbacks that are activated by a trigger to make a request.<br></br>
                    A real-world example would be to set an automatic email reminder first thing each morning for your day-to-day task lists.


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
                      src="assets/imgs/page/homepage4/webhooks.jpg " style={{borderRadius:"30px",height:"610px",maxWidth:"130%"}}
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

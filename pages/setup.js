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
            className="banner-hero banner-4 bg-1"
            style={{ backgroundColor: "rgb(255 211 255 / 27%)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">Setup</h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    The setup section helps you customize and configure the
                    entire scope of the Shadobooks CRM. There are diverse
                    operations here that you are enabled to do including:
                    <br></br>
                    doing new staff members,<br></br>
                    <br></br>{" "}
                  </p>

                  <span className="text-body-lead-medium">
                    · Creating client profiles<br></br>· Importing leads from
                    sources<br></br>· Email, SMS or WhatsApp chat integrations
                    <br></br>· Creating new roles<br></br>· Configuring theme
                    styles and creating new templates<br></br>· Finance settings
                    like tax rates, mode of payments and currencies<br></br>·
                    Adding pre-defined responses, ticket management strategies
                    and spam filters for support services<br></br>· Creating new
                    custom fields<br></br>
                  </span>

                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    The setup section focuses on helping you manage the CRM your
                    way.
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
                      src="assets/imgs/page/homepage4/setup.png " 
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

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
            style={{ backgroundColor: "rgb(255 211 211 / 43%)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                    Team Passwords


                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    The team passwords help you store all your passwords safely and securely. You can categorically store your crucial passwords for everything from credit cards, bank details, software licenses, email passwords and server credentials.<br></br>
                    This section also offers an option to hide these from the client-facing end of the CRM. You can also manage the permissions to this section internally between teams to authorize access only to the ones you deem fit thus protecting this data even more so.
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
                      src="assets/imgs/page/homepage4/tp.jpg " style={{borderRadius:"30px",height:"600px",maxWidth:"120%"}}
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

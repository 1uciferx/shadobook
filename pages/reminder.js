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
            style={{ backgroundColor: "#cfbeeb" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                    Reminder
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    The remainder module of the shadobooks can help you keep complete track of all your deadlines, task reminders, and prevent any escalation. This section enables you to assign tasks along with their timelines as necessary. <br></br><br></br>
                    This can help you take care of all your operations in an orderly format by maintaining an organized workflow. All your teams and departments will all be informed about your operations and the specific schedules assigned to them.


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
                      src="assets/imgs/page/homepage4/reminder1.png " style={{borderRadius:"30px",height:"610px"}}
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

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
            style={{ backgroundColor: "rgb(211 255 252 / 46%)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                    Staff Workload
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    Monitoring and overseeing staff workload will help you utilize your resources efficiently and improve overall productivity. Shadobook interface offers charts and graphs for visualizing your workflow, timelines, estimated hours, hours spent on particular work, department-wise workflow, etc.<br></br><br></br>

                    The CRM also offer Kanban Charts for easy project management and workflow monitoring. This tool also helps in understanding the efficiency of your resources.
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
                      src="assets/imgs/page/homepage4/sw.jpg " style={{borderRadius:"30px",height:"610px",width:"700px"}}
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

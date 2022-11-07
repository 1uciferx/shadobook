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

function Task() {
  
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
                  Tasks
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Organize, build, collaborate and manage all your work under one place with the tasks section of the Shadobooks CRM. The solution it offers is a quick-to-implement and easy-to-use interface.<br></br><br></br>
Manage, prioritize, access and oversee all your tasks on the go. Enhance your productivity levels with a well-suited tool that helps in complete project management from the start to finish. 




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

export default Task;

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

function Projects() {
  
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
                  Projects
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Manage all your work under one roof with the project section of the CRM platform. The tool offers complete end-to-end support for taking care of all your project data including the tasks, notes, contracts, invoices, payments, support tickets and proposals altogether. The platform can greatly improve the organizational aspects of your operational processes and enhanced productivity levels.<br></br><br></br>
You can also integrate all your crucial documents under the attachment section. Keep a tab on complete project history, client profiling and everyday operations tracking in just a couple of clicks. The interface also has options for setting reminders or tracking deadlines and all the other add-ons that it comes with
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

export default Projects;

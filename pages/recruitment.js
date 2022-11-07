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

function Recruitment() {
  
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
                  Recruitment

                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Manage the end-to-end of your recruitment process with Shadobooks CRM. Keep track of your candidates, their compatibility to the given job profile and their interview records here. <br></br><br></br>
Get a complete visualization of your recruitment campaigns and their respective status. Get insightful updates about your candidates while also maintaining an up-to-date track of the interview schedules.<br></br><br></br>
Improve your strategies with more insights about your recruitment channels and portals. The portal also offers Kanban boards for detailed visualization and understanding of your candidate profiles and their application status with your organization.




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
                      src="assets/imgs/page/homepage4/recuritment.jpg " style={{borderRadius:"30px",height:"610px",width:"700px"}}
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

export default Recruitment;

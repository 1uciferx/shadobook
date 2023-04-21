/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import { Helmet } from 'react-helmet';
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Projectroadmap() {
  
  return (
    <>
      <Layout>
       

 {/* facebook and twitter meta graphs starts here */}
 <Helmet>
        <meta property="og:title" content="Shadobooks ERP" />
        <meta property="og:description" content="Shadobooks erp solutions." />
        <meta property="og:image" content="/assets/imgs/page/homepage1/sb-logo.png" />
        <meta property="og:url" content="https://www.facebook.com/shadobookscrm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadobooks ERP" />
        <meta name="twitter:description" content="Shadobooks erp solutions." />
        <meta name="twitter:image" content="/assets/imgs/page/homepage1/sb-logo.png" />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* facebook and twitter meta graphs ends here */}

        <section className="section-box">
          <div
            className="banner-hero banner-1 bg-10"
            style={{ backgroundColor: "#ffded3" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                  Project Roadmap

                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Shadobooks CRM presents an interface that opens doors to convenience by enabling complete operation support for projects of any scale. The roadmap section comes with a highly customisable interface that is designed for end-to-end data management and progress tracking.<br></br><br></br>
There are separate sections for project overviews, maintaining task sheets or to-dos, timelines & schedules, meeting notes, milestones, raising tickets, or even managing your mind maps along with a whiteboard for charting down the best of your ideas then and there.<br></br><br></br>
This section is also aimed at promoting collaborative team effort and has a tab with updated recent activities to keep all of the members informed and engaged transparently.


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
                      src="assets/imgs/page/homepage4/pr.jpg " style={{borderRadius:"30px",height:"600px",maxWidth:"130%"}}
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

export default Projectroadmap;

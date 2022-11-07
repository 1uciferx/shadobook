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

function Taskbookmarks() {
  
  return (
    <>
      <Layout>
       

        <section className="section-box">
          <div
            className="banner-hero banner-2"
            style={{ backgroundColor: "#bbcaf5" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                  Task Bookmarks

                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Task bookmarks module presented by the Shadobooks CRM helps you categorize all your project tasks and assignments in the order of priority through bookmark lists. This enables easy visualization of your workflow and all your tasks can be grouped or searched in an orderly fashion.<br></br><br></br>
It improves collaboration between teams and also helps them stay informed on what’s happening around them. They help keep the teammates informed about all the task updates. Create, assign and manage tasks pertaining to both the client facing the end and internal work processes while also bookmarking them categorically.

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
                      src="assets/imgs/page/homepage4/taskbookmark.jpg " style={{borderRadius:"30px",height:"610px",width:"800px"}}
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

export default Taskbookmarks;

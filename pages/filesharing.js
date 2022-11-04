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
            style={{ backgroundColor: "rgb(211 255 224)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                    File Sharing

                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    Shadobooks CRM offers a centralized platform to share and receive files as necessary with the clients or for internal sharing purposes. In order to prevent unauthorized access to specific crucial documents, the portal offers options to manage file sharing with permissible access and download restrictions.<br></br>
                    The section also comes with a reporting option that can help you visualize the shared files and their respective download statistics. The file sharing option in the CRM can simply improve collaborative working between the team while also establishing a transparent process flow.
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

export default Fixed;

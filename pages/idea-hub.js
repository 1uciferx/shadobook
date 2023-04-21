/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import Head from 'next/head';
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Fixed() {

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout>


        <section className="section-box">
          <div
            className="banner-hero banner-4 bg-about-1"
            style={{ backgroundColor: "rgb(255 255 211 / 41%)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                    Idea Hub

                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    The idea hub section enables you with an out-of-the-box approach to focus on new opportunities. Be it any business challenge or issue resolution, you can jot down all your ideas here collectively and figure out the best approach from the options you have. <br></br><br></br>
                    They help in the collaborative development of teams and overcoming crucial tasks by engaging in collective ideas. This section of the portal gives the employees a space to identify new challenges, come up with ideas driven by innovation and convert them to actual solutions.


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
                      src="assets/imgs/page/homepage4/ideahub.jpg " style={{ borderRadius: "30px", height: "600px", maxWidth: "150%" }}
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

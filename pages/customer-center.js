/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import Head from 'next/head';

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Customercenter() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <meta http-equiv="refresh" content="0; url=https://shadobooks.com/customer-center" />
      </Head>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 " style={{ backgroundColor: "#d2deea" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-3 mt-30">Customer center</h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    The customer center segment of Shadobooks is where you can
                    import all your client-facing data under one roof.<br></br>
                    <br></br>
                    Be it your partners from past projects or potential leads,
                    you can integrate all their data here for a single panel
                    source of view that will help in data decluttering.<br></br>
                    <br></br>
                    You can update all their contact information, communication
                    pathways and all the courses of actions you have in mind for
                    the leads down the pipeline here.<br></br>
                    <br></br>
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1"></div>
                    <img
                      className="img-responsive shape-2"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/cs.png"
                      style={{ borderRadius: "30px", maxWidth: "100%" }}
                    />

                    {/* <img src="/assets/imgs/page/about/1/banner2.png" alt="Agon" /> */}
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

export default Customercenter;

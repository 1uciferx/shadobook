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
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Purchase() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 " style={{backgroundColor:"#fdf1d4"}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-3 mt-30">Purchase</h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    The purchase section of the CRM enables complete operation
                    assistance when it comes to the end-to-end requirements of
                    your procurement cycle. From creating a purchase requisition
                    document to the final payment, you can automate your process
                    flow completely. <br></br>
                    <br></br>
                    The platform also offers options for thorough inventory
                    management, developing electronic purchase orders and
                    monitoring the flow of goods in real-time. Shadobooks also
                    presents extensive features for vendor management,
                    quotations, contracts and extensive report generation that
                    will help you with better spending strategies.
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1"></div>
                    <img
                      className="img-responsive shape-1"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/purchase.jpg "
                      style={{ borderRadius: "30px", height: "550px",maxWidth:"110%" }}
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

export default Purchase;

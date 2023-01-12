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

function Accountplanning() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-4 bg-6">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-4 mt-30">Account Planning</h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Leverage the account planning section of the CRM to drive
                    your business towards informed decision-making when it comes
                    to cost management and planning revenues. This section has
                    an abundance of options along with pre-build questionnaires
                    that will help you understand your customers better<br></br>
                    <br></br>
                    The interface can help you manage all your account planning
                    information including the core values of the business, sales
                    channels, marketing activities, overall background and
                    business history along with separate columns for financial
                    data incorporation. All of these will help you with a
                    customer-centric approach and engage with your customers
                    through a data-driven strategy.{" "}
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    {/* <div className="block-1 shape-1"></div><img className="img-responsive shape-1" alt="Agon" src="assets/imgs/page/about/1/banner shadobook.jpg" /> */}

                    <img
                      className="img-responsive shape-1"
                      src="/assets/imgs/page/about/1/banner2.png"
                      alt="Agon"
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

export default Accountplanning;

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
import Head from "next/head";

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function About1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 bg-about-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <span className="tag-1 color-orange-900">
                    What We Do, What You Get
                  </span>
                  <h1 className="text-display-3 mt-30">
                    Sales and Marketing work better together
                  </h1>
                  <p
                    className={
                      "text-body-lead-large color-gray-500 mt-40 pr-40"
                    }
                  >
                    Shado Book CRM helps your marketing teams efficiently run
                    campaigns and pass on quality leads to Sales. Get the best
                    ROI from every campaign you create using ShadoBooks CRM's
                    marketing automation tools.
                  </p>
                  <div className="mt-40">
                    <Link href="/page-service-1">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Join Our Team
                      </a>
                    </Link>

                    <Link href="/page-contact">
                      <a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1">
                      <img
                        src="/assets/imgs/page/about/1/banner2.png"
                        alt="Agon"
                      />
                    </div>
                    <img
                      className="img-responsive shape-2"
                      alt="Agon"
                      src="assets/imgs/page/about/1/banner1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20">
                  <span className="tag-1">Customer Segmentation</span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-60">
                  Divide and conquer with
                  <br className="d-lg-block d-none" />
                  targeted marketing
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  Every customer has different needs, so you'll need a unique
                  approach when selling. ShadoBooks CRM lets you segment
                  customers based on their region, requirements, lead source,
                  and even their level of responsiveness towards you. With
                  segmentation, you can send campaigns that are tailor-made to
                  fit your audience and assign sales reps with the right
                  specializations for the job.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>

          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="box-image">
                  <a
                    className="popup-youtube btn-play-video btn-play-middle"
                    onClick={() => setOpen(true)}
                  ></a>
                  <img
                    className="img-responsive bdrd-16"
                    src="assets/imgs/page/about/1/img-1.png"
                    alt="ShadoBooks"
                  />
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </section>

        <section className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20">
                  <span className="tag-1">Lead Nurturing</span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-60">
                  Everything you need to
                  <br className="d-lg-block d-none" />
                  convert leads to deals
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  Your leads are almost never ready to buy immediately—it’s up
                  to a sales rep to build a lead’s interest so that they can
                  make a purchase. You have to stick with your lead at every
                  stage of their journey and provide the right information to
                  nurture them towards making an informed decision. ShadoBooks
                  CRM makes sure you stay up-to-date with every lead
                  interaction, and automates your sales process so you can build
                  lasting relationships.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <section className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20">
                  <span className="tag-1">Webforms</span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-60">
                  Capture customer information
                  <br className="d-lg-block d-none" />
                  from website promotions
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  Build web-to-lead forms for your landing pages using a simple
                  drag-and-drop interface. Capture information about your
                  visitors and push the information directly into ShadoBooks CRM
                  without writing a single line of code.{" "}
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <section className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20">
                  <span className="tag-1">Marketing Attribution</span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-60">
                  Measure the real ROI
                  <br className="d-lg-block d-none" />
                  of your campaigns
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  As a business, you run different campaigns for your prospects
                  at different points in their journey. When you invest a lot of
                  time, money, and effort in these campaigns, it's important to
                  know what works and what doesn't work with your prospects.
                  ShadoBooks CRM's marketing attribution helps you measure ROI
                  and understand which campaigns are most effective in pushing
                  prospects towards making purchasing decisions.{" "}
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>
      </Layout>
    </>
  );
}

export default About1;

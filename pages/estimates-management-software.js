/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import Contactmanager from "../components/contactmanager";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import Head from 'next/head';
import { Helmet } from 'react-helmet';

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function EstimateReq() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Enhance Estimates Process with Our Estimates Management Software</title>
        <meta name="description" content="Our Estimates Management Software automates the entire process, saving you time & resources, while providing accurate and professional-looking estimates that will impress your clients." />
        <meta name="keywords" content="Estimates management software"/>
        <meta http-equiv="refresh" content="0; url=https://shadobooks.com/estimates-management-software" />

      </Head>

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
      </Helmet>

      {/* facebook and twitter meta graphs ends here */}

      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 bg-about-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="text-display-3 mt-90">Estimates Request</h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    The estimate request function in Shadobooks CRM allows you
                    to develop forms that your customers can use to get a
                    pricing estimate for services or items from your business.
                    The estimates request feature allows you to add several
                    types of fields that may be adapted to your company's needs.
                  </p>
                  <div className="mt-40">
                    {/* <Link href="/page-service-1"><a className="btn btn-black shape-square icon-arrow-right-white">SIGNUP NOW
                                        </a></Link> */}

                    <Link href="/page-contact">
                      <a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">
                        Get Started
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="banner-imgs">
                    {/* <div className="block-1 shape-1"><img src="/assets/imgs/page/about/1/banner2.png" alt="Agon" />
                                        </div> */}
                    <img
                      className="img-responsive shape-2"
                      style={{ borderRadius: "30px", height: "70vh" }}
                      alt="Estimates management software"
                      src="assets/imgs/page/about/1/banner9.jpg"
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
              <div className="col-lg-10 col-sm-10 col-12 text-start">
                <h2 className="text-heading-3 text-center color-gray-900 mb-60">
                  Create estimate request form
                </h2>

                <p className="text-body-text  color-gray-600 mt-20">
                  ➟ The first step is to create an estimate request form; you
                  may create an unlimited number of estimate request forms in
                  Shadobooks CRM.
                  <br />
                  <br />➟ To do so, navigate to Setup ⇢ Estimate requestForms ⇢
                  New form. Fill out the form with your information and save it.
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
                  <img
                    className="img-responsive bdrd-16"
                    src="/assets/imgs/page/homepage1/qq1.png"
                    alt="Estimates management software"
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
                <h2 className="text-heading-3 color-gray-900 mb-60">
                  Set status to form
                </h2>

                <p className="text-body-text color-gray-600 mt-20">
                  After successfully entering the Shadobooks CRM database, the
                  estimate request must be in status. To change a form's state,
                  navigate to Setup-Estimate request ⇢ Statuses ⇢ New status.
                  Save the status by entering its name and colour.
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
              <div className="col-lg-10 col-sm-10 col-12 text-start">
                <h2 className="text-heading-3 text-center color-gray-900 mb-60">
                  Estimate request Report
                </h2>

                <p className="text-body-text color-gray-600 mt-20">
                  ➟ Estimate request reports are used to track estimate forms
                  and provide an overview of all estimate’s forms created in a
                  specific time period.
                  <br />
                  <br />
                  ➟ The way to get the overall Estimate request reports by, go
                  to Addon management-Estimate request.
                  <br />
                  <br />➟ On the estimate request page, you may find a list of
                  forms.
                  <br />
                  <br />➟  It offers an array of reports related to project progress, contracts, budgets, variances, forecasting, and <span><a href="/expense-management-system"> expenses. </a></span>
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="box-image">
                <img
                  className="img-responsive bdrd-16"
                  src="/assets/imgs/page/homepage1/qq2.png"
                  alt="Estimates management software"
                />
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>

        <div className={styles.modslider}>
          <div className="mt-50">
            <Indexslider />
            <div className="text-center">
              <Link href="/our-product">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    padding: "10px",
                    marginTop: "-15px",
                    marginBottom: "30px",
                  }}
                >
                  Show More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Contactmanager />
        </div>
      </Layout>
    </>
  );
}

export default EstimateReq;

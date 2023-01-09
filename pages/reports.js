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

function Reports() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div
            className="banner-hero banner-1 bg-5"
            style={{ backgroundColor: "#ffded3" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">Reports</h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    Shadobook CRM helps you with a thorough platform which
                    enables you to generate extensive reports according to your
                    requirements. The interface offers detailed report
                    generation pertaining to the areas of sales, invoices,
                    items, payments, credit notes, proposals, estimates, and HR
                    payroll reports.<br></br>
                    <br></br>
                    There are also charts that are generated with the data
                    inputs for aiding better visualization of all your crucial
                    metrics like income, revenues, payment and customer-related
                    analysis. All this detailed record keeping will help you
                    with simpler organization and in deriving insightful
                    understanding that can help you drive towards better
                    business goals.
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

export default Reports;

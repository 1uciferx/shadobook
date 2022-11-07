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

function HrPayroll() {
  
  return (
    <>
      <Layout>
       

        <section className="section-box">
          <div
            className="banner-hero banner-4"
            style={{ backgroundColor: "#ffded3" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                  HR Payroll

                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Shadobooks CRM offers hassle-free and seamless employee management with an easy-to-use HR Payroll interface. Be it your employee management, processing payrolls, calculating deductions, commissions or bonuses, the platform offers all of these operations under one roof.<br></br><br></br>
Keep a track of all your payslips, onboarding documents, income tax filing and all other report management. The portal offers convenience on the go and gives HR access to any employee data from anywhere and at any time. With features like up-to-the-minute attendance and leave management, you can keep a tab on the end-to-end employee data without missing out.

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

export default HrPayroll;

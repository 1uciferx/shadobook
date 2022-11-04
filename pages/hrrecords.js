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
            style={{ backgroundColor: "rgb(211 255 252 / 46%)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                    Hr Records
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                    Manage all your human resources and other related documents in a centralized database with the HR Records section of the Shadobooks CRM. The interface offers options for data management with respect to payrolls, onboarding processes, employee management, training modules, etc.<br></br><br></br>

                    The interface is designed to offer statistical charts of the staff ratio by departments, age groups or job profile. In addition to employee management, they’ll also help you understand your resources better.<br></br><br></br>
                    There are options for keeping track of HR records, birthdays, contracts, layoff checklists, organization charts and overall HR reports. All of these help in coordinating your HR efforts in a more orderly fashion.
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

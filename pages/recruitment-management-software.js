/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import styles from "../styles/Index.module.css";
import Newslider from "../components/newslider";
import Contactmanager from "../components/contactmanager";
import TestimonialSlider from "../components/slider/Testimonial";
import Head from "next/head";

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Home() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  return (
    <>
      <Head>
        <title>Recruitment Management Software | Shadobooks</title>
        <meta name="description" content="Our recruitment management software makes it easy to discover the most qualified candidates." />
        <meta name="keywords" content="Recruitment management software"/>
        {/* <meta http-equiv="refresh" content="0; url=https://shadobooks.com/recruitment-management-software" /> */}

      </Head>

      <Layout> 
        <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url('assets/background16.jpg')",
              objectFit: "fill",
            }}
          >
            <div className="container">
              <div className="row">
                <h1
                  style={{ textAlign: "center", color: "white" }}
                  className="text-display-2"
                >
                  Recruitment Management Software
                </h1>
                <p
                  style={{ textAlign: "center", color: "white" }}
                  className="text-body-lead-large color-gray-500 mt-40 pr-0"
                >
                  ShadobooksERP Hiring features helps businesses to streamline
                  their recruitment process, providing them with the tools to
                  manage and track candidates, schedule interviews, and make
                  hiring decisions more efficiently. The hiring module can
                  include features such as job postings, applicant tracking, and
                  candidate management.
                </p>
              </div>
              <div className="col-lg-5 d-none d-xl-block"></div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container mt-100">
            <div className="bg-5 bdrd-38  pb-0">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                  <h2 className="text-heading-1 color-gray-900">Dashboard</h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div
                    style={{ textAlign: "justify" }}
                    className="box-optimized"
                  >
                    <p>
                      ➟ ShadobooksERP offer HR management tools for tracking
                      employee information, including hiring and onboarding
                      processes.
                    </p>

                    <br></br>

                    <p>
                      ➟ With ShadobooksERP, you have the ability to oversee job
                      listings, recruitment, candidate selection, interview
                      sessions, and assess the performance of new hires.
                    </p>
                    <br></br>
                    <p>
                      ➟ The hiring dashboard can help streamline and simplify
                      the recruitment process, making it easier to find and hire
                      the best candidates.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-80">
                  <img
                    className="img-responsive mt-0"
                    src="/hiring/pic1.png"
                    alt="Recruitment management software"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-120">
            <div className="bg-2   pb-30">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                  <h2 className="text-heading-1 color-gray-900">Campaign</h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>

              <div className="container">
                <div className="bg-2 ">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div
                        style={{ textAlign: "justify" }}
                        className="box-optimized "
                      >
                        <p>
                          ➟ Quick and easy overview of the recruitment campaign,
                          including the campaign's name, the position, the type
                          of employment, the department, the number of
                          positions, and the current status of the campaign.
                        </p>
                        <br></br>
                        <p>
                          ➟ Help to identify the campaign, the position, the
                          recruitment process and the current status of the
                          recruitment campaign.
                        </p>
                        <br></br>
                        <p>
                          ➟ Can be used to filter and search for specific
                          campaigns, positions and department
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-0">
                      <img
                        className="img-responsive mt-120 "
                        src="/hiring/pic2.png"
                        alt="Recruitment management software"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-120">
            <div className="bg-4  pb-30">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                  <h2 className="text-heading-1 color-gray-900">
                    Candidate Profile
                  </h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>

              <div className="container">
                <div className="bg-4  mt-0">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div
                        style={{ textAlign: "justify" }}
                        className="box-optimized"
                      >
                        <p>
                          ➟Track and organize candidate information using unique
                          identifier (Candidate code)
                        </p>
                        <br></br>
                        <p>
                          ➟Communicate and schedule interviews using candidate's
                          contact information (name, email, phone number)
                        </p>
                        <br></br>

                        <p>
                          ➟ Understand candidate's stage in hiring process and
                          make decisions (Status)
                        </p>

                        <br></br>

                        <p>➟ Ensure smooth and efficient hiring process</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-50">
                      <div className="box-optimized">
                        <img
                          className="img-responsive"
                          src="/hiring/pic3.png"
                          alt="Recruitment management software"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-120">
            <div className="bg-6 bdrd-58  pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                  <h2 className="text-heading-1 color-gray-900">
                    Interview Schedule
                  </h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>

              <div className="container">
                <div className="bg-6 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div
                        style={{ textAlign: "justify" }}
                        className="box-optimized"
                      >
                        <p>
                          ➟ Specific recruiting campaign or job listing for
                          which the interview is being scheduled (Hiring
                          campaign)
                        </p>
                        <br></br>

                        <p>
                          ➟Job position for which the candidate is being
                          interviewed (Position)
                        </p>
                        <br></br>

                        <p>
                          ➟ The information is used to schedule and organize
                          interviews for candidates and also to track the
                          performance of recruiting campaigns using Shadobook
                          ERP.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-0">
                      <div className="box-optimized">
                        <img
                          className="img-responsive"
                          src="/hiring/pic4.png"
                          alt="Recruitment management software"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-120">
            <div className="bg-9 bdrd-58  pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />

                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30 ">
                  <h2 className="text-heading-1 color-gray-900">
                    Hiring Channels
                  </h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>

              <div className="container">
                <div className="bg-9 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div
                        style={{ textAlign: "justify" }}
                        className="box-optimized"
                      >
                        <p>
                          ➟ Form builder and Form information: Tool for creating
                          and designing forms easily and efficiently.
                        </p>
                        <br></br>
                        <p>
                          ➟ Can create various forms such as surveys,
                          registration forms, contact forms
                        </p>
                        <br></br>
                        <p>
                          ➟ Includes drag-and-drop functionality, templates, and
                          customization options.
                        </p>
                        <br></br>
                        <p>
                          ➟ Allows for easy distribution and data collection
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-70">
                      <img
                        className="img-responsive"
                        src="/hiring/pic5.png"
                        alt="Recruitment management software"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-120">
            <div className="bg-2 bdrd-58  pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                  <h2 className="text-heading-1 color-gray-900">
                    Hiring Portal
                  </h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>

              <div className="container">
                <div className="bg-2 panel-box mt-0">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <p>➟ Search by specific skills</p>
                        <br></br>
                        <p>➟Search by job title</p>
                        <br></br>
                        <p>➟ Search by experience level</p>
                        <br></br>
                        <p>➟ Search by location</p>
                        <br></br>
                        <p>➟ Search by company,etc.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <img
                        className="img-responsive mt-30"
                        src="/hiring/pic6.png"
                        alt="Recruitment management software"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "100px" }} className="container mt-120">
            <div className="bg-10 bdrd-58 pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                  <h2 className="text-heading-1 color-gray-900">Settings</h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>

              <div className="container">
                <div className="bg-10 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <p style={{ textAlign: "justify" }}>
                          ➟ Hiring Slots are periods of time that can be booked
                          for venues in sheepSpaces, supporting multiple venues,
                          restrictions and bespoke pricing.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <img
                        className="img-responsive mt=-100"
                        src="/hiring/pic7.png"
                        alt="Recruitment management software"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.modslider}>
          <div className="mt-50">
            <Newslider />
            <div className="text-center">
              <Link href="/our-product">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    padding: "10px",
                    marginTop: "15px",
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

export default Home;

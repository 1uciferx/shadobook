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

function About3() {
  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <Layout>
        {/* Nav Tabs */}

        <nav
          className={
            scroll
              ? `navbar navbar-expand-lg navbar-light bg-light second-stick `
              : `navbar navbar-expand-lg navbar-light bg-light`
          }
        >
          <ul className="nav nav-pills">
            <li class="nav-item">
              <Link class="navbar-brand" href="#blueprint">
                <a>Blueprint</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link class="navbar-brand" href="#lead">
                Lead scoring
              </Link>
            </li>

            <li class="nav-item">
              <Link class="navbar-brand" href="#Approval-Process">
                <a>Approval Process</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand" href="#Escalation-Rules">
                <a>Escalation Rules</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand" href="#Review-process">
                <a>Review process</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand" href="#Validation-Rules">
                <a>Validation Rules</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand" href="#Email-Parser">
                <a>Email Parser</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand" href="#Multi-page-Layout">
                <a>Multi-page Layout</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* innerheader */}

        <section className="section-box">
          <div
            className="banner-hero banner-4"
            style={{ backgroundColor: "#ffded3" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray-900">
                    Adapt ShadoBooks CRM to your business
                  </h1>
                  <p className="text-body-lead-medium color-gray-900 mt-30 pr-40">
                    A truly customizable solution that can be modified as needed
                    to fit your business. Use custom fields, buttons, and
                    layouts to capture various information from your prospects,
                    create custom views, associate information, test
                    personalization before deployment, and even localize
                    language and currency to suit your users.
                  </p>
                  <div className="mt-40">
                    <Link href="/page-about-1">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Get Start
                      </a>
                    </Link>
                    <Link href="/page-contact">
                      <a className="btn btn-link color-gray-900 text-heading-6 btn-link-inter">
                        Learn More
                      </a>
                    </Link>
                  </div>
                  <div className="mt-60">
                    <div className="row">
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-gray-900 mb-15">
                          5000+
                        </h3>
                        <p className="text-body-normal color-gray-600">
                          Happy Clients
                        </p>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-gray-900 mb-15">
                          756+
                        </h3>
                        <p className="text-body-normal color-gray-600">
                          Project Done
                        </p>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-gray-900 mb-15">
                          100%
                        </h3>
                        <p className="text-body-normal color-gray-600">
                          Client Satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <a
                      className="popup-youtube btn-play-video-2"
                      onClick={() => setOpen(true)}
                    ></a>

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

        {/* content */}

        <div>
          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <div className="text-center mb-20">
                    <span className="tag-1" id="blueprint">
                      Blueprint
                    </span>
                  </div>
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Blueprint Build and implement scalable sales processes for
                    your organization
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Your organization might have several different sales
                    processes in place—like deal closure, lead follow-up, order
                    management, or your discount process. With Blueprints, you
                    can capture every stage of these offline sales processes
                    inside your CRM, and execute them in a systematic manner.
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
          </section>

          <div className="section-box mt-40">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="box-image">
                    <a
                      className="popup-youtube btn-play-video btn-play-middle"
                      onClick={() => setOpen(true)}
                    >
                      {" "}
                    </a>

                    <img
                      className="img-responsive bdrd-16"
                      src="assets/imgs/page/about/3/img.png"
                      alt="Agon"
                    />
                  </div>
                </div>
                <div className="col-lg-1" />
              </div>
            </div>
          </div>

          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <div className="text-center mb-20">
                    <span className="tag-1" id="lead">
                      Lead Scoring
                    </span>
                  </div>
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Separate the buyers from the spyers
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    You generate a lot of leads from various sources—social
                    media, surveys, website visits, walk-ins, and trade shows.
                    But, how many of them are likely to make a sale? ShadoBooks
                    CRM's lead scoring system allows you to separate the buyers
                    from the window shoppers by assigning a score to each of
                    their interactions with your organization. All it takes is a
                    glance at the list of scores to get an idea of your leads'
                    buying intentions.
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
          </section>

          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <div className="text-center mb-20">
                    <span className="tag-1" id="Approval-Process">
                      Approval Process
                    </span>
                  </div>
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Automate submission of records for approval
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    There are several instances in your business where your
                    sales team needs approval from their senior managers—for
                    example, pricing discount requests, contract review
                    requests, capital expense approvals, vacation time
                    approvals, and document approvals. ShadoBooks CRM offers a
                    dedicated approval management system running behind the
                    scenes to standardize approval processes and save time by
                    creating a dependable, repeatable system.{" "}
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
          </section>

          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <div className="text-center mb-20">
                    <span className="tag-1" id="Escalation-Rules">
                      Escalation Rules
                    </span>
                  </div>
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Escalate cases automatically when they meet your criteria
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    If cases aren't being solved quickly, ShadoBooks CRM
                    automatically escalates the overdue cases to the relevant
                    manager or sales rep. You can configure a simple set of
                    rules based on various criteria like priority, case name, or
                    the time at which it was created to govern these actions and
                    manage cases more efficiently.{" "}
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
          </section>

          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <div className="text-center mb-20">
                    <span className="tag-1" id="Review-process">
                      Review process
                    </span>
                  </div>
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Verify and approve data being pushed into your CRM
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    The impact of your sales team depends on the quality of
                    information they get from your CRM. Inaccurate or missing
                    information can hurt a sales rep's chances of closing a
                    deal. ShadoBooks CRM helps your organization define a review
                    process where a user or team of your choice can vet incoming
                    information before approving or rejecting it. They can add
                    comments as well as state reasons for rejection to ensure
                    your sales team has access to information of the highest
                    quality.{" "}
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
          </section>

          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <div className="text-center mb-20">
                    <span className="tag-1" id="Validation-Rules">
                      Validation Rules
                    </span>
                  </div>
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Prevent inaccurate data from entering your CRM
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Sales data is the lifeblood of any CRM system and incomplete
                    and inaccurate data is a common problem in most
                    organizations. Validation rules ensure that the data entered
                    by your sales reps meets the standards you specify—for
                    example, you can make sure that every lead entered into your
                    CRM has a mobile number before the sales rep can save the
                    record.{" "}
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
          </section>

          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <div className="text-center mb-20">
                    <span className="tag-1" id="Email-Parser">
                      Email Parser
                    </span>
                  </div>
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Extract information from incoming emails automatically
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Simplify the process of lead generation by fetching lead
                    data directly from incoming sales enquiry emails.{" "}
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
          </section>
          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <div className="text-center mb-20">
                    <span className="tag-1" id="Multi-page-Layout">
                      Multi-page Layout
                    </span>
                  </div>
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Manage multiple sales processes within your CRM
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    ShadoBooks CRM allows you to run a separate sales process
                    with its own fields, records, views, workflows, reports, and
                    dashboards. This way, multiple departments in your
                    organization can make use of the software without the need
                    for multiple CRM accounts.{" "}
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default About3;

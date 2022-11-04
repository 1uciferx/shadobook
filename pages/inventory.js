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

function Process() {
  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
  return (
    <>
      <Layout>
        {/* Nav Tabs */}

        {/* <nav className={scroll ? `navbar navbar-expand-lg navbar-light bg-light second-stick ` : `navbar navbar-expand-lg navbar-light bg-light`}>
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
        </nav> */}

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
                  Inventory
                  </h1>
                  <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                  Be it managing your orders, tracking your stock, keeping a tab on your warehouse operations, handling GST billing, and fulfilling orders on the go, Shadobooks helps you with comprehensive inventory management on the go. Stay informed about all your commodities and the numbers available, along with even their expiration dates, taxing, SKU codes, warehouse availability and order management. There’s also a wide scope of integrations with all your operational software tools to make it easy for you to manage all your operations under one roof. <br></br><br></br>
With options to calculate loss and adjustments, check the inventory history and report generation with all necessary metrics, you can improve your overall inventory management efficiency through Shadobooks.

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

        {/* content */}

        {/* <div>
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
        </div> */}

        {/* <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Providing solutions of every kind</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">In a professional context it often happens that private or<br className="d-lg-block d-none" />corporate clients order a publication to publish news.</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">1. Acquisition</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">2. Activation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">3. Retention</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-100 pb-100 mt-100 bg-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-30"><span className="tag-1 color-gray-900">Built Exclusively For You</span>
                                <h3 className="text-heading-1 mt-30">Don’t take our word for it. See what our clients say.</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                                <div className="mt-40">
                                    <Link href="/page-service-2"><a className="btn btn-default btn-white icon-arrow-right">Learn More</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"No matter where you go, It's is the coolest, most happening thing around! Not able to tell you how happy I am with it. "</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. We can't understand how we've been living without it. I couldn't have asked for more than this."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-2.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Wade Warren</h4>
                                                <p className="text-body-text-md">Krusty Krab</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business. Needless to say we are extremely satisfied with the results. "</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-3.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Leslie Alexander</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"It's is both attractive and highly adaptable. It's exactly what I've been looking for. Definitely worth the investment."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-4.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jenny Wilson</h4>
                                                <p className="text-body-text-md">Soylent Corp</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do"><img className="bdrd-16 img-responsive" src="assets/imgs/page/about/3/img-2.png" alt="Agon" /></div>
                            <div className="col-lg-6 col-sm-12 block-we-do"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-30">An Exceptionally unique experience Tailored to you</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">In a professional context it often happens that private or corporate clients order a publication news while still not being ready. Business advisory service advises current and future businesses prospects of a client</p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Boost your sale</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Smart Installation Tools</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Introducing New Features</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Dynamic Boosting</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="bd-bottom pb-70">
                            <ul className="list-5-col">
                                <li><span className="text-display-3 color-green-900">+<span className="count">6</span>k</span>
                                    <p className="text-body-text color-gray-500 pl-40">Years in<br />Business</p>
                                </li>
                                <li><span className="text-display-3 color-green-900">+<span className="count">12</span>k</span>
                                    <p className="text-body-text color-gray-500 pl-40">Projects<br />Done</p>
                                </li>
                                <li><span className="text-display-3 color-green-900">+<span className="count">14</span>k</span>
                                    <p className="text-body-text color-gray-500 pl-40">Countries<br />/ Offices</p>
                                </li>
                                <li><span className="text-display-3 color-green-900">+<span className="count">16</span>k</span>
                                    <p className="text-body-text color-gray-500 pl-40">Constant<br />Clients</p>
                                </li>
                                <li><span className="text-display-3 color-green-900">+<span className="count">27</span>k</span>
                                    <p className="text-body-text color-gray-500 pl-40">Paid Customers</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section-box mt-90 mb-mobile mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Building the<br className="d-lg-block d-none" />Work Ecosystem</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">From year to year we strive to invent the most innovative<br className="d-lg-block d-none" />technology that is used by both small and big enterprises</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-90 mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Cross-Platform</h4>
                                    <p className="text-body-text-md color-gray-600">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                    <div className="box-image-inner bg-color-1"><img src="/assets/imgs/page/homepage2/temp-1.png" alt="Agon" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-6 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Extremely Flexible</h4>
                                    <p className="text-body-text-md color-gray-600">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                    <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/homepage2/temp-2.png" alt="Agon" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">From Our Blog</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-2"><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="/blog-single"><a className="text-heading-4">We can blend colors multiple ways, the most common</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="/blog-single"><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="/blog-single"><a className="text-heading-4">Design Studios That Everyone Should Know About?</a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Agon" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="7e90gBu4pas"
                    onClose={() => setOpen(false)}
                /> */}
      </Layout>
    </>
  );
}

export default Process;

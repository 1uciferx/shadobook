/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import Sliderforprojects from "../components/Sliderforprojects";
import styles from "../styles/Projet.module.css";
import Indexslider from "../components/indexslider";
import Contactmanager from "../components/contactmanager";
import Layout from "../components/layout/Layout";
import Checkmeslider from "../components/slider/Checkmeslider";
import Head from "next/head";

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Project() {
  return (
    <>
      <Head>
        <title>Online Project Management Software | Shadobooks ERP</title>
        <meta name="description" content="Shadobooks ERP Projects is a cloud-based project management software that helps teams to organize, monitor progress and achieve project goals." />
      </Head>

      <Layout>
        <div className="page-homepage7-bg"></div>
        <div className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{ background: "url(/assets/imgs/page/homepage1/ee12.jpg)" }}
          >
            <div className="container mt-40">
              <div className="row">
                <div className="col-lg-6 mt-30">
                  <h1 className="text-display-4 color-white">Projects</h1>
                  <div className="list-social-banner">
                    <Link href="https://www.facebook.com/shadobookscrm">
                      <a className="social-banner facebook hover-up"></a>
                    </Link>

                    <Link href="https://www.instagram.com/shadobooks_crm/">
                      <a className="social-banner instagram hover-up"></a>
                    </Link>

                    <Link href="https://twitter.com/shado_books">
                      <a className="social-banner twitter hover-up"></a>
                    </Link>

                    <Link href="https://www.linkedin.com/company/shadobooks/">
                      <a className="social-banner linkedin hover-up"></a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 offset-xl-1 mt-30">
                  <p className="text-body-lead-large color-white">
                    A project in Shadobooks ERP is a temporary endeavor with a
                    defined beginning and end, aimed at achieving specific goals
                    and objectives within constraints such as time, budget, and
                    resources.
                  </p>
                  <div className="mt-40">
                    {/* <Link href="#">
                      <a className="btn btn-black shape-square ">
                        How it works
                      </a>
                    </Link> */}

                    {/* <Link href="#">
                      <a className="btn btn-link icon-triangle color-gray-900 ml-40">
                        How it works
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-heading-2 color-gray-900 mb-20">
                    What is Projects ?
                  </h1>
                  <div className="breadcrumbs">
                    <ul className="text-body-text">
                      <li>
                        <span className="color-gray-500">
                          A project in Shadobooks CRM is a collection of tasks
                          that must be completed in order to reach a specific
                          goal. Projects can be simple or complex, and they can
                          be managed by one or a hundred people. An executive or
                          manager will frequently outline and assign projects.
                          Some teams divide a project into individual jobs to
                          manage accountability and leverage team capabilities.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-box mt-100">
          <div className="container mt-10">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <div className="product-image">
                    <img src="assets/imgs/page/homepage1/rrr1.png" alt="Project Management software"/>
                  </div>

                  <div className="product-info">
                    <h3 className="text-heading-5 text-center color-gray-900">
                      How to Create a Project ?
                    </h3>

                    <div className="d-flex mt-20">
                      <p className="text-body-text color-gray-600 mt-5">
                        Click the new project button in the project module. Fill
                        out the project form with the necessary information and
                        save it. The project home page displays the newly
                        created project. The status of the project can be viewed
                        on the project main page. The project can be assigned to
                        sales, purchases, task generation, and so on.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box mt-100">
          <div className="container mt-10">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <div className="product-image">
                    <img src="assets/imgs/page/homepage1/rrr2.png" alt="Project Management software"/>
                  </div>

                  <div className="product-info">
                    <h3 className="text-heading-5 text-center color-gray-900">
                      Project Summary & Overview
                    </h3>

                    <div className="d-flex mt-20">
                      <p className="text-body-text color-gray-600 mt-5">
                        A project summary provides a brief, comprehensive
                        overview of the complete project and its important
                        details. It often includes a project's status, total
                        rate, deadline, and analysis. A project overview is a
                        project outline that describes key elements about the
                        project. A project overview contains general information
                        such as the project name, customer information, and
                        sponsors. Projects can receive notifications from<span><a href="/webhook"> Web hooks</a></span>, which are automated messages triggered by specific events or updates. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.mmc}>
          <section className="section-box">
            <div className="container mt-10">
              <div className="row">
                <div className="col-lg-9 col-sm-8">
                  <p className="text-heading-4 ">Our modules on Purchase</p>
                </div>
              </div>
            </div>
            <div className="container mt-80">
              <Sliderforprojects />
            </div>
          </section>
        </div> */}

        {/* code for the mobile screen and ipad views, which is disabled for laptop */}

        <div className={styles.mobie}>
          <div className="section-box pt-100 pb-100 mt-50 bg-6">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 mb-30">
                  <h3 className="text-heading-1 mt-0">
                    Our modules on Purchase
                  </h3>
                </div>

                <div className="col-lg-7">
                  <div
                    className="row"
                    data-masonry='{"percentPosition": true }'
                  >
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          Vendor-items in purchase refers to the items that a
                          vendor has available to be purchased. This includes
                          products, services, and other items that a vendor
                          offers.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/homepage1/vendor.jpg"
                              alt="Project Management software"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mt-20">
                            Vendors
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          Purchase request that enables users to initiate a
                          request for a product or service. It allows users to
                          specify the desired quantity and unit price, and to
                          provide additional details, such as delivery
                          requirements and payment terms.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/homepage1/gg4.jpg"
                              alt="Project Management software"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mt-20">
                            Purchase Request
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          A purchase quotation is a document sent by a seller to
                          a prospective buyer that includes the price and other
                          details of a product or service. It is typically used
                          when a buyer intends to purchase a large quantity of
                          goods or when the buyer needs a customized product or
                          service that requires special pricing.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/homepage1/gg3.jpg"
                              alt="Project Management software"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mt-20">
                            Quotations
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          A purchase order is a document sent from a buyer to a
                          supplier, indicating types, quantities, and agreed
                          prices for products or services the supplier will
                          provide to the buyer.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/homepage1/df1.jpg"
                              alt="Project Management software"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mt-20">
                            Purchase Order
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          The process of returning merchandise purchased for a
                          variety of reasons is known as order returns. This
                          could be because of damaged or defective items,
                          incorrect items, incorrect sizes, or simply because
                          the customer is dissatisfied with the purchase.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/homepage1/df2.jpg"
                              alt="Project Management software"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mt-20">
                            Order Returns
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          Contracts in purchase are legally binding agreements
                          that outline the terms and conditions of a purchase
                          transaction between two or more parties. Contracts can
                          also outline warranties and other requirements for the
                          transaction.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/homepage1/df3.jpg"
                              alt="Project Management software"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mt-20">
                            Purchase Contract
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          A debit note is a document sent by a seller to a buyer
                          notifying them of a debit in the buyer's account. This
                          debit could be due to a variety of reasons, such as an
                          invoice dispute, a return of goods, or a price
                          adjustment.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/homepage1/gg1.jpg"
                              alt="Project Management software"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mt-20">
                            Debit Notes
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          An invoice in purchase is a document issued by a
                          seller to a buyer that serves as proof of purchase. It
                          usually contains the seller's and buyer's contact
                          information, the items purchased, the quantity of
                          items purchased, the unit price of each item.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/homepage1/gg2.jpg"
                              alt="Project Management software"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mt-20">
                            Purchase Invoices
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end of the mobile screen */}

        <div className="container">
          <div className="tab-content">
            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Milestones</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In a project management system, a milestone is a
                      reference point that is used to monitor the project
                      management process.
                      <br />
                      <br />
                      ➟ Another important aspect of project milestones is task
                      association and project planning, which will aid in
                      project success.
                      <br />
                      <br />➟ The start and finish dates of a milestone are
                      determined by the task's start and end dates.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-70 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/milestone.png"
                      alt="Project Management software"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-50 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/report1.png"
                      alt="Project Management software"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Reports</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Shadobooks CRM project report is available in the
                      balance sheet. It is a financial report that summarizes a
                      company's assets, liabilities, and shareholders' equity
                      for a specific time period.
                      <br />
                      <br />➟ A balance sheet shows what the business owes and
                      possesses during a specific time period. This is necessary
                      since the balance sheet report represents the
                      organization's financial situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hey */}

        <div className="container">
          <div className="tab-content">
            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Tasks</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Some common synonyms of task are assignment, chore,
                      duty, job, and stint.
                      <br />
                      <br /> ➟  While all these words mean "a piece of work to be done,"<span><a href="/task-management-software"> task</a></span> implies work imposed by a person in authority or an employer or by circumstance. 
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-10 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/q11.jpg"
                      alt="Project Management software"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-5 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/aa2.jpg"
                      alt="Project Management software"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Payment Voucher</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In accounting, a payment voucher records all company
                      transactions involving payments.
                      <br />
                      <br />➟ This voucher type includes any payment made by the
                      company via cash, check, internet payment, or any other
                      method.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Receipt Voucher</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ A receipt voucher is a handwritten receipt for goods or
                      services sold.
                      <br />
                      <br />➟ A standard receipt voucher includes the date,
                      time, amount, and type of product or service sold, as well
                      as the signature of the person selling the product or
                      service.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-5 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/aa1.webp"
                      alt="Project Management software"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-5 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/aa3.jpg"
                      alt="Project Management software"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Journal Entry</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ A journal entry is the act of recording or keeping track
                      of any economic or non-economic transaction.
                      <br />
                      <br />➟ Every financial transaction affects at least two
                      accounts; one is debited, while the other is credited.
                      This signifies that a journal entry has the same amount of
                      debit and credit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Timesheets</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Project timesheets in Shadobooks CRM are all initiated
                      timers for specific project tasks.
                      <br />
                      <br />
                      ➟ The Time Sheets module allows users to track the amount
                      of time they spent working on a given project, customer,
                      or contract, as well as a description of the activity.
                      <br />
                      <br />➟ All timers that are running or stopped can be seen
                      and sorted, and all timesheets are associated with a staff
                      member and a task.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-5 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/timesheets.jpg"
                      alt="Project Management software"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-5 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/notes.jpg"
                      alt="Project Management software"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Notes</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Notes are a wonderful approach to summarize your
                      observations and outcomes from customer. The project
                      representative will always be able to track how a project
                      is progressing.
                      <br />
                      <br />➟ Shadobooks CRM allows you to make notes on leads,
                      contacts, accounts, and deals, as well as sales activities
                      including tasks, meetings, and calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Activity</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Project activity is a tool that allows you to track the
                      progress of your project.
                      <br />
                      <br />
                      ➟ It is possible to prevent project activity from being
                      visible to customers. To do this, you can simply click the
                      OFF button on the right side of the activity.
                      <br />
                      <br />➟ The project activity operates smartly and
                      automatically turns on/off the visible to the customer.
                      This logic is also applied to tasks, files, and
                      timesheets.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-70 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/milestone.png"
                      alt="Project Management software"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-5 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/report1.png"
                      alt="Project Management software"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Files</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Project files are a separate area for each project where
                      files/documents relating to the project can be uploaded.
                      <br />
                      <br />➟ When you launch a project from the top tabs, you
                      will see a Files tab. Click on the files tab to easily
                      drag and drop the file you need to upload for the project.
                      The module responsible for storing uploaded files is the<span><a href="/erp-document-management"> file manager. </a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Discussions</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Projects discussion in CRM allows you to initiate
                      multiple conversations with your customer or project
                      member about a given project.
                      <br />
                      <br />➟ To start a new project discussion, open the
                      project, navigate to the discussions tab, and then click
                      the create discussion button. This email will be sent to
                      all client contacts who have project approval.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-40 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/milestone.png"
                      alt="Project Management software"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-5 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/report1.png"
                      alt="Project Management software"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Gantt</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ A Gantt chart is a project management tool that depicts
                      work performed over time in relation to the time allocated
                      to the activity.
                      <br />
                      <br />➟ A Gantt chart can include the task start and
                      finish dates, milestones, task dependencies, assignees,
                      and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Tickets</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Shadobooks CRM enables you to communicate with clients
                      in order to meet their needs via ticket, live chat, or
                      email.
                      <br />
                      <br />
                      ➟ Your team can also manage all project support tickets to
                      effectively handle any issues that emerge.
                      <br />
                      <br />➟ Customers who contact assistance via email receive
                      automatic notifications, informing them of the progress of
                      their ticket.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-70 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/milestone.png"
                      alt="Project Management software"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="block-video mt-30 ">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/homepage1/report1.png"
                      alt="Project Management software"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Contracts</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ Contracts in purchase are legally binding agreements
                      that outline the terms and conditions of a purchase
                      transaction between two or more parties.
                      <br />
                      <br />➟ These agreements typically include the price,
                      quantity, delivery dates, payment terms, and other details
                      about the purchase. Contracts can also outline warranties
                      and other requirements for the transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section-box mt-40">
          <div className="container text-center">
            <h2 className="text-heading-3 color-gray-900">
              Our modules on Sales
            </h2>
          </div>
        </div> */}

        {/* <div className="section-box">
          <div className="container mt-30">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-sm-12 mb-30">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/homepage6/img-1.png"
                  alt="Agon"
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do mt-20">
                <div className="row mt-20">
                  <div className="col-lg-6 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">Proposals</h4>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">Estimates</h4>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">Invoices</h4>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">Subscriptions</h4>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">Expenses</h4>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">Credit Notes</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.modslider}>
          <div className="mt-50">
            <Indexslider />
            <div className="text-center">
              <Link href="/modules">
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

export default Project;

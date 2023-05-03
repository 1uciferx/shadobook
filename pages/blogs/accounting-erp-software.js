/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "/components/layout/Layout";
import Head from "next/head";
import styles from "/styles/accountingerpsoftware.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});
function Accountingerpsoftware() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title> A Complete Overview on Shadobooks ERP | Shadobooks </title>
        <meta
          name="description"
          content="Get the most comprehensive and detailed insights on the features and functions of Shadobooks accounting ERP software and learn how it can help your organization simplifies its operations and maximize efficiency.Shadobooks ERP is a full-featured accounting ERP software that improves efficiency and simplifies business operations. Find out more about its features and benefits.  "
        />

        {/* facebook and twitter meta graphs starts here */}

        <meta property="og:title" content="Shadobooks ERP" />
        <meta property="og:description" content="Shadobooks erp solutions." />
        <meta
          property="og:image"
          content="/assets/imgs/page/homepage1/sb-logo.png"
        />
        <meta
          property="og:url"
          content="https://www.facebook.com/shadobookscrm"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadobooks ERP" />
        <meta name="twitter:description" content="Shadobooks erp solutions." />
        <meta
          name="twitter:image"
          content="/assets/imgs/page/homepage1/sb-logo.png"
        />
      </Head>

      {/* facebook and twitter meta graphs ends here */}

      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-1 bg-about-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-50">
                  <h1 className="text-display-3 mt-30">
                    What is Shadobooks ERP?
                  </h1>
                  <p className={styles.paraone}>
                    In today's business landscape, having a smarter accounting
                    ERP software is crucial. Shadobooks ERP provides real-time
                    access to information, delivering innovation, cost savings,
                    and improved business processes to companies. Our
                    cutting-edge ERP platform has empowered businesses with the
                    latest technology, enabling them to stay ahead of the
                    competition.{" "}
                  </p>

                  <div className="mt-40">
                    <Link href="/request-a-demo">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block mt-100">
                  <div className="banner-imgs">
                    <div className={styles.imgone}>
                    {/* <div className="block-1 shape-1">
                      <img
                        src="/assets/imgs/page/about/1/banner2.png"
                        alt="shadobooks"
                      />
                    </div> */}
                    </div>
                    <img
                      className="img-responsive shape-2"
                      alt="shadobooks"
                      src="/assets/imgs/page/about/1/banner2.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="bd-bottom pb-20 mb-40 text-mb-center">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={6} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40t">Years in Business</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={14} time={3}/>k</span>
                                            <p className="text-body-text color-gray-500 pl-40">Projects Done</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={26} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40">Countries / Offices</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={24} time={3}/>k</span>
                                            <p className="text-body-text color-gray-500 pl-40">Constant Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div> */}
        <section className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  Why Shadobooks is the Best Accounting ERP Software
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  Shadobooks is the best and intuitive user-friendly, efficient
                  accounting ERP software for businesses. It offers a
                  comprehensive suite of features that help businesses better
                  manage their finances, including invoicing, accounts payable,
                  accounts receivable, payroll, inventory management, and more.
                  Because it's simple to use and navigate, this software is a
                  fantastic option for companies of all sizes. Additionally, it
                  is cloud-based which enables businesses to access their data
                  from anywhere, anytime, and with any device.
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
                    src="/assets/imgs/page/about/1/img-1.png"
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
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  Industries We Are Serving For
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  Shadobooks ERP provides a comprehensive set of features and
                  tools to manage different aspects of a company's operations,
                  such as inventory management, accounting, sales and purchase
                  order management, production planning and customer
                  relationship management.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <section className="section-box mt-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  What Benefits We Can Add to Our Customers
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  Shadobooks ERP offers a range of benefits including efficient
                  workflow management, real-time data access, seamless
                  integration, comprehensive reporting, and advanced features
                  for financial and operational control, making it a powerful
                  solution for businesses seeking a reliable ERP software.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className={styles.make2center}>
            <div className="single-detail mt-0">
              <p />

              <h1 className="text-heading-4">Efficient workflow management</h1>

              <p>
                Provides a robust system for managing business workflows,
                ensuring smooth and streamlined processes. This helps improve
                productivity and reduces delays in completing tasks, leading to
                increased operational efficiency.
              </p>
              <p />

              <p />
            
              <div className="row">
                
                <div className="col-lg-6 mt-50">
                <h3 className="text-heading-4">
                Real-time dashboard and business intelligence reports
              </h3>
                  <p>
                    Offers a real-time dashboard that provides quick updates on
                    key business metrics. Additionally, it generates
                    comprehensive business intelligence reports with drill-down
                    capabilities and smart charts, allowing for data analysis
                    and informed decision making.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-responsive bdr-10 mt-10 mb-50"
                    src="/assets/imgs/page/homepage4/bbreport.jpg"
                    alt="shadobooks"
                  />
                </div>
              </div>
              <p />
              <h3 className="text-heading-4">
                Comprehensive and accurate reports, budgeting, and cash flow
                management
              </h3>

              <p>
                Generates comprehensive and accurate reports related to
                financials, inventory, and human capital management. It also
                offers features for budgeting and cash flow management,
                providing better financial control and visibility into business
                operations.
              </p>
              <p />
              <h3 className="text-heading-4">
                Multi-currency transactions, inventory control, and human
                capital management
              </h3>

              <p>
                Our ERP supports multi-currency transactions, enabling
                businesses to transact in different currencies and expand their
                global operations. It also offers inventory control features for
                effective management of stock levels and human capital
                management features for managing employees, their roles, and
                responsibilities within the organization.
              </p>

              <p />
              <h3 className="text-heading-4">
                Industry specific customization
              </h3>

              <p>
                This customization allows companies to integrate their existing
                processes and workflows, creating an efficient and streamlined
                system. Furthermore, the industry specific customization enables
                businesses to take advantage of specialized features and
                functionalities, such as advanced analytics and reporting,
                tailored to their industry. 
              </p>

              <p />
              <h3 className={styles.oneone}>
                Values We Bring to Our Users
              </h3>

              <p>
                The following are some values that accounting ERP software
                offers its users:
              </p>

              <h4 className="text-heading-4">Efficiency</h4>
              <p>
                Businesses may work more productively and efficiently by
                streamlining their operations and automating repetitive
                procedures with our software.
              </p>
              <h4 className="text-heading-4">Customization</h4>
              <p>
                To ensure that each organisation gets the most out of the
                software, we offer customized solutions that can be modified to
                match their unique demands.
              </p>
              <h4 className="text-heading-4">Insight</h4>
              <p>
                The rich reporting and dashboard tools offered by us give firms
                information about their performance and enable them to make
                data-driven decisions.
              </p>
              <h4 className="text-heading-4">User-Friendly</h4>
              <p>
                Users of all technological backgrounds can utilise Shadobooks
                ERP since it is simple to use and navigate.
              </p>
              <h4 className="text-heading-4">Support</h4>
              <p>
                Provides timely support to businesses, ensuring they get the
                assistance they need, when they need it. A dedicated support
                team will available 24/7 to assist with any questions.
              </p>
              </div>
            </div>{" "}
          </div>{" "}
        </div>

        <section className="section-box mt-100  pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-12 col-12 block-gallery-1">
                <div className={styles.imgg2}>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="img-responsive mb-10"
                      src="/assets/imgs/page/about/2/bb31.jpg"
                      alt="shadobooks"
                    />
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/about/2/bb32.jpg"
                      alt="shadobooks"
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/about/2/bb33.jpg"
                      alt="shadobooks"
                    />
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 block-pl">
                <h2 className={styles.parafour}>
                  What Does Shadobooks Accounting ERP Software do for Your
                  Business?
                </h2>
                <p className={styles.paratwo}>
                  In recent years, ERP has undergone significant advancements.
                  Shadobooks Accounting ERP Software, specifically designed for
                  small and medium-sized organizations, offers a streamlined
                  solution for managing various aspects of customer
                  interactions. Below, we will give you an overview of what
                  features you can get from Shadobooks ERP platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  Dashboard
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  Shadobooks ERP's intuitive dashboard provides salespeople and
                  managers with clear and visually appealing graphs, charts, and
                  customized dashboards to monitor crucial sales performance
                  indicators (KPIs). Comprehensive reports and data segmentation
                  help businesses gain insights into sales and marketing
                  activities, optimize conversion rates, and make informed
                  decisions.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="V3UPK06Vw5I"
          onClose={() => setOpen(false)}
        />

        <section className="section-box mt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  General Section
                </h2>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
          
            <div className="single-detail mt-0">
            <div className={styles.paratwo}>
              <p />

              <h1 className="text-heading-4">Excel manager</h1>

              <p>
                Allows businesses to import, export, and update large amounts of
                data through Excel files. It provides various features like data
                validation, error reporting options. With this module,
                businesses can easily manage their data and save time by
                avoiding manual data entry.
              </p>
              <p />

              <p />
              
              <div className="row">
                <div className="col-lg-6 mt-40">
                <h3 className="text-heading-4">Accounting</h3>
                  <p>
                    This module provides numerous benefits, including minimizing
                    manual data entry and reducing human errors. It offers
                    insights into business performance and saves time on
                    financial reporting. Consolidating financial documents in
                    one online system facilitates record-keeping, and automation
                    streamlines processes, ensuring accuracy in reports during
                    tax season.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-responsive bdr-10 mt-10 mb-50"
                    src="/assets/imgs/page/homepage4/bb34.jpg"
                    alt="shadobooks"
                  />
                </div>
                <p />

                <h1 className="text-heading-4">Reports</h1>

                <p>
                  Real-time reporting gives you insight into a variety of
                  metrics such as sales trends, marketing campaigns, activity
                  reports, and team performance. .
                </p>
                <p />

                <h1 className="text-heading-4">Projects</h1>

                <p>
                  With the powerful project planning and costing module,
                  Shadobooks ERP equip them with high visibility on each
                  milestone of the entire project life cycle at any given point
                  of time.
                </p>
                <p />
              </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>

        <section className="section-box mt-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  Purchase Management
                </h2>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="single-detail mt-0">
              <p />
              <div className={styles.paratwo}>

              <h1 className="text-heading-3">Purchase</h1>

              <p>
                The well elaborated purchase modules of Shadobooks ERP provides
                a clear insight to the purchase managers to handle any scenario
                much easier.
              </p>
              <p />

              <p />
              <h3 className="text-heading-4">Inventory</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Shadobooks ERP provides a powerful and flexible set of
                    features to identify and report your inventory status at any
                    point of time. It also aids to identify inventory
                    requirements, to configure and utilize replenishment
                    processes, to monitor inventory utilization, to reconcile
                    the inventory balances, to handle inventory transfers amid
                    warehouses.
                  </p>
                </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>

        <section className="section-box mt-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  Sales Management
                </h2>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="single-detail mt-0">
              <p />
              <div className={styles.paratwo}>

              <h1 className="text-heading-3">Customers</h1>

              <p>
                Create multiple contacts for our customers and set proper
                permissions. Clients have access to an online portal with all
                financial data from our company displayed.
              </p>
              <p />

              <p />
              <h3 className="text-heading-4">Sales</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Whether maintaining the customer information or quickly
                    creating a quote or migrating quotations in to sales order
                    or being responsive to your customers, Shadobooks ERP
                    provides the right solution and efficient flow of
                    information. It also allows emailing of quotes, invoices,
                    orders and SMS to multiple contacts.
                  </p>
                </div>
              </div>

              <h3 className="text-heading-4">Point of Sales</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    POS selling increases your product's exposure and increases
                    your chances of making a sale by meeting potential buyers on
                    their terms.
                  </p>
                </div>
              </div>

              <h3 className="text-heading-4">Sales Agent</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    You can manage your company's sales agents, calculate sales
                    commissions automatically, and track their customers and
                    data using Sales Agent Management.
                  </p>
                </div>
              </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>

        <section className="section-box mt-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  Asset Management
                </h2>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="single-detail mt-0">
              <p />
              <div className={styles.paratwo}>

              <h1 className="text-heading-3">Company assets</h1>

              <p>
                Maintain and manage details of assets, Check-ins and check-outs,
                location, depreciation, audit, maintenance schedule, date of
                asset return, etc...
              </p>
              <p />

              <p />
              <h3 className="text-heading-4">Manufacturing</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    The Product Management feature inherits from items, but adds
                    several additional attributes, including SKU, cost, product
                    type, product category, images, sale price, barcode, product
                    variant, unit of measure, purchase a unit of measure, taxes,
                    vendor taxes, operations, logistics, OEE, lost, load,
                    performance.
                  </p>
                </div>
              </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>

        <section className="section-box mt-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  HR Management
                </h2>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="single-detail mt-0">
              <p />
              <div className={styles.paratwo}>
              <h1 className="text-heading-3">HR Records</h1>

              <p>
                Manage your employees successfully by centralizing all HR
                information. Staff ratio by department, Staff ratio by job,
                Staff ratio by age group, Changes in staff status by seniority,
                Staff status by month, Birthdays of the month, etc.
              </p>
              <p />

              <p />
              <h3 className="text-heading-4">Attendance & Shifts</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    The available specialised modules can be used to handle
                    staff absences, time off requests, and attendance.
                  </p>
                </div>
              </div>

              <p />
              <h3 className="text-heading-4">HR & Payroll</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Provides a user-friendly HR and Payroll interface that
                    enables efficient employee management, payroll processing,
                    deduction, commission calculations, and bonus calculations,
                    all within a single platform without any complications.
                  </p>
                </div>
              </div>

              <p />
              <h3 className="text-heading-4">Hiring</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Shadobooks ERP's Hiring Module automates and manages the
                    hiring and staffing operations of your organization. With
                    the Hiring Module, you can manage your entire recruiting
                    process from posting jobs to keeping candidates engaged
                    throughout.
                  </p>
                </div>
              </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>

        <section className="section-box mt-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  Addon Management
                </h2>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="single-detail mt-0">
              <p />
              <div className={styles.paratwo}>

              <h1 className="text-heading-3">File Manager</h1>

              <p>
                Provides an efficient and effective way to manage files and
                documents within the Shadobooks platform, helping organizations
                to improve collaboration, streamline workflows, and increase
                productivity.
              </p>
              <p />

              <p />
              <h3 className="text-heading-4">Expenses</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    This module provides a centralized platform for recording
                    all types of expenses, including employee reimbursements,
                    vendor bills, and other miscellaneous expenses.
                  </p>
                </div>
              </div>

              <p />
              <h3 className="text-heading-4">Contracts</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Contract Management module of Shadobooks ERP is a complete
                    solution to manage the contracts from inception to
                    completion. It covers all aspects of the processes, and
                    guides the user through a quality process.
                  </p>
                </div>
              </div>

              <p />
              <h3 className="text-heading-4">Tasks</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Enables users to organize and track follow-up activities by
                    creating and managing to-do items. Tasks can be assigned to
                    team members, prioritized with due dates, and monitored for
                    progress with reminders and completion status tracking.
                  </p>
                </div>
              </div>

              <h3 className="text-heading-4">Leads</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Shadobooks offers an easy-to-use CRM interface and
                    facilitates data access from anywhere at any time. Capture
                    leads, automate lead scoring, identify leads that will
                    convert, and follow up with detailed contact information.
                  </p>
                </div>
              </div>

              <h3 className="text-heading-4">Estimate Request</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Allows you to develop forms that your customers can use to
                    get a pricing estimate for services or items from your
                    business.
                  </p>
                </div>
              </div>

              <h3 className="text-heading-4">Knowledge Base</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    Reduce ticket load by creating crisp help articles and FAQs,
                    so that your service team can work on the complex issues
                    that need their attention. It also empowers your customers
                    to find solutions without having to wait for an agent.
                  </p>
                </div>
              </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>

        <section className="section-box mt-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"></div>
                <h2 className={styles.imgg3}>
                  Integrations With Advanced Modules of Shadobooks
                </h2>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  Using Shadobooks ERP, businesses can integrate the entire
                  business process from start to finish. From the initial
                  contact with customers to demos, quotations, follow-ups,
                  onboarding, service delivery, and invoicing, the system can
                  coordinate all departments and teams and track each business
                  interaction. This allows for improved productivity in less
                  time.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="single-detail mt-0">
              <p />
              <div className={styles.paratwo}>
              <h1 className="text-heading-4">Shadobooks POS</h1>

              <p>
                To assist businesses in managing their inventory management and
                point-of-sale operations.
              </p>
              <p />

              <h3 className="text-heading-4">Shadobooks Accounting</h3>

              <div className="row">
                <div className="col-lg-8">
                  <p>
                    Aiding organisations in managing their financial reporting
                    and accounting.
                  </p>
                </div>
              </div>
              <p />
              <h3 className="text-heading-4">Shadobooks HRMS</h3>

              <p>
                To help businesses manage their employee records, payroll, and
                other HR-related processes.
              </p>
              <p />
              <h3 className="text-heading-4">All sales Channels</h3>

              <p>
                Bring together all of your sales outlets, such as online stores,
                customer relationship management systems, and in-store sales
                (Point of Sale).
              </p>
            </div>
            </div></div>
        </div>

        <section className="section-box mt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 ">
                <div className="text-center mb-20"></div>
                <h3 className={styles.imgg3}>
                  We Help You with Industry Specific Shadobooks ERP Demo
                </h3>

                <p className="text-body-lead-large color-gray-600 mt-20">
                  We offer a 90-day free trial for businesses to explore and
                  test out its software solution before committing to a
                  subscription. The trial includes full access to all features,
                  customization options, and integrations, along with
                  comprehensive training and support to ensure businesses get
                  the most out of their experience.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>

        <section className="section-box mt-100 pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-12 col-12 block-gallery-1">
              <div className={styles.imgg2}>
                <div className="row">
                   
                  <div className="col-lg-6">
                    <img
                      className="img-responsive mb-10"
                      src="/assets/imgs/page/about/2/img-2.png"
                      alt="shadobooks"
                    />
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/about/2/img-3.png"
                      alt="shadobooks"
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-responsive"
                      src="/assets/imgs/page/about/2/img-1.png"
                      alt="shadobooks"
                    />
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 block-pl">
                <h3 className={styles.parathree}>Conclusion</h3>
                <p className={styles.paratwo}>
                  Shadobooks ERP is a top-notch customer relationship management
                  solution that caters to the needs of small and medium-sized
                  organizations. It offers a wide range of tools and features at
                  an affordable price point, making it an excellent choice for
                  businesses. With seamless integration capabilities and robust
                  functionality, Shadobooks ERP empowers businesses to gain
                  valuable insights about their customers, making it a preferred
                  ERP option for service-oriented companies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Accountingerpsoftware;

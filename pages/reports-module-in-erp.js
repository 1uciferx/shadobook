/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import styles from "../styles/Index.module.css";
import { Helmet } from 'react-helmet';
import Indexslider from "../components/indexslider";
import OfferSlider from "../components/slider/Offer";
import Contactmanager from "../components/contactmanager";
import TestimonialSlider from "../components/slider/Testimonial";
import Head from 'next/head';


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
        <title>Fully Integrated Reports Module in ERP | Shadobooks ERP  </title>
        <meta name="description" content="The Reports Module in ERP Software provides users with comprehensive insights into their business operations for better decision-making." />
        <meta name="keywords" content="Reports Module in ERP"/>
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
          <div
            className="banner-hero banner-head-image"
            style={{ background: "url('assets/background1.jpg')" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1
                    style={{ color: "white", marginTop: "-35px" }}
                    className="text-display-2"
                  >
                    Fully Integrated Reports Module in ERP
                  </h1>
                  <p
                    style={{ color: "white" }}
                    className="text-body-lead-large color-gray-500 mt-40 pr-40"
                  >
                    Shadobook CRM helps you with a thorough platform which
                    enables you to generate extensive reports according to your
                    requirements. The interface offers detailed report
                    generation pertaining to the areas of sales, invoices,
                    items, payments, credit notes, proposals, estimates.
                  </p>
                  <div className="mt-40">
                    <Link href="/page-contact">
                      <a className="btn btn-black icon-arrow-right-white">
                        Get Start
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-xl-block">
                  <div className="banner-imgs">
                    <img
                      style={{ bottom: "140px" }}
                      className="img"
                      alt="Reports Module in ERP"
                      src="logo1/vector19.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-70"></div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div
                className={
                  activeIndex === 1
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-4 ">Accounting Reports</h3>
                        <p>
                          The following reports are among them:
                          <p>
                            Business overview: gives a broad overview of the
                            company.
                          </p>
                          <br></br>
                          <p>
                            Bookkeeping: This offers reports like Account list,
                            Balance Sheet Comparison, Balance Sheet, General
                            Ledger, and more that are useful for keeping track
                            of financial transactions.
                          </p>
                          <br></br>
                          <p>
                            Budget: Reports like<span><a href="/project-management-software"> Project</a></span> Budget Overview, Budget vs Actual, and Profit and Loss Budget Performance are used to track the amounts that were budgeted versus what was actually spent on various accounts. Sales tax contains reports like the Tax Detail Report, Tax Summary and that assist in keeping track of taxes. 
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <img
                        className="img-responsive mt-165"
                        src="/reportpage/pic3.png"
                        alt="Reports Module in ERP"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive mt-50"
                  src="/reportpage/pic2.png"
                  alt="Reports Module in ERP"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-3 mt-30">Purchase Reports</h3>
                <p>
                  <p>
                    The report includes a table displaying the cost of import
                    goods for each item
                  </p>
                  <br></br>

                  <p>
                    A PO voucher report is included, which provides details on
                    the vouchers associated with purchase orders
                  </p>

                  <p>
                    A Purchase Invoices Report is included, which shows all the
                    invoices issued for purchased goods
                  </p>
                  <br></br>
                  <p>
                    A Debit Note Report is included, which shows any debit notes
                    issued for purchased goods
                  </p>
                  <br></br>
                  <p>
                    A Charts Based Report is included, which provides visual
                    representations of purchase statistics
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div
                className={
                  activeIndex === 1
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-2 panel-box mt-100">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-3">Inventory Reports</h3>
                        <p>
                          <p>
                            The report includes Inventory Analytics, which
                            provides detailed information on the performance of
                            the inventory.
                          </p>
                          <br></br>

                          <p>
                            The report is presented in tabular format, with
                            columns for Order, Commodity Code, Commodity Name,
                            Unit Name, Opening Stock, Import In Period, Export
                            In Period, and Closing Stock. Each column contains
                            data such as quantity and amount.
                          </p>
                          <br></br>
                          <p>
                            The report provides a detailed overview of the
                            inventory levels, movement, and value of various
                            goods and commodities over a specific period of
                            time.
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <img
                        className="img-responsive mt-165"
                        src="/reportpage/pic3.png"
                        alt="Reports Module in ERP"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img mt-10"
                  src="/reportpage/pic4.png"
                  alt="Reports Module in ERP"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-3 mt-30">POS Reports</h3>
                <p>
                  <li>
                    The report includes a Charts Based Report, which provides
                    visual representations of sales statistics.
                  </li>
                  <br></br>
                  <li>
                    The report allows for easy analysis of sales trends,
                    identifying areas of strength and weakness, and making
                    data-driven decisions to improve sales performance.
                  </li>
                  <br></br>
                  <li>
                    The report provides an overall picture of the sales
                    performance of the company or organization, and can be used
                    to make decisions about future sales strategies.
                  </li>
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div
                className={
                  activeIndex === 1
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-3">Reports</h3>
                        <p>
                          The following reports are among them:
                          <li>
                            The report includes a Charts Based Report, which
                            provides visual representations of the data.
                          </li>
                          <br></br>
                          <li>
                            The report allows for easy analysis of activity and
                            unaccepted assets, identifying areas of concern and
                            making data-driven decisions to improve performance.
                          </li>
                          <br></br>
                          <li>
                            The report provides an overall picture of the
                            activity and assets of the organization, and can be
                            used to make decisions about future strategies.
                          </li>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <img
                        className="img-responsive mt-165"
                        src="/reportpage/pic5.png"
                        alt="Reports Module in ERP"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive mt-50"
                  src="/reportpage/picnew2.png"
                  alt="Reports Module in ERP"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-3 mt-30">HR Reports</h3>
                <p>
                  <li>
                    The report, HR Reports, gives a general summary of a
                    company's or organization's human resources data. It also
                    includes information on staff layoffs, which gives specifics
                    on those employees who have been let go.
                  </li>
                  <br></br>
                  <li>
                    The report contains a charts-based report that presents data
                    in a visual manner.
                  </li>
                  <br></br>

                  <li>
                    The ratio of staff changes by seniority, which displays the
                    percentage of staff changes by seniority level, is included
                    in the report.
                  </li>
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div
                className={
                  activeIndex === 1
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-3">Payroll Reports</h3>
                        <p>
                          <li>
                            The report comprises a Payroll report, which offers
                            a summary of a company's or organization's payroll
                            data.
                          </li>
                          <br></br>
                          <li>
                            The report contains a charts-based report that
                            presents data in a visual manner.
                          </li>

                          <li>
                            The Payslip, a record containing information about
                            an employee's pay and deductions, is included in the
                            report.
                          </li>
                          <br></br>

                          <li>
                            The report makes it simple to analyse payroll and
                            income data, pinpoint problem areas, and take data-
                            driven actions to boost performance.
                          </li>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <img
                        className="img-responsive mt-150"
                        src="/reportpage/pic6.png"
                        alt="Reports Module in ERP"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive mt-55"
                  src="/reportpage/pic7.png"
                  alt="Reports Module in ERP"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-3 mt-30">Timesheets Reports</h3>
                <p>
                  Reports on annual leave: tracks and manages an employee's time
                  off
                  <br></br> <br></br>
                  <li>Attendance reports: tracks an employee's attendance</li>
                  <br></br>
                  <li>
                    The report contains a charts-based report that presents data
                    in a visual manner.
                  </li>
                  <li>
                    Leave application reports: tracks and manages an employee's
                    leave requests
                  </li>
                  <br></br>
                  <li>
                    Working hours statistics report: shows the total hours
                    worked
                  </li>
                  <br></br>
                  <li>
                    Leave by department report: shows the breakdown of leaves
                    taken by different departments
                  </li>
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div
                className={
                  activeIndex === 1
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-3">Sales Reports</h3>
                        <p>
                          <li>
                            Invoices Report: tracks and manages invoices sent to
                            customers
                          </li>
                          <br></br>
                          <li>
                            Credit Notes Report: tracks and manages credit notes
                            issued by the company
                          </li>

                          <br></br>
                          <li>
                            Proposals Report: tracks and manages proposals sent
                            to customers
                          </li>

                          <br></br>
                          <li>
                            Charts Based Report: visual representation of data,
                            such as sales progress
                          </li>

                          <br></br>
                          <li>
                          This platform enables<span><a href="/sales-rep-erp-software"> Sales Agents</a></span> and companies to monitor and handle the invoices that have been issued to their clients. 
                          </li>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <img
                        className="img-responsive mt-80"
                        src="/reportpage/pic8.png"
                        alt="Reports Module in ERP"
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
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Home;

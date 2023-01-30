/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
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
      {/* <Link href="/#">
                <a>Link</a></Link>
            </Link> */}
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2">
                    Reports
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Shadobook CRM helps you with a thorough platform which enables you to generate extensive reports according to your requirements. The interface offers detailed report generation pertaining
                    to the areas of sales, invoices, items, payments, credit notes, proposals, estimates,
                  </p>
                  <div className="mt-40">
                    <Link href="/page-service-1"><a className="btn btn-black icon-arrow-right-white">Get Start</a></Link>

                  </div>
                </div>
                <div className="col-lg-5 d-none d-xl-block">
                  <div className="banner-imgs">

                    <img style={{bottom:"140px"}} className="img" alt="Agon" src="logo1/vector18.jpg" />
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
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                <h2 className="text-heading-1 color-gray-900">
                Why choose us<br className="d-lg-block d-none" />
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                Today, businesses require an advanced ERP system. ShadobooksERP provides access to up-to-date information and has been bringing innovative solutions, cost reduction, and exceptional business processes to Middle Eastern organizations.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                          Accounting Reports
                        </h3>
                        <p >
                        
                          The following reports are among them:
       
                          <li>
                            Business overview: gives a broad overview of the company.
                          </li>
                          <br></br>

                          <li>
                            Bookkeeping:

                            This offers reports like Account list, Balance Sheet Comparison, Balance Sheet, General Ledger, Journal, Profit and Loss Comparison, Profit and Loss, Account history, and more that are useful for keeping track of financial transactions.
                          </li>
                          <br></br>
                          <li>
                            Budget:

                            Reports like Budget Overview, Budget vs Actual, and Profit and Loss Budget Performance are used to track the amounts that were budgeted versus what was actually spent on various accounts. Sales tax contains reports like the Tax Detail Report, Tax Summary Report and  that assist in keeping track of taxes.
                          </li>


                        </p>


                      </div>
                    </div>


                    <div className="col-lg-6 col-md-12">
                      <div className="block-video icon-pattern">



                        <img style={{height:"500px"}} className="img-responsive" src="/reportpage/pic1.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/*                 
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                           
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Business Strategy
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Local Marketing
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-2"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/social.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Social media
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-3"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>




                </section> */}
        <section className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img style={{height:"500px"}} className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">

                <h3 className="text-heading-1 mt-30">
                  Purchase Reports
                </h3>
                <p>
                  <li>
                    The report includes a table displaying the cost of import goods for each item
                  </li>
                  <br></br>

                  <li>

                    A PO voucher report is included, which provides details on the vouchers associated with purchase orders
                  </li>




                  <li>
                    A Purchase Invoices Report is included, which shows all the invoices issued for purchased goods
                  </li>
                  <br></br>
                  <li>
                    A Debit Note Report is included, which shows any debit notes issued for purchased goods
                  </li>
                  <br></br>
                  <li>
                    A Charts Based Report is included, which provides visual representations of purchase statistics
                  </li>

                  {/* <li>
                        The report includes purchase statistics broken down by number of purchase orders
                      </li>
                
                      <li>
                       The report includes purchase statistics broken down by cost
                      </li>
                
                      <li>
                        The report provides a detailed overview of all aspects of the purchase process.
                      </li> */}
                </p>

              </div>

            </div>
          </div>


          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-2 panel-box mt-100">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                          Inventory Reports
                        </h3>
                        <p >
                          <li>

                            The report includes Inventory Analytics, which provides detailed information on the performance of the inventory.

                          </li>
                          <br></br>

                          <li>


                            The report is presented in tabular format, with columns for Order, Commodity Code, Commodity Name, Unit Name, Opening Stock, Import In Period, Export In Period, and Closing Stock. Each column contains data such as quantity and amount.
                          </li>
                          <br></br>
                          <li>


                            The report provides a detailed overview of the inventory levels, movement, and value of various goods and commodities over a specific period of time.
                          </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="block-video icon-pattern">
                        {/* <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}


                        <img style={{height:"500px"}} className="img-responsive" src="/reportpage/pic3.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img style={{height:"500px"}} className="bdrd-16 img" src="/reportpage/pic4.png" alt="Agon" />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">

                <h3 className="text-heading-1 mt-30">
                  POS Reports
                </h3>
                <p >
                  <li>
                    The report includes a Charts Based Report, which provides visual representations of sales statistics.
                  </li>
                  <br></br>
                  <li>


                    The report allows for easy analysis of sales trends, identifying areas of strength and weakness, and making data-driven decisions to improve sales performance.
                  </li>
                  <br></br>
                  <li>


                    The report provides an overall picture of the sales performance of the company or organization, and can be used to make decisions about future sales strategies.
                  </li>
                </p>

              </div>

            </div>
          </div>



          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                          Reports
                        </h3>
                        <p >

                          The following reports are among them:

                          <li>
                            The report includes a Charts Based Report, which provides visual representations of the data.
                          </li>
                          <br></br>
                          <li>
                            The report allows for easy analysis of activity and unaccepted assets, identifying areas of concern and making data-driven decisions to improve performance.
                          </li>
                          <br></br>

                          <li>
                            The report provides an overall picture of the activity and assets of the organization, and can be used to make decisions about future strategies.
                          </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="block-video icon-pattern">
                        {/* <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}


                        <img style={{height:"500px"}} className="img-responsive" src="/reportpage/pic5.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>




          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img style={{height:"500px"}} className="bdrd-16 img-responsive" src="/reportpage/picnew2.png" alt="Agon" />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">

                <h3 className="text-heading-1 mt-30">
                  HR Reports
                </h3>
                <p >
                  <li>
                    The report, HR Reports, gives a general summary of a company's or organization's human resources data. It also includes information on staff layoffs, which gives specifics on those employees who have been let go.
                  </li>
                  <br></br>
                  <li>
                    The report contains a charts-based report that presents data in a visual manner.
                  </li>
                  <br></br>

                  <li>
                    The ratio of staff changes by seniority, which displays the percentage of staff changes by seniority level, is included in the report.
                  </li>
                </p>

              </div>

            </div>
          </div>





          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                          Payroll Reports
                        </h3>
                        <p >
                          <li>

                            The report comprises a Payroll report, which offers a summary of a company's or organization's payroll data.
                          </li>
                          <br></br>
                          <li>


                            The report contains a charts-based report that presents data in a visual manner.
                          </li>

                          <li>

                            The Payslip, a record containing information about an employee's pay and deductions, is included in the report.
                          </li>
                          <br></br>


                          <li>

                            The department payslips, which display the payslips of workers in a certain department, are included in the report
                          </li>
                          <br></br>


                          <li>

                            The report makes it simple to analyse payroll and income data, pinpoint problem areas, and take data-

                            driven actions to boost performance.
                          </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="block-video icon-pattern">
                        {/* <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}


                        <img style={{height:"500px"}} className="img-responsive" src="/reportpage/pic6.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>




          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img style={{height:"500px"}} className="bdrd-16 img-responsive" src="/reportpage/pic7.png" alt="Agon" />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">

                <h3 className="text-heading-1 mt-30">
                  Timesheets Reports
                </h3>
                <p >
                  Reports on annual leave: tracks and manages an employee's time off
                  <br></br> <br></br>
                  <li>

                    Attendance reports: tracks an employee's attendance
                  </li>
                  <br></br>
                  <li>


                    The report contains a charts-based report that presents data in a visual manner.
                  </li>

                  <li>

                    Leave application reports: tracks and manages an employee's leave requests
                  </li>
                  <br></br>


                  <li>
                    Working hours statistics report: shows the total hours worked
                  </li>
                  <br></br>


                  <li>

                    Leave by department report: shows the breakdown of leaves taken by different departments
                  </li>


                </p>

              </div>

            </div>
          </div>




          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                          Sales Reports
                        </h3>
                        <p >
                          <li>
                            Invoices Report: tracks and manages invoices sent to customers
                          </li>
                          <br></br>
                          <li>

                            Credit Notes Report: tracks and manages credit notes issued by the company
                          </li>

                          <br></br>
                          <li>
                            Proposals Report: tracks and manages proposals sent to customers
                          </li>

                          <br></br>
                          <li>
                            Charts Based Report: visual representation of data, such as sales progress
                          </li>


                          <br></br>
                          <li>
                            Payment Modes (Transactions) Report: shows the breakdown of payments made by different modes
                          </li>

                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="block-video icon-pattern">
                        {/* <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}


                        <img style={{height:"500px"}} className="img-responsive" src="/reportpage/pic8.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>


        {/* 
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">
                                        What We Offer
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        What makes us different from others? We give
                                        holistic solutions with strategy, design
                                        &amp; technology.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <OfferSlider/>
                            </div>
                        </div>
                    </div>
                </section>
                */}

      </Layout>

    </>
  )
}

export default Home;
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import Head from "next/head";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Manu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <Head>
        <title>
        Open Source Manufacturing ERP Software | Shadobooks
        </title>
        <meta
          name="description"
          content=" Shadobooks' manufacturing ERP software can help increase businesses profits and maintain customer satisfaction. Check out our ERP and MRP software now! "
        />
        <meta name="keywords" content="Manufacturing ERP Software"/>

      </Head>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-3 " style={{backgroundColor:"#F1F3F3"}}>
            <div className="container">
              <div className="text-center">
                <h1 className="text-display-2 color-gray-900 mt-40 ">
                  Get the best CRM for the manufacturing
                  <br className="d-lg-block d-none" />
                  industry from ShadoBooks
                </h1>
                <div className="text-body-lead-large color-gray-500 mt-40">
                  Get a website to be found on the first page of Google to
                  <br className="d-lg-block d-none" />
                  Our ShadoBook manufacturing industry has a variety of
                  requirements, from the sale of new equipment and facilities to
                  complicated lifecycle management ideas and services for
                  problem-finding and repairs. Our prioritizing sales and
                  customer service, synchronizing business procedures, and
                  expanding internationality are crucial factors. Our
                  intelligent ShadoBook manufacturing solution built on CRM
                  results in process optimization and increased efficiency in
                  businesses that operate both nationally and globally.
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="box-image">
                  {/* <a
                    className="popup-youtube btn-play-video btn-play-middle"
                    onClick={() => setOpen(true)}
                  ></a> */}
                  <img
                    className="img-responsive shape-2 square border border-primary"
                    src="assets/imgs/page/homepage4/manu.jpg " style={{borderRadius:"30px",width:"100%"}}
                    alt="ShadoBooks"
                  />
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </div>
        <div className="banner-hero banner-1 mt-20 " style={{backgroundColor:"#F1F3F3"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 mt-10 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50 ">
                  Our Features
                </h2>
              </div>

              <h2 className="text-heading-4 color-gray-900 mb-5 ">
                Manufacturing
              </h2>

              <p className="text-body-lead-large color-gray-600 mt-10">
                Our CRM software prefers an ERP system using our industrial CRM
                service. By storing and analyzing extensive data, your business
                can manage customers more effectively and increase sales using a
                holistic client strategy.
              </p>

              <div className="col-lg-1 col-sm-1 col-12" />

              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50"></h2>
              </div>

              <h2 className="text-heading-4 color-gray-900 mb-5">Inventory</h2>

              <p className="text-body-lead-large color-gray-600 mt-10">
                Our CRM tool has a robust inventory tracking function that keeps
                you updated on your inventories. With our powerful CRM tool, you
                can quickly determine what raw materials are necessary and how
                much stock is still available. Additionally, you can use
                pre-designed batch numbers to track your raw materials and
                stocks.
              </p>

              <div className="col-lg-1 col-sm-1 col-12" />

              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50"></h2>
              </div>

              <h2 className="text-heading-4 color-gray-900 mb-5">Purchase</h2>

              <p className="text-body-lead-large color-gray-600 mt-10">
                You may maintain in-depth contact information for clients,
                vendors, and suppliers with our manufacturing CRM software.
                Everything about it is continuously updated and, if necessary,
                accessible from any device. Real-time data tracking ensures that
                each purchasing department has access to the most recent
                information about the demands for goods and stocks.
              </p>

              <div className="col-lg-1 col-sm-1 col-12" />

              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50"></h2>
              </div>

              <h2 className="text-heading-4 color-gray-900 mb-5">Sales</h2>

              <p className="text-body-lead-large color-gray-600 mt-10">
                In particular, selling is crucial to developing future business
                strategies for product manufacturing. Our powerful capability
                allows you to quickly analyze past data and locate bottlenecks
                in your production operations. Furthermore, our CRM software
                helps you forecast sales by accurately producing pertinent
                reports and forecast data.
              </p>

              <div className="col-lg-1 col-sm-1 col-12" />

              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50"></h2>
              </div>

              <h2 className="text-heading-4 color-gray-900 mb-5">
                HR Records
              </h2>

              <p className="text-body-lead-large color-gray-600 mt-10">
                Using our records and CRM tool, you may quickly generate all the
                vital records linked to your business operations. Our powerful
                feature offers graphic records on many crucial areas of your
                company, including sales, marketing, production, and more.
                Additionally, it gives you important insights and pertinent KPIs
                for each department.
              </p>

              <div className="col-lg-1 col-sm-1 col-12" />

              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50"></h2>
              </div>

              <h2 className="text-heading-4 color-gray-900 mb-5">
                HR & Payroll
              </h2>

              <p className="text-body-lead-large color-gray-600 mt-10">
                A CRM not only maintains all of your business activities but
                also meticulously manages your employees' sensitive data. You
                can find out what role a person had in the sales process or what
                responsibility they were given throughout the production of a
                product. Our ShadoBook CRM tool helps to control their working
                hours to ensure proper pay allocation.
              </p>

              <div className="col-lg-1 col-sm-1 col-12" />

              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50"></h2>
              </div>

              <h2 className="text-heading-4 color-gray-900 mb-5">Customers</h2>

              <p className="text-body-lead-large color-gray-600 mt-10">
                From a single screen, you can see every interaction a customer
                has ever had with your brand. This enables you to respond to
                inquiries or complaints and guarantees you never miss one. Our
                CRM tool is particularly beneficial for small retail businesses
                when dealing with complex service tickets that require
                continuing assistance from various departments.
              </p>

              <div className="col-lg-1 col-sm-1 col-12" />

              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50"></h2>
              </div>

              <h2 className="text-heading-4 color-gray-900 mb-5">Lead</h2>

              <p className="text-body-lead-large color-gray-600 mt-10">
                For sales leads to develop into opportunities for producing
                money, nurturing, nurturing, and tracking sales leads are
                required. Utilize our ShadoBook to obtain complete customer
                information, including chats, transactions, and touch points.
              </p>

              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="col-lg-1 col-sm-1 col-12" />
        </div>

        <div className="banner-hero banner-4 mt-100"  style={{backgroundColor:"#F1F3F3"}}>
          <div className="container mt-50">
            <div className="row">
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-50 " style={{marginLeft:"150px"}}>
                  Why choose our ShadoBook?
                </h2>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 hover-up mt-3 square border border-primary" style={{backgroundColor:"#AEBBBA", borderRadius:"30px",marginLeft:"120px"}}>
                <div className=" mt-50">
                  <div className="item-icon" style={{textAlign:"center", marginBottom:"50px"}}>
                    <span className="icon-left ">
                      <img
                        src="/assets/imgs/page/homepage2/term.png"
                        alt="ShadoBooks" style={{height:"75px"}}
                      />
                    </span>
                    <h4 className="text-heading-4">
                      Build strong teams to expand your business
                    </h4>
                    <p
                      className="text-body-text color-gray-600 mt-20"
                      style={{ fontSize: "20px", textAlign:"center" }}
                    >
                      Business owners or managers need to emphasize the value of
                      collaboration. We speak most passionately about the
                      various functional teams, such as Sales, Marketing,
                      Production, Finance, and HR. Our CRM software will be
                      essential to achieving this otherwise impossible step
                      shift in coordination.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12  hover-up mt-3 square border border-primary" style={{backgroundColor:"#AEBBBA", borderRadius:"30px", marginLeft:"200px"}}>
                <div className=" mt-50">
                  <div className="item-icon" style={{textAlign:"center", marginBottom:"50px"}}>
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/decission.png"
                        alt="ShadoBooks" style={{height:"75px"}}
                      />
                    </span>
                    <h4 className="text-heading-4">
                      Faster decisions through instant reporting
                    </h4>
                    <p
                      className="text-body-text color-gray-600 mt-20"
                      style={{ fontSize: "20px" , textAlign:"center"}}
                    >
                      In the real world, we frequently need to make quick,
                      crucial judgments while fully aware that our information
                      is imperfect. Sometimes we even have to choose to wait it
                      out rather than make a decision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12  hover-up square border border-primary " style={{backgroundColor:"#AEBBBA", borderRadius:"30px",marginTop:"60px",marginLeft:"120px" }}>
                <div className=" mt-50">
                <div className="item-icon" style={{textAlign:"center", marginBottom:"50px"}}>
                    <span className="icon-left" >
                      <img
                        src="/assets/imgs/page/homepage2/boost.png"
                        alt="ShadoBooks"  style={{height:"75px"}}
                      />
                    </span>
                    <h4 className="text-heading-4" >
                      Boosting the value of your company
                    </h4>
                    <p
                      className="text-body-text color-gray-600 mt-20"
                      style={{ fontSize: "20px", textAlign:"center" }}
                    >
                      We deal with companies that are gaining traction in their
                      particular industry or market and have an exit strategy in
                      mind that will serve the objectives of the present owners.
                      We are devoted to assisting you in maximizing your
                      company's value by providing documentation analysis in
                      collaboration with you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12  hover-up square border border-primary " style={{backgroundColor:"#AEBBBA", borderRadius:"30px",marginLeft:"200px",marginTop:"60px"}}>
                <div className="mt-50">
                <div className="item-icon" style={{textAlign:"center", marginBottom:"50px"}}>
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/profit.png"
                        alt="ShadoBooks" style={{height:"75px"}}
                      />
                    </span>
                    <h4 className="text-heading-4">Increase Profits</h4>
                    <p
                      className="text-body-text color-gray-600 mt-20"
                      style={{ fontSize: "20px" }}
                    >
                      When clients tell us they want to increase their profits,
                      they either do so with a smile that betrays a hint of
                      embarrassment or with a strong sense of power. Our CRM
                      tool will connect and plan actions throughout the company
                      to maximize the difference for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-box mt-100 banner-hero banner-4  "  style={{backgroundColor:"#F1F3F3"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12 text-center">
                <h3 className="text-heading-1 ">Frequently asked questions</h3>

                <div className="row">
                  <div className="col-lg-12 mt-50">
                    <div className="col-lg-12 mt-50">
                      <h4 className="text-heading-3  mb-10 icon-leaf">
                        1. What does manufacturing CRM entail?
                      </h4>
                      <div className="col-lg-12 mt-50">
                        <p className="text-body-lead-large color-gray-500">
                          Customer relationship management is a piece of
                          software that aids businesses in{" "}
                          <br className="d-lg-block d-none" /> keeping track of
                          all of their communications with clients, both past
                          and present. <br className="d-lg-block d-none" /> CRMs
                          are powerful tools that assist with sales process
                          management and <br className="d-lg-block d-none" />
                          allow manufacturers to track customers and their order
                          history.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-50">
                      <h4 className="text-heading-3  mb-10 icon-leaf">
                        2. What purposes do CRM tools serve?
                      </h4>
                      <div className="col-lg-12 mt-50">
                        <p className="text-body-lead-large color-gray-500">
                          With the help of a CRM tool, you can manage marketing
                          campaigns, <br className="d-lg-block d-none" /> track
                          service issues, identify sales opportunities, and
                          store customer and prospect
                          <br className="d-lg-block d-none" /> contact
                          information in one convenient location. You can also
                          make data about every{" "}
                          <br className="d-lg-block d-none" /> customer
                          relations available to anyone at your company who
                          might need it.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-50">
                      <h4 className="text-heading-3  mb-10 icon-leaf">
                        3. How significant is CRM to producers of consumer
                        goods?
                      </h4>
                      <div className="col-lg-12 mt-50">
                        <p className="text-body-lead-large color-gray-500">
                          A Manufacturing CRM system will assist in managing
                          daily queries, inquiries,{" "}
                          <br className="d-lg-block d-none" /> and service calls
                          and keeping track of any warranty, repair, or{" "}
                          <br className="d-lg-block d-none" /> service concerns.
                          As a result, there will be fewer delays and fines and
                          more <br className="d-lg-block d-none" />
                          follow-up purchases.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-50">
                      <h4 className="text-heading-3  mb-10 icon-leaf">
                        4. CRM: Technology or a tactic?
                      </h4>
                      <div className="col-lg-12 mt-50">
                        <p className="text-body-lead-large color-gray-500">
                          Customer relationship management is a corporate-wide
                          business plan <br className="d-lg-block d-none" />
                          created to boost sales and profitability, cut costs,{" "}
                          <br className="d-lg-block d-none" /> and foster
                          greater client loyalty.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-60">
                  <Link href="/page-contact">
                    <a className="btn btn-black icon-arrow-right-white">
                      Contact Us
                    </a>
                  </Link>
                  <Link href="/page-login">
                    <a className="btn btn-link text-heading-6">
                      Support Center
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7"></div>
            </div>
          </div>
        </section>

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="7e90gBu4pas"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}

export default Manu;

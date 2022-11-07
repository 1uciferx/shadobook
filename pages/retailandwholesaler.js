/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Raw() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-4  bg-10">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-gray">
                    Avail the best CRM for Retail and Wholesalers from ShadoBook
                  </h1>
                  <p
                    className="text-body-lead-large color-gray mt-30 pr-40"
                    style={{ fontSize: "20px" }}
                  >
                    Enhance the customer service experience and promote loyalty
                    among both new and existing customers, effective customer
                    management is crucial. From ties with retail consumers to
                    those with wholesale clients to those with product
                    suppliers, we ShadoBook manage all sorts of connections and
                    have access to a perspective of all your contacts. Within a
                    single business management system, we ShadoBook gives you an
                    understanding of all customer actions, including sales,
                    purchases, finances, and the delivery of items.
                  </p>
                  {/* <div className="mt-40">
                    <Link href="/page-about-1">
                      <a className="btn btn-pink icon-arrow-right-white text-heading-6">
                        Get Start
                      </a>
                    </Link>
                    <Link href="/page-contact">
                      <a className="btn btn-link color-white text-heading-6 btn-link-inter">
                        Learn More
                      </a>
                    </Link>
                  </div> */}
                  {/* <div className="mt-60">
                    <div className="row">
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-white mb-15">
                          5000+
                        </h3>
                        <p className="text-body-normal color-gray-300">
                          Happy Clients
                        </p>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-white mb-15">
                          756+
                        </h3>
                        <p className="text-body-normal color-gray-300">
                          Project Done
                        </p>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-white mb-15">
                          100%
                        </h3>
                        <p className="text-body-normal color-gray-300">
                          Client Satisfaction
                        </p>
                      </div>
                    </div> 
                  </div>*/}
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <a
                      className="popup-youtube btn-play-video-2"
                      onClick={() => setOpen(true)}
                    ></a>

                    <img
                      className="img-responsive shape-2"
                      alt="ShadoBooks"
                      src="assets/imgs/page/homepage4/banner.png"
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
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Our Features
                </h2>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-90 mb-lg-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-1 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Purchase
                  </h4>
                  <p className="text-heading-5 color-gray-600">
                    You can go beyond conventional procurement methods and
                    recover stability in your purchasing decisions while always
                    having the stock you require, maximizing fulfillment. Our
                    proactive intelligence services provide accurate
                    forecasting, allowing you to access all your data and
                    determine stock levels.
                  </p>
                  {/* <div className="box-image-inner bg-color-1">
                    <img
                      src="/assets/imgs/page/homepage2/temp-1.png"
                      alt="ShadoBooks"
                    />
                  </div> */}
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-6 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">Sales</h4>
                  <p className="text-heading-5 color-gray-600">
                    Identify business opportunities with potential and current
                    clients based on the product line, revenue growth, and
                    business demands. We ShadoBook offers sales possibilities in
                    our CRM tool to achieve precise forecasting and pipeline
                    management.
                  </p>
                  {/* <div className="box-image-inner bg-color-2">
                    <img
                      src="/assets/imgs/page/homepage2/temp-2.png"
                      alt="ShadoBooks"
                    />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="row mt-30">
              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-4 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Accounting
                  </h4>
                  <p className="text-heading-5 color-gray-600">
                    Our customers are the most or least profitable by
                    integrating our CRM tool with all orders and accounting,
                    then deciding which customers need and spending some on
                    their requirements.
                  </p>
                  {/* <div className="box-image-inner bg-color-1">
                    <img
                      src="/assets/imgs/page/homepage2/temp-1.png"
                      alt="ShadoBooks"
                    />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-2 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Customers
                  </h4>
                  <p className="text-heading-5 color-gray-600">
                    Our ShadoBook CRM tool may coordinate their approach to
                    clients and instantly improve customer service. We offer
                    access to complete purchase history and customer actions.
                  </p>
                  {/* <div className="box-image-inner bg-color-2">
                    <img
                      src="/assets/imgs/page/homepage2/temp-2.png"
                      alt="ShadoBooks"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row mt-30">
              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-3 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Lead reports
                  </h4>
                  <p className="text-heading-5 color-gray-600">
                    View the facts and information to see to perform your job
                    correctly. Our CRM tool helps in lead reporting, which
                    illuminates rather than perplexes. We provide practical,
                    insightful, and meaningful sales metrics.
                  </p>
                  {/* <div className="box-image-inner bg-color-1">
                    <img
                      src="/assets/imgs/page/homepage2/temp-1.png"
                      alt="ShadoBooks"
                    />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-10 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Expense
                  </h4>
                  <p className="text-heading-5 color-gray-600">
                    Our CRM tool helps to update your daily expenses based on
                    your billing and entry details. We ensure that sales and
                    marketing plans are entirely optimized and understand the
                    specific performance data of each store and shopping
                    channel.
                  </p>
                  {/* <div className="box-image-inner bg-color-2">
                    <img
                      src="/assets/imgs/page/homepage2/temp-2.png"
                      alt="ShadoBooks"
                    />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="row mt-30">
              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-9 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Inventory
                  </h4>
                  <p className="text-heading-5 color-gray-600">
                    Due to the lack of real-time data, our CRM tool makes it
                    easier to determine the overall performance and increases
                    the pressure on workers to complete their daily tasks. We
                    gain complete and accurate stock visibility across your
                    stores, online sales platforms, offices, and warehouses to
                    maximize sales prospects.
                  </p>
                  {/* <div className="box-image-inner bg-color-1">
                    <img
                      src="/assets/imgs/page/homepage2/temp-1.png"
                      alt="ShadoBooks"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box pt-100 pb-100 mt-100 mb-80 bg-10">
          <div className="container ">
            <div className="row">
              <div className="col-lg-5 mb-30">
                <h3 className="text-heading-1 mt-10">Why choose us?</h3>
                <div className="text-body-lead-large color-gray-600 mt-50">
                  <div className="banner-imgs">
                    <a
                      className="popup-youtube btn-play-video-2"
                      onClick={() => setOpen(true)}
                    ></a>

                    <img
                      className="img-responsive shape-2"
                      alt="ShadoBooks"
                      src="/assets/imgs/page/homepage2/img-newsletter.png"
                    />
                  </div>
                </div>

                {/* <p className="text-body-lead-large color-gray-600 mt-30">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit
                </p>
                <div className="mt-40">
                  <Link href="/page-about-1">
                    <a className="btn btn-default btn-white icon-arrow-right">
                      Learn More
                    </a>
                  </Link>
                </div> */}
              </div>
              <div className="col-lg-7">
                <div className="row" data-masonry='{"percentPosition": true }'>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <h4 className="text-heading-4 color-gray-900 mb-5">
                        An adaptable system
                      </h4>

                      <div className=" mt-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          You can select one or more items, whether related to
                          sales, marketing, or service, depending on your
                          present or changing needs. Our ShadoBook CRM tool can
                          grow with your company by being adaptable.
                        </p>
                      </div>

                      {/* <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-1.png"
                            alt="ShadoBooks"
                          />
                        </div>
                      
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <h4 className="text-heading-4 color-gray-900 mb-5">
                        System support
                      </h4>

                      <div className=" mt-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          Our CRM application supports all crucial sales,
                          marketing, and customer service processes and enables
                          you to customize these activities to each client's
                          connection with your business.
                        </p>
                      </div>

                      {/* <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-1.png"
                            alt="ShadoBooks"
                          />
                        </div>
                      
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <h4 className="text-heading-4 color-gray-900 mb-5">
                        Interaction with customers
                      </h4>

                      <div className=" mt-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          In order to create excellent client experiences
                          round-the-clock, we ShadoBook CRM tool offers a
                          Customer Engagement Platform that comprises several
                          tools for creating various self-service alternatives
                          for your consumers.
                        </p>
                      </div>

                      {/* <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-1.png"
                            alt="ShadoBooks"
                          />
                        </div>
                      
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <h4 className="text-heading-4 color-gray-900 mb-5">
                        Individual Productivity
                      </h4>

                      <div className=" mt-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          For customer-facing users, our ShadoBook CRM offers
                          practical work tools to carry out everyday, repetitive
                          chores, boost productivity, and communicates with
                          coworkers by simply exchanging documents, diaries,
                          emails, projects, and much more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  col-sm-12 block-img-we-do">
                <div className="inner-image">
                  <img
                    className="bdrd-16 img-responsive"
                    src="assets/imgs/page/homepage2/img-2.png"
                    alt="ShadoBooks"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <h3 className="text-heading-1 mt-30">FAQ'S</h3>
                <div className="list-icons mt-50">
                  <div className="item-icon none-bd hover-up">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-work.svg"
                        alt="ShadoBooks"
                      />
                    </span>
                    <h4 className="text-heading-4">
                      What is CRM software in retail?
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      A tool known as customer relationship management is
                      utilized to manage all interactions and relationships
                      between your company and its customers. The purpose is
                      straightforward: to boost business relations. CRM systems
                      help companies maintain customer contact, facilitate
                      procedures and increase profitability.
                    </p>
                  </div>
                  <div className="item-icon none-bd hover-up">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-design.svg"
                        alt="ShadoBooks"
                      />
                    </span>
                    <h4 className="text-heading-4">Do retailers use CRM?</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      For brick-and-mortar and online retailers, customer
                      relationship management software provides solutions for
                      managing products and inventory and handling orders and
                      payments.
                    </p>
                  </div>
                  <div className="item-icon none-bd hover-up">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-advance.svg"
                        alt="ShadoBooks"
                      />
                    </span>
                    <h4 className="text-heading-4">
                      What are the CRM goals for the retail and wholesalers
                      industry?
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      A CRM system's primary goal is to improve the customer
                      experience. The most dependable strategy to attain success
                      for your organization is to carry out this goal. When you
                      improve customer happiness, the primary purpose of your
                      CRM, all other plans serve to advance this goal.
                    </p>
                  </div>
                  <div className="item-icon none-bd hover-up">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-advance.svg"
                        alt="ShadoBooks"
                      />
                    </span>
                    <h4 className="text-heading-4">
                      Why is a retail company's relationship with its clients so
                      meaningful?
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Your company's financial health is closely related to your
                      relationship with your consumers. Retaining quality,
                      long-term clients and fostering excellent customer
                      relationships will increase revenue through repeat
                      business.
                    </p>
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
        />
      </Layout>
    </>
  );
}

export default Raw;

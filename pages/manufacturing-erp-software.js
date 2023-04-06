/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";
import Contactmanager from "../components/contactmanager";
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import Head from "next/head";

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Manufacturing() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Open Source Manufacturing ERP software | Shadobooks ERP</title>
        <meta
          name="description"
          content="Elevate your production capabilities with cloud-based manufacturing ERP software, designed to help you streamline processes and maximize efficiency."
        />
      </Head>

      <Layout>
        <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/single/manuf.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2 color-white">Manufacturing</h1>
                  <p className="text-body-lead-large color-white mt-30 pr-40">
                    The manufacturing section comes with a statistical dashboard
                    that offers a graphical representation of your manufacturing
                    orders in terms of the measures and period. This also comes
                    with feature-rich options like product management, product
                    variants, bills of materials and routing.
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <img
                      className="img-responsive shape-2 mt-20"
                      alt="Manufacturing ERP Software"
                      src="assets/imgs/page/homepage4/manufacturing.jpg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-80">
          <div className="container"></div>
        </section>

        <section className="section-box mb-120 mb-xs-10">
          <div className="container mt-20 mb-lg-100">
            <div className="row">
              <div className="col-lg-1 col-sm-12"></div>
              <div className="col-lg-10 col-sm-12">
                <div
                  className="bg-2 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <h2 className="text-heading-2 color-gray-900 mb-15">
                    Dashboard
                  </h2>
                  <p className="text-body-text-md color-gray-600">
                    In Shadobook ERP, go to the manufacturing module and select
                    the dashboard. On the dashboard, graphical representation of
                    data such as manufacturing orders, work orders, and work
                    centers can be viewed.
                  </p>
                  <div className="box-image-inner bg-color-2">
                    <img src="assets/imgs/page/about/6/ManuDB.png" alt="Manufacturing ERP Software" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="shadow-lg p-3 mb-5 bg-body rounded container mt-100 ">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
              <h2 className="text-heading-2 color-gray-900 mb-10">
              It can help manufacturers optimize their processes, track product performance and customer satisfaction, and identify areas for improvement
              </h2>
            </div>
            <p className="text-body-lead-large color-gray-600 mt-20">
            Manufacturers can enhance their operations and effectively monitor product performance and customer satisfaction while identifying opportunities for improvement and quality enhancement of their<span><a href="/fixed-assets-management-erp-software"> Company's Assets</a></span> through the use of a<span><a href="/erp-document-management"> File Manager. </a></span>
            </p>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
        </div>

        <section
          className="section-box pt-100 pb-100 mt-100 mb-80"
          style={{ background: "url(assets/imgs/page/blog/single/task1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-30">
                <h3 className="text-heading-1 color-white mt-30">
                  Manufacturing Benefits
                </h3>
                <div className="card-grid-style-2 card-square hover-up mb-20 border border-success rounded-top">
                  <p className="text-body-text color-gray-600 text-comment">
                    Increased efficiency in customer communications: CRM makes
                    it easier to stay in touch with customers by automating
                    emails, notifications, and other communications.
                  </p>
                </div>

                <div className="card-grid-style-2 card-square hover-up border border-success rounded-top">
                  <p className="text-body-text color-gray-600 text-comment">
                    Streamlined processes: CRM helps to streamline many
                    processes such as order management, inventory management,
                    and customer service.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row" data-masonry='{"percentPosition": true }'>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20 border border-success rounded-top">
                      <p className="text-body-text color-gray-600 text-comment">
                        Increased customer satisfaction : CRM helps to improve
                        customer service by providing a 360-degree view of
                        customer data and making it easier to respond quickly to
                        customer inquiries.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20 border border-success rounded-top">
                      <p className="text-body-text color-gray-600 text-comment">
                        Improved customer loyalty : By knowing customers better,
                        CRM helps companies to improve customer loyalty by
                        tailoring products and services to meet customer needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20 border border-success rounded-top">
                      <p className="text-body-text color-gray-600 text-comment">
                        Improved customer acquisition: CRM helps to capture
                        leads and opportunities more quickly and efficiently,
                        allowing companies to respond faster to customer
                        inquiries.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20 ">
                      <p className="text-body-text color-gray-600 text-comment">
                        Improved customer insights: CRM helps to capture
                        customer data and insights that can be used to create
                        better customer experiences and improve marketing
                        campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container">
            <div className="mt-30">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Products</h3>
                    <p className="text-body-excerpt mt-30">
                      To add products in Shadobook ERP:
                      <br></br>
                      <br></br>➟ Go to the manufacturing module, Select products
                      <br></br>
                      To add a new product:
                      <br></br>
                      <br></br>➟ Enter details such as its name, image, sale
                      price, cost, product category, product type, quantity,
                      unit name, etc.
                      <br></br>
                      <br></br>➟ Click the save button, The list of all
                      generated products can be viewed in the products tab in
                      Shadobook ERP.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-60">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/6/ManuPM.png"
                    alt="Manufacturing ERP Software"
                  />
                </div>
              </div>
            </div>

            <div className="mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/6/ManuPVM.png"
                    alt="Manufacturing ERP Software"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Products Varients</h3>
                    <p className="text-body-excerpt mt-30">
                      In Shadobook ERP, the product variant management feature
                      allows users to:
                      <br></br>
                      <br></br>➟ Filter data by selecting the product, product
                      type, and product category.
                      <br></br>
                      <br></br>➟ View the filtered data in the form of a list.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Bills of Materials</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ The Bills of Material page allows you to add a new bill
                      by providing information such as the product, BOM code,
                      BOM type, product variant, quantity, unit, and routing.
                      <br></br>
                      <br></br>➟ Once the details are entered, you can save the
                      bill by clicking the save button.
                      <br></br>
                      <br></br>➟ The bills are then displayed in a list format
                      in the shadobook ERP.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-30">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/6/ManuBOM.png"
                    alt="Manufacturing ERP Software"
                  />
                </div>
              </div>
            </div>

            <div className="mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/6/ManuRoutings.png"
                    alt="Manufacturing ERP Software"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Routings</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In Shadobook ERP, it is possible to create a new route
                      by providing information such as the routing code, routing
                      name, and notes.
                      <br></br>
                      <br></br>➟ Once the details are entered, you can save the
                      route by clicking the save button.
                      <br></br>
                      <br></br>➟ The created routes will then be displayed in a
                      list format in the ERP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Work Centers</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In this window, there is an option to add a new work
                      center by clicking the "add work center" button.
                      <br></br>
                      <br></br>➟ To create a new work center, you need to
                      provide details such as the work center name, code,
                      working hours, capacity, etc.
                      <br></br>
                      <br></br>➟ After providing the details, you can save the
                      work center by clicking the "save" button.
                      <br></br>
                      <br></br>➟ The created work center details will then be
                      displayed in a list format in Shadobook ERP.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-75">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/6/ManuWC.png"
                    alt="Manufacturing ERP Software"
                  />
                </div>
              </div>
            </div>

            <div className="mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-50">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/6/ManuMO.png"
                    alt="Manufacturing ERP Software"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Manufacturing Orders</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In the Shadobook ERP, the manufacturing module has the
                      option to add new manufacturing orders.
                      <br></br>
                      <br></br>➟ To create a new order, you need to click the
                      add button and enter details such as the product, bill of
                      materials, quantity, unit, routing, and status.
                      <br></br>
                      <br></br>➟ Once all the details are entered, you can save
                      the order by clicking the save button.
                      <br></br>
                      <br></br>➟ The generated orders will then be displayed in
                      a list format in the manufacturing module.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Work Orders</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In Shadobook ERP, the manufacturing module has the
                      option to display work orders.
                      <br></br>
                      <br></br>➟ By clicking the work order button, you can
                      filter the orders by selecting criteria such as the
                      manufacturing order, product, and status.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/6/ManuWO.png"
                    alt="Manufacturing ERP Software"
                  />
                </div>
              </div>
            </div>

            <div className=" mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/6/ManuSET.png"
                    alt="Manufacturing ERP Software"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Settings</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In manufacturing, the preferences and parameters used to
                      customize the manufacturing process are known as settings.
                      <br></br>
                      <br></br>➟ Setting up working hours, units of measure
                      categories, unit of measure, and general settings are all
                      part of this.
                    </p>
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

export default Manufacturing;

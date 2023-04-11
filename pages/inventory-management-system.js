/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import { Breadcrumb, Menu, theme } from "antd";
// import styles from "../styles/Inventory.module.css";
import { Col, Row } from "antd";
import { Divider } from "antd";
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import { Layout as L } from "antd";
const { Content } = L;
import { BackTop } from "antd";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Zoom from "react-reveal/Zoom";
import Head from 'next/head';
import Contactmanager from "../components/contactmanager";
import { Helmet } from 'react-helmet';


function Process() {
  return (
    <>
      <Head>
        <title>Boost Productivity With Advanced Inventory Management System</title>
        <meta name="description" content="Improve your inventory control and simplify management using our inventory management system." />
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
            style={{
              background: "url(assets/imgs/page/blog/single/inventory.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-display-2 text-center color-white">
                    Inventory
                  </h1>
                  <p className="text-body-lead-large color-white mt-40  text-center">
                    Shadobooks ERP offers comprehensive inventory management,
                    including order management, stock tracking, warehouse
                    operations, GST billing, mobile order fulfillment, and
                    software integrations for streamlined operations. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section-box mt-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="row">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-8">
                                        <div className="single-detail">
                                            <h1 className="text-heading-3">
                                                Dashboard
                                            </h1>
                                            <img
                                                className="img-responsive bdr-16"
                                                src="assets/imgs/page/homepage1/zz.png"
                                                alt="Inventory management system"
                                            />
                                            <p />

                                            <p>
                                                ➟ By clicking the Company asset-Dashboard, you can check the Dashboard Assets Status. <br /><br />
                                                ➟ It displays the status of each stage of the package receipt and ingestion process. <br /><br />
                                                ➟ Total asset, licences, accessories, consumables, asset by state, asset categories, and actions done by in asset section comprise the asset dashboard.
                                            </p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center ">
                <h2 className="text-heading-2 ">Items</h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/items.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In Shadobook ERP, you can access a list of items by
                    clicking the "items" tab in the inventory module.
                    <br />
                    <br />
                    ➟ To add new items, you need to enter details such as the
                    commodity code, name, warehouse name, unit name, etc. in the
                    form.
                    <br />
                    <br />➟ After providing the details, the items will be
                    displayed on the items page according to the information
                    provided in the form.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">
                  Inventory Receiving Vouchers
                </h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/IRV.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In Shadobook ERP, you can create vouchers by clicking the
                    delivery docket button.
                    <br />
                    <br /> ➟ To create a new voucher, you need to enter details
                    such as the docket number, choose from a purchase order,
                    supplier name, accounting date, buyer, project, warehouse
                    name, etc.
                    <br />
                    <br />➟ Once the details are entered, you can save the
                    voucher by clicking the save button.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">Inventory Delivery Vouchers</h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/IDV.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In Shadobook ERP, the internal delivery note is used to
                    track goods or services.
                    <br />
                    <br /> ➟ To create a new internal delivery note, click the
                    "add" button, enter details such as the delivery note
                    number, sender, added from, date created, total amount, and
                    status.
                    <br />
                    <br />
                    ➟ After providing the details, save the note by clicking the
                    "save" button.
                    <br />
                    <br />➟ The generated list of internal delivery notes will
                    appear in a list format.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">Packing Lists</h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/PL.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In Shadobook ERP, the packing list is part of the
                    inventory module.
                    <br />
                    <br /> ➟ You can filter the packing list data by date,
                    staff, inventory delivery voucher, and status.
                    <br />
                    <br />➟ You can also add a new packing list by clicking the
                    add button, entering the details, and clicking the save
                    button.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">Internal Delivery Note</h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/IDN.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In Shadobook ERP, the internal delivery note is used to
                    track goods or services.
                    <br />
                    <br /> ➟ To create a new internal delivery note, click the
                    "add" button, enter details such as the delivery note
                    number, sender, added from, date created, total amount, and
                    status.
                    <br />
                    <br />
                    ➟ After providing the details, save the note by clicking the
                    "save" button.
                    <br />
                    <br />➟ The generated list of internal delivery notes will
                    appear in a list format.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">Loss & Adjustments</h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/LA.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In this window, the inventory module allows easy access to
                    loss or adjustment.
                    <br />
                    <br /> ➟ By clicking the add button, you can create a new
                    loss or adjustment by entering details such as type, time,
                    date created, status, reason, and creator.
                    <br />
                    <br />
                    ➟ After providing the details, you can save the loss or
                    adjustment by clicking the save button.
                    <br />
                    <br />➟ The generated loss or adjustment details will appear
                    in a list format.
                    <br />
                    <br />➟ The data can also be filtered by selecting options
                    such as time, date created, status, and type.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">
                  Receiving-Exporting Return Order
                </h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/RERO.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    -In this page, the receiving-exporting return orders are
                    shown in a list format
                    <br />
                    <br /> ➟ The list includes details such as the order return
                    number, customer name, total amount, discount amount, total
                    after discount, date created, type, and status.
                    <br />
                    <br />➟ You have the option to add a new receiving-exporting
                    return order in Shadobook ERP.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">Warehouse</h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/warehouse.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In this window, you can add a new warehouse by providing
                    necessary details such as warehouse code, warehouse name,
                    warehouse address, order, display and note.
                    <br />
                    <br /> ➟ There is also an option to add multiple warehouses
                    at once.
                    <br />
                    <br />➟ The list of warehouses is displayed in a list
                    format.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">Inventory History</h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/IH.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In ShadoBook ERP, the inventory history shows a list of
                    warehouses with details such as code, name, voucher date,
                    opening stock, closing stock, serial number, and status.
                    <br />
                    <br /> ➟ There is an option to filter the history by
                    warehouse, commodity, status, and date.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 ">Settings</h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/INSET.png"
                      alt="Inventory management system"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ Inventory settings are used to control how an inventory
                    system behaves.
                    <br />
                    <br /> ➟ This includes settings such as commodity type,
                    commodity group, subgroup, Units, Colors, Models, Sizes,
                    Styles, Warehouse custom fields, minimum and maximum
                    inventory, prefix settings, Approval settings, and Reset
                    data.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="text-heading-2 "> Manage Your Inventory With Our ERP Software </h2>
              </div>

              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  {/* <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/3/INSET.png"
                      alt="Inventory management system"
                    />
                  </div> */}
                  <p />
                  <p>You can view and manage all of the products, materials, and supplies that are in your inventory. Whether you need to reorder items, adjust quantities, or view stock levels, this page is your go-to resource.To get started, please use the links below: </p>

                  <p>
                    ➟  If you need to find and hire personnel to help manage your inventory, please visit ou<span><a href="/recruitment-management-software"> Hiring</a></span> page for more information. 
                    <br />
                    <br /> ➟ For resources and tips on improving the efficiency of your inventory management, please visit our<span><a href="/lead-management-system"> Leads</a></span> page. 
                    <br /> ➟ To view and manage the tasks related to your inventory, please visit our<span><a href="/task-management-software"> Tasks</a></span> page.  
                  
                  </p>

                  <p />
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

export default Process;

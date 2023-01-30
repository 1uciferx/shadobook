/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import { Breadcrumb, Menu, theme } from "antd";
import styles from "../styles/Inventory.module.css";
import { Col, Row } from "antd";
import { Divider } from "antd";
import { Layout as L } from "antd";
const { Content } = L;
import { BackTop } from "antd";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Contactmanager from "../components/contactmanager";
import Zoom from "react-reveal/Zoom";

function Process() {
  return (
    <>
      <Layout>
    
      <section className="section-box">
                        <div className="banner-hero banner-head-image" style={{ background: 'url(assets/imgs/page/blog/single/inventory.jpg)' }}>
                            <div className="container">
                                <div className="text-center">
                                    <h1 className="text-display-2 color-white mt-30">Inventory</h1>
                                    <p className="text-body-lead-large color-white mt-40 pr-40">
                                    Be it managing your orders, tracking your stock, keeping a tab on your warehouse operations, handling GST billing, and fulfilling orders on the go, Shadobooks helps you with comprehensive inventory management on the go. Stay informed about all your commodities and the numbers available, along with even their expiration dates, taxing, SKU codes, warehouse availability and order management. There’s also a wide scope of integrations with all your operational software tools to make it easy for you to manage all your operations under one roof.
                  </p>
                               </div>
                            </div>
                        </div>
                    </section>

        <Col>
          <h2 className={styles.headings2}>Items</h2>
        </Col>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/items.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                In Shadobook ERP, you can access a list of items by clicking the
                "items" tab in the inventory module.
              </li>
              <br></br>
              <li>
                To add new items, you need to enter details such as the
                commodity code, name, warehouse name, unit name, etc. in the
                form.
              </li>
              <br></br>
              <li>
                After providing the details, the items will be displayed on the
                items page according to the information provided in the form.
              </li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Inventory Receiving Vouchers</h2>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/IRV.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                In Shadobook ERP, you can create vouchers by clicking the
                delivery docket button.
              </li>
              <br></br>
              <li>
                To create a new voucher, you need to enter details such as the
                docket number, choose from a purchase order,<br></br> supplier
                name, accounting date, buyer, project, warehouse name, etc.
              </li>
              <br></br>
              <li>
                Once the details are entered, you can save the voucher by
                clicking the save button.
              </li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Inventory Delivery Vouchers</h2>
        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/IDV.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                In Shadobook ERP, the internal delivery note is used to track
                goods or services.
              </li>
              <br></br>
              <li>
                To create a new internal delivery note, click the "add" button,
                enter details such as the delivery note number, <br></br>{" "}
                sender, added from, date created, total amount, and status.
              </li>
              <br></br>
              <li>
                After providing the details, save the note by clicking the
                "save" button.
              </li>
              <br></br>
              <li>
                The generated list of internal delivery notes will appear in a
                list format.
              </li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Packing Lists</h2>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/PL.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                In Shadobook ERP, the packing list is part of the inventory
                module.
              </li>
              <br></br>
              <li>
                You can filter the packing list data by date, staff, inventory
                delivery voucher, and status.
              </li>
              <br></br>
              <li>
                You can also add a new packing list by clicking the add button,
                entering the details, and clicking the save button.
              </li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Internal Delivery Note</h2>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/IDN.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                In Shadobook ERP, the internal delivery note is used to track
                goods or services.
              </li>
              <br></br>
              <li>
                To create a new internal delivery note, click the "add" button,
                enter details such as the delivery note number, <br></br>{" "}
                sender, added from, date created, total amount, and status.
              </li>
              <br></br>
              <li>
                After providing the details, save the note by clicking the
                "save" button.
              </li>
              <br></br>
              <li>
                The generated list of internal delivery notes will appear in a
                list format.
              </li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Loss & Adjustments</h2>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/LA.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                In this window, the inventory module allows easy access to loss
                or adjustment.
              </li>
              <br></br>
              <li>
                By clicking the add button, you can create a new loss or
                adjustment by entering details such as type, <br></br>time, date
                created, status, reason, and creator.
              </li>
              <br></br>
              <li>
                After providing the details, you can save the loss or adjustment
                by clicking the save button.
              </li>
              <br></br>
              <li>
                The generated loss or adjustment details will appear in a list
                format.
              </li>
              <br></br>
              <li>
                The data can also be filtered by selecting options such as time,
                date created, status, and type.
              </li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Receiving-Exporting Return Order</h2>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/RERO.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              -In this page, the receiving-exporting return orders are shown in
              a list format
              <br></br>
              <br></br>
              <li>
                The list includes details such as the order return number,
                customer name, total amount, discount amount, <br></br>total
                after discount, date created, type, and status.
              </li>
              <br></br>
              <li>
                You have the option to add a new receiving-exporting return
                order in Shadobook ERP.
              </li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Warehouse</h2>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/Warehouse.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                In this window, you can add a new warehouse by providing
                necessary details such as warehouse code, warehouse name,{" "}
                <br></br>warehouse address, order, display and note.
              </li>
              <br></br>
              <li>
                There is also an option to add multiple warehouses at once.
              </li>
              <br></br>
              <li>The list of warehouses is displayed in a list format.</li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Inventory History</h2>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/IH.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                In ShadoBook ERP, the inventory history shows a list of
                warehouses with details such as code, name, voucher date,
                <br></br> opening stock, closing stock, serial number, and
                status.
              </li>
              <br></br>
              <li>
                There is an option to filter the history by warehouse,
                commodity, status, and date.
              </li>
            </p>
          </div>
        </Col>

        <h2 className={styles.headings2}>Settings</h2>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.centerimg}>
            <img
              className={styles.conimg}
              src="assets/imgs/page/about/3/INSET.png"
              alt="Agon"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
        >
          <div className={styles.centercon}>
            <p className={styles.para}>
              <li>
                Inventory settings are used to control how an inventory system
                behaves.
              </li>
              <br></br>
              <li>
                This includes settings such as commodity type, commodity group,
                subgroup, Units, Colors, Models, Sizes, <br></br>Styles,
                Warehouse custom fields, minimum and maximum inventory, prefix
                settings, Approval settings, and Reset data.
              </li>
            </p>
          </div>
        </Col>

        <div>
          <Contactmanager />
        </div>

        {/* <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Providing solutions of every kind
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  In a professional context it often happens that private or
                  <br className="d-lg-block d-none" />
                  corporate clients order a publication to publish news.
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">1. Acquisition</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">2. Activation</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-retent.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">3. Retention</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box pt-100 pb-100 mt-100 bg-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-30">
                <span className="tag-1 color-gray-900">
                  Built Exclusively For You
                </span>
                <h3 className="text-heading-1 mt-30">
                  Don’t take our word for it. See what our clients say.
                </h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit
                </p>
                <div className="mt-40">
                  <Link href="/page-service-2">
                    <a className="btn btn-default btn-white icon-arrow-right">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row" data-masonry='{"percentPosition": true }'>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        "No matter where you go, It's is the coolest, most
                        happening thing around! Not able to tell you how happy I
                        am with it. "
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-1.png"
                            alt="Agon"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Jane Cooper
                        </h4>
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        "Wow what great service, I love it! It's is the most
                        valuable business resource we have EVER purchased. We
                        can't understand how we've been living without it. I
                        couldn't have asked for more than this."
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-2.png"
                            alt="Agon"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Wade Warren
                        </h4>
                        <p className="text-body-text-md">Krusty Krab</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        "Your company is truly upstanding and is behind its
                        product 100%. It's the perfect solution for our
                        business. It has really helped our business. Needless to
                        say we are extremely satisfied with the results. "
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-3.png"
                            alt="Agon"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Leslie Alexander
                        </h4>
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        "It's is both attractive and highly adaptable. It's
                        exactly what I've been looking for. Definitely worth the
                        investment."
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-4.png"
                            alt="Agon"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Jenny Wilson
                        </h4>
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
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/3/img-2.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <span className="tag-1 bg-6 color-green-900">
                  What We Do, What You Get
                </span>
                <h3 className="text-heading-1 mt-30">
                  An Exceptionally unique experience Tailored to you
                </h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  In a professional context it often happens that private or
                  corporate clients order a publication news while still not
                  being ready. Business advisory service advises current and
                  future businesses prospects of a client
                </p>
                <div className="line-bd-green mt-50" />
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Boost your sale
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Smart Installation Tools
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Introducing New Features
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Dynamic Boosting
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
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
                <li>
                  <span className="text-display-3 color-green-900">
                    +<span className="count">6</span>k
                  </span>
                  <p className="text-body-text color-gray-500 pl-40">
                    Years in
                    <br />
                    Business
                  </p>
                </li>
                <li>
                  <span className="text-display-3 color-green-900">
                    +<span className="count">12</span>k
                  </span>
                  <p className="text-body-text color-gray-500 pl-40">
                    Projects
                    <br />
                    Done
                  </p>
                </li>
                <li>
                  <span className="text-display-3 color-green-900">
                    +<span className="count">14</span>k
                  </span>
                  <p className="text-body-text color-gray-500 pl-40">
                    Countries
                    <br />/ Offices
                  </p>
                </li>
                <li>
                  <span className="text-display-3 color-green-900">
                    +<span className="count">16</span>k
                  </span>
                  <p className="text-body-text color-gray-500 pl-40">
                    Constant
                    <br />
                    Clients
                  </p>
                </li>
                <li>
                  <span className="text-display-3 color-green-900">
                    +<span className="count">27</span>k
                  </span>
                  <p className="text-body-text color-gray-500 pl-40">
                    Paid Customers
                  </p>
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
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Building the
                  <br className="d-lg-block d-none" />
                  Work Ecosystem
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  From year to year we strive to invent the most innovative
                  <br className="d-lg-block d-none" />
                  technology that is used by both small and big enterprises
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-90 mb-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="bg-2 box-square hover-up">
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Cross-Platform
                  </h4>
                  <p className="text-body-text-md color-gray-600">
                    Your site is not complete with only landings. Get essential
                    inner pages using our ready demos.
                  </p>
                  <div className="box-image-inner bg-color-1">
                    <img
                      src="/assets/imgs/page/homepage2/temp-1.png"
                      alt="Agon"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="bg-6 box-square hover-up">
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Extremely Flexible
                  </h4>
                  <p className="text-body-text-md color-gray-600">
                    Your site is not complete with only landings. Get essential
                    inner pages using our ready demos.
                  </p>
                  <div className="box-image-inner bg-color-2">
                    <img
                      src="/assets/imgs/page/homepage2/temp-2.png"
                      alt="Agon"
                    />
                  </div>
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
                <p className="text-body-lead-large color-gray-600">
                  From Our blog and Event fanpage
                </p>
              </div>
              <div className="col-lg-4 text-lg-end text-start pt-30">
                <Link href="/blog-2">
                  <a className="btn btn-black icon-arrow-right-white">
                    View More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Company</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-1.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Marketing Event</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-2.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Customer Services</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="grid-4-img color-bg-4">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-3.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
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
                    <div className="col-lg-5 col-md-7">
                      <span className="text-body-capitalized color-gray-500 text-uppercase">
                        newsletter
                      </span>
                      <h4 className="text-heading-2 mb-10 mt-10">
                        Subscribe our newsletter
                      </h4>
                      <p className="text-body-text color-gray-500">
                        By clicking the button, you are agreeing with our
                      </p>
                      <Link href="/page-terms">
                        <a>Term &amp; Conditions</a>
                      </Link>

                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                          <input
                            className="input-newsletter"
                            placeholder="Enter you mail .."
                          />
                          <button className="btn btn-send" />
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1">
                        <img src="/assets/imgs/template/chart.png" alt="Agon" />
                      </div>
                      <img
                        className="img-responsive img-newsletter"
                        src="assets/imgs/template/img-newsletter.png"
                        alt="Agon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
}

export default Process;

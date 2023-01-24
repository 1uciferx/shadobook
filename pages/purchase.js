/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import { Col, Row } from "antd";
import { Divider } from "antd";
import { Layout as L } from "antd";
import { Breadcrumb } from "antd";
const { Content } = L;
import { BackTop } from "antd";
import { Carousel } from "antd";
import { render } from "react-dom";
import styles from "../styles/Purchase.module.css";
import { Tabs } from "antd";
import { Button, Space } from "antd";
import Contactmanager from "../components/contactmanager";

const { TabPane } = Tabs;

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Purchase() {
  const [isOpen, setOpen] = useState(false);

  

  return (
    <>
      <Layout>
        <Col
          xs={{
            span: 24,
            offset: 1,
          }}
          lg={{
            span: 9,
            offset: 1,
          }}
          md={{
            span: 16,
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
            span: 22,
            offset: 1,
          }}
        >
          <Content className={styles.bc}>
            <Breadcrumb style={{ fontWeight: "bold" }}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/#">Home</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/#">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/purchase">Purchase</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
        </Col>

        <div className={styles.hero}>
          <div className={styles.text}>
            <h1 className={styles.headings}>Purchase</h1>
            <p>"Close More Deals with Our CRM!" </p>
          </div>
        </div>

        {/* image slider */}

        {/* <Content className="site-layout" style={{ marginTop: "50px" }}>
          <div>
            <Row>
              <Col span={24}>
                <Carousel autoplay effect="fade">
                  <div>
                    <h3 style={contentStyle}>
                      {" "}
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/purgif1.gif "
                        style={{
                          height: "10vh",
                          width: "100%",
                        }}
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/cov2.jpg "
                        style={{
                          height: "500px",
                          width: "100%",
                        }}
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/cov3.jpg "
                        style={{
                          height: "500px",
                          width: "100%",
                        }}
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/cov4.jpg "
                        style={{
                          height: "500px",
                          width: "100%",
                        }}
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      {" "}
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/cov5.jpg "
                        style={{
                          height: "500px",
                          width: "100%",
                        }}
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/cov6.jpg "
                        style={{
                          height: "500px",
                          width: "100%",
                        }}
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/cov7.jpg "
                        style={{
                          height: "500px",
                          width: "100%",
                        }}
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/cov8.jpg "
                        style={{
                          height: "500px",
                          width: "100%",
                        }}
                      />
                    </h3>
                  </div>
                </Carousel>
              </Col>
            </Row>
          </div>
        </Content> */}

        <Col span={24}>
          <div className={styles.paraparent}>
            <p className={styles.parahero}>
              The purchase section of the CRM enables complete operation
              assistance when it comes to the end-to-end requirements of your
              procurement cycle. From creating a purchase requisition document
              to the final payment, you can automate your process flow
              completely. The platform also offers options for thorough
              inventory management, developing electronic purchase orders and
              monitoring the flow of goods in real-time. Shadobooks also
              presents extensive features for vendor management, quotations,
              contracts and extensive report generation that will help you with
              better spending strategies.
            </p>
          </div>
        </Col>

        <div className={styles.wrap}>
          <Row>
            <Col
              xs={{
                span: 24,
                offset: 0,
              }}
              lg={{
                span: 16,
                offset: 2,
              }}
              sm={{
                span: 18,
                offset: 0,
              }}
              md={{
                span: 14,
                offset: 0,
              }}
              xl={{
                span: 20,
                offset: 1,
              }}
              xxl={{
                span: 22,
                offset: 0,
              }}
            >
              <Tabs
                centered="true"
                tabBarStyle={{
                  color: "#90331c",
                  fontWeight: "bold",
                }}
              >
                <TabPane tab="Items" key="tab-a">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurIT.png"
                      />
                    </Col>

                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-a" className={styles.tabheadings1}>
                        Items
                      </h3>
                      <p className={styles.para}>
                        In Shadobook ERP, a list of items will display by
                        clicking the purchase module "items" tab. Here, enter
                        all the details such as the commodity code, name,
                        warehouse name, unit name, etc. According to the details
                        provided in the form, an items file will be shown on the
                        items page.
                      </p>
                      {/* <Space>
                    <Button style={{ color: "#90331c" }}>Learn More</Button>
                  </Space> */}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Purchase Request" key="tab-d">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurPR.png"
                        className={styles.tabimg}
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-d" className={styles.tabheadings1}>
                        Purchase Request
                      </h3>
                      <p className={styles.para}>
                        By selecting the purchase module and then "purchase
                        request," you can view the purchase requests that have
                        been submitted.Here you can see the list of requests. In
                        addition, we can create a new request in Salesforce ERP
                        by clicking the "new request" tab and entering all of
                        the details such as the request code, name, department,
                        request time, and so on.
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Vendor-Items" key="tab-c">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurVI.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-c" className={styles.tabheadings1}>
                        Vendor-Items
                      </h3>
                      <p className={styles.para}>
                        On this page, we can see a list of vendors and their
                        products, as well as the date the page was created.In
                        addition, we have the option to add the vendor, group
                        items, and items in the form in Shadobook ERP.
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Quotations" key="tab-e">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurQ.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-e" className={styles.tabheadings1}>
                        Quotations
                      </h3>
                      <p className={styles.para}>
                        In this window, we can see the list of quotations. To
                        create a new estimate, go to the "New" tab, enter all
                        the required details, such as the estimate number,
                        amount, purchase request, date, etc., and save the form.
                        Now the list of quotations can be viewed in Shadobook
                        ERP.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Purchase Order" key="tab-f">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurPO.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-f" className={styles.tabheadings1}>
                        Purchase Order
                      </h3>
                      <p className={styles.para}>
                        To view the purchase order in Shadobook ERP, click the
                        purchase module, and then click "purchase order" here.
                        We have two types of tabs available: new and PO voucher
                        tabs. To create a new purchase order, click the new tab
                        and enter all the details, such as the purchase order
                        number, vendor, date, department, PO value, etc., then
                        save the form. Now you can view the purchase order list
                        here.
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Order Returns" key="tab-g">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurOR.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-g" className={styles.tabheadings1}>
                        Order Returns
                      </h3>
                      <p className={styles.para}>
                        Go to the purchase module in Shadobook ERP to view the
                        list of order returns. Clicking the order return button
                        displays the list of order returns. To create a new
                        order return, click the new tab and enter all the
                        details, such as the order return number, vendor, total
                        amount, discount total, total after discount, date
                        created, status, etc., and then save the form. Now the
                        order return is available in list form.
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Contracts" key="tab-h">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurC.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-h" className={styles.tabheadings1}>
                        Contracts
                      </h3>
                      <p className={styles.para}>
                        To view the number of contracts in Shadobook ERP, Go to
                        the purchase module, and then click contracts. Now you
                        can see the contract lists. To create a new contract,
                        click the "new" tab, enter all the details, such as
                        department, project, service category, vendors, contract
                        description, contract value, payment amount, payment
                        cycle, payment terms, and then save the form. Now the
                        list of contracts will appear.
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Debit Notes" key="tab-i">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurDN.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-i" className={styles.tabheadings1}>
                        Debit Notes
                      </h3>
                      <p className={styles.para}>
                        In Shadobook ERP, we can create and also view the list
                        of debit notes. To create a new debit note, go to the
                        purchase module, click on "debit note," then "new tab,"
                        and enter all the details such as the debit note number,
                        debit note date, vendors, status,amount,remaining
                        amount, etc., and then save the form. Now we can see the
                        debit notes in list form.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Invoices" key="tab-j">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurI.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-j" className={styles.tabheadings1}>
                        Invoices
                      </h3>
                      <p className={styles.para}>
                        In this window, we can see the list of invoices created.
                        To create a new invoice, go to the purchase module and
                        then click the invoice. Go to the new tab and enter all
                        the details, such as the invoice number, vendors,
                        contracts, purchase order, invoice date, invoice amount,
                        etc., and save the form. Now the list of invoices is
                        appearing in our Shadobook ERP.
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                {/* <TabPane tab="Purchase Reports" key="tab-k">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurPR.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-k" className={styles.tabheadings1}>
                        Purchase Reports
                      </h3>

                      <p className={styles.para}>
                        Purchase reports are reports that provide detailed
                        information about a company's purchases. These reports
                        provide an overview of vendor purchases, including the
                        cost, quantity purchased, and any discounts received.
                        They are commonly used to keep track of spending, ensure
                        accurate budgeting, and analyze purchasing trends.
                      </p>
                    </Col>
                  </Row>
                </TabPane> */}

                <TabPane tab="Settings" key="tab-l">
                  <Row>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 1,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 1,
                      }}
                      xxl={{
                        span: 11,
                        offset: 0,
                      }}
                    >
                      <img
                        className={styles.tabimg}
                        alt="Agon"
                        src="assets/imgs/page/about/4/PurSET.png"
                      />
                    </Col>
                    <Col
                      xs={{
                        span: 24,
                        offset: 0,
                      }}
                      lg={{
                        span: 10,
                        offset: 3,
                      }}
                      md={{
                        span: 22,
                        offset: 2,
                      }}
                      sm={{
                        span: 22,
                        offset: 1,
                      }}
                      xl={{
                        span: 10,
                        offset: 3,
                      }}
                      xxl={{
                        span: 9,
                        offset: 0,
                      }}
                    >
                      <h3 id="tab-l" className={styles.tabheadings1}>
                        Settings
                      </h3>

                      <p className={styles.para}>
                        The preferences and parameters used to customize the
                        purchasing process are referred to as settings in
                        purchase. Setting up purchase options, units, approval,
                        commodity group, subgroup, vendor category, permissions,
                        order return, and currency rates are all part of this.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>

        <Col span={24}>
          <h2 className={styles.headings3}>Benefits</h2>
        </Col>

        <Row>
          <Col
            xs={{
              span: 24,
              offset: 0,
            }}
            lg={{
              span: 10,
              offset: 1,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{
              span: 12,
              offset: 0,
            }}
          >
            <p className={styles.subpara}>
              1. Increased customer satisfaction: With a CRM system, you can
              track customer interactions, anticipate customer needs, and
              respond quickly. This will increase customer satisfaction and
              loyalty.
              <br></br>
              <br></br>
              2. Increased sales: A CRM system aids in the identification and
              tracking of leads and sales opportunities, making it easier to
              close deals and increase sales.
              <br></br>
              <br></br>
              3. Streamlined processes: A CRM system can automate manual
              processes such as report generation, invoice creation, and
              notification sending. This will aid in the elimination of
              time-consuming and tedious tasks, freeing up staff for more
              productive tasks.
              <br></br>
              <br></br>
              4. Improved analytics: A CRM system can provide valuable insights
              into customer behaviour and preferences, enabling you to make
              data-driven decisions.
              <br></br>
              <br></br>
              5. Improved collaboration: A CRM system provides a centralised
              database that allows teams to collaborate on customer-related
              tasks, thereby assisting in the completion of these tasks.
            </p>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 2,
            }}
            lg={{
              span: 10,
              offset: 3,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 3,
            }}
            xxl={{
              span: 6,
              offset: 4,
            }}
          >
            <img
              className={styles.paraimg}
              alt="Agon"
              src="assets/imgs/page/homepage4/purvec.jpg "
            />
          </Col>
        </Row>

        <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Purchase;

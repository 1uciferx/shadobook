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
                span: 24,
                offset: 0,
              }}
              sm={{
                span: 24,
                offset: 0,
              }}
              md={{
                span: 24,
                offset: 0,
              }}
              xl={{
                span: 24,
                offset: 0,
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
                        offset: 0,
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
                        <li>• Click the "items" tab in the purchase module of Shadobook ERP</li>
                        <br></br>
                        <li>• A list of items will display</li>
                        <br></br>
                        <li>• Enter details such as the commodity code, name, warehouse name, unit name, etc. </li>
                        <br></br>
                        <li>• According to the details provided in the form, an items file will be shown on the items page.</li>
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
                      <li>• Go to the purchase module in Shadobooks ERP.</li>
                        <br></br>
                        <li>• Select "purchase request".</li>
                        <br></br>
                        <li>• View the list of submitted purchase requests. </li>
                        <br></br>
                        <li>• To create a new request, click the "new request" tab.</li>
                        <br></br>
                        <li>• Enter details such as request code, name, department, request time, etc..</li>
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
                      <li>• A page displaying a list of vendors and their products is available.</li>
                        <br></br>
                        <li>• The date the page was created is also visible.</li>
                        <br></br>
                        <li>• The option to add vendors, group items, and individual items is provided on the page in Shadobook ERP. </li>
                        
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
                      <li>• A window displaying a list of quotations is available in Shadobook ERP.</li>
                        <br></br>
                        <p>To create a new estimate:</p>
                     
                        <li>• Go to the "New" tab.</li>
                        <br></br>
                        <li>• Enter details such as estimate number, amount, purchase request, date, etc. </li>
                        <br></br>
                        <li>• Save the form.</li>
                        <br></br>
                        <li>• The list of quotations can now be viewed in the window. </li>
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
                   
                        <p>To view purchase orders in Shadobook ERP:</p>
                     
                        <li>• Go to the purchase module, Click "purchase order".</li>
                        <br></br>
                        <p>Two types of tabs are available:</p>
                        <li>• "New" tab for creating a new purchase order, "PO voucher" tab for viewing existing purchase orders </li>
                        <br></br>
                        <p>To create a new purchase order:</p>
                        <li>• Enter details such as purchase order number, vendor, date, department, PO value, etc and Save the form.</li>
                        <br></br>
                        <li>• The list of purchase orders can now be viewed in the "PO voucher" tab. </li>
                        
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

                      <li>• Go to the purchase module in Shadobook ERP to view the list of order returns.</li>
                        <br></br>
                        <li>• Clicking the order return button displays the list of order returns</li>
                        <br></br>
                        <p>To create a new order return:</p>
                        <li>• Click the new tab, Enter details such as the order return number, vendor, total amount, discount total, total after discount, date created, status, etc.</li>
                        <br></br>
                        <li>• Save the form, The newly created order return will be available in list form.</li>
                       
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
                      <p>To view contracts in Shadobook ERP:</p>
                     
                     <li>• Go to the purchase module, Click "contracts"</li>
                     <br></br>
                     <li>• The list of contracts will appear </li>
                     <br></br>
                     <p>To create a new contract:</p>
                     <li>• Click the "new" tab, Enter details such as department, project, service category, vendors, contract description, contract value, payment amount, payment cycle, payment terms</li>
                     <br></br>
          
                     <li>• save the form, The list of debit notes can now be viewed in the debit note tab.</li>
                    
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
                      <li>• In Shadobook ERP, debit notes can be created and viewed</li>
                     <br></br>
                     <p>To create a new debit note:</p>
                     <li>• Go to the purchase module, Click on "debit note", Click on "new tab"</li>
                     <br></br>
                     <li>• Enter details such as debit note number, debit note date, vendors, status, amount, remaining amount etc..., Save the form</li>
                     <br></br>
                     <li>• The list of debit notes can now be viewed in the debit note tab.</li>
                    
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
                      <li>A window displaying a list of invoices created is available in Shadobook ERP</li>
                     <br></br>
                     <p>To create a new Invoice:</p>
                     <li>• Go to the purchase module, Click on the invoice tab, Go to the new tab</li>
                     <br></br>
                     <li>• Enter details such as invoice number, vendors, contracts, purchase order, invoice date, invoice amount etc..., Save the form</li>
                     <br></br>
                     <li>• The list of invoices can now be viewed in the invoice tab in Shadobook ERP.</li>
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
                      <li>• In purchase, settings refer to preferences and parameters used to customize the purchasing process.</li>
                      <br></br>
                      <li>• Setting up purchase options, units, approval, commodity group, subgroup, vendor category, permissions, order return, and currency rates are all part of the settings.</li>
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

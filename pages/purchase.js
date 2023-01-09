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
import { Breadcrumb,} from "antd";
const { Content } = L;
import { BackTop } from "antd";
import { Carousel } from "antd";
import { render } from "react-dom";
import styles from "../styles/Purchase.module.css";
import { Tabs } from "antd";
import { Button, Space } from 'antd'



const { TabPane } = Tabs;

const style = {
  wrap: {
    fontFamily: "sans-serif",
  },
};

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Purchase() {
  const [isOpen, setOpen] = useState(false);

  const contentStyle = {
    height: "500px",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <>
      <Layout>
        <Content className="site-layout" style={{ padding: "10px 100px" }}>
          <Breadcrumb style={{ margin: "16px 0", fontWeight: "bold" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Features</Breadcrumb.Item>
            <Breadcrumb.Item>Purchase</Breadcrumb.Item>
          </Breadcrumb>

          <div style={{ marginTop: "50px" }}>
            <h1 className={styles.headings}>Purchase</h1>
          </div>
        </Content>

        {/* image slider */}

        <Content className="site-layout" style={{ marginTop: "50px"}}>
          <div>
            <Row >
              <Col span={24}>
                <Carousel autoplay effect="fade">
                  <div>
                    <h3 style={contentStyle}>
                      {" "}
                      <img
                        className="imglen"
                        alt="Agon"
                        src="assets/imgs/page/homepage4/cov1.jpg " 
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
        </Content>

       
          <Col span={24}>
            <div className={styles.paraparent}>
         
            <p className={styles.para}>
            Bring the very best out of your customer-facing teams with
                      robust automation, comprehensive analytics, personalized
                      solutions, and more. Sign up and get started in no
                      time the fastest implementation in the enterprise CRM
                      market.
            </p>
            </div>
          </Col>
     

          <div style={style.wrap}>
            <Tabs
              tabBarStyle={{
                color: "#90331c",
                fontWeight: "bold",
                marginLeft: "100px",
              }}
            >
              <TabPane
                tab="Items"
                key="tab-a"
                style={{ ":hover": { color: "red" } }}
              >
                <Row style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/LM.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3 id="tab-a" className={styles.tabheadings1}>
                      Items
                    </h3>
                    <p className={styles.para}>
                      Bring the very best out of your customer-facing teams with
                      robust automation, comprehensive analytics, personalized
                      solutions, and more. Sign up and get started in no
                      time—the fastest implementation in the enterprise CRM
                      market.
                    </p>
                    <Space><Button style={{color:"#90331c"}}>Learn More</Button></Space>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Purchase Request" key="tab-d">
                <Row style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/projects.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3 id="tab-d" className={styles.tabheadings1}>
                      Purchase Request
                    </h3>
                    <p className={styles.para}>
                      Customer feedback management aids in managing better
                      relationships with your clients by resolving all their
                      queries in a fast manner. This will help you offer quick
                      issue resolution.
                    </p>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Vendor-Items" key="tab-c">
                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/support.jpg "
                      style={{
                      
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3 id="tab-c" className={styles.tabheadings1}>
                      Vendor-Items
                    </h3>
                    <p className={styles.para}>
                      Shadobooks CRM helps you with a separate area to store,
                      manage and access all your ideas from anywhere and at any
                      time.
                    </p>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Quotations" key="tab-e">
                <Col span={24}></Col>

                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/sw.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3
                      id="tab-e"
                      className={styles.tabheadings1}
                     
                    >
                      Quotations
                    </h3>
                    <p className={styles.para}>
                      Be it exploring different perspectives in any areas like
                      clients, servicing, dealing with prospects or potential
                      strategic partnerships, mind maps can prove to be an
                      effective tool for enhancing collaboration among teams.
                    </p>
                  </Col>
                </Row >
              </TabPane>
              <TabPane tab="Purchase Order" key="tab-f">
                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/LM.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3
                      id="tab-f"
                      className={styles.tabheadings1}
                     
                    >
                      Purchase Order
                    </h3>
                    <p className={styles.para}>
                      All your vendor list is updated here along with all the
                      associated details like your purchases, pricing, overdue,
                      invoice details, profile summary and their contact list.
                    </p>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Order Returns" key="tab-g">
                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/LM.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3
                      id="tab-g"
                      className={styles.tabheadings1}
                      
                    >
                      Order Returns
                    </h3>
                    <p className={styles.para}>
                      Shadobook offers an elaborate portal for complete tracking
                      of asset movements across your enterprise, request
                      management and also ensure compliance through periodical
                      audits.
                    </p>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Contracts" key="tab-h">
                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/LM.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3
                      id="tab-h"
                      className={styles.tabheadings1}
                    
                    >
                      Contracts
                    </h3>
                    <p className={styles.para}>
                      You can easily maintain, monitor, and manage business
                      assets along with maintenance reporting, audit compliance,
                      licenses management and also asserting depreciation
                      values.
                    </p>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Debit Notes" key="tab-i">
                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/LM.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3
                      id="tab-i"
                      className={styles.tabheadings1}
                    
                    >
                      Debit Notes
                    </h3>
                    <p className={styles.para}>
                      Shadobook CRM helps you with a thorough platform which
                      enables you to generate extensive reports according to
                      your requirements.
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Invoices" key="tab-j">
                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/LM.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3
                      id="tab-j"
                      className={styles.tabheadings1}
                      
                    >
                      Invoices
                    </h3>
                    <p className={styles.para}>
                      The interface offers detailed report generation pertaining
                      to the areas of sales, invoices, items, payments, credit
                      notes, proposals, estimates, and HR payroll reports.
                    </p>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Purchase Reports" key="tab-k">
                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/LM.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3 id="tab-k" className={styles.tabheadings1}>
                      Purchase Reports
                    </h3>

                    <p className={styles.para}>
                      All this detailed record keeping will help you with
                      simpler organization and in deriving insightful
                      understanding that can help you drive towards better
                      business goals.
                    </p>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Settings" key="tab-l">
                <Row  style={{ marginTop: "50px" }}>
                  <Col span={12}>
                    <img
                      className="img-freeze"
                      alt="Agon"
                      src="assets/imgs/page/homepage4/LM.jpg "
                      style={{
                        height: "400px",
                        maxWidth: "130%",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ marginTop: "120px" }}>
                    <h3 id="tab-l" className={styles.tabheadings1}>
                      Settings
                    </h3>

                    <p className={styles.para}>
                      There are also charts that are generated with the data
                      inputs for aiding better visualization of all your crucial
                      metrics like income, revenues, payment and
                      customer-related analysis.
                    </p>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
    

       
          <Col span={24}>
            <h2 className={styles.headings3}>Benefits</h2>
          </Col>

          <Row  >
            <Col xs={{
                    span: 22,
                    offset: 2,
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
                  }}>
              <p className={styles.subpara}>
                Shadobooks focuses on making your procurement process happen
                seamlessly and also easily identify the value of each vendor.
              </p>
            </Col>

            <Col xs={{
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
                  span: 9,
                  offset: 0,
                }}>
              <img
                className={styles.paraimg}
                alt="Agon"
                src="assets/imgs/page/homepage4/LM.jpg "
               
              />
            </Col>
          </Row>
      
      </Layout>
    </>
  );
}

export default Purchase;

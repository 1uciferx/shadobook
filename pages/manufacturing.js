/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Footer from "../components/layout/Footer";
import { Link as _link } from "next/link";
import React, { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import Tabcon from "../components/tabs";
import styles from "../styles/Manufacturing.module.css";
import { Carousel, Radio } from "antd";
import { Anchor, Col, Row } from "antd";
const { Link } = Anchor;
import { Layout as L } from "antd";
import { Breadcrumb } from "antd";
import { Tabs } from "antd";
import Contactmanager from "../components/contactmanager";
const { Content } = L;
const { TabPane } = Tabs;

function Fixed() {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  const [top, setTop] = useState(100);
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
            <Breadcrumb>
              <Breadcrumb>
                <Breadcrumb.Item>
                  {" "}
                  <a href="/#">Home</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/#">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/manufacturing">Manufacturing</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
        </Col>

        {/* hero section */}

        <h1 className={styles.headings}>Manufacturing</h1>

        <Row>
          <Col
            xs={{
              span: 24,
              offset: 2,
            }}
            lg={{
              span: 9,
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
              span: 9,
              offset: 1,
            }}
          >
            <h6 className={styles.subhead}>
              "Connecting Your Manufacturing <br></br>Bussiness to Success"
            </h6>
            <p className={styles.para}>
              The manufacturing section comes with a statistical dashboard that
              offers a graphical representation of your manufacturing orders in
              terms of the measures and period. This also comes with
              feature-rich options like product management, product variants,
              bills of materials and routing.
            </p>
          </Col>

          <Col
            xs={{
              span: 24,
              offset: 2,
            }}
            lg={{
              span: 12,
              offset: 2,
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
              span: 11,
              offset: 0,
            }}
          >
            <img
              alt="Agon"
              src="assets/imgs/page/homepage4/manufacturing.jpg "
              className={styles.heroimg}
            />
          </Col>
        </Row>

        {/* dashboard */}

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 22,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 1,
          }}
        >
          <h1 className={styles.headings2}>Dashboard</h1>
        </Col>
        <Col
          xs={{
            span: 22,
            offset: 2,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 23,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 0,
          }}
          xl={{
            span: 22,
            offset: 0,
          }}
          xxl={{
            span: 22,
            offset: 1,
          }}
        >
          <div className={styles.dashboardcenter}>
          <p className={styles.paracenter}>
           <li>In Shadobook ERP, go to the manufacturing module and select the dashboard.</li>
           <br></br>
           <li>On the dashboard, graphical representation of data such as manufacturing orders, work orders, and work centers can be viewed.</li>
          </p>
          </div>
        </Col>

        <Row>
          <Col
            xs={{
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
            }}
          >
            <img
              alt="Agon"
              src="assets/imgs/page/about/6/ManuDB.png"
              className={styles.imgcon}
            />
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
              span: 9,
              offset: 0,
            }}
          >
            <h6 className={styles.subhead}>
              "Bringing Efficiency to Manufacturing - The Power of CRM!"
            </h6>
            <p className={styles.para}>
              A manufacturing dashboard  can provide valuable insights into
              production processes and product sales. It can help manufacturers
              optimize their processes, track product performance and customer
              satisfaction, and identify areas for improvement.
            </p>
          </Col>
        </Row>

        {/* dashboard heading */}

        <h1 className={styles.headings3}>Manufacturing Benefits</h1>

        <Row>
          <Col
            xs={{
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
              span: 10,
              offset: 0,
            }}
          >
            <img
              alt="Agon"
              src="assets/imgs/page/homepage4/manubenevec.jpg "
              className={styles.conimgone}
            />
            <p className={styles.para2}>
              1. Increased customer satisfaction : CRM helps to improve customer
              service by providing a 360-degree view of customer data and making
              it easier to respond quickly to customer inquiries.<br></br>
              <br></br>
              2. Improved customer loyalty : By knowing customers better, CRM
              helps companies to improve customer loyalty by tailoring products
              and services to meet customer needs.<br></br>
              <br></br>
              3. Improved customer acquisition: CRM helps to capture leads and
              opportunities more quickly and efficiently, allowing companies to
              respond faster to customer inquiries.
            </p>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 2,
            }}
            lg={{
              span: 10,
              offset: 2,
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
              span: 10,
              offset: 0,
            }}
          >
            <img
              alt="Agon"
              src="assets/imgs/page/homepage4/manubenevec2.jpg "
              className={styles.conimgtwo}
            />

            <p className={styles.para3}>
              4. Streamlined processes: CRM helps to streamline many processes
              such as order management, inventory management, and customer
              service.<br></br>
              <br></br>
              5. Increased efficiency in customer communications: CRM makes it
              easier to stay in touch with customers by automating emails,
              notifications, and other communications.<br></br>
              <br></br>
              6. Improved customer insights: CRM helps to capture customer data
              and insights that can be used to create better customer
              experiences and improve marketing campaigns.
            </p>
          </Col>
        </Row>

        {/* modules side bar */}

        <div className={styles.tabs}>
          <Tabs tabPosition="right">
            <TabPane tab="Products" key="1">
              <Row>
                <Col
                  xs={{
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
                  }}
                >
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/about/6/ManuPM.png"
                  />
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
                    span: 9,
                    offset: 0,
                  }}
                >
                  <h4 className={styles.subhead2}>Products</h4>
                  <p className={styles.para}>
                  To add products in Shadobook ERP:
                  <br></br>
                  <br></br>
                    <li>• Go to the manufacturing module</li>
                    <br></br>
                    <li>• Select products</li>
                    <br></br>
                    <p>To add a new product:</p>
                    <br></br>
                    <li>• Enter details such as its name, image, sale price, cost, product category, product type, quantity, unit name, etc.</li>
                    <br></br>
                    <li>• Click the save button</li>

                    <li>• The list of all generated products can be viewed in the products tab in Shadobook ERP.</li>


                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Products Varients" key="2">
              <Row>
                <Col
                  xs={{
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
                  }}
                >
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/about/6/ManuPVM.png"
                  />
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
                    span: 9,
                    offset: 0,
                  }}
                >
                  <h4 className={styles.subhead2}>Products Varients</h4>
                  <p className={styles.para}>
                  In Shadobook ERP, the product variant management feature allows users to:
                  <br></br>
                  <br></br>
                    <li>• Filter data by selecting the product, product type, and product category.</li>
                    <br></br>
                    <li>• View the filtered data in the form of a list.</li>
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Bills of Materials" key="3">
              <Row>
                <Col
                  xs={{
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
                  }}
                >
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/about/6/ManuBOM.png"
                  />
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
                    span: 9,
                    offset: 0,
                  }}
                >
                  <h4 className={styles.subhead2}>Bills of Materials</h4>
                  <p className={styles.para}>
                  <li>• The Bills of Material page allows you to add a new bill by providing information such as the product, BOM code, BOM type, product variant, quantity, unit, and routing.</li>
                    <br></br>
                    <li>• Once the details are entered, you can save the bill by clicking the save button.</li>
                    <br></br>
                    <li>• The bills are then displayed in a list format in the shadobook ERP.</li>
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Routings" key="4">
              <Row>
                <Col
                  xs={{
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
                  }}
                >
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/about/6/ManuRoutings.png"
                  />
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
                    span: 9,
                    offset: 0,
                  }}
                >
                  <h4 className={styles.subhead2}>Routings</h4>
                  <p className={styles.para}>
                  <li>• In Shadobook ERP, it is possible to create a new route by providing information such as the routing code, routing name, and notes.</li>
                    <br></br>
                    <li>• Once the details are entered, you can save the route by clicking the save button.</li>
                    <br></br>
                    <li>• The created routes will then be displayed in a list format in the ERP.</li>
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Work Centers" key="5">
              <Row>
                <Col
                  xs={{
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
                  }}
                >
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/about/6/ManuWC.png"
                  />
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
                    span: 9,
                    offset: 0,
                  }}
                >
                  <h4 className={styles.subhead2}>Work Centers</h4>
                  <p className={styles.para}>
                  <li>• In this window, there is an option to add a new work center by clicking the "add work center" button.</li>
                    <br></br>
                    <li>• To create a new work center, you need to provide details such as the work center name, code, working hours, capacity, etc.</li>
                    <br></br>
                    <li>• After providing the details, you can save the work center by clicking the "save" button.</li>
                    <br></br>
                    <li>• The created work center details will then be displayed in a list format in Shadobook ERP.</li>
                    
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Manufacturing Orders" key="6">
              <Row>
                <Col
                  xs={{
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
                  }}
                >
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/about/6/ManuMO.png"
                  />
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
                    span: 9,
                    offset: 0,
                  }}
                >
                  <h4 className={styles.subhead2}>Manufacturing Orders</h4>
                  <p className={styles.para}>
                  <li>• In the Shadobook ERP, the manufacturing module has the option to add new manufacturing orders.</li>
                    <br></br>
                    <li>• To create a new order, you need to click the add button and enter details such as the product, bill of materials, quantity, unit, routing, and status.</li>
                    <br></br>
                    <li>• Once all the details are entered, you can save the order by clicking the save button.</li>
                    <br></br>
                    <li>• The generated orders will then be displayed in a list format in the manufacturing module.</li>
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Work Orders" key="7">
              <Row>
                <Col
                  xs={{
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
                  }}
                >
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/about/6/ManuWO.png"
                  />
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
                    span: 9,
                    offset: 0,
                  }}
                >
                  <h4 className={styles.subhead2}>Work Orders</h4>
                  <p className={styles.para}>
                  <li>• In Shadobook ERP, the manufacturing module has the option to display work orders.</li>
                    <br></br>
                    <li>• By clicking the work order button, you can filter the orders by selecting criteria such as the manufacturing order, product, and status.</li>
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Settings" key="8">
              <Row>
                <Col
                  xs={{
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
                  }}
                >
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/about/6/ManuSET.png"
                  />
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
                    span: 9,
                    offset: 0,
                  }}
                >
                  <h4 className={styles.subhead2}>Settings</h4>
                  <p className={styles.para}>
                  <li>• In manufacturing, the preferences and parameters used to customize the manufacturing process are known as settings.</li>
                    <br></br>
                    <li>• Setting up working hours, units of measure categories, unit of measure, and general settings are all part of this.</li>
                  </p>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>

        <div className={styles.mobiletab}>
          <Tabcon />
        </div>

        <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Fixed;

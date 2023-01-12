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
          <p className={styles.paracenter}>
            In shadobook ERP, when clicking the manufacturing module, select the
            dashboard. Here we can see the graphical representation of data such
            as manufacturing orders, work orders, and work centers.
          </p>
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
                    To add products, click the manufacturing module, then select
                    products. Here, we can add a new product by entering the
                    details such as its name, image, sale price, cost, product
                    category, product type, quantity, unit name, etc., and
                    clicking the save button. In shadobook ERP, all of the
                    generated products appear in a list view.
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
                  In Shado Book ERP, the product variant management has the option to filter the data by selecting the product, product type, and product category, and it is displayed in the form of a list.
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
                  On the Bills of Material page, we have the option to add a new bill by entering the details such as product, BOM code, BOM type, product variant, quantity, unit,routing and clicking the save button. Here, bills are displayed in list form in the shadobook ERP.
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
                  In Shadobook ERP, we have the option to add a new route by entering the details such as routing code, routing name, and notes, and then clicking the save button. Now the created lists are displayed in list form.
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
                  In this window, we have the option to add a work centre by clicking the "add work center" button and entering the details such as the work centre name, code, working hours, capacity, etc., and then clicking the "save" button to save the work centre details. Now the generated details will display in list form in Shadobook ERP.
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
                  The Shadobook ERP, the manufacturing module, has the option to add the manufacturing orders by clicking the add button, and then enter all the details such as product, bill of materials, quantity, unit, routing, and status, and click the save button so the generated orders are displayed as a list.
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
                  In Shadobook ERP, the manufacturing module has the option to show the work orders. By clicking the work order, we can filter the orders by selecting the manufacturing order, product, and status.
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
                    The preferences and parameters used to customize the
                    manufacturing process are referred to as settings in
                    manufacturing. Setting up working hours, Units of measure
                    catagories, Unit of measure and general settings are all
                    part of this.
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

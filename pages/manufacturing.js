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
            <Breadcrumb style={{ fontWeight: "bold" }}>
              <Breadcrumb>
                <Breadcrumb.Item>Index</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Manufacturing</a>
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
              span: 22,
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
              we are a woldwide corporate brand
            </h6>
            <p className={styles.para}>
              The manufacturing section comes with a statistical dashboard that
              offers a graphical representation of your manufacturing orders in
              terms of the measures and period.
            </p>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 1,
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
            offset: 1,
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
            The manufacturing section comes with a statistical dashboard that
            offers a graphical representation of your manufacturing orders in
            terms of the measures and period.
            Bring the very best out of your teams with robust automation,
            comprehensive analytics, personalized solutions, and more. Sign up
            and get started in no time—the fastest implementation in the
            enterprise CRM market.
          </p>
        </Col>

      
          <Row >
            <Col  xs={{
                    span: 22,
                    offset: 1,
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
                    offset: 1,
                  }}>
           
                <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/objective1.png "
                 className={styles.imgcon}
                />
          
            </Col>

            <Col xs={{
                    span: 22,
                    offset: 1,
                  }}
                  lg={{
                    span: 10,
                    offset: 2,
                  }}
                  md={{
                    span: 20,
                    offset: 2,
                  }}
                  sm={{
                    span: 22,
                    offset: 1,
                  }}
                  xl={{
                    span: 10,
                    offset: 2,
                  }}
                  xxl={{
                    span: 7,
                    offset: 0,
                  }}>
          
                <h6 className={styles.subhead}>
                  The manufacturing section comes with a statistical dashboard
                </h6>
                <p className={styles.para}>
                  The manufacturing section comes with a statistical dashboard
                  that offers a graphical representation of your manufacturing
                  orders in terms of the measures and period.
                </p>
          
            </Col>
          </Row>
  

        {/* dashboard heading */}

   
            <h1 className={styles.headings3}>Dashboard Benefits</h1>
        
          <Row >
            <Col xs={{
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
                    span: 10,
                    offset: 1,
                  }}>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/manufacturing.jpg "
               className={styles.conimgone}
              />
              <p className={styles.para2}>
                The manufacturing section comes with a statistical dashboard
                that offers a graphical of your manufacturing orders in terms of
                the measures and period. The manufacturing section comes with a
                statistical dashboard that offers a graphical of your
                manufacturing orders in terms of the measures and period.
              </p>
            </Col>

            <Col xs={{
                    span: 24,
                    offset: 0,
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
                    offset: 2,
                  }}
                  xxl={{
                    span: 10,
                    offset: 2,
                  }}>
            
                <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/manufacturing.jpg "
                  className={styles.conimgtwo}
                />

                <p className={styles.para3}>
                  The manufacturing section comes with a statistical dashboard
                  that offers a graphical representation of your
                  manufacturing orders in terms of the measures and period.
                  The manufacturing section comes with a statistical
                  dashboard that offers a graphical of your
                  manufacturing orders in terms of the measures and period.
                </p>
           
            </Col>
          </Row>
  

        {/* modules side bar */}

        <div className={styles.tabs}>
          <Tabs tabPosition="right">
            <TabPane tab="Products" key="1">
              <Row>
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
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/ban5.jpg "
                  
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
                    This section of the CRM helps you create forms that can be
                    integrated into your website. These forms enable the user to
                    get in touch with you and request an estimate about your
                    services of yours that they’re looking to avail of.
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Products Varients" key="2">
              <Row>
                <Col  xs={{
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
                  <img
                     className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/ban1.jpg "
                   
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
                    The estimate feature will give you the option to customize
                    the form that is tailored to give you a better understanding
                    of the customer intent. The CRM will enable assigning this
                    influx of requests to specific teams and employees.
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Bills of Materials" key="3">
              <Row>
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
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/mm.jpg "
                  
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
                    The estimated requests can then be created here according to
                    the details you have received and later send it to the
                    respective clientele while also keeping a track of all your
                    touch points.
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Routings" key="4">
              <Row>
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
                  <img
                    className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/suppliers1.png "
                   
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
                    Shadobook CRM helps you with a thorough platform which
                    enables you to generate extensive reports according to your
                    requirements.
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Work Centers" key="5">
              <Row>
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
                  <img
                   className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/pr.jpg "
                
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
                    The interface offers detailed report generation pertaining
                    to the areas of sales, invoices, items, payments, credit
                    notes, proposals, estimates, and HR payroll reports.
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Manufacturing Orders" key="6">
              <Row>
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
                  <img
                   className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/ban3.jpg "
                    style={{ marginLeft: "50px" }}
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
                    There are also charts that are generated with the data
                    inputs for aiding better visualization of all your crucial
                    metrics like income, revenues, payment and customer-related
                    analysis.
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Work Orders" key="7">
              <Row>
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
                  <img
                   className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/ban2.jpg "
                    
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
                    All this detailed record keeping will help you with simpler
                    organization and in deriving insightful understanding that
                    can help you drive towards better business goals.
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Settings" key="8">
              <Row>
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
                  <img
                 className={styles.tabimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/objective1.png "
                  
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
                    With Shadobooks, you can track, manage and strategies your
                    spending as they happen with the real-time expense tracking
                    solution that it offers.
                  </p>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>

        <div className="styles.mobiletab">
        <Tabcon/>
        </div>

        <Footer />
      </Layout>
    </>
  );
}

export default Fixed;

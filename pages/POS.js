/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import styles from "../styles/POS.module.css";
import { Col, Row } from "antd";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import Zoom from "react-reveal/Zoom";
import Contactmanager from "../components/contactmanager";
import { Layout as L} from 'antd';

import { Breadcrumb } from 'antd';

const { Content} = L;
function POS() {
  return (
    <>
      <Layout>

        <div
          style={{
            backgroundImage: `url(/assets/imgs/page/homepage4/ban4.jpg)`,
            backgroundSize: "cover",
            height: "400px",
            width: "100%",
          }}>
        


<Col className={styles.breasdcrumb}
          xs={{
            span: 22,
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
          }}>

          <Content  >
            <Breadcrumb>
              <Breadcrumb >
                <Breadcrumb.Item  >Index</Breadcrumb.Item>
                <Breadcrumb.Item >
                  <a href="/#"  >Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/" >Point Of Sales</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
        </Col>


          <Row>
            <Col span={24}>
              <h3 className={styles.headings}>Point Of Sales</h3>
              <p className={styles.parahead}>
                "Shop with us for unbeatable savings!"
              </p>
            </Col>
          </Row>
        </div>

        {/* magic2 Content */}

        <div className="my-thing">
          <Row>
            <Col
             xs={{
              span: 17,
              offset: 1,
            }}
            lg={{
              span: 9,
              offset: 1,
            }}
            md={{
              span: 16,
              offset: 2,
            }}
            sm={{
              span: 17,
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
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/about/8/POSOL.png"
               
              />
            </Col>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 18,
                offset: 3,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 4,
              }}
              xxl={{
                span: 8,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Order List</h3>

              <Zoom>
              <p className={styles.para}>
                To create an order, go to the point of sale module in Shadobook ERP
                <br></br>
                <br></br>
                  <li>
                       Click the "Order List" option
                  </li>
                  <br></br>

                  <li>
                      In the window that opens, click the "Create Order" tab
                  </li>
                  <br></br>

                  <li>
                      To create a return order, click the "Create Return Order" tab
                  </li>
                  <br></br>

                  <li>
                       Enter details such as the order return number, sales order, phone number, order date, customer, etc.
                  </li>
                  <br></br>

                  <li>
                      Click the save button
                  </li>
                  <br></br>

                  <li>
                      The order list will now be visible in list view
                  </li>
                  <br></br>


              </p>
              </Zoom>
            </Col>
          </Row>
        </div>

        <div className="my-thing">
          <Row>
            <Col
              xs={{
                span: 17,
                offset: 1,
              }}
              lg={{
                span: 9,
                offset: 1,
              }}
              md={{
                span: 16,
                offset: 2,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 1,
              }}
              xxl={{
                span: 9,
                offset: 2,
              }}
            >
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/about/8/Productsetup.png"
               
              />
            </Col>
            <Col
               xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 18,
                offset: 3,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 4,
              }}
              xxl={{
                span: 8,
                offset: 3,
              }}
            >
              <h3 className={styles.tabheadings1}>Products Setup</h3>

              <Zoom>
              <p className={styles.para}>
                <li>
                     ERP in Shadobook offers product setup through POS, Portal, WooCommerce, and Pre-Order channels
                </li>
                <br></br>
                <li>
                     Each channel has separate setting options
                </li>
                <br></br>
                <li>
                     To create a product setup, go to the point of sale module in Shadobook ERP
                </li>
                <br></br>
                <li>
                     Click the "Product Setup" option
                </li>
                <br></br>
                <li>
                     The channels will be visible in this window, and you can select the desired channel to set up the product.
                </li>
                
              </p>
              </Zoom>
            </Col>
          </Row>
        </div>

        <div className="my-thing">
          <Row>
            <Col
             xs={{
              span: 17,
              offset: 1,
            }}
            lg={{
              span: 9,
              offset: 1,
            }}
            md={{
              span: 16,
              offset: 2,
            }}
            sm={{
              span: 17,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{
              span: 9,
              offset: 2,
            }}
            >
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/about/8/POSTD.png"
               
              />
            </Col>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 18,
                offset: 3,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 4,
              }}
              xxl={{
                span: 8,
                offset: 3,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                Trade Discount
              </h3>
              <Zoom>
              <p className={styles.para}>
                <li>
                    In the window, there is an option to create a trade discount.
                </li>
                <br></br>
                <li>
                    There are separate tabs such as Promotions and Vouchers.
                </li>
                <br></br>
                <li>
                    To add a new trade discount, click the "Add New" button in each tab.
                </li>
                <br></br>
                <li>
                    Enter fields such as the trade discount's name, start date, formal discount, etc.
                </li>
                <br></br>
                <li>
                    Click the save button.
                </li>
                <br></br>
                <li>
                     The trade discount list will now be visible in Shadobook ERP.
                </li>
              </p>
              </Zoom>
            </Col>
          </Row>
        </div>

        <div className="my-thing">
          <Row>
            <Col
               xs={{
                span: 17,
                offset: 1,
              }}
              lg={{
                span: 9,
                offset: 1,
              }}
              md={{
                span: 16,
                offset: 2,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 1,
              }}
              xxl={{
                span: 9,
                offset: 2,
              }}
            >
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/about/8/POSDS.png"
             
              />
            </Col>
            <Col
               xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 18,
                offset: 3,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 4,
              }}
              xxl={{
                span: 8,
                offset: 3,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>

                Diary sync
              </h3>
              <Zoom>
              <p className={styles.para}>
                 To get the diary sync in Shadobook ERP, go to the point of sale module
              <br></br>
              <br></br>
            <li>
               Click the "Diary Sync" option
            </li>
            <br></br>
            
               From here, you can access the following list options:
               <br></br>
            <br></br>
            <li>
            Product (from store information + image),Description,Price,Orders and Inventory management
            </li>
            <li>
                Click on each tab to access the relevant information
            </li>
            <br></br>
            <li>
               All information is displayed in list format.
            </li>
              </p>
              </Zoom>
            </Col>
          </Row>
        </div>

        <div className="my-thing">
          <Row>
            <Col
                xs={{
                  span: 17,
                  offset: 1,
                }}
                lg={{
                  span: 9,
                  offset: 1,
                }}
                md={{
                  span: 16,
                  offset: 2,
                }}
                sm={{
                  span: 17,
                  offset: 1,
                }}
                xl={{
                  span: 8,
                  offset: 2,
                }}
                xxl={{
                  span: 8,
                  offset: 2,
                }}
            >
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/about/8/POSMOD.png"
                
              />
            </Col>
            <Col
               xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 18,
                offset: 3,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 5,
              }}
              xxl={{
                span: 8,
                offset: 4,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                POS
              </h3>

              <Zoom>
              <p className={styles.para}>
                   In Shadobook ERP, shift management is maintained in the point of sale module
              <br></br><br></br>
                <li>
                    To access the shift management feature, select the option by clicking on the point of sale module
                </li>
                <br></br>
                <li>
                    To create a new shift, click the "Create Shift" button
                
                </li>
                <br></br>
                <li>
                     Enter the new open shift balance
                </li>
                <br></br>
                <li>
                    Click the "Save" button
                </li>
                <br></br>
                <li>
                    Shift management list can be seen in list format.
                </li>
              </p>
              </Zoom>
            </Col>
          </Row>
        </div>

        <div className="my-thing">
          <Row>
            <Col
               xs={{
                span: 17,
                offset: 1,
              }}
              lg={{
                span: 9,
                offset: 1,
              }}
              md={{
                span: 16,
                offset: 2,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 1,
              }}
              xxl={{
                span: 8,
                offset: 2,
              }}
            >
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/about/8/POSECOM.png"
                
              />
            </Col>
            <Col
               xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 18,
                offset: 3,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 4,
              }}
              xxl={{
                span: 8,
                offset: 0,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                E-Commerce
              </h3>
              <Zoom>
              <p className={styles.para}>
              Shadobook ERP has an E-commerce option for conducting business through an online store
              <br></br>
              <br></br>

                <li>
                  Shadobook ERP has an E-commerce option for conducting business through an online store
                </li>
                <br></br>
                <li>
                   To access this option, go to the point of sale module
                </li>
                <br></br>
                <li>
                   Select the E-commerce option
                </li>
                <br></br>
               <li>
                   This will open the online store login window to conduct business.
               </li>
              </p>
              </Zoom>
            </Col>
          </Row>
        </div>

        <div className="my-thing">
          <Row>
            <Col
               xs={{
                span: 17,
                offset: 1,
              }}
              lg={{
                span: 9,
                offset: 1,
              }}
              md={{
                span: 16,
                offset: 2,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 1,
              }}
              xxl={{
                span: 8,
                offset: 2,
              }}
            >
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/about/8/POSSET.png"
               
              />
            </Col>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 18,
                offset: 3,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 4,
              }}
              xxl={{
                span: 8,
                offset: 0,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                Settings
              </h3>
              <Zoom>
              <p className={styles.para}>
              Setting in point of sale is the configuration of the system
              </p>
              </Zoom>
            </Col>
          </Row>
        </div>

        <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default POS;

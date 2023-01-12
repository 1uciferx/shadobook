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
          }}
        >
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
                offset: 3,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{
                span: 32,
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
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Order List</h3>

              <Zoom>
              <p className={styles.para}>
                In this window, the Shadobook ERP has the options to create an
                order and create a return order. To create an order, go to the
                point of sale module and click the order list option. In that
                window, we can see the "Create Order" tab. By clicking the tab,
                you can enter the details such as the order number, date,
                customer, order type, receipt method, etc. In the Create Return
                Order tab, we have to enter details such as the order return
                number, sales order, phone number, order date, customer, etc.,
                and then click the save button. Now we can see the order list in
                list view.
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
                offset: 3,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{
                span: 32,
                offset: 1,
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
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Products Setup</h3>

              <Zoom>
              <p className={styles.para}>
                ERP in shadobook offers product setup via the following
                channels: POS, Portal, WooCommerce, and Pre-Order. All channels
                have separate setting options as well. To create a product
                setup, go to the point of sale module, then click the "product
                setup" option. We can see the channels here.
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
                offset: 3,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{
                span: 32,
                offset: 1,
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
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                Trade Discount
              </h3>
              <Zoom>
              <p className={styles.para}>
                In this window, we have the option to create a trade discount
                and separate tabs such as Promotions and Vouchers; in each tab,
                click the add new button, enter all the fields such as the trade
                discount's name, start date, formal discount, and so on, and
                then click the save button.Now you can see the trade discount
                list in Shadobook ERP.
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
                offset: 3,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{
                span: 32,
                offset: 1,
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
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                Diary sync
              </h3>
              <Zoom>
              <p className={styles.para}>
                In Shadobook ERP, to get the diary sync, go to the point of sale
                module in that and click the diary sync option. From here, we
                can get all the list options, such as product (from store
                information + image), description, price, orders, and inventory
                management, by clicking these tabs one by one. All are displayed
                in list format.
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
                offset: 3,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{
                span: 32,
                offset: 1,
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
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                POS
              </h3>

              <Zoom>
              <p className={styles.para}>
                In Shadobook ERP, the shift management is maintained in the
                point of sale module. Select the option by clicking on this
                module.We can create the shift management in POS by clicking the
                "create shift" button, then entering the new open shift balance
                and clicking the "save" button, and we can also see the shift
                management list in list form.
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
                offset: 3,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{
                span: 32,
                offset: 1,
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
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                E-Commerce
              </h3>
              <Zoom>
              <p className={styles.para}>
                In Shadobook ERP, we have the E-commerce option to make a
                business through an online store. To get this option, click the
                point of sale module, and then select the option of e-commerce
                so that we get the online store login window to make a business.
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
                offset: 3,
              }}
              sm={{
                span: 17,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{
                span: 32,
                offset: 1,
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
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 id="tab-e" className={styles.tabheadings1}>
                Settings
              </h3>
              <Zoom>
              <p className={styles.para}>
                Setting in point of sale is the configuration of the system. It
                includes setting up the automatic sync config, order setting,
                and default setting.
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

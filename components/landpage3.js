import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/landpage3.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Col, Row } from "antd";

function Landingpage3() {
  return (
    <>
      <Row>
        {/* container 1 subject */}

        <Col
          xs={{
            span: 12,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 12,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          xl={{
            span: 10,
            offset: 0,
          }}
          xxl={{
            span: 12,
            offset: 1,
          }}
        >
          <h3 className={styles.subhead5}>IT Support Industry</h3>
          <br />
          <p className={styles.subhead4}>
            We offer a variety of products for companies in the IT support
            sector to automate their service desk, manage IT assets, and enhance
            service delivery.
          </p>
        </Col>

        <Col
          xs={{
            span: 6,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 1,
          }}
          sm={{
            span: 6,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 1,
          }}
          xl={{
            span: 10,
            offset: 0,
          }}
          xxl={{
            span: 9,
            offset: 0,
          }}
        >
          <div className={styles.imgplacer}>
            <img
              src="assets/imgs/page/homepage1/tel1.png"
              alt="past meetings"
            />{" "}
          </div>
        </Col>
      </Row>

      {/* container 2 subject */}

      <Row>
        <Col
          xs={{
            span: 6,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 1,
          }}
          sm={{
            span: 6,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 1,
          }}
          xl={{
            span: 10,
            offset: 0,
          }}
          xxl={{
            span: 9,
            offset: 0,
          }}
        >     <div className={styles.imgplacer}>
          <img src="assets/imgs/page/homepage1/tel2.png" alt="shado books" /></div>
        </Col>{" "}
        <Col
          xs={{
            span: 12,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 1,
          }}
          sm={{
            span: 12,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 1,
          }}
          xl={{
            span: 10,
            offset: 1,
          }}
          xxl={{
            span: 12,
            offset: 1,
          }}
        >
          <h3 className={styles.subhead7}>Manufacturing Industry</h3>
          <br />
          <p className={styles.subhead6}>
            In the manufacturing industry, Shadobooks ERP helps businesses
            streamline their production processes, track raw materials, and
            manage the entire supply chain.
          </p>
        </Col>
      </Row>

      <Row>
        {/* container 1 subject */}

        <Col
          xs={{
            span: 12,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 12,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          xl={{
            span: 10,
            offset: 0,
          }}
          xxl={{
            span: 10,
            offset: 1,
          }}
        >
          <h3 className={styles.subhead5}>Retail & Wholesale Industry</h3>
          <br />
          <p className={styles.subhead4}>
            For retailers and wholesalers, our software provides tools for
            managing inventory levels, processing orders, and handling multiple
            store locations.
          </p>
        </Col>

        <Col
          xs={{
            span: 6,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 1,
          }}
          sm={{
            span: 6,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 1,
          }}
          xl={{
            span: 10,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 2,
          }}
        >     <div className={styles.imgplacer}>
          <img src="assets/imgs/page/homepage1/tel3.png" alt="past meetings" /></div>
        </Col>
      </Row>

      {/* container 2 subject */}

      <Row>
        <Col
          xs={{
            span: 6,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 1,
          }}
          sm={{
            span: 6,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 1,
          }}
          xl={{
            span: 10,
            offset: 0,
          }}
          xxl={{
            span: 10,
            offset: 2,
          }}
        >     <div className={styles.imgplacer}>
          <img src="assets/imgs/page/homepage1/tel4.png" alt="shado books" /></div>
        </Col>

        <Col
          xs={{
            span: 12,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 1,
          }}
          sm={{
            span: 12,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 1,
          }}
          xl={{
            span: 10,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 1,
          }}
        >
          <h3 className={styles.subhead7}>Distribution Industry</h3>
          <br />
          <p className={styles.subhead6}>
            In the distribution industry, our ERP helps businesses streamline
            their warehouse operations, optimize their delivery routes, and
            track their sales and purchases.
          </p>
        </Col>
      </Row>

      <Row>
        {/* container 1 subject */}

        <Col
          xs={{
            span: 12,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 12,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          xl={{
            span: 10,
            offset: 0,
          }}
          xxl={{
            span: 10,
            offset: 1,
          }}
        >
          <h3 className={styles.subhead5}>Service Providers</h3>
          <br />
          <p className={styles.subhead4}>
            Shadobooks ERP provides tailored solutions for service businesses
            with its ready-to-use Services and Appointments modules.
          </p>
        </Col>

        <Col
          xs={{
            span: 6,
            offset: 2,
          }}
          lg={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 6,
            offset: 2,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          xl={{
            span: 10,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 3,
          }}
        >     <div className={styles.imgplacer}>
          <img src="assets/imgs/page/homepage1/tel5.png" alt="past meetings" /></div>
        </Col>
      </Row>
    </>
  );
}

export default Landingpage3;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Row } from "antd";
import { Divider } from "antd";
import { Layout as L } from "antd";
import { Breadcrumb, Menu, theme } from "antd";
const { Content } = L;
import { BackTop } from "antd";
import { Carousel } from "antd";
import { render } from "react-dom";
import { Tabs } from "antd";
import styles from "../styles/salestab.module.css";

function Salestabs() {
  return (
    <div>
      <Row>
        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 12,
            offset: 0,
          }}
          md={{
            span: 12,
            offset: 0,
          }}
          sm={{
            span: 22,
            offset: 1,
          }}
          xl={{
            span: 12,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 0,
          }}
          id="1"
        >
          <img
            className={styles.tabimg1}
            alt="Agon"
            src="assets/imgs/page/about/5/SalProposal.png"
          />
        </Col>

        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 9,
            offset: 0,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 9,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 0,
          }}
        >
          <h4 className={styles.headings2}>Proposal</h4>
          <p className={styles.para}>
            To view a proposal in Shadobook ERP, navigate to the sales modules,
            click the new proposal tab, and fill out all of the details such as
            the subject, To Whom, date, projects, and so on. Using the
            information provided in the form, you can view the proposal in the
            form of a list.
          </p>
        </Col>
      </Row>

      <Row>
        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 8,
            offset: 0,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 24,
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
          id="2"
        >
          <h4 className={styles.headings2}>Estimate</h4>
          <p className={styles.para}>
            In Shadobook ERP, navigate to the sales module and select
            "estimate." Click the New Estimate tab and enter all the details,
            such as customer, estimate number, amount, project, date, etc. Using
            the information provided in the form, you can now view the list of
            estimations along with their status.
          </p>
        </Col>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 12,
            offset: 0,
          }}
          md={{
            span: 10,
            offset: 3,
          }}
          sm={{
            span: 22,
            offset: 1,
          }}
          xl={{
            span: 12,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 2,
          }}
        >
          <img
            alt="Agon"
            src="assets/imgs/page/about/5/SalEstimate.png"
            className={styles.tabimg2}
          />
        </Col>
      </Row>

      <Row>
        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 12,
            offset: 0,
          }}
          md={{
            span: 11,
            offset: 0,
          }}
          sm={{
            span: 22,
            offset: 1,
          }}
          xl={{
            span: 12,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 0,
          }}
          id="3"
        >
          <img
            className={styles.tabimg1}
            alt="Agon"
            src="assets/imgs/page/about/5/Salinvoice.png"
          />
        </Col>

        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 9,
            offset: 0,
          }}
          md={{
            span: 11,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 9,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 0,
          }}
        >
          <h4 className={styles.headings2}>Invoice</h4>
          <p className={styles.para}>
            In Shadobooks ERP, we have three types of invoice tabs available:
            create new invoice, batch receipts, and recurring invoices. Go to
            the sales module, "Invoices," to create a new invoice. Click the
            Create New Invoice tab and enter all the details such as customer,
            invoice number, amount, project, date, etc. You can now view a list
            of invoices with their statuses using the information provided in
            the form.
          </p>
        </Col>
      </Row>

      <Row>
        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 8,
            offset: 0,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 24,
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
          id="4"
        >
          <h4 className={styles.headings2}>Receipt</h4>
          <p className={styles.para}>
            In Shadobooks ERP, when clicking the receipt in the sales module,
            you can see the list of receipts with the details such as invoice
            no., receipt mode, transaction id, customer, amount, and date.
          </p>
        </Col>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 12,
            offset: 0,
          }}
          md={{
            span: 10,
            offset: 3,
          }}
          sm={{
            span: 22,
            offset: 1,
          }}
          xl={{
            span: 12,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 2,
          }}
        >
          <img
            alt="Agon"
            src="assets/imgs/page/about/5/SalReceipt.png"
            className={styles.tabimg2}
          />
        </Col>
      </Row>

      <Row>
        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 12,
            offset: 0,
          }}
          md={{
            span: 12,
            offset: 0,
          }}
          sm={{
            span: 22,
            offset: 1,
          }}
          xl={{
            span: 12,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 0,
          }}
          id="5"
        >
          <img
            className={styles.tabimg1}
            alt="Agon"
            src="assets/imgs/page/about/5/SalCn.png"
          />
        </Col>

        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 9,
            offset: 0,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 9,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 0,
          }}
        >
          <h4 className={styles.headings2}>Credit Notes</h4>
          <p className={styles.para}>
            You can get the list of credit notes in Shadobooks ERP by clicking
            on the sales module, "credit notes," and then "new credit notes."
            Here you can enter all the details such as the credit note number, 
            date,  customer,  status,  amount, remaining amount, etc., and then
            save the form. You can now see a list of credit notes along with
            their status.
          </p>
        </Col>
      </Row>

      <Row>
        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 8,
            offset: 0,
          }}
          md={{
            span: 10,
            offset: 0,
          }}
          sm={{
            span: 24,
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
          id="6"
        >
          <h4 className={styles.headings2}>Items</h4>
          <p className={styles.para}>
            In Shadobook ERP, you can get the list of items by clicking on
            the sales module, "items," and then the "add tab." Here you can
            enter all the details, such as an image, commodity code, commodity
            name, warehouse name, units, etc., and then save the form. You can
            now see a list of items appear in the form of a list.
          </p>
        </Col>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 12,
            offset: 0,
          }}
          md={{
            span: 10,
            offset: 2,
          }}
          sm={{
            span: 22,
            offset: 1,
          }}
          xl={{
            span: 12,
            offset: 1,
          }}
          xxl={{
            span: 10,
            offset: 2,
          }}
        >
          <img
            alt="Agon"
            src="assets/imgs/page/about/5/Salitem.png"
            className={styles.tabimg2}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Salestabs;

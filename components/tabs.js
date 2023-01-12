/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Manufacturing.module.css";
import { Carousel, Radio } from "antd";
import { Anchor, Col, Row } from "antd";
const { Link } = Anchor;

function Tabcon() {
  return (
    <div className={styles.mobtabcom}>
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
            products. Here, we can add a new product by entering the details
            such as its name, image, sale price, cost, product category, product
            type, quantity, unit name, etc., and clicking the save button. In
            shadobook ERP, all of the generated products appear in a list view.
          </p>
        </Col>
      </Row>

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

      <Row>
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
            The preferences and parameters used to customize the manufacturing
            process are referred to as settings in manufacturing. Setting up
            working hours, Units of measure catagories, Unit of measure and
            general settings are all part of this.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Tabcon;

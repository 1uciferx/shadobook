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
          To add products in Shadobook ERP:
                  <br></br>
                  <br></br>
                    <li> Go to the manufacturing module</li>
                    <br></br>
                    <li> Select products</li>
                    <br></br>
                    <p>To add a new product:</p>
                    <br></br>
                    <li> Enter details such as its name, image, sale price, cost, product category, product type, quantity, unit name, etc.</li>
                    <br></br>
                    <li> Click the save button</li>
                    <br></br>
                    <li>The list of all generated products can be viewed in the products tab in Shadobook ERP.</li>
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
          In Shadobook ERP, the product variant management feature allows users to:
                  <br></br>
                  <br></br>
                    <li> Filter data by selecting the product, product type, and product category.</li>
                    <br></br>
                    <li> View the filtered data in the form of a list.</li>
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
          <li> The Bills of Material page allows you to add a new bill by providing information such as the product, BOM code, BOM type, product variant, quantity, unit, and routing.</li>
                    <br></br>
                    <li> Once the details are entered, you can save the bill by clicking the save button.</li>
                    <br></br>
                    <li> The bills are then displayed in a list format in the shadobook ERP.</li>
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
          <li> In Shadobook ERP, it is possible to create a new route by providing information such as the routing code, routing name, and notes.</li>
                    <br></br>
                    <li> Once the details are entered, you can save the route by clicking the save button.</li>
                    <br></br>
                    <li> The created routes will then be displayed in a list format in the ERP.</li>
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
          <li>In this window, there is an option to add a new work center by clicking the "add work center" button.</li>
                    <br></br>
                    <li> To create a new work center, you need to provide details such as the work center name, code, working hours, capacity, etc.</li>
                    <br></br>
                    <li> After providing the details, you can save the work center by clicking the "save" button.</li>
                    <br></br>
                    <li> The created work center details will then be displayed in a list format in Shadobook ERP.</li>
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
          <li> In the Shadobook ERP, the manufacturing module has the option to add new manufacturing orders.</li>
                    <br></br>
                    <li> To create a new order, you need to click the add button and enter details such as the product, bill of materials, quantity, unit, routing, and status.</li>
                    <br></br>
                    <li> Once all the details are entered, you can save the order by clicking the save button.</li>
                    <br></br>
                    <li> The generated orders will then be displayed in a list format in the manufacturing module.</li>
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
          <li> In Shadobook ERP, the manufacturing module has the option to display work orders.</li>
                    <br></br>
                    <li> By clicking the work order button, you can filter the orders by selecting criteria such as the manufacturing order, product, and status.</li>
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
          <li> In manufacturing, the preferences and parameters used to customize the manufacturing process are known as settings.</li>
                    <br></br>
                    <li> Setting up working hours, units of measure categories, unit of measure, and general settings are all part of this.</li>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Tabcon;

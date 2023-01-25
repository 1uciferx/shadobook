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

        <Col>
        <div className={styles.centerimg}>
          <img
            className={styles.tabimg1}
            alt="Agon"
            src="assets/imgs/page/about/5/SalProposal.png"
          />
          </div>
        </Col>

        <Col
         md={{
          span: 20,
          offset: 2,
        }}
        xs={{
          span: 20,
          offset: 2,
        }}>
        <div className={styles.centercon}>
          <h4 className={styles.headings2}>Proposal</h4>
          <p className={styles.para}>
            <li>
              To view a proposal in Shadobook ERP, navigate to the sales module.{" "}
            </li>
            <br></br>
            <li>Click the "New Proposal" tab to create a new proposal. </li>
            <br></br>
            <li>
              Fill out all of the necessary details such as the subject, To
              Whom, date, projects, etc.{" "}
            </li>
            <br></br>
            <li>
              Once the proposal is saved, it will appear in the form of a list
              in the proposal overview page.{" "}
            </li>
            <br></br>
            <li>
              You can view all the proposals in the form of a list in the
              proposal overview page.{" "}
            </li>
            <br></br>
            <li>
              The proposal overview page allows you to filter proposals by date,
              To Whom, and projects.{" "}
            </li>
            <br></br>
            <li>
              You can use the filter option to view a specific proposal or group
              of proposals.{" "}
            </li>
            <br></br>
            <li>
              The proposal overview page allows you to see the progress of all
              the proposals and manage them effectively.{" "}
            </li>
            <br></br>
            <li>
              By using filter options you can see the proposal status, and
              monitor the performance of your team members.{" "}
            </li>
          </p>
          </div>
        </Col>
 

    
        <Col
         md={{
          span: 20,
          offset: 2,
        }}
        xs={{
          span: 20,
          offset: 2,
        }}>
        <div className={styles.centercon}>
          <h4 className={styles.headings2}>Estimate</h4>
          <p className={styles.para}>
            <li>
              In Shadobook ERP, navigate to the sales module and select
              "estimate."{" "}
            </li>
            <br></br>
            <li>Click the "New Estimate" tab to create a new estimate. </li>
            <br></br>
            <li>
              Enter all the necessary details such as customer, estimate number,
              amount, project, date, etc.{" "}
            </li>
            <br></br>
            <li>
              Once the estimate is saved, it will appear in the form of a list
              in the estimate overview page.{" "}
            </li>
            <br></br>
            <li>
              The estimate overview page displays a list of all estimates with
              details such as customer, estimate number, amount, project, date,
              and status.{" "}
            </li>
            <br></br>
            <li>
              You can filter and sort the estimate list by customer, estimate
              number, project, date, and status.{" "}
            </li>
            <br></br>
            <li>
              The estimate overview page allows you to view and manage all the
              estimates in one place.{" "}
            </li>
            <br></br>
            <li>
              It helps to track the progress of all the estimates, and manage
              them effectively.{" "}
            </li>
            <br></br>
            <li>
              By using filter options you can see the estimate status, and
              monitor the performance of your team members.{" "}
            </li>
            <br></br>
            <li>
              The estimate overview page can be used to manage the estimates,
              and track progress and performance of your team.
            </li>
          </p>
          </div>
        </Col>

        <Col>
        <div className={styles.centerimg}>
          <img
            alt="Agon"
            src="assets/imgs/page/about/5/SalEstimate.png"
            className={styles.tabimg2}
          />
          </div>
        </Col>
      


        <Col>
        <div className={styles.centerimg}>
          <img
            className={styles.tabimg1}
            alt="Agon"
            src="assets/imgs/page/about/5/Salinvoice.png"
          />
          </div>
        </Col>

        <Col
         md={{
          span: 20,
          offset: 2,
        }}
        xs={{
          span: 20,
          offset: 2,
        }}>
        <div className={styles.centercon}>
          <h4 className={styles.headings2}>Invoice</h4>
          <p className={styles.para}>
            <li>
              In Shadobooks ERP, the sales module has three types of invoice
              tabs available: create new invoice, batch receipts, and recurring
              invoices.{" "}
            </li>
            <br></br>
            <li>
              To create a new invoice, go to the sales module, "Invoices," and
              click the "Create New Invoice" tab.{" "}
            </li>
            <br></br>
            <li>
              Enter all the necessary details such as customer, invoice number,
              amount, project, date, etc.{" "}
            </li>
            <br></br>
            <li>
              Once the invoice is saved, it will appear in the form of a list in
              the invoice overview page.{" "}
            </li>
            <br></br>
            <li>
              The invoice overview page displays a list of all invoices with
              details such as customer, invoice number, amount, project, date,
              and status.{" "}
            </li>
            <br></br>
            <li>
              The invoice overview page allows you to view and manage all the
              invoices in one place.{" "}
            </li>
            <br></br>
            <li>
              It helps to track the progress of all the invoices, and manage
              them effectively.{" "}
            </li>
            <br></br>
            <li>
              By using filter options you can see the invoice status, and
              monitor the performance of your team members.{" "}
            </li>
            <br></br>
            <li>
              The invoice overview page can be used to manage the invoices, and
              track progress and performance of your team.{" "}
            </li>
            <br></br>
            <li>
              The batch receipts tab can be used to create multiple invoices at
              once, and recurring invoices tab can be used to generate invoices
              automatically for a specific period of time.{" "}
            </li>
          </p>
          </div>
        </Col>


   
        <Col 
        md={{
              span: 20,
              offset: 2,
            }}
            xs={{
              span: 20,
              offset: 2,
            }}
            >
        <div className={styles.centercon}>
          <h4 className={styles.headings2}>Receipt</h4>
          <p className={styles.para}>
            <li>
              In Shadobooks ERP, the sales module has a "Receipts" tab where you
              can view and manage all the receipts.{" "}
            </li>
            <br></br>
            <p>
              By clicking the receipt tab, you will see the list of receipts
              with the following details:{" "}
            </p>
            <br></br>
            <li>
              Invoice no,Receipt mode (cash, cheque, credit card, etc),
              Transaction id, Customer,Amount, Date
            </li>
            <br></br>
            <li>
              The receipt overview page allows you to view and manage all the
              receipts in one place.{" "}
            </li>
            <br></br>
            <li>
              {" "}
              You can filter and sort the receipt list by invoice number,
              receipt mode, transaction id, customer, amount, and date.{" "}
            </li>
            <br></br>
            <li>
              {" "}
              It helps to track the progress of all the receipts, and manage
              them effectively.{" "}
            </li>
            <br></br>
            <li>
              {" "}
              By using filter options you can see the receipt status, and
              monitor the performance of your team members.{" "}
            </li>
            <br></br>
            <li>
              The receipt overview page can be used to manage the receipts, and
              track progress and performance of your team.{" "}
            </li>
          </p>
          </div>
        </Col>



        <Col>
        <div className={styles.centerimg}>
          <img
            alt="Agon"
            src="assets/imgs/page/about/5/SalReceipt.png"
            className={styles.tabimg2}
          />
                </div>
        </Col>


      <Col>
        <div className={styles.centerimg}>
          <img
            className={styles.tabimg1}
            alt="Agon"
            src="assets/imgs/page/about/5/SalCn.png"
          />
        </div>
      </Col>

      <Col
       md={{
        span: 20,
        offset: 2,
      }}
      xs={{
        span: 20,
        offset: 2,
      }}>
      <div className={styles.centercon}>
        <h4 className={styles.headings2}>Credit Notes</h4>
        <p className={styles.para}>
          <li>
            To view credit notes in Shadobooks ERP, navigate to the sales
            module, "credit notes," and then "new credit notes."{" "}
          </li>
          <br></br>
          <li>
            Enter all the necessary details such as credit note number, date,
            customer, status, amount, remaining amount, etc.{" "}
          </li>
          <br></br>
          <li>
            Once the credit note is saved, it will appear in the form of a list
            in the credit note overview page.{" "}
          </li>
          <br></br>
          <li>
            The credit note overview page displays a list of all credit notes
            with details such as credit note number, date, customer, status,
            amount, and remaining amount.{" "}
          </li>
          <br></br>
          <li>
            {" "}
            You can filter and sort the credit note list by credit note number,
            date, customer, status, amount, and remaining amount.{" "}
          </li>
          <br></br>
          <li>
            {" "}
            The credit note overview page allows you to view and manage all the
            credit notes in one place.{" "}
          </li>
          <br></br>
          <li>
            {" "}
            It helps to track the progress of all the credit notes, and manage
            them effectively.{" "}
          </li>
          <br></br>
          <li>
            By using filter options you can see the credit note status, and
            monitor the performance of your team members.{" "}
          </li>
          <br></br>
          <li>
            The credit note overview page can be used to manage the credit
            notes, and track progress and performance of your team.{" "}
          </li>
        </p>
        </div>
      </Col>

      <Col
       md={{
        span: 20,
        offset: 2,
      }}
      xs={{
        span: 20,
        offset: 2,
      }}>
        <h4 className={styles.headings2}>Items</h4>
        <p className={styles.para}>
          <li>
            To view items in Shadobook ERP, navigate to the sales module,
            "items," and then "add" tab.{" "}
          </li>
          <br></br>
          <li>
            Enter all the necessary details such as an image, commodity code,
            commodity name, warehouse name, units, etc.
          </li>
          <br></br>
          <li>
            Once the item is saved, it will appear in the form of a list in the
            item overview page.{" "}
          </li>
          <br></br>
          <li>
            The item overview page displays a list of all items with details
            such as commodity code, commodity name, warehouse name, units, etc.{" "}
          </li>
          <br></br>
          <li>
            The item overview page allows you to view and manage all the items
            in one place.{" "}
          </li>
          <br></br>
          <li>
            {" "}
            You can filter and sort the item list by commodity code, commodity
            name, warehouse name, units.{" "}
          </li>
          <br></br>
          <li>
            It helps to track the progress of all the items, and manage them
            effectively.{" "}
          </li>
          <br></br>
          <li>
            By using filter options you can monitor the inventory of your items.{" "}
          </li>
          <br></br>
          <li>
            The item overview page can be used to manage the items, and track
            progress and performance of your team.{" "}
          </li>
        </p>
      </Col>

      <Col>
        <div className={styles.centerimg}>
          <img
            alt="Agon"
            src="assets/imgs/page/about/5/Salitem.png"
            className={styles.tabimg2}
          />
        </div>
      </Col>
    </div>
  );
}

export default Salestabs;

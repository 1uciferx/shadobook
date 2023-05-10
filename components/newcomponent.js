import React from "react";
import styles from "../styles/newcomponent.module.css";

function Newcomponent() {
  return (
    <>
      <div className={styles.flexcontainer}>
        <div>
          <h3 className={styles.subhead5}>IT Support Industry</h3>
          <br/>
          <div className={styles.makemecenter}>
            <p className={styles.subhead4}>
              We offer a variety of products for companies in the IT support
              sector to automate their service desk, manage IT assets, and
              enhance service delivery.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.imgplacer}>
            <img
              src="assets/imgs/page/homepage1/tel1.png"
              alt="past meetings"
            />{" "}
          </div>
        </div>
      </div>
      <div className={styles.flexcontainer}>
        <div>
          <div className={styles.imgplacer1}>
            <img src="assets/imgs/page/homepage1/tel2.png" alt="shado books" />
          </div>
        </div>
        <div>
          <h3 className={styles.subhead7}>Manufacturing Industry</h3>
          <br />
          <div className={styles.makemecenter}>
            <p className={styles.subhead6}>
              In the manufacturing industry, Shadobooks ERP helps businesses
              streamline their production processes, track raw materials, and
              manage the entire supply chain.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.flexcontainer}>
        <div>
          <h3 className={styles.subhead5}>Retail & Wholesale Industry</h3>
          <br />
          <div className={styles.makemecenter}>
            <p className={styles.subhead4}>
              For retailers and wholesalers, our software provides tools for
              managing inventory levels, processing orders, and handling
              multiple store locations.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.imgplacer}>
            <img
              src="assets/imgs/page/homepage1/tel3.png"
              alt="past meetings"
            />
          </div>
        </div>
      </div>
      <div className={styles.flexcontainer}>
        <div>
          <div className={styles.imgplacer1}>
            <img src="assets/imgs/page/homepage1/tel4.png" alt="shado books" />
          </div>
        </div>
        <div>
          <h3 className={styles.subhead7}>Distribution Industry</h3>
          <br />
          <div className={styles.makemecenter}>
            <p className={styles.subhead6}>
              In the distribution industry, our ERP helps businesses streamline
              their warehouse operations, optimize their delivery routes, and
              track their sales and purchases.
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Newcomponent;

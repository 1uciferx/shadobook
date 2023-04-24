import React from "react";
import styles from "../styles/testimonialindex.module.css";

function Testimonialindex() {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.headparent}>
      <h4 className={styles.headings}>
        Don’t take our word for it. See what our clients say.
      </h4>

      </div>

      <div className={styles.flexcontainer}>
        <div
          className={styles.card}
          style={{
            background:
              "linear-gradient(180deg, #C7FDC5 0%, rgba(250, 255, 250, 0) 100%)",
          }}
        >
          <h2 className={styles.name} style={{ color: "#228E1F" }}>
            Royal Blue Coast
          </h2>
          <div className={styles.stars}>
            <span className="fa fa-star" style={{ color: "#FDD835"}}>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
            </span>
          </div>
          <p className={styles.para}>
            Shadobook CRM has revolutionized our business by providing real-time
            lead and opportunity tracking, enabling team collaboration, and
            automating sales processes. Our sales cycle has become highly
            efficient, leading to a significant increase in revenue since
            adopting Shadobook CRM.
          </p>
        </div>
        <div
          className={styles.card}
          style={{
            background:
              "linear-gradient(180deg, #CFDEFD 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <h2 className={styles.name} style={{ color: "#417BEE" }}>
            BMC Line Shipping
          </h2>

          <div className={styles.stars}>
            <span className="fa fa-star" style={{ color: "#FDD835" }}>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
            </span>
          </div>

          <p className={styles.para}>
            Shadobook CRM has proven to be an excellent solution for our growing
            business. It allows us to effortlessly manage customer interactions,
            track our sales pipeline, and generate reports with ease.
          </p>
        </div>
        <div
          className={styles.card}
          style={{
            background:
              "linear-gradient(180deg, #EDBEF9 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <h2 className={styles.name} style={{ color: "#B750D0" }}>
            Rulexx
          </h2>
          <div className={styles.stars}>
            <span className="fa fa-star" style={{ color: "#FDD835" }}>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
            </span>
          </div>

          <p className={styles.para}>
            Our sales operations have become more streamlined and customer
            engagement has improved significantly thanks to Shadobook CRM's
            automation and analytics tools. We have been able to save countless
            hours of manual work and gain valuable insights into our sales
            performance.
          </p>
        </div>
        <div
          className={styles.card}
          style={{
            background:
              "linear-gradient(180deg, #F9E1B1 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <h2 className={styles.name} style={{ color: "#F7AC17" }}>
            Mercury Freight
          </h2>

          <div className={styles.stars}>
            <span className="fa fa-star" style={{ color: "#FDD835" }}>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
              <span className="fa fa-star" style={{ color: "#FDD835" }}></span>
            </span>
          </div>

          <p className={styles.para}>
            Shadobook CRM has played a crucial role in improving our customer
            service and sales processes. The automation features have enabled us
            to respond to leads quickly and efficiently, while the tools have
            given us a deeper understanding of our customer behavior.
          </p>
        </div>
      </div>
      </div>

     
    </>
  );
}

export default Testimonialindex;
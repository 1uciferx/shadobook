import React from "react";
import styles from "../styles/sectiontwo.module.css";

function Sectiontwo() {
  return (
    <>
      <div className={styles.columns}>
        <div className={styles.columnleft}>
          <div className={styles.imgpic}>
            <img
              alt="shadobooks"
              src="/assets/imgs/page/homepage1/vector12.png"
            />
          </div>
        </div>
        <div className={styles.columnright}>
          <p className={styles.heading1}>
            Simplify Your Process With
            <span className={styles.heading2}> Shadobooks ERP</span>
          </p>
          <p className={styles.para1}>
            ShadobooksERP is a comprehensive web-based platform designed to help
            creative agencies streamline their workflow. Our intuitive platform
            allows you to access all of your projects, teams, and resources in
            one place.
          </p>
          <p className={styles.para1}>
            With ShadobooksERP, you can manage everything from project planning
            to billing, allowing you to focus on what matters most – creating
            amazing work.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sectiontwo;

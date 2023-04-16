import React from "react";
import styles from "../styles/fadedcards.module.css";
import Layout from "../components/layout/Layout";

function Fadedcards() {
  return (
    <>
      <div className={styles.allcontent}>
      <h5 className={styles.smallheading}>Our Solutions</h5>
        <h2 className={styles.heading1}>Adaptable CRM Software</h2>

        <p className={styles.para1}>
          A complete CRM software for businesses of all sizes to <br></br>manage
          customer relationships end-to-end.
        </p>

        <div className={styles.container}>
        <div
            className={styles.box}
            style={{
              background: "linear-gradient(to bottom,rgb(255 251 184), rgb(255, 255, 255))",
            }}
          >
            <div className={styles.image}>
              <img src="assets/imgs/page/homepage1/OurFeatures.png" />
            </div>
            <div className={styles.name}>Our Features</div>

            <p>
            Our priority is helping<br/> customers succeed through<br/> timely assistance.
            </p>
          </div>

          <div
            className={styles.box}
            style={{
              background: "linear-gradient(to bottom, #C2FFB8, #FFFFFF)",
            }}
          >
            <div className={styles.image}>
              <img src="assets/imgs/page/homepage1/IT&Support.png" />
            </div>
            <div className={styles.name}>IT & Support</div>

            <p>
              Our CRM's analytics<br/> track sales cycles and<br/> create custom
              dashboards.
            </p>
          </div>
          <div
            className={styles.box}
            style={{
              background: "linear-gradient(to bottom, #B4FFF6, #FFFFFF)",
            }}
          >
            <div className={styles.image}>
              <img src="assets/imgs/page/homepage1/Manufacturing123.png" />
            </div>
            <div className={styles.name}>Manufacturing</div>

            <p>
              Improve efficiency and google exposure with our<br/> intelligent CRM.
            </p>
          </div>
          <div
            className={styles.box}
            style={{
              background: "linear-gradient(to bottom, #F5E3FB, #FFFFFF)",
            }}
          >
            <div className={styles.image}>
              <img src="assets/imgs/page/homepage1/RetailWholesalers.png" />
            </div>
            <div className={styles.name}>Retail & Salers</div>

            <p>A unified customer service system across multiple Countries around the World.</p>
          </div>
        </div>

        {/*
        <div className={styles.container}>
   
      <div class={styles.row}>
        <div class={styles.card}>
          <div class={styles.cardheader}>
            <h2>It and solution</h2>
          </div>
         
        </div>

        <div class={styles.card}>
        <div class={styles.cardheader}>
            <h1></h1>
          </div>
         
        </div>

        <div class={styles.card}>
        <div class={styles.cardheader}>
            <h1></h1>
          </div>
         
        </div>

        <div class={styles.card}>
        <div class={styles.cardheader}>
            <h1></h1>
          </div>
         
        </div>
      </div>
    </div> */}
      </div>

      {/*  */}
    </>
  );
}

export default Fadedcards;
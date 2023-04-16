import React from "react";
import styles from "../styles/Cards4.module.css";

function Cards4() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col mt-40">
            <div
              class="card h-50 shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-0"
              style={{
                background:
                  "linear-gradient(180deg, #F7DDFF 28.35%, rgba(253, 248, 255, 0) 100%)",
              }}
            >
              <div className={styles.profile}>
                {" "}
                <img src="assets/imgs/page/homepage1/Acquisitionone.png" />{" "}
              </div>
              <div class="card-body">
                <h5 className={styles.cardheading}>Acquisition</h5>
                <p className={styles.cardpara}>
                  The customer center segment of Shadobooks is where you can
                  import all your client-facing data under one roof
                </p>
              </div>
            </div>

            <div
              class="card h-50 mt-30 shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-0"
              style={{
                background:
                  "linear-gradient(180deg, #FFFCAA 10.8%, rgba(255, 254, 235, 0) 100%)",
              }}
            >
              <div className={styles.profile}>
                <img src="assets/imgs/page/homepage1/Retention123.png" />
              </div>
              <div class="card-body">
                <h5 className={styles.cardheading2}>Retention</h5>
                <p className={styles.cardpara}>
                  You can update all their contact details, method of
                  communicating and planned actions you have in mind for the
                  leads.
                </p>
              </div>
            </div>
          </div>

          <div class="col align-self-center">
            <div
              class="card h-50 shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-0"
              style={{
                background:
                  "linear-gradient(180deg, #D0FFC5 14.88%, rgba(242, 255, 239, 0) 100%)",
              }}
            >
              <div className={styles.profile}>
                <img src="assets/imgs/page/homepage1/Acquisitiontwo.png" />
              </div>
              <div class="card-body">
                <h5 className={styles.cardheading3}>Activation</h5>
                <p className={styles.cardpara}>
                  Be it your partners from past projects or potential leads, you
                  can integrate all their data here for a single panel source of
                  view.
                </p>
              </div>
            </div>
          </div>

          <div class="col-6 align-self-center">
            <h5 className={styles.heading1}>
              Discover powerful features to boost your productivity
            </h5>

            <p className={styles.para2}>
              The customer center segment of Shadobooks is <br></br>where you
              can import all your client-facing data<br></br> under one roof.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards4;

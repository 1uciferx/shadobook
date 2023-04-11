import React from "react";
import styles from "../styles/Cards3.module.css";
import Link from "next/link";

function Cards3() {
  return (
    <>
    <div className={styles.mypar}>
      <div class="container text-center mt-60"> 
        <div class="row"> 
          <div class="col-6 mt-100">
            <h2 className={styles.heading1}>Our Features</h2>
            <p className={styles.para1}>
              From the big picture to every<br></br> tiny detail, we got you
              <br></br> covered.
            </p>
            <p className={styles.para2}>
              Manage all client interactions, proposals,<br></br> invoices,
              support tickets, tasks, project <br></br>overviews, credit notes,
              reminders, <br></br>subscriptions, and orders.
            </p>

            <Link href="/page-contact">
                    <div className={styles.buttonstart}>
                      <button class={styles.button}>
                        <span>CONTACT US </span>
                      </button>
                    </div>
                  </Link>

          </div>
          <div class="col mt-110">
           
          <div class="card h-50 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0" style={{borderRadius: "30px"}}>
              <div className={styles.profile}>
                {" "}
                <img src="assets/imgs/page/homepage1/AutomatedReports.png" />{" "}
              </div>
              <div class="card-body">
                <h5 className={styles.cardheading}>Automated Reports</h5>
                <p className={styles.cardpara}>
                  Automate efficiently and manage accounts on one platform.
                </p>
              </div>
              </div>
              

            <div class="card h-50 mt-60 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0" style={{borderRadius: "30px"}}>
              <div className={styles.profile}>
              <img src="assets/imgs/page/homepage1/Realtimeanalytics.png" />
              </div>
              <div class="card-body">
                <h5 className={styles.cardheading}>Realtime analytics</h5>
                <p className={styles.cardpara}>
                Access all accounting data in one place.
                </p>
              </div>
            </div>

           
          </div>

          <div class="col mt-40">
            <div class="card h-50 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0" style={{borderRadius: "30px"}}>
              <div className={styles.profile}>
                {" "}
                <img src="assets/imgs/page/homepage1/Funneloptimization.png" />{" "}
              </div>
              <div class="card-body">
                <h5 className={styles.cardheading}>Funnel optimization</h5>
                <p className={styles.cardpara}>
                  Unify your data with our revolutionary accounting software.
                </p>
              </div>
            </div>
            <div class="card h-50 mt-60 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0" style={{borderRadius: "30px"}}>
              <div className={styles.profile}>
                {" "}
                <img src="assets/imgs/page/homepage1/Userjourney.png" />{" "}
              </div>
              <div class="card-body">
                <h5 className={styles.cardheading}>User journey</h5>
                <p className={styles.cardpara}>
                  A better way to handle accounting is here.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div></div>
    </>
  );
}

export default Cards3;
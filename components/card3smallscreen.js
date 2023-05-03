import React from "react";
import styles from "../styles/Cards3smallscreen.module.css";
import Link from "next/link";

function Cards3smallscreen() {
  return (
    <>
      {/* big mobile screen code starts from here */}

      <div className={styles.XLscreen}>
        <div className={styles.mypar}>
          <div class="container text-center">
            <div class="row">
              <div class="col-12">
                <h2 className={styles.heading1}>Our Features</h2>
                <p className={styles.para1}>
                  From the big picture to every tiny detail, we got you covered.
                </p>

                <p className={styles.para2}>
                  Manage all client interactions, proposals, invoices, support
                  tickets, tasks, project overviews, credit notes, reminders,
                  subscriptions, and orders.
                </p>

                <Link href="/request-a-demo">
                  <div className={styles.buttonstart}>
                    <button class={styles.button}>
                      <span>Contact Us </span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            <div class="row">
              <div class="col-5 mt-110">
                <div
                  class="card h-30 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0"
                  style={{
                    borderRadius: "20px",
                    width: "110%",
                    position: "relative",
                    left: "24%",
                  }}
                >
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
                <div
                  class="card h-30 mt-60 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0"
                  style={{
                    borderRadius: "20px",
                    width: "110%",
                    position: "relative",
                    left: "24%",
                  }}
                >
                  <div className={styles.profile}>
                    <img src="assets/imgs/page/homepage1/Realtimeanalytics.png" />
                  </div>
                  <div class="card-body">
                    <h5 className={styles.cardheading}>Realtime analytics</h5>
                    <p className={styles.cardpara}>
                      Access all accounting data in one place.
                    </p>
                  </div>
                </div>{" "}
              </div>

              <div class="col-5 mt-40">
                <div
                  class="card h-30 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0"
                  style={{
                    borderRadius: "20px",
                    width: "110%",
                    position: "relative",
                    left: "38%",
                  }}
                >
                  <div className={styles.profile}>
                    {" "}
                    <img src="assets/imgs/page/homepage1/Funneloptimization.png" />{" "}
                  </div>
                  <div class="card-body">
                    <h5 className={styles.cardheading}>Funnel optimization</h5>
                    <p className={styles.cardpara}>
                      Unify your data with our revolutionary accounting
                      software.
                    </p>
                  </div>
                </div>

                <div
                  class="card h-40 mt-60 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0"
                  style={{
                    borderRadius: "20px",
                    width: "110%",
                    position: "relative",
                    left: "38%",
                  }}
                >
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
          </div>
        </div>
      </div>

      {/* big mobile screen code ends here */}





      {/* small mobile screen code starts from here */}

      <div className={styles.XSscreen}>
        <div className={styles.mypar}>
          <div class="container text-center">
            <div class="row">
              <div class="col-12">
                <h2 className={styles.heading1}>Our Features</h2>
                <p className={styles.para1}>
                  From the big picture to every tiny detail, we got you covered.
                </p>

                <p className={styles.para2}>
                  Manage all client interactions, proposals, invoices, support
                  tickets, tasks, project overviews, credit notes, reminders,
                  subscriptions, and orders.
                </p>

                <Link href="/page-contact">
                  <div className={styles.buttonstart}>
                    <button class={styles.button}>
                      <span>Contact Us </span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            <div class="row">
              <div class="col-5 mt-110">
              <div className={styles.sidebox}>
                <div
                  class="card h-40 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0"
                  style={{borderRadius:"20px"}}
                
                >
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
                  </div>
                <div className={styles.sidebox}>
                <div
                  class="card h-40 mt-60 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0"
                  style={{borderRadius:"20px"}}
                >
                  <div className={styles.profile}>
                    <img src="assets/imgs/page/homepage1/Realtimeanalytics.png" />
                  </div>
                  <div class="card-body">
                    <h5 className={styles.cardheading}>Realtime analytics</h5>
                    <p className={styles.cardpara}>
                      Access all accounting data in one place.
                    </p>
                  </div>
                </div>{" "}
                </div>
              </div>{" "}
            </div>
            <div class="row">
              <div class="col-5 mt-40">
              <div className={styles.sidebox}>
                <div
                  class="card h-40 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0"
                  style={{borderRadius:"20px"}}
                >
                  <div className={styles.profile}>
                    {" "}
                    <img src="assets/imgs/page/homepage1/Funneloptimization.png" />{" "}
                  </div>
                  <div class="card-body">
                    <h5 className={styles.cardheading}>Funnel optimization</h5>
                    <p className={styles.cardpara}>
                      Unify your data with our revolutionary accounting
                      software.
                    </p>
                  </div>
                  </div> </div>


                  <div className={styles.sidebox}>
                <div
                  class="card h-40 mt-60 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5 border border-0"
                  style={{borderRadius:"20px"}}
                >
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
            </div>
          </div>
        </div>
      </div>

      {/* small mobile screen code ends here */}
    </>
  );
}

export default Cards3smallscreen;

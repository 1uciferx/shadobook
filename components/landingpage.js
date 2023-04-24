/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/landingpage.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";

function Landingpage() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="section-box" style={{marginTop:"80px"}}>
        <div className="banner-hero banner-homepage6">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mt-50 pb-120">
                <h1 className={styles.headingone}>
                  Top-Notch Accounting ERP Software- Shadobooks
                </h1>
                <p className={styles.paraone}>
                  Shadobooks ERP, a leading Accounting ERP software, offers
                  businesses a smarter solution with real-time access to
                  information. Our ERP platform delivers significant innovation,
                  cost savings, and superior business processes to organizations
                  in the Middle East, empowering them with up-to-date insights
                  for informed decision-making.
                </p>
                <div className="mt-40">
                  <Link href="/request-a-demo">
                    <button class={styles.button18} role="button">
                      Start 90 days Free Trial ➜
                    </button>
                  </Link>

                  <Link href="/request-a-demo">
                    <button class={styles.button19} role="button">
                      Schedule a Demo ➜
                    </button>
                  </Link>
                </div>
                <div className={styles.flwer}>
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-4 col-4 pr-mb-70 mb-30">
                      <h3 className={styles.minitext}>
                        <span className="count">500</span>+
                      </h3>
                      <h6 className={styles.minitext1}>
                        <span>Happy Clients</span>
                      </h6>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-4 pr-mb-70 mb-30">
                      <h3 className={styles.minitext}>
                        <span className="count">756</span>+
                      </h3>
                      <h6 className={styles.minitext1}>
                        <span>Project Done</span>
                      </h6>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-4 pr-mb-70 mb-30">
                      <h3 className={styles.minitext}>
                        <span className="count">100</span>%
                      </h3>
                      <h6 className={styles.minitext1}>
                        <span>Client Satisfaction</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 d-lg-block">
                <div className={styles.mainmedia}>
                  <div className="block-1 ">
                    <div className={styles.heroimg22}>
                      <div className={styles.heroimg}>
                        <Link href="tel:+971528722900">
                          <img
                            src="/assets/imgs/page/homepage2/phone1.png"
                            alt="Shadobooks erp"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.heroimg1}>
                    <img
                      className="img-responsive"
                      alt="Shadobooks erp"
                      src="assets/imgs/page/homepage2/landinghero.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;

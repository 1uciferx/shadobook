import React from "react";
import styles from "../styles/happyclients.module.css";

function Happyclients() {
  return (
    <>
      {/* testimonals */}

      <div
        className="section-box pt-100 pb-100 mt-100"
        style={{ backgroundColor: "#FFF4F4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-30">
              <h3
                className="text-heading-1 mt-100"
                style={{ fontFamily: "segoe ui" }}
              >
                Don&rsquo;t take our word for it. See what our clients say.
              </h3>
              {/* <p className="text-body-lead-large color-gray-600 mt-30">
             Our Happy Clients
           </p> */}
            </div>
            <div className="col-lg-7">
              <div className="row" data-masonry='{"percentPosition": true }'>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="box-img-user mb-40">
                    <div className={styles.omggg}>
                      <img src="/assets/imgs/page/users/RoyalBlueCoast.png" alt="shadobooks" />
                    </div>
                    <div className={styles.mee1}>
                    <h4 className={styles.headee1}>
                      Royal Blue Coast
                    </h4>
                    </div>
                  </div>
                  <div className="card-grid-style-1 card-square hover-up mb-20">
                    <p className="text-body-text color-gray-600 text-comment">
                      Shadobook CRM has revolutionized our business by providing
                      real-time lead and opportunity tracking, enabling team
                      collaboration, and automating sales processes. Our sales
                      cycle has become highly efficient, leading to a
                      significant increase in revenue since adopting Shadobook
                      CRM.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="box-img-user mb-40">
                    <div className={styles.omggg2}>
                      <img src="/assets/imgs/page/users/Rulexx.png" alt="shadobooks" />
                    </div>
                    <h4 className={styles.headee2}>
                      Rulexx
                    </h4>
                  </div>
                  <div className="card-grid-style-1 card-square hover-up mb-20">
                    <p className="text-body-text color-gray-600 text-comment">
                      Our sales operations have become more streamlined and
                      customer engagement has improved significantly thanks to
                      Shadobook CRM's automation and analytics tools. We have
                      been able to save countless hours of manual work and gain
                      valuable insights into our sales performance.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="box-img-user mb-40">
                    <div className={styles.omggg2}>
                      <img src="/assets/imgs/page/users/BMCLineShipping.png" alt="shadobooks" />
                    </div>
                    <h4 className={styles.headee3}>
                      BMC Line Shipping
                    </h4>
                  </div>
                  <div className="card-grid-style-1 card-square hover-up mb-20">
                    <p className="text-body-text color-gray-600 text-comment">
                      Shadobook CRM has proven to be an excellent solution for
                      our growing business. It allows us to effortlessly manage
                      customer interactions, track our sales pipeline, and
                      generate reports with ease.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="box-img-user mb-40">
                    <div className={styles.omggg2}>
                      <img src="/assets/imgs/page/users/MercuryFreight.png" alt="shadobooks" />
                    </div>
                    <h4 className={styles.headee4}>
                      Mercury Freight
                    </h4>
                  </div>
                  <div className="card-grid-style-1 card-square hover-up mb-20">
                    <p className="text-body-text color-gray-600 text-comment">
                      Shadobook CRM has played a crucial role in improving our
                      customer service and sales processes. The automation
                      features have enabled us to respond to leads quickly and
                      efficiently, while the tools have given us a deeper
                      understanding of our customer behavior.
                    </p>
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

export default Happyclients;

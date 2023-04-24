import React from "react";
import styles from "../styles/Landingpageform.module.css";

function Landingpageform() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading1}>
          Have a Customized Accounting ERP Software
        </h2>

        <div className={styles.paraparent}>
          <p className={styles.para1}>
            Create your own Accounting ERP software according to your company's
            demands, adding specialized features and capabilities to provide
            effective financial management, simplified procedures, and increased
            productivity.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-9 col-md-6 col-xs-12 col-lg-6 col-xl-6">
          <div>
            <img
              className={styles.contactimage}
              alt="Agon"
              src="assets/imgs/page/landingpage/contact.png "
            />
          </div>
        </div>

        <div className="col-sm-9 col-md-6 col-xs-12 col-lg-6 col-xl-6">
          <div className={styles.form}>
            <div className={styles.title}>Contact Us</div>
            <div className={styles.inputcontainer1}>
              {" "}
              <input
                id="name"
                className={styles.input}
                type="text"
                placeholder="Name"
              />
              <label for="name" className={styles.placeholder}>
                Name
              </label>
            </div>

            <div className={styles.inputcontainer2}>
              {" "}
              <input
                id="email"
                className={styles.input}
                type="email"
                placeholder="email "
              />
              <label for="email" className={styles.placeholder}>
                Email
              </label>
            </div>

            <div className={styles.inputcontainer2}>
              {" "}
              <input
                type="number"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                id="phonenumber"
                className={styles.input}
                placeholder="Phone Number "
              />
              <label for="phonenumber" className={styles.placeholder}>
                Phone number
              </label>
            </div>

            <div className={styles.textareacontainer}>
              {" "}
              <textarea
                id="Requirements"
                className={styles.input}
                type="message"
                placeholder="Requirements "
                rows="10"
                cols="30"
              />
              <label for="Requirements" className={styles.placeholder}>
                Requirements
              </label>
            </div>
          </div>

          <div className={styles.submitbtncontainer}>
            <button type="text" className={styles.submit}>
              Talk with us now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpageform;

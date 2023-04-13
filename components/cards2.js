import React from "react";
import styles from "../styles/Cards2.module.css";

function Cards2() {
  return (
    <>
    <div >
   
      <div className={styles.container}>
        <div
          className={styles.box}
          style={{
            background: "#FF3C3C",
          }}
        >
          <div className={styles.name}>Designed for teams</div>

          <p>
            You can organize all the KPIs in visual formats and spot trends
            through these interactive charts to drive your efforts in a better
            direction.
          </p>
        </div>


     
        <div
          className={styles.box11}
          style={{
            background: "#287914",
          }}
        >
          <div className={styles.name}>Work smarter</div>

          <p>
            The dashboard unifies all your sales, marketing and customer support
            data while also giving you the leverage to customize the
            presentation in ways you deem fit for your operational flow in easy
            clicks.
          </p>
        </div>

   

       

        <div
          className={styles.box}
          style={{
            background: "#08B7AC",
          }}
        >
          <div className={styles.name}>Advanced analytics</div>

          <p>
            Hosting an abundance of data and breaking them down to formats that
            are easier to interpret while also giving you complete freedom.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cards2;
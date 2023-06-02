import React from 'react'
import styles from "../styles/Bannerwt.module.css";
function Bannerwt() {
  return (
    <>
    <div className={styles.banner}>
        <div className={styles.content}>
         <h1 className={styles.title}>Movie Name </h1>
         <div className={styles.bannerbutton}>
              <button className={styles.button}>Play</button>
              <button className={styles.button}>My list</button>
              </div>
              <h1 className={styles.Discription}> Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device</h1>

        </div>
      
        <div className={styles.fadebottom}></div>
    </div>
    
    </>
  );
}

export default Bannerwt;p
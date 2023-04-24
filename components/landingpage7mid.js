import { Row, Col } from "antd";
import { ProgressBar } from "react-bootstrap";
import styles from "../styles/landingpage7mid.module.css";
const Landingpage7mid = () => {
  return (
    <>
    <div className={styles.bgpicture}>
        <div className={styles.heeder} >
            <h1 className={styles.heder}> What Benefits We Can Add to Our Customers</h1>
        </div>
        <div>
            <p className={styles.sgm}>
                 Upgrade to Shadobooks ERP for improved client management, marketing,
          and sales. Improve sales, marketing, and customer management by using
          a smart system that automates critical business procedures and gives
          you more power.
            </p>
        </div>
      <div className={styles.compItem}>
        <img className={styles.compItem} alt="" src="/dolll1.png" />
      </div>
      <div className={styles.compimg}>Industry specific Customization</div>

      <div className={styles.compItem}>
        <img className={styles.compItem} alt="" src="/wer1.png" />
      </div>
        <div className={styles.compimg}>Seamless integration with renowned ERP systems</div>

      <div className={styles.compItem}>
        <img className={styles.compItem} alt="" src="/mon1.png" />
      </div>
        <div className={styles.compimg}>
        Multi-currency transactions, inventory control, and human capital
        management
      </div>

      <div className={styles.compItem}>
        <img className={styles.compItem} alt="" src="/arrr1.png" />
      </div>
       <div className={styles.compimg}>Efficient workflow management</div>

      <div className={styles.compItem}>
        <img className={styles.compItem} alt="" src="/bo1.png" />
      </div>
        <div className={styles.compimg}>Real-time dashboard and business intelligence reports</div>

      <div className={styles.compItem}>
        <img className={styles.compItem} alt="" src="/csa1.png" />
      </div>
      <div className={styles.compimg}>
        Comprehensive and accurate reports, budgeting, and cash flow management
      </div>
      </div>
    </>
  );
};

export default Landingpage7mid;

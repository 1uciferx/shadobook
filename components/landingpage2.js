import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/landingpage2.module.css";

function Landingpage2() {
  return (
    <>
     
          <div className={styles.qhead}>
          <h2 className={styles.mainhead}>Industries We are Serving For</h2>
      
      </div>

          <div className={styles.phead}>
            <p  className={styles.smallheading}>Shadobooks ERP provides a comprehensive set of features and tools to
            manage different aspects of a company's operations, such as
            inventory management, financial accounting, sales and purchase order
            management, production planning, and customer relationship
            management.</p>
        
      </div>
    </>
  );
}
export default Landingpage2;

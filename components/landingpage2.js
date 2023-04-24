import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/landingpage2.module.css";

function Landingpage2() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h2 className={styles.mainhead}>Industries We are Serving For</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className={styles.smallheading}>
            Shadobooks ERP provides a comprehensive set of features and tools to
            manage different aspects of a company's operations, such as
            inventory management, financial accounting, sales and purchase order
            management, production planning, and customer relationship
            management.
          </div>
        </div>
      </div>
    </>
  );
}
export default Landingpage2;

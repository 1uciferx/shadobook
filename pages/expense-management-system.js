/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import Contactmanager from "../components/contactmanager";
import Head from "next/head";
import { Helmet } from 'react-helmet';

function BlogSingle() {
  return (
    <>
      <Head>
        <title> Online Expense Management System | Shadobooks</title>
        <meta
          name="description"
          content="Take control of expenses with our expense management system. Real-time tracking, spending caps, and centralized management save time, cut costs, and prevent mistakes."
        />
        <meta name="keywords" content="Expense management system"/>
      </Head>

 {/* facebook and twitter meta graphs starts here */}
 <Helmet>
        <meta property="og:title" content="Shadobooks ERP" />
        <meta property="og:description" content="Shadobooks erp solutions." />
        <meta property="og:image" content="/assets/imgs/page/homepage1/sb-logo.png" />
        <meta property="og:url" content="https://www.facebook.com/shadobookscrm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadobooks ERP" />
        <meta name="twitter:description" content="Shadobooks erp solutions." />
        <meta name="twitter:image" content="/assets/imgs/page/homepage1/sb-logo.png" />
        <meta http-equiv="refresh" content="0; url=https://shadobooks.com/expense-management-system" />

      </Helmet>

      {/* facebook and twitter meta graphs ends here */}

      <Layout>
        <div>
        <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/ee1.jpg)",
              objectFit: "cover",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-display-2 text-center color-white">
                  Online Expense Management System 
                  </h1>
                  <p className="text-body-lead-large color-white mt-40  text-center">
                  The expense module in Shadobooks ERP is a feature that allows businesses to manage and track their expenses efficiently. It provides a centralized platform for recording all types of expenses, including employee reimbursements, vendor bills, and other miscellaneous expenses. This module helps businesses to streamline their expense management process by providing tools for creating expense reports, tracking expenses against budgets, and generating insights into spending patterns. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
         
          <section className="section-box mt-50 mb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                  <div className="single-detail mt-50">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/homepage1/ggj.jpg"
                      alt="Expense management system"
                    />
                    <p />

                    <h2 className="text-heading-3">
                      Benefits of Record Expenses
                    </h2>
                    <p>
                      The following are the expenses benefits in Shadobooks CRM:
                      <br />
                      <br />
                      ➟ Fewer delays and errors,
                      <br />
                      <br />
                      ➟ Greater operational efficiency,
                      <br />
                      <br />
                      ➟ Greater visibility,
                      <br />
                      <br />
                      ➟ Simplified reporting,
                      <br />
                      <br />➟ Greater compliance.
                      <br />
                      <br />➟ Integrated with both the<span><a href="/crm-software"> sales</a></span> and<span><a href="/vendor-management-software"> purchase</a></span> modules
                    </p>
                    <p />
                    <br />
                    <br />

                    <h3 className="text-heading-3">Direct Expenses</h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          ➟ Direct expenses are expenses that a corporation can
                          easily link to a specific "cost item," which could be
                          a product, department, or project.
                          <br />
                          <br />
                          ➟ This category may contain software, equipment, and
                          raw materials.
                          <br />
                          <br />➟ It can also involve labour, assuming the
                          labour is specific to the product, department, or
                          project.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 mt-10"
                          src="assets/imgs/page/homepage1/dd.jpg"
                          alt="Expense management system"
                        />
                      </div>
                    </div>
                    <p />

                    <h3 className="text-heading-3">Indirect Expenses</h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          ➟ Indirect expenses are those that cannot be
                          determined directly within a given product or service.
                          <br />
                          <br />
                          ➟ Indirect expenses include the costs of maintaining
                          and running a business.
                          <br />
                          <br />➟ These overhead costs are once left over the
                          direct costs have been computed further.
                        </p>
                        <br />
                        <br />
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 mt-10"
                          src="assets/imgs/page/homepage1/ii.jpg"
                          alt="Expense management system"
                        />
                      </div>
                    </div>
                    <p />

                    <div className="single-detail mt-50">
                      <img
                        className="img-responsive bdr-16"
                        src="assets/imgs/page/homepage1/ssd.png"
                        alt="Expense management system"
                      />
                    </div>
                    <p />

                    <h2 className="text-heading-4">
                      Overview and How to Record expenses in shadobooks CRM
                    </h2>
                    <p>
                      ➟ To add a new expense, select Expenses ⇢ Record Expense
                      from the side menu.
                      <br />
                      <br />
                      ➟ Fill out the details in the expenses form and save it.
                      <br />
                      <br />➟ You can assign tasks to newly created expenses and
                      attach 'expense receipts' as well.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.modslider}>
          <div className="mt-50">
            <Indexslider />
            <div className="text-center">
              <Link href="/our-product">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    padding: "10px",
                    marginTop: "-15px",
                    marginBottom: "30px",
                  }}
                >
                  Show More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Contactmanager />
        </div>
      </Layout>
    </>
  );
}

export default BlogSingle;

import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/Modules.module.css";
import Head from "next/head";
function Modules() {
  return (
    <>
      <Head>
        <title>Shadobooks products- Software and Services for Businesses</title>
        <meta
          name="description"
          content=" We offer a range of products, from simple accounting and finance software to ERP solutions that can manage your entire business.  "
        />
        <meta name="keywords" content="products" />
        <meta
          http-equiv="refresh"
          content="0; url=https://shadobooks.com/our-product"
        />
      </Head>
      <Layout>
        <div class="container mt-100 " style={{ paddingTop: "50px" }}>
          <div class="row">
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <div className={styles.ss2}>
                <Link href="/accounting-erp-software">
                  <div class=" shadow p-3 mb-5 bg-body rounded">
                    <h4 class="card-title text-center">
                      <i class="text-heading-6">Accounting</i>
                    </h4>
                    <div className={styles.cntr}>
                      <img
                        src="assets/imgs/page/homepage1/Accountingvoucher2.png"
                        alt="Photo of sunset"
                        width={"150px"}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/ticketing-system-in-erp">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Support</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Support3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/assets-management-erp-software">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Company Assets</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/CompanyAssets3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/erp-document-management">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">File Manager</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Filemanager3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 2nd row */}

        <div class="container mt-50">
          <div class="row">
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/project-management-software">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Projects</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Projects2.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/knowledge-management-software">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Knowledge Base</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/KnowledgeBase3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/webhook">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Web Hooks</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/WebHooks2.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/estimates-management-software">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Estimate Request</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/EstimateRequest3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 3r row */}

        <div class="container mt-50 ">
          <div class="row">
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/best-hrms-software">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Hr Records</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/HRrecords3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/utility-management-software">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Utilities</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Utilities4.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/inventory-management-system">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Inventory</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Inventory4.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/recruitment-management-software">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Hiring</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Hiring3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 4throw */}

        <div class="container mt-50 ">
          <div class="row">
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/task-management-software">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Tasks</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Tasks2.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/manufacturing-erp-software">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-5 ">Manufacturing</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Manufacturing3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/lead-management-system">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Leads</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Leads3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/sales-management-software">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Sales</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/sales3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 5th row */}

        <div class="container mt-50 ">
          <div class="row">
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/purchase-management-software">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Purchase</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Purchase3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/expense-management-system">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Expenses</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Expenses4.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/contract-tracking-software">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Contracts</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Contracts3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/hr-and-payroll-software">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Hr Payroll</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/HRpayroll4.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 6th row */}

        <div class="container mt-50 ">
          <div class="row">
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/sales-rep-erp-software">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Sales Agent</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/SalesAgent3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/reports-module-in-erp">
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Reports</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/Reports3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <Link href="/point-of-sale-system">
                <div class=" shadow p-3 mb-5 bg-body rounded">
                  <h4 class="card-title text-center">
                    <i class="text-heading-6">Point Of Sales</i>
                  </h4>
                  <div className={styles.cntr}>
                    <img
                      src="assets/imgs/page/homepage1/PointOfsales3.png"
                      alt="Photo of sunset"
                      width={"150px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Modules;

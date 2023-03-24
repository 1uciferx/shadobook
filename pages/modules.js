import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/Modules.module.css";

function Modules() {
  return (
    <>
      <Layout>
        <div class="container mt-100 " style={{ paddingTop: "50px" }}>
          <div class="row">
            <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
              <div className={styles.ss2}>
              <Link href="/accounting">
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
              <Link href="/support-page">
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
              <Link href="/companyasset">
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
              <Link href="/filemanage">
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
              <Link href="/project">
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
              <Link href="/knowledgeBaseKB">
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
              <Link href="/EstimateReq">
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
              <Link href="/hrrecord">
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
              <Link href="/Utilities">
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
              <Link href="/inventory">
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
              <Link href="/hiring">
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
              <Link href="/tasks">
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
              <Link href="/manufacturing">
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
              <Link href="/leads">
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
              <Link href="/sales">
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
              <Link href="/purchase">
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
              <Link href="/Expense">
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
              <Link href="/contracts">
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
              <Link href="/hr-payroll">
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
              <Link href="/sales-agent">
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
              <Link href="/reports">
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
              <Link href="/POS">
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

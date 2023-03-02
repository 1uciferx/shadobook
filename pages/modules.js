import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Modules() {
  return (
    <>
     <Layout>
  
      <div class="container mt-100 ">
        <div class="row">
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/accounting">
            <div class=" shadow p-3 mb-5 bg-body rounded" >
              <h4 class="card-title text-center">
                <i class="text-heading-5">Accounting</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/acc01.png"
                alt="Photo of sunset"
              />
              
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/support-page">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Support</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/support01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>

          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/webhook">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Web Hooks</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/webhooks01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>

         
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/project">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Projects</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/projects01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 2nd row */}

      <div class="container mt-50">
        <div class="row">
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/filemanage">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">File Manager</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/filemanager01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
         
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/knowledgeBaseKB">
            <div class=" shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Knowledge Base</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/kb01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
          
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/companyasset">
            <div class=" shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Company Assets</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/companyassets01.png"
                alt="Photo of sunset"
              />
              
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/EstimateReq">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Estimate Request</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/estimate01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 3r row */}

      <div class="container mt-50 ">
        <div class="row">

        <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/hrrecord">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Hr Records</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/hr01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>

          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/Utilities">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Utilities</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/uti01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/inventory">
            <div class=" shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Inventory</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/inventory01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/hiring">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Hiring</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/hiring01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 4throw */}

      <div class="container mt-50 ">
        <div class="row">
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/tasks">
            <div class=" shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Tasks</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/tasks01.png"
                alt="Photo of sunset"
              />
            
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/manufacturing">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5 ">Manufacturing</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/manufacturing01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
            <Link href="/leads">
              <div class=" shadow p-3 mb-5 bg-body rounded">
                <h4 class="card-title text-center">
                  <i class="text-heading-5">Leads</i>
                </h4>
                <img
                  src="assets/imgs/page/homepage1/leads01.png"
                  alt="Photo of sunset"
                />
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/sales">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Sales</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/sales01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
        </div>
     
      </div>

      {/* 5th row */}

      <div class="container mt-50 ">
        <div class="row">
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/purchase">
            <div class=" shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Purchase</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/purchase01.png"
                alt="Photo of sunset"
              />
            
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/Expense">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Expenses</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/expense01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
            <Link href="/contracts">
              <div class=" shadow p-3 mb-5 bg-body rounded">
                <h4 class="card-title text-center">
                  <i class="text-heading-5">Contracts</i>
                </h4>
                <img
                  src="assets/imgs/page/homepage1/contracts01.png"
                  alt="Photo of sunset"
                />
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/hr-payroll">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Hr Payroll</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/hrpay01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
        </div>
     
      </div>


{/* 6th row */}

<div class="container mt-50 "  >
        <div class="row">
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/sales-agent">
            <div class=" shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Sales Agent</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/salesagent01.png"
                alt="Photo of sunset"
              />
            
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
          <Link href="/reports">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <h4 class="card-title text-center">
                <i class="text-heading-5">Reports</i>
              </h4>
              <img
                src="assets/imgs/page/homepage1/reports01.png"
                alt="Photo of sunset"
              />
            </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6" style={{cursor:"pointer"}}>
            <Link href="/POS">
              <div class=" shadow p-3 mb-5 bg-body rounded">
                <h4 class="card-title text-center">
                  <i class="text-heading-5">Point Of Sales</i>
                </h4>
                <img
                  src="assets/imgs/page/homepage1/pos01.png"
                  alt="Photo of sunset"
                />
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

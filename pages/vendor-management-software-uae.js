/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import dynamic from "next/dynamic";
import Intro2 from "../components/slider/Intro2";
import styles from "../styles/Purchase.module.css";
import Indexslider from "../components/indexslider";
import Contactmanager from "../components/contactmanager";
import Head from 'next/head';


function Purchase() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>

      <Head>
        <title>Effortlessly Manage Vendors with vendor management Software</title>
        <meta name="description" content=" Efficiently manage your vendors with our vendor management software. Streamline communication, track performance, and ensure compliance with contract terms." />
      </Head>

        <div className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/single/banner.png)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-10 pb-120">
                  <h1 className="text-display-2 color-white">Purchase</h1>
                  <p className="text-body-lead-large color-white mt-30 pr-40">
                    The Purchase feature in Shadobooks streamlines procurement
                    by simplifying the purchasing process, reducing the
                    likelihood of manual errors, and increasing visibility into
                    organizational spending.
                  </p>
                </div>
                <div className="col-lg-5 mt-20 ">
                  <div className="banner-imgs">
                    <img
                      className="img-banner img-responsive shape-1"
                      alt="Vendor management software UAE"
                      src="assets/imgs/page/homepage6/img-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-box">
          <div className="container">
            <div className="bg-1 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Items</h3>
                    <p className="text-body-text mt-30 icon-leaf">
                      Click the "items" tab in the purchase module of Shadobook
                    </p>
                    <p className="text-body-text mt-30 icon-leaf">
                      A list of items will display
                    </p>
                    <p className="text-body-text mt-30 icon-leaf">
                      Enter details such as the commodity code, name, warehouse
                      name, unit name, etc.
                    </p>
                    <p className="text-body-text mt-30 icon-leaf">
                      According to the details provided in the form, an items
                      file will be shown on the items page.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-120">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurIT.png"
                    alt="Vendor management software UAE"
                  />
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box  mt-50">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Vendor</h3>
                    <p className="text-body-text mt-20 icon-leaf">
                      Shadobook ERP has a vendor module to manage vendor
                      relationships, communications, and performance.
                    </p>
                    <p className="text-body-text mt-20 icon-leaf">
                      To add a new vendor, go to the purchase module, select the
                      vendor tab and click "add new vendor".
                    </p>
                    <p className="text-body-text mt-20 icon-leaf">
                      Enter vendor information such as code, name, category,
                      etc. and save the form.
                    </p>
                    <p className="text-body-text mt-20 icon-leaf">
                      The added vendor will appear in the vendor list. There is
                      also an option to import vendors and contacts through
                      separate tabs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12  mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurV.png"
                    alt="Vendor management software UAE"
                  />
                </div>
              </div>
            </div>

            <div className="bg-5 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-100">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurPR.png"
                    alt="Vendor management software UAE"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Purchase Request</h3>
                    <p className="text-body-text mt-30 icon-leaf">
                      Go to the purchase module in Shadobooks ERP, Select
                      "purchase request".
                    </p>

                    <p className="text-body-text mt-30 icon-leaf">
                      View the list of submitted purchase requests, To create a
                      new request, click the "new request" tab.
                    </p>

                    <p className="text-body-text mt-30 icon-leaf">
                      Enter details such as request code, name, department,
                      request time, etc..
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-6 panel-box  mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Vendor-Items</h3>
                    <p className="text-body-text mt-30 icon-leaf">
                      A page displaying a list of vendors and their products is
                      available.
                    </p>
                    <p className="text-body-text mt-30 icon-leaf">
                      The date the page was created is also visible.
                    </p>
                    <p className="text-body-text mt-30 icon-leaf">
                      The option to add vendors, group items, and individual
                      items is provided on the page in Shadobook ERP.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12  mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurVI.png"
                    alt="Vendor management software UAE"
                  />
                </div>
              </div>
            </div>

            <div className="bg-7 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-120">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurQ.png"
                    alt="Vendor management software UAE"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Quotations</h3>
                    <p className="text-body-text mt-30 icon-leaf">
                      A window displaying a list of quotations is available in
                      Shadobook ERP.
                    </p>

                    <p className="text-body-text mt-30 icon-leaf">
                      To create a new estimate: Go to the "New" tab, Enter
                      details such as estimate number, amount, purchase request,
                      date, etc.., Save the form
                    </p>
                    <p className="text-body-text mt-30 icon-leaf">
                      The list of quotations can now be viewed in the window.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-8 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Purchase Order</h3>

                    <p className="text-body-text mt-30 icon-leaf">
                      To view purchase orders in Shadobook ERP: Go to the
                      purchase module, Click "purchase order".
                    </p>

                    <p className="text-body-text mt-30 icon-leaf">
                      To create a new purchase order: Enter details such as
                      purchase order number, vendor, date, department, PO value,
                      etc and Save the form.
                    </p>
                    <p className="text-body-text mt-30 icon-leaf">
                      The list of purchase orders can now be viewed in the "PO
                      voucher" tab.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-120">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurPO.png"
                    alt="Vendor management software UAE"
                  />
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-120">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurOR.png"
                    alt="Vendor management software UAE"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Order Returns</h3>
                    <p className="text-body-text mt-30 icon-leaf">
                      Go to the purchase module in Shadobook ERP to view the
                      list of order returns.
                    </p>

                    <p className="text-body-text mt-30 icon-leaf">
                      To create a new order return:Click the new tab, Enter
                      details such as the order return number, vendor, total
                      amount, discount total, total after discount, date
                      created, status, etc..,Save the form
                    </p>

                    <p className="text-body-text mt-30 icon-leaf">
                      The newly created order return will be available in list
                      form.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Contracts</h3>
                    <p className="text-body-text mt-30 icon-leaf">
                      To view contracts in Shadobook ERP: Go to the purchase
                      module, Click "contracts", The list of contracts will
                      appear
                    </p>

                    <p className="text-body-text mt-30 icon-leaf">
                      To create a new contract: Click the "new" tab, Enter
                      details such as department,project, service category,
                      vendors, payment cycle etc.., save the form.
                    </p>
                    <p className="text-body-text mt-30 icon-leaf">
                      The list of debit notes can now be viewed in the debit
                      note tab.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-120">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurC.png"
                    alt="Vendor management software UAE"
                  />
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-120">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurDN.png"
                    alt="Vendor management software UAE"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Debit Notes</h3>
                    <p className="text-body-text mt-30 icon-leaf">
                      In Shadobook ERP, debit notes can be created and viewed.
                    </p>

                    <p className="text-body-text mt-20 icon-leaf">
                      To create a new debit note: Go to the purchase module,
                      Click on "debit note", Click on "new tab".
                    </p>
                    <p className="text-body-text mt-20 icon-leaf">
                      Enter details such as debit note number, debit note date,
                      vendors, amount, remaining amount etc..., Save the form.
                    </p>
                    <p className="text-body-text mt-20 icon-leaf">
                      The list of debit notes can now be viewed in the debit
                      note tab.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-120">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurI.png"
                    alt="Vendor management software UAE"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Invoices</h3>
                    <p className="text-body-text mt-20">
                      A window displaying a list of invoices created is
                      available in Shadobook ERP.
                    </p>
                    <p className="text-body-text mt-20 icon-leaf">
                      To create a new Invoice: Go to the purchase module, Click
                      on the invoice tab, Go to the new tab.
                    </p>
                    <p className="text-body-text mt-20 icon-leaf">
                      Enter details such as invoice number, vendors, contracts,
                      purchase order, invoice amount etc..., Save the form.
                    </p>

                    <p className="text-body-text mt-20 icon-leaf">
                      The list of invoices can now be viewed in the Shadobook
                      ERP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-120">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurSET.png"
                    alt="Vendor management software UAE"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-3">Settings</h3>
                    <p className="text-body-text mt-30 icon-leaf">
                      In purchase, settings refer to preferences and parameters
                      used to customize the purchasing process.
                    </p>

                    <p className="text-body-text mt-30 icon-leaf">
                      Setting up purchase options, units, approval, commodity
                      group, subgroup, vendor category, permissions, order
                      return, and currency rates are all part of the settings.
                    </p>
                  </div>
                </div>

                {/* <div className={styles.modslider}>
            <div className="mt-90">
              <Indexslider />
              <div className="text-center">
                <Link href="/modules">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    style={{ padding: "10px 20px" , marginBottom:"40px" }}
                  >
                    Show More
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
              </div>
            </div>
          </div>
        </section>

        <div className={styles.modslider}>
            <div className="mt-50">
              <Indexslider />
              <div className="text-center">
                <Link href="/modules">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    style={{ padding: "10px", marginTop:"-15px" , marginBottom:"30px" }}
                  >
                    Show More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Purchase;

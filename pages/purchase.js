/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import dynamic from "next/dynamic";
import Intro2 from "../components/slider/Intro2";

function Purchase() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
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
                      alt="Agon"
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
                    <h3 className="text-heading-2">Items</h3>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Click the "items" tab in the purchase module of Shadobook
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      A list of items will display
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Enter details such as the commodity code, name, warehouse
                      name, unit name, etc.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      According to the details provided in the form, an items
                      file will be shown on the items page.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurIT.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>

            <div className="bg-5 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-50">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurPR.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Purchase Request</h3>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Go to the purchase module in Shadobooks ERP.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Select "purchase request".
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      View the list of submitted purchase requests.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      To create a new request, click the "new request" tab.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Enter details such as request code, name, department,
                      request time, etc..
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Vendor-Items</h3>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      A page displaying a list of vendors and their products is
                      available.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      The date the page was created is also visible.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      The option to add vendors, group items, and individual
                      items is provided on the page in Shadobook ERP.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-10">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurVI.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>

            <div className="bg-7 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-50">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurQ.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Quotations</h3>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      A window displaying a list of quotations is available in
                      Shadobook ERP.
                    </p>

                    <p className="text-body-excerpt mt-30">
                      To create a new estimate:
                    </p>

                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Go to the "New" tab, Enter details such as estimate
                      number, amount, purchase request, date, etc.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Save the form, The list of quotations can now be viewed in
                      the window.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-8 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Purchase Order</h3>

                    <p className="text-body-excerpt mt-20 icon-leaf">
                      To view purchase orders in Shadobook ERP: Go to the
                      purchase module, Click "purchase order".
                    </p>

                    <p className="text-body-excerpt mt-20 icon-leaf">
                      Two types of tabs are available:"New" tab for creating a
                      new purchase order, "PO voucher" tab for viewing existing
                      purchase orders
                    </p>
                    <p className="text-body-excerpt mt-20">
                      To create a new purchase order:
                    </p>
                    <p className="text-body-excerpt mt-20 icon-leaf">
                      Enter details such as purchase order number, vendor, date,
                      department, PO value, etc and Save the form.
                    </p>
                    <p className="text-body-excerpt mt-20 icon-leaf">
                      The list of purchase orders can now be viewed in the "PO
                      voucher" tab.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-65">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurPO.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-50">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurOR.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Order Returns</h3>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Go to the purchase module in Shadobook ERP to view the
                      list of order returns.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Clicking the order return button displays the list of
                      order returns
                    </p>

                    <p className="text-body-excerpt mt-30 icon-leaf">
                      To create a new order return:Click the new tab, Enter
                      details such as the order return number, vendor, total
                      amount, discount total, total after discount, date
                      created, status, etc.
                    </p>

                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Save the form, The newly created order return will be
                      available in list form.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Contracts</h3>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      To view contracts in Shadobook ERP: Go to the purchase
                      module, Click "contracts", The list of contracts will
                      appear
                    </p>
                    <p className="text-body-excerpt mt-30 ">
                      To create a new contract:
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Click the "new" tab, Enter details such as
                      department,project, service category, vendors, contract
                      description, contract value, payment amount, payment
                      cycle,payment terms.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      save the form, The list of debit notes can now be viewed
                      in the debit note tab.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-50">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurC.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-50">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurDN.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Debit Notes</h3>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      In Shadobook ERP, debit notes can be created and viewed.
                    </p>
                    <p className="text-body-excerpt mt-30 ">
                      To create a new debit note:
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Go to the purchase module, Click on "debit note", Click on
                      "new tab".
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Enter details such as debit note number, debit note date,
                      vendors, status, amount, remaining amount etc..., Save the
                      form.
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      The list of debit notes can now be viewed in the debit
                      note tab.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-50">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurI.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Invoices</h3>
                    <p className="text-body-excerpt mt-30">
                      A window displaying a list of invoices created is
                      available in Shadobook ERP to create a new Invoice:
                    </p>
                    <p className="text-body-excerpt mt-30  icon-leaf ">
                      Go to the purchase module, Click on the invoice tab, Go to
                      the new tab
                    </p>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Enter details such as invoice number, vendors, contracts,
                      purchase order, invoice date, invoice amount etc..., Save
                      the form.
                    </p>

                    <p className="text-body-excerpt mt-30 icon-leaf">
                      The list of invoices can now be viewed in the invoice tab
                      in Shadobook ERP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-15">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/4/PurSET.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Settings</h3>
                    <p className="text-body-excerpt mt-30 icon-leaf">
                      In purchase, settings refer to preferences and parameters
                      used to customize the purchasing process.
                    </p>

                    <p className="text-body-excerpt mt-30 icon-leaf">
                      Setting up purchase options, units, approval, commodity
                      group, subgroup, vendor category, permissions, order
                      return, and currency rates are all part of the settings.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Purchase;

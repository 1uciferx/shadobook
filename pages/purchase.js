/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import dynamic from "next/dynamic";
import Intro2 from "../components/slider/Intro2";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});
function Index6() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <div className="section-box">
          <div className="banner-hero banner-homepage6">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-50 pb-120">
                  <h1 className="text-display-2 mt-20">Purchase</h1>
                  <p className="text-body-lead-large color-gray-500 mt-30 pr-40">
                    The Purchase feature in Shadobooks streamlines procurement
                    by simplifying the purchasing process, reducing the
                    likelihood of manual errors, and increasing visibility into
                    organizational spending.
                  </p>
                </div>
                <div className="col-lg-5 ">
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

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurIT.png"
                  alt="Agon"
                  height={300}
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-2 mt-20">Items</h3>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Click the "items" tab in the purchase module of Shadobook
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  A list of items will display
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Enter details such as the commodity code, name, warehouse
                  name, unit name, etc.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  According to the details provided in the form, an items file
                  will be shown on the items page.
                </p>
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-2 mt-20">Purchase Request</h3>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Go to the purchase module in Shadobooks ERP.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Select "purchase request".
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  View the list of submitted purchase requests.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  To create a new request, click the "new request" tab.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Enter details such as request code, name, department, request
                  time, etc..
                </p>
              </div>

              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurPR.png"
                  alt="Agon"
                  height={300}
                />
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurVI.png"
                  alt="Agon"
                  height={300}
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-2 mt-20">Vendor-Items</h3>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  A page displaying a list of vendors and their products is
                  available.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  The date the page was created is also visible.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  The option to add vendors, group items, and individual items
                  is provided on the page in Shadobook ERP.
                </p>
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-2 mt-20">Quotations</h3>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  A window displaying a list of quotations is available in
                  Shadobook ERP.
                </p>

                <p className="text-body-excerpt color-gray-600 mt-30">
                  To create a new estimate:
                </p>

                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Go to the "New" tab.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Enter details such as estimate number, amount, purchase
                  request, date, etc.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Save the form.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  The list of quotations can now be viewed in the window.
                </p>
              </div>

              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurQ.png"
                  alt="Agon"
                  height={300}
                />
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurPO.png"
                  alt="Agon"
                  height={300}
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do ">
                <h3 className="text-heading-2 mt-20">Purchase Order</h3>
                <p className="text-body-excerpt color-gray-600 mt-30">
                  To view purchase orders in Shadobook ERP:
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Go to the purchase module, Click "purchase order".
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30">
                  Two types of tabs are available:
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  "New" tab for creating a new purchase order, "PO voucher" tab
                  for viewing existing purchase orders
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30">
                  To create a new purchase order:
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Enter details such as purchase order number, vendor, date,
                  department, PO value, etc and Save the form.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                The list of purchase orders can now be viewed in the "PO voucher" tab.


                </p>
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-2 mt-20">Order Returns</h3>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Go to the purchase module in Shadobook ERP to view the list of order returns.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Clicking the order return button displays the list of order returns
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 ">
                To create a new order return:
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Click the new tab, Enter details such as the order return number, vendor, total amount, discount total, total after discount, date created, status, etc.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Save the form, The newly created order return will be available in list form.
                </p>
              </div>

              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurOR.png"
                  alt="Agon"
                  height={300}
                />
              </div>
            </div>

            <div className="row mt-100">
            <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurC.png"
                  alt="Agon"
                  height={300}
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do ">
                <h3 className="text-heading-2 mt-20">Contracts</h3>
                <p className="text-body-excerpt color-gray-600 mt-30">
                To view contracts in Shadobook ERP:
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Go to the purchase module, Click "contracts", The list of contracts will appear

                </p>

                <p className="text-body-excerpt color-gray-600 mt-30">
                To create a new contract:
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Click the "new" tab, Enter details such as department,project, service category, vendors, contract description,  contract value, payment amount, payment cycle,payment terms.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                save the form, The list of debit notes can now be viewed <br></br>in the debit note tab.
                </p>
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-2 mt-20">Debit Notes</h3>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                 In Shadobook ERP, debit notes can be created and viewed
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30">
                To create a new debit note:
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Go to the purchase module, Click on "debit note", Click on "new tab"
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Enter details such as debit note number, debit note date, vendors, status, amount, remaining amount etc..., Save the form.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                The list of debit notes can now be viewed in the debit note tab.
                </p>
              </div>

              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurDN.png"
                  alt="Agon"
                  height={300}
                />
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurI.png"
                  alt="Agon"
                  height={300}
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-2 mt-20">Invoices</h3>
                <p className="text-body-excerpt color-gray-600 mt-30">
                A window displaying a list of invoices created is available in Shadobook ERP to create a new Invoice:
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Go to the purchase module, Click on the invoice tab, Go to the new tab
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Enter details such as invoice number, vendors, contracts, purchase order, invoice date, invoice amount etc..., Save the form.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                The list of invoices can now be viewed in the invoice tab in Shadobook ERP.
                </p>
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-2 mt-20">Purchase Request</h3>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Go to the purchase module in Shadobooks ERP.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Select "purchase request".
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  View the list of submitted purchase requests.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  To create a new request, click the "new request" tab.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                  Enter details such as request code, name, department, request
                  time, etc..
                </p>
              </div>

              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurPR.png"
                  alt="Agon"
                  height={300}
                />
              </div>
            </div>

            <div className="row mt-100">
              <div className="col-xl-5 col-lg-6 col-sm-12 mt-40">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/about/4/PurI.png"
                  alt="Agon"
                  height={300}
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-sm-12  block-we-do">
                <h3 className="text-heading-2 mt-20">Settings</h3>
               
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                 In purchase, settings refer to preferences and parameters used to customize the purchasing process.

                </p>
                <p className="text-body-excerpt color-gray-600 mt-30 icon-leaf">
                Setting up purchase options, units, approval, commodity group, subgroup, vendor category, permissions, order return, and currency rates are all part of the settings.


                </p>
               
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section-box overflow-visible mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-1.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-2.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-3.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-4.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-5.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-6.svg"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className="section-box box-gray-100 mt-120 mb-20">
          <div className="container">
            <div className="icon-wave">
              <div className="row">
                <div className="col-lg-12 mb-60">
                  <span className="text-body-capitalized text-uppercase">
                    Contact us
                  </span>
                  <h2 className="text-heading-3 color-gray-900 mt-10">
                    Have an prject in mind?
                  </h2>
                  <p className="text-body-text color-gray-600 mt-20">
                    The right move at the right time saves your investment.
                    <br className="d-lg-block d-none" />
                    live the dream of expanding your business.
                  </p>
                </div>
                <div className="col-lg-4 mb-40">
                  <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                    Agon Studio
                  </h4>
                  <p className="text-body-text color-gray-600">
                    4517 Washington Ave.
                    <br />
                    Manchester, Kentucky 39495
                  </p>
                  <p className="text-body-text color-gray-600">
                    (239) 555-0108
                  </p>
                  <p className="text-body-text color-gray-600">
                    contact@agon.com
                  </p>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value=""
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value=""
                          placeholder="Comapy (optioanl)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value=""
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value=""
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Tell us about yourself"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                      <button
                        className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                        type="submit"
                      >
                        Send Message
                      </button>
                      <br className="d-lg-none d-block" />
                      <span className="text-body-text-md color-gray-500 mb-20">
                        By clicking contact us button, you agree our terms and
                        policy,
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="text-heading-1 mb-10">Latest News</h3>
                <p className="text-body-lead-large color-gray-600">
                  From Our blog and Event fanpage
                </p>
              </div>
              <div className="col-lg-4 text-lg-end text-start pt-30">
                <Link href="#">
                  <a className="btn btn-black icon-arrow-right-white">
                    View More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Company</span>
                  <Link href="#">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-1.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Marketing Event</span>
                  <Link href="#">
                    <a className="text-heading-4">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-2.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Customer Services</span>
                  <Link href="#">
                    <a className="text-heading-4">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="grid-4-img color-bg-4">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-3.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Company</span>
                  <Link href="#">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-4.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Marketing Event</span>
                  <Link href="#">
                    <a className="text-heading-4">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-5.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Customer Services</span>
                  <Link href="#">
                    <a className="text-heading-4">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="grid-4-img color-bg-4">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-6.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="7e90gBu4pas"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}

export default Index6;

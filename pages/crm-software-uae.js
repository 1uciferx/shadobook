/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import FeaturedSlider from "../components/slider/Featured";
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import Contactmanager from "../components/contactmanager";
import Head from 'next/head';

function Sales() {
  return (
    <>
      <Head>
        <title>Maximize Sales with best CRM software | Shadobooks ERP</title>
        <meta name="description" content="Elevate your sales with our CRM software. Optimize your process with lead management, customer tracking, and more for business growth and success." />
      </Head>

      <Layout>
        <div className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/single/sale.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-10 pb-120">
                  <h1 className="text-display-2 color-white">Sales</h1>
                  <p className="text-body-lead-large color-white mt-30 pr-40">
                    The sales interface enables hyper management of all your
                    prospects, proposals, estimations, quotations, payments,
                    invoices, credit notes and inventory management on the go.
                  </p>
                </div>
                <div className="col-lg-5 mt-20 ">
                  <div className="banner-imgs">
                    <img
                      className="img-banner img-responsive shape-1"
                      alt="CRM software UAE"
                      src="assets/imgs/page/homepage6/img-2.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-box">
          <div className="container">
            <div className="mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  {/* <div className="box-optimized"> */}
                  <h3 className="text-heading-3">Proposal</h3>
                  <p className="text-body-text mt-30 icon-leaf">
                    To view a proposal in Shadobook ERP, navigate to the sales
                    module, Click the "New Proposal" tab to create a new
                    proposal.Fill out all of the necessary details such as the
                    subject, To Whom, date, projects, etc.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf"></p>
                  <p className="text-body-text mt-30 icon-leaf">
                    Once the proposal is saved, it will appear in the form of a
                    list in the proposal overview page. You can view all the
                    proposals in the form of a list in the proposal overview
                    page.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf"></p>
                  <p className="text-body-text mt-30 icon-leaf">
                    The proposal overview page allows you to filter proposals by
                    date, To Whom, and projects.You can use the filter option to
                    view a specific proposal or group of proposals.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf"></p>
                  <p className="text-body-text mt-30 icon-leaf">
                    The proposal overview page allows you to see the progress of
                    all the proposals and manage them effectively. By using
                    filter options you can see the proposal status, and monitor
                    the performance of your team members.
                  </p>

                  {/* </div>  */}
                </div>
                <div className="col-lg-6 col-md-12 mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/5/SalProposal.png"
                    alt="CRM software UAE"
                  />
                </div>
              </div>
            </div>

            <div className="mt-50">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <h3 className="text-heading-3">Estimate</h3>
                  <p className="text-body-text mt-20 icon-leaf">
                    In Shadobook ERP, navigate to the sales module and select
                    "estimate".Click the "New Estimate" tab to create a new
                    estimate.
                  </p>
                  <p className="text-body-text mt-20 icon-leaf">
                    Once the proposal is saved, it will appear in the form of a
                    list in the proposal overview page. Enter all the necessary
                    details such as customer, estimate number, amount, project,
                    date, etc.
                  </p>
                  <p className="text-body-text mt-20 icon-leaf">
                    Once the estimate is saved, it will appear in the form of a
                    list in the estimate overview page. The estimate overview
                    page displays a list of all estimates with details such as
                    customer, estimate number, amount, project, date, and
                    status.
                  </p>
                  <p className="text-body-text mt-20 icon-leaf">
                    You can filter and sort the estimate list by customer,
                    estimate number, project, date, and status. The estimate
                    overview page allows you to view and manage all the
                    estimates in one place.
                  </p>
                  <p className="text-body-text mt-20 icon-leaf">
                    It helps to track the progress of all the estimates, and
                    manage them effectively. By using filter options you can see
                    the estimate status, and monitor the performance of your
                    team members.
                  </p>
                  <p className="text-body-text mt-20 icon-leaf">
                    The estimate overview page can be used to manage the
                    estimates, and track progress and performance of your team.
                  </p>
                </div>
                <div className="col-lg-5 col-md-12  mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/5/SalEstimates.png"
                    alt="CRM software UAE"
                  />
                </div>
              </div>
            </div>

            <div className=" mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/5/Salinvoice.png"
                    alt="CRM software UAE"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3 className="text-heading-3">Invoice</h3>
                  <p className="text-body-text mt-30 icon-leaf">
                    In Shadobooks ERP, the sales module has three types of
                    invoice tabs available: create new invoice, batch receipts,
                    and recurring invoices. To create a new invoice, go to the
                    sales module, "Invoices," and click the "Create New Invoice"
                    tab.
                  </p>

                  <p className="text-body-text mt-30 icon-leaf">
                    Enter all the necessary details such as customer, invoice
                    number, amount, project, date, etc. Once the invoice is
                    saved, it will appear in the form of a list in the invoice
                    overview page.
                  </p>

                  <p className="text-body-text mt-30 icon-leaf">
                    The invoice overview page displays a list of all invoices
                    with details such as customer, invoice number, amount,
                    project, date, and status. The invoice overview page allows
                    you to view and manage all the invoices in one place.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    It helps to track the progress of all the invoices, and
                    manage them effectively.By using filter options you can see
                    the invoice status, and monitor the performance of your team
                    members.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    The invoice overview page can be used to manage the
                    invoices, and track progress and performance of your team.
                    The batch receipts tab can be used to create multiple
                    invoices at once, and recurring invoices tab can be used to
                    generate invoices automatically for a specific period of
                    time.
                  </p>
                </div>
              </div>
            </div>

            <div className="  mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <h3 className="text-heading-3">Receipt</h3>
                  <p className="text-body-text mt-30 icon-leaf">
                    In Shadobooks ERP, the sales module has a "Receipts" tab
                    where you can view and manage all the receipts.
                  </p>
                  <p className="text-body-text mt-30">
                    By clicking the receipt tab, you will see the list of
                    receipts with the following details:
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    Invoice no,Receipt mode (cash, cheque, credit card, etc),
                    Transaction id, Customer,Amount, Date The receipt overview
                    page allows you to view and manage all the receipts in one
                    place.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    You can filter and sort the receipt list by invoice number,
                    receipt mode, transaction id, customer, amount, and date. It
                    helps to track the progress of all the receipts, and manage
                    them effectively.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    By using filter options you can see the receipt status, and
                    monitor the performance of your team members. The receipt
                    overview page can be used to manage the receipts, and track
                    progress and performance of your team.
                  </p>
                </div>

                <div className="col-lg-6 col-md-12  mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/5/SalReceipt.png"
                    alt="CRM software UAE"
                  />
                </div>
              </div>
            </div>

            <div className=" mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/5/CreditNotes.png"
                    alt="CRM software UAE"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3 className="text-heading-3">Credit Notes</h3>
                  <p className="text-body-text mt-30 icon-leaf">
                    To view credit notes in Shadobooks ERP, navigate to the
                    sales module, "credit notes," and then "new credit notes."
                    Enter all the necessary details such as credit note number,
                    date, customer, status, amount, remaining amount, etc.
                  </p>

                  <p className="text-body-text mt-30 icon-leaf">
                    Once the credit note is saved, it will appear in the form of
                    a list in the credit note overview page. The credit note
                    overview page displays a list of all credit notes with
                    details such as credit note number, date, customer, status,
                    amount, and remaining amount.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    You can filter and sort the credit note list by credit note
                    number, date, customer, status, amount, and remaining
                    amount. The credit note overview page allows you to view and
                    manage all the credit notes in one place.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    It helps to track the progress of all the credit notes, and
                    manage them effectively.By using filter options you can see
                    the credit note status, and monitor the performance of your
                    team members.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    The credit note overview page can be used to manage the
                    credit notes, and track progress and performance of your
                    team.
                  </p>
                </div>
              </div>
            </div>

            <div className=" mt-50 mb-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <h3 className="text-heading-3">Items</h3>

                  <p className="text-body-text mt-30 icon-leaf">
                    To view items in Shadobook ERP, navigate to the sales
                    module, "items," and then "add" tab. Enter all the necessary
                    details such as an image, commodity code, commodity name,
                    warehouse name, units, etc.
                  </p>

                  <p className="text-body-text mt-30 icon-leaf">
                    Once the item is saved, it will appear in the form of a list
                    in the item overview page. The item overview page displays a
                    list of all items with details such as commodity code,
                    commodity name, warehouse name, units, etc.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    The item overview page allows you to view and manage all the
                    items in one place.You can filter and sort the item list by
                    commodity code, commodity name, warehouse name, units.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    It helps to track the progress of all the items, and manage
                    them effectively. By using filter options you can monitor
                    the inventory of your items.
                  </p>
                  <p className="text-body-text mt-30 icon-leaf">
                    The item overview page can be used to manage the items, and
                    track progress and performance of your team.
                  </p>
                </div>

                <div className="col-lg-6 col-md-12 mt-90">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/5/SalItems.png"
                    alt="CRM software UAE"
                  />
                </div>
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

export default Sales;

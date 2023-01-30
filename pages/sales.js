/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import FeaturedSlider from "../components/slider/Featured";

function Sales() {
  return (
    <>
      <Layout>
        <div className="section-box">
          <div className="banner-hero banner-4">
            <div className="container mt-40">
              <div className="row">
                <div className="col-lg-8">
                  <h1 className="text-display-2 mt-30">Sales</h1>
                  <p className="text-body-lead-large color-white mt-40 pr-40">
                    The sales interface enables hyper management of all your
                    prospects,
                    <br className="d-lg-block d-none" />
                    proposals, estimations, quotations, payments, invoices,
                    credit notes and inventory management on the go.
                  </p>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-4 shape-2">
                      <img
                        src="assets/imgs/page/homepage4/salesgif.gif "
                        alt="Agon"
                      />
                    </div>
                    {/* <div className="block-2 shape-3">
                      <img
                        src="/assets/imgs/page/homepage5/circle-2.svg"
                        alt="Agon"
                      />
                    </div> */}
                    {/* <div className="block-3 shape-3">
                      <img
                        src="/assets/imgs/page/homepage5/card.png"
                        alt="Agon"
                      />
                    </div> */}
                    {/* <img
                      className="img-responsive shape-1"
                      alt="Agon"
                      src="assets/imgs/page/homepage5/banner.png"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contents */}

        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="single-detail mt-50">
              <h2 className="text-heading-2">Proposal</h2>
              <p>
                ➟ To view a proposal in Shadobook ERP, navigate to the sales
                module, Click the "New Proposal" tab to create a new proposal.
                <br></br>
                <br></br>➟ Fill out all of the necessary details such as the
                subject, To Whom, date, projects, etc.
                <br></br>
                <br></br>➟ Once the proposal is saved, it will appear in the
                form of a list in the proposal overview page.
                <br></br>
                <br></br>➟ You can view all the proposals in the form of a list
                in the proposal overview page.
                <br></br>
                <br></br>➟ The proposal overview page allows you to filter
                proposals by date, To Whom, and projects.
                <br></br>
                <br></br>➟ You can use the filter option to view a specific
                proposal or group of proposals.
                <br></br>
                <br></br>➟ The proposal overview page allows you to see the
                progress of all the proposals and manage them effectively.
                <br></br>
                <br></br>➟ By using filter options you can see the proposal
                status, and monitor the performance of your team members.
              </p>
              <p />
              <div className="single-detail mt-30">
                <img
                  className="img-responsive bdr-16"
                  src="assets/imgs/page/about/5/SalProposal.png"
                  alt="Agon"
                />
              </div>
            </div>

            <div className="single-detail mt-80">
              <h2 className="text-heading-2">Estimate</h2>
              <p>
                ➟ In Shadobook ERP, navigate to the sales module and select
                "estimate."
                <br></br>
                <br></br>➟ Click the "New Estimate" tab to create a new
                estimate.
                <br></br>
                <br></br>➟ Once the proposal is saved, it will appear in the
                form of a list in the proposal overview page.
                <br></br>
                <br></br>➟ Enter all the necessary details such as customer,
                estimate number, amount, project, date, etc.
                <br></br>
                <br></br>➟ Once the estimate is saved, it will appear in the
                form of a list in the estimate overview page.
                <br></br>
                <br></br>➟ The estimate overview page displays a list of all
                estimates with details such as customer, estimate number,
                amount, project, date, and status.
                <br></br>
                <br></br>➟ You can filter and sort the estimate list by
                customer, estimate number, project, date, and status.
                <br></br>
                <br></br>➟ The estimate overview page allows you to view and
                manage all the estimates in one place.
                <br></br>
                <br></br>➟ It helps to track the progress of all the estimates,
                and manage them effectively.
                <br></br>
                <br></br>➟ By using filter options you can see the estimate
                status, and monitor the performance of your team members.
                <br></br>
                <br></br>➟ The estimate overview page can be used to manage the
                estimates, and track progress and performance of your team.
              </p>
              <p />
              <div className="single-detail mt-30">
                <img
                  className="img-responsive bdr-16"
                  src="assets/imgs/page/about/5/SalEstimates.png"
                  alt="Agon"
                />
              </div>
            </div>

            <div className="single-detail mt-80">
              <h2 className="text-heading-2">Invoice</h2>
              <p>
                ➟ In Shadobooks ERP, the sales module has three types of invoice
                tabs available: create new invoice, batch receipts, and
                recurring invoices.
                <br></br>
                <br></br>➟ To create a new invoice, go to the sales module,
                "Invoices," and click the "Create New Invoice" tab.
                <br></br>
                <br></br>➟ Enter all the necessary details such as customer,
                invoice number, amount, project, date, etc.
                <br></br>
                <br></br>➟ Once the invoice is saved, it will appear in the form
                of a list in the invoice overview page.
                <br></br>
                <br></br>➟ The invoice overview page displays a list of all
                invoices with details such as customer, invoice number, amount,
                project, date, and status.
                <br></br>
                <br></br>➟ The invoice overview page allows you to view and
                manage all the invoices in one place.
                <br></br>
                <br></br>➟ It helps to track the progress of all the invoices,
                and manage them effectively.
                <br></br>
                <br></br>➟ By using filter options you can see the invoice
                status, and monitor the performance of your team members.
                <br></br>
                <br></br>➟ The invoice overview page can be used to manage the
                invoices, and track progress and performance of your team.
                <br></br>
                <br></br>➟ The batch receipts tab can be used to create multiple
                invoices at once, and recurring invoices tab can be used to
                generate invoices automatically for a specific period of time.
              </p>
              <p />
              <div className="single-detail mt-30">
                <img
                  className="img-responsive bdr-16"
                  src="assets/imgs/page/about/5/Salinvoice.png"
                  alt="Agon"
                />
              </div>
            </div>

            <div className="single-detail mt-80">
              <h2 className="text-heading-2">Receipt</h2>
              <p>
                ➟ In Shadobooks ERP, the sales module has a "Receipts" tab where
                you can view and manage all the receipts.
                <br></br>
                <br></br>
                By clicking the receipt tab, you will see the list of receipts
                with the following details:
                <br></br>
                <br></br>➟ Invoice no,Receipt mode (cash, cheque, credit card, etc), Transaction id, Customer,Amount, Date

                <br></br>
                <br></br>➟ The receipt overview page allows you to view and manage all the receipts in one place.

                <br></br>
                <br></br>➟ You can filter and sort the receipt list by invoice number, receipt mode, transaction id, customer, amount, and date.

                <br></br>
                <br></br>➟ It helps to track the progress of all the receipts, and manage them effectively.

                <br></br>
                <br></br>➟ By using filter options you can see the receipt status, and monitor the performance of your team members.

                <br></br>
                <br></br>➟ The receipt overview page can be used to manage the receipts, and track progress and performance of your team.

              </p>
              <p />
              <div className="single-detail mt-30">
                <img
                  className="img-responsive bdr-16"
                  src="assets/imgs/page/about/5/SalReceipt.png"
                  alt="Agon"
                />
              </div>
            </div>

            <div className="single-detail mt-80">
              <h2 className="text-heading-2">Credit Notes</h2>
              <p>
                ➟ To view credit notes in Shadobooks ERP, navigate to the sales module, "credit notes," and then "new credit notes."

                <br></br>
                <br></br>➟ Enter all the necessary details such as credit note number, date, customer, status, amount, remaining amount, etc.

                <br></br>
                <br></br>➟ Once the credit note is saved, it will appear in the form of a list in the credit note overview page.

                <br></br>
                <br></br>➟ The credit note overview page displays a list of all credit notes with details such as credit note number, date, customer, status, amount, and remaining amount.

                <br></br>
                <br></br>➟ You can filter and sort the credit note list by credit note number, date, customer, status, amount, and remaining amount.

                <br></br>
                <br></br>➟ The credit note overview page allows you to view and manage all the credit notes in one place.

                <br></br>
                <br></br>➟ It helps to track the progress of all the credit notes, and manage them effectively.

                <br></br>
                <br></br>➟ By using filter options you can see the credit note status, and monitor the performance of your team members.

                <br></br>
                <br></br>➟ The credit note overview page can be used to manage the credit notes, and track progress and performance of your team.

              </p>
              <p />
              <div className="single-detail mt-30">
                <img
                  className="img-responsive bdr-16"
                  src="assets/imgs/page/about/5/SalCN.png"
                  alt="Agon"
                />
              </div>
            </div>

            <div className="single-detail mt-80">
              <h2 className="text-heading-2">Items</h2>
              <p>
                ➟ To view items in Shadobook ERP, navigate to the sales module, "items," and then "add" tab.

                <br></br>
                <br></br>
                ➟ Enter all the necessary details such as an image, commodity code, commodity name, warehouse name, units, etc.

                <br></br>
                <br></br>➟ Once the item is saved, it will appear in the form of a list in the item overview page.


                <br></br>
                <br></br>➟ The item overview page displays a list of all items with details such as commodity code, commodity name, warehouse name, units, etc.


                <br></br>
                <br></br>➟ The item overview page allows you to view and manage all the items in one place.


                <br></br>
                <br></br>➟ You can filter and sort the item list by commodity code, commodity name, warehouse name, units.


                <br></br>
                <br></br>➟ It helps to track the progress of all the items, and manage them effectively.


                <br></br>
                <br></br>➟ By using filter options you can monitor the inventory of your items.

                <br></br>
                <br></br>➟ The item overview page can be used to manage the items, and track progress and performance of your team.




              </p>
              <p />
              <div className="single-detail mt-30">
                <img
                  className="img-responsive bdr-16"
                  src="assets/imgs/page/about/5/SalItems.png"
                  alt="Agon"
                />
              </div>
            </div>

            <p />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Sales;

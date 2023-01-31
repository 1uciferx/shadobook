/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Utilities() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  return (
    <>
      {/* <Link href="/#">
                <a>Link</a></Link>
            </Link> */}
      <Layout>
        <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/single/banner.png)",
            }}
          >
            <div className="container">
              <div className="text-center">
                <h1 className="text-display-2 color-white mt-30">Utilities</h1>
                <p className="text-body-lead-large color-white mt-40 pr-40">
                  Utilities in CRM refer to the various tools and functions that
                  help to make the customer relationship management process more
                  efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container">
            <div className="bg-1 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Media</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In the media window, you have the options to:
                      <br></br>
                      <br></br>➟ Create a new folder.
                      <br></br>
                      <br></br>➟ Upload files using the upload icon.
                      <br></br>
                      <br></br>➟ Download files by clicking the download icon,
                      etc.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-10">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/9/Media.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>

            <div className="bg-5 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/9/BPE.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Bulk PDF Export</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ You can select one of the types, such as invoices,
                      estimates, receipts, credit notes, proposals, and
                      expenses.
                      <br></br>
                      <br></br>➟ Create a new folder.
                      <br></br>
                      <br></br>➟ After selecting the from and to dates, the
                      payment method, and clicking the submit button, the
                      selected files will be exported in bulk to Shadobook ERP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">CSV Export</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In Shadobook ERP, we have the option to export data in
                      CSV format by navigating to the Utilities module and
                      clicking on CSV export button.
                      <br></br>
                      <br></br>➟ In that window, you can select export types
                      such as customers, contacts, leads, expenses, receipts,
                      and periods.
                      <br></br>
                      <br></br>➟ After selecting the options, click the export
                      button, it will download the CSV file of exported .
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-30">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/9/CSV.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>

            <div className="bg-7 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/9/Calender.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Calender</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ This calendar page shows newly created and upcoming
                      events from the queues for sales, purchases, estimate,
                      etc.
                      <br></br>
                      <br></br>➟ To access this window, go to Utilities and
                      click on the calendar option.
                      <br></br>
                      <br></br>➟ Now you can see tasks and events in Shadobook
                      ERP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-8 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Announcements</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ To check the list of announcements, go to the Utilities
                      module and click "Announcements."
                      <br></br>
                      <br></br>➟ On this page, you can see the list of existing
                      announcements and also have the option to create a new
                      announcement by clicking the "New Tab."
                      <br></br>
                      <br></br>➟ To create a new announcement, enter the subject
                      and message fields and click the "Save" button.
                      <br></br>
                      <br></br>➟ Now, the announcement is listed in Shadobook
                      ERP.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-75">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/9/Anouncements.png"
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
                    src="assets/imgs/page/about/9/Goals.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Goals</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In Shadobook ERP, it is possible to create and view
                      goals.
                      <br></br>
                      <br></br>➟ To add a new goal, navigate to the Utilities
                      module and click on the Goal option.
                      <br></br>
                      <br></br>➟ Click on the "New Goal" tab to add a new goal.
                      <br></br>
                      <br></br>➟ Enter all details such as subject, staff
                      member, achievements, start date, end date, goal type.
                      <br></br>
                      <br></br>➟ Click the Save button to save the goal.
                      <br></br>
                      <br></br>➟ The list of goals will appear in Shadobook ERP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-10 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Activity Log</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ To check all the activities in Shadobook ERP, go to the
                      Utilities module and select Activity Log
                      <br></br>
                      <br></br>➟ On this page, there is an option to filter the
                      activities by date.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/9/AL.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>

            <div className="bg-9 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/9/TPL.png"
                    alt="Agon"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Ticket Pipe Log</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ To check the inquiries, complaints, etc. in Shadobook
                      ERP, go to the Utilities module and select the Ticket Pipe
                      Log option.
                      <br></br>
                      <br></br>➟ On this page, you can see all the data in the
                      form of a list and also have the option to filter by date.
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

export default Utilities;

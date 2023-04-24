/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import styles from "../styles/Index.module.css";
import Contactmanager from "../components/contactmanager";
import Newslider from "../components/newslider";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
import Head from 'next/head';
import { Helmet } from 'react-helmet';


const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Home() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  return (
    <>
   <Head>
        <title> Automate Your Sales Process with our Lead Management System</title>
        <meta name="description" content="Shadobooks ERP lead management system is designed to help you streamline your sales pipeline, from lead generation to close." />
        <meta name="keywords" content="Lead management system"/>
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
      </Helmet>

      {/* facebook and twitter meta graphs ends here */}


      <Layout>
        <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{ background: "url(assets/imgs/page/homepage1/eeeq.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-display-2 text-center color-white">
                    Leads
                  </h1>
                  <p className="text-body-lead-large color-white mt-40  text-center">
                    Shadobooks offers an easy to use CRM interface and
                    facilitates data access from anywhere at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />

              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>

          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-12 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Leads</span>

                  <div className="grid-4-img">
                    {/* <Link href="#"> */}
                    <a>
                      <img src="assets/imgs/page/about/11/L.png" alt="Lead management system" />
                    </a>

                    {/* </Link> */}
                  </div>
                  <div className="text-body-text">
                    <p />
                    In Shadobook ERP, the lead page is shown when you click the
                    lead module. Here we have the options to add a new lead,
                    import a lead, filter options, and also the list form of
                    generated leads.It allows<span><a href="/utility-management-software"> utilities</a></span> providers to capture important customer information, such as email addresses and phone numbers, which can be used for future marketing and communication efforts. 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div className="bg-6 panel-box mt-50">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="block-video mt-0 ">
                      <img
                        className="img-responsive"
                        src="assets/imgs/page/about/11/AL.png"
                        alt="Lead management system"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="box-optimized">
                      <h3 className="text-heading-2">Add New Lead</h3>
                      <p className="text-body-excerpt mt-30">
                        ➟ In this add new lead window, you need to select the
                        details such as status, source, and assigned.
                        <br />
                        <br />
                        ➟ You need to enter the field name such as name,
                        address, position, city, email address, state, company,
                        etc.
                        <br />
                        <br />➟ Click the save button to add the new <span><a href="/lead-management-system">task.</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div className="bg-4 panel-box mt-50">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="box-optimized">
                      <h3 className="text-heading-2">Import Leads</h3>
                      <p className="text-body-excerpt mt-30">
                        ➟ In Shadobook ERP, when you click the import lead
                        button, the import page will open.
                        <br />
                        <br />
                        ➟ To import lead, select the csv file, status, source,
                        responsible.
                        <br />
                        <br />➟ Click the import button or simulate import
                        button to import the selected file.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="block-video mt-20 ">
                      <img
                        className="img-responsive"
                        src="assets/imgs/page/about/11/IL.png"
                        alt="Lead management system"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.modslider}>
          <div className="mt-50">
            <Newslider />
            <div className="text-center">
              <Link href="/our-product">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    padding: "10px",
                    marginTop: "15px",
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
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Home;

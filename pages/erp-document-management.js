/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import Contactmanager from "../components/contactmanager";
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
        <title>ERP Document Management | Shadobooks ERP</title>
        <meta name="description" content="In order to provide secure storage, efficient file management, and optimised document processes, Shadobooks offers a complete system for ERP document management." />
        <meta name="keywords" content="ERP Document Management"/>
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
                  ERP Document Management
                  </h1>
                  <p className="text-body-lead-large color-white mt-40  text-center">
                    The File Manager in ShadobooksERP provides an efficient and
                    effective way to manage files and documents within the
                    Shadobooks platform, helping organizations to improve
                    collaboration, streamline workflows, and increase
                    productivity.
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
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                <h2 className="text-heading-2 color-gray-900">
                  Our Modules on File Manager
                </h2>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div className="bg-10 panel-box mt-50">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="box-optimized">
                      <h3 className="text-heading-2">Manage Sharing</h3>
                      <p className="text-body-excerpt mt-30">
                        ➟ The shared file in shadobooks ERP may be accessed
                        under the manage sharing tab.
                        <br />
                        <br />
                        ➟ To view this, go to File manager ⇢ Manage sharing ⇢
                        Choose the staff name, staff type, status, password, and
                        the from and to dates.
                        <br />
                        <br />➟ According to the details provided in the form, a
                        specified shared file will be shown on the manage
                        sharing page.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="block-video mt-40 ">
                      <img
                        className="img-responsive"
                        src="assets/imgs/page/homepage1/t2.png"
                        alt="ERP Document Management"
                      />
                    </div>
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
                    <div className="block-video mt-20 ">
                      <img
                        className="img-responsive"
                        src="assets/imgs/page/homepage1/t2.png"
                        alt="ERP Document Management"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="box-optimized">
                      <h3 className="text-heading-2">Manage Download</h3>
                      <p className="text-body-excerpt mt-30">
                        ➟ To view a particular downloaded file in shadobooks
                        ERP, go to File manager ⇢ Manage download ⇢ Choose the
                        staff name, hashshare and the from and to dates.
                        <br />
                        <br />➟ Using the information provided in the form, you
                        can view the specified downloaded files from the list of
                        downloaded files in the manage download page.Get help with technical issues related to files through our <span><a href="/ticketing-system-in-erp"> support</a></span> service. 
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
                      <h3 className="text-heading-2">File Sharing Reports</h3>
                      <p className="text-body-excerpt mt-30">
                        ➟ You can get a chart-based summary on the manage
                        sharing and manage download files in shadobooks ERP.
                        <br />
                        <br />
                        ➟ To get this, go to File manager ⇢ File sharing reports
                        ⇢ Choose either the Manage Downloads or the Manage
                        Sharing tab.
                        <br />
                        <br />
                        ➟ Fill out the form with your information.
                        <br />
                        <br />➟ You can now view it as a chart-based form.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="block-video mt-50 ">
                      <img
                        className="img-responsive"
                        src="assets/imgs/page/homepage1/t2.png"
                        alt="ERP Document Management"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div className="bg-10 panel-box mt-50">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="block-video mt-30 ">
                      <img
                        className="img-responsive"
                        src="assets/imgs/page/homepage1/t2.png"
                        alt="ERP Document Management"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="box-optimized">
                      <h3 className="text-heading-2">File Manager</h3>
                      <p className="text-body-excerpt mt-30">
                        ➟ <span><a href="/">Sales Agent</a></span> has the ability to upload and securely store important documents related to sales activities. 
                        <br />
                        <br />
                        ➟ You can also make your own folders and place files in
                        them.
                        <br />
                        <br />➟ To ensure that only authorized people have
                        access to a file, impose permission rules on a single
                        folder or file.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.modslider}>
          <div className="mt-50">
            <Indexslider />
            <div className="text-center">
              <Link href="/our-product">
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
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Home;

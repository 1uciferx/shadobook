/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Newslider from "../components/newslider";
import styles from "../styles/index.module.css";
import { Helmet } from "react-helmet";
import Fadedcards from "../components/Fadedcards";
import Fadedcardsmid from "../components/Fadedcardsmidscreen";
import Fadedcardssmallscreen from "../components/Fadedcardssmallscreen";
import Sectiontwo from "../components/sectiontwo";
import Sectiontwosmall from "../components/sectiontwosmall";
import Cards2 from "../components/cards2";
import Card2small from "../components/card2small";
import Cards3 from "../components/cards3";
import Cards3midscreen from "../components/cards3midscreen";
import Cards3smallscreen from "../components/card3smallscreen";
import Happyclients from "../components/happyclients";
import Cards4 from "../components/cards4";
import Cards4midscreen from "../components/cards4midscreen";
import Cintoslider from "../components/cintoslider";


function Index2() {
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      {/* firstbox */}
      {/* facebook and twitter meta graphs starts here */}
      <Helmet>
        <title>Top Accounting Software for Business | Shadobooks ERP</title>
        <meta
          name="description"
          content=" Sign up today for Shadobooks, a top accounting software for businesses. It empowers you to perform essential financial tasks such as invoice creation and cash flow monitoring. Begin your free 90-day trial now! "
        />
        <meta name="keywords" content="Top Accounting Software for Business" />

        <meta property="og:title" content="Shadobooks ERP" />
        <meta property="og:description" content="Shadobooks erp solutions." />
        <meta
          property="og:image"
          content="/assets/imgs/page/homepage1/sb-logo.png"
        />
        <meta
          property="og:url"
          content="https://www.facebook.com/shadobookscrm"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadobooks ERP" />
        <meta name="twitter:description" content="Shadobooks erp solutions." />
        <meta
          name="twitter:image"
          content="/assets/imgs/page/homepage1/sb-logo.png"
        />
        <meta http-equiv="refresh" content="0; url=https://shadobooks.com/" />

      </Helmet>

      {/* facebook and twitter meta graphs ends here */}
      <Layout>
        <div className={styles.modulescontainer}></div>

        <section className="section-box">
          <div className="banner-hero banner-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-50">
                  <span className="tag-1 bg-green-900">
                    ShadoBooks ERP Solutions
                  </span>
                  <h1 className="text-display-3 mt-30">
                    Accounting Headache? SAY{" "}
                    <span style={{ color: "#90331C" }}>GOODBYE</span>
                    <br></br>
                    <span className="text-heading-5">
                      Get solutions under one roof
                    </span>
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Driving enterprise operations towards better ease of
                    operations with an all-in-on accounting platform.
                  </p>
                  <div className="mt-40">
                    <Link href="/request-a-demo">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Get Start
                      </a>
                    </Link>
                    {/* <Link href=" "><a className="btn btn-link icon-triangle color-gray-900 ml-40">How it works
                                            </a></Link> */}
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    {/* <div className="block-1 shape-2">
                        <img
                          src="/assets/imgs/page/homepage2/sbin.jpg"
                          alt="Shadobooks erp"
                        />
                      </div> */}
                    <div className={styles.heroside}>
                      {/* <div className="block-2 shape-3">
                        <img
                          src="/assets/imgs/page/homepage2/sbindex.jpg"
                          alt="Shadobooks erp"
                        />
                      </div> */}
                    </div>
                    <img
                      className="img-responsive shape-1"
                      alt="Shadobooks erp"
                      src="assets/imgs/page/homepage2/dddf.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*old UI model hero page */}

        {/* <div className="section-box">
            <div className="mt-50 mb-40">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 mt-50 pb-120">
                  
                    <h1
                      className=" mt-50"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "700",
                        fontSize: "39px",
                        lineHeight: "66px",
                      }}
                    >
                      Best CRM Platform
                    </h1>
                    <p
                      className="mt-10 pr-4"
                      style={{
                        fontFamily: "Inter",
                        color: "#4B4D6D",
                        fontWeight: "500",
                        fontSize: "21px",
                        lineHeight: "32px",
                      }}
                    >
                      Accounting Headache? SAY GOODBYE
                     
                      <br />
                      Driving enterprise operations towards better ease of
                    
                      operations with an all-in-one accounting platform.
                    </p>
                    <Link href="/request-a-demo">
                      <div className={styles.buttonstart}>
                        <button class={styles.button}>
                          <span>Get Started </span>
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block">
                    <div className={styles.iijj}>
                      <img
                        className="img-banner img-responsive"
                        alt="shadobooks"
                        src="assets/imgs/page/homepage4/erw.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        {/* slidermenu which the features section */}

        <div className={styles.midscreen}>
          <div className="mt-30 mb-60">
            <Newslider />
            <div className="text-center">
              <Link href="/our-product">
                <div className={styles.buttonstart1}>
                  <button class={styles.button}>
                    <span>Show more </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* adaptable crm software and the soln listed page */}

        <div className={styles.fadedcard}>
          <Fadedcards />
        </div>

        <div className={styles.fadedcardsmid}>
          <Fadedcardsmid />
        </div>

        <div className={styles.fadedcardssmall}>
          <Fadedcardssmallscreen />
        </div>

        {/* simplyfy the process with sb section */}

        <div className={styles.sectiontwofor}>
          <Sectiontwo />
        </div>

        <div className={styles.sectiontwoforsml}>
          <Sectiontwosmall />
        </div>

        <div className={styles.contain}>
          <h3 className={styles.heading3}>What We Do, What You Get</h3>
          <p className={styles.para3}>
            Shadobooks presents businesses with the Dashboard which presents all
            the financial data in a dynamically interactive format while also
            opening new doors to a wealth of insights that can help you with
            informed decision-making and improve your customer-facing
            strategies.
          </p>
        </div>

        {/* three 3d cards section */}

        <div className={styles.card2bigscreen}>
          <Cards2 />
        </div>

        <div className={styles.card2midscreen}>
          <Card2small />
        </div>

        {/* our features section */}

        <div className={styles.card3bigscreen}>
          <Cards3 />
        </div>

        <div className={styles.card3midscreen}>
          <Cards3midscreen />
        </div>

        <div className={styles.card3smallscreen}>
          <Cards3smallscreen />
        </div>

        {/* clients testimonals area */}

        {/* <div>
          <Happyclients />
        </div> */}

        {/* powerful features */}

        <div className={styles.cards4screen}>
          <Cards4 />
        </div>

        <div className={styles.cards4midscreen}>
          <Cards4midscreen />
        </div>

        {/* trusted companies world wide */}
        <div className={styles.companyslider}>
          <div className={styles.cintoslider}>
            <p> Trusted by the World's Leading Companies</p>
          </div>

          <div>
            <Cintoslider />
          </div>
        </div>

        <section className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                {/* <h2 className="text-heading-1 color-gray-900 mb-10">Latest Blogs</h2> */}
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Our Latest Blogs
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>

          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-grid-style-4">
                  {/* <span className="tag-dot">Blog 1</span> */}

                  <div className="grid-4-img color-bg-9">
                    <Link href="/blogs/streamline-financial-operations">
                      <a>
                        <img
                          src="/assets/imgs/page/blog/finan.jpg"
                          alt="shadobooks"
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="/blogs/streamline-financial-operations">
                    <a className="text-heading-4">
                      Ways Shadobooks ERP can Streamline Your Financial
                      Operations
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-grid-style-4">
                  {/* <span className="tag-dot">Blog 2</span> */}

                  <div className="grid-4-img color-bg-9">
                    <Link href="/blogs/professional-accounting-software">
                      <a>
                        <img
                          src="/assets/imgs/page/blog/aa1.jpg"
                          alt="shadobooks"
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="/blogs/professional-accounting-software">
                    <a className="text-heading-4">
                      Best Professional Accounting Software for your business
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-grid-style-4">
                  {/* <span className="tag-dot">Blog 3</span> */}

                  <div className="grid-4-img color-bg-9">
                    <Link href="/blogs/accounting-erp">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage4/blog3header.jpg"
                          alt="shadobooks"
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="/blogs/accounting-erp">
                    <a className="text-heading-4">
                      Shadobooks ERP: The Best Accounting Software
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="mt-20 mb-30 text-center">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">Load more posts
                                </a></Link>
                            </div> */}
          </div>
          <div className={styles.dai}>
            <div className="text-center">
              <Link href="/blog">
                <div className={styles.buttonstart100}>
                  <button class={styles.button}>
                    <span>LOAD MORE</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Index2;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Indexslider from "../components/indexslider";
import styles from "../styles/index.module.css";
import Mobileindex from "./mobileindex";
import { Helmet } from 'react-helmet';
import Fadedcards from "../components/Fadedcards";
import Sectiontwo from "../components/sectiontwo";
import Cards2 from "../components/cards2";
import Cards3 from "../components/cards3";
import Happyclients from "../components/happyclients";
import Cards4 from "../components/cards4";
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
      <Layout>
        {/* firstbox */}

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



        <div className={styles.desktophome}>
          <div className={styles.modulescontainer}></div>

          {/* slider for the modules */}

          <div
            className="section-box"
            
          >
            <div className="mt-50 mb-40">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mt-50 pb-120">
                    {/* <span className="tag-1 bg-green-900">
                      ShadoBooks - ERP Solutions
                    </span> */}
                    <h1
                      className=" mt-20"
                      style={{
                        fontFamily: "segoe ui",
                        fontWeight: "700",
                        fontSize: "64px",
                        lineHeight: "66px",
                      }}
                    >
                      Best CRM Platform
                    </h1>
                    <p
                      className=" color-gray-500 mt-30 pr-40"
                      style={{
                        fontFamily: "segoe ui",
                        fontWeight: "600",
                        fontSize: "25px",
                        lineHeight: "32px",
                      }}
                    >
                      Accounting Headache? SAY{" "}
                      <span style={{ color: "#90331C" }}>GOODBYE</span>
                      <br />
                      Driving enterprise operations towards better ease of
                      operations with an all-in-one accounting platform.
                    </p>
                    <Link href="/request-a-demo">
                      <div className={styles.buttonstart}>
                        <button class={styles.button}>
                          <span>GET FREE DEMO </span>
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                    <div className="banner-imgs">
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
          </div>

          {/* sectiontwo */}

          <div
            className={styles.modslider}
           
          >
            <div className="mt-30 mb-60">
              <Indexslider />

              <div className="text-center">
                <Link href="/modules">
                  <div className={styles.buttonstart1}>
                    <button class={styles.button}>
                      <span>SHOW MORE </span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* sectionthree */}
          <div>
            <Fadedcards />
          </div>
          {/* sectionFOUR */}

          <div>
            <Sectiontwo />
          </div>

          <div className={styles.contain}>
            <h3 className={styles.heading3}>What We Do, What You Get</h3>
            <p className={styles.para3}>
              Shadobooks presents businesses with the Dashboard which presents
              all the financial data in a dynamically interactive format while
              also opening new doors to a wealth of insights that can help you
              with informed decision-making and improve your customer-facing
              strategies.
            </p>
          </div>

          {/* third section */}
          <div>
            <Cards2 />
          </div>

          {/* fourth section */}

          <div>
            <Cards3 />
          </div>

          {/* section 4 */}

          <div>
            <Happyclients />
          </div>

          {/* section 5  */}

          <div>
            <Cards4 />
          </div>

          {/* section 6 */}




          <div className={styles.cintoslider}>
            <p> Trusted by the World's Leading Companies</p>
          </div>

          <div>
            <Cintoslider />
          </div>
        </div>
        <div className={styles.mobilehome}>
          <Mobileindex />
        </div>


        <section className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                {/* <h2 className="text-heading-1 color-gray-900 mb-10">Latest Blogs</h2> */}
                <p className="text-body-lead-large color-gray-600 mt-20">Our Latest Blogs</p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>


          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-grid-style-4"><span className="tag-dot">Blog 2</span>


                  <div className="grid-4-img color-bg-9">
                    <Link href="/blogs/streamline-financial-operations"><a><img src="/assets/imgs/page/blog/finan.jpg" alt="Agon" />
                    </a></Link>
                  </div>
                  <Link href="/blogs/professional-accounting-software"><a className="text-heading-4">Ways Shadobooks ERP can Stramline Your Financial Operations
                  </a></Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-grid-style-4"><span className="tag-dot">Blog 1</span>


                  <div className="grid-4-img color-bg-9">
                    <Link href="/blogs/professional-accounting-software"><a><img src="/assets/imgs/page/blog/aa1.jpg" alt="Agon" />
                    </a></Link>
                  </div>
                  <Link href="/blogs/professional-accounting-software"><a className="text-heading-4">Best Professional Accounting Software for your business
                  </a></Link>
                </div>
              </div>

            </div>
            {/* <div className="mt-20 mb-30 text-center">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">Load more posts
                                </a></Link>
                            </div> */}
          </div>
        </section>

      </Layout>
    </>
  );
}

export default Index2;

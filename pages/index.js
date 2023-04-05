/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Indexslider from "../components/indexslider";
import styles from "../styles/Index.module.css";
import Mobileindex from "./mobileindex";
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
        <div className={styles.desktophome}>
          <div className={styles.modulescontainer}></div>

          {/* slider for the modules */}

          <div
            className="section-box"
            style={{
              background:
                "linear-gradient(to bottom,#FFFFFF ,#c8edeb, #FFFFFF)",
            }}
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
                        src="hero.png"
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
            style={{
              background: "linear-gradient(to bottom, #FFFFFF , #c8edeb)",
            }}
          >
            <div className="mt-30">
              <Indexslider />
              <div className="text-center">
                <Link href="/modules">
                  <button className={styles.featuresbtn} role="button">
                    <span class="text">Show More</span>
                    <span style={{ fontFamily: "segoe ui" }}>Our Features</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Fadedcards />
          </div>

          {/* sectionthree */}
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
                                    <div className="card-grid-style-4"><span className="tag-dot">Blog</span>
                                       

                                        <div className="grid-4-img color-bg-9">
                                            <Link href="/blogs/professional-accounting-software"><a><img src="/assets/imgs/page/blog/aa1.jpg" alt="Agon" />
                                            </a></Link>
                                        </div>
                                        <Link href="/blog-single"><a className="text-heading-4">Best Professional Accounting Software for your busines
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
      </Layout>
    </>
  );
}

export default Index2;

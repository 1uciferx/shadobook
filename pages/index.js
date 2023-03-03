/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Indexslider from "../components/indexslider";
import styles from "../styles/Index.module.css";
import Intro2 from "../components/slider/homeslider1";
import Mobileindex from "./mobileindex";

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
        {/* mainheading and mainpara */}

        {/* <section>
          <div className={styles.center}>
            <h1 className={styles.mainheading}>
              Accounting Headache?{" "}
              <span style={{ color: "#90331c" }}>SAY GOODBYE</span>
            </h1>
          </div>

          <div className={styles.center}>
            <p className={styles.mainpara}>
              Driving enterprise operations towards better ease of operations
              with an all-in-one accounting platform.
            </p>
          </div>
        </section> */}

        {/* firstbox */}
        <div className={styles.desktophome}>
          <div className={styles.modulescontainer}></div>

          {/* slider for the modules */}

          <div className="section-box">
            <div className="banner-hero banner-homepage6 mt-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mt-50 pb-120">
                    <span className="tag-1 bg-green-900">
                      ShadoBooks - ERP Solutions
                    </span>
                    <h1 className="text-display-4 mt-20">Best CRM Platform</h1>
                    <p className="text-body-lead-large color-gray-500 mt-30 pr-40">
                      Accounting Headache? SAY{" "}
                      <span style={{ color: "#90331C" }}>GOODBYE</span>
                      <br />
                      Driving enterprise operations towards better ease of
                      operations with an all-in-one accounting platform.
                    </p>
                    <Link href="/page-contact">
                      <div className={styles.buttonstart}>
                        <button class={styles.button}>
                          <span>GET STARTED </span>
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                    <div className="banner-imgs">
                      <div className="block-1 shape-1">
                        <img
                          src="/assets/imgs/page/homepage6/line-chart.svg"
                          alt="Agon"
                        />
                      </div>
                      {/* <div className="block-2 shape-3">
                      <img
                        src="/assets/imgs/page/homepage6/card.png"
                        alt="Agon"
                      />
                    </div> */}
                      <img
                        className="img-banner img-responsive shape-2"
                        alt="Agon"
                        src="assets/imgs/page/homepage6/banner.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="section-box box-slider-3 d-none d-lg-flex">
          <div className="container">
            <div className="block-slider-bottom-banner">
              <Intro2 />
            </div>
          </div>
        </div> */}

          <section>
            <div className={styles.center}>
              <h3 className={styles.smallheading}>Our Features</h3>
            </div>
            <div className={styles.secondbox}>
              <div class={styles.container2}>
                {/* <div className={styles.itemlogo}>
                <img src="assets/logo/logosb.png" alt="shadobooks" />
              </div> */}
                <div class={styles.item3}>
                  <h4 className={styles.boxheading2}>
                    From the big picture to every tiny detail, we got you
                    covered.
                  </h4>
                  <p className={styles.boxpara2}>
                    Manage all client interactions, proposals, invoices, support
                    tickets, tasks, project overviews, credit notes, reminders,
                    subscriptions, and orders.
                  </p>

                  <Link href="/page-contact">
                    <div className={styles.buttonstart}>
                      <button class={styles.button}>
                        <span>CONTACT US </span>
                      </button>
                    </div>
                  </Link>
                </div>

                <div class={styles.item4}>
                  <div className={styles.lastboxcontainer}>
                    <div className={styles.lastboxicons}>
                      {" "}
                      <img
                        src="assets\imgs\page\homepage1\002.png"
                        alt="shadobooks"
                      />
                    </div>

                    <div>
                      <h5 className={styles.lastboxheading}>
                        Automated reports
                      </h5>
                      <p className={styles.lastboxpara}>
                        Automate efficiently and manage accounts on one
                        platform.
                      </p>
                    </div>
                    <div className={styles.lastboxicons}>
                      {" "}
                      <img
                        src="assets\imgs\page\homepage1\004.png"
                        alt="shadobooks"
                      />
                    </div>
                    <div>
                      <h5 className={styles.lastboxheading}>
                        Realtime analytics
                      </h5>
                      <p className={styles.lastboxpara}>
                        Access all accounting data in one place.
                      </p>
                    </div>

                    <div className={styles.lastboxicons}>
                      {" "}
                      <img
                        src="assets\imgs\page\homepage1\005.png"
                        alt="shadobooks"
                      />
                    </div>

                    <div>
                      <h5 className={styles.lastboxheading}>
                        Funnel optimization
                      </h5>
                      <p className={styles.lastboxpara}>
                        Unify your data with our revolutionary accounting
                        software.
                      </p>
                    </div>

                    <div className={styles.lastboxicons}>
                      {" "}
                      <img
                        src="assets\imgs\page\homepage1\006.png"
                        alt="shadobooks"
                      />
                    </div>
                    <div>
                      <h5 className={styles.lastboxheading}>User journey</h5>
                      <p className={styles.lastboxpara}>
                        A better way to handle accounting is here.
                      </p>
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
                <Link href="/modules">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    style={{ padding: "10px 20px" }}
                  >
                    Show More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <section>
            <div className={styles.center}>
              <h3 className={styles.smallheading}>Our Solutions</h3>
            </div>
            <div className={styles.secondbox}>
              <div class={styles.container2}>
                {/* <div className={styles.itemlogo}>
                <img src="assets/logo/logosb.png" alt="shadobooks" />
              </div> */}
                <div class={styles.item3}>
                  <h4 className={styles.boxheading2}>Adaptable CRM software</h4>
                  <p className={styles.boxpara2}>
                    A complete CRM software for businesses of all sizes to
                    manage customer relationships end-to-end.
                  </p>

                  <Link href="/page-contact">
                    <div className={styles.buttonstart}>
                      <button class={styles.button}>
                        <span>CONTACT US </span>
                      </button>
                    </div>
                  </Link>
                </div>

                <div class={styles.item4}>
                  <div className={styles.lastboxcontainer}>
                    <div className={styles.lastboxicons}>
                      {" "}
                      <img
                        src="assets\imgs\page\homepage1\itt01.png"
                        alt="shadobooks"
                      />
                    </div>

                    <div>
                      <h5 className={styles.lastboxheading}>IT & Support</h5>
                      <p className={styles.lastboxpara}>
                        Our CRM's analytics track sales cycles and create custom
                        dashboards.
                      </p>
                    </div>
                    <div className={styles.lastboxicons}>
                      {" "}
                      <img
                        src="assets\imgs\page\homepage1\oil01.png"
                        alt="shadobooks"
                      />
                    </div>
                    <div>
                      <h5 className={styles.lastboxheading}>Oil & Gas</h5>
                      <p className={styles.lastboxpara}>
                        Our CRM facilitates project-based sales in the oil and
                        gas sector.
                      </p>
                    </div>

                    <div className={styles.lastboxicons}>
                      {" "}
                      <img
                        src="assets\imgs\page\homepage1\manu01.png"
                        alt="shadobooks"
                      />
                    </div>

                    <div>
                      <h5 className={styles.lastboxheading}>Manufacturing</h5>
                      <p className={styles.lastboxpara}>
                        Improve efficiency and google exposure with our
                        intelligent CRM.
                      </p>
                    </div>

                    <div className={styles.lastboxicons}>
                      {" "}
                      <img
                        src="assets\imgs\page\homepage1\retail01.png"
                        alt="shadobooks"
                      />
                    </div>
                    <div>
                      <h5 className={styles.lastboxheading}>
                        Retail & Wholesalers
                      </h5>
                      <p className={styles.lastboxpara}>
                        A unified customer service system across multiple
                        channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section>
          <div className={styles.center}>
            <h3 className={styles.smallheading}> Built Exclusively For You</h3>
          </div>
          <div className={styles.firstbox}>
            <div class={styles.container}>
              <div className={styles.itemlogo}>
                <img src="assets/logo/logosb.png" alt="shadobooks" />
              </div>
              <div class={styles.item1}>
                <h4 className={styles.boxheading12}>Adaptable CRM software</h4>
                <p className={styles.boxpara12}>
                  A complete CRM software for businesses of all sizes to manage
                  customer relationships end-to-end.
                </p>

                <Link href="/page-contact">
                <div className={styles.buttonstart}>
                  <button class={styles.button}>
                    <span>MORE INFO </span>
                  </button>
                </div>
                </Link>
              </div>
              <div class={styles.item2}>
                <div className={styles.itemvecimg}>
                  <img
                    src="assets/imgs/page/homepage1/12wq.jpg"
                    alt="shadobooks"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

          {/*circle third section */}

          <section className="section-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                  <h2 className={styles.boxheading23}>
                    What We Do, What You Get
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Shadobooks presents businesses with the Dashboard which
                    presents all the financial data in a dynamically interactive
                    format while also opening new doors to a wealth of insights
                    that can help you with informed decision-making and improve
                    your customer-facing strategies.
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
            </div>
            <div className="container mt-70">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="card-grid-1 bg-5 bg-business hover-up">
                    <div className="grid-1-img">
                      <img
                        src="/assets/imgs/page/homepage1/aa2.png"
                        alt="Agon"
                      />
                    </div>
                    <h3 className="text-heading-3 mt-20">Work smarter</h3>
                    <p className="text-body-excerpt mt-20">
                      The dashboard unifies all your sales, marketing and
                      customer support data while also giving you the leverage
                      to customize the presentation in ways you deem fit for
                      your operational flow in easy clicks.
                    </p>
                    {/* <div className="mt-30">
                    <Link href="/page-about-1">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="card-grid-1 bg-9 bg-local hover-up">
                    <div className="grid-1-img">
                      <img
                        src="/assets/imgs/page/homepage1/dq22.png"
                        alt="Agon"
                      />
                    </div>
                    <h3 className="text-heading-3 mt-20">Designed for teams</h3>
                    <p className="text-body-excerpt mt-20">
                      You can organize all the KPIs in visual formats and spot
                      trends through these interactive charts to drive your
                      efforts in a better direction.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="card-grid-1 bg-2 bg-social hover-up">
                    <div className="grid-1-img">
                      <img
                        src="/assets/imgs/page/homepage1/awe2222.png"
                        alt="Agon"
                      />
                    </div>
                    <h3 className="text-heading-3 mt-20">Advanced analytics</h3>
                    <p className="text-body-excerpt mt-20">
                      Hosting an abundance of data and breaking them down to
                      formats that are easier to interpret while also giving you
                      complete freedom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* lastbox */}

          <section className="section-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                  <h2 className={styles.boxheading24}>
                    Discover powerful features to boost your productivity
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    The customer center segment of Shadobooks is where you can
                    import all your client-facing data under one roof.
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
            </div>
            <div className="container mt-70">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="card-grid-1 bg-5 bg-business hover-up">
                    <div className="grid-1-img">
                      <img
                        src="/assets/imgs/page/homepage1/business-strategy.svg"
                        alt="Agon"
                      />
                    </div>
                    <h3 className="text-heading-3 mt-20">Acquisition</h3>
                    <p className="text-body-excerpt mt-20">
                      The customer center segment of Shadobooks is where you can
                      import all your client-facing data under one roof.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="card-grid-1 bg-9 bg-local hover-up">
                    <div className="grid-1-img">
                      <img
                        src="/assets/imgs/page/homepage1/local.svg"
                        alt="Agon"
                      />
                    </div>
                    <h3 className="text-heading-3 mt-20">Activation</h3>
                    <p className="text-body-excerpt mt-20">
                      Be it your partners from past projects or potential leads,
                      you can integrate all their data here for a single panel
                      source of view.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="card-grid-1 bg-2 bg-social hover-up">
                    <div className="grid-1-img">
                      <img
                        src="/assets/imgs/page/homepage1/social.svg"
                        alt="Agon"
                      />
                    </div>
                    <h3 className="text-heading-3 mt-20">Retention</h3>
                    <p className="text-body-excerpt mt-20">
                      You can update all their contact details, method of
                      communicating and planned actions you have in mind for the
                      leads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* our companies */}

         <div className="section-box overflow-visible mt-80">
          <div className="">
            <h2 className={styles.boxheading22}>
              Trusted by the world’s leading companies
            </h2>

            <Slider {...settings}>
              <div className="">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      style={{ margin: "auto" }}
                      alt="ShadoBooks"
                      src="assets/imgs/slider/logo/AGS.png"
                    />
                  </a>
                </Link>
              </div>
              <div className="">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      style={{ margin: "auto" }}
                      alt="ShadoBooks"
                      src="assets/imgs/slider/logo/Bizzmaster.png"
                    />
                  </a>
                </Link>
              </div>

              <div className="">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      alt="ShadoBooks"
                      style={{ margin: "auto" }}
                      src="assets/imgs/slider/logo/rulexx.png"
                    />
                  </a>
                </Link>
              </div>

              <div className="">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      style={{ margin: "auto" }}
                      alt="ShadoBooks"
                      src="assets/imgs/slider/logo/CBC.png"
                    />
                  </a>
                </Link>
              </div>
              <div className="">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      style={{ margin: "auto" }}
                      alt="ShadoBooks"
                      src="assets/imgs/slider/logo/BMC.png"
                    />
                  </a>
                </Link>
              </div>

              <div className="">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      style={{ margin: "auto" }}
                      alt="ShadoBooks"
                      src="assets/imgs/slider/logo/carlisle.png"
                    />
                  </a>
                </Link>
              </div>

              <div className="">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      alt="ShadoBooks"
                      style={{ margin: "auto" }}
                      src="assets/imgs/slider/logo/reign.png"
                    />
                  </a>
                </Link>
              </div>

              <div className="">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      alt="ShadoBooks"
                      style={{ margin: "auto" }}
                      src="assets/imgs/slider/logo/royalblue.png"
                    />
                  </a>
                </Link>
              </div>

              <div className="c">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      alt="ShadoBooks"
                      style={{ margin: "auto" }}
                      src="assets/imgs/slider/logo/gold.png"
                    />
                  </a>
                </Link>
              </div>

              <div className="c">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      width={"300px"}
                      alt="ShadoBooks"
                      style={{ margin: "auto" }}
                      src="assets/imgs/slider/logo/Mercury.png"
                    />
                  </a>
                </Link>
              </div>
            </Slider>
          </div>{" "}
         
        </div>

          {/* testimonals */}

          <div className="section-box pt-100 pb-100 mt-100 bg-6">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 mb-30">
                  <span className="tag-1 bg-3 color-gray-900">
                    Built Exclusively For You
                  </span>
                  <h3 className="text-heading-1 mt-30">
                    Don&rsquo;t take our word for it. See what our clients say.
                  </h3>
                  <p className="text-body-lead-large color-gray-600 mt-30">
                    Our Happy Clients
                  </p>
                  {/* <div className="mt-40">
                    <Link href="#">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        Learn More
                      </a>
                    </Link>
                  </div> */}
                </div>
                <div className="col-lg-7">
                  <div
                    className="row"
                    data-masonry='{"percentPosition": true }'
                  >
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          Shadobook CRM has revolutionized our business by
                          providing real-time lead and opportunity tracking,
                          enabling team collaboration, and automating sales
                          processes. Our sales cycle has become highly
                          efficient, leading to a significant increase in
                          revenue since adopting Shadobook CRM.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/users/user.png"
                              alt="Agon"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mb-5">
                            Royal Blue Coast
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          Our sales operations have become more streamlined and
                          customer engagement has improved significantly thanks
                          to Shadobook CRM's automation and analytics tools. We
                          have been able to save countless hours of manual work
                          and gain valuable insights into our sales performance.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/users/user.png"
                              alt="Agon"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mb-5">
                            Rulexx
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          Shadobook CRM has proven to be an excellent solution
                          for our growing business. It allows us to effortlessly
                          manage customer interactions, track our sales
                          pipeline, and generate reports with ease.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/users/user.png"
                              alt="Agon"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mb-5">
                            BMC Line Shipping
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">
                          Shadobook CRM has played a crucial role in improving
                          our customer service and sales processes. The
                          automation features have enabled us to respond to
                          leads quickly and efficiently, while the tools have
                          given us a deeper understanding of our customer
                          behavior.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user img-user-round">
                            <img
                              src="/assets/imgs/page/users/user.png"
                              alt="Agon"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mb-5">
                            Mercury Freight
                          </h4>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

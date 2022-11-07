/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";

function Index2() {
  return (
    <>
      <Layout>
        <div>
          <section className="section-box">
            <div className="banner-hero banner-2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mt-50">
                    {/* <span className="tag-1 bg-green-900">
                      Digital Marketing Agency
                    </span> */}
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
                      <Link href="/page-about-1">
                        <a className="btn btn-black shape-square icon-arrow-right-white">
                          Get Start
                        </a>
                      </Link>
                      <Link href="/page-about-2">
                        <a className="btn btn-link icon-triangle color-gray-900 ml-40">
                          How it works
                        </a>
                      </Link>
                    </div>
                  </div>

                  
                  <div className="col-lg-5 d-none d-lg-block">
                    <div className="banner-imgs">
                      <div className="block-1 shape-2">
                        <img
                          src="/assets/imgs/page/homepage2/balance new.png"
                          alt="Agon"
                        />
                      </div>
                      <div className="block-2 shape-3">
                        <img
                          src="/assets/imgs/page/homepage2/payment new.png"
                          alt="Agon"
                        />
                      </div>
                      <img
                        className="img-responsive shape-1"
                        alt="Agon"
                        src="assets/imgs/page/homepage2/bannernew.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-box overflow-visible mt-80">
            <div className="container">
              <h2 className="text-heading-3 text-center color-gray-900 mb-60">
                Trusted by the world’s leading companies
              </h2>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="list-partners">
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/AGS.png"
                          />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/Bizzmaster.png"
                          />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/lubechem1.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/rulexx.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/fracht.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/imagineering.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/CBC.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/BMC.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/carlisle.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/reign.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/royalblue.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/gold.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/#">
                        <a className="item-logo box-hover-shadow hover-up">
                          <img
                            alt="Agon"
                            src="assets/imgs/slider/logo/Mercury.png"
                          />
                        </a>
                      </Link>
                    </li>{" "}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="section-box">
            <div className="container mt-120">
              <div className="row">
                <div className="col-lg-6 col-sm-12 block-img-we-do">
                  <div className="inner-image">
                    <img
                      className="bdrd-16 img-responsive"
                      src="assets/imgs/page/homepage2/img-2.png"
                      alt="Agon"
                    />
                    <div className="block-chart">
                      <img
                        src="/assets/imgs/page/homepage2/chart new.png"
                        alt="chart"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do-2">
                  <span className="tag-1 bg-green-900">
                    What We Do, What You Get
                  </span>

                  <h3 className="text-heading-4 mt-30">
                      Shadobooks presents businesses
                    </h3>
                  <p className="text-heading-7 color-gray-600 ">
                   
                    with the Dashboard which presents all the financial
                    data in a dynamically interactive format while also opening
                    new doors to a wealth of insights that can help you with
                    informed decision-making and improve your customer-facing
                    strategies.
                  </p>
                  <div className="list-icons mt-50">
                    <div className="item-icon none-bd">
                      <span className="icon-left">
                        <img
                          src="/assets/imgs/page/homepage2/icon-work.svg"
                          alt="Agon"
                        />
                      </span>
                      <h4 className="text-heading-4">
                        Work smarter with powerful features
                      </h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        The dashboard unifies all your sales, marketing and
                        customer support data while also giving you the leverage
                        to customize the presentation in ways you deem fit for
                        your operational flow in easy clicks.
                      </p>
                    </div>
                    <div className="item-icon none-bd">
                      <span className="icon-left">
                        <img
                          src="/assets/imgs/page/homepage2/icon-design.svg"
                          alt="Agon"
                        />
                      </span>
                      <h4 className="text-heading-4">
                        Designed for teams of all sorts and sizes
                      </h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        You can organize all the KPIs in visual formats and spot
                        trends through these interactive charts to drive your
                        efforts in a better direction.
                      </p>
                    </div>
                    <div className="item-icon none-bd">
                      <span className="icon-left">
                        <img
                          src="/assets/imgs/page/homepage2/icon-advance.svg"
                          alt="Agon"
                        />
                      </span>
                      <h4 className="text-heading-4">
                        Advanced analytics to grow your business
                      </h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        Hosting an abundance of data and breaking them down to
                        formats that are easier to interpret while also giving
                        you complete interface freedom is why Shadobooks can be
                        a game-changer for your business efforts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          <section className="section-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Discover powerful features to
                    <br className="d-lg-block d-none" />
                    boost your productivity
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    The customer center segment of Shadobooks is where you can
                    import all your client-facing data under one roof.
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
            </div>           
          </section>


          
          <section className="section-box mt-lg-100">
            
            <div className="container mt-70">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="list-icons mt-50">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">1. Acquisition</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      The customer center segment of Shadobooks is where you can
                      import all your client-facing data under one roof.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="list-icons mt-50">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">2. Activation</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Be it your partners from past projects or potential leads,
                      you can integrate all their data here for a single panel
                      source of view that will help in data decluttering.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="list-icons mt-50">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-retent.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">3. Retention</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      You can update all their contact information,
                      communication pathways and all the courses of actions you
                      have in mind for the leads down the pipeline here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box">
            <div className="container mt-80">
              <div className="row">
                <div className="col-lg-6 col-sm-12 mb-30">
                  <span className="tag-1 bg-green-900 ">
                    Built Exclusively For You
                  </span>
                  <h3 className="text-heading-1 mt-30">
                    From the big picture to every tiny detail, we got you
                    covered.
                  </h3>
                  <p className="text-body-lead-large color-gray-600 mt-30">
                    Manage all your proposals, invoices, support tickets,
                    upcoming tasks, project overviews, credit notes, reminders,
                    subscriptions, orders or any interaction of any scale with
                    your clients here.
                  </p>
                  <div className="line-bd-green mt-50" />
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                      <h4 className="text-heading-6 icon-leaf">
                        Automated reports
                      </h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        Effective Automation. Efficient accounts handling. One
                        platform.
                      </p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                      <h4 className="text-heading-6 icon-leaf">
                        Realtime analytics
                      </h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        Empowering businesses to access all accounting data at
                        once.
                      </p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                      <h4 className="text-heading-6 icon-leaf">
                        Funnel optimization
                      </h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        Redefining accounting by bringing all your data under
                        one roof.
                      </p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                      <h4 className="text-heading-6 icon-leaf">User journey</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        A better way to handle accounting is here.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">
                  <div className="inner-image">
                    <img
                      className="bdrd-16 img-responsive"
                      src="assets/imgs/page/homepage2/img-built.png"
                      alt="Agon"
                    />
                    <div className="block-image-bottom">
                      <img
                        className="bdrd-16 img-responsive"
                        src="assets/imgs/page/homepage2/img-built-2.png"
                        alt="Agon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        {/* happy customers */}
          {/* <section className="section-box">
            <div className="container mt-120">
              <div className="bdrd-58 box-gray-100">
                <div className="row">
                  <div className="col-lg-2 col-sm-1 col-12" />
                  <div className="col-lg-8 col-sm-10 col-12 text-center">
                    <h2 className="text-heading-1 color-gray-900 mt-30">
                      Our Happy Customers
                    </h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">
                      Know about our clients, we are a woldwide corporate brand
                    </p>
                  </div>
                  <div className="col-lg-2 col-sm-1 col-12" />
                </div>
                <div className="container mt-70">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 hover-up mb-20">
                        <h5 className="text-heading-5 color-gray-900">
                          Satisfied client testimonial
                        </h5>
                        <p className="text-body-text color-gray-600 mt-20 text-comment">
                          Even factoring differences in body weight between
                          children and adults into account, it would still not
                          reach an intoxicating level in children.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user">
                            <img
                              src="/assets/imgs/page/homepage2/user-1.png"
                              alt="Agon"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mb-5">
                            Jane Cooper
                          </h4>
                          <p className="text-body-text-md">
                            Biffco Enterprises Ltd.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 hover-up mb-20">
                        <h5 className="text-heading-5 color-gray-900">
                          98% of residents recommend us
                        </h5>
                        <p className="text-body-text color-gray-600 mt-20 text-comment">
                          So yes, the alcohol (ethanol) in hand sanitizers can
                          be absorbed through the skin, but no, it would not
                          cause intoxication.
                        </p>
                        <div className="box-img-user">
                          <div className="img-user">
                            <img
                              src="/assets/imgs/page/homepage2/user-2.png"
                              alt="Agon"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mb-5">
                            Wade Warren
                          </h4>
                          <p className="text-body-text-md">Krusty Krab</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 hover-up mb-20">
                        <h5 className="text-heading-5 color-gray-900">
                          Our success stories
                        </h5>
                        <p className="text-body-text color-gray-600 mt-20 text-comment">
                          “It has been an absolute pleasure dealing with Scan
                          during the lockdown. Our church began to livestream
                          our services, and Scan had a great selection of
                          hardware....”
                        </p>
                        <div className="box-img-user">
                          <div className="img-user">
                            <img
                              src="/assets/imgs/page/homepage2/user-3.png"
                              alt="Agon"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mb-5">
                            Leslie Alexander
                          </h4>
                          <p className="text-body-text-md">
                            Biffco Enterprises Ltd.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card-grid-style-2 hover-up mb-20">
                        <h5 className="text-heading-5 color-gray-900">
                          This is simply unbelievable
                        </h5>
                        <p className="text-body-text color-gray-600 mt-20 text-comment">
                          “I was also lucky enough to read @Coding_Career early
                          and I was thoroughly blown away! It’s the book I wish
                          I had when I started my dev career.”
                        </p>
                        <div className="box-img-user">
                          <div className="img-user">
                            <img
                              src="/assets/imgs/page/homepage2/user-4.png"
                              alt="Agon"
                            />
                          </div>
                          <h4 className="text-body-lead color-gray-900 mb-5">
                            Jenny Wilson
                          </h4>
                          <p className="text-body-text-md">Soylent Corp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="section-box overflow-visible mb-100">
            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="custom-bg box-newsletter position-relative">
                    <div className="row">
                      <div className="col-lg-5 col-md-7">
                        <span className="text-body-capitalized color-gray-500 text-uppercase">
                          newsletter
                        </span>
                        <h4 className="text-heading-2 mb-10 mt-10">
                          Subscribe our newsletter
                        </h4>
                        <p className="text-body-text color-gray-500">
                          By clicking the button, you are agreeing with our
                        </p>

                        <Link href="/page-terms">
                          <a>Term &amp; Conditions</a>
                        </Link>

                        <div className="box-form-newsletter mt-30">
                          <form className="form-newsletter">
                            <input
                              className="input-newsletter"
                              placeholder="Enter you mail .."
                            />
                            {/* <button className="btn btn-send" /> */}
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                        <div className="block-chart shape-1">
                          <img
                            src="/assets/imgs/page/homepage2/chart new.png"
                            alt="chart"
                          />
                        </div>
                        <img
                          className="img-responsive img-newsletter"
                          src="assets/imgs/template/img-newsletter.png"
                          alt="Agon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Index2;

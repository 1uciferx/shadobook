import React from 'react'
import Layout from '../components/layout/Layout';
// import Accordion1 from "../components/elements/Accordion1";
import Link from "next/link";
import Accordion1 from './Accordion1';
function Faq() {
  return (
    <div>
        <Layout >
        <section className="section-box">
        <div className="banner-hero banner-breadcrums">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <h1 className="text-heading-4 color-gray-900 mb-20">Join the community with more than 12,368 topics already created</h1>
                                    <p className="text-body-text color-gray-400">Professional support team will solve your problem.</p>
                                </div>
                                <div className="col-lg-7">
                                    <div className="form-square">
                                        <form className="form-inline" action="#"><input className="form-control input-with-button"  placeholder="Your question..." /><input className="text-heading-6 btn btn-square-green" type="submit" /></form>
                                        <div className="block-tags">
                                          <Link href="/page-pricing-1"><a className="text-body-text color-gray-900">Pricing plan <span className="icon-close" /></a></Link>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>                
        </section>
            <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center">
                  <h2 className="text-heading-1 color-gray-900">
                    Or choose a category
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
            </div>
            <div className="container mt-70">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div
                    className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s" style={{backgroundColor:"#edd9d8",  border: '1px solid #b59c9a' }}
                  >
                    <div className="grid-6-img">
                      <img
                        src="/assets/imgs/page/homepage1/market.svg"
                        alt="Shado Books"
                      />
                    </div>
                    <h3 className="text-heading-5 mt-20">Market research</h3>
                    <p className="text-body-text color-gray-600 mt-20">
                      One make creepeth, man bearing theira firmament.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div
                    className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"  style={{ backgroundColor: "bgColors.Default" }}
                  >
                    <div className="grid-6-img">
                      <img
                        src="/assets/imgs/page/homepage1/consulting.svg"
                        alt="Shado Books"
                      />
                    </div>
                    <h3 className="text-heading-5 mt-20">
                      Strategic Consulting
                    </h3>
                    <p className="text-body-text color-gray-600 mt-20">
                      One make creepeth, man bearing theira firmament.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div
                    className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s" style={{backgroundColor:"#f0d3c0"}}
                  >
                    <div className="grid-6-img">
                      <img
                        src="/assets/imgs/page/homepage1/cognity.svg"
                        alt="Shado Books"
                      />
                    </div>
                    <h3 className="text-heading-5 mt-20">Cognitive Solution</h3>
                    <p className="text-body-text color-gray-600 mt-20">
                      One make creepeth, man bearing theira firmament.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box pt-140 pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 mb-40">
                  <h3 className="text-heading-1">Pricing Plan questions</h3>
                  <p className="text-body-text color-gray-600 mt-30">
                    Feeling inquisitive? Have a read through some of our FAQs or
                    contact our supporters for help
                  </p>
                  <div className="row">
                    <div className="col-lg-12 mt-50">
                      <h4 className="text-heading-6 icon-leaf">
                        Boost your sale
                      </h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        The latest design trends meet hand-crafted templates.
                      </p>
                    </div>
                    <div className="col-lg-12 mt-50">
                      <h4 className="text-heading-6 icon-leaf">
                        Introducing New Features
                      </h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">
                        The latest design trends meet hand-crafted templates.
                      </p>
                    </div>
                  </div>
                  <div className="mt-60">
                    <Link href="/page-contact">
                      <a className="btn btn-black icon-arrow-right-white">
                        Contact Us
                      </a>
                    </Link>

                    <Link href="/page-login">
                      <a className="btn btn-link text-heading-6">
                        Support Center
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7">
                  <Accordion1 />
                </div>
              </div>
            </div>
          </section>


          <div className='row'>
            <div className='col-6'>1</div>
            <div className='col-6'>2</div>

          </div>
        </Layout>
    </div>
  )
}

export default Faq;
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import { Helmet } from 'react-helmet';

function Oilandgas() {
  return (
    <>
      <Layout>
        
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

        <section className="section-box">
          <div className="banner-hero bg-service-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="text-display-2">
                    Discover the top CRM for the oil
                    <br className="d-lg-block d-none" />
                    and gas industry from
                    <br className="d-lg-block d-none" />
                    <span className="color-green-900">ShadoBooks</span>{" "}
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    In contrast to the more conventional approach, customer
                    relationship management in the oil and gas sector is
                    project-focused. Our business developers initially emphasize
                    a project-based sale as the source of business than a single
                    client or organization. Our CRM provides predictions of
                    gross profit, volume, and closing dates to assist with this
                    project-based pipeline management. To cooperate, We
                    ShadoBook makes decisions, offers estimates, adjusts, and
                    works efficiently, and the sales team needs access to
                    reliable real-time data.
                  </p>
                  {/* <div className="mt-40 text-center">
                    <Link href="/page-about-1">
                      <a className="btn btn-black icon-arrow-right-white">
                        Get Started
                      </a>
                    </Link>

                    <Link href="/page-faqs-2">
                      <a className="btn btn-link icon-triangle color-gray-900 ml-40">
                        How it works
                      </a>
                    </Link>
                  </div> */}
                </div>
                <div className="col-lg-12 d-none d-lg-block">
                  <div className="row">
                    <div className="col-lg-2" />
                    <div className="col-lg-8">
                      <div className="banner-imgs">
                        <div className="block-1 shape-2">
                          <img
                            src="/assets/imgs/page/services/2/banner2.png"
                            alt="ShadoBooks"
                          />
                        </div>
                        <div className="block-2 shape-2">
                          <img
                            src="/assets/imgs/page/services/2/banner1.png"
                            alt="ShadoBooks"
                          />
                        </div>
                        <div className="block-3 shape-2">
                          <img
                            src="/assets/imgs/page/services/2/banner3.png"
                            alt="ShadoBooks"
                          />
                        </div>
                        <img
                           src="assets/imgs/page/homepage4/oilandgas.jpg " 
                          alt="ShadoBooks"
                        />
                      </div>
                    </div>
                    <div className="col-lg-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="section-box mt-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />

              <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                <h2 className="text-heading-1 color-gray-900 mb-70">
                  Our features
                </h2>
              </div>
              <div className="col-lg-12 col-sm-12 col-12">
                <h2 className="text-heading-4 color-gray-900 mb-20">Asset</h2>
              </div>
              <p className="text-body-lead-large color-gray-600 ">
                In order to achieve operational efficiency, asset management is
                essential. We comprehend the necessity for efficient asset
                management to lower downtime, abide by legal and regulatory
                requirements, decrease costs, and manage resources. We provide
                asset management solutions for your oil and gas company to
                improve safety, foster performance, and lower operational risk.
              </p>

              <div className="col-lg-2 col-sm-1 col-12" />

              <div className="col-lg-8 col-sm-10 col-12 text-center mt-60"></div>

              <div className="col-lg-12 col-sm-12 col-12">
                <h2 className="text-heading-4 color-gray-900 mb-20">
                  Inventory
                </h2>
              </div>
              <p className="text-body-lead-large color-gray-600 ">
                Our ShadoBook inventory management includes all procedures, from
                handling your sales leads to maximizing your accounts
                receivable. Our basic functionality includes various sales and
                delivery scenarios, a wide range of currencies, and distribution
                networks spanning several businesses and other speaking
                prospects and clients. We ensure that all entries are processed
                wherever they conform to local tax laws and regulations.
              </p>

              <div className="col-lg-2 col-sm-1 col-12" />

              <div className="col-lg-8 col-sm-10 col-12 text-center mt-60"></div>

              <div className="col-lg-12 col-sm-12 col-12">
                <h2 className="text-heading-4 color-gray-900 mb-20">
                  Customers
                </h2>
              </div>
              <p className="text-body-lead-large color-gray-600 ">
                Our customer relationship management solution provided by the
                customer management module automates your sales operations,
                enabling you to respond to clients more quickly. Our CRM tool
                helps modify approvals to fit your sales process using workflow,
                security. You might improve customer loyalty by employing a
                customer portal that provides quick access to the frequently
                requested information.
              </p>

              <div className="col-lg-2 col-sm-1 col-12" />

              <div className="col-lg-8 col-sm-10 col-12 text-center mt-60"></div>

              <div className="col-lg-12 col-sm-12 col-12">
                <h2 className="text-heading-4 color-gray-900 mb-20">
                  Purchase and Sales
                </h2>
              </div>
              <p className="text-body-lead-large color-gray-600 ">
                Our CRM software helps businesses manage their logistics and
                supply chain processes, such as sales and purchase orders,
                inventory management, and warehouse management, and integrate
                these processes with their financials and sales. Our CRM tool
                can help businesses increase customer satisfaction, speed up
                order processing, and keep costs under control throughout the
                whole supply and distribution chain.
              </p>

              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>  
        </section>
        
        <section className="section-box">
          <div className="container mt-120">
            <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                  <h2 className="text-heading-1 color-gray-900">
                    Why choose ShadoBook to increase your sales?
                  </h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
              <div className="container mt-70">
                <OfferSlider />
              </div>
            </div>
          </div>
        </section>
        <section className="section-box pt-140 pb-50">
          <div className="container">
            <div className="row">
             
              {/* faq */}
             
                <div>
                  <div className="section-box" />
                  <div className="banner-hero banner-breadcrums">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5">
                          <h1 className="text-heading-3 color-gray-900 mb-20">
                          FAQ'S
                          </h1>
                          
                        </div>
                      
                      </div>
                    </div>
                 
                
                  <div className="section-box mt-100" />
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12 col-12">
                        <ul className="list-icons-2">
                          <li>
                            <h3 className="text-heading-5 mb-10">
                            What is CRM in the oil and gas industry?
                            </h3>
                            <p className="text-body-text color-gray-500">
                            Customer relationship management aids vital decision-makers working with big operators by connecting and maintaining several significant connections that impact the sales channel. Your business and sales personnel can understand where they affect the environment by building an overall picture of critical worker movement.
                            </p>
                          </li>
                          <li>
                            <h3 className="text-heading-5 mb-10">
                          	Is it challenging to learn CRM?
                            </h3>
                            <p className="text-body-text color-gray-500">
                            CRM is simple to learn because it is made to make managing your connections with clients easier. In order to make modifications along the road, it also enables you to track your sales and marketing activities. This makes it simpler to understand what has to be done to manage your connections with consumers.
                            </p>
                          </li>
                          
                          <li>
                            <h3 className="text-heading-5 mb-10">
                          	How can a CRM system be used to <br></br>communicate supply chain problems?
                            </h3>
                            <p className="text-body-text color-gray-500">
                            When CRM and supply chain systems work together, the two may take immediate action in response to consumer wants and expectations with the help of transparent data.
                            </p>
                          </li>
                          <li>
                            <h3 className="text-heading-5 mb-10">
                            	Why is CRM important for supply chain management?
                            </h3>
                            <p className="text-body-text color-gray-500">
                            Customer relationship management is crucial to supply chain management because it adds value to the entire system. Increased profit margins are achieved by enhancing client retention, satisfaction, and loyalty. By streamlining the supply chain, CRM aids businesses in increasing sales and income.
                            </p>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box overflow-visible mb-100">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="bg-6 box-newsletter position-relative">
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
                          <button className="btn btn-send" />
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1">
                        <img src="/assets/imgs/template/chart.png" alt="ShadoBooks" />
                      </div>
                      <img
                        className="img-responsive img-newsletter"
                        src="assets/imgs/template/img-newsletter.png"
                        alt="ShadoBooks"
                      />
                    </div>
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

export default Oilandgas;

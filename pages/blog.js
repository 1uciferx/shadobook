/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Head from "next/head";

function Blog() {
  return (
    <>
      <Head>
        <title>Blogs | Shadobooks ERP </title>

        <meta name="keywords" content="Shadobooks blogs" />
        {/* <meta http-equiv="refresh" content="0; url=https://Shadobooks.com/blog" /> */}
      </Head>

      <Layout>
        <div>
          <section className="section-box">
            <div className="banner-hero banner-breadcrums bg-gray-100">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-12  mt-100">
                    <h1 className="text-display-3 color-gray-900 mb-20">
                      Our Blogs
                    </h1>
                    {/* <p className="text-heading-6 color-gray-600 mb-20">From year to year we strive to invent the most innovative technology<br className="d-lg-block d-none" />that is used by both small enterprises and space enterprises.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-box">
            <div className="container mt-130">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Featured Articles
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    From Our Blog
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>

            <div className="container mt-90">
              <div className="row">
                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img color-bg-2 mb-20">
                      <Link href="/blog/accounting-erp-software">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/img-2.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/accounting-erp-software">
                      <a className="text-heading-4">
                        {" "}
                        A Complete Overview on Shadobooks ERP
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/Cloud-based-accounting-software">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/c21.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/Cloud-based-accounting-software">
                      <a className="text-heading-4">
                        {" "}
                        Which Accounting Software Is Best for Your Business:
                        Cloud-based or On-Premise?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/accounting-software">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/c22.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/accounting-software">
                      <a className="text-heading-4">
                        {" "}
                        Shadobooks ERP: The Best Accounting Software
                      </a>
                    </Link>
                  </div>
                </div>






                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img color-bg-2 mb-20">
                      <Link href="/blog/reasons-to-upgrade-accounting-software">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/kk101.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/reasons-to-upgrade-accounting-software">
                      <a className="text-heading-4">
                        {" "}
                        7 MORE CAUSES TO UPDATE YOUR ACCOUNTING SOFTWARE
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/best-financial-tool">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/kk102.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/best-financial-tool">
                      <a className="text-heading-4">
                        {" "}
                       The Best Financial Tool for Simplifying Complex Financial Transactions
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/erp-pos-system">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/kk104.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/erp-pos-system">
                      <a className="text-heading-4">
                        {" "}
                        How Shadobooks ERP POS System Help You to Stay Top of The Business
                      </a>
                    </Link>
                  </div>
                </div>




                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/financial-planning-and-budgeting">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/c23.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/financial-planning-and-budgeting">
                      <a className="text-heading-4">
                        {" "}
                        The Benefits of Choosing Shadobooks ERP for Financial
                        Planning and Budgeting
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/company-financial-management">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/bb5.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/company-financial-management">
                      <a className="text-heading-4">
                        {" "}
                        Why Shadobooks ERP is the Ultimate Solution for
                        Company's Financial Management Needs
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/hr-and-payroll-management">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/benefitsofsb.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/hr-and-payroll-management">
                      <a className="text-heading-4">
                        {" "}
                        Benefits of Shadobooks ERP Software for HR and Payroll
                        Management
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/accounting-erp">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/sbcrm2.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/accounting-erp">
                      <a className="text-heading-4">
                        Top 5 Reasons to Choose Shadobooks ERP for Accounting
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/professional-accounting-software">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/sbcrm3.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/professional-accounting-software">
                      <a className="text-heading-4">
                        Best Professional Accounting Software for your business
                      </a>
                    </Link>
                  </div>
                </div>



                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/accounting-software-with-multi-currency-support">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/sdf1.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/accounting-software-with-multi-currency-support">
                      <a className="text-heading-4">
                      The Advantages of Accounting Software with Multi-Currency Support
                      </a>
                    </Link>
                  </div>
                </div>


                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/shadobooks-erp-in-construction-industry">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/sdf2.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/shadobooks-erp-in-construction-industry">
                      <a className="text-heading-4">
                      Enhancing Project Efficiency and Cost Management with Shadobooks ERP in Construction Industry
                      </a>
                    </Link>
                  </div>
                </div>


                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog/automated-financial-processes">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/uu4.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog/automated-financial-processes">
                      <a className="text-heading-4">
                      Increasing Efficiency for Automated Financial Processes with Shadobooks ERP
                      </a>
                    </Link>
                  </div>
                </div>



                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                  <div className="card-list-style-1">
                    <Link href="/blog/data-privacy-in-accounting-software">
                      <a className="text-heading-6">
                        The Function of Accounting Software in Protecting Data
                        Security and Privacy
                      </a>
                    </Link>

                    <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/homepage1/sb-logo.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-body-lead color-gray-500">
                        Shadobooks
                      </h4>
                      <p className="text-body-small color-gray-500">
                        May 5, 2023
                      </p>
                    </div>

                    <div className="style-1-img color-bg-9">
                      <Link href="/blog/data-privacy-in-accounting-software">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/bb1.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="card-list-style-1">
                    <Link href="/blog/erp-in-business">
                      <a className="text-heading-6">
                        {" "}
                        The Role of ERP in Business Productivity and
                        Profitability
                      </a>
                    </Link>

                    <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/homepage1/sb-logo.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-body-lead color-gray-500">
                        Shadobooks
                      </h4>
                      <p className="text-body-small color-gray-500">
                        May 1, 2023
                      </p>
                    </div>

                    <div className="style-1-img color-bg-9">
                      <Link href="/blog/erp-in-business">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/mm1.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="card-list-style-1">
                    <Link href="/blog/streamline-financial-operations">
                      <a className="text-heading-6">
                        {" "}
                        5+ Ways Shadobooks ERP can Streamline Your Financial
                        Operations
                      </a>
                    </Link>

                    <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/homepage1/sb-logo.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-body-lead color-gray-500">
                        Shadobooks
                      </h4>
                      <p className="text-body-small color-gray-500">
                        April 05, 2023
                      </p>
                    </div>

                    <div className="style-1-img color-bg-9">
                      <Link href="/blog/streamline-financial-operations">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/mm2.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
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

export default Blog;

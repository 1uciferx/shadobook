/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Head from "next/head";

function Blog() {
  return (
    <>

      <Head>
        <title>Blogs | Shadobooks ERP </title>
     
        <meta name="keywords" content="shadobooks blogs" />
        {/* <meta http-equiv="refresh" content="0; url=https://shadobooks.com/blog" /> */}
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
                    <div className="grid-4-img mb-20">
                      <Link href="/blogs/accounting-software">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/bb5.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blogs/accounting-software">
                      <a className="text-heading-4">
                        {" "}
                        Shadobooks ERP: The Best Accounting Software
                      </a>
                    </Link>

                    {/* <p className="text-body-text color-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      interdum ullamcorper sed pharetra senectus donec nunc.
                      Consequat semper viverra nam libero justo laoreet
                      facilisis magna etiam.
                    </p> */}
                    {/* <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/blog/2/user-1.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-heading-6 color-gray-900">
                        Jenny Wilson
                      </h4>
                      <p className="text-body-small color-gray-500">
                        August 25, 2022
                      </p>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img color-bg-2 mb-20">
                      <Link href="/blogs/accounting-erp">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/img-2.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blogs/accounting-erp">
                      <a className="text-heading-4">
                        {" "}
                        Top 5 Reasons to Choose Shadobooks ERP for Accounting
                      </a>
                    </Link>

                    {/* <p className="text-body-text color-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      interdum ullamcorper sed pharetra senectus donec nunc.
                      Consequat semper viverra nam libero justo laoreet
                      facilisis magna etiam.
                    </p> */}
                    {/* <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/blog/2/user-2.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-heading-6 color-gray-900">
                        Jenny Wilson
                      </h4>
                      <p className="text-body-small color-gray-500">
                        August 25, 2022
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-list-style-1">
                    <Link href="/blogs/financial-planning-and-budgeting">
                      <a className="text-heading-6">
                        {" "}
                        The Benefits of Choosing Shadobooks ERP for Financial
                        Planning and Budgeting
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
                        ShadoBooks
                      </h4>
                      <p className="text-body-small color-gray-500">
                        April 12, 2022
                      </p>
                    </div>
                    <div className="style-1-img color-bg-10">
                      <Link href="/blog-single">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/bb4.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-list-style-1">
                    <Link href="/blogs/company-financial-management">
                      <a className="text-heading-6">
                        {" "}
                        Why Shadobooks ERP is the Ultimate Solution for
                        Company's Financial Management Needs
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
                        ShadoBooks
                      </h4>
                      <p className="text-body-small color-gray-500">
                        April 14, 2022
                      </p>
                    </div>
                    <div className="style-1-img color-bg-2">
                      <Link href="/blog-single">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/bb3.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-list-style-1">
                    <Link href="/blogs/professional-accounting-software">
                      <a className="text-heading-6">
                        {" "}
                        Best Professional Accounting Software for your business
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
                        ShadoBooks
                      </h4>
                      <p className="text-body-small color-gray-500">
                        April 03, 2022
                      </p>
                    </div>
                    <div className="style-1-img color-bg-5">
                      <Link href="/blog-single">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/bb2.jpg"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-list-style-1">
                    <Link href="/blogs/streamline-financial-operations">
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
                        ShadoBooks
                      </h4>
                      <p className="text-body-small color-gray-500">
                        April 05, 2022
                      </p>
                    </div>
                    <div className="style-1-img color-bg-9">
                      <Link href="/blog-single">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/bb1.jpg"
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

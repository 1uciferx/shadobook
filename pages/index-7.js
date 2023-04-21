/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Head from 'next/head';


function Index7() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout>
        <div className="page-homepage7-bg"></div>
        <div className="section-box">
          <div className="banner-hero banner-homepage6">
            <div className="container mt-40">
              <div className="row">
                <div className="col-lg-6 mt-30">
                  <h1 className="text-display-4">
                    Advanced analytics to grow your business
                  </h1>
                  <div className="list-social-banner">
                    <Link href="#">
                      <a className="social-banner facebook hover-up"></a>
                    </Link>

                    <Link href="#">
                      <a className="social-banner instagram hover-up"></a>
                    </Link>

                    <Link href="#">
                      <a className="social-banner twitter hover-up"></a>
                    </Link>

                    <Link href="#">
                      <a className="social-banner linkedin hover-up"></a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 offset-xl-1 mt-30">
                  <p className="text-body-lead-large color-gray-500">
                    Feugiat primis ligula risus auctor egestas and augue viverra
                    mauri tortor in iaculis magna a feugiat mauris ipsum and
                    placerat viverra
                  </p>
                  <div className="mt-40">
                    <Link href="#">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Get Start
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="btn btn-link icon-triangle color-gray-900 ml-40">
                        How it works
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <img src="/assets/imgs/page/homepage7/banner-1.png" />
              </div>
              <div className="col-lg-5">
                <img src="/assets/imgs/page/homepage7/banner-2.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div className="pb-20 text-mb-center">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
                      {/* <span className="text-display-3 color-green-900">
                        <span className="count">38</span>k+
                      </span> */}
                      <div className="text-body-quote">Managing tasks effectively</div>
                      <p className="text-body-text color-gray-500 mt-10">
                        We always provide people a complete solution upon
                        focused of any business
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
                      <span className="text-display-3 color-green-900">
                        <span className="count">17</span>k+
                      </span>
                      <div className="text-body-quote">Our Office</div>
                      <p className="text-body-text color-gray-500 mt-10">
                        We always provide people a complete solution upon
                        focused of any business
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
                      <span className="text-display-3 color-green-900">
                        <span className="count">28</span>k+
                      </span>
                      <div className="text-body-quote">Skilled People</div>
                      <p className="text-body-text color-gray-500 mt-10">
                        We always provide people a complete solution upon
                        focused of any business
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
                      <span className="text-display-3 color-green-900">
                        <span className="count">16</span>k+
                      </span>
                      <div className="text-body-quote">Happy Clients</div>
                      <p className="text-body-text color-gray-500 mt-10">
                        We always provide people a complete solution upon
                        focused of any business
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
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
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit
                </p>
                <div className="mt-40">
                  <Link href="#">
                    <a className="btn btn-default btn-white icon-arrow-right">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row" data-masonry='{"percentPosition": true }'>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        &quot;No matter where you go, It&apos;s is the coolest,
                        most happening thing around! Not able to tell you how
                        happy I am with it. &quot;
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
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
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        &quot;Wow what great service, I love it! It&apos;s is
                        the most valuable business resource we have EVER
                        purchased. We can&apos;t understand how we&apos;ve been
                        living without it. I couldn&apos;t have asked for more
                        than this.&quot;
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
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
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        &quot;Your company is truly upstanding and is behind its
                        product 100%. It&apos;s the perfect solution for our
                        business. It has really helped our business. Needless to
                        say we are extremely satisfied with the results. &quot;
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
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
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        &quot;It&apos;s is both attractive and highly adaptable.
                        It&apos;s exactly what I&apos;ve been looking for.
                        Definitely worth the investment.&quot;
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
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
        </div>
        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <img
                  className="img-small img-responsive"
                  src="assets/imgs/page/homepage7/img-1.png"
                  alt="Agon"
                />
                <div className="block-card">
                  <img src="/assets/imgs/page/homepage5/card.png" alt="Agon" />
                </div>
                <div className="block-control">
                  <img
                    src="/assets/imgs/page/homepage7/img-safety.png"
                    alt="Agon"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-1 mt-30">Our Process</h3>
                <p className="text-body-lead-large color-gray-400">
                  How we work
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <p className="text-heading-1 color-green-900 mb-10">01</p>
                    <h4 className="text-heading-6 icon-leaf">
                      Boost your sale
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <p className="text-heading-1 color-green-900 mb-10">02</p>
                    <h4 className="text-heading-6 icon-leaf">
                      Smart Installation Tools
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <p className="text-heading-1 color-green-900 mb-10">03</p>
                    <h4 className="text-heading-6 icon-leaf">
                      Introducing New Features
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <p className="text-heading-1 color-green-900 mb-10">04</p>
                    <h4 className="text-heading-6 icon-leaf">
                      Dynamic Boosting
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box mt-140">
          <div className="container text-center">
            <h2 className="text-heading-1 color-gray-900">
              Explore by Categories.
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              We provide many categories, choose a category according to
              <br className="d-lg-block d-none" />
              your expertise to make it easier to find a job.
            </p>
          </div>
          <div className="container list-category-homepage7 mt-70">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="grid-category-2">
                  <div className="grid-category-image">
                    <Link href="#">
                      <a>
                        <img src="/assets/imgs/page/homepage7/img-cat-1.png" />
                      </a>
                    </Link>
                  </div>
                  <Link href="#">
                    <a className="text-heading-5 color-gray-900">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="category-info-bottom">
                    <div className="link-category">
                      <Link href="#">
                        <a className="mr-20">Building</a>
                      </Link>
                      <span className="text-date">August 25, 2022</span>
                    </div>
                    <div className="link-readmore">
                      <Link href="#">
                        <a>READ MORE</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="grid-category-2">
                  <div className="grid-category-image">
                    <Link href="#">
                      <a>
                        <img src="/assets/imgs/page/homepage7/img-cat-2.png" />
                      </a>
                    </Link>
                  </div>
                  <Link href="#">
                    <a className="text-heading-5 color-gray-900">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="category-info-bottom">
                    <div className="link-category">
                      <Link href="#">
                        <a className="mr-20">Building</a>
                      </Link>
                      <span className="text-date">August 25, 2022</span>
                    </div>
                    <div className="link-readmore">
                      <Link href="#">
                        <a>READ MORE</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="grid-category-2">
                  <div className="grid-category-image">
                    <Link href="#">
                      <a>
                        <img src="/assets/imgs/page/homepage7/img-cat-3.png" />
                      </a>
                    </Link>
                  </div>
                  <Link href="#">
                    <a className="text-heading-5 color-gray-900">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="category-info-bottom">
                    <div className="link-category">
                      <Link href="#">
                        <a className="mr-20">Building</a>
                      </Link>
                      <span className="text-date">August 25, 2022</span>
                    </div>
                    <div className="link-readmore">
                      <Link href="#">
                        <a>READ MORE</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="grid-category-2">
                  <div className="grid-category-image">
                    <Link href="#">
                      <a>
                        <img src="/assets/imgs/page/homepage7/img-cat-4.png" />
                      </a>
                    </Link>
                  </div>
                  <Link href="#">
                    <a className="text-heading-5 color-gray-900">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="category-info-bottom">
                    <div className="link-category">
                      <Link href="#">
                        <a className="mr-20">Building</a>
                      </Link>
                      <span className="text-date">August 25, 2022</span>
                    </div>
                    <div className="link-readmore">
                      <Link href="#">
                        <a>READ MORE</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-30">
              <Link href="#">
                <a className="btn btn-black icon-arrow-right-white">
                  Load more resource
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container mt-130">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12"></div>
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  From Our Blog
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  From Our blog and Event fanpage
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12"></div>
            </div>
          </div>
          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                <div className="card-grid-style-4">
                  <div className="grid-4-img mb-20">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/blog/2/img-1.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="#">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <p className="text-body-text color-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper sed pharetra senectus donec nunc.
                    Consequat semper viverra nam libero justo laoreet facilisis
                    magna etiam.
                  </p>
                  <div className="blog-img-user">
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
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                <div className="card-grid-style-4">
                  <div className="grid-4-img color-bg-2 mb-20">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/blog/2/img-2.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="#">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <p className="text-body-text color-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper sed pharetra senectus donec nunc.
                    Consequat semper viverra nam libero justo laoreet facilisis
                    magna etiam.
                  </p>
                  <div className="blog-img-user">
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
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-list-style-1">
                  <Link href="#">
                    <a className="text-heading-6">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-3.png"
                        alt="Agon"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-500">
                      Jane Cooper
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                  <div className="style-1-img color-bg-10">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/blog/2/img-news-1.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="card-list-style-1">
                  <Link href="#">
                    <a className="text-heading-6">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-4.png"
                        alt="Agon"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-500">
                      Wade Warren
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                  <div className="style-1-img color-bg-2">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/blog/2/img-news-1.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="card-list-style-1">
                  <Link href="#">
                    <a className="text-heading-6">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-5.png"
                        alt="Agon"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-500">
                      Jenny Wilson
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                  <div className="style-1-img color-bg-5">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/blog/2/img-news-1.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="card-list-style-1">
                  <Link href="#">
                    <a className="text-heading-6">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-6.png"
                        alt="Agon"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-500">
                      Robert Fox
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                  <div className="style-1-img color-bg-9">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/blog/2/img-news-1.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box overflow-visible mb-50">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
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
                      <Link href="#">
                        <a>Term &amp; Conditions</a>
                      </Link>

                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                          <input
                            className="input-newsletter"
                            value=""
                            placeholder="Enter you mail .."
                          />
                          <button className="btn btn-send"></button>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart">
                        <img src="/assets/imgs/template/chart.png" alt="Agon" />
                      </div>
                      <img
                        className="img-responsive img-newsletter"
                        src="assets/imgs/page/homepage2/img-newsletter.png"
                        alt="Agon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Index7;

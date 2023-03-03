/* eslint-disable @next/next/no-img-element */
// import Link from "next/link";
// import PriceTable from "../components/elements/PriceTable";
// import { useState } from "react";
// import Layout from "../components/layout/Layout";
// import Slider from "react-slick";
// import dynamic from "next/dynamic";
// const ModalVideo = dynamic(import("react-modal-video"), {
//   ssr: false,
// });


// function Index2() {

//   const [isOpen, setOpen] = useState(false);

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };

//   return (
//     <>
//       <Layout>
//         <div>
//           <section className="section-box">
//             <div className="banner-hero banner-2" >
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-7 mt-50">
//                     {/* <span className="tag-1 bg-green-900">
//                       Digital Marketing Agency
//                     </span> */}
//                     <h1 className="text-display-3 mt-30">
//                       Accounting Headache? SAY{" "}
//                       <span style={{ color: "#90331C" }}>GOODBYE</span>
//                       <br></br>
//                       <span className="text-heading-5">
//                         Get solutions under one roof
//                       </span>
//                     </h1>
//                     <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
//                       Driving enterprise operations towards better ease of
//                       operations with an all-in-on accounting platform.
//                     </p>
//                     <div className="mt-40">
//                       <Link href="/page-contact">
//                         <a className="btn btn-black shape-square icon-arrow-right-white">
//                           Get Start
//                         </a>
//                       </Link>
                      

//                       <a className="btn btn-link icon-triangle color-gray-900 ml-40"  onClick={() => setOpen(true)}>
//                         How it works
//                       </a>
                      
//                     </div>
//                   </div>


//                   <div className="col-lg-5 d-none d-lg-block">
//                     <div className="banner-imgs">
//                       <div className="block-1 shape-2">
//                         <img
//                           src="/assets/imgs/page/homepage2/balance new.png"
//                           alt="ShadoBooks"
//                         />
//                       </div>
//                       <div className="block-2 shape-3">
//                         <img
//                           src="/assets/imgs/page/homepage2/payment new.png"
//                           alt="ShadoBooks"
//                         />
//                       </div>
//                       <img
//                         className="img-responsive shape-1"
//                         alt="ShadoBooks"
//                         src="assets/imgs/page/homepage2/bannernew.png"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>


//           <div className="section-box overflow-visible mt-80">
//             <div className="">
//               <h2 className="text-heading-3 text-center color-gray-900 mb-60">
//                 Trusted by the world’s leading companies
//               </h2>

//               <Slider {...settings}>
//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         style={{ margin: "auto" }}
//                         alt="ShadoBooks"
//                         src="assets/imgs/slider/logo/AGS.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         style={{ margin: "auto" }}
//                         alt="ShadoBooks"
//                         src="assets/imgs/slider/logo/Bizzmaster.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         style={{ margin: "auto" }}
//                         width={"300px"}
//                         alt="ShadoBooks"
//                         src="assets/imgs/slider/logo/lubechem1.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="">

//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         alt="ShadoBooks"
//                         style={{ margin: "auto" }}
//                         src="assets/imgs/slider/logo/rulexx.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         alt="ShadoBooks"
//                         style={{ margin: "auto" }}
//                         src="assets/imgs/slider/logo/imagineering.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         style={{ margin: "auto" }}
//                         alt="ShadoBooks"
//                         src="assets/imgs/slider/logo/CBC.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         style={{ margin: "auto" }}
//                         alt="ShadoBooks"
//                         src="assets/imgs/slider/logo/BMC.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         style={{ margin: "auto" }}
//                         alt="ShadoBooks"
//                         src="assets/imgs/slider/logo/carlisle.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>

//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         alt="ShadoBooks"
//                         style={{ margin: "auto" }}
//                         src="assets/imgs/slider/logo/reign.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>

//                 <div className="">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         alt="ShadoBooks"
//                         style={{ margin: "auto" }}
//                         src="assets/imgs/slider/logo/royalblue.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>

//                 <div className="c">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         alt="ShadoBooks"
//                         style={{ margin: "auto" }}
//                         src="assets/imgs/slider/logo/gold.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>

//                 <div className="c">
//                   <Link href="/#">
//                     <a className="item-logo box-hover-shadow hover-up">
//                       <img
//                         width={"300px"}
//                         alt="ShadoBooks"
//                         style={{ margin: "auto" }}
//                         src="assets/imgs/slider/logo/Mercury.png"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//               </Slider>

//               {/*               
//               <div className="row">
//                 <div className="col-lg-12">
//                   <ul className="list-partners">
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/AGS.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/Bizzmaster.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/lubechem1.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/rulexx.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#" legacyBehavior>
//                         <a className="clients">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/fracht.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/imagineering.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/CBC.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/BMC.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/carlisle.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/reign.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/royalblue.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/gold.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                     <li>
//                       <Link href="/#">
//                         <a className="item-logo box-hover-shadow hover-up">
//                           <img
//                             alt="ShadoBooks"
//                             src="assets/imgs/slider/logo/Mercury.png"
//                           />
//                         </a>
//                       </Link>
//                     </li>{" "}
//                   </ul>
//                 </div>
//               </div> */}
//             </div>
//           </div>


//           <section className="section-box">
//             <div className="container mt-120">
//               <div className="row">
//                 <div className="col-lg-6 col-sm-12 block-img-we-do">
//                   <div className="inner-image">
//                     <img
//                       className="bdrd-16 img-responsive"
//                       src="assets/imgs/page/homepage2/img-2.png"
//                       alt="ShadoBooks"
//                     />
//                     <div className="block-chart">
//                       <img
//                         src="/assets/imgs/page/homepage2/chart new.png"
//                         alt="chart"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 col-sm-12 block-we-do-2">
//                   <span className="tag-1 bg-green-900">
//                     What We Do, What You Get
//                   </span>

//                   <h3 className="text-heading-4 mt-30">
//                     Shadobooks presents businesses
//                   </h3>
//                   <p className="text-heading-7 color-gray-600 ">

//                     with the Dashboard which presents all the financial
//                     data in a dynamically interactive format while also opening
//                     new doors to a wealth of insights that can help you with
//                     informed decision-making and improve your customer-facing
//                     strategies.
//                   </p>
//                   <div className="list-icons mt-50">
//                     <div className="item-icon none-bd">
//                       <span className="icon-left">
//                         <img
//                           src="/assets/imgs/page/homepage2/icon-work.svg"
//                           alt="ShadoBooks"
//                         />
//                       </span>
//                       <h4 className="text-heading-4">
//                         Work smarter with powerful features
//                       </h4>
//                       <p className="text-body-excerpt color-gray-600 mt-15">
//                         The dashboard unifies all your sales, marketing and
//                         customer support data while also giving you the leverage
//                         to customize the presentation in ways you deem fit for
//                         your operational flow in easy clicks.
//                       </p>
//                     </div>
//                     <div className="item-icon none-bd">
//                       <span className="icon-left">
//                         <img
//                           src="/assets/imgs/page/homepage2/icon-design.svg"
//                           alt="ShadoBooks"
//                         />
//                       </span>
//                       <h4 className="text-heading-4">
//                         Designed for teams of all sorts and sizes
//                       </h4>
//                       <p className="text-body-excerpt color-gray-600 mt-15">
//                         You can organize all the KPIs in visual formats and spot
//                         trends through these interactive charts to drive your
//                         efforts in a better direction.
//                       </p>
//                     </div>
//                     <div className="item-icon none-bd">
//                       <span className="icon-left">
//                         <img
//                           src="/assets/imgs/page/homepage2/icon-advance.svg"
//                           alt="ShadoBooks"
//                         />
//                       </span>
//                       <h4 className="text-heading-4">
//                         Advanced analytics to grow your business
//                       </h4>
//                       <p className="text-body-excerpt color-gray-600 mt-15">
//                         Hosting an abundance of data and breaking them down to
//                         formats that are easier to interpret while also giving
//                         you complete interface freedom is why Shadobooks can be
//                         a game-changer for your business efforts.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>


//           <section className="section-box">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-2 col-sm-1 col-12" />
//                 <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
//                   <h2 className="text-heading-1 color-gray-900 mb-10">
//                     Discover powerful features to
//                     <br className="d-lg-block d-none" />
//                     boost your productivity
//                   </h2>
//                   <p className="text-body-lead-large color-gray-600 mt-20">
//                     The customer center segment of Shadobooks is where you can
//                     import all your client-facing data under one roof.
//                   </p>
//                 </div>
//                 <div className="col-lg-2 col-sm-1 col-12" />
//               </div>
//             </div>
//           </section>



//           <section className="section-box mt-lg-100">

//             <div className="container mt-70">
//               <div className="row">
//                 <div className="col-lg-4 col-md-12 col-sm-12">
//                   <div className="list-icons mt-50">
//                     <span className="icon-left">
//                       <img
//                         src="/assets/imgs/page/homepage2/icon-acquis.svg"
//                         alt="ShadoBooks"
//                       />
//                     </span>
//                     <h4 className="text-heading-4">1. Acquisition</h4>
//                     <p className="text-body-text color-gray-600 mt-15">
//                       The customer center segment of Shadobooks is where you can
//                       import all your client-facing data under one roof.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="col-lg-4 col-md-12 col-sm-12">
//                   <div className="list-icons mt-50">
//                     <span className="icon-left">
//                       <img
//                         src="/assets/imgs/page/homepage2/icon-active.svg"
//                         alt="ShadoBooks"
//                       />
//                     </span>
//                     <h4 className="text-heading-4">2. Activation</h4>
//                     <p className="text-body-text color-gray-600 mt-15">
//                       Be it your partners from past projects or potential leads,
//                       you can integrate all their data here for a single panel
//                       source of view that will help in data decluttering.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="col-lg-4 col-md-12 col-sm-12">
//                   <div className="list-icons mt-50">
//                     <span className="icon-left">
//                       <img
//                         src="/assets/imgs/page/homepage2/icon-retent.svg"
//                         alt="ShadoBooks"
//                       />
//                     </span>
//                     <h4 className="text-heading-4">3. Retention</h4>
//                     <p className="text-body-text color-gray-600 mt-15">
//                       You can update all their contact information,
//                       communication pathways and all the courses of actions you
//                       have in mind for the leads down the pipeline here.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className="section-box">
//             <div className="container mt-150">
//               <div className="row">
//                 <div className="col-lg-6 col-sm-12 mb-30">
//                   <span className="tag-1 bg-green-900 ">
//                     Built Exclusively For You
//                   </span>
//                   <h3 className="text-heading-1 mt-30">
//                     From the big picture to every tiny detail, we got you
//                     covered.
//                   </h3>
//                   <p className="text-body-lead-large color-gray-600 mt-30">
//                     Manage all your proposals, invoices, support tickets,
//                     upcoming tasks, project overviews, credit notes, reminders,
//                     subscriptions, orders or any interaction of any scale with
//                     your clients here.
//                   </p>
//                   <div className="line-bd-green mt-50" />
//                   <div className="row">
//                     <div className="col-lg-6 col-sm-6 col-12 mt-50">
//                       <h4 className="text-heading-6 icon-leaf">
//                         Automated reports
//                       </h4>
//                       <p className="text-body-excerpt color-gray-600 mt-15">
//                         Effective Automation. Efficient accounts handling. One
//                         platform.
//                       </p>
//                     </div>
//                     <div className="col-lg-6 col-sm-6 col-12 mt-50">
//                       <h4 className="text-heading-6 icon-leaf">
//                         Realtime analytics
//                       </h4>
//                       <p className="text-body-excerpt color-gray-600 mt-15">
//                         Empowering businesses to access all accounting data at
//                         once.
//                       </p>
//                     </div>
//                     <div className="col-lg-6 col-sm-6 col-12 mt-50">
//                       <h4 className="text-heading-6 icon-leaf">
//                         Funnel optimization
//                       </h4>
//                       <p className="text-body-excerpt color-gray-600 mt-15">
//                         Redefining accounting by bringing all your data under
//                         one roof.
//                       </p>
//                     </div>
//                     <div className="col-lg-6 col-sm-6 col-12 mt-50">
//                       <h4 className="text-heading-6 icon-leaf">User journey</h4>
//                       <p className="text-body-excerpt color-gray-600 mt-15">
//                         A better way to handle accounting is here.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 col-sm-12 block-we-do">
//                   <div className="inner-image">
//                     <img
//                       className="bdrd-16 img-responsive"
//                       src="assets/imgs/page/homepage2/img-built.png"
//                       alt="ShadoBooks"
//                     />
//                     <div className="block-image-bottom">
//                       <img
//                         className="bdrd-16 img-responsive"
//                         src="assets/imgs/page/homepage2/img-built-2.png"
//                         alt="ShadoBooks"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>


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
                              alt="ShadoBooks"
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
                              alt="ShadoBooks"
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
                              alt="ShadoBooks"
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
                              alt="ShadoBooks"
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

          {/* <section className="section-box overflow-visible mb-100">
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
                            <button className="btn btn-send" />
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
                          alt="ShadoBooks"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
//             </div>
//           </section> */}
//         </div>

//         <ModalVideo
//           channel="youtube"
//           autoplay
//           isOpen={isOpen}
//           videoId="SEAVbu6qf_c"
//           onClose={() => setOpen(false)}
//         />
//       </Layout>
//     </>
//   );
// }

// export default Index2;


/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import OfferSlider from "../components/mainpageslider";
import TestimonialSlider from "../components/slider/Testimonial";
import styles from "../styles/index.module.css";
import Contactmanager from "../components/contactmanager";
import Indexslider from "../components/slider/indexslider";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});


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
    cssEase: "linear"
  };

  return (
    <>
      <Layout>
        <div>
        <section>
        {/* Top heaing */}
        <div>
        <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center mt-90">
                                <h2 className="text-heading-1 color-gray-900">
                                  Accounting Headache?<span> SAY GOOGBYE</span>
                                </h2>
                                <p className="text-body-lead-large color-gray-900 mt-20">
                                   Driving enterprise operations towards better ease of operations with an all-in-one accounting platform.
                                </p>
                            </div>
                           
                    </div>
        </div>


       
        <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12 " />
                            <div className="col-lg-10 col-sm-10 col-12 text-center mt-80">
                                <h6 >Our Features</h6>
                              </div>
                            </div></div>
                           
                    </div>
           
         

                    <div className="section-box bg- panel-box-3 mb-0">
        <div className="container mt-0">
                        <div className="bg-3  ">
                   
                            <div className="row">
                              
                                <div className="col-lg-2 col-sm-1 col-12" />
                                
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">

                  
                                    <h2 className="text-heading-3 color-gray-900">
                                      
                                    Adaptable CRM software
                                    </h2>
                                    <p className="text-body-lead-large color-gray-800 mt-20">
                                    A complete CRM software for businesses of all sizes to manage customer relationships end-to-end.
                                    </p>
                                    <div className={styles.buttonstart}>
               
<Link href="/page-contact">
<div className={styles.buttonstart}>
                  <button class={styles.button}>
                    <span>GET STARTED </span>
                  </button>
                </div>
                </Link>
                </div>

                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>

                            <div className={styles.img1}>
                            <div className="box-image mt-30 mb-30">
                 
                 <img
                   className="img-responsive "
                   src="logo1/crm1.png"
                 /></div>
               </div>
                        </div>
                    </div>
                    </div>


                                <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center mt-100">
                                <h2 className="text-heading-3 color-gray-900">
                                Shadobooks presents businesses
                                </h2>
                                <p className="text-body-excerpt color-gray-600 mt-20">
                                with the Dashboard which presents all the financial data in a dynamically interactive format while also opening new doors to a wealth of insights that can help you with informed decision-making and improve your customer-facing strategies.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                    Work smarter with powerful features
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    The dashboard unifies all your sales, marketing and customer support data while also giving you the leverage to customize the presentation in ways you deem fit for your operational flow in easy clicks.
                                </p>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                    Designed for teams of all sorts and sizes
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    You can organize all the KPIs in visual formats and spot trends through these interactive charts to drive your efforts in a better direction.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                    Advanced analytics to grow your business
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    Hosting an abundance of data and breaking them down to formats that are easier to interpret while also giving you complete interface freedom is why Shadobooks can be a game-changer for your business efforts.
                                    </p>
                                  
                                </div>
                            </div>
</div>
</div>


  <section className="section-box bg-2 panel-box-3 mb-100">

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



<div className="container mt-30">

  <div className="row">

    <div className="col-lg-4 col-md-12 col-sm-12">

      <div className="list-icons mt-50">

        <span className="icon-left">

          <img

            src="/assets/imgs/page/homepage2/icon-acquis.svg"

            alt="ShadoBooks"

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

            alt="ShadoBooks"

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

            alt="ShadoBooks"

          />

        </span>

        <h4 className="text-heading-4">3. Retention</h4>

        <p className="text-body-text color-gray-600 mt-15">

          {/* Update lead contact information, communication methods, and sales pipeline actions in this location. */}

          You can update all their contact details, method of

          communicating and planned actions you have in mind for the

          leads down the pipeline here.

        </p>

      </div>

    </div>

  </div>

</div>

</section>



<div className="section-box overflow-visible mt-80">

            <div className="">

              <h2 className="text-heading-3 text-center color-gray-900 mb-60">

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

                {/* <div className="">

                  <Link href="/#">

                    <a className="item-logo box-hover-shadow hover-up">

                      <img

                        style={{ margin: "auto" }}

                        width={"300px"}

                        alt="ShadoBooks"

                        src="assets/imgs/slider/logo/lubechem1.png"

                      />

                    </a>

                  </Link>

                </div> */}

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

                {/* <div className="">

                  <Link href="/#">

                    <a className="item-logo box-hover-shadow hover-up">

                      <img

                        width={"300px"}

                        alt="ShadoBooks"

                        style={{ margin: "auto" }}

                        src="assets/imgs/slider/logo/imagineering.png"

                      />

                    </a>

                  </Link>

                </div> */}

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


</div></div>







                <div className="section-box pt-100 pb-100 mt-0 bg">
                {/* Our Happy Customers */}
        <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">
                                   From the big picture to every tiny detail, we got you covered.
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                Manage all your proposals, invoices, support tickets, upcoming tasks, project overviews, credit notes, reminders, subscriptions, orders or any interaction of any scale with your clients here.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
</div>
                    
                    







                    

                <div className="section-box pt-100 pb-100 mt-0 bg-6">
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


      </section>
</div>
      </Layout>
    </>
  );
}

export default Index2;



/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

function Customization() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-2 bg-about-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7"><span className="tag-1 color-orange-900">What We Do, What You Get</span>
                                    <h1 className="text-display-3 mt-30">Customize ShadoBooks CRM to fit your business</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">A truly customizable solution that can be modified as needed to fit your business. Use custom fields, buttons, and layouts to capture various information from your prospects, create custom views, relate information, test customization before rolling out, and even localize the language and currency to fit your users.</p>
                                    <div className="mt-40">
                                        <Link href="/page-service-1"><a className="btn btn-black shape-square icon-arrow-right-white">Join Our Team
                                        </a></Link>

                                        <Link href="/page-contact"><a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">Contact Us
                                        </a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1"><img src="/assets/imgs/page/about/1/banner2.png" alt="Agon" /></div><img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/about/1/banner1.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="bd-bottom pb-20 mb-40 text-mb-center">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={6} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40t">Years in Business</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={14} time={3}/>k</span>
                                            <p className="text-body-text color-gray-500 pl-40">Projects Done</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={26} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40">Countries / Offices</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={24} time={3}/>k</span>
                                            <p className="text-body-text color-gray-500 pl-40">Constant Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div> */}
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Multi-page Layouts</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">A layout for every process</h2>

                                 <p className="text-body-lead-large color-gray-600 mt-20">Manage sales for multiple products, geographies, or processes from one CRM system. Page layouts help your sales representatives view and access personalized data, and create workflows to function independently. With fields, links, and buttons, you get everything you need to design your own layouts as well as unique quick create pages, business card views, and related lists for each new process.</p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={() => setOpen(true)}></a>
                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/about/1/img-1.png" alt="ShadoBooks" /></div>
                            </div>
                                <div className="col-lg-1" />
                            </div>
                    </div>
                </section>

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Custom Components</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Collect and manage all the<br className="d-lg-block d-none" />data you require with ease</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">If your business requires you to collect and store information that doesn't fit into the standard modules and field offerings of ShadoBooks CRM, you can customize it with the fields you need to broaden the types of information that you can store.</p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Conditional Fields</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Simplify adding CRM data</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">When your organization has multiple products, it can be challenging to show all the optional features within each product. With Conditional Fields in ShadoBooks CRM, you can make filling out forms easy. The only fields the user works with are ones they select, resulting in a faster, clutter-free experience for your sales team. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>

                {/* <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Card Scanner</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Never lose a business<br className="d-lg-block d-none" />card again</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">The Leads app lets you scan business cards with your smartphone and automatically import them into CRM. Before a lead even leaves your booth, you can send them an automated email thanking them for their time. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section> */}

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Validation Rules</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Ensure the right data enters<br className="d-lg-block d-none" />your CRM</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">The quality of your CRM data directly impacts your overall efficiency. Make sure the right information enters your CRM, with condition checks across multiple criteria that are specific to your industry and needs. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Views and Filters</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Find the right data with<br className="d-lg-block d-none" />custom views and filters</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">Build customized views and use ShadoBooks CRM's advanced filters to cut through all the data in your CRM to focus in on the prospects that matter the most. Quickly identify hot prospects or prospects that match a defined criteria, and act on them with the necessary followups. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>


                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Picklist History Tracking</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Stay in the loop by tracking<br className="d-lg-block d-none" />key updates</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">Track key information related to every record, like the duration a record spent in a specific stage, the monetary value of a deal at various stages, and more, with picklist history tracking. It helps identify stagnation issues in your prospects, and helps you make data-informed decisions. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>


                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Subforms</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Forms within forms for better<br className="d-lg-block d-none" />detail</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">Forms are needed to capture customer information, but sometimes a basic form isn't enough—especially when there are many levels of detail to be captured. Use Subforms to associate multiple items to one customer, like adding accessories to the primary sale. You can also add quantity and aggregate functions, so all relevant info stays within a record.. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>


                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Association</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Link your data to give better<br className="d-lg-block d-none" />context</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">Data doesn't mean much without context, and most of the time, your CRM data is spread across different modules. Provide more context to your data by linking records across modules. Link Campaigns with Leads, Contacts with Accounts, and vice-versa. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Copy Customization</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Replicate your custom<br className="d-lg-block d-none" />settings with ease</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">Set up one CRM account and simply copy the settings to any other accounts that need the same settings. This customization duplication lets you save time and effort in setting up multiple accounts without having to customize each of them individually.  </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">User Field</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Co-ownership of records for<br className="d-lg-block d-none" />better collaboration</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">Assign sales reps as co-owners of a record with the user look-up field to let them collaborate on a particular prospect. Reps get access to records they need to work on without having to change their roles or permissions. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Translations</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Sell from anywhere, in your<br className="d-lg-block d-none" />own language</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">When you're targeting a global audience, it helps your sales team to have software that works in the local language. ShadoBooks CRM comes with built-in support for multiple languages and allows you to translate modules, allowing for localized sales. </p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>
                </section>

               


                {/* <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Providing solutions of every kind</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">In a professional context it often happens that private or<br className="d-lg-block d-none" />corporate clients order a publication to publish news.</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">1. Acquisition</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">2. Activation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">3. Retention</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="text-center mb-20"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span></div>
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900">Bringing the world's<br className="d-lg-block d-none" />ideas to life</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Developers are trusted to create an engaging experience for their companies, so we build tools to help them.</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 pb-40 bg-5 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Business Strategy</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/local.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Local Marketing</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bg-2 pb-40 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/social.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Social media</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Team</h3>
                                <p className="text-body-lead-large color-gray-600">Decades of experience in design and development</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TeamSlider/>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-10">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Happy Customers</h3>
                                <p className="text-body-lead-large color-gray-600">Know about our clients, we are a woldwide corporate brand</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">View More
                                </a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="/blog-single"><a className="text-heading-4">We can blend colors multiple ways, the most common
                                    </a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="/blog-single"><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate
                                    </a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="/blog-single"><a className="text-heading-4">Design Studios That Everyone Should Know About?
                                    </a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="cJVpXPSXGtk"
                    onClose={() => setOpen(false)}
                /> */}
            </Layout>

        </>
    )
}

export default Customization;

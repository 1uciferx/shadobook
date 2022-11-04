
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

function About1() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-2 bg-about-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7"><span className="tag-1 color-orange-900">What We Do, What You Get</span>
                                    <h1 className="text-display-3 mt-30">Sales and Marketing work better together</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Shado Book CRM helps your marketing teams efficiently run campaigns and pass on quality leads to Sales. Get the best ROI from every campaign you create using ShadoBooks CRM's marketing automation tools.</p>
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
                                <div className="text-center mb-20"><span className="tag-1">Customer Segmentation</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Divide and conquer with<br className="d-lg-block d-none" />targeted marketing</h2>

                                 <p className="text-body-lead-large color-gray-600 mt-20">Every customer has different needs, so you'll need a unique approach when selling. ShadoBooks CRM lets you segment customers based on their region, requirements, lead source, and even their level of responsiveness towards you. With segmentation, you can send campaigns that are tailor-made to fit your audience and assign sales reps with the right specializations for the job.</p>                              
                            </div>                       
                        </div>
                    </div>
                    <br></br><br></br>

                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={() => setOpen(true)}></a>
                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/about/1/img-1.png" alt="ShadoBooks" /></div>
                            </div>
                                <div className="col-lg-1" />
                            </div>
                    </div> */}
                </section>

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Lead Nurturing</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Everything you need to<br className="d-lg-block d-none" />convert leads to deals</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">Your leads are almost never ready to buy immediately—it’s up to a sales rep to build a lead’s interest so that they can make a purchase. You have to stick with your lead at every stage of their journey and provide the right information to nurture them towards making an informed decision. ShadoBooks CRM makes sure you stay up-to-date with every lead interaction, and automates your sales process so you can build lasting relationships.</p>                              
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
                                <div className="text-center mb-20"><span className="tag-1">Webforms</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Capture customer information<br className="d-lg-block d-none" />from website promotions</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">Build web-to-lead forms for your landing pages using a simple drag-and-drop interface. Capture information about your visitors and push the information directly into ShadoBooks CRM without writing a single line of code. </p>                              
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
                                <div className="text-center mb-20"><span className="tag-1">Marketing Attribution</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Measure the real ROI<br className="d-lg-block d-none" />of your campaigns</h2>
                                
                                 <p className="text-body-lead-large color-gray-600 mt-20">As a business, you run different campaigns for your prospects at different points in their journey. When you invest a lot of time, money, and effort in these campaigns, it's important to know what works and what doesn't work with your prospects. ShadoBooks CRM's marketing attribution helps you measure ROI and understand which campaigns are most effective in pushing prospects towards making purchasing decisions. </p>                              
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

export default About1;

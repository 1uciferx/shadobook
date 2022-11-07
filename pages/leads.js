
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

function Leads() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-2 bg-about-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-3 mt-30">Leads</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Shadobooks offers an easy-to-use CRM interface and facilitates data access from anywhere at any time. <br></br><br></br>
Drive better conversions by aligning your data under one roof. This section gives you complete authority to manage all the data pertaining to any lead including their names, phone numbers,  requirements, communication history and the nature of the lead. <br></br><br></br>
You can even note down the meeting minutes during your field visits so as to not miss any takeaways. Your sales pipeline will also work well in sync with the high level of organization that the dashboard offers. 
</p>
                                    
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1"></div><img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/about/1/banner shadobook.jpg" />

                                        {/* <img src="/assets/imgs/page/about/1/banner2.png" alt="Agon" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
            </Layout>

        </>
    )
}

export default Leads;

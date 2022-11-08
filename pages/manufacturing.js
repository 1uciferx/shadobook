/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

function Fixed() {

    return (
        <>
            <Layout>


                <section className="section-box">
                    <div
                        className="banner-hero banner-4"
                        style={{ backgroundColor: "rgb(220 198 241)" }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-2 color-gray-900">
                                        Manufacturing
                                    </h1>
                                    <p className="text-body-lead-large color-gray-900 mt-30 pr-40">
                                        The manufacturing section comes with a statistical dashboard that offers a graphical representation of your manufacturing orders in terms of the measures and period. This also comes with feature-rich options like product management, product variants, bills of materials and routing. <br></br>
                                        <br></br>
                                        This easy-to-access interface can help your business keep a thorough record of your manufacturing process, their transit and completing your work orders at proper timelines.


                                    </p>

                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        {/* <a
                      className="popup-youtube btn-play-video-2"
                      onClick={() => setOpen(true)}
                    ></a> */}

                                        <img
                                            className="img-responsive shape-2"
                                            alt="Agon"
                                            src="assets/imgs/page/homepage4/manufacturing.jpg " style={{borderRadius:"30px",height:"610px",width:"700px"}}
                                        />
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

export default Fixed;

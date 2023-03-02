/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Breadcrumb } from 'antd';
import { Col, Row } from 'antd';
import { Button, Space } from 'antd'
import Layout from "../components/layout/Layout";
import styles from "../styles/Accounting.module.css";
import TestimonialSlider from "../components/slider/Testimonial";
import OfferSlider from "../components/slider/mainpageslider";
import { Layout as L } from 'antd';
import Contactmanager from "../components/contactmanager";

const { Content } = L;







function Accounting() {


  return (
    <>
      <Layout>
      <section>
        {/* Top heaing */}
        <div>
        <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center mt-90">
                                <h2 className="text-heading-1 color-gray-900">
                                    See why we are trusted the world over
                                </h2>
                                <p className="text-body-lead-large color-gray-900 mt-20">
                                    Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit
                                    laborum — semper quis lectus nulla.
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
           
         


        <div className="container mt-0">
                        <div className="bg-2  ">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">

                                <div className={styles.itemlogo}>
                <img src="assets/logo/logosb.png" alt="shadobooks" />
              </div>
                                    <h2 className="text-heading-3 color-gray-900">
                                    Adaptable CRM software
                                    </h2>
                                    <p className="text-body-lead-large color-gray-800 mt-20">
                                    A complete CRM software for businesses of all sizes to manage customer relationships end-to-end.
                                    </p>
                                    <div className={styles.buttonstart}>
                  <button class={styles.button}>
                    <span>GET STARTED </span>
                  </button>
                </div>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <OfferSlider/>
                            </div>
                        </div>
                    </div>



                              <div className="container">
                        

                                <div className="bg-2 panel-box mt-100">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-5">
                                                Adaptable CRM software
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                A complete CRM software for businesses of all sizes to manage customer relationships end-to-end.
                                                </p>

                                               
                                            </div>
                                          </div>
                                        
                                         
                                        
                                        </div>
                                      </div>                
                                </div>





{/* Brands */}
        <div className="section-box overflow-visible mt-70">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Happy Customers */}
        <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">
                                    Our Happy Customers
                                </h3>
                                <p className="text-body-lead-large color-gray-600">
                                    Know about our clients, we are a woldwide
                                    corporate brand
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>

      </section>


      </Layout>
    </>
  );
}

export default Accounting;

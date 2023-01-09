/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Footer from "../components/layout/Footer";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import styles from "../styles/Sales.module.css";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Affix, Button } from "antd";
import { Col, Row } from "antd";
import { Divider } from "antd";
import { Layout as L } from "antd";
import { Breadcrumb, Menu, theme } from "antd";
const { Content } = L;
import { BackTop } from "antd";
import { Carousel } from "antd";
import { render } from "react-dom";
import { Tabs } from "antd";


const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});
SwiperCore.use([Autoplay, Navigation]);
function About1() {
  

  const [top, setTop] = useState(75);

  return (
    <>
      <Layout>
        <Content className="site-layout" style={{ padding: "10px 100px" }}>
          <Breadcrumb style={{ margin: "16px 0", fontWeight: "bold" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Features</Breadcrumb.Item>
            <Breadcrumb.Item>Sales</Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col span={10} style={{marginTop:"100px"}}>
              <h1
                className={styles.headings}
              >
                Sales
              </h1>
              <h4
                className={styles.para}
              >
                Driving enterprise operations towards better ease of operations
                with an all-in-on accounting platform.
              </h4>
              <div style={{marginTop:"50px"}}>
              <Link href="/page-contact">
                <a className="btn btn-black shape-square icon-arrow-right-white ">
                  Get Start
                </a>
              </Link>
              <Link href="/page-about-2">
                <a
                  className="btn btn-link icon-triangle color-gray-900 ml-40 "
                  style={{ fontWeight: "bold" }}
                >
                  How it works
                </a>
              </Link>
              </div>
            </Col>

            <Col span={14}>
              {/* <a
                      className="popup-youtube btn-play-video-2"
                      onClick={() => setOpen(true)}
                    ></a> */}

              <img
                className="img "
                alt="Agon"
                src="assets/imgs/page/homepage4/LM.jpg "
                style={{
                  borderRadius: "30px",
                  height: "400px",
                  maxWidth: "130%",
                  marginLeft: "200px",
                  marginTop: "30px",
                }}
              />
            </Col>
          </Row>
        </Content>

        {/* <Content
          className="site-layout"
          style={{ padding: "0 100px", marginTop: "50px" }}
        >
          <h3 className="text-heading-3 mb-10">Our Modules</h3>
          <p
            className="text-body-lead-large color-gray-600"
            style={{ fontSize: "20px" }}
          >
            Know about our clients, we are a woldwide corporate brand
          </p>

          <Content className="site-layout" style={{ padding: "0 50px" }}>
            <>
              <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      prevEl: ".swiper-button-prev-4",
                      nextEl: ".swiper-button-next-4",
                    }}
                    className="swiper-wrapper pb-70 pt-5"
                  >
                    {data.map((item, i) => (
                      // eslint-disable-next-line react/jsx-key
                      <SwiperSlide>
                        <div className="swiper-slide active">
                          <div
                            className={`card-grid-style-3 hover-up ${item.bg}`}
                          >
                            <div className="grid-3-img">
                              <img
                                src={`assets/imgs/page/homepage1/user-${item.avatar}`}
                                alt="Agon"
                              />
                            </div>
                            <h3 className="text-heading-6 mb-5 mt-20">
                              {item.name}
                            </h3>
                            <span className="text-body-small d-block">
                              {item.company}
                            </span>
                            <p className="text-body-text text-desc color-gray-500 mt-20">
                              {item.quote}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-4" />
                <div className="swiper-button-prev swiper-button-prev-4" />
              </div>
            </>
          </Content>
        </Content> */}

        <Content className="site-layout" style={{marginTop:"30px"}}>
          <Row>
            <Col span={24}>
              <Affix offsetTop={top} >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "10px 0",
                    marginLeft: "100px",
                  }}
                >
                  <ul class="nav nav-tabs">
                    <Col span={4}>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="#1"
                          style={{
                            color: "#90331c",
                            backgroundColor: "white",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Proposal
                        </a>
                      </li>
                    </Col>
                    <Col span={4}>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="#2"
                          style={{
                            color: "#90331c",
                            backgroundColor: "white",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Estimate
                        </a>
                      </li>
                    </Col>
                    <Col span={4}>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="#3"
                          style={{
                            color: "#90331c",
                            backgroundColor: "white",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Invoice
                        </a>
                      </li>
                    </Col>
                    <Col span={4}>
                      <li class="nav-item">
                        <a
                          class="nav-link "
                          href="#4"
                          style={{
                            color: "#90331c",
                            backgroundColor: "white",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Receipt
                        </a>
                      </li>
                    </Col>
                    <Col span={4}>
                      <li class="nav-item">
                        <a
                          class="nav-link "
                          href="#5"
                          style={{
                            color: "#90331c",
                            backgroundColor: "white",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Credit Notes
                        </a>
                      </li>
                    </Col>
                    <Col span={4}>
                      <li class="nav-item">
                        <a
                          class="nav-link "
                          href="#4"
                          style={{
                            color: "#90331c",
                            backgroundColor: "white",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Items
                        </a>
                      </li>
                    </Col>
                  </ul>
                </div>
              </Affix>
            </Col>
          </Row>
        </Content>

        <Content className="site-layout" style={{ padding: "0 100px" }}>
          <Row style={{marginTop:"50px"}}>
            <Col span={12}   id="1" >
          
                <img
                  className="img-freeze"
                  alt="Agon"
                  src="assets/imgs/page/homepage4/projects.jpg "
                  style={{
                    borderRadius: "30px",
                    height: "400px",
                    maxWidth: "130%",
                  }}
                />
           
            </Col>

            <Col span={12} style={{marginTop:"100px"}}>
              <h4 className={styles.headings2}>
                Proposal
              </h4>
              <p className={styles.para} >
              Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.
              </p>
            </Col>
          </Row>
        </Content>

        <Content  className="site-layout" style={{ padding: "0 100px" }}>
          <Row style={{marginTop:"100px"}}>
           
               

          
              <Col span={12} style={{marginTop:"100px"}} id="2">
              <h4  className={styles.headings2}>
                Estimate
              </h4>
              <p className={styles.para} >
              Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.
              </p>
            </Col>
       
       
          <Col span={12} >
             
                  <img
                    className="img-freeze"
                    alt="Agon"
                    src="assets/imgs/page/homepage4/projects.jpg "
                    style={{
                      borderRadius: "30px",
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
              </Col>
            </Row>
     
        </Content>

        <Content className="site-layout" style={{ padding: "0 100px" }}>
          <Row  style={{marginTop:"100px"}}>

          <Col span={12} id="3">
             
                  <img
                    className="img-freeze"
                    alt="Agon"
                    src="assets/imgs/page/homepage4/projects.jpg "
                    style={{
                      borderRadius: "30px",
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
              </Col>
              
              <Col span={12} style={{marginTop:"100px"}}>
              <h4  className={styles.headings2}>
                Invoice
              </h4>
              <p className={styles.para} >
              Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.
              </p>
            </Col>
            </Row>
     
        </Content>

        <Content id="4" className="site-layout" style={{ padding: "0 100px" }}>
          <Row  style={{marginTop:"100px"}}>
           
               

          
              <Col span={12} style={{marginTop:"100px"}}>
              <h4  className={styles.headings2}>
                Receipt
              </h4>
              <p className={styles.para} >
              Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.
              </p>
            </Col>
       
       
          <Col span={12} >
             
                  <img
                    className="img-freeze"
                    alt="Agon"
                    src="assets/imgs/page/homepage4/projects.jpg "
                    style={{
                      borderRadius: "30px",
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
              </Col>
            </Row>
     
        </Content>

        <Content className="site-layout" style={{ padding: "0 100px" }}>
          <Row id="5" style={{marginTop:"100px"}}>

          <Col span={12} >
             
                  <img
                    className="img-freeze"
                    alt="Agon"
                    src="assets/imgs/page/homepage4/projects.jpg "
                    style={{
                      borderRadius: "30px",
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
              </Col>
              
              <Col span={12} style={{marginTop:"100px"}}>
              <h4  className={styles.headings2}>
              Credit Notes
              </h4>
              <p className={styles.para} >
              Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.
              </p>
            </Col>
            </Row>
     
        </Content>
     
     
      </Layout>
    </>
  );
}

export default About1;

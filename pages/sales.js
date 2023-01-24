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
import Salestabs from "../components/Salestabs";
import Contactmanager from "../components/contactmanager";

function About1() {
  const [top, setTop] = useState(60);

  return (
    <>
      <Layout>
        <Col
          xs={{
            span: 24,
            offset: 1,
          }}
          lg={{
            span: 9,
            offset: 1,
          }}
          md={{
            span: 16,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 22,
            offset: 1,
          }}
        >
          <Content className={styles.bc}>
            <Breadcrumb>
              <Breadcrumb>
                <Breadcrumb.Item>Index</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Sales</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
        </Col>

        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 8,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 24,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <h1 className={styles.headings}>Sales</h1>

            <h4 className={styles.para}>
              The sales interface enables hyper management of all your
              prospects, proposals, estimations, quotations, payments, invoices,
              credit notes and inventory management on the go.
            </h4>

            {/* <div className={styles.btnspace}>
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
            </div> */}
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 12,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 3,
            }}
          >
            <img
              className={styles.headimage}
              alt="Agon"
              src="assets/imgs/page/homepage4/salesgif.gif "
            />
          </Col>
        </Row>

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

        <div className={styles.tabcontent}>
          <Content className="site-layout" style={{ marginTop: "30px" }}>
            <Row>
              <Col
                xs={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 22,
                  offset: 1,
                }}
                md={{
                  span: 22,
                  offset: 0,
                }}
                sm={{
                  span: 17,
                  offset: 1,
                }}
                xl={{
                  span: 22,
                  offset: 1,
                }}
                xxl={{
                  span: 24,
                  offset: 0,
                }}
              >
                <Affix offsetTop={top}>
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

          <Row>
            <Col
              xs={{
                span: 22,
                offset: 1,
              }}
              lg={{
                span: 12,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 22,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
              id="1"
            >
              <img
                className={styles.tabimg1}
                alt="Agon"
                src="assets/imgs/page/about/5/SalProposal.png"
              />
            </Col>

            <Col
              xs={{
                span: 23,
                offset: 1,
              }}
              lg={{
                span: 9,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 24,
                offset: 1,
              }}
              xl={{
                span: 9,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
            >
              <h4 className={styles.headings2}>Proposal</h4>
              <p className={styles.para}>
                To view a proposal in Shadobook ERP, navigate to the sales
                modules, click the new proposal tab, and fill out all of the
                details such as the subject, To Whom, date, projects, and so on.
                Using the information provided in the form, you can view the
                proposal in the form of a list.
              </p>
            </Col>
          </Row>

          <Row>
            <Col
              xs={{
                span: 23,
                offset: 1,
              }}
              lg={{
                span: 8,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 2,
              }}
              sm={{
                span: 24,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
              id="2"
            >
              <h4 className={styles.headings2}>Estimate</h4>
              <p className={styles.para}>
                In Shadobook ERP, navigate to the sales module and select
                "estimate." Click the New Estimate tab and enter all the
                details, such as customer, estimate number, amount, project,
                date, etc. Using the information provided in the form, you can
                now view the list of estimations along with their status.
              </p>
            </Col>

            <Col
              xs={{
                span: 22,
                offset: 1,
              }}
              lg={{
                span: 12,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 22,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 2,
              }}
            >
              <img
                alt="Agon"
                src="assets/imgs/page/about/5/SalEstimate.png"
                className={styles.tabimg2}
              />
            </Col>
          </Row>

          <Row>
            <Col
              xs={{
                span: 22,
                offset: 1,
              }}
              lg={{
                span: 12,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 22,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
              id="3"
            >
              <img
                className={styles.tabimg1}
                alt="Agon"
                src="assets/imgs/page/about/5/Salinvoice.png"
              />
            </Col>

            <Col
              xs={{
                span: 23,
                offset: 1,
              }}
              lg={{
                span: 9,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 24,
                offset: 1,
              }}
              xl={{
                span: 9,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
            >
              <h4 className={styles.headings2}>Invoice</h4>
              <p className={styles.para}>
                In Shadobooks ERP, we have three types of invoice tabs
                available: create new invoice, batch receipts, and recurring
                invoices. Go to the sales module, "Invoices," to create a new
                invoice. Click the Create New Invoice tab and enter all the
                details such as customer, invoice number, amount, project, date,
                etc. You can now view a list of invoices with their statuses
                using the information provided in the form.
              </p>
            </Col>
          </Row>

          <Row>
            <Col
              xs={{
                span: 23,
                offset: 1,
              }}
              lg={{
                span: 8,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 2,
              }}
              sm={{
                span: 24,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
              id="4"
            >
              <h4 className={styles.headings2}>Receipt</h4>
              <p className={styles.para}>
                In Shadobooks ERP, when clicking the receipt in the sales
                module, you can see the list of receipts with the details such
                as invoice no., receipt mode, transaction id, customer, amount,
                and date.
              </p>
            </Col>

            <Col
              xs={{
                span: 22,
                offset: 1,
              }}
              lg={{
                span: 12,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 22,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 2,
              }}
            >
              <img
                alt="Agon"
                src="assets/imgs/page/about/5/SalReceipt.png"
                className={styles.tabimg2}
              />
            </Col>
          </Row>

          <Row>
            <Col
              xs={{
                span: 22,
                offset: 1,
              }}
              lg={{
                span: 12,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 22,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
              id="5"
            >
              <img
                className={styles.tabimg1}
                alt="Agon"
                src="assets/imgs/page/about/5/SalCn.png"
              />
            </Col>

            <Col
              xs={{
                span: 23,
                offset: 1,
              }}
              lg={{
                span: 9,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 24,
                offset: 1,
              }}
              xl={{
                span: 9,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
            >
              <h4 className={styles.headings2}>Credit Notes</h4>
              <p className={styles.para}>
                You can get the list of credit notes in Shadobooks ERP by
                clicking on the sales module, "credit notes," and then "new
                credit notes." Here you can enter all the details such as the
                credit note number,  date,  customer,  status,  amount,
                remaining amount, etc., and then save the form. You can now see
                a list of credit notes along with their status.
              </p>
            </Col>
          </Row>

          <Row>
            <Col
              xs={{
                span: 23,
                offset: 1,
              }}
              lg={{
                span: 8,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 2,
              }}
              sm={{
                span: 24,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
              id="6"
            >
              <h4 className={styles.headings2}>Items</h4>
              <p className={styles.para}>
                In Shadobook ERP, you can get the list of items by clicking on
                the sales module, "items," and then the "add tab." Here you can
                enter all the details, such as an image, commodity code,
                commodity name, warehouse name, units, etc., and then save the
                form. You can now see a list of items appear in the form of a
                list.
              </p>
            </Col>

            <Col
              xs={{
                span: 22,
                offset: 1,
              }}
              lg={{
                span: 12,
                offset: 0,
              }}
              md={{
                span: 22,
                offset: 0,
              }}
              sm={{
                span: 22,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 2,
              }}
            >
              <img
                alt="Agon"
                src="assets/imgs/page/about/5/Salitem.png"
                className={styles.tabimg2}
              />
            </Col>
          </Row>
        </div>

        <div className={styles.salestabmob}>
          <Salestabs />
        </div>

        <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default About1;

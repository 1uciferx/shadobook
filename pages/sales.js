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
              offset: 3,
            }}
            xxl={{
              span: 10,
              offset: 3,
            }}
          >
            <h1 className={styles.headings}>Sales</h1>

            <h4 className={styles.para}>
              The sales interface enables hyper management of all your
              prospects, proposals, estimations, quotations, payments, invoices,
              credit notes and inventory management on the go.
            </h4>

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
              span: 9,
              offset: 2,
            }}
            xxl={{
              span: 9,
              offset: 2,
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
               <li>To view a proposal in Shadobook ERP, navigate to the sales module. </li>
               <br></br>
               <li>Click the "New Proposal" tab to create a new proposal.  </li>
               <br></br>
               <li>Fill out all of the necessary details such as the subject, To Whom, date, projects, etc. </li>
               <br></br>
               <li>Once the proposal is saved, it will appear in the form of a list in the proposal overview page.  </li>
               <br></br>
               <li>You can view all the proposals in the form of a list in the proposal overview page.  </li>
               <br></br>
               <li>The proposal overview page allows you to filter proposals by date, To Whom, and projects. </li>
               <br></br>
               <li>You can use the filter option to view a specific proposal or group of proposals.  </li>
               <br></br>
               <li>The proposal overview page allows you to see the progress of all the proposals and manage them effectively.  </li>
               <br></br>
               <li>By using filter options you can see the proposal status, and monitor the performance of your team members.  </li>
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
            
              <li>In Shadobook ERP, navigate to the sales module and select "estimate."  </li>
               <br></br>
               <li>Click the "New Estimate" tab to create a new estimate.  </li>
               <br></br>
               <li>Enter all the necessary details such as customer, estimate number, amount, project, date, etc.  </li>
               <br></br>
               <li>Once the estimate is saved, it will appear in the form of a list in the estimate overview page.   </li>
               <br></br>
               <li>The estimate overview page displays a list of all estimates with details such as customer, estimate number, amount, project, date, and status.   </li>
               <br></br>
               <li>You can filter and sort the estimate list by customer, estimate number, project, date, and status. </li>
               <br></br>
               <li>The estimate overview page allows you to view and manage all the estimates in one place.  </li>
               <br></br>
               <li>It helps to track the progress of all the estimates, and manage them effectively.   </li>
               <br></br>
               <li>By using filter options you can see the estimate status, and monitor the performance of your team members.  </li>
               <br></br>
               <li>The estimate overview page can be used to manage the estimates, and track progress and performance of your team.</li>
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
                className={styles.tabimg2}
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
              <li>In Shadobooks ERP, the sales module has three types of invoice tabs available: create new invoice, batch receipts, and recurring invoices. </li>
               <br></br>
               <li>To create a new invoice, go to the sales module, "Invoices," and click the "Create New Invoice" tab.  </li>
               <br></br>
               <li>Enter all the necessary details such as customer, invoice number, amount, project, date, etc. </li>
               <br></br>
               <li>Once the invoice is saved, it will appear in the form of a list in the invoice overview page.    </li>
               <br></br>
               <li>The invoice overview page displays a list of all invoices with details such as customer, invoice number, amount, project, date, and status.    </li>
               <br></br>
               <li>The invoice overview page allows you to view and manage all the invoices in one place.  </li>
               <br></br>
               <li>It helps to track the progress of all the invoices, and manage them effectively. </li>
               <br></br>
               <li>By using filter options you can see the invoice status, and monitor the performance of your team members.  </li>
               <br></br>
               <li>The invoice overview page can be used to manage the invoices, and track progress and performance of your team.  </li>
               <br></br>
               <li>The batch receipts tab can be used to create multiple invoices at once, and recurring invoices tab can be used to generate invoices automatically for a specific period of time.  </li>
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
              <li>In Shadobooks ERP, the sales module has a "Receipts" tab where you can view and manage all the receipts. </li>
               <br></br>
               <p>By clicking the receipt tab, you will see the list of receipts with the following details: </p>
               <br></br>
               <li>Invoice no,Receipt mode (cash, cheque, credit card, etc), Transaction id, Customer,Amount, Date</li>
               <br></br>
               <li>The receipt overview page allows you to view and manage all the receipts in one place.  </li>
               <br></br>
               <li> You can filter and sort the receipt list by invoice number, receipt mode, transaction id, customer, amount, and date. </li>
               <br></br>
               <li> It helps to track the progress of all the receipts, and manage them effectively.  </li>
               <br></br>
               <li> By using filter options you can see the receipt status, and monitor the performance of your team members. </li>
               <br></br>
               <li>The receipt overview page can be used to manage the receipts, and track progress and performance of your team.  </li>
               
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
                className={styles.tabimgreceipt}
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
                className={styles.tabimgCN}
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
              <li>To view credit notes in Shadobooks ERP, navigate to the sales module, "credit notes," and then "new credit notes."  </li>
               <br></br>
               <li>Enter all the necessary details such as credit note number, date, customer, status, amount, remaining amount, etc. </li>
               <br></br>
               <li>Once the credit note is saved, it will appear in the form of a list in the credit note overview page. </li>
               <br></br>
               <li>The credit note overview page displays a list of all credit notes with details such as credit note number, date, customer, status, amount, and remaining amount. </li>
               <br></br>
               <li> You can filter and sort the credit note list by credit note number, date, customer, status, amount, and remaining amount. </li>
               <br></br>
               <li> The credit note overview page allows you to view and manage all the credit notes in one place.  </li>
               <br></br>
               <li> It helps to track the progress of all the credit notes, and manage them effectively.  </li>
               <br></br>
               <li>By using filter options you can see the credit note status, and monitor the performance of your team members.  </li>
              <br></br>
               <li>The credit note overview page can be used to manage the credit notes, and track progress and performance of your team. </li>
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
              <li>To view items in Shadobook ERP, navigate to the sales module, "items," and then "add" tab.   </li>
               <br></br>
               <li>
               Enter all the necessary details such as an image, commodity code, commodity name, warehouse name, units, etc. 
               </li>
               <br></br>
               <li>Once the item is saved, it will appear in the form of a list in the item overview page.  </li>
               <br></br>
               <li>The item overview page displays a list of all items with details such as commodity code, commodity name, warehouse name, units, etc.  </li>
               <br></br>
               <li>The item overview page allows you to view and manage all the items in one place. </li>
               <br></br>
               <li> You can filter and sort the item list by commodity code, commodity name, warehouse name, units. </li>
               <br></br>
               <li>It helps to track the progress of all the items, and manage them effectively.  </li>
               <br></br>
               <li>By using filter options you can monitor the inventory of your items.  </li>
              <br></br>
               <li>The item overview page can be used to manage the items, and track progress and performance of your team. </li>
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
                className={styles.tabimgitems}
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

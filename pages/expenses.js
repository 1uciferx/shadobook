/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Breadcrumb, Layout as L } from 'antd';
const { Content } = L;
import { Col, Row } from "antd";
import Contactmanager from "../components/contactmanager";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styles from "../styles/Expenses.module.css";
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import dynamic from "next/dynamic";
import { ParallaxBanner, ParallaxBannerLayer, useParallax, } from "react-scroll-parallax";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Expenses() {

  return (
    <>
      <Layout>

        <ParallaxProvider>

          <div className="slow" />


          <ParallaxBanner style={{ aspectRatio: "2/1", height: "620px" }}>

            <ParallaxBannerLayer
              image="/assets/imgs/page/homepage1/bg12.jpg"
              speed={-20}
              className={styles.banner} />
            <ParallaxBannerLayer>


              {/* hero background image container */}
              <Col xs={{
                span: 20,
                offset: 0,
              }}
                lg={{
                  span: 20,
                  offset: 2,
                }}
                sm={{
                  span: 10,
                  offset: 1,
                }}
                md={{
                  span: 10,
                  offset: 0,
                }}
                xl={{
                  span: 10,
                  offset: 0,
                }}
                xxl={{
                  span: 20,
                  offset: 0,
                }} >




                {/* Breadcrumb code */}

                <Content className="site-layout" style={{ padding: "10px 10px" }}>
                  <Breadcrumb style={{ margin: "16px 0", fontWeight: " " }}>
                    <Breadcrumb>
                      <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <a style={{ color: "white" }} href="/#">Features</a>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <a style={{ color: "white" }} href="#">Expenses</a>
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </Breadcrumb>
                </Content>
              </Col>

              {/* headings code */}



              <Col xs={{
                span: 24,
                offset: 0,
              }}
                lg={{
                  span: 20,
                  offset: 2,
                }}
                sm={{
                  span: 18,
                  offset: 0,
                }}
                md={{
                  span: 18,
                  offset: 3,
                }}
                xl={{
                  span: 20,
                  offset: 3,
                }}
                xxl={{
                  span: 20,
                  offset: 2,
                }}


              >

                <Zoom cascade>
                  <h1 className={styles.headings}> Expenses </h1>
                </Zoom>
              </Col>

              <Col xs={{
                span: 24,
                offset: 0,
              }}
                lg={{
                  span: 20,
                  offset: 2,
                }}
                sm={{
                  span: 12,
                  offset: 1,
                }}
                md={{
                  span: 16,
                  offset: 4,
                }}
                xl={{
                  span: 20,
                  offset: 0,
                }}
                xxl={{
                  span: 20,
                  offset: 2,
                }}>

                <LightSpeed cascade>
                  <p className={styles.para}>Offering assistance to individuals and organizations regarding technology-related devices.</p>
                </LightSpeed>

              </Col>


            </ParallaxBannerLayer>
          </ParallaxBanner>





          <Parallax speed={5}>
            <div className="fast" />
            <Row>

              <Col xs={{
                span: 24,
                offset: 0,
              }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 18,
                  offset: 0,
                }}
                xl={{
                  span: 10,
                  offset: 0,
                }}
                xxl={{
                  span: 10,
                  offset: 1,
                }} >


                <Flip left cascade>
                  <p className={styles.subhead}>
                    Benefits of Record Expenses
                  </p>
                </Flip>


                <h2 className={styles.subhead1}>
                  The following are the expenses benefits in Shadobooks CRM: <br/>

                  Fewer delays and errors, 
                  Greater operational efficiency, 
                  Greater visibility, 
                  Simplified reporting, 
                  Greater compliance.
                </h2>
              </Col>


              <Col xs={{
                span: 20,
                offset: 1,
              }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 20,
                  offset: 0,
                }}
                xl={{
                  span: 10,
                  offset: 0,
                }}
                xxl={{
                  span: 10,
                  offset: 0,
                }} >
                <Zoom cascade>
                  <img src="assets/imgs/page/homepage1/bg13.jpg" />
                </Zoom>
              </Col>
            </Row>
          </Parallax>

          {/* 2nd container starts from here */}

          <Parallax speed={5}>
            <div className="fast" />

            <Row>


              {/* left side container */}



              <Col xs={{
                span: 20,
                offset: 0,
              }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 12,
                  offset: 6,
                }}
                xl={{
                  span: 8,
                  offset: 10,
                }}
                xxl={{
                  span: 10,
                  offset: 7,
                }} >
                <Fade left cascade>
                  <p className={styles.subhead2}>
                    Direct Expenses
                  </p>
                </Fade>
              </Col>

              <Col xs={{
                span: 20,
                offset: 2,
              }}
                lg={{
                  span: 20,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 10,
                  offset: 7,
                }}
                xl={{
                  span: 8,
                  offset: 8,
                }}
                xxl={{
                  span: 8,
                  offset: 0,
                }} >
                <Zoom cascade>
                  <img src="assets/imgs/page/homepage1/dd.jpg" />
                </Zoom>
              </Col>



              <Col xs={{
                span: 16,
                offset: 0,
              }}
                lg={{
                  span: 20,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 10,
                  offset: 7,
                }}
                xl={{
                  span: 8,
                  offset: 8,
                }}
                xxl={{
                  span: 8,
                  offset: 0,
                }} >

                <Slide left cascade>
                  <p className={styles.subhead3}>
                    Direct expenses are expenses that a corporation can easily link to a specific "cost item," which could be a product, department, or project. This category may contain software, equipment, and raw materials. It can also involve labour, assuming the labour is specific to the product, department, or project.
                  </p>
                </Slide>


              </Col>


              {/* right side container */}


              <Col xs={{
                span: 20,
                offset: 2,
              }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 10,
                  offset: 7,
                }}
                xl={{
                  span: 8,
                  offset: 10,
                }}
                xxl={{
                  span: 16,
                  offset: 4,
                }} >
                <Fade left cascade>
                  <p className={styles.subhead4}>
                    Indirect Expenses
                  </p>
                </Fade>
              </Col>


              <Col xs={{
                span: 20,
                offset: 2,
              }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 10,
                  offset: 7,
                }}
                xl={{
                  span: 8,
                  offset: 8,
                }}
                xxl={{
                  span: 8,
                  offset: 0,
                }} >
                <Zoom cascade>
                  <img src="assets/imgs/page/homepage1/ii.jpg" />
                </Zoom>

              </Col>





              <Col xs={{
                span: 16,
                offset: 0,
              }}
                lg={{
                  span: 20,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 10,
                  offset: 7,
                }}
                xl={{
                  span: 8,
                  offset: 8,
                }}
                xxl={{
                  span: 8,
                  offset: 0,
                }} >
                <Slide left cascade>
                  <p className={styles.subhead3}>
                    Indirect expenses are those that cannot be determined directly within a given product or service. Indirect expenses include the costs of maintaining and running a business. These overhead costs are once left over the direct costs have been computed further.
                  </p>
                </Slide>


              </Col>
            </Row>
          </Parallax>



          {/* 3rd container */}

          <Parallax speed={5}>
            <div className="fast" />

            <Row>

              <Col xs={{
                span: 20,
                offset: 2,
              }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 20,
                  offset: 2,
                }}
                xl={{
                  span: 20,
                  offset: 0,
                }}
                xxl={{
                  span: 20,
                  offset: 0,
                }} >
                <p className={styles.subhead6}>
                  Overview and How to Record expenses in shadobooks CRM
                </p>
                </Col>

                <Col xs={{
                span: 20,
                offset: 2,
              }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 20,
                  offset: 2,
                }}
                xl={{
                  span: 20,
                  offset: 0,
                }}
                xxl={{
                  span: 20,
                  offset: 3,
                }} >
                <Zoom cascade>
                  <img src="assets/imgs/page/homepage1/ssd.png" />
                </Zoom>

              </Col>
            </Row>

            <Row>

              <Col xs={{
                span: 8,
                offset: 0,
              }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 10,
                  offset: 0,
                }}
                xl={{
                  span: 20,
                  offset: 0,
                }}
                xxl={{
                  span: 20,
                  offset: 2,
                }} >
                <p className={styles.subhead7}>
                To add a new expense, select Expenses—> Record Expense from the side menu. Fill out the details in the expenses form and save it. You can assign tasks to newly created expenses and attach 'expense receipts' as well.





                </p>
              </Col>
            </Row>
          </Parallax>



        </ParallaxProvider>

        <div>
          <Contactmanager />
        </div>


      </Layout>
    </>
  );
}

export default Expenses;

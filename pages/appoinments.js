/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { Breadcrumb, Layout as L } from 'antd';
const { Content } = L;
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Accordion12 from "../components/elements/accordion12";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import { Helmet } from 'react-helmet';
import styles from "../styles/Appointments.module.css";
import Layout from "../components/layout/Layout";
import Flip from 'react-reveal/Flip';
import HeadShake from 'react-reveal/HeadShake';
import { Col, Row } from "antd";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Appoinments() {

  return (
    <>
      <Layout>

 {/* facebook and twitter meta graphs starts here */}
 <Helmet>
          <meta property="og:title" content="Shadobooks ERP" />
          <meta property="og:description" content="Shadobooks erp solutions." />
          <meta property="og:image" content="/assets/imgs/page/homepage1/sb-logo.png" />
          <meta property="og:url" content="https://www.facebook.com/shadobookscrm" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Shadobooks ERP" />
          <meta name="twitter:description" content="Shadobooks erp solutions." />
          <meta name="twitter:image" content="/assets/imgs/page/homepage1/sb-logo.png" />
          <meta name="robots" content="noindex" />

        </Helmet>

        {/* facebook and twitter meta graphs ends here */}

        {/* heading background image */}

        <div style={{
          backgroundImage: `url(/assets/imgs/page/homepage1/ac4.jpg)`,
          backgroundSize: "cover",
        }}>


          {/* Breadcrumb code */}

          <Content className="site-layout" style={{ padding: "10px 10px" }}>
            <Breadcrumb style={{ margin: "16px 0", fontWeight: "bold" }}>
              <Breadcrumb>
                <Breadcrumb.Item style={{ color: "white" }}>Index</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href=" " style={{ color: "white" }}>Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href=" " style={{ color: "white" }}>Appointments</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>

          {/* headings code */}

          <HeadShake>
          <Col xs={{
            span: 8,
            offset: 0,
          }}
            lg={{
              span: 6,
              offset: 2,
            }}
            sm={{
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 24,
              offset: 8,
            }} >
            
            
            
              <h1 className={styles.headings}> Appointments </h1>
              <p className={styles.para}>A fixed mutual agreement for a meeting</p>
            </Col>
            </HeadShake>

            
        </div>


        {/* header for the container 1 */}


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
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <h2 className={styles.para5}>Our Modules on Appoinments</h2>
          </Col>
        </Row>



        {/* container 1 image */}


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
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }} >
            <img src="assets/imgs/page/homepage1/w1.jpg" alt="past meetings" />
          </Col>

          {/* container 1 subject */}


          <Col xs={{
            span: 8,
            offset: 0,
          }}
            lg={{
              span: 6,
              offset: 2,
            }}
            sm={{
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 10,
              offset: 1,
            }} >
            <h3 className={styles.subhead5} >Past Meetings</h3>
            <br />
            <p className={styles.subhead4}>Hello, my name is [say your first name]. I'm calling to book an appointment with Dr [name of GP] on [day you're available]. I'm calling to book an appointment with Dr [name of GP] as soon as possible please.</p>
            <p className={styles.subhead4}>Temporary appointment is a time-limited appointment of less than one year to meet short-term needs, such as peak workloads and other specific time-limited requirements.</p>
          </Col>

        </Row>


        {/* container 2 subject */}

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
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 8,
              offset: 0,
            }} >
            <h3 className={styles.subhead7} >Call Backs</h3>
            <br />
            <p className={styles.subhead6}>Hello, my name is [say your first name]. I'm calling to book an appointment with Dr [name of GP] on [day you're available]. I'm calling to book an appointment with Dr [name of GP] as soon as possible please.</p>
            <p className={styles.subhead6}>Temporary appointment is a time-limited appointment of less than one year to meet short-term needs, such as peak workloads and other specific time-limited requirements.</p>
          </Col>




          <Col xs={{
            span: 8,
            offset: 0,
          }}
            lg={{
              span: 6,
              offset: 2,
            }}
            sm={{
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }} >
            <img src="assets/imgs/page/homepage1/w2.jpg" alt="shado books" />
          </Col>






        </Row>




        {/* container 3 image */}


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
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <img src="assets/imgs/page/homepage1/w3.jpg" alt="shado books" />
          </Col>

          {/* container 3 subject */}


          <Col xs={{
            span: 8,
            offset: 0,
          }}
            lg={{
              span: 6,
              offset: 2,
            }}
            sm={{
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <h3 className={styles.subhead5} >Own Settings</h3>
            <br />
            <p className={styles.subhead4}>Hello, my name is [say your first name]. I'm calling to book an appointment with Dr [name of GP] on [day you're available]. I'm calling to book an appointment with Dr [name of GP] as soon as possible please.</p>
            <p className={styles.subhead4}>Temporary appointment is a time-limited appointment of less than one year to meet short-term needs, such as peak workloads and other specific time-limited requirements.</p>
          </Col>

        </Row>





        {/* container 4 subject */}

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
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <h3 className={styles.subhead7} >Form Info</h3>
            <br />
            <p className={styles.subhead6}>Hello, my name is [say your first name]. I'm calling to book an appointment with Dr [name of GP] on [day you're available]. I'm calling to book an appointment with Dr [name of GP] as soon as possible please.</p>
            <p className={styles.subhead6}>Temporary appointment is a time-limited appointment of less than one year to meet short-term needs, such as peak workloads and other specific time-limited requirements.</p>
          </Col>


        {/* container 4 image */}

        <Col xs={{
            span: 8,
            offset: 0,
          }}
            lg={{
              span: 6,
              offset: 2,
            }}
            sm={{
              span: 5,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <img src="assets/imgs/page/homepage1/w4.jpg" alt="shado books" />
          </Col>




        </Row>



      </Layout>
    </>
  );
}

export default Appoinments;

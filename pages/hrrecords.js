/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd';
import { Carousel } from 'antd';
import { Breadcrumb, Layout as L } from 'antd';
import { Button, Space } from 'antd';
import { Collapse } from 'antd';
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from 'antd';
const { Meta } = Card;
import Link from "next/link";
import { useState, useEffect } from "react";
import Zoom from 'react-reveal/Zoom';
const { Content } = L;
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import styles from "../styles/Hrrecords.module.css";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import TestimonialSlider from "../components/slider/Testimonial";
import Hrrecordsslider from '../components/slider/hrrecordsslider';
import Contactmanager from "../components/contactmanager";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});







function Fixed() {

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };



  return (
    <>
      <Layout>

        {/* heading background image */}

        <div style={{
          backgroundImage: `url(/assets/imgs/page/homepage4/demo2.jpg)`,
          backgroundSize: "cover",
        }}>

          {/* Breadcrumb code */}
          <Content className="site-layout" style={{ padding: "10px 10px" }}>
            <Breadcrumb style={{ margin: "16px 0", fontWeight: " " }}>
              <Breadcrumb>
                <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="/# ">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="/hrrecords ">HR Records</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>


          {/* heading  */}

          <Row>
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
                offset: 0,
              }}
              md={{
                span: 20,
                offset: 0,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 1,
              }} >
              <p className={styles.subhead3} >
              Manage all your human resources and other related documents in a centralized database with the HR Records section of the Shadobooks CRM. The interface offers options for data management with respect to payrolls, onboarding processes, employee management, training modules, etc.
                </p>
            </Col>


            <Col xs={{
              span: 20,
              offset: 0,
            }}
              lg={{
                span: 20,
                offset: 2,
              }}
              sm={{
                span: 20,
                offset: 0,
              }}
              md={{
                span: 20,
                offset: 0,
              }}
              xl={{
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 1,
              }} >
              <Zoom right cascade>
                <h1 className={styles.headings} >HR Records </h1>
              </Zoom>
            </Col>


          </Row>
        </div>


        {/* container 1 */}


        <Row style={{ marginTop: '5%',  marginLeft: '2%', marginBottom: '3%'}}>

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
                offset: 0,
              }}
              md={{
                span: 20,
                offset: 0,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{
                span: 10,
                offset: 1,
              }} >

            {/* slider image */}

            <Carousel autoplay>
              <div>
                <h3 className={styles.content}><img src="assets/imgs/page/homepage4/ss1.png" alt="shado books" /></h3>
              </div>
              <div>
                <h3 className={styles.content}><img src="assets/imgs/page/homepage4/ss2.jpg" alt="shado books" /></h3>
              </div>
              <div>
                <h3 className={styles.content}><img src="assets/imgs/page/homepage4/ss3.jpg" alt="shado books" /></h3>
              </div>
              <div>
                <h3 className={styles.content}><img src="assets/imgs/page/homepage4/ss4.jpg" alt="shado books" /></h3>
              </div>
              <div>
                <h3 className={styles.content}><img src="assets/imgs/page/homepage4/ss5.jpg" alt="shado books" /></h3>
              </div>
              <div>
                <h3 className={styles.content}><img src="assets/imgs/page/homepage4/ss6.jpg" alt="shado books" /></h3>
              </div>
              <div>
                <h3 className={styles.content}><img src="assets/imgs/page/homepage4/ss7.png" alt="shado books" /></h3>
              </div>
              <div>
                <h3 className={styles.content}><img src="assets/imgs/page/homepage4/ss8.png" alt="shado books" /></h3>
              </div>
            </Carousel>
          </Col>

          {/* text for the slider */}

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
                offset: 0,
              }}
              md={{
                span: 20,
                offset: 0,
              }}
              xl={{
                span: 9,
                offset: 0,
              }}
              xxl={{
                span: 10,
                offset: 1,
              }} 
           style={{ marginLeft: '3%', marginTop: '5%' }}>
            <Fade right cascade>
              <h2 className={styles.subhead}>Dashboard</h2>
              <h6 className={styles.para}>
              HR dashboards in Shadobooks CRM are critical tools for analysing, visualising,  and making decisions that have a  beneficial impact on your organisation due <br/> to exact information. This allows HR departments to quickly uncover-insights that  can improve recruiting, optimize workplace management, and boost employee  performance.
                </h6>
            </Fade>

          </Col>
        </Row>



        {/* container 2 */}

        <Row>
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
                offset: 0,
              }}
              md={{
                span: 20,
                offset: 0,
              }}
              xl={{
                span: 9,
                offset: 0,
              }}
              xxl={{
                span: 10,
                offset: 0,
              }}
          
          >
            <Fade left cascade>
              <h2 className={styles.subhead2}> Benefits & Uses</h2>
              <h6 className={styles.para}>
              The shadobooks HR dashboard provides various benefits, including:
                <br /><br />
                <li>Help managers to identify, plan and implement the staff training programs.</li>
                <li>Aids in decision-making on transfers, promotions, demotions, and redeployment.</li>
                <li>Allows governmental entities to get information on accidents, absenteeism, labour turnover, wages, and salary.</li>
                

                
              </h6>
            </Fade>

          </Col>

          {/* Image for the next section */}

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
                offset: 0,
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
                offset: 1,
              }} 
          
          >
            
            
            <img src="assets/imgs/page/homepage1/fd1.jpg" alt="shado books" style={{ height: '360px', width: '700px' }} /></Col>

        </Row>



        {/* container 3 */}



        <div className="section-box">
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Our Modules</h3>
                <p className="text-body-lead-large color-gray-600">on HR Records</p>
              </div>
            </div>
          </div>
          <div className="container mt-80">

            <Hrrecordsslider />
          </div>
        </div>






        <div>
          <Contactmanager />
        </div>

      </Layout>
    </>
  );
}

export default Fixed;



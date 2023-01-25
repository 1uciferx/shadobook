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
              offset: 0,
            }}
              lg={{
                span: 10,
                offset: 1,
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
                offset: 0,
              }} >
              <Zoom right cascade>
                <h1 className={styles.headings} >HR Records </h1>
              </Zoom>
            </Col>
            
            <Col xs={{
              span: 20,
              offset: 2,
            }}
              lg={{
                span: 10,
                offset: 1,
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
                span: 7,
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
              <ol className={styles.para}>
              <li>➟ HR dashboards in Shadobooks CRM are critical tools for analysing, visualising,  and making decisions that have a  beneficial impact on your organisation due to exact information. </li><br/>
              <li>➟ This allows HR departments to quickly uncover-insights that  can improve recruiting, optimize workplace management, and boost employee  performance.</li>
                </ol>
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
            
            
            <img src="assets/imgs/page/homepage1/fd1.jpg" alt="shado books"  /></Col>

        </Row>



        {/* container 3 */}



        <div className={styles.mmc}>
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



{/* code for the mobile screen and ipad views, which is disabled for laptop */}

<div className={styles.mobie}>

           <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/reports.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Org Chart</h3>

              <Zoom>
              <p className={styles.mobpara}>
              In Shadobooks CRM an organisational chart depicts the organisational structure by connecting distinct employees with their unit’s name, email, parent unit, IMAP Username, IMAP password, and the encryption details.
              </p>
              </Zoom>
            </Col>


            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/orgchart.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Job Description</h3>

              <Zoom>
              <p className={styles.mobpara}>
              The job description components in shadobooks CRM outline the primary functions and responsibilities of a certain position. This component is also in charge of the job selection processes and the publication.
              </p>
              </Zoom>
            </Col>


            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/jobdescription.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Onboarding</h3>

              <Zoom>
              <p className={styles.mobpara}>
              Onboarding in CRM streamlines the process of introducing new employees to an organisation. To provide an effective onboarding experience for new employees, it often involves electronic signatures.
              </p>
              </Zoom>
            </Col>


            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/onboarding.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>HR Records</h3>

              <Zoom>
              <p className={styles.mobpara}>
              The HR records of shadobooks CRM contain the staff name, code, email, personnel qualifications by department, gender, job position, role, and contact information. You may also examine these details on a chart basis.
              </p>
              </Zoom>
            </Col>

            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/records.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Training</h3>

              <Zoom>
              <p className={styles.mobpara}>
              Human resource training programmes are specialised courses that include the name of the training programme, the training type, the training item, the department, the training libraries, minimum point, and the training results.
              </p>
              </Zoom>
            </Col>

            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/training.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Contracts</h3>

              <Zoom>
              <p className={styles.mobpara}>
              The process of operational contract management is carried out within an organisation using Shadobooks CRM. Human resource contract management includes the staff name.
              </p>
              </Zoom>
            </Col>

            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/contracts.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Dependants</h3>

              <Zoom>
              <p className={styles.mobpara}>
              Dependant refers to a staff member's spouse or child who is fully dependent on the employee for support. To create a new dependant in Shadobooks CRM, enter the employee dependant's details in the dependant’s form.
              </p>
              </Zoom>
            </Col>

            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/dependant.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Layoff Checklist</h3>

              <Zoom>
              <p className={styles.mobpara}>
              The purpose of the layoff checklist in shadobooks CRM is to provide a process for designating an employee for layoff. The layoff checklist includes the employee's name, email address, job position, department.
              </p>
              </Zoom>
            </Col>

            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/layoffchecklist.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Q&A</h3>

              <Zoom>
              <p className={styles.mobpara}>
              Q&A management is a type of online documentation that provides guidance for resolving problems encountered by clients. This may be accomplished in Shadobooks CRM by providing subject.
              </p>
              </Zoom>
            </Col>

            <div className={styles.makeme}>
              <img
                className={styles.conimg}
                alt="Agon"
                src="assets/imgs/page/homepage1/question.jpg"
               
              />
            </div>
            <Col
              xs={{
                span: 20,
                offset: 2,
              }}
              lg={{
                span: 8,
                offset: 5,
              }}
              md={{
                span: 16,
                offset: 4,
              }}
              sm={{
                span: 20,
                offset: 1,
              }}
              xl={{
                span: 10,
                offset: 4,
              }}
              xxl={{
                span: 32,
                offset: 4,
              }}
            >
              <h3 className={styles.tabheadings1}>Reports</h3>

              <Zoom>
              <p className={styles.mobpara}>
              The HR reports include the following employee information: Layoffs of employees, Salary changes on the staff list, Staff changes by seniority, Staff changes by month.
              </p>
              </Zoom>
            </Col>
          
            </div>

















        <div>
          <Contactmanager />
        </div>

      </Layout>
    </>
  );
}

export default Fixed;



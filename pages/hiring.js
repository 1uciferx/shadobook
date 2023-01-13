/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, Space } from 'antd'
import { Col, Row } from 'antd';
import styles from "../styles/hiring.module.css";
import Contactmanager from "../components/contactmanager";
import Layout from "../components/layout/Layout";
import { Breadcrumb } from 'antd';
import { Layout as L} from 'antd';

const { Content} = L;


function Leadmanagement() {

  return (
    <>

      <Layout>

        {/* Hiring */}



        <div className={styles.backgroundimg1} style={{ backgroundImage: "url('assets/background11.jpg')", zIndex: "-1", position: "relative" }}>


        <Row  >
          <Col className={styles.breasdcrumb}
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
          }}>

          <Content>
            <Breadcrumb >
              <Breadcrumb>
                <Breadcrumb.Item style={{ color:"white"}}>Index</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/#" style={{ color:"white"}}>Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/" style={{color:"white"}}>Hiring</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
        </Col>
        </Row>



          <Row>

            <Col

              xs={{
                span: 22,
                offset: 1,
              }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 20,
                offset: 2,
              }}

              lg={{
                span: 20,
                offset: 2,
              }}
              xl={{
                span: 12,
                offset: 6,
              }}
              xxl={{

                span: 12,
                offset: 6,
              }}>   <h1 className={styles.headingsheader}>Hiring</h1>

              <p className={styles.paraheader}> Enterprise resource planning, or ERP, is an integrated software solution that enables businesses to manage all of their operational needs through a single interface.
     As a result, data availability and efficiency are increased, and more immediate information like the company's financial condition is made available.</p>



            </Col>


          </Row>


          <div style={{ top: "-30px", zIndex: "-1", position: "relative" }} >

            <center>
              <img className={styles.box} src="/logo1/vector8.png"></img>
            </center>

          </div>



        </div>







        {/* Dashboard */}

        <Col className={styles.margintop}>

          <Row>
            <Col xs={{
              span: 22,
              offset: 0,
            }}

              sm={{
                span: 22,
                offset: 0,
              }}

              md={{
                span: 22,
                offset: 1,
              }}

              lg={{
                span: 10,
                offset: 3,
              }}
              xl={{
                span: 10,
                offset: 2,
              }}
              xxl={{

                span: 8,
                offset: 3
              }}>
              <h3 className={styles.headingsdashboard}>Dashboard</h3>
            </Col>
          </Row>



          <Row>


           

            <Col xs={{
              span: 20,
              offset: 2,
            }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 20,
                offset: 2,
              }}

              lg={{
                span: 13,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{

                span: 13,
                offset: 1
              }}>

              <img className={styles.img1} src="/hiring/pic1.png"></img>
            </Col>




            <Col xs={{
              span: 20,
              offset: 2,
            }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 19,
                offset: 2,
              }}

              lg={{
                span: 8,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{

                span: 8,
                offset: 1
              }}>

              <p className={styles.para}> Recruitment dashboards aid HR teams, hiring managers, and recruiters in comprehending all facets of the hiring process. These include keeping track of employer brand metrics, which demonstrate the general level of interest job searchers have in working for the organisation, and comprehending the number of applicants who are progressing through the recruiting process.

                 </p>

            </Col>


          </Row>
        </Col>









        {/* Campaign */}

        <Row className={styles.margintop2}>
          <Col

            xs={{
              span: 20,
              offset: 2,
            }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 13,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 10,
              offset: 2,
            }}>
            <h3 className={styles.headings}>Campaign</h3>
          </Col>


        </Row>

        <Row >
        <Col xs={{
              span: 20,
              offset: 2,
            }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 20,
                offset: 2,
              }}

              lg={{
                span: 13,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{

                span: 13,
                offset: 1
              }}>

            <img className={styles.img2} src="/hiring/pic2.png"></img>

          </Col>

          <Col xs={{
              span: 20,
              offset: 2,
            }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 20,
                offset: 2,
              }}

              lg={{
                span: 8,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{

                span: 8,
                offset: 1
              }}>


            <p className={styles.para1}>A recruiting campaign, in essence, is a procedure used by a company to promote a steady stream of excellent applicants to apply for their openings.
      The hiring process involves looking over applications, choosing the best applicants for interviews, testing candidates, making a decision between candidates, 
      and carrying out different pre-employment exams and checks.</p>
            {/* 
            <Space>
              <Button className={styles.buttonres2}>Learn More</Button>
            </Space> */}
          </Col>

        </Row>




        {/* Candidate Profile */}



        <Row className={styles.margintop3}>
          <Col
            style={{ backgroundImage: "url('assets/demo4.jfif')", backgroundSize: "Cover" }}  >


            <Row>
              <Col xs={{
                span: 16,
                offset: 5,
              }}

                sm={{
                  span: 13,
                  offset: 5,
                }}

                md={{
                  span: 13,
                  offset: 5,
                }}

                lg={{
                  span: 10,
                  offset: 12,
                }}
                xl={{
                  span: 10,
                  offset: 11,
                }}
                xxl={{

                  span: 10,
                  offset: 11
                }}>

                <h3 className={styles.headings}>Candidate Profile</h3></Col>
            </Row>

            <Row >
             
            <Col xs={{
              span: 20,
              offset: 2,
            }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 20,
                offset: 2,
              }}

              lg={{
                span: 8,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{

                span: 8,
                offset: 1
              }}>
                <p className={styles.para1}>A candidate profile is a thorough outline of a job opening at a company and the ideal applicant who will fill it. 
       A candidate persona is a road map that ultimately aids recruiters in outlining the ideal personality qualities & skills for a particular position.</p>

                {/* <Space>
                <Button className={styles.buttonres3}>Learn More</Button>
              </Space> */}
              </Col>

              <Col xs={{
              span: 20,
              offset: 2,
            }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 20,
                offset: 2,
              }}

              lg={{
                span: 13,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{

                span: 13,
                offset: 1
              }}>

                <img className={styles.img3} src="/hiring/pic3.png"></img>
              </Col>

            </Row>

          </Col>
        </Row>






        {/* Interview Schedule */}

        <div     >

          <Row className={styles.margintop4}>
            <Col xs={{
              span: 16,
              offset: 5,
            }}

              sm={{
                span: 13,
                offset: 5,
              }}

              md={{
                span: 13,
                offset: 5,
              }}

              lg={{
                span: 10,
                offset: 12,
              }}
              xl={{
                span: 10,
                offset: 12,
              }}
              xxl={{

                span: 10,
                offset: 11,
              }}>
              <h3 className={styles.headings}>Interview Schedule</h3></Col>
          </Row>

          <Row >
            

          <Col xs={{
              span: 20,
              offset: 2,
            }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 20,
                offset: 2,
              }}

              lg={{
                span: 8,
                offset: 1,
              }}
              xl={{
                span: 8,
                offset: 1,
              }}
              xxl={{

                span: 8,
                offset: 1
              }}>


              <p className={styles.para1}>An interview schedule is a planning tool that hiring managers and recruiters can use to choose the questions they wish to ask during a meeting with a candidate. 
        In order to help interviewers, researchers, and investigators get information or data on a certain topic or issue, a list of structured questions has been produced
        as an interview schedule.</p>

              {/* <Space>
                <Button className={styles.buttonres4}>Learn More</Button>
              </Space> */}

            </Col>

            <Col xs={{
              span: 20,
              offset: 2,
            }}

              sm={{
                span: 20,
                offset: 2,
              }}

              md={{
                span: 20,
                offset: 2,
              }}

              lg={{
                span: 13,
                offset: 1,
              }}
              xl={{
                span: 12,
                offset: 1,
              }}
              xxl={{

                span: 13,
                offset: 1
              }}>

              <img className={styles.img4} src="/hiring/pic4.png"></img>
            </Col>

          </Row>
        </div>



        {/* Hiring Channels */}
        <Row className={styles.margintop5}>
          <Col
            style={{ backgroundImage: "url('assets/demo4.jfif')", backgroundSize: "Cover" }}  >


            <Row>
              <Col xs={{
                span: 24,
                offset: 1,
              }}

                sm={{
                  span: 22,
                  offset: 1,
                }}

                md={{
                  span: 21,
                  offset: 1,
                }}

                lg={{
                  span: 10,
                  offset: 12,
                }}
                xl={{
                  span: 9,
                  offset: 12,
                }}
                xxl={{

                  span: 15,
                  offset: 9
                }}>

                <h3 className={styles.headings}>Hiring Channels</h3></Col>
            </Row>

            <Row >
              <Col xs={{
                span: 22,
                offset: 1,
              }}

                sm={{
                  span: 22,
                  offset: 1,
                }}

                md={{
                  span: 20,
                  offset: 2,
                }}

                lg={{
                  span: 9,
                  offset: 1,
                }}
                xl={{
                  span: 8,
                  offset: 0,
                }}
                xxl={{

                  span: 8,
                  offset: 1,
                }}>
                <p className={styles.para1}>Before you make the jump, we’d like to invite you to a journey through the current top five hiring channels that all HR and recruiters should embrace,
        to help you make a better decision while staying ahead of the current trends and being among the top players with a strong foundation.</p>

                {/* <Space>
                <Button className={styles.buttonres5}>Learn More</Button>
              </Space> */}
              </Col>

              <Col xs={{
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

                lg={{
                  span: 12,
                  offset: 1,
                }}
                xl={{
                  span: 13,
                  offset: 0,
                }}
                xxl={{

                  span: 13,
                  offset: 1
                }}>

                <img className={styles.img5} src="/hiring/pic5.png"></img>
              </Col>

            </Row>

          </Col>
        </Row>




        {/* Hiring Portal */}



        <Row className={styles.margintop6}>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 11,
            }}
            xl={{
              span: 13,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 0,
            }}>
            <h3 className={styles.headings}>Hiring Portal</h3>
          </Col>
        </Row>

        <Row>


          
        <Col xs={{
            span: 21,
            offset: 1,
          }}

            sm={{
              span: 21,
              offset: 1,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 9,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 8,
              offset: 1,
            }}>


            <p className={styles.para1}>A new hiring portal is a gateway from which a company can welcome new hires into the organization and integrate them faster into the company culture.
        Using the new hire portal the company can build a good first impression, give an overview of their culture and welcome new hiring with an engaging and customized experience.

</p>

            {/* <Space>
                <Button className={styles.buttonres6}>Learn More</Button>
              </Space> */}

          </Col>




          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 10,
              offset: 3,
            }}>
            <img className={styles.img6} src="/hiring/pic6.png"></img>
          </Col>



        </Row>




        {/* Settings */}
        <Row className={styles.margintop7}>
          <div
            style={{ backgroundImage: "url('assets/demo4.jfif')", backgroundSize: "Cover" }} >




            <Col xs={{
              span: 15,
              offset: 5,
            }}

              sm={{
                span: 22,
                offset: 1,
              }}

              md={{
                span: 22,
                offset: 1,
              }}

              lg={{
                span: 10,
                offset: 7,
              }}
              xl={{
                span: 10,
                offset: 7,
              }}
              xxl={{

                span: 14,
                offset: 5
              }}>

              <h3 className={styles.headings}>Settings</h3></Col>


            <Row >
             

             

              <Col xs={{
                span: 22,
                offset: 1,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 22,
                  offset: 1,
                }}

                lg={{
                  span: 20,
                  offset: 2,
                }}
                xl={{
                  span: 16,
                  offset: 4,
                }}
                xxl={{

                  span: 12,
                  offset: 6
                }}>

                <img className={styles.img7} src="/hiring/pic7.png"></img>
              </Col>

              <Col xs={{
                span: 24,
                offset: 1,
              }}

                sm={{
                  span: 23,
                  offset: 0,
                }}

                md={{
                  span: 23,
                  offset: 0,
                }}

                lg={{
                  span: 18,
                  offset: 3,
                }}
                xl={{
                  span: 12,
                  offset: 6,
                }}
                xxl={{

                  span: 12,
                  offset: 0,
                }}>
                <p className={styles.para7}>Hiring Slots are periods of time that can be booked for venues in sheepSpaces, supporting multiple venues, restrictions and bespoke pricing.</p>
                {/* 
              <Space>
                <Button className={styles.buttonres7}>Learn More</Button>
              </Space> */}
              </Col>

            </Row>

          </div>
        </Row>
        
<div>


  <Contactmanager/>
</div>


      </Layout>



    </>
  );
}

export default Leadmanagement;

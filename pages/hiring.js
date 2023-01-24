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

              <p className={styles.paraheader}>
                
              
                
                  Enterprise resource planning, or ERP, is an integrated software solution that enables businesses to manage all of their operational needs through a single interface.s
            
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
              <h3 className={styles.headings}>Dashboard</h3>
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

              <p className={styles.para}> 
              <li>
                  Campaigns in Progress: Active recruitment campaigns currently underway.
              </li>

              <br/>

              <li>
                  Completed Campaigns: Finished recruitment campaigns.
              </li>
              
              <br></br>
              <li>
                   Status of Hiring Campaigns: An overview of progress of recruitment campaigns, including candidates contacted, interviewed and hired.

              </li>
              <br></br>
              <li>
                   Candidates Need to Recruit: Number of candidates still needed to fill open positions.
              </li>
              <br></br>
              <li>
                   Candidates Recruited: Number of candidates successfully hired.
              </li>
              <br></br>
              <li>
                   Upcoming Interview: Number of scheduled interviews and their dates and times.
              </li>

            


              
              
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


            <p className={styles.para1}>
              <li>
                 Quick and easy overview of the recruitment campaign, including the campaign's name, the position, the type of employment, the department, the number of positions, and the current status of the campaign.
              </li>
              <br></br>
              <li>
              Help to identify the campaign, the position, the recruitment process and the current status of the recruitment campaign.
              </li>
              <br></br>
              <li>
              Can be used to filter and search for specific campaigns, positions and department
              </li>
              
              </p>
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
                span: 24,
                offset: 0,
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
                <p className={styles.para1}>
                  <li>
                  Track and organize candidate information using unique identifier (Candidate code)
                  </li>
                  <br></br>
                  <li>
                  Communicate and schedule interviews using candidate's contact information (name, email, phone number)
                  </li>
                  <br></br>
                
                  <li>
                     Understand candidate's stage in hiring process and make decisions (Status)
                  </li>
                  <br></br>
                 
                 
                
                  <li>
                  Ensure smooth and efficient hiring process
                  </li>

                 </p>

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
              span: 24,
              offset: 0,
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


              <p className={styles.para1}>
                <li>
                Specific recruiting campaign or job listing for which the interview is being scheduled (Hiring campaign)
                </li>
                <br></br>
               
                <li>
                Job position for which the candidate is being interviewed (Position)
                </li>
                <br></br>
                
               
                <li>
                The information is used to schedule and organize interviews for candidates and also to track the performance of recruiting campaigns using Shadobook ERP.
                </li>
               </p>

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
                <p className={styles.para1}>
                  <li>
                   Form builder and Form information: Tool for creating and designing forms easily and efficiently.
                     </li>
                     <br></br>
                     <li>
                     Can create various forms such as surveys, registration forms, contact forms
                     </li>
                     <br></br>
                     <li>
                     Includes drag-and-drop functionality, templates, and customization options.
                     </li>
                     <br></br>
                     <li>
                     Allows for easy distribution and data collection
                     </li>
                    </p>

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
              offset: 9,
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
              span: 8,
              offset: 3,
            }}
            xxl={{

              span: 8,
              offset: 1,
            }}>


            <p className={styles.para1}>
              <li>
                  Search by specific skills
              </li>
              <br></br>
              <li>
              Search by job title
              </li>
              <br></br>
              <li>
              Search by experience level
              </li>
              <br></br>
              <li>
              Search by location
              </li>
              <br></br>
              <li>
              Search by company,etc.
              </li>
              

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
              span: 8,
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
                  span: 15,
                  offset: 4,
                }}
                xxl={{

                  span: 12,
                  offset: 0,
                }}>
                <p className={styles.para7}>
                <li> Hiring Slots are periods of time that can be booked for venues in sheepSpaces, supporting multiple venues, restrictions and bespoke pricing.
                </li>

                </p>
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

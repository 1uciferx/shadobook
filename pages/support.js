/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { Breadcrumb, Layout as L } from 'antd';
import Contactmanager from "../components/contactmanager";
const { Content } = L;
import { Col, Row } from "antd";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styles from "../styles/Support.module.css";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Zoom from 'react-reveal/Zoom';
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Support() {
  return (
    <>
      <Layout>



        {/* background gif file coding */}
        <div className={styles.banimg} >







          {/* Breadcrumb code */}

          <Content className="site-layout" style={{ padding: "10px 10px" }}>
            <Breadcrumb style={{ margin: "16px 0", fontWeight: " " }}>
              <Breadcrumb>
                <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">Support</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>


          {/* headings code */}




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
              span: 20,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <h1 className={styles.headings}><Zoom top> Support </Zoom></h1>
            <p className={styles.para}>scroll down</p>
          </Col>


        </div>



        {/* parallex effect scroll method function */}


        <ParallaxProvider>
          <Parallax speed={5}>
            <div className="slow" />





            <Row>
              <Col xs={{
                span: 30,
                offset: 0,
              }}
                lg={{
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
                xl={{
                  span: 20,
                  offset: 0,
                }}
                xxl={{
                  span: 20,
                  offset: 0,
                }}>
                <img src="assets/imgs/page/homepage1/asf.png" />
              </Col>
            </Row>
          </Parallax>


          <Col xs={{
            span: 10,
            offset: 0,
          }}
            lg={{
              span: 20,
              offset: 0,
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
              span: 20,
              offset: 2,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }}>
            <p className={styles.subhead}>
              The shadobooks CRM ticketing system includes a unique dashboard for organising and handling a huge number of support tickets. It also results in a more enjoyable client experience. A CRM ticketing system gives solutions to two specific features of the ticketing system:
              Customers generating inquiries through multiple means, as email or phone.
              Priority-based ticket resolution for bulk tickets.

            </p>
          </Col>



          {/* <Parallax speed={25}>
            <div className="fast" /> */}
          <Col xs={{
            span: 10,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 20,
              offset: 0,
            }}
            md={{
              span: 10,
              offset: 2,
            }}
            xl={{
              span: 16,
              offset: 0,
            }}
            xxl={{
              span: 16,
              offset: 0,
            }} >
            <p className={styles.subhead2}>
              How to Raise a New Ticket ?
            </p>
          </Col>
          {/* </Parallax> */}


          <Parallax speed={5}>
            <div className="slow" />

            <Row>
              <Col xs={{
                span: 16,
                offset: 0,
              }}
                lg={{
                  span: 10,
                  offset: 0,
                }}
                sm={{
                  span: 20,
                  offset: 0,
                }}
                md={{
                  span: 10,
                  offset: 0,
                }}
                xl={{
                  span: 10,
                  offset: 1,
                }}
                xxl={{
                  span: 10,
                  offset: 0,
                }} >
                <img src="/assets/imgs/page/homepage1/ajv.gif" alt="photo" className={styles.gift} />
              </Col>



              <Col xs={{
                span: 20,
                offset: 1,
              }}
                lg={{
                  span: 10,
                  offset: 0,
                }}
                sm={{
                  span: 14,
                  offset: 7,
                }}
                md={{
                  span: 8,
                  offset: 3,
                }}
                xl={{
                  span: 8,
                  offset: 0,
                }}
                xxl={{
                  span: 10,
                  offset: 1,
                }} >
                <ol className={styles.subhead4}>
                <li>➟ To create a new ticket, navigate to Addon Management ⇢ Support ⇢ New ticket.<br /></li>
                <li>➟ Fill out the ticket form by clicking "with contact or without contact tickets" and save it.</li> <br />
                <li>➟ Click the 'weekly status icon' to see the ticket's weekly status. You can set remainder and tasks to the newly formed tickets.</li>
                </ol>
              </Col>
            </Row>
          </Parallax>

          <Parallax speed={5}>
            <div className="slow" />

            <Row>
              <Col xs={{
                span: 16,
                offset: 0,
              }}
                lg={{
                  span: 10,
                  offset: 1,
                }}
                sm={{
                  span: 10,
                  offset: 6,
                }}
                md={{
                  span: 8,
                  offset: 1,
                }}
                xl={{
                  span: 10,
                  offset: 2,
                }}
                xxl={{
                  span: 8,
                  offset: 2,
                }} >
                <ol className={styles.subhead5}>
                  <li>➟ Power your support system and ticketing processes with Shadobooks CRM. </li><br/>
                  <li>➟ The interface is easy to implement, use and scale as you deem fit. </li><br/>
                  <li>➟ All your ticket summaries, progress, active queries and other necessary information are crucial.</li><br/>

                  <li>➟ This section provides a single panel view for all your support requirements and helps in carrying out a transparent process between teams to be informed about the processes and tasks that happen around them.</li>
                </ol>
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
                  span: 14,
                  offset: 5,
                }}
                md={{
                  span: 8,
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

                <img src="/assets/imgs/page/homepage1/as3.png" alt="photo" />
              </Col>


            </Row>
          </Parallax>

        </ParallaxProvider>


        <Col xs={{
          span: 20,
          offset: 1,
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
            span: 20,
            offset: 2,
          }}
          xl={{
            span: 10,
            offset: 0,
          }}
          xxl={{
            span: 20,
            offset: 0,
          }} >
          <h4 className={styles.subhead55}>Benefits of Ticket Management with shadobook CRM:</h4>

        </Col>


        <Row>


          <Col xs={{
            span: 20,
            offset: 4,
          }}
            lg={{
              span: 10,
              offset: 2,
            }}
            sm={{
              span: 16,
              offset: 6,
            }}
            md={{
              span: 16,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{
              span: 10,
              offset: 3,
            }} >
            <ol className={styles.subhead56}>
              <li>➟ Shadobooks CRM ticketing system allows you to collect and analyse customer feedback every time a ticket is closed. </li><br/>
              <li>➟ A powerful ticketing dashboard simplifies the resolution of customer inquiries and the management of interactions between customers and agents. </li><br/>
              <li>➟ Repeatedly asking a consumer to introduce themselves will irritate them and waste a lot of time. </li><br/>
              <li>➟ This is where a ticketing system can come in handy. </li><br/>
              <li>➟ With an integrated ticketing system, agents can view past tickets raised by customers through any channel. </li><br/>
              <li>➟ You can also assign tickets to specific agents based on your customers' inquiries.</li>
            </ol>

          </Col>

          <Col xs={{
            span: 20,
            offset: 2,
          }}
            lg={{
              span: 10,
              offset: 2,
            }}
            sm={{
              span: 20,
              offset: 2,
            }}
            md={{
              span: 20,
              offset: 3,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{
              span: 8,
              offset: 1,
            }} >
            <img src="/assets/imgs/page/homepage1/asx.gif" alt="photo" />

          </Col>
        </Row>


        <div>
          <Contactmanager />
        </div>
      </Layout>
    </>
  );
}

export default Support;

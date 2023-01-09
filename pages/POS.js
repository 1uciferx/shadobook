/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import styles from "../styles/POS.module.css";
import { Col, Row } from "antd";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

function POS() {
  return (
    <>
      <Layout>
        <div
          style={{
            backgroundImage: `url(/assets/imgs/page/homepage4/ban9.jpg)`,
            backgroundSize: "cover",
            height: "400px",
            width: "100%",
          }}
        >
          <Row >
            <Col span={24} >
              <h3 className={styles.headings}>Point Of Sales</h3>
              <p className={styles.parahead}>
                Be it exploring different perspectives in any areas like
                clients, servicing, dealing with prospects or potential
                strategic partnerships, mind maps can prove to be an effective
                tool for enhancing collaboration among teams.
              </p>
            </Col>
          </Row>
        </div>

        {/* magic2 Content */}

      
            <div className="my-thing">
              <Row >
                <Col
                  xs={{
                    span: 17,
                    offset: 1,
                  }}
                  lg={{
                    span: 9,
                    offset: 1,
                  }}
                  md={{
                    span: 16,
                    offset: 3,
                  }}
                  sm={{
                    span: 17,
                    offset: 1,
                  }}
                  xl={{
                    span: 8,
                    offset: 1,
                  }}
                  xxl={{
                    span: 32,
                    offset: 1,
                  }}
                >
                  <img
                    className={styles.conimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/sw.jpg "
                    style={{
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
                </Col>
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
                  <h3 className={styles.tabheadings1}>Order List</h3>
                  <p className={styles.para}>
                    Be it exploring different perspectives in any areas like
                    clients, servicing, dealing with prospects or potential
                    strategic partnerships, mind maps can prove to be an
                    effective tool for enhancing collaboration among teams.
                  </p>
                </Col>
              </Row>
            </div>
  

       
            <div className="my-thing">
              <Row >
                <Col xs={{
                    span: 17,
                    offset: 1,
                  }}
                  lg={{
                    span: 9,
                    offset: 1,
                  }}
                  md={{
                    span: 16,
                    offset: 3,
                  }}
                  sm={{
                    span: 17,
                    offset: 1,
                  }}
                  xl={{
                    span: 8,
                    offset: 1,
                  }}
                  xxl={{
                    span: 32,
                    offset: 1,
                  }}>
                  <img
                   className={styles.conimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/sw.jpg "
                    style={{
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
                </Col>
                <Col xs={{
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
                  }}>
                  <h3 className={styles.tabheadings1}>Products Setup</h3>
                  <p className={styles.para}>
                    Be it exploring different perspectives in any areas like
                    clients, servicing, dealing with prospects or potential
                    strategic partnerships, mind maps can prove to be an
                    effective tool for enhancing collaboration among teams.
                  </p>
                </Col>
              </Row>
            </div>
 

        
            <div className="my-thing">
              <Row>
                <Col xs={{
                    span: 17,
                    offset: 1,
                  }}
                  lg={{
                    span: 9,
                    offset: 1,
                  }}
                  md={{
                    span: 16,
                    offset: 3,
                  }}
                  sm={{
                    span: 17,
                    offset: 1,
                  }}
                  xl={{
                    span: 8,
                    offset: 1,
                  }}
                  xxl={{
                    span: 32,
                    offset: 1,
                  }}>
                  <img
                    className={styles.conimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/sw.jpg "
                    style={{
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
                </Col>
                <Col xs={{
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
                  }} >
                  <h3 id="tab-e" className={styles.tabheadings1}>
                    Trade Discount
                  </h3>
                  <p className={styles.para}>
                    Be it exploring different perspectives in any areas like
                    clients, servicing, dealing with prospects or potential
                    strategic partnerships, mind maps can prove to be an
                    effective tool for enhancing collaboration among teams.
                  </p>
                </Col>
              </Row>
            </div>
    

        
            <div className="my-thing">
              <Row >
                <Col xs={{
                    span: 17,
                    offset: 1,
                  }}
                  lg={{
                    span: 9,
                    offset: 1,
                  }}
                  md={{
                    span: 16,
                    offset: 3,
                  }}
                  sm={{
                    span: 17,
                    offset: 1,
                  }}
                  xl={{
                    span: 8,
                    offset: 1,
                  }}
                  xxl={{
                    span: 32,
                    offset: 1,
                  }}>
                  <img
                    className={styles.conimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/sw.jpg "
                    style={{
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
                </Col>
                <Col  xs={{
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
                  }} >
                  <h3 id="tab-e" className={styles.tabheadings1}>
                    Diary sync
                  </h3>
                  <p className={styles.para}>
                    Be it exploring different perspectives in any areas like
                    clients, servicing, dealing with prospects or potential
                    strategic partnerships, mind maps can prove to be an
                    effective tool for enhancing collaboration among teams.
                  </p>
                </Col>
              </Row>
            </div>
   

         
            <div className="my-thing">
              <Row >
                <Col  xs={{
                    span: 17,
                    offset: 1,
                  }}
                  lg={{
                    span: 9,
                    offset: 1,
                  }}
                  md={{
                    span: 16,
                    offset: 3,
                  }}
                  sm={{
                    span: 17,
                    offset: 1,
                  }}
                  xl={{
                    span: 8,
                    offset: 1,
                  }}
                  xxl={{
                    span: 32,
                    offset: 1,
                  }}>
                  <img
                    className={styles.conimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/sw.jpg "
                    style={{
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
                </Col>
                <Col  xs={{
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
                  }} >
                  <h3 id="tab-e" className={styles.tabheadings1}>
                    E-Commerce
                  </h3>
                  <p className={styles.para}>
                    Be it exploring different perspectives in any areas like
                    clients, servicing, dealing with prospects or potential
                    strategic partnerships, mind maps can prove to be an
                    effective tool for enhancing collaboration among teams.
                  </p>
                </Col>
              </Row>
            </div>
     

     
            <div className="my-thing">
              <Row >
                <Col  xs={{
                    span: 17,
                    offset: 1,
                  }}
                  lg={{
                    span: 9,
                    offset: 1,
                  }}
                  md={{
                    span: 16,
                    offset: 3,
                  }}
                  sm={{
                    span: 17,
                    offset: 1,
                  }}
                  xl={{
                    span: 8,
                    offset: 1,
                  }}
                  xxl={{
                    span: 32,
                    offset: 1,
                  }}>
                  <img
                    className={styles.conimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/sw.jpg "
                    style={{
                      height: "400px",
                      maxWidth: "130%",
                    }}
                  />
                </Col>
                <Col  xs={{
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
                  }} >
                  <h3 id="tab-e" className={styles.tabheadings1}>
                    Settings
                  </h3>
                  <p className={styles.para}>
                    Be it exploring different perspectives in any areas like
                    clients, servicing, dealing with prospects or potential
                    strategic partnerships, mind maps can prove to be an
                    effective tool for enhancing collaboration among teams.
                  </p>
                </Col>
              </Row>
            </div>
       
      </Layout>
    </>
  );
}

export default POS;

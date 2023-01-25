/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import {
  ParallaxBanner,
  ParallaxProvider,
  ParallaxBannerLayer,
  useParallax,
} from "react-scroll-parallax";
import { Col, Row } from "antd";
import styles from "../styles/Contracts.module.css";
import useScrollSpinner from "@dan-pugsley/react-scroll-spinner";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import { Breadcrumb, Layout as L } from "antd";
import Contactmanager from "../components/contactmanager";
const { Content } = L;

function Contracts() {
  return (
    <>
      <Layout>
        <ParallaxProvider>
          <ParallaxBanner style={{ aspectRatio: "2/1", height: "620px" }}>
            <ParallaxBannerLayer
              image="assets/imgs/page/homepage4/ban17.jpg"
              speed={-20}
              className={styles.banner}
            />
            <ParallaxBannerLayer>
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
                  <Breadcrumb style={{ fontWeight: "bold" }}>
                    <Breadcrumb>
                      <Breadcrumb.Item>Index</Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <a href="">Features</a>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <a href="">Contracts</a>
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </Breadcrumb>
                </Content>
              </Col>

              <h1 className={styles.headings}>Contracts</h1>
             
                <div className={styles.paraheadcenter}>
                  <p className={styles.parahead}>
                    <Zoom>
                      Shadobooks CRM offers a curated section that is dedicated
                      to maintaining and keeping track of all the agreements.
                      Everything from the creation of contracts, overlooking
                      business collaboration, managing documentation between the
                      signed parties, and tracking policies and renewal are some
                      of the features that the interface offers.
                    </Zoom>
                  </p>
                </div>
             
               <Pulse>
               <div className={styles.modalign}>
                  <img
                    alt="Agon"
                    src="assets/imgs/page/homepage4/congif.gif "
                    className={styles.modimg}
                  />
                  </div>
              
              </Pulse> 
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>

        <Zoom top>
          <h1 className={styles.headings1}>Contract Summary</h1>
        </Zoom>
        <Pulse>
          <div className={styles.centeralign}>
            <img
              className={styles.center}
              alt="Agon"
              src="assets/imgs/page/about/7/Contractssum.png"
            />
          </div>
        </Pulse>

        <Zoom top>
          <div className={styles.paraconcenter}>
            <p className={styles.paracon}>
            In Shadobook ERP, when clicking the contract module, the page shows:
            <br></br>
            <br></br>
            <li>The option to add a new contract.</li>
            <br></br>
            <li>A contract summary.</li>
            <br></br>
            <li>A contract by type</li>
            <br></br>
            <li>A contract value by type.</li>
            <br></br>
            <li>A list of generated contracts.</li>
            </p>
          </div>
        </Zoom>

        <Row>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 9,
              offset: 1,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 1,
            }}
          >
            <div>
              <LightSpeed right>
                <p className={styles.para}>
                CRM contracts are digital documents that formalise relationships between businesses and their customers.
                </p>
              </LightSpeed>
            </div>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 10,
              offset: 3,
            }}
            md={{
              span: 20,
              offset: 2,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 2,
            }}
            xxl={{
              span: 11,
              offset: 0,
            }}
          >
            <div>
              <Fade left>
                <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/convec.jpg "
                  className={styles.vecimg}
                />
              </Fade>
            </div>
          </Col>
        </Row>

        <Zoom top>
          <h1 className={styles.headings2}>New Contract</h1>
        </Zoom>
        <Pulse>
          <div className={styles.centeralign}>
            <img
              className={styles.center}
              alt="Agon"
              src="assets/imgs/page/about/7/addcontract.png"
            />
          </div>
        </Pulse>
    
          <Zoom top>
          <div className={styles.paraconcenter}>
            <p className={styles.paracon}>
            <li>On this page, you can enter all the contract information details such as customer, subject, contract value, contract type,     <br></br> start date, end date, and contract description.</li>
            <br></br>
            <li>Click the save button to create the new contract in Shadobook ERP system.</li>
         
            </p>
            </div>
          </Zoom>
     

        <Row>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 9,
              offset: 1,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 1,
            }}
          >
            <div>
              <LightSpeed right>
                <p className={styles.para}>
                  All your vendor list is updated here along with all the
                  associated details like your purchases, pricing, overdue,
                  invoice details, profile summary and their contact list.
                </p>
              </LightSpeed>
            </div>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 10,
              offset: 3,
            }}
            md={{
              span: 20,
              offset: 3,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 2,
            }}
            xxl={{
              span: 11,
              offset: 2,
            }}
          >
            <div>
              <Fade left>
                <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/convec2.jpg "
                  className={styles.vecimg2}
                />
              </Fade>
            </div>
          </Col>
        </Row>

        <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Contracts;

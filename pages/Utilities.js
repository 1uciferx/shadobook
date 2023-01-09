/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import {
  ParallaxBanner,
  ParallaxProvider,
  ParallaxBannerLayer,
  useParallax,
} from "react-scroll-parallax";
import { Col, Row } from "antd";
import styles from "../styles/Utilities.module.css";
import useScrollSpinner from "@dan-pugsley/react-scroll-spinner";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

function Utilities() {
  const { spinnerRef, setSpinnerScroll } = useScrollSpinner({
    speed: 0.6,
    friction: 0.00023,
    maxAngularVelocity: 0.0135,
  });
  return (
    <>
      <Layout>
        <ParallaxProvider>
          <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
            <ParallaxBannerLayer
              image="assets/imgs/page/homepage4/ban9.jpg"
              speed={-20}
            />
            <ParallaxBannerLayer>
              <Zoom top>

                <h1 className={styles.headings}>Utilities</h1>

                <Col
                  xs={{
                    span: 22,
                    offset: 1,
                  }}
                  lg={{
                    span: 22,
                    offset: 2,
                  }}
                  md={{
                    span: 22,
                    offset: 0
                  }}
                  sm={{
                    span: 22,
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
                  <p className={styles.parahead}>
                    All your vendor list is updated here along with all the
                    associated details like your purchases
                  </p>
                </Col>
              </Zoom>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>

        {/* contents */}

        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 24,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Media</h1>
          </Fade>
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
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <LightSpeed right>
              <p className={styles.para}>
                All your vendor list is updated here along with all the
                associated details like your purchases, pricing, overdue,
                invoice details, profile summary and their contact list.
              </p>
            </LightSpeed>
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
            <Fade left>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/feedback.jpg "
                className={styles.conimg}
              />
            </Fade>
          </Col>
        </Row>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 24,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 2,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Bulk PDF Export</h1>
          </Fade>
        </Col>

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
          >
            <Fade right>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/faq.jpg "
                className={styles.conimg}
              />
            </Fade>
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
            <LightSpeed left>
              <p className={styles.para2}>
                All your vendor list is updated here along with all the
                associated details like your purchases, pricing, overdue,
                invoice details, profile summary and their contact list.
              </p>
            </LightSpeed>
          </Col>
        </Row>


        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 24,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>CSV Export</h1>
          </Fade>
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
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <LightSpeed right>
              <p className={styles.para}>
                All your vendor list is updated here along with all the
                associated details like your purchases, pricing, overdue,
                invoice details, profile summary and their contact list.
              </p>
            </LightSpeed>
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
            <Fade left>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/feedback.jpg "
                className={styles.conimg}
              />
            </Fade>
          </Col>
        </Row>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 24,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 2,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Calender</h1>
          </Fade>
        </Col>

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
          >
            <Fade right>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/faq.jpg "
                className={styles.conimg}
              />
            </Fade>
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
            <LightSpeed left>
              <p className={styles.para2}>
                All your vendor list is updated here along with all the
                associated details like your purchases, pricing, overdue,
                invoice details, profile summary and their contact list.
              </p>
            </LightSpeed>
          </Col>
        </Row>


        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 24,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Announcements</h1>
          </Fade>
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
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <LightSpeed right>
              <p className={styles.para}>
                All your vendor list is updated here along with all the
                associated details like your purchases, pricing, overdue,
                invoice details, profile summary and their contact list.
              </p>
            </LightSpeed>
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
            <Fade left>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/feedback.jpg "
                className={styles.conimg}
              />
            </Fade>
          </Col>
        </Row>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 24,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 2,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Goals</h1>
          </Fade>
        </Col>

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
          >
            <Fade right>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/faq.jpg "
                className={styles.conimg}
              />
            </Fade>
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
            <LightSpeed left>
              <p className={styles.para2}>
                All your vendor list is updated here along with all the
                associated details like your purchases, pricing, overdue,
                invoice details, profile summary and their contact list.
              </p>
            </LightSpeed>
          </Col>
        </Row>



        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 24,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Activity Log</h1>
          </Fade>
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
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <LightSpeed right>
              <p className={styles.para}>
                All your vendor list is updated here along with all the
                associated details like your purchases, pricing, overdue,
                invoice details, profile summary and their contact list.
              </p>
            </LightSpeed>
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
            <Fade left>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/feedback.jpg "
                className={styles.conimg}
              />
            </Fade>
          </Col>
        </Row>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 24,
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
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 2,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Ticket Pipe Log</h1>
          </Fade>
        </Col>

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
          >
            <Fade right>
              <img
                alt="Agon"
                src="assets/imgs/page/homepage4/faq.jpg "
                className={styles.conimg}
              />
            </Fade>
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
            <LightSpeed left>
              <p className={styles.para2}>
                All your vendor list is updated here along with all the
                associated details like your purchases, pricing, overdue,
                invoice details, profile summary and their contact list.
              </p>
            </LightSpeed>
          </Col>
        </Row>



      





        

        {/* <div>
          <Fade>
            <h1 className={styles.headings2}>CSV Export</h1>
          </Fade>
        </div>

        <Row style={{ marginTop: "100px", marginBottom: "300px" }}>
          <Col span={12} style={{ marginTop: "200px" }}>
            <div style={{ marginLeft: "50px" }}>
              <LightSpeed right>
                <p className={styles.para}>
                  All your vendor list is updated here along with all the
                  associated details like your purchases, pricing, overdue,
                  invoice details, profile summary and their contact list.
                </p>
              </LightSpeed>
            </div>
            <div></div>
          </Col>

          <Col span={12}>
            <div style={{ position: "absolute", right: 0 }}>
              <Fade left>
                <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/commissions.jpg "
                />
              </Fade>
            </div>
          </Col>
        </Row>

        <div>
          <Fade>
            <h1 className={styles.headings2}>Calender</h1>
          </Fade>
        </div>

        <Row style={{ marginTop: "100px", marginBottom: "340px" }}>
          <Col span={12}>
            <div style={{ position: "absolute", right: 0 }}>
              <Fade right>
                <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/contracts.jpg "
                />
              </Fade>
            </div>
            <div></div>
          </Col>

          <Col span={12} style={{ marginTop: "200px" }}>
            <div style={{ marginLeft: "100px" }}>
              <LightSpeed left>
                <p className={styles.para}>
                  All your vendor list is updated here along with all the
                  associated details like your purchases, pricing, overdue,
                  invoice details, profile summary and their contact list.
                </p>
              </LightSpeed>
            </div>
          </Col>
        </Row>

        <div>
          <Fade>
            <h1 className={styles.headings2}>Announcements</h1>
          </Fade>
        </div>

        <Row style={{ marginTop: "100px", marginBottom: "350px" }}>
          <Col span={12} style={{ marginTop: "200px" }}>
            <div style={{ marginLeft: "50px" }}>
              <LightSpeed right>
                <p className={styles.para}>
                  All your vendor list is updated here along with all the
                  associated details like your purchases, pricing, overdue,
                  invoice details, profile summary and their contact list.
                </p>
              </LightSpeed>
            </div>
            <div></div>
          </Col>

          <Col span={12}>
            <div style={{ position: "absolute", right: 0 }}>
              <Fade left>
                <img alt="Agon" src="assets/imgs/page/homepage4/manu.jpg " />
              </Fade>
            </div>
          </Col>
        </Row>

        <div>
          <Fade>
            <h1 className={styles.headings2}>Goals</h1>
          </Fade>
        </div>

        <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
          <Col span={12}>
            <div>
              <Fade right>
                <img alt="Agon" src="assets/imgs/page/homepage4/leads.jpg " />
              </Fade>
            </div>
            <div></div>
          </Col>

          <Col span={12} style={{ marginTop: "200px" }}>
            <div style={{ marginLeft: "100px" }}>
              <LightSpeed left>
                <p className={styles.para}>
                  All your vendor list is updated here along with all the
                  associated details like your purchases, pricing, overdue,
                  invoice details, profile summary and their contact list.
                </p>
              </LightSpeed>
            </div>
          </Col>
        </Row>

        <div>
          <Fade>
            <h1 className={styles.headings2}>Activity Log</h1>
          </Fade>
        </div>

        <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
          <Col span={12} style={{ marginTop: "200px" }}>
            <div style={{ marginLeft: "40px" }}>
              <LightSpeed right>
                <p className={styles.para}>
                  All your vendor list is updated here along with all the
                  associated details like your purchases, pricing, overdue,
                  invoice details, profile summary and their contact list.
                </p>
              </LightSpeed>
            </div>
            <div></div>
          </Col>

          <Col span={12}>
            <div>
              <Fade left>
                <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/loyality.jpg "
                />
              </Fade>
            </div>
          </Col>
        </Row>

        <div>
          <Fade>
            <h1 className={styles.headings2}>Ticket Pipe Log</h1>
          </Fade>
        </div>

        <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
          <Col span={12}>
            <div>
              <Fade right>
                <img alt="Agon" src="assets/imgs/page/homepage4/pr.jpg " />
              </Fade>
            </div>
            <div></div>
          </Col>

          <Col span={12} style={{ marginTop: "200px" }}>
            <div style={{ marginLeft: "100px" }}>
              <LightSpeed left>
                <p className={styles.para}>
                  All your vendor list is updated here along with all the
                  associated details like your purchases, pricing, overdue,
                  invoice details, profile summary and their contact list.
                </p>
              </LightSpeed>
            </div>
          </Col>
        </Row> */}
      </Layout>
    </>
  );
}

export default Utilities;

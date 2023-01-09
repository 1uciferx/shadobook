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
              <Col
                xs={{
                  span: 22,
                  offset: 1,
                }}
                lg={{
                  span: 22,
                  offset: 8,
                }}
                md={{
                  span: 22,
                  offset: 8,
                }}
                sm={{
                  span: 22,
                  offset: 8,
                }}
                xl={{
                  span: 22,
                  offset: 8,
                }}
                xxl={{
                  span: 22,
                  offset: 8,
                }}
              >
                <p className={styles.parahead}>
                  <Zoom>
                    Shadobooks focuses on making your procurement process happen
                    seamlessly and also easily identify the value of each
                    vendor.
                  </Zoom>
                </p>
              </Col>
              <Pulse>
                <Col
                  xs={{
                    span: 20,
                    offset: 6,
                  }}
                  lg={{
                    span: 22,
                    offset: 10,
                  }}
                  md={{
                    span: 22,
                    offset: 10,
                  }}
                  sm={{
                    span: 22,
                    offset: 10,
                  }}
                  xl={{
                    span: 22,
                    offset: 11,
                  }}
                  xxl={{
                    span: 24,
                    offset: 10,
                  }}
                >
                  <img
                    alt="Agon"
                    src="assets/imgs/page/homepage4/objective1.png "
                    className={styles.modimg}
                  />
                </Col>
              </Pulse>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>

        <Zoom top>
          <h1 className={styles.headings1}>Contract Summary</h1>
        </Zoom>
        <Pulse>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 22,
              offset: 4,
            }}
            md={{
              span: 22,
              offset: 3,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 22,
              offset: 5,
            }}
            xxl={{
              span: 22,
              offset: 7,
            }}
          >
            <img
              className={styles.center}
              alt="Agon"
              src="assets/imgs/page/homepage4/tp.jpg "
            />
          </Col>
        </Pulse>
        <Col
          xs={{
            span: 24,
            offset: 1,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 1,
          }}
          sm={{
            span: 22,
            offset: 2,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 20,
            offset: 0,
          }}
        >
          <Zoom top>
            <p className={styles.paracon}>
              Shadobooks focuses on making your procurement process happen
              seamlessly and also easily identify the value of each vendor. This
              section of the CRM helps you create forms that can be integrated
              into your website. These forms enable the user to get in touch
              with you and request an estimate about your services of yours that
              they’re looking to avail of.
            </p>
          </Zoom>
        </Col>

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
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 22,
              offset: 4,
            }}
            md={{
              span: 22,
              offset: 3,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 22,
              offset: 5,
            }}
            xxl={{
              span: 22,
              offset: 7,
            }}
          >
            <img
              className={styles.center}
              alt="Agon"
              src="assets/imgs/page/homepage4/tp.jpg "
            />
          </Col>
        </Pulse>
        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          md={{
            span: 22,
            offset: 1,
          }}
          sm={{
            span: 22,
            offset: 2,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 20,
            offset: 0,
          }}
        >
          <Zoom top>
            <p className={styles.paracon}>
              Shadobooks focuses on making your procurement process happen
              seamlessly and also easily identify the value of each vendor. This
              section of the CRM helps you create forms that can be integrated
              into your website. These forms enable the user to get in touch
              with you and request an estimate about your services of yours that
              they’re looking to avail of.
            </p>
          </Zoom>
        </Col>


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
      </Layout>
    </>
  );
}

export default Contracts;

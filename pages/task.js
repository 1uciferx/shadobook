/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/layout/Layout";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Bounce from "react-reveal/Bounce";
import styles from "../styles/Tasks.module.css";
import Zoom from "react-reveal/Zoom";
import { Col, Row } from "antd";
import { Button, Space } from "antd";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";
import { Breadcrumb, Layout as L } from "antd";
const { Content } = L;

function Task() {
  return (
    <>
      <Layout>
        <ParallaxProvider>
          <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
            <ParallaxBannerLayer
              image="assets/imgs/page/homepage4/ban12.jpg"
              expanded={false}
              speed={-10}
              scale={[1, 1.2]}
              opacity={[0.9, 1]}
            />
            <ParallaxBannerLayer>
            <Col  xs={{
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
          <Content className={styles.bc} >
            <Breadcrumb style={{  fontWeight: "bold" }}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  Index
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a  href="">
                    Features
                  </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a  href="">
                  Tasks
                  </a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
          </Col>
              <Pulse>
                <h1 className={styles.headings}>Tasks</h1>
              </Pulse>

              <Col
                xs={{
                  span: 22,
                  offset: 1,
                }}
                lg={{
                  span: 22,
                  offset: 0,
                }}
                md={{
                  span: 22,
                  offset: 0,
                }}
                sm={{
                  span: 22,
                  offset: 0,
                }}
                xl={{
                  span: 22,
                  offset: 0,
                }}
                xxl={{
                  span: 24,
                  offset: 0,
                }}
              >
                <div className={styles.paraheadalign}>
                <p className={styles.parahead}>
                  <Zoom>
                    Shadobooks focuses on making your procurement
                  </Zoom>
                </p>
                </div>
              </Col>

              <Pulse>
                <Col
                  xs={{
                    span: 22,
                    offset: 1,
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
                  className={styles.modimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/objective1.png "
                   
                  />
                </Col>
              </Pulse>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>

        <Slide left cascade>
          <h2 className={styles.headings2}>Tasks Summary</h2>
        </Slide>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 24,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 0,
          }}
          xl={{
            span: 24,
            offset: 0,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.imgalign}>
          <img
            src="assets/imgs/page/about/3/img.png"
            alt="Agon"
            className={styles.conimg}
           
          />
          </div>
        </Col>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 24,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 0,
          }}
          xl={{
            span: 24,
            offset: 0,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.conalign}>
          <p className={styles.paracon}>
            Your organization might have several different sales processes in
            place—like deal closure, lead follow-up, order management, or your
            discount process. With Blueprints, you can capture every stage of
            these offline sales processes inside your CRM, and execute them in a
            systematic manner.
          </p>
          </div>
        </Col>

        <Slide left cascade>
          <h2 className={styles.headings2}>Add new task</h2>
        </Slide>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 24,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 0,
          }}
          xl={{
            span: 24,
            offset: 0,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
           <div className={styles.imgalign}>
          <img
            src="assets/imgs/page/about/3/img.png"
            alt="Agon"
            className={styles.conimg}
          />
          </div>
        </Col>

        <Col
          xs={{
            span: 22,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 0,
          }}
          md={{
            span: 23,
            offset: 0,
          }}
          sm={{
            span: 22,
            offset: 0,
          }}
          xl={{
            span: 22,
            offset: 0,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.conalign}>
          <p className={styles.paracon}>
            Your organization might have several different sales processes in
            place—like deal closure, lead follow-up, order management, or your
            discount process. With Blueprints, you can capture every stage of
            these offline sales processes inside your CRM, and execute them in a
            systematic manner.
          </p>
          </div>
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
              span: 20,
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
              span: 8,
              offset: 1,
            }}
          >
            <img
              className={styles.conimg3}
              alt="Agon"
              src="assets/imgs/page/homepage4/ban1.jpg "
           
            />
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
              span: 10,
              offset: 4,
            }}
          >
            <h4 className={styles.subhead2}>Switch to Kanban</h4>
            <p className={styles.para}>
              The estimate feature will give you the option to customize the
              form that is tailored to give you a better understanding of the
              customer intent. The CRM will enable assigning this influx of
              requests to specific teams and employees.
            </p>
          </Col>
        </Row>

       

        <Slide left cascade>
          <h2 className={styles.headings2}> Tasks Overview</h2>
        </Slide>

        <Col
          xs={{
            span: 24,
            offset: 0,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 24,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 0,
          }}
          xl={{
            span: 24,
            offset: 0,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
           <div className={styles.imgalign}>
          <img
            src="assets/imgs/page/about/3/img.png"
            alt="Agon"
            className={styles.conimg}
          />
          </div>
        </Col>

        <Col
          xs={{
            span: 22,
            offset: 0,
          }}
          lg={{
            span: 22,
            offset: 0,
          }}
          md={{
            span: 23,
            offset: 0,
          }}
          sm={{
            span: 22,
            offset: 0,
          }}
          xl={{
            span: 22,
            offset: 0,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <div className={styles.conalign}>
          <p className={styles.paracon}>
            Your organization might have several different sales processes in
            place—like deal closure, lead follow-up, order management, or your
            discount process. With Blueprints, you can capture every stage of
            these offline sales processes inside your CRM, and execute them in a
            systematic manner.
          </p>
          </div>
        </Col>
      </Layout>
    </>
  );
}

export default Task;

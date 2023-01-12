/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import styles from "../styles/Leadmanager.module.css";
import Footer from "../components/layout/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import { Col, Row } from "antd";
import { Button, Space } from "antd";
import { Layout as L } from "antd";
import { Breadcrumb } from "antd";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Header from "../components/layout/Header";
import Contactmanager from "../components/contactmanager";

const { Content } = L;

function Leadmanager() {
  return (
    <>
      <Header />

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
                <a href="">Lead Manager</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Breadcrumb>
        </Content>
      </Col>

      <h1 className={styles.headings}>Lead Manager</h1>

      <Col
        xs={{
          span: 22,
          offset: 6,
        }}
        lg={{
          span: 22,
          offset: 3,
        }}
        md={{
          span: 22,
          offset: 4,
        }}
        sm={{
          span: 22,
          offset: 4,
        }}
        xl={{
          span: 22,
          offset: 4,
        }}
        xxl={{
          span: 22,
          offset: 0,
        }}
      >
        <p className={styles.parahero}>
          Bring the very best out of your customer-facing teams with robust
          automation,comprehensive analytics, personalized solutions, and more.
        </p>
      </Col>

      <Col
        xs={{
          span: 20,
          offset: 9,
        }}
        lg={{
          span: 22,
          offset: 11,
        }}
        md={{
          span: 22,
          offset: 11,
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
          span: 22,
          offset: 0,
        }}
      >
        <Button size="large" className={styles.headButton}>
          Get Start
        </Button>
      </Col>

      <Col
        xs={{
          span: 22,
          offset: 2,
        }}
        lg={{
          span: 22,
          offset: 3,
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
          offset: 3,
        }}
        xxl={{
          span: 24,
          offset: 0,
        }}
      >
        <img
          className={styles.image1}
          alt="Agon"
          src="assets/imgs/page/homepage4/webhooks.jpg "
        />
      </Col>

      <Col
        xs={{
          span: 22,
          offset: 2,
        }}
        lg={{
          span: 22,
          offset: 3,
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
          offset: 3,
        }}
        xxl={{
          span: 24,
          offset: 0,
        }}
      >
        {" "}
        <a>
          {" "}
          <img
            src="assets/imgs/page/homepage3/play.png "
            alt="ShadoBooks"
            className={styles.play}
          />
        </a>
      </Col>

      <h1 className={styles.headings}>Modules</h1>
      <p className={styles.parasmall}>
        {" "}
        One design story Three ways to tell it.
      </p>

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
          offset: 2,
        }}
        sm={{
          span: 22,
          offset: 1,
        }}
        xl={{
          span: 22,
          offset: 2,
        }}
        xxl={{
          span: 24,
          offset: 0,
        }}
        className={styles.concontainer}
      >
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <Scene pin>
            <div className={styles.panel}>
              <Col
                xs={{
                  span: 22,
                  offset: 1,
                }}
                lg={{
                  span: 22,
                  offset: 3,
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
                  span: 22,
                  offset: 2,
                }}
                xxl={{
                  span: 24,
                  offset: 1,
                }}
                className={styles.scrollcon}
              >
                <h2 className={styles.headings3}>Message</h2>
              </Col>

              <Row>
                <Col
                  xs={{
                    span: 22,
                    offset: 2,
                  }}
                  lg={{
                    span: 10,
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
                    span: 12,
                    offset: 1,
                  }}
                >
                  <img
                    className={styles.scrollimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/LM.jpg "
                  />
                </Col>

                <Col
                  xs={{
                    span: 22,
                    offset: 2,
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
                    offset: 3,
                  }}
                  xxl={{
                    span: 8,
                    offset: 0,
                  }}
                >
                  <p className={styles.para}>
                    Shadobooks focuses on making your procurement process happen
                    seamlessly and also easily identify the value of each
                    vendor.
                  </p>
                </Col>
              </Row>
            </div>
          </Scene>
          <Scene pin>
            <div className={styles.panel}>
              <Col
                xs={{
                  span: 22,
                  offset: 1,
                }}
                lg={{
                  span: 22,
                  offset: 3,
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
                  span: 22,
                  offset: 2,
                }}
                xxl={{
                  span: 24,
                  offset: 1,
                }}
                className={styles.scrollcon}
              >
                <h2 className={styles.headings3}>Call</h2>
              </Col>

              <Row>
                <Col
                  xs={{
                    span: 22,
                    offset: 2,
                  }}
                  lg={{
                    span: 10,
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
                    span: 12,
                    offset: 1,
                  }}
                >
                  <p className={styles.para}>
                    Shadobooks focuses on making your procurement process happen
                    seamlessly and also easily identify the value of each
                    vendor.
                  </p>
                </Col>

                <Col
                  xs={{
                    span: 22,
                    offset: 2,
                  }}
                  lg={{
                    span: 10,
                    offset: 3,
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
                    offset: 3,
                  }}
                  xxl={{
                    span: 8,
                    offset: 0,
                  }}
                >
                  <img
                    className={styles.scrollimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/LM.jpg "
                  />
                </Col>
              </Row>
            </div>
          </Scene>

          <Scene pin>
            <div className={styles.panel}>
              <Col
                xs={{
                  span: 22,
                  offset: 1,
                }}
                lg={{
                  span: 22,
                  offset: 3,
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
                  span: 22,
                  offset: 2,
                }}
                xxl={{
                  span: 24,
                  offset: 1,
                }}
                className={styles.scrollcon}
              >
                <h2 className={styles.headings3}>Teams</h2>
              </Col>

              <Row>
                <Col
                  xs={{
                    span: 22,
                    offset: 2,
                  }}
                  lg={{
                    span: 10,
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
                    span: 12,
                    offset: 1,
                  }}
                >
                  <img
                    className={styles.scrollimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/LM.jpg "
                  />
                </Col>

                <Col
                  xs={{
                    span: 22,
                    offset: 2,
                  }}
                  lg={{
                    span: 10,
                    offset: 3,
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
                    offset: 3,
                  }}
                  xxl={{
                    span: 8,
                    offset: 0,
                  }}
                >
                  <p className={styles.para} >
                    Shadobooks focuses on making your procurement process happen
                    seamlessly and also easily identify the value of each
                    vendor.
                  </p>
                </Col>
              </Row>
            </div>
          </Scene>
          <Scene pin>
            <div className={styles.panel}>
              <Col
                xs={{
                  span: 22,
                  offset: 1,
                }}
                lg={{
                  span: 22,
                  offset: 3,
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
                  span: 22,
                  offset: 2,
                }}
                xxl={{
                  span: 24,
                  offset: 1,
                }}
                className={styles.scrollcon}
              >
                <h2 className={styles.headings3}>Meetings</h2>
              </Col>

              <Row>
                <Col
                  xs={{
                    span: 22,
                    offset: 2,
                  }}
                  lg={{
                    span: 10,
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
                    span: 12,
                    offset: 1,
                  }}
                >
                  <p className={styles.para}>
                    Shadobooks focuses on making your procurement process happen
                    seamlessly and also easily identify the value of each
                    vendor.
                  </p>
                </Col>

                <Col
                  xs={{
                    span: 22,
                    offset: 2,
                  }}
                  lg={{
                    span: 10,
                    offset: 3,
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
                    offset: 3,
                  }}
                  xxl={{
                    span: 8,
                    offset: 0,
                  }}
                >
                  <img
                    className={styles.scrollimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/LM.jpg "
                  />
                </Col>
              </Row>
            </div>
          </Scene>

          <Scene pin>
            <div className={styles.panel}>
              <Col
               xs={{
                span: 22,
                offset: 2,
              }}
              lg={{
                span: 24,
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
                span: 22,
                offset: 2,
              }}
              xxl={{
                span: 24,
                offset: 0,
              }}
            
              >
              <div>
                <Contactmanager/>
                </div>  
              </Col>
            </div>
          </Scene>


          <Scene pin>
            <div className={styles.panel}>
              <Col
               xs={{
                span: 22,
                offset: 2,
              }}
              lg={{
                span: 24,
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
                span: 22,
                offset: 2,
              }}
              xxl={{
                span: 24,
                offset: 0,
              }}
              className={styles.footer}
              >
                <Footer />
              </Col>
            </div>
          </Scene>
        </Controller>
      </Col>
    </>
  );
}

export default Leadmanager;

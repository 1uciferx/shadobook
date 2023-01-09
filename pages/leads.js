/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { Breadcrumb, Layout as L } from "antd";
const { Content } = L;
import Flip from "react-reveal/Flip";
import { Button, Space } from "antd";
import { Col, Row } from "antd";
import styles from "../styles/Leads.module.css";
import "react-modal-video/css/modal-video.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";

function Leads() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        {/* backgroundImage for the hero */}

        <div
          style={{
            backgroundImage: `url(/assets/imgs/page/homepage4/weq.jpg)`,
            backgroundSize: "cover",
            height: "400px",
            width:"100%"
          }}
        >
          {/* Breadcrumb code */}

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
                <Breadcrumb.Item style={{ color: "white" }}>
                  Index
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">
                    Features
                  </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">
                    Leads
                  </a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
          </Col>

          {/* end of the breadcrumb code */}

          {/* text on the hero banner */}

          <Row>
            <Col
              xs={{
                span: 24,
                offset: 0,
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
                offset: 1,
              }}
              xl={{
                span: 20,
                offset: 0,
              }}
              xxl={{
                span: 22,
                offset:1,
              }}
            >
              <div>
                <Flip top cascade>
                  <h1 className={styles.headings}>Leads</h1>
                </Flip>
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 10,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 17,
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
            <Flip cascade>
              <p className={styles.para}>How does the Leads work ?</p>
            </Flip>
            <Zoom>
              <p className={styles.subhead}>
                {" "}
                In simple terms, a lead is an individual or organization with an
                interest in what you are selling. The interest is expressed by
                sharing contact information, like an email ID, a phone number,
                or even a social media handle.
              </p>
            </Zoom>
          </Col>

          {/* image for the first container */}

          <Col
            xs={{
              span: 24,
              offset: 0,
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
              span: 17,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 1,
            }}
          >
            <Zoom>
              <img
                src="assets/imgs/page/homepage4/leadvec.jpg"
                className={styles.conimg}
              />
            </Zoom>
          </Col>
        </Row>

        {/* second container starts from here */}

        <Row>
          <Col
            xs={{
              span: 24,
              offset: 0,
            }}
            lg={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 17,
              offset: 1,
            }}
            xl={{
              span: 20,
              offset: 2,
            }}
            xxl={{
              span: 21,
              offset: 0,
            }}
          >
            <div>
              <Flip top cascade>
                <p className={styles.subhead2}>How to create a New Lead ?</p>
              </Flip>
            </div>
          </Col>
        </Row>

        {/* second container image has been placed here */}

        <Row>
          <Col
            xs={{
              span: 24,
              offset: 0,
            }}
            lg={{
              span: 22,
              offset: 1,
            }}
            md={{
              span: 22,
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
              span: 30,
              offset: 2,
            }}
          >
            <Zoom>
              <img
                src="assets/imgs/page/homepage4/12a.png"
                className={styles.conimg2}
              />
            </Zoom>
          </Col>
        </Row>

        {/* after image dialouges are wrriten here */}

        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 23,
              offset: 0,
            }}
            md={{
              span: 23,
              offset: 0,
            }}
            sm={{
              span: 17,
              offset: 0,
            }}
            xl={{
              span: 22,
              offset: 0,
            }}
            xxl={{
              span: 22,
              offset: 2,
            }}
          >
            <Zoom>
              <p className={styles.subhead4}>
                Lead is a contact already determined to be a prospective
                customer, whereas other companies consider a “lead” to be any
                sales contact. But what remains the same across definitions is
                that a lead will potentially become a future client. A sales
                lead is a potential sales contact, individual or organization
                that expresses an interest in your goods or services. Leads are
                typically obtained through the referral of an existing customer
                or through a direct response to advertising or publicity.
              </p>
            </Zoom>
          </Col>

          {/* learn more button codings are placed here */}
        </Row>
      </Layout>
    </>
  );
}

export default Leads;

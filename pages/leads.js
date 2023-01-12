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
import Contactmanager from "../components/contactmanager";

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
            width: "100%",
          }}
        >
          {/* Breadcrumb code */}

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
                offset: 1,
              }}
            >
              <div>
                <Flip top cascade>
                  <h1 className={styles.headings}>Leads</h1>
                </Flip>
              </div>

              <div className={styles.headparacenter}>
                <Flip top cascade>
                  <p className={styles.headpara}>
                    Shadobooks offers an easy-to-use CRM interface and
                    facilitates data access from anywhere at any time.
                  </p>
                </Flip>
              </div>
            </Col>
          </Row>
        </div>

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
              <Flip top cascade></Flip>
            </div>
          </Col>
        </Row>

        {/* second container image has been placed here */}

        <Zoom>
          <div className={styles.imgcenter}>
            <img
              src="assets/imgs/page/about/11/L.png"
              className={styles.conimg2}
            />
          </div>
        </Zoom>

        {/* after image dialouges are wrriten here */}

        <div className={styles.imgcon}>
          <Zoom>
            <p className={styles.subhead4}>
            In Shadobook ERP, the lead page is shown when you click the lead module. Here we have the options to add a new lead, import a lead, filter options, and also the list form of generated leads.
            </p>
          </Zoom>
        </div>

        {/* addnewlead */}

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
              <p className={styles.para}>Add New Lead</p>
            </Flip>
            <Zoom>
              <p className={styles.subhead}>
              In this add new lead window, we have to select the details such as status, source, and assigned, enter the field name such as name, address, position,city,email address, state, company,etc., and click the save button to add the new task.
              </p>
            </Zoom>
          </Col>

          {/* image addnewlead */}

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
                src="assets/imgs/page/about/11/AL.png"
                className={styles.conimg}
              />
            </Zoom>
          </Col>
        </Row>

        {/* importleads */}
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
              <p className={styles.para}>Import Leads</p>
            </Flip>
            <Zoom>
              <p className={styles.subhead}>
              In Shadobook ERP, when clicking the import lead button, the import page will open. Here, we have to select the csv file, status, source,responsible and then click the import button or simulate import button so the selected file will import.
              </p>
            </Zoom>
          </Col>

          {/* image importleads */}

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
                src="assets/imgs/page/about/11/IL.png"
                className={styles.conimg}
              />
            </Zoom>
          </Col>
        </Row>
        <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Leads;

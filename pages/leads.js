/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { Breadcrumb, Layout as L } from 'antd';
const { Content } = L;
import Flip from 'react-reveal/Flip';
import { Button, Space } from 'antd'
import { Col, Row } from "antd";
import styles from "../styles/Leads.module.css";
import "react-modal-video/css/modal-video.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Leads() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>






        {/* backgroundImage for the hero */}

        <div style={{
          backgroundImage: `url(/assets/imgs/page/homepage1/weq.jpg)`,
          backgroundSize: "cover",
          height: '400px'
        }}>

          {/* Breadcrumb code */}

          <Content className="site-layout" style={{ padding: "10px 100px" }}>
            <Breadcrumb style={{ margin: "16px 0", fontWeight: "bold" }}>
              <Breadcrumb>
                <Breadcrumb.Item style={{ color: "white" }}>Index</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">Leads</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>

          {/* end of the breadcrumb code */}

          {/* text on the hero banner */}

          <Row>
            <Col span={24}>
              <div>
                <Flip top cascade>
                  <h1 className={styles.headings}>Leads</h1>
                </Flip>
              </div>
            </Col>
          </Row>

        </div>



        <Row>
          <Col span={15}>
            <div>
              <Flip cascade>

                <p className={styles.para}>
                  How does the Leads work ?
                </p>
              </Flip>
            </div>
            <p className={styles.subhead}> In simple terms, a lead is an individual or organization with an interest in what you are selling. The interest is expressed by sharing contact information, like an email ID, a phone number, or even a social media handle.
            </p>
            <Space><Button style={{ color: "#90331c", marginLeft: '78px' }}>Learn More</Button></Space>
          </Col>


          {/* image for the first container */}

          <Col span={9}>
            <img src="assets/imgs/page/homepage1/ert.jpg" style={{ height: '250px', width: '400px', marginTop: '60px' }} />
          </Col>
        </Row>


        {/* second container starts from here */}

        <Row>
          <Col span={24}>
            <div>
              <Flip top cascade>
                <p className={styles.subhead2}>
                  How to create a New Lead ?</p>
              </Flip>
            </div>
          </Col>
        </Row>


    {/* second container image has been placed here */}

        <Row>
          <Col span={2}></Col>
          <Col span={22}>
            <img src="assets/imgs/page/homepage1/12a.png" style={{ height: '550px', width: '1300px', marginTop: '30px' }} />
          </Col>
        </Row>


          {/* after image dialouges are wrriten here */}


        <Row>
          <Col span={24}>
            <p className={styles.subhead4}>
              Lead is a contact already determined to be a prospective customer, whereas other companies consider a “lead” to be any sales contact. But what remains the same across definitions is that a lead will potentially become a future client.
              A sales lead is a potential sales contact, individual or organization that expresses an interest in your goods or services. Leads are typically obtained through the referral of an existing customer or through a direct response to advertising or publicity.
            </p>
          </Col>

          {/* learn more button codings are placed here */}
          
          <Space><Button style={{ color: "#90331c", marginLeft: '750px', marginBottom: '40px' }}>Learn More</Button></Space>
        </Row>


      </Layout>
    </>
  );
}

export default Leads;

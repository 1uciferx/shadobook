import React from 'react';
import dynamic from "next/dynamic";
import Link from "next/link";
import { Breadcrumb, Layout as L } from 'antd';
import { Button, Space } from 'antd'
import styles from "../styles/Knowledgebase.module.css";
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
const { Content } = L;
import Contactmanager from "../components/contactmanager";
import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";








function Knowledgebase() {
    return (
        <>
            <Layout>
                <ParallaxProvider>
                    <Parallax speed={-5}>
                        <div className="slow" />
                        {/* backgroundImage for the hero */}

                        <div style={{
                            backgroundImage: `url(/assets/imgs/page/homepage1/1sd.jpg)`,
                            backgroundSize: "cover",
                            height: '500px'
                        }}>

                            {/* Breadcrumb code */}

                            <Content className="site-layout" style={{ padding: "10px 10px" }}>
                                <Breadcrumb style={{ margin: "16px 0", fontWeight: "bold" }}>
                                    <Breadcrumb>
                                        <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <a style={{ color: "white" }} href="">Features</a>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <a style={{ color: "white" }} href="">Knowledge Base</a>
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                </Breadcrumb>
                            </Content>

                            {/* end of the breadcrumb code */}

                            {/* text on the hero banner */}

                            <Row>
                                <Col xs={{
                                    span: 20,
                                    offset: 0,
                                }}
                                    lg={{
                                        span: 20,
                                        offset: 2,
                                    }}
                                    sm={{
                                        span: 10,
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
                                    <div>
                                        <HeadShake>
                                            <h1 className={styles.headings}>Knowledge Base</h1>
                                        </HeadShake>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Parallax>
                </ParallaxProvider>





                <Row>
                    <Col xs={{
                        span: 20,
                        offset: 0,
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
                            span: 10,
                            offset: 0,
                        }} >
                        <div>
                            <Slide right cascade>
                                <p className={styles.para}>
                                    What is Knowledge Base ?
                                </p>
                            </Slide>
                        </div>

                        <p className={styles.subhead}>
                            Shadobooks CRMs can also assist you to develop other types of information, such as a knowledge base. A knowledge base is useful because it allows customers to get the answers they want and need on their own schedule. You may not only create, share, and update your knowledge base, but you can also report on and analyze it to learn how customers use it, which pages are most frequently requested, and the overall impact it has on your audience.
                        </p>

                        {/* <Space><Button style={{ color: "#90331c", marginLeft: '40px' }}>Learn More</Button></Space> */}
                    </Col>

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
                            span: 10,
                            offset: 1,
                        }} >
                        <div>
                            <Flip top>
                                <img src="assets/imgs/page/homepage1/576.jpg" style={{ marginTop: '40px' }} />
                            </Flip>
                        </div>
                    </Col>

                </Row>


                <Row>


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
                            span: 10,
                            offset: 0,
                        }} >
                        <div>
                            <Flip top>
                                <img src="assets/imgs/page/homepage1/12wq.jpg" style={{ marginTop: '40px' }} />
                            </Flip>
                        </div>
                    </Col>



                    <Col xs={{
                        span: 20,
                        offset: 0,
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
                            span: 10,
                            offset: 1,
                        }} >

                        <div>
                            <Slide right cascade>
                                <p className={styles.para}>

                                    How to Create an Article ?

                                </p>
                            </Slide>
                        </div>

                        <p className={styles.subhead}>
                            To create a new knowledge base article, go to the main menu and select Knowledge Base-Articles. A new window will open; click the top left button New Article. Fill out the article form with your information and save it. Following the creation of the knowledge base article, each content will have a unique slug that users can access directly.
                        </p>

                        {/* <Space><Button style={{ color: "#90331c", marginLeft: '40px' }}>Learn More</Button></Space> */}
                    </Col>
                </Row>


                <Row>
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
                            offset: 2,
                        }} >
                        <img src="assets/imgs/page/homepage1/xx1.png" />
                    </Col>
                    {/* <Space><Button style={{ color: "#90331c", marginLeft: '740px', marginBottom:'50px' }}>Learn More</Button></Space> */}
                </Row>


                <div>
                    <Contactmanager />
                </div>



            </Layout>
        </>
    );
}
export default Knowledgebase;
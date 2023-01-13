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
import Contactmanager from "../components/contactmanager";
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
                        <a href="">Tasks</a>
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </Breadcrumb>
                </Content>
              </Col>

              <Pulse>
                <h1 className={styles.headings}>Tasks</h1>
              </Pulse>

             
                <div className={styles.paraheadalign}>
                  <p className={styles.parahead}>
                    <Zoom>"Achieve more - with less effort"</Zoom>
                  </p>
                </div>
        

           <Pulse>
           <div className={styles.modalign}>
                  <img
                  className={styles.modimg}
                    alt="Agon"
                    src="assets/imgs/page/homepage4/taskbookmark1.png "
                   
                  />
                  </div>
             
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
              src="assets/imgs/page/about/10/TS.png"
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
              Shadobook ERP displays the task summary in this window. Go to the
              task module to get this page. Here we get the details about the
              task name, status, start date, due date, who it's assigned to, and
              priority in the form of a list.
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
              src="assets/imgs/page/about/10/ANT.png"
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
              We can add a new task in shadobook ERP by clicking the "Add New"
              tab, entering all the details such as subject, start date, due
              date, priority, assignees, and so on, and then clicking the "Save"
              button; the task will then appear in the task summary page.
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
              src="assets/imgs/page/about/10/STK.png"
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
              When you click the switch to Karaban icon button on this page, it
              displays the tasks as "not started," "in progress," "tested,"
              "awaiting feedback," and "completed."Again, click that icon to go
              back.
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
              src="assets/imgs/page/about/10/TO.png"
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
            In the Shadobook ERP task module, the task overview page shows the list of added task lists. Here, we also have the option to filter the task lists by staff members, month, and year.
            </p>
          </div>
        </Col>

        <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Task;

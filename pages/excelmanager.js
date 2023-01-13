/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Breadcrumb, Layout as L } from 'antd';
const { Content } = L;
import { Col, Row } from "antd";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styles from "../styles/Excelmanager.module.css";
import { Button, Space } from 'antd';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import dynamic from "next/dynamic";
import gif from '../public/assets/imgs/page/homepage1/excelgif.gif';
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});



function excelmanager() {


  return (
    <>
      <Layout>

        {/* hero background image container */}

        <div className={styles.bgimg} >





          {/* Breadcrumb code */}

          <Content className="site-layout" style={{ padding: "10px 10px" }}>
            <Breadcrumb style={{ margin: "16px 0", fontWeight: "bold" }}>
              <Breadcrumb>
                <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">Expenses</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>


          {/* headings code */}


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
              offset: 4,
            }}
            md={{
              span: 20,
              offset: 3,
            }}
            xl={{
              span: 20,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <Zoom cascade>

              {/* hero banner image heading or title */}

              <h1 className={styles.headings}> Excel Manager </h1>
            </Zoom>

            <LightSpeed cascade>

              {/* hero banner bottom line title or quote */}

              <p className={styles.para}>Offering assistance to individuals and organizations regarding technology-related devices.</p>
            </LightSpeed>
          </Col>

        </div>



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
              span: 16,
              offset: 0,
            }}
            md={{
              span: 16,
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
            <h2 className={styles.subhead}>How it Works ?</h2>
          </Col>
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
              span: 16,
              offset: 0,
            }}
            md={{
              span: 16,
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
           <p className={styles.subhead32}>The Excel manager helps you to maintain so may acctivities and its very easy to analyse every task.The good news is if you don't need the full suite of Microsoft 365 tools, you can access a number of its apps online for free -- including Word, Excel, PowerPoint, OneDrive, Outlook, Calendar and Skype</p>
          </Col>
        </Row>
        </Row>


        {/* first side heading of the excel manager page */}


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
              span: 16,
              offset: 0,
            }}
            md={{
              span: 16,
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
            <p className={styles.subhead}>Over View of the Excel Manager</p>
          </Col>
        </Row>

        {/* end of the first side header of the page excel manager */}



        {/* image for the first container starts */}

        <Row>
          <Col xs={{
            span: 30,
            offset: 0,
          }}
            lg={{
              span: 6,
              offset: 2,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 8,
              offset: 1,
            }}
            xl={{
              span: 8,
              offset: 0,
            }}
            xxl={{
              span: 8,
              offset: 3,
            }} >

            <img className={styles.imgbg} src="assets/imgs/page/homepage1/az3.jpg" />
          </Col>

          {/* image for the first container ends */}



          {/* content for the first container starts */}


          <Col xs={{
            span: 20,
            offset: 2,
          }}
            lg={{
              span: 12,
              offset: 2,
            }}
            sm={{
              span: 16,
              offset: 3,
            }}
            md={{
              span: 12,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 8,
              offset: 1,
            }} >
            <p className={styles.subhead1}>
              A data table is a range of cells in which you can change values in some of the cells and come up with different answers to a problem. A good example of a data table employs the PMT function with different loan amounts and interest rates to calculate the affordable amount on a home mortgage loan.
              <br /><br />
              Use the Name Manager dialog box to work with all the defined names and table names in a workbook. For example, you may want to find names with errors, confirm the value and reference of a name, view or edit descriptive comments, or determine the scope.
            </p>
          </Col>
        </Row>


        {/* content for the first container ends */}




        {/* content for the second container starts */}

        <Row>
          <Col xs={{
            span: 20,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{
              span: 8,
              offset: 3,
            }} >
            <Zoom cascade>
              <p className={styles.subhead2}>
                You can enter three types of data in a cell: text, numbers, and formulas. Text is any entry that is not a number or formula. Numbers are values used when making calculations. Formulas are mathematical calculations.
              </p>
            </Zoom>

          </Col>

          {/* content for the second container ends */}




          {/* content for the second image starts */}


          <Col xs={{
            span: 30,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 8,
              offset: 0,
            }}
            xxl={{
              span: 8,
              offset: 1,
            }} >

            <Zoom cascade>
              <img className={styles.imgbg} src="assets/imgs/page/homepage1/excelgif.gif" />
            </Zoom>
          </Col>
        </Row>

        {/* content for the second image ends */}



        <Row>
          <Col xs={{
            span: 30,
            offset: 0,
          }}
            lg={{
              span: 12,
              offset: 2,
            }}
            sm={{
              span: 16,
              offset: 6,
            }}
            md={{
              span: 16,
              offset: 0,
            }}
            xl={{
              span: 20,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 1,
            }} >
            <p className={styles.subhead3}>
              How the Excel Manger Works ?
            </p>
          </Col>

        </Row>


        {/* media query initialization for the last container which is located at the bottom of the page */}

        <Col xs={{
          span: 20,
          offset: 2,
        }}
          lg={{
            span: 20,
            offset: 3,
          }}
          sm={{
            span: 20,
            offset: 1,
          }}
          md={{
            span: 20,
            offset: 2,
          }}
          xl={{
            span: 24,
            offset: 4,
          }}
          xxl={{
            span: 16,
            offset: 0,
          }} >

          <Zoom cascade>


            {/* final image container */}
            <img className={styles.imgb} src="assets/imgs/page/homepage1/az2.jpg" />
          </Zoom>
        </Col>

        {/* final container content which is loacted at the end of the container */}

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
              span: 16,
              offset: 3,
            }}
            md={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 20,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <p className={styles.subhead4}>
              Excel Name Manager is used to create, edit, delete and find other names in the Excel workbook. Excel “Name Manager” can be found in the “Formulas” tab. Tip: “Ctrl + F3” is the shortcut to access it. Usually, it is used to work with existing names.
              <br /><br />
              The purpose of the Task Manager Excel template is to assist in remembering tasks that need to be done. This checklist template could be used by anyone who needs to keep track of tasks (one-time or recurring) and avoid forgetting them in a busy daily life.
              <br />
              Keep track of your tasks with this basic task tracking template for Excel. This accessible task tracking template has a customizable list of tasks along with each tasks' start and due dates, percentage complete, and notes.
            </p>
          </Col>
        </Row>

        {/* end of the final content container */}


      </Layout>
    </>
  );
}

export default excelmanager;

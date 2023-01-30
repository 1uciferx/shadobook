/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { Breadcrumb, Layout as L } from 'antd';
import { Button, Space } from 'antd';
const { Content } = L;
import { Col, Row } from "antd";
import { Carousel } from 'antd';
import styled from 'styled-components';
import { Tween, Timeline } from 'react-gsap';
import styles from "../styles/Companyassets.module.css";
import Link from "next/link";
import { Controller, Scene } from 'react-scrollmagic';
import Contactmanager from "../components/contactmanager";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});


// slide image style
const contentStyle = {
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const SectionWipes2Styled = styled.div`
overflow: hidden;
#pinContainer {
  height: 0px;
  padding-bottom: 900px;
  width: 100vw;
  overflow: hidden;
}
#pinContainer .panel {
  height: 100vh;
  width: 100vw;
  position: absolute;
  text-align: center;
}
.panel span {
  position: relative;
  display: block;
  top: 20%;
  font-size: 80px;
}

.panel.blue {
  background-color: #012255;
}

.panel.turqoise {
  background-color: #0a214a;
}

.panel.green {
  background-color: #040b38;
}

.panel.bordeaux {
  background-color: #300202;
}
`;





function companyassets() {
  return (
    <>



      <Layout>



        <Row>
          <div style={{
            backgroundImage: `url(/assets/imgs/page/homepage1/bg8.jpg)`,
            backgroundSize: "cover",
            width: "100%",
            height: '600px',
          }}>

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
                offset: 0,
              }} >




              {/* Breadcrumb code */}

              <Content className="site-layout" style={{ padding: "10px 10px" }}>
                <Breadcrumb style={{ margin: "16px 0", fontWeight: " " }}>
                  <Breadcrumb>
                    <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <a style={{ color: "white" }} href="/# ">Features</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <a style={{ color: "white" }} href=" #">Company Assets</a>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Breadcrumb>
              </Content>




              <h1 className={styles.headings}> Company Assets </h1>
              <p className={styles.subhead}>An item of value owned by a company</p>

              <p className={styles.headings3}>The Company asset section of the platform enables end-to-end visibility of the management process starting from acquisition to disposition. Shadobook offers an elaborate portal for complete tracking of asset movements across your enterprise, request management and also ensure compliance through periodical audits. You can easily maintain, monitor, and manage business assets along with maintenance reporting, audit compliance, licenses management and also asserting depreciation values.
              </p>
              <p className={styles.para}>Scroll Down</p>

            </Col>
          </div>
        </Row>



        {/* magic scroll style code starts */}

        {/* <SectionWipes2Styled>
          <Controller>
            <Scene
              triggerHook="onLeave"
              duration="200%"
              pin
            >
              <Timeline
                wrapper={<div id="pinContainer" />}
              >
                <section className="panel blue"><span>

                  {/* the image should be on with height 2860px, width 1900px - it was the total size and the upper image size is 1900x624, and second image is 1900x2232 */}

        {/* <Row>
                    <Col span={24}>
                      <img src="assets/imgs/page/homepage1/g1.png" alt="shado books" style={{ height: '2860px', width: '1900px' }} />
                    </Col>
                  </Row>
                </span></section> */}

        {/* first slider */}

        {/* <Tween
                  from={{ x: '-100%' }}
                  to={{ x: '0%' }}
                >
                  <section className="panel turqoise"><span>
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
                          span: 8,
                          offset: 0,
                        }}
                        xxl={{
                          span: 8,
                          offset: 0,
                        }} >
                        <h4 className={styles.subhead5}>Consumables</h4>
                        <p className={styles.subhead6}>Consumables or consumable goods are non-durable goods ideal for immediate consumption. Common examples include day-to-day living products like food, clothing, water, or office supplies such as paper, Post-It Notes, file folders, and ink cartridges.</p>
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
                          span: 12,
                          offset: 1,
                        }}
                        xxl={{
                          span: 12,
                          offset: 1,
                        }} >
                        <img src="assets/imgs/page/homepage1/ww1.png" alt="shado books" />
                      </Col>
                    </Row>
                  </span></section>
                </Tween> */}

        {/* second slider */}



        {/* <Tween
                  from={{ x: '100%' }}
                  to={{ x: '0%' }}
                >
                  <section className="panel green"><span>
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
                          span: 12,
                          offset: 0,
                        }}
                        xxl={{
                          span: 12,
                          offset: 0,
                        }} >
                        <img src="assets/imgs/page/homepage1/ww2.png" alt="shado books" />
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
                          span: 8,
                          offset: 1,
                        }}
                        xxl={{
                          span: 8,
                          offset: 1,
                        }} >
                        <h4 className={styles.subhead2}>Predefined Kits</h4>
                        <p className={styles.subhead4}>There are three types of university degrees in France: Licence (L1, L2, L3) is an undergraduate degree awarded after a period of study lasting 6 semesters (3 years). Master's (M1, M2) is a graduate degree awarded after a period of study lasting 2 years</p>
                      </Col>
                    </Row>
                  </span></section>
                </Tween> */}



        {/* third slider */}

        {/* <Tween
                  from={{ y: '-100%' }}
                  to={{ y: '0%' }}
                >
                  <section className="panel bordeaux"><span>
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
                          span: 8,
                          offset: 0,
                        }}
                        xxl={{
                          span: 8,
                          offset: 0,
                        }} >
                        <h4 className={styles.subhead5}>Accessories</h4>
                        <p className={styles.subhead6}>Consumables or consumable goods are non-durable goods ideal for immediate consumption. Common examples include day-to-day living products like food, clothing, water, or office supplies such as paper, Post-It Notes, file folders, and ink cartridges.</p>
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
                          span: 12,
                          offset: 1,
                        }}
                        xxl={{
                          span: 12,
                          offset: 1,
                        }} >
                        <img src="assets/imgs/page/homepage1/ww3.png" alt="shado books" />
                      </Col>
                    </Row>
                  </span></section>
                </Tween>
              </Timeline>
            </Scene> */}
        {/* </Controller>
        </SectionWipes2Styled> */}


        {/* second container  heading*/}

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
            <h1 className={styles.para5} >Spend More Time on Our Modules</h1>
          </Col>
        </Row>







        {/* container 2 */}

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
              offset: 0,
            }} >
            <h1 className={styles.para7}>Our Dashboard</h1>
            </Col>
        </Row>

        <div className={styles.imgce}>
            <img src="assets/imgs/page/homepage1/zz.png" alt="shado books" />
            </div>


        
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

            <p className={styles.headings33}>By clicking the Company asset-Dashboard, you can check the Dashboard Assets Status. It displays the status of each stage of the package receipt and ingestion process. Total asset, licences, accessories, consumables, asset by state, asset categories, and actions done by in asset section comprise the asset dashboard.</p>

          </Col>




          {/* container 3 */}

          {/* content 1 */}


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
              <h1 className={styles.para6}>Sign Manager</h1>
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage4/zz1.png" alt="shado books" />
            </Col>
            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead9}>
                <li>➟ The ability to efficiently manage a company's sign programme while meeting performance criteria for quality, on-budget, and on-time delivery is the sign manager's responsibility.</li><br/>
                <li>➟ The Sign manager in our module can take several forms, including asset name, asset tag, type, check type, staff name, location, and sign document.</li>
              </ol>
              <br />
              {/* <Button danger> Learn More </Button> */}
            </Col>
          </Row>


          {/* content 2 */}


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
              <h1 className={styles.para6}>Maintenances</h1>
            </Col>
          </Row>

          <Row>

            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead10}>
                <li>➟ Asset maintenance is any action performed on assets in order to maintain their performance.</li><br />
                <li>➟ Shadobooks CRM has tools for tracking specific maintenance activities for an asset by date, person in charge of the maintenance, and future maintenance due date. </li><br />
                <li>➟ To access the Asset maintenance list, go to: Asset management ⇢ Maintenance.</li>
                </ol>
              <br />
              {/* <Button danger style={{ marginLeft: "400px" }}> Learn More </Button> */}
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage4/zz2.png" alt="shado books" />
            </Col>

          </Row>



          {/* content 3 */}


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
              <h1 className={styles.para6}>Audit</h1>
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage4/zz3.png" alt="shado books" />
            </Col>
            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead9}>
                <li>➟ Asset audits in Shadobooks CRM modules enables global auditors to colloborate to ensure compliance. </li><br />
                <li>➟ Bond between Employee, Location and assets are maintained in CRM to helps physical auditors to find asset availability.</li>
                </ol>
              <br />
              {/* <Button danger> Learn More </Button> */}
            </Col>
          </Row>


          {/* content 4 */}


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
              <h1 className={styles.para6}>Depreciations</h1>
            </Col>
          </Row>

          <Row>

            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead10}>
                <li>➟ CRM's depreciation module allows customers to define all parameters related to the various techniques they utilise. </li><br />
                <li>➟ Once established, it automates the calculation of depreciation for all assets with a single click.</li><br />
                <li>➟ You may no longer spend evenings reconciling many spread sheets during the annual return filing process.</li>
                 </ol>
              <br />
              {/* <Button danger style={{ marginLeft: "400px" }}> Learn More </Button> */}
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage4/zz4.png" alt="shado books" />
            </Col>

          </Row>



          {/* content 5 */}


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
              <h1 className={styles.para6}>Components</h1>
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage4/zz5.png" alt="shado books" />
            </Col>
            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead9}>
                <li>➟ A component asset is used to link asset data, which is then summarised in an aggregate asset.</li> <br />
                <li>➟ To add, delete, and access the component assets in shadobooks CRM, go to Asset management ⇢ Components ⇢ Add. </li><br />
                <li>➟ Then, in the component form, give a description of the required item.</li>
                </ol>
              <br />
              {/* <Button danger> Learn More </Button> */}
            </Col>
          </Row>


          {/* content 6 */}


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
              <h1 className={styles.para6}>Locations</h1>
            </Col>
          </Row>

          <Row>

            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead10}>
                <li>➟ Our location module provides a comprehensive Fixed Asset & Inventory Tracking solution, allowing customers to conduct thorough, cost-effective physical audits. </li> <br />
                <li>➟ Physical audits can be conducted using barcode labels connected to fixed assets and inventory items, as well as portable scanning equipment.</li>
                </ol>
              <br />
              {/* <Button danger style={{ marginLeft: "400px" }}> Learn More </Button> */}
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage4/zz6.png" alt="shado books" />
            </Col>

          </Row>



          {/* content 7 */}


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
              <h1 className={styles.para6}>Licences</h1>
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage4/zz7.png" alt="shado books" />
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead9}>
                <li>➟ Shadobooks CRM software is a consumer software that is typically licenced rather than purchased and sold. </li><br />
                <li>➟ It may necessitate a licence to be used by an organisation, on a specific computer, or based on other parameters such as the number of users. </li><br />
                <li>➟ To create licenses, go to Asset management ⇢ Licences ⇢ Add.</li>
                </ol>
              <br />
              {/* <Button danger> Learn More </Button> */}
            </Col>
          </Row>


          {/* content 8 */}


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
              <h1 className={styles.para6}>Requested</h1>
            </Col>
          </Row>

          <Row>

            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead10}>
                <li>➟ The various types of requests are related to Shadobooks CRM assets. For example, you may provide sanitizers, masks, and gloves to your employees. </li><br />
                <li>➟ A title and asset check-out details can be included in request types. </li><br />
                <li>➟ If an employee requests a new mask, the Asset is mask and the title is requesting an asset.</li><br /> 
                <li>➟ The request kinds can be added, updated, or deleted.</li>
                </ol>
              <br />
              {/* <Button danger style={{ marginLeft: "400px" }}> Learn More </Button> */}
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage4/zz8.png" alt="shado books" />
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
              <h1 className={styles.para6}>Consumables</h1>
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage1/ww1.png" alt="shado books" />
            </Col>
            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead9}>
                <li>➟ A consumable asset is one that is purchased in large quantities and distributed. </li> <br />
                <li>➟ The consumable asset may be established in shadobooks CRM by clicking the Company asset ⇢ Consumables ⇢ Add. </li> <br />
                <li>➟ When adding a consumable, make a note of the product, quantity, purchase cost, and vendor.</li>  <br />
                <li>➟ You may also add consumables in bulk using barcodes.</li>
                </ol>
              <br />
              {/* <Button danger> Learn More </Button> */}
            </Col>
          </Row>


          {/* content 2 */}


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
              <h1 className={styles.para6}>Predefined Kits</h1>
            </Col>
          </Row>

          <Row>

            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead10}>
                <li>➟ In Shadobooks CRM it is possible to manually add a predefined kit. </li> <br />
                <li>➟ To do this, click Asset management ⇢ Predefined kits ⇢ Add. </li> <br />
                <li>➟ Enter the name of the kit to start a new Predefined Kit. </li> <br />
                <li>➟ The list of predefined kits can be found on the predefined kit home page.</li>
                </ol>
              <br />
              {/* <Button danger style={{ marginLeft: "400px" }}> Learn More </Button> */}
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage1/ww2.png" alt="shado books" />
            </Col>

          </Row>



          {/* content 3 */}


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
              <h1 className={styles.para6}>Accessories</h1>
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage1/ww3.png" alt="shado books" />
            </Col>
            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead9}>
                <li>➟ Assets are used to help the smooth running of equipment or other fixed assets. </li> <br />
                <li>➟ Accessories have been assigned to another Asset. </li> <br />
                <li>➟ For example, a data card (Accessory) is allocated to a laptop (Fixed Asset). </li> <br />
                <li>➟ In our module, you can add accessories by selecting the Asset management ⇢ Accessories ⇢ Add button.</li>
                </ol>
              <br />
              {/* <Button danger> Learn More </Button> */}
            </Col>
          </Row>


          {/* content 2 */}


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
              <h1 className={styles.para6}>Assets</h1>
            </Col>
          </Row>

          <Row>

            <Col xs={{
              span: 20,
              offset: 3,
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
                span: 6,
                offset: 1,
              }}
              xxl={{
                span: 6,
                offset: 1,
              }} >
              <ol className={styles.subhead10}>
                <li>➟ Assets include both tangible and intangible items like as raw materials, inventory, machinery, and real estate. </li> <br />
                <li>➟ In Shadobooks CRM, go to Company assetàAssetàAdd an asset. </li> <br />
                <li>➟ Assets can be added, updated, and deleted. You may also add assets in bulk.</li>
                </ol>
              <br />
              {/* <Button danger style={{ marginLeft: "400px" }}> Learn More </Button> */}
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
                span: 14,
                offset: 1,
              }}
              xxl={{
                span: 14,
                offset: 1,
              }} >
              <img src="assets/imgs/page/homepage1/ff2.png" alt="shado books" />
            </Col>

          </Row>



          <div>
            <Contactmanager />
          </div>


      </Layout>
    </>
  );
}

export default companyassets;

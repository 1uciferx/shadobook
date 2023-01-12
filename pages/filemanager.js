/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { Col, Row } from "antd";
import { Breadcrumb, Layout as L } from 'antd';
import Contactmanager from "../components/contactmanager";
const { Content } = L;
import Link from "next/link";
import { useState, useEffect } from "react";
import Slide from 'react-reveal/Slide';
import styles from "../styles/Filemanager.module.css";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import Flip from 'react-reveal/Flip';
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Filemanager() {

  return (
    <>
      <Layout>

        {/* heading background image */}

        <div style={{
          backgroundImage: `url(/assets/imgs/page/homepage1/eer.jpg)`,
          backgroundSize: "cover",
          height: '400px'
        }}>


          {/* Breadcrumb code */}

          <Content className="site-layout" style={{ padding: "10px 10px" }}>
            <Breadcrumb style={{ margin: "16px 0", fontWeight: "bold" }}>
              <Breadcrumb>
                <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href=" /#" style={{ color: "white" }}>Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href=" #" style={{ color: "white" }}>File Manager</a>
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
              offset: 1,
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
              <Flip left cascade>
            <h1 className={styles.headings}> File Manager </h1>
            <p className={styles.para}>A file manager application can help you organize, store and transfer files on your mobile device</p>
            </Flip>
          </Col>

        </div>


        {/* container starts from here */}

        <Col xs={{
          span: 20,
          offset: 1,
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

          {/* heading for the total module */}
          <h1 className={styles.para5} >Our Modules on File Manager</h1>

          <Row>
            <Col xs={{
              span: 20,
              offset: 3,
            }}
              lg={{
                span: 10,
                offset: 0,
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
                offset: 0,
              }}
              xxl={{
                span: 6,
                offset: 0,
              }} >

              {/* sub heading for the container 1 */}
              <Slide left cascade>
              <h3 className={styles.subhead}>
                Manage Sharing
              </h3>
              </Slide>


              {/* contents for the sub heading 1 */}
              <Slide left cascade>
              <p className={styles.subhead2}>
              The shared file in shadobooks ERP may be accessed under the manage sharing tab. To view this, go to File manager-->Manage sharing--> Choose the staff name, staff type, status, password, and the from and to dates. According to the details provided in the form, a specified shared file will be shown on the manage sharing page.
              </p>
              </Slide>
            </Col>

            {/* image for the first container */}
            <Col xs={{
              span: 20,
              offset: 3,
            }}
              lg={{
                span: 12,
                offset: 1,
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
                offset: 0,
              }} >
                <Slide right>
              <img src="assets/imgs/page/homepage1/t2.png" alt="shado books" style={{ marginTop: '10%' }} />
              </Slide>
            </Col>
          </Row>
        </Col>



        <Col span={24} >

          <Row>

            {/* image for the even container */}
            <Col xs={{
              span: 20,
              offset: 2,
            }}
              lg={{
                span: 12,
                offset: 0,
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
                offset: 0,
              }}
              xxl={{
                span: 14,
                offset: 0,
              }} >
                <Slide left>
              <img src="assets/imgs/page/homepage1/t3.png" alt="shado books" style={{ marginTop: "10%" }} />
              </Slide>
            </Col>


            <Col xs={{
              span: 20,
              offset: 3,
            }}
              lg={{
                span: 8,
                offset: 0,
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

              {/* sub heading for the even container  */}

              <h3 className={styles.subhead8}>
                Manage Download
              </h3>

              {/* contents for the sub heading even */}


              <p className={styles.subhead9}>
              To view a particular downloaded file in shadobooks ERP, go to File manager-->Manage download-->Choose the staff name, hashshare and the from and to dates. Using the information provided in the form, you can view the specified downloaded files from the list of downloaded files in the manage download page.
              </p>
            </Col>

          </Row>
        </Col>



        <Row>
          <Col xs={{
            span: 20,
            offset: 2,
          }}
            lg={{
              span: 8,
              offset: 0,
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
              offset: 0,
            }}
            xxl={{
              span: 6,
              offset: 0,
            }} >

            {/* sub heading for the container odd */}

            <h3 className={styles.subhead11}>
              File Sharing Reports
            </h3>



            {/* contents for the sub heading odd */}

            <p className={styles.subhead2}>
            You can get a chart-based summary on the manage sharing and manage download files in shadobooks ERP. To get this, go to File manager--> File sharing reports-->Choose either the Manage Downloads or the Manage Sharing tab. Fill out the form with your information. You can now view it as a chart-based form.
            </p>
          </Col>

          {/* image for the odd container */}
          <Col xs={{
            span: 20,
            offset: 2,
          }}
            lg={{
              span: 12,
              offset: 0,
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
              <Slide right>
            <img src="assets/imgs/page/homepage1/t4.png" alt="shado books" style={{ marginTop: "10%" }} />
            </Slide>
          </Col>
        </Row>




        <Col span={24} >

          <Row>

            {/* image for the even container */}
            <Col xs={{
              span: 20,
              offset: 2,
            }}
              lg={{
                span: 12,
                offset: 0,
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
                offset: 0,
              }}
              xxl={{
                span: 14,
                offset: 0,
              }} >
                <Slide left>
              <img src="assets/imgs/page/homepage1/t1.png" alt="shado books" style={{ marginTop: "10%" }} />
              </Slide>
            </Col>


            <Col xs={{
              span: 20,
              offset: 3,
            }}
              lg={{
                span: 8,
                offset: 0,
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

              {/* sub heading for the even container  */}

              <h3 className={styles.subhead8}>
                File Manager
              </h3>




              {/* contents for the sub heading even */}

              <p className={styles.subhead9}>
                You can organize files obtained from many sources with Shadobooks ERP's File Manager. You can also make your own folders and place files in them. To ensure that only authorized people have access to a file, impose permission rules on a single folder or file.
              </p>
            </Col>

          </Row>
        </Col>






        <div>
          <Contactmanager />
        </div>

      </Layout>
    </>
  );
}

export default Filemanager;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Breadcrumb, Layout as L } from 'antd';
import styles from '../styles/Estimatesrequest.module.css'
const { Content } = L;
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import Contactmanager from "../components/contactmanager";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Estimatesrequest() {

  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  return (
    <>
      <Layout>

        <Row>
          <Col span={24}>

            {/* background  image had called from the style */}
            <div className={styles.bgimg} >



              {/* Breadcrumb code */}

              <Content className="site-layout" style={{ padding: "10px 10px" }}>
                <Breadcrumb style={{ margin: "16px 0", fontWeight: "bold" }}>
                  <Breadcrumb>
                    <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <a style={{ color: "white" }} href="/#">Features</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <a style={{ color: "white" }} href=" #">Estimate Request</a>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Breadcrumb>
              </Content>

              {/* heading or title which is located on the gif */}
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
                  span: 20,
                  offset: 2,
                }} >
                <h1 className={styles.headings}>Estimates Request</h1>
              </Col>

            </div>
          </Col>

        </Row>

        <Row>


          {/* side heading  */}

          <Col xs={{
            span: 20,
            offset: 2,
          }}
            lg={{
              span: 20,
              offset: 3,
            }}
            sm={{
              span: 12,
              offset: 1,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 20,
              offset: 3,
            }}
            xxl={{
              span: 20,
              offset: 3,
            }} >
            <h1 className={styles.para}>What is an estimate request?</h1>


          </Col>



          <Col xs={{
            span: 20,
            offset: 0,
          }}
            lg={{
              span: 16,
              offset: 0,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 16,
              offset: 0,
            }}
            xl={{
              span: 20,
              offset: 2,
            }}
            xxl={{
              span: 20,
              offset: 2,
            }} >
            <p className={styles.subhead}> The estimate request function in Shadobooks CRM allows you to develop forms that your customers can use to get a pricing estimate for services or items from your business. The estimates request feature allows you to add several types of fields that may be adapted to your company's needs.</p>


          </Col>
          {/* video play button */}


          {/* <Col push="3" span={20} >
            {" "} */}
          {/* <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}
          {/* <a href="http://www.vanakkammachi.xyz">
              {" "}
      
              <img src="assets/imgs/page/homepage1/play-button.png" alt="img" style={{ height: "32px", marginTop: '-70px', marginLeft: '180px' }} />
              
            </a>
          </Col> */}


          <Col xs={{
            span: 20,
            offset: 2,
          }}
            lg={{
              span: 20,
              offset: 3,
            }}
            sm={{
              span: 12,
              offset: 1,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 20,
              offset: 3,
            }}
            xxl={{
              span: 20,
              offset: 3,
            }} >
            <h1 className={styles.para}>Create estimate request form</h1>


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
              offset: 2,
            }}
            md={{
              span: 20,
              offset: 0,
            }}
            xl={{
              span: 16,
              offset: 4,
            }}
            xxl={{
              span: 16,
              offset: 4,
            }} >
            <img src="/assets/imgs/page/homepage1/qq1.png" alt="loading.." />
          </Col>






          <Col xs={{
            span: 20,
            offset: 0,
          }}
            lg={{
              span: 14,
              offset: 2,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 16,
              offset: 0,
            }}
            xl={{
              span: 16,
              offset: 2,
            }}
            xxl={{
              span: 16,
              offset: 0,
            }} >
            <ol className={styles.subhead}>
              <li>➟ The first step is to create an estimate request form; you may create an unlimited number of estimate request forms in Shadobooks CRM. </li><br />
              <li>➟ To do so, navigate to Setup ⇢ Estimate requestForms ⇢ New form. Fill out the form with your information and save it.</li>
            </ol>

          </Col>


          {/* Image code which is located on the right side which represents the dashboard of the estimate request */}
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
              offset: 2,
            }}
            md={{
              span: 16,
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

            <h1 className={styles.para5}>Set status to form</h1>
          </Col>



          <Col xs={{
            span: 20,
            offset: 0,
          }}
            lg={{
              span: 14,
              offset: 2,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 16,
              offset: 0,
            }}
            xl={{
              span: 16,
              offset: 2,
            }}
            xxl={{
              span: 16,
              offset: 0,
            }} >
            <p className={styles.subhead}>
              After successfully entering the Shadobooks CRM database, the estimate request must be in status.
              To change a form's state, navigate to Setup-Estimate request ⇢ Statuses ⇢ New status.
              Save the status by entering its name and colour.
            </p>

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
              offset: 2,
            }}
            md={{
              span: 16,
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

            <h1 className={styles.para5}>Estimate request Report:</h1>
          </Col>

          <Col xs={{
            span: 20,
            offset: 2,
          }}
            lg={{
              span: 18,
              offset: 2,
            }}
            sm={{
              span: 20,
              offset: 2,
            }}
            md={{
              span: 16,
              offset: 2,
            }}
            xl={{
              span: 20,
              offset: 0,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }}



            className={styles.moduleimg}>


          </Col>
        </Row>

        <Col xs={{
          span: 20,
          offset: 0,
        }}
          lg={{
            span: 14,
            offset: 2,
          }}
          sm={{
            span: 20,
            offset: 1,
          }}
          md={{
            span: 16,
            offset: 0,
          }}
          xl={{
            span: 16,
            offset: 2,
          }}
          xxl={{
            span: 16,
            offset: 0,
          }} >
          <ol className={styles.subhead}>
            <li>➟ Estimate request reports are used to track estimate forms and provide an overview of all estimate’s forms created in a specific time period. </li><br />
            <li>➟ The way to get the overall Estimate request reports by, go to Addon management-Estimate request. </li><br />
            <li>➟ On the estimate request page, you may find a list of forms.</li>
          </ol>
        </Col>


        <div >
          <Contactmanager />
        </div>
      </Layout>
    </>
  );
}

export default Estimatesrequest;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { Breadcrumb, Layout as L } from 'antd';
const { Content } = L;
import { Col, Row } from "antd";
import styles from "../styles/Webhooks.module.css";
import { Affix, Button } from 'antd';
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Contactmanager from "../components/contactmanager";
import Fade from 'react-reveal/Fade';
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});





function Fixed() {


  // affix button const file

  const [top, setTop] = useState(45);

  return (
    <>
      <Layout>


        {/* hero image */}

        <div style={{
          backgroundImage: `url(/assets/imgs/page/homepage1/sd6.jpg)`,
          backgroundSize: "cover",
          height: 'auto',
          width: '100%'
        }}>





          {/* Breadcrumb code */}

          <Content className="site-layout" style={{ padding: "10px 10px" }}>
            <Breadcrumb style={{ margin: "16px 0", fontWeight: " " }}>
              <Breadcrumb>
                <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="/#">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="#">Webhooks</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>



          {/* headings code */}

          
            <Col
              xs={{
                span: 24,
                offset: 1,
              }}
              lg={{
                span: 24,
                offset: 0,
              }}
              sm={{
                span: 20,
                offset: 2,
              }}
              md={{
                span: 24,
                offset: 1,
              }}
              xl={{
                span: 24,
                offset: 1,
              }}
              xxl={{
                span: 24,
                offset: 1,
              }}

            >
              {/* fade effect added */}

              <h1 className={styles.headings}>
                Web Hooks
              </h1>

              <p className={styles.para}>
                Shadobooks CRM offers webhooks services that will allow HTTP requests for connecting web APIs and services with a subscribe or publish model.
              </p>

            </Col>

         
        </div>




        {/* affix button codings */}

        <Col xs={{
          span: 24,
          offset: 6,
        }}
          lg={{
            span: 24,
            offset: 9,
          }}
          sm={{
            span: 24,
            offset: 7,
          }}
          md={{
            span: 24,
            offset: 2,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 1,
          }} >

          <Affix offsetTop={top}>
            <Button style={{ color: 'black', width: '200px', marginLeft: '50px', marginTop: '30px' }}  >
              Web Hooks
            </Button>
          </Affix>

        </Col>


        {/* content page 1 */}

        <p className={styles.subhead}>What are Web Hooks ? </p>
        <Row>
          <Col xs={{
            span: 30,
            offset: 1,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 10,
              offset: 0,
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
              span: 10,
              offset: 0,
            }} >

            {/* first container contents */}
            <p className={styles.subhead2}>Shadobooks CRM supports multiple action hooks across the code to provide the greatest experience for buyers. Webhooks are a helpful tool for businesses that want to execute code in response to a particular event. Webhooks are most commonly used by web application platforms. The goal is that vendors will find it simple to integrate.</p>
          </Col>

          <Col xs={{
            span: 24,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 10,
              offset: 2,
            }}
            md={{
              span: 10,
              offset: 2,
            }}
            xl={{
              span: 10,
              offset: 3,
            }}
            xxl={{
              span: 10,
              offset: 2,
            }} >

            {/* first container image */}

            <img src="assets/imgs/page/homepage1/az1.png" />
          </Col>
        </Row>

        {/* end of the first container */}



        {/* affix button codings */}



        <Col xs={{
          span: 24,
          offset: 6,
        }}
          lg={{
            span: 24,
            offset: 9,
          }}
          sm={{
            span: 24,
            offset: 7,
          }}
          md={{
            span: 24,
            offset: 2,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }} >

          <Affix offsetTop={top}>
            <Button style={{ color: 'black', width: '200px', marginLeft: '50px', marginTop: '30px' }}  >
              New Webhook
            </Button>
          </Affix>

        </Col>



        {/* content page 2 */}

        <p className={styles.subhead}>How to Create a New Webhook ?</p>
        <Row>

          <Col xs={{
            span: 30,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 10,
              offset: 0,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }} >

            {/* second container image */}

            <img src="assets/imgs/page/homepage1/az2.png" />
          </Col>


          <Col xs={{
            span: 30,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 10,
              offset: 0,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 2,
            }} >

            {/* second container contents */}

            <p className={styles.subhead3}>
              To create a new webhook in Shadobooks CRM,<br /><br />

              <li>Go to General Section - Webhooks - Webhooks to establish a new webhook.</li>
              <li>On the Webhooks page, click the New Webhook button.</li>
              <li>Fill out all of the required parameters on the New Webhook page.</li>
              <li>Click Save.</li>



            </p>
          </Col>


        </Row>


        {/* end of the second container */}


        {/* affix button codings */}


        <Col xs={{
          span: 24,
          offset: 6,
        }}
          lg={{
            span: 24,
            offset: 9,
          }}
          sm={{
            span: 24,
            offset: 7,
          }}
          md={{
            span: 24,
            offset: 2,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 1,
          }} >

          <Affix offsetTop={top}>
            <Button style={{ color: 'black', width: '200px', marginLeft: '50px', marginTop: '30px' }} >
              Log History
            </Button>
          </Affix>

        </Col>

        {/* content page 3 */}

        <p className={styles.subhead}>What is Log History ?</p>
        <Row>
          <Col xs={{
            span: 30,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 10,
              offset: 0,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 8,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }} >

            {/* third container contents */}
            <p className={styles.subhead5}>
              Using the webhook logs, you can keep track of all activity in Shadobooks CRM. Webhook logs provide a record of every webhook attempt made by our system, as well as information on the call's success or failure. Webhooks can be enabled or disabled in the developer options.
            </p>
          </Col>

          <Col xs={{
            span: 30,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 0,
            }}
            sm={{
              span: 10,
              offset: 2,
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
              span: 10,
              offset: 2,
            }} >

            {/* third container image */}

            <img src="assets/imgs/page/homepage1/az3.png" />
          </Col>
        </Row>

        {/* end of the third container */}



        <div>
          <Contactmanager />
        </div>

      </Layout>
    </>
  );
}

export default Fixed;

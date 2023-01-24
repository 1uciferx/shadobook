/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import {
  ParallaxBanner,
  ParallaxProvider,
  ParallaxBannerLayer,
  useParallax,
} from "react-scroll-parallax";
import { Col, Row } from "antd";
import styles from "../styles/Utilities.module.css";
import useScrollSpinner from "@dan-pugsley/react-scroll-spinner";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import Contactmanager from "../components/contactmanager";

function Utilities() {
  const { spinnerRef, setSpinnerScroll } = useScrollSpinner({
    speed: 0.6,
    friction: 0.00023,
    maxAngularVelocity: 0.0135,
  });
  return (
    <>
      <Layout>
        <ParallaxProvider>
          <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
            <ParallaxBannerLayer
              image="assets/imgs/page/homepage4/ban8.jpg"
              speed={-20}
            />
            <ParallaxBannerLayer>
              <Zoom top>

                <h1 className={styles.headings}>Utilities</h1>

                <Col
                  xs={{
                    span: 22,
                    offset: 1,
                  }}
                  lg={{
                    span: 22,
                    offset: 2,
                  }}
                  md={{
                    span: 22,
                    offset: 0
                  }}
                  sm={{
                    span: 22,
                    offset: 1,
                  }}
                  xl={{
                    span: 22,
                    offset: 1,
                  }}
                  xxl={{
                    span: 24,
                    offset: 0,
                  }}
                >
                  <p className={styles.parahead}>
                  Utilities in CRM refer to the various tools and functions that help to make the customer relationship management process more efficient.
                  </p>
                </Col>
              </Zoom>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>

        {/* contents */}

        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Media</h1>
          </Fade>
        </Col>

        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 8,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 24,
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
            <LightSpeed right>
              <p className={styles.para}>
              In Shadobook ERP, go to Utilities ➡ Click Media, and then the shown window appears. Here we have the options to create the new folder, upload files using the upload icon, download the files by clicking the download icon, etc.
              </p>
            </LightSpeed>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 1,
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
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 2,
            }}
          >
            <Fade left>
              <img
                alt="Agon"
                src="assets/imgs/page/about/9/Media.png"
                className={styles.conimg}
              />
            </Fade>
          </Col>
        </Row>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 2,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Bulk PDF Export</h1>
          </Fade>
        </Col>

        <Row>
          <Col
            xs={{
              span: 22,
              offset: 1,
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
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <Fade right>
              <img
                alt="Agon"
                src="assets/imgs/page/about/9/BPE.png"
                className={styles.conimg}
              />
            </Fade>
          </Col>

          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 9,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 24,
              offset: 1,
            }}
            xl={{
              span: 9,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <LightSpeed left>
              <p className={styles.para2}>
              In this window, we have the option to export the bulk PDF. To get this window, click the utilities module, then select bulk PDF export. Here we can select any one of the types, such as invoices, estimates, receipts, credit notes, proposals, and expenses. After selecting the from and to dates, the payment method, and finally clicking the submit button, the selected files are exported in bulk to our shadobook ERP.
              </p>
            </LightSpeed>
          </Col>
        </Row>


        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>CSV Export</h1>
          </Fade>
        </Col>

        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 8,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 24,
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
            <LightSpeed right>
              <p className={styles.para}>
              In Shadobook ERP, we have the CSV export option. To access this option, navigate to the utilities module and then click the CSV export button. In that window, select export types such as customers, contacts, leads, expenses, receipts, and periods, then click the export button. The csv file has been downloaded.
              </p>
            </LightSpeed>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 1,
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
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 2,
            }}
          >
            <Fade left>
              <img
                alt="Agon"
                src="assets/imgs/page/about/9/CSV.png"
                className={styles.conimg}
              />
            </Fade>
          </Col>
        </Row>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 2,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Calender</h1>
          </Fade>
        </Col>

        <Row>
          <Col
            xs={{
              span: 22,
              offset: 1,
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
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <Fade right>
              <img
                alt="Agon"
                src="assets/imgs/page/about/9/Calender.png"
                className={styles.conimg}
              />
            </Fade>
          </Col>

          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 9,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 24,
              offset: 1,
            }}
            xl={{
              span: 9,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <LightSpeed left>
              <p className={styles.para2}>
              This calendar page shows newly created and upcoming events from the queues for sales, purchases,estimate and so on. To get this window, go to Utilities and then click the calendar option. Now we can see tasks and events in shadobook ERP.
              </p>
            </LightSpeed>
          </Col>
        </Row>


        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Announcements</h1>
          </Fade>
        </Col>

        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 8,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 24,
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
            <LightSpeed right>
              <p className={styles.para}>
              To check the list of announcements, go to the Utilities module and click "announcements." Here we can see the list of announcements and also have the option to create a new announcement by clicking the "New Tab." Here, enter the subject and message fields and click the "Save" button. Now the announcement is listed in our Shadobook ERP.
              </p>
            </LightSpeed>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 1,
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
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 2,
            }}
          >
            <Fade left>
              <img
                alt="Agon"
                src="assets/imgs/page/about/9/Anouncements.png"
                className={styles.conimg}
              />
            </Fade>
          </Col>
        </Row>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 2,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Goals</h1>
          </Fade>
        </Col>

        <Row>
          <Col
            xs={{
              span: 22,
              offset: 1,
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
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <Fade right>
              <img
                alt="Agon"
                src="assets/imgs/page/about/9/Goals.png"
                className={styles.conimg}
              />
            </Fade>
          </Col>

          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 9,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 24,
              offset: 1,
            }}
            xl={{
              span: 9,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <LightSpeed left>
              <p className={styles.para2}>
              We can create goals and also view the goals that have already been set. To add a new goal, navigate to the utilities module and click the goal option there. We can then add the new goal by clicking the "new goal" tab here. enter all details such as subject, staff member, achievements, start date, end date, goal type, and then click the save button. Now the list of goals appears in our shadobook ERP.
              </p>
            </LightSpeed>
          </Col>
        </Row>



        <Col
          xs={{
            span: 23,
            offset: 1,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 0,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Activity Log</h1>
          </Fade>
        </Col>

        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 8,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 2,
            }}
            sm={{
              span: 24,
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
            <LightSpeed right>
              <p className={styles.para}>
              To check all the activities, go to the Utilities module and select Activity Log. Here we have the option to filter the activities by date in shadobook ERP.
              </p>
            </LightSpeed>
          </Col>

          <Col
            xs={{
              span: 22,
              offset: 1,
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
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 2,
            }}
          >
            <Fade left>
              <img
                alt="Agon"
                src="assets/imgs/page/about/9/AL.png"
                className={styles.conimg}
              />
            </Fade>
          </Col>
        </Row>

        <Col
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 22,
            offset: 0,
          }}
          sm={{
            span: 24,
            offset: 1,
          }}
          xl={{
            span: 24,
            offset: 1,
          }}
          xxl={{
            span: 24,
            offset: 2,
          }}
        >
          <Fade>
            <h1 className={styles.headings2}>Ticket Pipe Log</h1>
          </Fade>
        </Col>

        <Row>
          <Col
            xs={{
              span: 22,
              offset: 1,
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
              span: 22,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <Fade right>
              <img
                alt="Agon"
                src="assets/imgs/page/about/9/TPL.png"
                className={styles.conimg}
              />
            </Fade>
          </Col>

          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 9,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 24,
              offset: 1,
            }}
            xl={{
              span: 9,
              offset: 1,
            }}
            xxl={{
              span: 10,
              offset: 0,
            }}
          >
            <LightSpeed left>
              <p className={styles.para2}>
              To check the inquiries, complaints, etc., we use this ticket pipe log option. Select the option ticket pipe log from the utilities module.Here we can see all the data in the form of a list and also have the option to filter by date in Shadobook ERP.
              </p>
            </LightSpeed>
          </Col>
        </Row>



      
        <div>
          <Contactmanager/>
        </div>




        

      </Layout>
    </>
  );
}

export default Utilities;

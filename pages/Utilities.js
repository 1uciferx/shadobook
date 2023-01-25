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
              offset: 2,
            }}
          >
            <LightSpeed right>
              <ol className={styles.para}>
              <li>➟ In the media window, you have the options to:</li><br/>
              <li>➟ Create a new folder.</li><br/>
              <li>➟ Upload files using the upload icon</li><br/>
              <li>➟ Download files by clicking the download icon, etc.</li>

              </ol>
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
              offset: 1,
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
              <ol className={styles.para2}>
              <li>➟ You can select one of the types, such as invoices, estimates, receipts, credit notes, proposals, and expenses.</li><br/>
              <li>➟ After selecting the from and to dates, the payment method, and clicking the submit button, the selected files will be exported in bulk to Shadobook ERP.</li>

              </ol>
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
              <ol className={styles.para}>
              <li>➟ In Shadobook ERP, we have the option to export data in CSV format by navigating to the Utilities
module and clicking on CSV export button.</li><br/>
              <li>➟ In that window, you can select export types such as customers, contacts, leads, expenses, receipts, and periods.</li><br/>
              <li>➟ After selecting the options, click the export button, it will download the CSV file of exported data</li>

              </ol>
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
              <ol className={styles.para2}>
              <li>➟ This calendar page shows newly created and upcoming events from the queues for sales, purchases, estimate, etc.</li><br/>
              <li>➟ To access this window, go to Utilities and click on the calendar option.</li><br/>
              <li>➟ Now you can see tasks and events in Shadobook ERP.</li>

              </ol>
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
              <ol className={styles.para}>
              <li>➟ To check the list of announcements, go to the Utilities module and click "Announcements."</li><br/>
              <li>➟ On this page, you can see the list of existing announcements and also have the option to create a new announcement by clicking the "New Tab."</li><br/>
              <li>➟ To create a new announcement, enter the subject and message fields and click the "Save" button.</li><br/>
              <li>➟ Now, the announcement is listed in Shadobook ERP.</li>

              </ol>
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
              <ol className={styles.para2}>
              <li>➟ In Shadobook ERP, it is possible to create and view goals.</li><br/>
              <li>➟ To add a new goal, navigate to the Utilities module and click on the Goal option.</li><br/>
              <li>➟ Click on the "New Goal" tab to add a new goal.</li><br/>
              <li>➟ Enter all details such as subject, staff member, achievements, start date, end date, goal type.</li><br/>
              <li>➟ Click the Save button to save the goal.</li><br/>
              <li>➟ The list of goals will appear in Shadobook ERP.</li>

              </ol>
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
              <ol className={styles.para}>
              <li>➟ To check all the activities in Shadobook ERP, go to the Utilities module and select Activity Log</li><br/>
              <li>➟ On this page, there is an option to filter the activities by date.</li>

              </ol>
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
              <ol className={styles.para2}>
              <li>➟ To check the inquiries, complaints, etc. in Shadobook ERP, go to the Utilities module and select the Ticket Pipe Log option.</li><br/>
              <li>➟ On this page, you can see all the data in the form of a list and also have the option to filter by date.</li>

              </ol>
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

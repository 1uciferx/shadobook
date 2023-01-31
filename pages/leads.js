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
        <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/single/task1.jpg)",
            }}
          >
            <div className="container">
              <div className="text-center">
                <h1 className="text-display-2 color-white mt-30">Tasks</h1>
                <p className="text-body-lead-large color-white mt-40 pr-40">
                "Achieve more - with less effort"
                </p>
              </div>
            </div>
          </div>
        </section>

  

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 20,
            offset: 2,
          }}
          sm={{
            span: 24,
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
            <ul className={styles.paracon}>
              <li>
                • The task summary in Shadobook ERP can be accessed by going to
                the task module.
              </li>
              <br></br>
              <li>
                The task summary page displays a list of tasks with the
                following details:
              </li>
              <br></br>
              <li>• Task name</li>
              <br></br>
              <li>• Status (Not Started, In Progress, Completed, etc)</li>
              <br></br>
              <li>• Start date</li>
              <br></br>
              <li>• Due date</li>
              <br></br>
              <li>• Assignee(s)</li>
              <br></br>
              <li>• Priority level</li>
              <br></br>
              <li>
                • The task summary page allows you to view and manage all the
                tasks in one place.
              </li>
              <br></br>
              <li>
                • You can filter and sort the task list by task name, status,
                start date, due date, assignee and priority level
              </li>
              <br></br>
              <li>
                • The task summary page allows you to track the progress of
                tasks, and manage the workflow effectively
              </li>
              <br></br>
              <li>
                • The task summary page can be used to manage the tasks, and
                track progress and performance of your team.
              </li>
            </ul>
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
            span: 20,
            offset: 2,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 20,
            offset: 2,
          }}
          sm={{
            span: 24,
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
            <ul className={styles.paracon}>
              <li>
                • To add a new task in Shadobook ERP, click the "Add New" tab.
              </li>
              <br></br>
              <li>
                • Enter the task details such as subject, start date, due date,
                priority, assignees, etc.
              </li>
              <br></br>
              <li>• Click the "Save" button to create the task.</li>
              <br></br>
              <li>• The new task will appear in the task summary page.</li>
              <br></br>
              <li>
                • Tasks can be assigned to specific team members, and given a
                priority level
              </li>
              <br></br>
              <li>
                • Tasks can have a start date and a due date, for planning and
                tracking purposes.
              </li>
            </ul>
          </div>
        </Col>

        <Row>
          <Col
            xs={{
              span: 24,
              offset: 0,
            }}
            lg={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 17,
              offset: 1,
            }}
            xl={{
              span: 20,
              offset: 2,
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
            <ul className={styles.para}>
              <li>
                • Switching to Kanban view on a task management page displays
                tasks in columns of "not started," "in progress," "tested,"
                "awaiting feedback," and "completed."
              </li>
              <br></br>
              <li>
                • Kanban is a method for visualizing and managing the flow of
                work.
              </li>
              <br></br>
              <li>
                • Kanban boards can be used to manage a variety of tasks, from
                software development to manufacturing.
              </li>
              <br></br>
              <li>
                • Kanban boards can be used to help teams identify bottlenecks
                in their process, prioritize work, and improve workflow.
              </li>
              <br></br>
              <li>
                • Clicking the switch to Kanban icon again will switch back to
                the previous view.
              </li>
            </ul>
          </Col>
        </Row>

        <Slide left cascade>
          <h2 className={styles.headings2}> Tasks Overview</h2>
        </Slide>

        <Zoom>
          <div className={styles.happy}>
          <div className={styles.imgcenter}>
            <img
              src="assets/imgs/page/about/10/TO.png"
              alt="Agon"
              className={styles.conimg}
            />
          </div>
          </div>
        </Zoom>

        <Col
          xs={{
            span: 20,
            offset: 2,
          }}
          lg={{
            span: 24,
            offset: 0,
          }}
          md={{
            span: 20,
            offset: 2,
          }}
          sm={{
            span: 24,
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
            <ul className={styles.paracon}>
              <li>
                • In the Shadobook ERP task module, the task overview page
                displays a list of all added task lists.
              </li>
              <br></br>
              <li>
                The task overview page allows you to filter task lists by:
              </li>
              <br></br>
              <li>• Staff members</li>
              <br></br>
              <li>• Month</li>
              <br></br>
              <li>• Year</li>
              <br></br>
              <li>
                • This makes it easy to view and manage tasks assigned to
                specific staff members, or tasks due in a specific month or
                year.
              </li>
              <br></br>
              <li>
                • The filter option helps to get a clear view of the task list,
                and makes it easier to manage and track progress.
              </li>
              <br></br>
              <li>
                • The task overview page allows you to see the progress of all
                the tasks and manage them effectively.
              </li>
              <br></br>
              <li>
                • By using filter options you can see the task status, and
                monitor the performance of your team members.
              </li>
              <br></br>
              <li>
                • It can be used to manage the tasks and track progress and
                performance of your team.
              </li>
            </ul>
          </div>
        </Col>

        <div className={styles.imgcon}>
          <Zoom>
            <p className={styles.subhead4}>
            In Shadobook ERP, the lead page is shown when you click the lead module. Here we have the options to add a new lead, import a lead, filter options, and also the list form of generated leads.
            </p>
          </Zoom>
        </div>

        {/* addnewlead */}

        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 10,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 17,
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
            <Flip cascade>
              <p className={styles.para}>Add New Lead</p>
            </Flip>
            <Zoom>
              <ol className={styles.subhead}>
              <li>➟ In this add new lead window, you need to select the details such as status, source, and assigned.</li><br/>
              <li>➟ You need to enter the field name such as name, address, position, city, email address, state, company, etc.</li><br/>
              <li>➟ Click the save button to add the new task.</li>

              </ol>
            </Zoom>
          </Col>

          {/* image addnewlead */}

          <Col
            xs={{
              span: 24,
              offset: 0,
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
              span: 17,
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
            <Zoom>
              <img
                src="assets/imgs/page/about/11/AL.png"
                className={styles.conimg}
              />
            </Zoom>
          </Col>
        </Row>

        {/* importleads */}
        <Row>
          <Col
            xs={{
              span: 23,
              offset: 1,
            }}
            lg={{
              span: 10,
              offset: 0,
            }}
            md={{
              span: 22,
              offset: 0,
            }}
            sm={{
              span: 17,
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
            <Flip cascade>
              <p className={styles.para}>Import Leads</p>
            </Flip>
            <Zoom>
              <ol className={styles.subhead}>
              <li>➟ In Shadobook ERP, when you click the import lead button, the import page will open.</li><br/>
              <li>➟ To import lead, select the csv file, status, source, responsible.</li><br/>
              <li>➟ Click the import button or simulate import button to import the selected file.</li>

              </ol>
            </Zoom>
          </Col>

          {/* image importleads */}

          <Col
            xs={{
              span: 24,
              offset: 0,
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
              span: 17,
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
            <Zoom>
              <img
                src="assets/imgs/page/about/11/IL.png"
                className={styles.conimg}
              />
            </Zoom>
          </Col>
        </Row>
        <div>
          <Contactmanager />
        </div>
      </Layout>
    </>
  );
}

export default Task;

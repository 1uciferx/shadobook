/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/layout/Layout";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { Helmet } from 'react-helmet';
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import Contactmanager from "../components/contactmanager";

import { Button, Space } from "antd";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";
import { Breadcrumb, Layout as L } from "antd";
const { Content } = L;
import Head from "next/head";

function Task() {
  return (
    <>
      <Head>
        <title>Task Management Software for Effective Teams | Shadobooks ERP</title>
        <meta
          name="description"
          content="Task Management Software, automates task and operation management in industry, assigning tasks and generating confirmation on completion."
        />
         <meta name="keywords" content="Task Management Software"/>
      </Head>

 {/* facebook and twitter meta graphs starts here */}
 <Helmet>
        <meta property="og:title" content="Shadobooks ERP" />
        <meta property="og:description" content="Shadobooks erp solutions." />
        <meta property="og:image" content="/assets/imgs/page/homepage1/sb-logo.png" />
        <meta property="og:url" content="https://www.facebook.com/shadobookscrm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadobooks ERP" />
        <meta name="twitter:description" content="Shadobooks erp solutions." />
        <meta name="twitter:image" content="/assets/imgs/page/homepage1/sb-logo.png" />
      </Helmet>

      {/* facebook and twitter meta graphs ends here */}

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
                <h1 className="text-display-2 color-white mt-30">Task Management Software for Effective Teams </h1>
                <p className="text-body-lead-large color-white mt-40 pr-40">
                  In ShadoBooks ERP, tasks are a feature that enables users to
                  organize and track follow-up activities by creating and
                  managing to-do items. Tasks can be assigned to team members,
                  prioritized with due dates, and monitored for progress with
                  reminders and completion status tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mt-90">
          <div className="row">
            <div className="col-lg-12 col-sm-12 pr-30">
              <Slide left cascade>
                <h2 className="text-heading-2">Tasks Summary</h2>
              </Slide>
              <div className="card-grid-style-3">
                <div className="grid-4-img">
                  {/* <Link href="#"> 
                  <a>  */}
                  <img src="assets/imgs/page/about/10/TS.png" alt="Task Management Software" />
                  {/* </a>

                 </Link> */}
                </div>
              </div>
              <p className="text-body-text color-gray-800 mt-20">
                <p />➟ The task summary in Shadobook ERP can be accessed by
                going to the task module.
                <br></br>
                <br></br>
                The task summary page displays a list of tasks with the
                following details:
                <br />
                <br />
                ➟ Task name, Status (Not Started, In Progress, Completed, etc),
                Start date, Due date, Assignee(s), Priority level tab.
                <br />
                <br />
                ➟ The task summary page allows you to view and manage all the tasks in one place including<span><a href="/best-hrms-software"> HR management</a></span> task. 
                <br />
                <br />➟ You can filter and sort the task list by task name,
                status, start date, due date, assignee and priority level.
                <br />
                <br />
                ➟ The task summary page allows you to track the progress of
                tasks, and manage the workflow effectively.
                <br />
                <br />➟ The task summary page can be used to manage the tasks,
                and track progress and performance of your team.
              </p>
            </div>
          </div>
        </div>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <Slide left cascade>
                <h2 className="text-heading-2">Add new task</h2>
              </Slide>
              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/10/TS.png"
                      alt="Task Management Software"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ To add a new task in Shadobook ERP, click the "Add New"
                    tab.
                    <br />
                    <br />
                    ➟ Enter the task details such as subject, start date, due
                    date, priority, assignees, etc.
                    <br />
                    <br />
                    ➟ Click the "Save" button to create the task.
                    <br />
                    <br />
                    ➟ The new task will appear in the task summary page.
                    <br />
                    <br />
                    ➟ Tasks can be assigned to specific team members, and given
                    a priority level.
                    <br />
                    <br />➟ Tasks can have a start date and a due date, for
                    planning and tracking purposes.
                  </p>
                  <p />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <div className="card-grid-style-3">
                  <img src="assets/imgs/page/about/10/STK.png" alt="Task Management Software" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-2 " style={{ color: "#90331c" }}>
                  Switch to Kanban
                </h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Switching to Kanban view on a task management page
                      displays tasks in columns of "not started," "in progress,"
                      "tested," "awaiting feedback," and "completed."
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Kanban is a method for visualizing and managing the flow
                      of work, Kanban boards can be used to manage a variety of
                      tasks, from software development to manufacturing.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Kanban boards can be used to help teams identify
                      bottlenecks in their process, prioritize work, and improve
                      workflow.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Clicking the switch to Kanban icon again will switch back
                      to the previous view.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-box mt-50 mb-50">
          <div className="container">
            <div className="row">
              <Slide left cascade>
                <h2 className="text-heading-2"> Tasks Overview</h2>
              </Slide>
              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="single-detail mt-50">
                  <div className="card-grid-style-3">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/about/10/TO.png"
                      alt="Task Management Software"
                    />
                  </div>
                  <p />

                  <p>
                    ➟ In the Shadobook ERP task module, the task overview page
                    displays a list of all added task lists.
                    <br />
                    <br />
                    The task overview page allows you to filter task lists by:
                    <br />
                    <br />
                    ➟ Staff members, Month, Year and<span><a href="/hr-and-payroll-software"> Payroll </a></span>
                    <br />
                    <br />
                    ➟ This makes it easy to view and manage tasks assigned to
                    specific staff members, or tasks due in a specific month or
                    year.
                    <br />
                    <br />
                    ➟ The filter option helps to get a clear view of the task
                    list, and makes it easier to manage and track progress.
                    <br />
                    <br />➟ The task overview page allows you to see the
                    progress of all the tasks and manage them effectively.
                    <br />
                    <br />
                    ➟ By using filter options you can see the task status, and
                    monitor the performance of your team members.
                    <br />
                    <br />➟ It can be used to manage the tasks and track
                    progress and performance of your team.
                  </p>
                  <p />
                  <br />
                  <br />

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.modslider}>
          <div className="mt-50">
            <Indexslider />
            <div className="text-center">
              <Link href="/our-product">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    padding: "10px",
                    marginTop: "-15px",
                    marginBottom: "30px",
                  }}
                >
                  Show More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Contactmanager />
        </div>
      </Layout>
    </>
  );
}

export default Task;

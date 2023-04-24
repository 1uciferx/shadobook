import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import dynamic from "next/dynamic";
import Hr2 from "../components/slider/Hr2";
import styles from "../styles/Hrrecords.module.css";
import Newslider from "../components/newslider";
import Contactmanager from "../components/contactmanager";
import Hrrecordsslider from "../components/slider/hrrecordsslider";
import Head from "next/head";
import { Helmet } from 'react-helmet';
import { Col, Row } from "antd";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});
function Index6() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>

      <Head>
        <title>Best HRMS Software | Shadobooks ERP </title>
        <meta
          name="description"
          content="Shadobooks ERP offers best HRMS software to help businesses manage their HR and achieve their objectives. Our HR software simplifies HR operations."
        />
        <meta name="keywords" content="Best hrms Software"/>
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
        <div className="section-box">
          <div className="banner-hero banner-homepage6">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-50 pb-120">
                  <h1 className="text-display-2 mt-20">Best HRMS Software</h1>
                  <p className="text-body-lead-large color-gray-500 mt-30 pr-40">
                    Manage all your human resources and other related documents
                    in a centralized database with the HR Records section of the
                    Shadobooks CRM.
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1">
                      <img
                        src="/assets/imgs/page/homepage6/line-chart.svg"
                        alt="Best hrms Software"
                      />
                    </div>
                    <div className="block-2 shape-3">
                      <img
                        src="/assets/imgs/page/homepage6/card.png"
                        alt="Best hrms Software"
                      />
                    </div>
                    <img
                      className="img-banner img-responsive shape-2"
                      alt="Best hrms Software"
                      src="assets/imgs/page/homepage6/banner.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box box-slider-3 d-none d-lg-flex">
          <div className="container">
            <div className="block-slider-bottom-banner">
              <Hr2 />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content">
            <div className="bg-2 panel-box mt-10">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Dashboard</h3>
                    <p className="text-body-excerpt mt-30">
                      <ol>
                        <li>
                          ➟ HR dashboards in Shadobooks CRM are critical tools
                          for analysing, visualising, and making decisions that
                          have a beneficial impact on your organisation due to
                          exact information.{" "}
                        </li>
                        <br />
                        <li>
                          ➟ This allows HR departments to quickly
                          uncover-insights that can improve recruiting, optimize
                          workplace management, and boost employee performance.
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video ">
                    <img
                      className="img-responsive"
                      src="assets/imgs/page/homepage4/ss1.png"
                      alt="dashboard"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-sm-12 mb-30">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/homepage1/fd1.jpg"
                  alt="Best hrms Software"
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-1 mt-20">Benefits & Uses</h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  The shadobooks HR dashboard provides various benefits,
                  including:
                </p>
                <div className="row mt-20">
                  <div className="col-lg-6 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">
                      Help managers to identify, plan and implement the staff
                      training programs.
                    </h4>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">
                      Aids in decision-making on transfers, promotions,
                      demotions, and redeployment.
                    </h4>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-12 mt-20">
                    <h4 className="text-heading-6 icon-leaf">
                      Allows governmental entities to get information on accidents, absenteeism, labour turnover, wages, and<span><a href="/sales-rep-erp-software"> salary.</a></span> Employees can also access HR information on the<span><a href="/Knowledge-management-software"> Knowledge Base,</a></span> such as benefits, policies, and procedures.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mmc}>
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Our Modules</h3>
                <p className="text-body-lead-large color-gray-600">
                  on HR Records
                </p>
              </div>
            </div>
          </div>

          <div className="container mt-80">
            <Hrrecordsslider />
          </div>
        </div>

        {/* code for the mobile screen and ipad views, which is disabled for laptop */}

        <div className={styles.mobie}>
          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/reports.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Org Chart</h3>

            <p className={styles.mobpara}>
              In Shadobooks CRM an organisational chart depicts the
              organisational structure by connecting distinct employees with
              their unit’s name, email, parent unit, IMAP Username, IMAP
              password, and the encryption details.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/orgchart.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Job Description</h3>

            <p className={styles.mobpara}>
              The job description components in shadobooks CRM outline the
              primary functions and responsibilities of a certain position. This
              component is also in charge of the job selection processes and the
              publication.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/jobdescription.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Onboarding</h3>

            <p className={styles.mobpara}>
              Onboarding in CRM streamlines the process of introducing new
              employees to an organisation. To provide an effective onboarding
              experience for new employees, it often involves electronic
              signatures.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/onboarding.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>HR Records</h3>

            <p className={styles.mobpara}>
              The HR records of shadobooks CRM contain the staff name, code,
              email, personnel qualifications by department, gender, job
              position, role, and contact information. You may also examine
              these details on a chart basis.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/records.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Training</h3>

            <p className={styles.mobpara}>
              Human resource training programmes are specialised courses that
              include the name of the training programme, the training type, the
              training item, the department, the training libraries, minimum
              point, and the training results.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/training.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Contracts</h3>

            <p className={styles.mobpara}>
              The process of operational contract management is carried out
              within an organisation using Shadobooks CRM. Human resource
              contract management includes the staff name.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/contracts.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Dependants</h3>

            <p className={styles.mobpara}>
              Dependant refers to a staff member's spouse or child who is fully
              dependent on the employee for support. To create a new dependant
              in Shadobooks CRM, enter the employee dependant's details in the
              dependant’s form.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/dependant.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Layoff Checklist</h3>

            <p className={styles.mobpara}>
              The purpose of the layoff checklist in shadobooks CRM is to
              provide a process for designating an employee for layoff. The
              layoff checklist includes the employee's name, email address, job
              position, department.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/layoffchecklist.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Q&A</h3>

            <p className={styles.mobpara}>
              Q&A management is a type of online documentation that provides
              guidance for resolving problems encountered by clients. This may
              be accomplished in Shadobooks CRM by providing subject.
            </p>
          </Col>

          <div className={styles.makeme}>
            <img
              className={styles.conimg}
              alt="Best hrms Software"
              src="assets/imgs/page/homepage1/question.jpg"
            />
          </div>
          <Col
            xs={{
              span: 20,
              offset: 2,
            }}
            lg={{
              span: 8,
              offset: 5,
            }}
            md={{
              span: 16,
              offset: 4,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 4,
            }}
            xxl={{
              span: 32,
              offset: 4,
            }}
          >
            <h3 className={styles.tabheadings1}>Reports</h3>

            <p className={styles.mobpara}>
              The HR reports include the following employee information: Layoffs
              of employees, Salary changes on the staff list, Staff changes by
              seniority, Staff changes by month.
            </p>
          </Col>
        </div>

        <div className={styles.modslider}>
          <div className="mt-50">
            <Newslider />
            <div className="text-center">
              <Link href="/our-product">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    padding: "10px",
                    marginTop: "15px",
                    marginBottom: "40px",
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

export default Index6;

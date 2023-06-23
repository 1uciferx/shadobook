/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";
import { Helmet } from "react-helmet";

function Service1() {
  return (
    <>
      {/* facebook and twitter meta graphs starts here */}
      <Helmet>
        <title>
          Get the Best IT ERP Software for Efficient IT & Support Services
        </title>
        <meta
          name="description"
          content="Shadobooks IT ERP Software is a powerful tool to streamline operations and increase efficiency. It can manage finance, inventory, and customer relationships, helping businesses improve their productivity."
        />
        <meta name="keywords" content="IT ERP Software" />
        <meta property="og:title" content="Shadobooks ERP" />
        <meta property="og:description" content="Shadobooks erp solutions." />
        <meta
          property="og:image"
          content="/assets/imgs/page/homepage1/sb-logo.png"
        />
        <meta
          property="og:url"
          content="https://www.facebook.com/shadobookscrm"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadobooks ERP" />
        <meta name="twitter:description" content="Shadobooks erp solutions." />
        <meta
          name="twitter:image"
          content="/assets/imgs/page/homepage1/sb-logo.png"
        />
        {/* <meta http-equiv="refresh" content="0; url=https://shadobooks.com/it-erp-software" /> */}
      </Helmet>

      {/* facebook and twitter meta graphs ends here */}
      <Layout>
        <section className="section-box">
          <div className="banner-hero bg-service-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 box-banner-left">
                  <h1 className="text-display-3 mt-95">
                    Get the best CRM for IT and Support services from ShadoBooks
                  </h1>
                  <p
                    className="text-body-lead-large color-gray-500 mt-40 pr-40"
                    style={{ fontSize: "20px" }}
                  >
                    With the help of ShadoBook CRM's extensive analytics, you
                    can keep track of every stage of your sales cycle,from lead
                    analysis to deal insights, activity data, and email
                    analysis. Create dashboards exclusively yours by utilizing
                    analytical widgets for sales, such as charts, goal meters,
                    KPIs, and funnels.
                  </p>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-2">
                      <img
                        src="/assets/imgs/page/services/1/banner-2.png"
                        alt="ShadoBooks"
                      />
                    </div>
                    <img
                      src="/assets/imgs/page/services/1/banner.png"
                      alt="ShadoBooks"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <h2 className="text-heading-2 color-gray-900 mb-50">
                  Our features
                </h2>
              </div>
            </div>
          </div>
          <div className="container mt-20">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/hrmanagement.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">HR Management</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      We ShadoBook gain a clear perspective, manage all contacts
                      from one location, and improve relationships. Our HR
                      management team will handle and do the necessary things
                      for all employees.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/hrpayroll.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">HR & Payroll</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Our HR payroll is responsible for handling the financial
                      compensation of those employees and the method by which
                      they are paid and HR primary responsibility is to take
                      employee interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/accounting.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Accounting</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      We ShadoBook CRM tool bring all of your accounting
                      operations into a single, security helps to manage your
                      finance. With CRM tools, you can build world-class on
                      boarding experiences, collaborate in real-time across
                      teams, and provide world-class customer experiences that
                      adapt to the client's needs. Every form of accounting
                      organization can use our solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/customers.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Customers</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      Our IT and Support team revolves around the client file to
                      know about customer reviews. All of our customer's
                      appointments, tasks, call notes, service agreements,
                      product uses, letters, opportunities, support requests,
                      bills, and projects will be displayed to you in a matter
                      of seconds and arranged chronologically.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/sales.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Sales</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      Our CRM software keeps track of the company's
                      possibilities to maximize potential sales. You handle
                      leads using opportunities from the initial point of
                      contact until the sale's completion. Our estimates and
                      reports on the potential for sales can be generated
                      instantly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/reminder.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Reminder</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      Our Shadobook CRM tool to create short remainder to know
                      the scheduled task is done within the given time. This
                      makes our IT and Support analyzes the job and finishes it
                      within time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/chat.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Chat</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      You can manage communication entirely within ShadoBook
                      CRM. You used to send emails, link emails to CRM records,
                      and gain insight into emails.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/chartflow.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Flowchart</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Our CRM tool has flowcharts that show the ups and downs of
                      customer satisfaction, which helps to clear the issue
                      based on the customer requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/lead.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Lead</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Our sales representatives can convert more leads in less
                      time and with less work, thanks to a complete set of lead
                      management solutions for companies of all sizes and sorts.
                      We look at some of the standard methods you may use to
                      achieve sales success with the ShadoBook lead management
                      system, from lead creation through conversion and
                      analysis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/timesheet.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Timesheet</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Our timesheet directly connected to the customer record
                      will guarantee better visibility into task management. Our
                      service providers may easily keep track of the time spent
                      with a particular customer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/staffworkload.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Staff Workload</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      There is little room for error while working in sales and
                      marketing. We ShadoBook have a staff workflow that
                      increases productivity during business hours by completing
                      repetitive activities for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/expenses.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Expenses</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      With a comprehensive knowledge base on a customer portal,
                      we give customers a high-quality, high-touch experience
                      while cutting the cost of customer care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/projects.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Project</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Our CRM tool provides an efficient project management
                      accounting is allocating working hours to projects. For
                      both customers and projects, we ShadoBook provides an
                      intelligent time-tracking capability that keeps track of
                      information, including hourly rates, estimated time to
                      completion, remaining time, budget, and material and
                      outside costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/recuritment.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Recruitment</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Our CRM tool helps to know the vacancies for your IT and
                      Support services. We provide all employees with the
                      required knowledge to enhance business operations and make
                      better decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/tasks.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Task</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      We ensure that the workspace is efficient, incorporates
                      third-party data, and provides agents with visibility into
                      the tasks being worked on by other teams to enable them to
                      assist clients and resolve their problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/utilities.png"
                        alt="ShadoBooks"
                        style={{ height: "50px" }}
                      />
                    </span>
                    <h4 className="text-heading-6">Utilities</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Our ShadoBook CRM tool used to check all the utilities in
                      IT and Support and we provide with smooth, quick, and
                      innovative experiences to your stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-6 col-sm-12 mb-30">
                <h3 className="text-heading-1 mt-30">Why choose us ?</h3>

                <div className="line-bd-green mt-50" />
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Managing tasks effectively
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      We ShadoBook make task management incredibly quick and
                      straightforward. With this, all necessary tasks are kept
                      in view and prompt notifications support task completion
                      within the allotted time.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      App-based access to your customers
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Our ShadoBook allows all your clients to access
                      information with a single click and a uniform view from
                      anywhere at any time.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Role-based Client Data Access
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      For task cooperation, ShadoBook allows role-based access
                      to client data. We enable teams to work remotely to
                      complete the task, increasing team visibility and
                      productivity.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Bird-eye View all of the reports
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Our CRM tool has quickly provides results in forms like a
                      spreadsheet, word document, or even pdf file, depending on
                      your needs, assisting in making rapid yet informed
                      decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 ">
                <div className="inner-image mt-50">
                  <div className="block-image-bottom">
                    <img
                      className="bdrd-16 img-responsive"
                      src="assets/imgs/page/homepage2/img-built-2.png"
                      alt="ShadoBooks"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* accordion */}
        <section className="section-box pt-140 pb-50">
          <div className="container">
            <div className="row">
              <h3
                className="text-heading-1"
                style={{
                  textAlign: "center",
                  marginBottom: "50px",
                  martinTop: "50px",
                }}
              >
                FAQ'S
              </h3>

              <div className="col-lg-12">
                <Accordion />
              </div>
            </div>
          </div>
        </section>

        <section className="section-box overflow-visible mb-100">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="bg-6 box-newsletter position-relative">
                  <div className="row">
                    <div className="col-lg-5 col-md-7">
                      <span className="text-body-capitalized color-gray-500 text-uppercase">
                        newsletter
                      </span>
                      <h4 className="text-heading-2 mb-10 mt-10">
                        Subscribe our newsletter
                      </h4>
                      <p className="text-body-text color-gray-500">
                        By clicking the button, you are agreeing with our
                      </p>
                      <Link href="/page-terms">
                        <a>Term &amp; Conditions</a>
                      </Link>

                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                          <input
                            className="input-newsletter"
                            placeholder="Enter you mail .."
                          />
                          <button className="btn btn-send" />
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1">
                        <img
                          src="/assets/imgs/template/chart.png"
                          alt="ShadoBooks"
                        />
                      </div>
                      <img
                        className="img-responsive img-newsletter"
                        src="assets/imgs/template/img-newsletter.png"
                        alt="ShadoBooks"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Service1;

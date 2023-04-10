import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { Button, Space } from "antd";
import { Col, Row } from "antd";
import { Breadcrumb } from "antd";
import "react-modal-video/css/modal-video.css";
import Indexslider from "../components/indexslider";
import { Helmet } from 'react-helmet';
import styles from "../styles/SalesAgent.module.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import Contactmanager from "../components/contactmanager";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import Head from "next/head";

function Salesagent() {
  return (
  <>
      <Head>
        <title>Best Sales Rep ERP Software | Shadobooks ERP</title>
        <meta
          name="description"
          content="Sales Rep ERP Software is helps to automate business tasks, track performance, manage customer relationships, and generate invoices & Reports."
        />
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
              background: "url(assets/imgs/page/blog/single/banner.png)",
            }}
          >
            <div className="container">
              <div className="text-center">
                <h1 className="text-display-2 color-white mt-30">
                  Sales Agent
                </h1>
                <p className="text-body-lead-large color-white mt-40 pr-40">
                  A person or corporation that represents an exporting firm (the
                  principal) as a sales agent, promoting the products of the
                  principal to potential customers in the external market in
                  exchange for a commission based on the value of the business
                  transactions arranged and paid to the principal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container">
            <div className="bg-1 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Dashboard</h3>
                    <p className="text-body-excerpt mt-30">
                    The dashboard for sales agents in Shadobooks ERP is expected to display key data<span><a href="/reports-module-in-erp"> reports</a></span> , which may include:
                      <br></br> <br></br>➟ The number of agents,
                      <br></br>➟ The number of active and inactive agents,
                      <br></br>➟ The total number of programs,
                      <br></br>➟ The total number of orders,
                      <br></br>➟ The number of orders that have been delivered.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-10">
                  <img
                    className="img-responsive"
                    src="/salesagent/pic1.png"
                    alt="Sales Rep Software"
                  />
                </div>
              </div>
            </div>

            <div className="bg-5 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="/salesagent/pic3.png"
                    alt="Sales Rep Software"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Management</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ In ShadobooksERP, a sales representative is a user with the ability to view & manage<span><a href="/project-management-software"> projects</a></span> and track sales and customer interactions within the system.
                      <br></br>
                      <br></br>
                      In order to create a new sales agent in ShadobooksERP, you
                      can follow these steps:
                      <br></br>
                      <br></br>➟ Click on the "New Agent" button.
                      <br></br>➟ Fill in the necessary information for the new
                      agent, including their name, contact information, and
                      other relevant details.
                      <br></br>➟ Click on the "Save" button to create the new
                      agent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-6 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Programs</h3>
                    <p className="text-body-excerpt mt-30">
                      In ShadobooksERP an “Agent program” sub-module helps to
                      manage agents, including
                      <br></br>
                      <br></br>➟ Creating new agents,
                      <br></br>➟ Updating agent information, and
                      <br></br>➟ Tracking agent performance.
                      <br></br>
                      <br></br>
                      You can receive a particular agent information by entering
                      their name and agent group from the list of agents.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-30">
                  <img
                    className="img-responsive"
                    src="/salesagent/pic1.png"
                    alt="Sales Rep Software"
                  />
                </div>
              </div>
            </div>

            <div className="bg-7 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <img
                    className="img-responsive"
                    src="/salesagent/pic1.png"
                    alt="Sales Rep Software"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">Orders</h3>
                    <p className="text-body-excerpt mt-30">
                      ➟ The order page displays all the orders placed by the
                      agents.
                      <br></br>➟ Use the search filters available to narrow down
                      the order list to view the specific agent's order.
                      <br></br>➟ You can also filter the orders by Agent.
                      <br></br>
                      <br></br>➟ Click on the specific order to view the
                      details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className={styles.backgroundimg}

style={{ backgroundImage: "url('assets/background.jpg')"}}>




<Col className={styles.breasdcrumb}
          xs={{
            span: 22,
            offset: 1,
          }}
          lg={{
            span: 9,
            offset: 1,
          }}
          md={{
            span: 16,
            offset: 0,
          }}
          sm={{
            span: 17,
            offset: 1,
          }}
          xl={{
            span: 22,
            offset: 1,
          }}
          xxl={{
            span: 22,
            offset: 1,
          }}>

          <Content  >
            <Breadcrumb>
              <Breadcrumb >
                <Breadcrumb.Item  >Index</Breadcrumb.Item>
                <Breadcrumb.Item >
                  <a href="/#"  >Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/" >Sales Agent</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
        </Col>



<Row>
     
     <Col
     
     xs={{
       span: 22,
       offset: 1,
   }}

sm={{
       span: 20,
       offset: 2,
     }}

md={{
      span: 12,
      offset: 1,
  }}

lg={{
      span: 10  ,
      offset: 2,
    }}
xl={{
      span:8,
      offset:2,
    }}
xxl={{

      span:8,
      offset:3,
    }}>   <h1  className={styles.headingsheader}>Sales Agent</h1>

           <p  className={styles.paraheader}> A person or corporation that represents an exporting firm (the principal) as a sales agent, promoting the products of the principal to potential
          customers in the external market in exchange for a commission based on the value of the business transactions arranged and paid to the principal.

</p>
           
     

    </Col>

    <Col xs={{
  span: 20,
  offset: 1,
}}

  sm={{
    span: 20,
    offset: 3,
  }}

  md={{
    span: 9,
    offset: 1,
  }}

  lg={{
    span: 10,
    offset: 1,
  }}
  xl={{
    span: 10,
    offset: 0,
  }}
  xxl={{

    span: 8,
    offset: 2,
  }}>
  <img className={styles.box} src="/logo1/vector6.jpg"></img>
</Col>



</Row>


</div>








      <Row className={styles.margintop1}>
        <Col xs={{
          span: 19,
          offset: 2,
        }}

          sm={{
            span: 18,
            offset: 3,
          }}

          md={{
            span: 10,
            offset: 6,
          }}

          lg={{
            span: 10,
            offset: 7,
          }}
          xl={{
            span: 12,
            offset: 6,
          }}
          xxl={{

            span: 9,
            offset: 7,
          }}>
          <h3 className={styles.headings}>Dashboard</h3>
        </Col>





        <Col xs={{
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

          lg={{
            span: 20,
            offset: 0,
          }}
          xl={{
            span: 18,
            offset: 3,
          }}
          xxl={{

            span: 13,
            offset: 5,
          }}>
          <img className={styles.img1} src="/salesagent/pic1.png"></img>
        </Col>

      </Row>



      <Row>
        <Col xs={{
          span: 20,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 2,
          }}

          md={{
            span: 20,
            offset: 2,
          }}

          lg={{
            span: 20,
            offset: 2,
          }}
          xl={{
            span: 18,
            offset: 3,
          }}
          xxl={{

            span: 13,
            offset: 5,
          }}>


          <p className={styles.para1}>A dashboard is a piece of sales technology that shows the most recent performance information visually.
         It provides you with a succinct overview of data that is based on results, such as sales-to-date, sales by region, lead conversion rate, sales growth, and so on.</p>


        </Col>

      </Row>








      <Row className={styles.margintop2}>
        <Col xs={{
          span: 18,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 2,
          }}

          md={{
            span: 10,
            offset: 7,
          }}

          lg={{
            span: 12,
            offset: 6,
          }}
          xl={{
            span: 12,
            offset: 2,
          }}
          xxl={{

            span: 14,
            offset: 1,
          }}>
          <h3 className={styles.headings}>Management</h3>
        </Col>
      </Row>

      <Row>
      <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 2,
            }}>
          <img className={styles.img2} src="/salesagent/pic3.png"></img>
        </Col>


        <Col xs={{
          span: 20,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 0,
          }}

          md={{
            span: 20,
            offset: 2,
          }}

          lg={{
            span: 20,
            offset: 0,
          }}
          xl={{
            span: 8,
            offset: 0,
          }}
          xxl={{

            span: 8,
            offset: 1,
          }}>


          <p className={styles.para1}>Sales representatives typically have a great deal of autonomy to set prices, terms, and conditions of sale and are contractually empowered
          to sell all of a manufacturer's output. Despite working on a commission basis, they occasionally carry out the responsibilities of a manufacturer's marketing department.</p>


        </Col>

      </Row>





      <Row className={styles.margintop3}>
      <Col xs={{
            span: 18,
            offset: 3,
          }}

            sm={{
              span: 20,
              offset: 1,
            }}

            md={{
              span: 18,
              offset: 3,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 4,
            }}>
          <h3 className={styles.headings3}>Programs</h3>
        </Col>
      </Row>



      <Row>
      <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 14,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 2,
            }}>
          <img className={styles.img3} src="/salesagent/pic1.png"></img>
        </Col>

        <Col xs={{
            span: 0,
            offset: 0,
          }}

            sm={{
              span: 0,
              offset: 0,
            }}

            md={{
              span: 0,
              offset: 0,
            }}

            lg={{
              span: 6,
              offset: 1,
            }}
            xl={{
              span: 6,
              offset: 0,
            }}
            xxl={{

              span: 6,
              offset: 1,
            }}>
          <img className={styles.logo} src="/logo1/vector4.jpg"></img>
        </Col>

      </Row>



      <Row>
      <Col xs={{
             span: 20,
             offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 14,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 2,
            }}>



          <p className={styles.para1}>A sales programme is a sizable collection of coordinated, repeatable, and conventional activities that promote incremental new business.
          Sales programmes frequently depend on multiple organisations. Each organisation must comprehend, accept, and carry out its specific sales programme
          component in order for the programme to be effective.</p>


        </Col>

      </Row>










      <Row className={styles.margintop4}>
        <Col xs={{
          span: 18,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 1,
          }}

          md={{
            span: 13,
            offset: 5,
          }}

          lg={{
            span: 10,
            offset: 7,
          }}
          xl={{
            span: 12,
            offset: 0,
          }}
          xxl={{

            span: 7,
            offset: 8,
          }}>
          <h3 className={styles.headings4}>Orders</h3>
        </Col>

</Row>




<Row>
<Col xs={{
           span: 20,
           offset: 2,
        }}

          sm={{
            span: 20,
            offset: 1,
          }}

          md={{
            span: 20,
            offset: 2,
          }}

          lg={{
            span: 18,
            offset: 3,
          }}
          xl={{
            span: 14,
            offset: 5,
          }}
          xxl={{

            span: 12,
            offset: 6,
          }}>


          <p className={styles.para1}>To assess orders from a sales agent, use this InfoSource, which comprises data for the billing dataset and sales agent assignments for the order.</p>


        </Col>




        <Col xs={{
          span: 20,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 1,
          }}

          md={{
            span: 22,
            offset: 0,
          }}

          lg={{
            span: 18,
            offset: 3,
          }}
          xl={{
            span: 15,
            offset: 5,
          }}
          xxl={{

            span: 12,
            offset: 6,
          }}>
          <img className={styles.img4} src="/salesagent/pic1.png"></img>
        </Col>
      </Row> */}

        <div className={styles.modslider}>
          <div className="mt-50">
            <Indexslider />
            <div className="text-center">
              <Link href="/modules">
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

export default Salesagent;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { Breadcrumb, Layout as L } from 'antd';
const { Content } = L;
import { Col, Row } from "antd";
import styles from "../styles/Projects.module.css";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Button, Space } from 'antd'
import { Card } from 'antd';
const { Meta } = Card;
import { useState, useEffect } from "react";
import { Tabs } from 'antd';
import Zoom from 'react-reveal/Zoom';
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import Contactmanager from "../components/contactmanager";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}




function Projects() {

  return (
    <>
      <Layout>

        {/* backgroundImage for the hero */}

        <div style={{
          backgroundImage: `url(/assets/imgs/page/homepage1/kk1.gif)`,
          backgroundSize: "cover",
          width: 'auto',
          height: '100%'
        }}>

          {/* Breadcrumb code starts from here */}

          <Content className="site-layout" style={{ padding: "10px 10px" }}>
            <Breadcrumb style={{ margin: "16px 0", fontWeight: " " }}>
              <Breadcrumb>
                <Breadcrumb.Item style={{ color: "white" }}>Index</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a style={{ color: "white" }} href="">Projects</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>




          {/* text on the hero banner */}

          <Row>

            <Col xs={{
              span: 12,
              offset: 1,
            }}
              lg={{
                span: 20,
                offset: 2,
              }}
              sm={{
                span: 12,
                offset: 0,
              }}
              md={{
                span: 20,
                offset: 0,
              }}
              xl={{
                span: 18,
                offset: 2,
              }}
              xxl={{
                span: 20,
                offset: 0,
              }} >
              <div>
                <Zoom top>
                  <h1 className={styles.headings}>Projects</h1>
                </Zoom>
              </div>
            </Col>

            {/* <Col xs={{
              span: 16,
              offset: 6,
            }}
              lg={{
                span: 6,
                offset: 2,
              }}
              sm={{
                span: 5,
                offset: 1,
              }}
              md={{
                span: 10,
                offset: 0,
              }}
              xl={{
                span: 24,
                offset: 9,
              }}
              xxl={{
                span: 10,
                offset: 5,
              }} >

              <img src="assets/imgs/page/homepage1/sw2.jpg" className={styles.banner} />
            </Col> */}
          </Row>
        </div>

        {/* parallax effect added */}

        <ParallaxProvider>
          <Parallax speed={-5}>
            <div className="slow" />
            <Row>

              <Col xs={{
                span: 20,
                offset: 0,
              }}
                lg={{
                  span: 20,
                  offset: 0,
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
                  offset: 1,
                }} >
                <p className={styles.para}>What is Projects ?</p>
                <p className={styles.subhead}>
                  A project in Shadobooks CRM is a collection of tasks that must be completed in order to reach a specific goal. Projects can be simple or complex, and they can be managed by one or a hundred people. An executive or manager will frequently outline and assign projects. Some teams divide a project into individual jobs to manage accountability and leverage team capabilities.
                </p>

              </Col>
            </Row>
          </Parallax>


          <Parallax speed={1}>
            <div className="slow" />
            <Row>

              {/* image on the 1st container */}


              <Col xs={{
                span: 30,
                offset: 1,
              }}
                lg={{
                  span: 20,
                  offset: 0,
                }}
                sm={{
                  span: 20,
                  offset: 1,
                }}
                md={{
                  span: 20,
                  offset: 2,
                }}
                xl={{
                  span: 14,
                  offset: 5,
                }}
                xxl={{
                  span: 14,
                  offset: 5,
                }} >
                <img src="assets/imgs/page/homepage1/rr6.jpg" />
              </Col>

            </Row>
          </Parallax>
        </ParallaxProvider>

        <Row>

          <Col xs={{
            span: 30,
            offset: 0,
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
              offset: 2,
            }}
            xxl={{
              span: 20,
              offset: 0,
            }} >
            <p className={styles.subhead2}>How to Create a Project ?</p>
          </Col>
          <Col span={3}></Col>

          {/* image on the 2nd container */}


          <Col xs={{
            span: 24,
            offset: 0,
          }}
            lg={{
              span: 14,
              offset: 0,
            }}
            sm={{
              span: 20,
              offset: 2,
            }}
            md={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 20,
              offset: 0,
            }}
            xxl={{
              span: 14,
              offset: 2,
            }} >
            <img src="assets/imgs/page/homepage1/rrr1.png" className={styles.two} />
          </Col>



          <Col span={3}></Col>
        </Row>


        <Row>

          <Col xs={{
            span: 20,
            offset: 0,
          }}
            lg={{
              span: 10,
              offset: 1,
            }}
            sm={{
              span: 10,
              offset: 1,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 20,
              offset: 4,
            }}
            xxl={{
              span: 16,
              offset: 5,
            }} >
            <p className={styles.subhead4}>
              Click the new project button in the project module. Fill out the project form with the necessary information and save it. The project home page displays the newly created project. The status of the project can be viewed on the project main page. The project can be assigned to sales, purchases, task generation, and so on.
            </p>

          </Col>
        </Row>



        <Row>

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
              offset: 1,
            }}
            md={{
              span: 20,
              offset: 0,
            }}
            xl={{
              span: 20,
              offset: 2,
            }}
            xxl={{
              span: 18,
              offset: 3,
            }} >
            <p className={styles.subhead2}>Project Summary & Overview</p>
          </Col>
        </Row>

        <Row>
          <Col span={3}></Col>

          {/* image on the 3rd container */}


          <Col xs={{
            span: 24,
            offset: 0,
          }}
            lg={{
              span: 20,
              offset: 0,
            }}
            sm={{
              span: 18,
              offset: 0,
            }}
            md={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 20,
              offset: 0,
            }}
            xxl={{
              span: 16,
              offset: 1,
            }} >
            <img src="assets/imgs/page/homepage1/rrr2.png" />
          </Col>
          <Col span={3}></Col>
        </Row>

        <Row>

          <Col xs={{
            span: 20,
            offset: 1,
          }}
            lg={{
              span: 12,
              offset: 0,
            }}
            sm={{
              span: 10,
              offset: 1,
            }}
            md={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 20,
              offset: 4,
            }}
            xxl={{
              span: 16,
              offset: 5,
            }} >
            <p className={styles.subhead4}>
              A project summary provides a brief, comprehensive overview of the complete project and its important details. It often includes a project's status, total rate, deadline, and analysis. A project overview is a project outline that describes key elements about the project. A project overview contains general information such as the project name, customer information, and sponsors.
            </p>

          </Col>
        </Row>



        {/* tab panel section has been started form this section */}

        <Row>
          <Col span={2}></Col>

          <Col xs={{
            span: 20,
            offset: 1,
          }}
            lg={{
              span: 16,
              offset: 2,
            }}
            sm={{
              span: 18,
              offset: 0,
            }}
            md={{
              span: 14,
              offset: 0,
            }}
            xl={{
              span: 20,
              offset: 1,
            }}
            xxl={{
              span: 18,
              offset: 0,
            }}
            style={{ marginTop: '30px', marginBottom: '40px' }}>


            <Tabs
              tabBarStyle={{
                color: '#90331c',
                marginLeft: '0px',
                fontWeight: 'bold',
              }}


              defaultActiveKey="1" onChange={callback}  >

              <TabPane tab="Sales" key="1" >


                {/* module 1 on tab */}


                <Row>
                  <div>
                    <Zoom top>

                      <Col xs={{
                        span: 20,
                        offset: 1,
                      }}
                        lg={{
                          span: 6,
                          offset: 2,
                        }}
                        sm={{
                          span: 6,
                          offset: 2,
                        }}
                        md={{
                          span: 6,
                          offset: 4,
                        }}
                        xl={{
                          span: 8,
                          offset: 2,
                        }}
                        xxl={{
                          span: 1,
                          offset: 4,
                        }} >
                        <Card
                          hoverable
                          style={{
                            width: 240,
                          }}
                          cover={<img alt="Proposals" src="/assets/imgs/page/homepage1/proposal.jpg" />}
                        >
                          <Meta title="Proposals" description=" " />
                        </Card>
                      </Col>
                    </Zoom>
                  </div>


                  {/* module 2 on tab */}



                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 6,
                      offset: 2,
                    }}
                    sm={{
                      span: 6,
                      offset: 2,
                    }}
                    md={{
                      span: 6,
                      offset: 0,
                    }}
                    xl={{
                      span: 6,
                      offset: 2,
                    }}
                    xxl={{
                      span: 2,
                      offset: 1,
                    }} >
                    <div>
                      <Zoom top>
                        <Card
                          hoverable
                          style={{
                            width: 240,
                          }}
                          cover={<img alt="Estimates" src="/assets/imgs/page/homepage1/estimate.jpg" />}
                        >
                          <Meta title="Estimates" description=" " />
                        </Card>
                      </Zoom>
                    </div>
                  </Col>


                  {/* module 3 on tab */}



                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 6,
                      offset: 2,
                    }}
                    sm={{
                      span: 6,
                      offset: 2,
                    }}
                    md={{
                      span: 1,
                      offset: 0,
                    }}
                    xl={{
                      span: 6,
                      offset: 0,
                    }}
                    xxl={{
                      span: 3,
                      offset: 2,
                    }} >
                    <div>
                      <Zoom top>
                        <Card
                          hoverable
                          style={{
                            width: 240,
                          }}
                          cover={<img alt="Invoices" src="/assets/imgs/page/homepage1/invoice.jpg" />}
                        >
                          <Meta title="Invoices" description=" " />
                        </Card>
                      </Zoom>
                    </div>
                  </Col>


                  {/* module 4 on tab */}



                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 6,
                      offset: 2,
                    }}
                    sm={{
                      span: 6,
                      offset: 2,
                    }}
                    md={{
                      span: 8,
                      offset: 1,
                    }}
                    xl={{
                      span: 8,
                      offset: 3,
                    }}
                    xxl={{
                      span: 3,
                      offset: 1,
                    }} >
                    <div>
                      <Zoom top>
                        <Card
                          hoverable
                          style={{
                            width: 240,
                          }}
                          cover={<img alt="Subscriptions" src="/assets/imgs/page/homepage1/subscription.jpg" />}
                        >
                          <Meta title="Subscriptions" description=" " />
                        </Card>
                      </Zoom>
                    </div>
                  </Col>


                  {/* module 5 on tab */}




                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 6,
                      offset: 2,
                    }}
                    sm={{
                      span: 6,
                      offset: 2,
                    }}
                    md={{
                      span: 1,
                      offset: 0,
                    }}
                    xl={{
                      span: 1,
                      offset: 0,
                    }}
                    xxl={{
                      span: 3,
                      offset: 2,
                    }} >
                    <div>
                      <Zoom top>
                        <Card
                          hoverable
                          style={{
                            width: 240,
                          }}
                          cover={<img alt="Expenses" src="/assets/imgs/page/homepage1/expenses.jpg" />}
                        >
                          <Meta title="Expenses & Credit Notes" description=" " />
                        </Card>
                      </Zoom>
                    </div>
                  </Col>
                </Row>
              </TabPane>

              {/* end of the 1st tab pane */}






              {/* start of the second tab pane */}


              <TabPane tab="Tasks" key="2">

                <Row>

                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 6,
                      offset: 2,
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
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <img src="/assets/imgs/page/homepage1/q11.jpg" />
                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 6,
                      offset: 2,
                    }}
                    sm={{
                      span: 10,
                      offset: 0,
                    }}
                    md={{
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead5}>
                      Some common synonyms of task are assignment, chore, duty, job, and stint. While all these words mean "a piece of work to be done," task implies work imposed by a person in authority or an employer or by circumstance.
                    </p>

                  </Col>
                </Row>
              </TabPane>

              {/* End of the tab pane */}





              {/* start of the third tab panel */}

              <TabPane tab="Purchase" key="3">

                <Row>

                  <Col xs={{
                    span: 20,
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
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <h1 className={styles.subhead6}>Vendors</h1>
                    <p className={styles.subhead7}>
                      Vendor-items in purchase refers to the items that a vendor has available to be purchased. This includes products, services, and other items
                      that a vendor offers.
                    </p>

                  </Col>


                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 0,
                    }} >
                    <img src="/assets/imgs/page/homepage1/vendor.jpg" />
                  </Col>
                </Row>



                <Row>

                  <Col xs={{
                    span: 20,
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
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <img src="/assets/imgs/page/homepage1/gg4.jpg" />
                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 0,
                    }} >
                    <h1 className={styles.subhead9}>Purchase Request</h1>
                    <p className={styles.subhead8}>
                      Purchase request that enables users to initiate a request for a product or service. It allows users to
                      specify the desired quantity and unit price, and to provide additional details, such as delivery
                      requirements and payment terms.
                    </p>

                  </Col>
                </Row>




                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <h1 className={styles.subhead6}>Quotations</h1>
                    <p className={styles.subhead7}>
                      A purchase quotation is a document sent by a seller to a prospective buyer that includes the price and other details of a product or service.
                      It is typically used when a buyer intends to purchase a large quantity of goods or when the buyer needs a customized product or service
                      that requires special pricing.
                    </p>

                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 0,
                    }} >
                    <img src="/assets/imgs/page/homepage1/gg3.jpg" />
                  </Col>
                </Row>



                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <img src="/assets/imgs/page/homepage1/df1.jpg" />
                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 0,
                    }} >
                    <h1 className={styles.subhead9}>Purchase Order</h1>
                    <p className={styles.subhead8}>
                      A purchase order is a document sent from a buyer to a supplier, indicating types, quantities, and agreed prices for products or services the
                      supplier will provide to the buyer.
                    </p>

                  </Col>
                </Row>



                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <h1 className={styles.subhead6}>Order Returns</h1>
                    <p className={styles.subhead7}>
                      The process of returning merchandise purchased for a variety of reasons is known as order returns.
                      This could be because of damaged or defective items, incorrect items, incorrect sizes, or simply
                      because the customer is dissatisfied with the purchase.
                    </p>

                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 0,
                    }} >
                    <img src="/assets/imgs/page/homepage1/df2.jpg" />
                  </Col>
                </Row>



                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <img src="/assets/imgs/page/homepage1/df3.jpg" />
                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 0,
                    }} >
                    <h1 className={styles.subhead9}>Purchase Contract</h1>
                    <p className={styles.subhead8}>
                      Contracts in purchase are legally binding agreements that outline the terms and conditions of a purchase transaction between two or more
                      parties.
                      Contracts can also outline warranties and other requirements for the transaction.
                    </p>

                  </Col>
                </Row>


                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <h1 className={styles.subhead6}>Debit Notes</h1>
                    <p className={styles.subhead7}>
                      A debit note is a document sent by a seller to a buyer notifying them of a debit in the buyer's account. This debit could be due to a variety
                      of reasons, such as an invoice dispute, a return of goods, or a price adjustment.
                    </p>

                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 0,
                    }} >
                    <img src="/assets/imgs/page/homepage1/gg1.jpg" />
                  </Col>
                </Row>



                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <img src="/assets/imgs/page/homepage1/gg2.jpg" />
                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 0,
                    }} >
                    <h1 className={styles.subhead9}>Purchase Invoices</h1>
                    <p className={styles.subhead8}>
                      An invoice in purchase is a document issued by a seller to a buyer that serves as proof of purchase.
                      It usually contains the seller's and buyer's contact information, the items purchased, the quantity of

                      items purchased, the unit price of each item.

                    </p>

                  </Col>
                </Row>

              </TabPane>

              {/* end of the third tab panel */}




              {/* start of the fourth tab panel */}

              <TabPane tab="Vouchers" key="4">

                <h1 className={styles.subhead10}>
                  <div>
                    <Zoom left>
                      Payment Voucher
                    </Zoom>
                  </div>
                </h1>
                <Row>

                  <Col xs={{
                    span: 20,
                    offset: 4,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 8,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 2,
                    }} >
                    <ol className={styles.subhead11}>
                      <li>➟ In accounting, a payment voucher records all company transactions involving payments.</li> <br/>
                      <li>➟ This voucher type includes any payment made by the company via cash, check, internet payment, or any other method.</li>
                    </ol>

                  </Col>


                  <Col xs={{
                    span: 20,
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
                      offset: 1,
                    }}
                    xxl={{
                      span: 8,
                      offset: 1,
                    }} >
                    <div>
                      <Zoom right>
                        <img src="/assets/imgs/page/homepage1/aa2.jpg" />
                      </Zoom>
                    </div>
                  </Col>
                </Row>



                {/* tab 4 second container starts from here */}



                <h1 className={styles.subhead12}>
                  <div>
                    <Zoom left>
                      Receipt Voucher
                    </Zoom>
                  </div>
                </h1>
                <Row>


                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >

                    <Zoom right>
                      <img src="/assets/imgs/page/homepage1/aa1.webp" />
                    </Zoom>

                  </Col>


                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 8,
                      offset: 1,
                    }} >
                    <ol className={styles.subhead13}>
                     <li>➟ A receipt voucher is a handwritten receipt for goods or services sold. </li><br/>
                     <li>➟ A standard receipt voucher includes the date, time, amount, and type of product or service sold, as well as the signature of the person selling the product or service.</li>
                    </ol>

                  </Col>
                </Row>
              </TabPane>

              {/* end of the fourth tabpanel */}



              {/* start of the fifth panel */}

              <TabPane tab="Reports" key="5">


                <Row>

                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 20,
                      offset: 2,
                    }}
                    sm={{
                      span: 5,
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
                      offset: 1,
                    }} >
                    <h2 className={styles.subhead14}>Reports</h2>
                  </Col>
                </Row>

                <Row>

                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 20,
                      offset: 2,
                    }}
                    sm={{
                      span: 5,
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
                      offset: 1,
                    }} >
                    <img src="/assets/imgs/page/homepage1/report1.png" />
                    <p className={styles.subhead15}>
                      Shadobooks CRM project report is available in the balance sheet. It is a financial report that summarizes a company's assets, liabilities, and shareholders' equity for a specific time period. A balance sheet shows what the business owes and possesses during a specific time period. This is necessary since the balance sheet report represents the organization's financial situation.
                    </p>

                  </Col>
                </Row>
              </TabPane>

              {/* end of the fifth panel */}




              {/* start of the sixth panel */}

              <TabPane tab="Journal Entry" key="6">


                <Row>

                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 10,
                      offset: 0,
                    }}
                    sm={{
                      span: 5,
                      offset: 1,
                    }}
                    md={{
                      span: 10,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 14,
                      offset: 1,
                    }} >
                    <img src="/assets/imgs/page/homepage1/aa3.jpg" />
                  </Col>


                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 10,
                      offset: 0,
                    }}
                    sm={{
                      span: 5,
                      offset: 1,
                    }}
                    md={{
                      span: 10,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 1,
                    }} >
                    <p className={styles.subhead16}>
                      A journal entry is the act of recording or keeping track of any economic or non-economic transaction. Every financial transaction affects at least two accounts; one is debited, while the other is credited. This signifies that a journal entry has the same amount of debit and credit.
                    </p>
                  </Col>

                </Row>
              </TabPane>

              {/* end of the sixth panel */}



              {/* start of the seventh panel */}

              <TabPane tab="Timesheets" key="7">

                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 3,
                    }} >
                    <div>
                      <Zoom>
                        <img src="/assets/imgs/page/homepage1/timesheets.jpg" style={{ height: '350px', width: '350px' }} />
                      </Zoom>
                    </div>
                  </Col>

                  <Col xs={{
                    span: 20,
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
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead17}>
                      Project timesheets in Shadobooks CRM are all initiated timers for specific project tasks. The Time Sheets module allows users to track the amount of time they spent working on a given project, customer, or contract, as well as a description of the activity. All timers that are running or stopped can be seen and sorted, and all timesheets are associated with a staff member and a task.
                    </p>

                  </Col>
                </Row>
              </TabPane>

              {/* end of the seventh panel */}



              {/* start of the eight panel */}

              <TabPane tab="Notes" key="8">


                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 3,
                    }} >
                    <div>
                      <Zoom>
                        <img src="/assets/imgs/page/homepage1/notes.jpg" style={{ height: '350px', width: '350px' }} />
                      </Zoom>
                    </div>
                  </Col>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead17}>
                      Notes are a wonderful approach to summarize your observations and outcomes from customer. The project representative will always be able to track how a project is progressing. Shadobooks CRM allows you to make notes on leads, contacts, accounts, and deals, as well as sales activities including tasks, meetings, and calls.
                    </p>

                  </Col>
                </Row>
              </TabPane>

              {/* end of the eight panel */}



              {/* start of the 9th panel */}

              <TabPane tab="Milestones" key="9">
                <Row>
                  <Col span={2}></Col>

                  <Col xs={{
                    span: 20,
                    offset: 0,
                  }}
                    lg={{
                      span: 20,
                      offset: 0,
                    }}
                    sm={{
                      span: 10,
                      offset: 0,
                    }}
                    md={{
                      span: 16,
                      offset: 0,
                    }}
                    xl={{
                      span: 20,
                      offset: 0,
                    }}
                    xxl={{
                      span: 16,
                      offset: 1,
                    }} >
                    <img src="/assets/imgs/page/homepage1/milestone.png" />
                    <ol className={styles.subhead18}>
                      <li>➟ In a project management system, a milestone is a reference point that is used to monitor the project management process. </li><br/>
                      <li>➟ Another important aspect of project milestones is task association and project planning, which will aid in project success. </li><br/>
                      <li>➟ The start and finish dates of a milestone are determined by the task's start and end dates.</li>
                    </ol>

                  </Col>
                </Row>
              </TabPane>


              {/* end of the 9th panel */}



              {/* start of the 10th panel */}


              <TabPane tab="Activity" key="10">


                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 3,
                    }} >
                    <div>
                      <Zoom>
                        <img src="/assets/imgs/page/homepage1/activity.jpg" style={{ height: '350px', width: '350px' }} />
                      </Zoom>
                    </div>
                  </Col>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead17}>
                      Project activity is a tool that allows you to track the progress of your project. It is possible to prevent project activity from being visible to customers.  To do this, you can simply click the OFF button on the right side of the activity. The project activity operates smartly and automatically turns on/off the visible to the customer. This logic is also applied to tasks, files, and timesheets.
                    </p>

                  </Col>
                </Row>
              </TabPane>


              {/* end of the 10th panel */}



              {/* start of the 11th panel */}

              <TabPane tab="Files" key="11">


                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 3,
                    }} >
                    <div>
                      <Zoom>
                        <img src="/assets/imgs/page/homepage1/files.jpg" style={{ height: '350px', width: '350px' }} />
                      </Zoom>
                    </div>
                  </Col>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead17}>
                      Project files are a separate area for each project where files/documents relating to the project can be uploaded. When you launch a project from the top tabs, you will see a Files tab. Click on the files tab to easily drag and drop the file you need to upload for the project.
                    </p>

                  </Col>
                </Row>

              </TabPane>


              {/* end of the 11th panel */}



              {/* start of the 12th panel */}

              <TabPane tab="Discussions" key="12">


                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 3,
                    }} >
                    <div>
                      <Zoom>
                        <img src="/assets/imgs/page/homepage1/vec.jpg" style={{ height: '350px', width: '350px' }} />
                      </Zoom>
                    </div>
                  </Col>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead17}>
                      Projects discussion in CRM allows you to initiate multiple conversations with your customer or project member about a given project. To start a new project discussion, open the project, navigate to the discussions tab, and then click the create discussion button. This email will be sent to all client contacts who have project approval.
                    </p>

                  </Col>
                </Row>
              </TabPane>

              {/* end of the 12th panel */}



              {/* start of the 13th panel */}

              <TabPane tab="Gantt" key="13">


                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 3,
                    }} >
                    <div>
                      <Zoom>
                        <img src="/assets/imgs/page/homepage1/cvt.jpg" style={{ height: '350px', width: '350px' }} />
                      </Zoom>
                    </div>
                  </Col>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead17}>
                      A Gantt chart is a project management tool that depicts work performed over time in relation to the time allocated to the activity. A Gantt chart can include the task start and finish dates, milestones, task dependencies, assignees, and more.
                    </p>

                  </Col>
                </Row>
              </TabPane>

              {/* end of the 13th panel */}



              {/* start of the 14th panel */}

              <TabPane tab="Tickets" key="14">


                <Row>

                  <Col xs={{
                    span: 20,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 3,
                    }} >
                    <div>
                      <Zoom>
                        <img src="/assets/imgs/page/homepage1/ewq.jpg" style={{ height: '350px', width: '350px' }} />
                      </Zoom>
                    </div>
                  </Col>

                  <Col xs={{
                    span: 20,
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
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead17}>
                      Shadobooks CRM enables you to communicate with clients in order to meet their needs via ticket, live chat, or email. Your team can also manage all project support tickets to effectively handle any issues that emerge. Customers who contact assistance via email receive automatic notifications, informing them of the progress of their ticket.
                    </p>

                  </Col>
                </Row>
              </TabPane>

              {/* end of the 14th panel */}



              {/* start of the 15th panel */}

              <TabPane tab="Contracts" key="15" style={{ marginLeft: "40px" }}>

                <Row>

                  <Col xs={{
                    span: 18,
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
                      span: 8,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 6,
                      offset: 3,
                    }} >
                    <div>
                      <Zoom>
                        <img src="/assets/imgs/page/homepage1/dsa.jpg" style={{ height: '350px', width: '350px' }} />
                      </Zoom>
                    </div>
                  </Col>

                  <Col xs={{
                    span: 20,
                    offset: 1,
                  }}
                    lg={{
                      span: 10,
                      offset: 0,
                    }}
                    sm={{
                      span: 5,
                      offset: 1,
                    }}
                    md={{
                      span: 10,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{
                      span: 10,
                      offset: 1,
                    }} >
                    <p className={styles.subhead19}>
                      Contracts in purchase are legally binding agreements that outline the terms and conditions of a purchase transaction between two or more
                      parties. These agreements typically include the price, quantity, delivery dates, payment terms, and other details about the purchase.
                      Contracts can also outline warranties and other requirements for the transaction.
                    </p>
                  </Col>
                </Row>
              </TabPane>

              {/* end of the 15th panel */}


            </Tabs>

          </Col>
        </Row>






        <div>
          <Contactmanager />
        </div>








      </Layout>
    </>
  );
}

export default Projects;

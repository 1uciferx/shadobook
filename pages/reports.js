/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { Tabs } from "antd"; const { TabPane } = Tabs;
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, Space } from 'antd'
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import styles from "../styles/Reports.module.css";
import React from 'react';
import { Col, Row } from 'antd';
import { Breadcrumb } from 'antd';
import Contactmanager from "../components/contactmanager";
import { Layout as L } from 'antd';

const { Content } = L;






function Reports() {
  return (
    <>

      <Layout>

        <div  >


          <Row className={styles.mobilescreen1} style={{ backgroundImage: "url('assets/background14.jpg')", backgroundSize: "Cover",objectFit:"cover" }} >
            <div>

              <Row  >
                <Col className={styles.breasdcrumb}
                  xs={{
                    span: 24,
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

                  <Content>
                    <Breadcrumb >
                      <Breadcrumb>
                        <Breadcrumb.Item >Index</Breadcrumb.Item>
                        <Breadcrumb.Item>
                          <a href="/#" >Features</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                          <a href="/" >Reports</a>
                        </Breadcrumb.Item>
                      </Breadcrumb>
                    </Breadcrumb>
                  </Content>
                </Col>
              </Row>

              <Row>

                <Col

                  xs={{
                    span: 24,
                    offset: 0,
                  }}

                  sm={{
                    span: 8,
                    offset: 8,
                  }}

                  md={{
                    span: 8,
                    offset: 8
                  }}

                  lg={{
                    span: 8,
                    offset: 8,
                  }}
                  xl={{
                    span: 8,
                    offset: 8,
                  }}
                  xxl={{

                    span: 8,
                    offset: 8,
                  }}><h1 className={styles.headingsheader}>Reports</h1>

                </Col>
              </Row>



              <Row>

                <Col xs={{
                  span: 24,
                  offset: 0,
                }}

                  sm={{
                    span: 22,
                    offset: 1,
                  }}

                  md={{
                    span: 20,
                    offset: 2,
                  }}

                  lg={{
                    span: 16,
                    offset: 4,
                  }}
                  xl={{
                    span: 14,
                    offset: 5,
                  }}
                  xxl={{

                    span: 16,
                    offset: 4
                  }}>

                  <p className={styles.paraheader}>Forms such as invoices, order acknowledgments, purchase orders, receivables statements, payables checks, etc. Managed reports produced on a reoccurring basis.  Ad hoc reports that are usually one-time, “I need this information now” reports.  A new approach for many companies is to use intelligent reporting software as a front-end to leading ERP systems </p></Col>
              </Row>

            </div>

          </Row>


          {/* TabPane */}


          <div >
            <Tabs className={styles.mobilescreen1} tabPosition="left">


              {/* Accounting Reports */}


              <TabPane tab="Accounting Reports" key="1" >

                <Row className={styles.margintop1}>
                  <Col xs={{
                    span: 6,
                    offset: 0,
                  }}

                    sm={{
                      span: 20,
                      offset: 1,
                    }}

                    md={{
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 18,
                      offset: 0,
                    }}
                    xl={{
                      span: 18,
                      offset: 0,
                    }}
                    xxl={{

                      span: 20,
                      offset: 1,
                    }}>
                    <h3 className={styles.headings}>Accounting Reports</h3>
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
                      span: 19,
                      offset: 2,
                    }}

                    lg={{
                      span: 16,
                      offset: 3,
                    }}
                    xl={{
                      span: 16,
                      offset: 0,
                    }}
                    xxl={{

                      span: 14,
                      offset: 4,
                    }}>
                    <img className={styles.containers} src="/reportpage/pic1.png"></img>
                  </Col>

                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 18,
                      offset: 3,
                    }}

                    lg={{
                      span: 14,
                      offset: 4,
                    }}
                    xl={{
                      span: 16,
                      offset: 3,
                    }}
                    xxl={{

                      span: 12,
                      offset: 5,
                    }}>


                    <p className={styles.para1}>Accounting reports are periodic financial statements that outline a company's financial situation at a specific point in time or over a predetermined time period. The business activities and transactions are described. They are a collection of financial data derived from accounting records of a company.</p>

                  </Col>

                </Row>

              </TabPane>




              {/* Purchase Reports */}

              <TabPane tab="Purchase Reports" key="2">


                <Row className={styles.margintop2}>
                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 20,
                      offset: 1,
                    }}

                    md={{
                      span: 15,
                      offset: 4,
                    }}

                    lg={{
                      span: 15,
                      offset: 0,
                    }}
                    xl={{
                      span: 16,
                      offset: 0,
                    }}
                    xxl={{

                      span: 14,
                      offset: 0,
                    }}>
                    <h3 className={styles.headings}>Purchase Reports</h3>
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
                      span: 20,
                      offset: 0,
                    }}

                    lg={{
                      span: 18,
                      offset: 3,
                    }}
                    xl={{
                      span: 18,
                      offset: 0,
                    }}
                    xxl={{

                      span: 12,
                      offset: 5,
                    }}>
                    <img className={styles.containers} src="/reportpage/pic2.png"></img>
                  </Col>

                </Row>



                <Row>

                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 14,
                      offset: 5,
                    }}
                    xl={{
                      span: 14,
                      offset: 0,
                    }}
                    xxl={{

                      span: 12,
                      offset: 5,
                    }}>


                    <p className={styles.para1}>The interface is designed to offer statistical charts of the staff ratio by departments, age groups or job profile. In addition to employee management, they’ll also help you understand your resources better.</p>

                  </Col>

                </Row>

              </TabPane>



              {/* Inventory Reports */}


              <TabPane tab="Inventory Reports" key="3">



                <Row className={styles.margintop3}>
                  <Col xs={{
                    span: 20,
                    offset: 0,
                  }}

                    sm={{
                      span: 20,
                      offset: 0,
                    }}

                    md={{
                      span: 19,
                      offset: 4,
                    }}

                    lg={{
                      span: 19,
                      offset: 5,
                    }}
                    xl={{
                      span: 10,
                      offset: 10,
                    }}
                    xxl={{

                      span: 20,
                      offset: 3,
                    }}>
                    <h3 className={styles.headings}>Inventory Reports</h3>
                  </Col>
                </Row>

                <Row>


                  <Col xs={{
                    span: 0,
                    offset: 0,
                  }}

                    sm={{
                      span: 0,
                      offset: 0,
                    }}

                    md={{
                      span: 6,
                      offset: 0,
                    }}

                    lg={{
                      span: 6,
                      offset: 0,
                    }}
                    xl={{
                      span: 6,
                      offset: 0,
                    }}
                    xxl={{

                      span: 6,
                      offset: 0,
                    }}>

                    <img src="/logo1/vector15.svg"></img>
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
                      span: 13,
                      offset: 0,
                    }}

                    lg={{
                      span: 15,
                      offset: 0,
                    }}
                    xl={{
                      span: 15,
                      offset: 0,
                    }}
                    xxl={{

                      span: 12,
                      offset: 0,
                    }}>
                    <img className={styles.containers} src="/reportpage/pic3.png"></img>
                  </Col>
                </Row>

                <Row>
                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 20,
                      offset: 2,
                    }}

                    lg={{
                      span: 12,
                      offset: 9,
                    }}
                    xl={{
                      span: 12,
                      offset: 0,
                    }}
                    xxl={{

                      span: 12,
                      offset: 7,
                    }}>


                    <p className={styles.para1}>A retailer's current stock is outlined in an inventory report. It summarises information on the state and performance of inventory, including specifics like the amount of stock you have, the products that are selling the quickest,      category performance, and other statistics.  A physical or electronic report that lists the total amount of current inventory that a company has on hand is known as an inventory report.</p>


                  </Col>

                </Row>

              </TabPane>



              {/* POS Reports */}



              <TabPane tab=" POS Reports" key="4">

                <Row className={styles.margintop4}>

                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 20,
                      offset: 0,
                    }}

                    md={{
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 20,
                      offset: 1,
                    }}
                    xl={{
                      span: 19,
                      offset: 0,
                    }}
                    xxl={{

                      span: 19,
                      offset: 3,
                    }}>
                    <h3 className={styles.headings}>POS Reports</h3>
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
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 17,
                      offset: 2,
                    }}
                    xl={{
                      span: 19,
                      offset: 0,
                    }}
                    xxl={{

                      span: 13,
                      offset: 5,
                    }}>

                    <img className={styles.containers} src="/reportpage/pic4.png"></img>

                  </Col>


                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 20,
                      offset: 2,
                    }}

                    lg={{
                      span: 14,
                      offset: 4,
                    }}
                    xl={{
                      span: 16,
                      offset: 0,
                    }}
                    xxl={{

                      span: 13,
                      offset: 5,
                    }}>


                    <p className={styles.para1}> Point of sale POS reports are reports generated with the data from a point of sale system, including both software and hardware from multiple stores. We can track all the transactional data and in-store activities at the point of sale terminal, and that data is stored in a system for future analysis via POS reports.</p>


                  </Col>
                  ṇ
                </Row>

              </TabPane>




              {/* Reports */}


              <TabPane tab="Reports" key="5">
                <Row className={styles.margintop5}>
                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 20,
                      offset: 1,
                    }}

                    md={{
                      span: 13,
                      offset: 4,
                    }}

                    lg={{
                      span: 16,
                      offset: 0,
                    }}
                    xl={{
                      span: 16,
                      offset: 1,
                    }}
                    xxl={{

                      span: 9,
                      offset: 6,
                    }}>
                    <h3 className={styles.headings}> Reports</h3>
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
                      span: 20,
                      offset: 0,
                    }}

                    lg={{
                      span: 18,
                      offset: 3,
                    }}
                    xl={{
                      span: 18,
                      offset: 3,
                    }}
                    xxl={{

                      span: 12,
                      offset: 5,
                    }}>
                    <img className={styles.containers} src="/reportpage/pic5.png"></img>
                  </Col>

                </Row>



                <Row>

                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 14,
                      offset: 5,
                    }}
                    xl={{
                      span: 15,
                      offset: 0,
                    }}
                    xxl={{

                      span: 12,
                      offset: 5,
                    }}>


                    <p className={styles.para1}>A report is a written document that organises information for a particular audience and use. A report is a written document that offers relevant business data in an easily readable and ordered manner. Each report has a distinct target audience.

                    </p>

                    {/* <Space>
                <Button className={styles.buttonres5}>Learn More</Button>
              </Space> */}

                  </Col>

                </Row>
              </TabPane>




              {/* 
      Payroll Reports */}



              <TabPane tab=" Payroll Reports" key="6">

                <Row className={styles.margintop6}>

                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 20,
                      offset: 0,
                    }}

                    md={{
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 12,
                      offset: 0,
                    }}
                    xl={{
                      span: 10,
                      offset: 0,
                    }}
                    xxl={{

                      span: 11,
                      offset: 1,
                    }}>
                    <h3 className={styles.headings}>Payroll Reports</h3>
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
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 11,
                      offset: 2,
                    }}
                    xl={{
                      span: 12,
                      offset: 1,
                    }}
                    xxl={{

                      span: 12,
                      offset: 0,
                    }}>
                    <img className={styles.containers} src="/reportpage/pic5.png"></img>
                  </Col>




                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 8,
                      offset: 2,
                    }}
                    xl={{
                      span: 9,
                      offset: 1,
                    }}
                    xxl={{

                      span: 6,
                      offset: 2,
                    }}>


                    <p className={styles.para4}>
                      Employers can cross-reference financial information in a payroll report to confirm their tax responsibilities.Such details as pay scales, number of hours worked, overtime hours worked, taxes deducted from paychecks, employer tax payments, vacation balances, and more, could be included.
                    </p>
                    {/* 
  <Space>
    <Button className={styles.buttonres6}>Learn More</Button>
  </Space> */}

                  </Col>

                </Row>
              </TabPane>





              {/* Timesheets Reports */}


              <TabPane tab="Timesheets Reports" key="7">


                <Row className={styles.margintop7}>

                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 20,
                      offset: 0,
                    }}

                    md={{
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 18,
                      offset: 0,
                    }}
                    xl={{
                      span: 19,
                      offset: 0,
                    }}
                    xxl={{

                      span: 19,
                      offset: 3,
                    }}>
                    <h3 className={styles.headings}>Timesheets Reports</h3>
                  </Col>



                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 19,
                      offset: 2,
                    }}

                    lg={{
                      span: 16,
                      offset: 3,
                    }}
                    xl={{
                      span: 18,
                      offset: 0,
                    }}
                    xxl={{

                      span: 12,
                      offset: 6,
                    }}>


                    <p className={styles.para1}>You can generate and see a range of reports on the tasks completed and projects developed using timesheet reporting.
                      Reports for chargeable can also be produced. The Timesheet Report offers a wide range of reporting choices, including the ability to group and categorise,
                      n            while still displaying the traditional sheet view of daily hours spent.</p>


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
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 16,
                      offset: 3,
                    }}
                    xl={{
                      span: 16,
                      offset: 4,
                    }}
                    xxl={{

                      span: 12,
                      offset: 6,
                    }}>
                    <img className={styles.containers} src="/reportpage/pic7.png"></img>
                  </Col>

                </Row>
              </TabPane>



              {/* Sales Reports */}



              <TabPane tab="Sales Reports" key="8">

                <Row className={styles.margintop8}>
                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 20,
                      offset: 0,
                    }}

                    md={{
                      span: 16,
                      offset: 3,
                    }}

                    lg={{
                      span: 17,
                      offset: 0,
                    }}
                    xl={{
                      span: 17,
                      offset: 0,
                    }}
                    xxl={{

                      span: 20,
                      offset: 1,
                    }}>
                    <h3 className={styles.headings}>Sales Reports</h3>
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
                      span: 18,
                      offset: 2,
                    }}

                    lg={{
                      span: 18,
                      offset: 2,
                    }}
                    xl={{
                      span: 18,
                      offset: 0,
                    }}
                    xxl={{

                      span: 14,
                      offset: 4,
                    }}>
                    <img className={styles.containers} src="/reportpage/pic8.png"></img>
                  </Col>

                  <Col xs={{
                    span: 24,
                    offset: 0,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 20,
                      offset: 2,
                    }}

                    lg={{
                      span: 15,
                      offset: 4,
                    }}
                    xl={{
                      span: 14,
                      offset: 0,
                    }}
                    xxl={{

                      span: 13,
                      offset: 5,
                    }}>


                    <p className={styles.para1}>A sales report, also known as a sales analysis report, is a document that summarizes a business's sales activities.
                      This report typically includes information on sales volume, leads, new accounts, revenue and costs for a given period.
                      A sales report or sales analysis report is a document that shows trends impacting your sales operations within a specific period.</p>

                    {/* <Space>
                <Button className={styles.buttonres7}>Learn More</Button>
              </Space> */}

                  </Col>

                </Row>


              </TabPane>
            </Tabs>
          </div>







          {/* Mobile screen  */}


          <div className={styles.mobilescreen2}>

            <Row style={{ backgroundImage: "url('assets/background2.jpg')", backgroundSize: "Cover" }} >
              <div>

                <Row>


                  <Col

                    xs={{
                      span: 24,
                      offset: 0,
                    }}

                    sm={{
                      span: 20,
                      offset: 1,
                    }}

                    md={{
                      span: 12,
                      offset: 7,
                    }}

                    lg={{
                      span: 16,
                      offset: 0,
                    }}
                    xl={{
                      span: 24,
                      offset: 0,
                    }}
                    xxl={{

                      span: 24,
                      offset: 12,
                    }}><h1 className={styles.headingsheader}>Reports</h1>

                  </Col>
                </Row>



                <Row>

                  <Col xs={{
                    span: 20,
                    offset: 2,
                  }}

                    sm={{
                      span: 22,
                      offset: 0,
                    }}

                    md={{
                      span: 20,
                      offset: 2,
                    }}

                    lg={{
                      span: 24,
                      offset: 4,
                    }}
                    xl={{
                      span: 24,
                      offset: 8,
                    }}
                    xxl={{

                      span: 24,
                      offset: 12
                    }}>

                    <p className={styles.paraheader}>Forms such as invoices, order acknowledgments, purchase orders, receivables statements, payables checks, etc. Managed reports produced on a reoccurring basis.  Ad hoc reports that are usually one-time, “I need this information now” reports.  A new approach for many companies is to use intelligent reporting software as a front-end to leading ERP systems </p></Col>
                </Row>

              </div>

            </Row>


            {/* Accounting Reports */}


            <Row className={styles.margintop1}>
              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 1,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 20,
                  offset: 0,
                }}
                xl={{
                  span: 18,
                  offset: 0,
                }}
                xxl={{

                  span: 20,
                  offset: 0,
                }}>
                <h3 className={styles.headings}>Accounting Reports</h3>
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
                  span: 19,
                  offset: 2,
                }}

                lg={{
                  span: 16,
                  offset: 3,
                }}
                xl={{
                  span: 16,
                  offset: 0,
                }}
                xxl={{

                  span: 14,
                  offset: 4,
                }}>
                <img className={styles.containers} src="/reportpage/pic1.png"></img>
              </Col>

              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 18,
                  offset: 3,
                }}

                lg={{
                  span: 14,
                  offset: 4,
                }}
                xl={{
                  span: 13,
                  offset: 5,
                }}
                xxl={{

                  span: 12,
                  offset: 5,
                }}>


                <p className={styles.para1} > Accounting reports are periodic financial statements that outline a company's financial situation at a specific point in time or over a predetermined time period. The business activities and transactions are described. They are a collection of financial data derived from accounting records of a company.</p>

                {/* <Space>
                <Button className={styles.buttonres1}>Learn More</Button>
              </Space> */}

              </Col>

            </Row>








            {/* Purchase Reports */}




            <Row className={styles.margintop2}>
              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 1,
                }}

                md={{
                  span: 15,
                  offset: 4,
                }}

                lg={{
                  span: 15,
                  offset: 0,
                }}
                xl={{
                  span: 16,
                  offset: 0,
                }}
                xxl={{

                  span: 14,
                  offset: 0,
                }}>
                <h3 className={styles.headings}>Purchase Reports</h3>
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
                  span: 20,
                  offset: 0,
                }}

                lg={{
                  span: 18,
                  offset: 3,
                }}
                xl={{
                  span: 18,
                  offset: 0,
                }}
                xxl={{

                  span: 12,
                  offset: 0,
                }}>
                <img className={styles.containers} src="/reportpage/pic2.png"></img>
              </Col>

            </Row>



            <Row>

              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 14,
                  offset: 5,
                }}
                xl={{
                  span: 14,
                  offset: 0,
                }}
                xxl={{

                  span: 10,
                  offset: 6,
                }}>


                <p className={styles.para1}>The interface is designed to offer statistical charts of the staff ratio by departments, age groups or job profile. In addition to employee management, they’ll also help you understand your resources better.</p>

                {/* <Space>
                  <Button className={styles.buttonres2}>Learn More</Button>
                </Space */}
              </Col>

            </Row>





            {/* Inventory Reports */}



            <Row className={styles.margintop3}>
              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 0,
                }}

                md={{
                  span: 19,
                  offset: 4,
                }}

                lg={{
                  span: 19,
                  offset: 5,
                }}
                xl={{
                  span: 19,
                  offset: 0,
                }}
                xxl={{

                  span: 24,
                  offset: 1,
                }}>
                <h3 className={styles.headings}>Inventory Reports</h3>
              </Col>
            </Row>


            <Row>

              <Col xs={{
                span: 0,
                offset: 0,
              }}

                sm={{
                  span: 0,
                  offset: 0,
                }}

                md={{
                  span: 6,
                  offset: 0,
                }}

                lg={{
                  span: 6,
                  offset: 0,
                }}
                xl={{
                  span: 6,
                  offset: 0,
                }}
                xxl={{

                  span: 6,
                  offset: 0,
                }}>

                <img src="/assets/pic3.png"></img>
              </Col>





              <Col xs={{
                span: 22,
                offset: 1,
              }}

                sm={{
                  span: 20,
                  offset: 1,
                }}

                md={{
                  span: 13,
                  offset: 0,
                }}

                lg={{
                  span: 15,
                  offset: 0,
                }}
                xl={{
                  span: 15,
                  offset: 0,
                }}
                xxl={{

                  span: 12,
                  offset: 0,
                }}>
                <img className={styles.containers} src="/reportpage/pic3.png"></img>
              </Col>
            </Row>

            <Row>
              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 20,
                  offset: 2,
                }}

                lg={{
                  span: 12,
                  offset: 9,
                }}
                xl={{
                  span: 12,
                  offset: 0,
                }}
                xxl={{

                  span: 12,
                  offset: 0,
                }}>


                <p className={styles.para1}>A retailer's current stock is outlined in an inventory report. It summarises information on the state and performance of inventory, including specifics like the amount of stock you have, the products that are selling the quickest,      category performance, and other statistics.  A physical or electronic report that lists the total amount of current inventory that a company has on hand is known as an inventory report.</p>

                {/* <Space>
                <Button className={styles.buttonres3}>Learn More</Button>
              </Space> */}

              </Col>

            </Row>





            {/* PSO Reports */}



            <Row className={styles.margintop4}>

              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 0,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 22,
                  offset: 0,
                }}
                xl={{
                  span: 19,
                  offset: 0,
                }}
                xxl={{

                  span: 19,
                  offset: 2,
                }}>
                <h3 className={styles.headings}>PSO Reports</h3>
              </Col>

            </Row>



            <Row>

              <Col xs={{
                span: 22,
                offset: 1,
              }}

                sm={{
                  span: 20,
                  offset: 1,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 17,
                  offset: 2,
                }}
                xl={{
                  span: 19,
                  offset: 0,
                }}
                xxl={{

                  span: 13,
                  offset: 5,
                }}>
                <img className={styles.containers} src="/reportpage/pic4.png"></img>
              </Col>

              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 20,
                  offset: 2,
                }}

                lg={{
                  span: 14,
                  offset: 4,
                }}
                xl={{
                  span: 16,
                  offset: 0,
                }}
                xxl={{

                  span: 22,
                  offset: 1,
                }}>


                <p className={styles.para1}>Point of sale POS reports are reports generated with the data from a point of sale system, including both software and hardware from multiple stores. We can track all the transactional data and in-store activities at the point of sale terminal, and that data is stored in a system for future analysis via POS reports.</p>

                {/* <Space>
                <Button className={styles.buttonres4}>Learn More</Button>
              </Space> */}

              </Col>

            </Row>



            <Row className={styles.margintop5}>
              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 1,
                }}

                md={{
                  span: 13,
                  offset: 4,
                }}

                lg={{
                  span: 14,
                  offset: 0,
                }}
                xl={{
                  span: 16,
                  offset: 0,
                }}
                xxl={{

                  span: 9,
                  offset: 7,
                }}>
                <h3 className={styles.headings}> Reports</h3>
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
                  span: 20,
                  offset: 0,
                }}

                lg={{
                  span: 18,
                  offset: 3,
                }}
                xl={{
                  span: 18,
                  offset: 3,
                }}
                xxl={{

                  span: 12,
                  offset: 0,
                }}>
                <img className={styles.containers} src="/reportpage/pic5.png"></img>
              </Col>

            </Row>



            <Row>

              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 14,
                  offset: 5,
                }}
                xl={{
                  span: 15,
                  offset: 0,
                }}
                xxl={{

                  span: 12,
                  offset: 5,
                }}>


                <p className={styles.para1}>A report is a written document that organises information for a particular audience and use. A report is a written document that offers relevant business data in an easily readable and ordered manner. Each report has a distinct target audience.</p>

                {/* <Space>
                <Button className={styles.buttonres5}>Learn More</Button>
              </Space> */}

              </Col>

            </Row>



            {/* Reports */}



            <Row className={styles.margintop6}>
              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 1,
                }}

                md={{
                  span: 13,
                  offset: 4,
                }}

                lg={{
                  span: 14,
                  offset: 0,
                }}
                xl={{
                  span: 16,
                  offset: 0,
                }}
                xxl={{

                  span: 9,
                  offset: 7,
                }}>
                <h3 className={styles.headings}> Reports</h3>
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
                  span: 20,
                  offset: 0,
                }}

                lg={{
                  span: 18,
                  offset: 3,
                }}
                xl={{
                  span: 18,
                  offset: 3,
                }}
                xxl={{

                  span: 12,
                  offset: 0,
                }}>
                <img className={styles.containers} src="/reportpage/pic6.png"></img>
              </Col>

            </Row>



            <Row>

              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 14,
                  offset: 5,
                }}
                xl={{
                  span: 15,
                  offset: 0,
                }}
                xxl={{

                  span: 12,
                  offset: 5,
                }}>


                <p className={styles.para1}>The interface is designed to offer statistical charts of the staff ratio by departments, age groups or job profile. In addition to employee management, they’ll also help you understand your resources better.</p>

                {/* <Space>
                <Button className={styles.buttonres6}>Learn More</Button>
              </Space> */}

              </Col>

            </Row>





            {/* 
      Payroll Reports */}




            <Row className={styles.margintop6}>

              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 0,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 15,
                  offset: 0,
                }}
                xl={{
                  span: 10,
                  offset: 0,
                }}
                xxl={{

                  span: 14,
                  offset: 0,
                }}>
                <h3 className={styles.headings}>Payroll Reports</h3>
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
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 11,
                  offset: 2,
                }}
                xl={{
                  span: 12,
                  offset: 1,
                }}
                xxl={{

                  span: 12,
                  offset: 0,
                }}>
                <img className={styles.containers} src="/reportpage/pic6.png"></img>
              </Col>




              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 8,
                  offset: 2,
                }}
                xl={{
                  span: 9,
                  offset: 1,
                }}
                xxl={{

                  span: 6,
                  offset: 2,
                }}>


                <p className={styles.para1}>Employers can cross-reference financial information in a payroll report to confirm their tax responsibilities.Such details as pay scales, number of hours worked, overtime hours worked, taxes deducted from paychecks, employer tax payments, vacation balances, and more, could be included</p>
                {/*               
                <Space>
                  <Button className={styles.buttonres7}>Learn More</Button>
                </Space>
               */}
              </Col>

            </Row>



            {/* Timesheets Reports */}





            <Row className={styles.margintop7}>

              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 0,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 2,
                  offset: 0,
                }}
                xl={{
                  span: 19,
                  offset: 0,
                }}
                xxl={{

                  span: 19,
                  offset: 3,
                }}>
                <h3 className={styles.headings}>Timesheets Reports</h3>
              </Col>



              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 19,
                  offset: 2,
                }}

                lg={{
                  span: 16,
                  offset: 3,
                }}
                xl={{
                  span: 18,
                  offset: 0,
                }}
                xxl={{

                  span: 12,
                  offset: 6,
                }}>


                <p className={styles.para1}>Employers can cross-reference financial information in a payroll report to confirm their tax responsibilities.Such details as pay scales, number of hours worked, overtime hours worked, taxes deducted from paychecks, employer tax payments, vacation balances, and more, could be included.
                </p>

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
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 16,
                  offset: 3,
                }}
                xl={{
                  span: 16,
                  offset: 4,
                }}
                xxl={{

                  span: 12,
                  offset: 6,
                }}>
                <img className={styles.containers} src="/reportpage/pic.png"></img>
              </Col>


            </Row>




            {/* Sales Reports */}


            <Row className={styles.margintop8}>
              <Col xs={{
                span: 24,
                offset: 0,
              }}

                sm={{
                  span: 20,
                  offset: 2,
                }}

                md={{
                  span: 16,
                  offset: 3,
                }}

                lg={{
                  span: 22,
                  offset: 0,
                }}
                xl={{
                  span: 17,
                  offset: 0,
                }}
                xxl={{

                  span: 22,
                  offset: 0,
                }}>
                <h3 className={styles.headings}>Sales Reports</h3>


              </Col>
            </Row>




            <Row>

              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 19,
                  offset: 2,
                }}

                md={{
                  span: 18,
                  offset: 2,
                }}

                lg={{
                  span: 18,
                  offset: 2,
                }}
                xl={{
                  span: 18,
                  offset: 0,
                }}
                xxl={{

                  span: 14,
                  offset: 4,
                }}>
                <img className={styles.containers} src="/reportpage/pic8.png"></img>
              </Col>

              <Col xs={{
                span: 20,
                offset: 2,
              }}

                sm={{
                  span: 22,
                  offset: 0,
                }}

                md={{
                  span: 20,
                  offset: 2,
                }}

                lg={{
                  span: 15,
                  offset: 4,
                }}
                xl={{
                  span: 14,
                  offset: 0,
                }}
                xxl={{

                  span: 10,
                  offset: 6,
                }}>


                <p className={styles.para8}>A sales report, also known as a sales analysis report, is a document that summarizes a business's sales activities. This report typically includes information on sales volume, leads, new accounts, revenue and costs for a given period. A sales report or sales analysis report is a document that shows trends impacting your sales operations within a specific period.
                </p>
                {/* <Space>
                <Button className={styles.buttonres8}>Learn More</Button>
              </Space> */}

              </Col>

            </Row>


          </div>

        </div>

        <div>
          <Contactmanager />
        </div>

      </Layout>



    </>
  );
}

export default Reports;

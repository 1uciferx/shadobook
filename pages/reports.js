/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { Tabs } from "antd"; const { TabPane } = Tabs;
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, Space } from 'antd'
import { Anchor } from 'antd';
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import styles from "../styles/Reports.module.css";
import React from 'react';
import { Col, Row } from 'antd';
import { Breadcrumb } from 'antd';
import Contactmanager from "../components/contactmanager";
import { Layout as L } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const { Content } = L;

export const App = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);




function Reports() {
  return (
    <>

      <Layout>

        <div>

          <Row className={styles.mobilescreen1} style={{ backgroundImage: "url('assets/background14.jpg')", backgroundSize: "Cover", height: "450px" }} >
            <div>

              <Row>
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

                  <p className={styles.paraheader}>Shadobook CRM helps you with a thorough platform which enables you to generate extensive reports according to your requirements. The interface offers detailed report generation pertaining 
                    to the areas of sales, invoices, items, payments, credit notes, proposals, estimates,</p></Col>
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

                      span: 14,
                      offset: 4,
                    }}>


                    <p className={styles.para1}>
                      <li>
                         The following reports are among them:
                        
                      </li>
                      <br></br>
                      <li>
                      ➼ Business overview: gives a broad overview of the company.
                      </li>
                      <br></br>

                      <li>
                         Bookkeeping:
                      </li>
                      <br></br>
                      <li>
                      ➼ This offers reports like Account list, Balance Sheet Comparison, Balance Sheet, General Ledger, Journal, Profit and Loss Comparison, Profit and Loss, Account history, and more that are useful for keeping track of financial transactions.
                      </li>
                      <br></br>
                      <li>
                      Budget:
                      </li>
                      <br></br>
                      <li>
                      ➼ Reports like Budget Overview, Budget vs Actual, and Profit and Loss Budget Performance are used to track the amounts that were budgeted versus what was actually spent on various accounts. Sales tax contains reports like the Tax Detail Report, Tax Summary Report, and Tax Liability Report that assist in keeping track of taxes.
                      </li>
                      <br></br>
                      <li>
                      ➼ Who owes you: offers data like Accounts Receivable Aging Summary and Accounts Receivable Aging Detail that assist in tracking overdue sums for clients.
                      </li>
                      <br></br>
                      <li>
                      ➼Sales and customers: reports that aid in keeping track of sales and customer data are included.
                      </li>
                    </p>

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
                      span: 18,
                      offset: 3,
                    }}
                    xxl={{

                      span: 12,
                      offset: 5,
                    }}>


                    <p className={styles.para1}>
                      <li>
                         The report includes a table displaying the cost of import goods for each item
                      </li>
                      <br></br>

                      <li>

                        ➼   A PO voucher report is included, which provides details on the vouchers associated with purchase orders
                      </li>
                      <br></br>

                      <li>
                      ➼  A Purchase Order Report is included, which shows the details and status of all purchase orders
                      </li>
                      
                      <br></br>

                      <li>
                      ➼  A Purchase Invoices Report is included, which shows all the invoices issued for purchased goods
                      </li>
                      <br></br>
                      <li>
                      ➼  A Debit Note Report is included, which shows any debit notes issued for purchased goods
                      </li>
                      <br></br>
                      <li>
                      ➼   A Charts Based Report is included, which provides visual representations of purchase statistics
                      </li>
                      <br></br>
                      <li>
                      ➼  The report includes purchase statistics broken down by number of purchase orders
                      </li>
                      <br></br>
                      <li>
                      ➼ The report includes purchase statistics broken down by cost
                      </li>
                      <br></br>
                      <li>
                      ➼  The report provides a detailed overview of all aspects of the purchase process.
                      </li>
                    </p>

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
                      span: 15,
                      offset: 7,
                    }}
                    xxl={{

                      span: 12,
                      offset: 7,
                    }}>


                    <p className={styles.para1}>
                      <li>
                         The report is a Stock Summary Report, which provides an overview of the inventory levels and movements of various goods and commodities.
                      </li>
                      <br></br>
                      <li>
                      ➼  The report includes Inventory Analytics, which provides detailed information on the performance of the inventory.
                      </li>
                      <br></br>
                      <li>
                      ➼  The report includes an Inventory Valuation Report, which shows the value of the inventory at a specific point in time.
                      </li>
                      <br></br>
                      <li>
                      ➼ The report includes a Warranty period report, which provides information on the warranty period of the goods.
                      </li>
                      <br></br>
                      <li>
                      ➼ The report includes a warehouse name, commodities, various Goods, Packages and date.
                      </li>
                      <br></br>
                      <li>
                      ➼ The report is presented in tabular format, with columns for Order, Commodity Code, Commodity Name, Unit Name, Opening Stock, Import In Period, Export In Period, and Closing Stock. Each column contains data such as quantity and amount.
                      </li>
                      <br></br>
                      <li>
                      ➼ The report also includes a total row which summarize the data of all the rows.
                      </li>
                      <br></br>
                      <li>
                      ➼The report provides a detailed overview of the inventory levels, movement, and value of various goods and commodities over a specific period of time.
                      </li>
                     
                    </p>


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
                      offset: 2,
                    }}
                    xxl={{

                      span: 19,
                      offset: 2
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
                      span: 18,
                      offset: 2,
                    }}
                    xxl={{

                      span: 13,
                      offset: 5,
                    }}>


                    <p className={styles.para1}>
                    <li>

➼ The report is a Sales Report, which provides an overview of the sales performance of a company or organization.

</li>
<br></br>

<li>


➼ The report includes Trade discount application history, which provides information on any discounts applied to sales transactions
</li>
<br></br>
<li>


➼  The report includes a Charts Based Report, which provides visual representations of sales statistics.
</li>
<br></br>
<li>
➼  The report includes Sales statistics broken down by week, month, year, and stage.
</li>
<br></br>
<li>
➼  The report provides detailed information on sales performance over different time periods, and at different stages of the sales process.
</li>
<br></br>
<li>
➼  The report allows for easy analysis of sales trends, identifying areas of strength and weakness, and making data-driven decisions to improve sales performance.
</li>
<br></br>
<li>
➼ The report provides an overall picture of the sales performance of the company or organization, and can be used to make decisions about future sales strategies.
</li>
                    </p>


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
                      offset: 4,
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
                      span: 16,
                      offset: 4,
                    }}
                    xxl={{

                      span: 12,
                      offset: 5,
                    }}>


                    <p className={styles.para1}>
                      <li>
                        ➼    The report is presented in tabular format, which provides a clear and organized view of the data.
                      </li>
                      <br></br>
                      <li>


➼ The report includes Activity, which provides information on the actions or events that have taken place.
</li>
<br></br>
<li>
➼ The report includes Unaccepted assets, which provides information on assets that have not been approved or accepted.
</li>
<br></br>
<li>
➼  The report includes a Charts Based Report, which provides visual representations of the data.
</li>
<br></br>
<li>
➼  The report allows for easy analysis of activity and unaccepted assets, identifying areas of concern and making data-driven decisions to improve performance.
</li>
<br></br>
<li>
➼ The report provides an overall picture of the activity and assets of the organization, and can be used to make decisions about future strategies.
</li>
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
                    <img className={styles.containers} src="/reportpage/pic6.png"></img>
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
                    <li>

➼ The report comprises a Payroll report, which offers a summary of a company's or organization's payroll data

</li>
<br></br>

<li>


➼ The report contains a summary of the departments' revenue in the form of an income report.
</li>
<br></br>
<li>


➼The report includes a summary of the insurance expenses paid by the departments, which is included in the report.
</li>
<br></br>
<li>
➼ The report contains a charts-based report that presents data in a visual manner.
</li>
<br></br>
<li>
➼  The Payslip, a record containing information about an employee's pay and deductions, is included in the report.
</li>
<br></br>
<li>
➼  The department payslips, which display the payslips of workers in a certain department, are included in the report.
</li>
<br></br>
<li>
➼The report makes it simple to analyse payroll and income data, pinpoint problem areas, and take data-driven actions to boost performance.
</li>
                     
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
                      offset: 2,
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


                    <p className={styles.para1}>
                      <li>
                        ➼  You can generate and see a range of reports on the tasks completed and projects developed using timesheet reporting.</li>
                      <li>

                        <br></br>
                        ➼ Reports for chargeable can also be produced. The Timesheet Report offers a wide range of reporting choices, including the ability to group and categorise,
                        while still displaying the traditional sheet view of daily hours spent.
                      </li></p>


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
                      span: 18,
                      offset: 2,
                    }}
                    xxl={{

                      span: 14,
                      offset: 4,
                    }}>


                    <p className={styles.para1}>
                      <li>

                      Reports on annual leave: tracks and manages an employee's time off
                      </li>
                      <br></br>
                      <li>


                        ➼  Attendance reports: tracks an employee's attendance
                      </li>  
                      <br></br>
                      <li>
                      

                        ➼   Leave application reports: tracks and manages an employee's leave requests
                      </li>
                      <br></br>
                      <li>
                      

                        ➼  Check-in/out history reports: tracks an employee's check-in and check-out times
                      </li>
                      <br></br>
                      <li>
                      

                        ➼   Check-in/out progress reports: tracks an employee's location and movements
                      </li>
                      <br></br>
                      <li>
                      

                        ➼   Charts based reports: visual representation of data, such as check-in/out progress
                      </li>
                      
                      <br></br>
                      <li>
                      

                        ➼  Working hours statistics report: shows the total hours worked
                      </li>
                      <br></br>
                      <li>
                      

                        ➼  Leave by type report: shows the breakdown of leaves taken by different types
                      </li>
                      <br></br>
                      <li>
                      

                        ➼   Leave by department report: shows the breakdown of leaves taken by different departments
                      </li>
                      <br></br>
                      <li>
                      

                        ➼  Ratio of check-in/out by workplace report: shows the details of the number of check-ins and check-outs at different workplaces and the ratio of them.
                        </li>
                      
                      </p>

                    {/* <Space>
                <Button className={styles.buttonres7}>Learn More</Button>
              </Space> */}

                  </Col>

                </Row>


              </TabPane>
            </Tabs>
          </div>







          {/* Mobile screen */}


          <div className={styles.mobilescreen2}>

            <Row style={{ backgroundImage: "url('assets/background14.jpg')" }} >
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

                    <p className={styles.paraheader}>
                    <li>

                    Invoices Report: tracks and manages invoices sent to customers
</li>
<br></br>
<li>


  ➼  Items Report: tracks and manages items sold by the company
</li>  
<br></br>
<li>


  ➼  Receipts Received: tracks and manages the receipts received from customers
</li>
<br></br>
<li>


  ➼  Proposals Report: tracks and manages proposals sent to customers
</li>
<br></br>
<li>


  ➼   Estimates Report: tracks and manages estimates given to customers
</li>
<br></br>
<li>


  ➼   Customers Report: tracks and manages customer information
</li>

<br></br>
<li>


  ➼  Charts Based Report: visual representation of data, such as sales progress
</li>
<br></br>
<li>


  ➼ Total Income: shows the overall income of the company
</li>
<br></br>
<li>


  ➼  Payment Modes (Transactions) Report: shows the breakdown of payments made by different modes
</li>
<br></br>
<li>


  ➼ Total Value by Customer Groups Report: shows the total value of sales made to different customer groups.
  </li>

                       
                       </p></Col>
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


                <p className={styles.para1} > <li>
                          Accounting reports are periodic financial statements that outline a company's financial situation at a specific point in time or over a predetermined time period.

                      </li>
                      <br></br>

                      <li>
                        The business activities and transactions are described. They are a collection of financial data derived from accounting records of a company.
                      </li></p>

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


                <p className={styles.para1}>
                <li>
                         The interface is designed to offer statistical charts of the staff ratio by departments, age groups or job profile.
                      </li>
                      <br></br>

                      <li>

                           In addition to employee management, they’ll also help you understand your resources better.
                      </li></p>

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


                <p className={styles.para1}>

                  <li>

                          A retailer's current stock is outlined in an inventory report.

                      </li>
                      <br></br>

                      <li>


                          It summarises information on the state and performance of inventory, including specifics like the amount of stock you have, the products that are selling the quickest, category performance, and other statistics.
                      </li>
                      <br></br>
                      <li>


                         A physical or electronic report that lists the total amount of current inventory that a company has on hand is known as an inventory report.
                      </li></p>

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


                <p className={styles.para1}>
                <li>
                         Point of sale POS reports are reports generated with the data from a point of sale system, including both software and hardware from multiple stores.
                      </li>
                      <br></br>
                      <li>


                         We can track all the transactional data and in-store activities at the point of sale terminal, and that data is stored in a system for future analysis via POS reports.
                      </li>
                      </p>

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


                <p className={styles.para1}>
                <li>
                            A report is a written document that organises information for a particular audience and use.
                      </li>
                      <br></br>
                      <li>
                            A report is a written document that offers relevant business data in an easily readable and ordered manner.
                      </li>
                      <br></br>

                      <li>
                           Each report has a distinct target audience.
                      </li></p>

                {/* <Space>
                <Button className={styles.buttonres5}>Learn More</Button>
              </Space> */}

              </Col>

            </Row>


{/* 


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


                <p className={styles.para1}>
                <li>


   Employers can cross-reference financial information in a payroll report to confirm their tax responsibilities.
</li><br></br>
<li>


 Such details as pay scales, number of hours worked, overtime hours worked, taxes deducted from paychecks, employer tax payments, vacation balances, and more, could be included.
</li></p>
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


                <p className={styles.para1}>
                <li>
                          You can generate and see a range of reports on the tasks completed and projects developed using timesheet reporting.</li>
                      <li>

                        <br></br>
                         Reports for chargeable can also be produced. The Timesheet Report offers a wide range of reporting choices, including the ability to group and categorise,
                        while still displaying the traditional sheet view of daily hours spent.
                      </li>
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
                <img className={styles.containers} src="/reportpage/pic7.png"></img>
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


                <p className={styles.para1}>
                <li>

   A sales report, also known as a sales analysis report, is a document that summarizes a business's sales activities.
</li>
<br></br>
<li>


  This report typically includes information on sales volume, leads, new accounts, revenue and costs for a given period.
</li>
<li>
<br></br>

  A sales report or sales analysis report is a document that shows trends impacting your sales operations within a specific period.
</li>
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

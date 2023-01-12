/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "../components/layout/Layout";
import { Button, Space } from 'antd'
import Contactmanager from "../components/contactmanager";
import styles from "../styles/HrPayroll.module.css";
import { Col, Row } from 'antd';
import { Breadcrumb } from 'antd';
import { Layout as L} from 'antd';

const { Content} = L;


function HrPayroll() {

  return (
    <>
      <Layout>

      <Row  >
          <Col className={styles.breasdcrumb}
          xs={{
            span: 20,
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
                <Breadcrumb.Item style={{ fontWeight: "bold"}}>Index</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="" style={{ fontWeight: "bold"}}>Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="" style={{ fontWeight: "bold"}}>Manufacturing</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
        </Col>
        </Row>



     {/* Hr Payroll */}


        <Row>
          <Col

            xs={{
              span: 23,
              offset: 0,
            }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 10,
              offset: 2,
            }}

            lg={{
              span: 10,
              offset: 1,
            }}
            xl={{
              span: 8,
              offset: 2,
            }}
            xxl={{

              span: 8,
              offset: 3,
            }}>   <h1 className={styles.headingsheader}>Hr Payroll</h1>

            <p className={styles.paraheader}>The main function of human resources is to take care of employee relations, while the payroll function deals with the financial compensation of those employees 
         and the process by which they get paid. These two departments have distinct responsibilities in an organization, however they do have areas where they overlap.</p>



          </Col>

          <Col xs={{
            span: 10,
            offset: 6,
          }}

            sm={{
              span: 10,
              offset: 8,
            }}

            md={{
              span: 7,
              offset: 4,
            }}

            lg={{
              span: 8,
              offset: 3,
            }}
            xl={{
              span: 8,
              offset: 4,
            }}
            xxl={{

              span: 8,
              offset: 2,
            }}>
            <img className={styles.box} src="/logo1/gif1.gif"></img>
          </Col>

        </Row>





        {/* Employees */}


        <Row className={styles.margintop}>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 10,
              offset: 2,
            }}

            lg={{
              span: 14,
              offset: 1,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 13,
              offset: 2,
            }}>
            <h3 className={styles.headings}>Employees</h3>
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
              span: 10,
              offset: 0,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 13,
              offset: 0,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic1.png"></img>
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
              span: 10,
              offset: 1,
            }}

            lg={{
              span: 9,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 6,
              offset: 1,
            }}>


            <p className={styles.para1}>In HR, the term "payroll" refers to the many employee evaluations that HR does and which in turn affect the way payroll is computed. 
        Software used by automated payroll systems takes into account evaluations such as attendance, leaves, shifts, expenses, etc.</p>


            {/* <Button className={styles.buttonres1}>Learn More</Button> */}
          </Col>

        </Row>





        {/* Attendance */}


        <Row className={styles.margintop}>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 7,
              offset: 13,
            }}

            lg={{
              span: 7,
              offset: 0,
            }}
            xl={{
              span: 6,
              offset: 0,
            }}
            xxl={{

              span: 15,
              offset: 9,
            }}>
            <h3 className={styles.headings}>Attendance</h3>
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
              span: 10,
              offset: 2,
            }}

            lg={{
              span: 8,
              offset: 2,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 8,
              offset: 2,
            }}>


            <p className={styles.para1}>The basis for payroll is a worker's attendance records. 
         The Time-Attendance terminal that is positioned at the entrance and exit of the building generates this data by keeping track of biometric and RFID card usage.
         These time-attendance terminals check valid identification (fingerprint, card, face, etc.)

</p>

            {/* <Space>
              <Button className={styles.buttonres2}>Learn More</Button>
            </Space> */}

          </Col>



          <Col className={styles.margintopimg} xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 19,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 1,
            }}

            lg={{
              span: 12,
              offset: 1,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 10,
              offset: 0,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic2.png"></img>
          </Col>

        </Row>




        {/* Comission */}

        <Row className={styles.margintop}>
          <Col xs={{
           span: 20,
           offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 1,
            }}>
            <h3 className={styles.headings}>Comission</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 19,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 0,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 10,
              offset: 2,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic3.png"></img>
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
              span: 10,
              offset: 1,
            }}

            lg={{
              span: 9,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 8,
              offset: 1,
            }}>


            <p className={styles.para1}> The commission is an amount of money paid by an employer as a fee or percentage to an employee for a specific task or for bringing new business by selling goods or services
          of the company. Sometimes it is also referred to as sales commissions or incentives.

</p>

            {/* <Space>
              <Button className={styles.buttonres3}>Learn More</Button>
            </Space> */}

          </Col>

        </Row>





        {/* 
          Deductions */}



        <Row className={styles.margintop}>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 1,
            }}

            md={{
              span: 7,
              offset: 9,
            }}

            lg={{
              span: 12,
              offset: 10,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 15,
              offset: 9,
            }}>
            <h3 className={styles.headings}>Deductions</h3>
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
              span: 0,
              offset: 0,
            }}

            lg={{
              span: 6,
              offset: 2,
            }}
            xl={{
              span: 6,
              offset: 0,
            }}
            xxl={{

              span: 6,
              offset: 0,
            }}>

            <img className={styles.logo} src="/logo1/vector12.svg"></img>
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
              span: 12,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 0,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic1.png"></img>
          </Col>
        </Row>


        <Row>
          <Col xs={{
           span: 20,
           offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 19,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 10,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 10,
            }}>


            <p className={styles.para1}>Deductions or payroll deductions is the amount removed or deducted from the paycheck of the employee as tax and for other purposes. 
         The most common form of payroll deductions includes payroll withholdings, payroll taxes, benefits deductions and wage garnishments.
         Payroll deductions are amounts employers take out of an employee's paycheck each pay period.</p>
{/* 
            <Space>
              <Button className={styles.buttonres4}>Learn More</Button>
            </Space> */}

          </Col>

        </Row>





        {/* Bonus Kpi */}


        <Row className={styles.margintop}>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 1,
            }}

            md={{
              span: 10,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 13,
              offset: 1,
            }}>
            <h3 className={styles.headings}>Bonus Kpi</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 19,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 0,
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

              span: 12,
              offset: 0,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic1.png"></img>
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
              span: 10,
              offset: 1,
            }}

            lg={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{

              span: 8,
              offset: 0,
            }}>


            <p className={styles.para1}>Payroll key performance indicators (KPIs) are techniques to gauge how well a company's payroll system is working because it might have an effect on the bottom line.
         KPIs are designed to aid in the development of a payroll system that is more efficient.

</p>

            {/* <Space>
              <Button className={styles.buttonres5}>Learn More</Button>
            </Space> */}

          </Col>

        </Row>





        {/* Insurance */}


        <Row className={styles.margintop}>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 10,
              offset: 7,
            }}>
            <h3 className={styles.headings}>Insurance</h3>
          </Col>
        </Row>

        <Row>


          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 19,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 0,
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

              span: 14,
              offset: 5,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic1.png"></img>
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
              span: 10,
              offset: 1,
            }}

            lg={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{

              span: 14,
              offset: 5,
            }}>


            <p className={styles.para1}>An insurance policy called payroll insurance covers unanticipated errors in payroll that occur during business operations.
          Whether it is through their income, perks, taxes, or remittances, as a business owner you have several responsibilities to keep your employees safe.</p>

            {/* <Space>
              <Button className={styles.buttonres6}>Learn More</Button>
            </Space> */}

          </Col>

        </Row>






        {/* Payslip */}




        <Row className={styles.margintop}>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 13,
              offset: 0,
            }}>
            <h3 className={styles.headings}>Payslip</h3>
          </Col>
        </Row>



        <Row>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 0,
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

              span: 12,
              offset: 0,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic1.png"></img>
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
              span: 10,
              offset: 1,
            }}

            lg={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{

              span: 8,
              offset: 0,
            }}>


            <p className={styles.para1}>Employees get a wage slip, often known as a payslip, from their employers each month. 
        A salary slip includes a thorough summary of an employee's pay and deductions for a specific time period. The employees may receive a hard copy of this document in the mail.
        An important HR document or record that contains details on every facet of an employee's salary is known as a payslip or salary slip. Every month, the employee receives their payslips.</p>

            {/* <Space>
              <Button className={styles.buttonres7}>Learn More</Button>
            </Space> */}

          </Col>

        </Row>




        {/* Payslip Templates */}



        <Row className={styles.margintop}>
          <Col xs={{
           span: 20,
           offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 9,
              offset: 13,
            }}

            lg={{
              span: 12,
              offset: 0,
            }}
            xl={{
              span: 14,
              offset: 0,
            }}
            xxl={{

              span: 8,
              offset: 8,
            }}>
            <h3 className={styles.headings}>Payslip Templates</h3>
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
              span: 10,
              offset: 0,
            }}

            lg={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 14,
              offset: 5,
            }}>


            <p className={styles.para1}>An excel payslip template is a document that contains all the information about the payment that is due to an employee for work completed within a specific time frame.
         It contains information on overtime, taxes, perks, and base salary.</p>

            {/* <Space>
              <Button className={styles.buttonres8}>Learn More</Button>
            </Space> */}

          </Col>


          <Col className={styles.margintopimg} xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 1,
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

              span: 14,
              offset: 5,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic1.png"></img>
          </Col>

        </Row>





        {/* Income Taxes */}


        <Row className={styles.margintop}>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 12,
              offset: 1,
            }}

            lg={{
              span: 12,
              offset: 1,
            }}
            xl={{
              span: 11,
              offset: 0,
            }}
            xxl={{

              span: 11,
              offset: 2,
            }}>
            <h3 className={styles.headings}>Income Taxes</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 0,
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

              span: 12,
              offset: 0,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic1.png"></img>
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
              span: 10,
              offset: 1,
            }}

            lg={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 1,
            }}
            xxl={{

              span: 8,
              offset: 0,
            }}>


            <p className={styles.para1}>The tax that is deducted, assessed, or imposed on the employer's paycheck is known as payroll tax.
          This will include pay, gross salary, benefits, and any other type of compensation given to the workers. The tax withheld, billed, or imposed
          on an employer's paycheck is known as payroll tax.</p>

            {/* <Space>
              <Button className={styles.buttonres9}>Learn More</Button>
            </Space> */}

          </Col>

        </Row>




        {/* Settings */}


        <Row className={styles.margintop}>
          <Col xs={{
           span: 20,
           offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 10,
              offset: 0,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 14,
              offset: 0,
            }}
            xxl={{

              span: 9,
              offset: 8,
            }}>
            <h3 className={styles.headings}>Settings</h3>
          </Col>
        </Row>




        <Row className={styles.marginbottomfooter}>

          <Col className={styles.margintopimg} xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
            }}

            md={{
              span: 10,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 10,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 7,
            }}>
            <img className={styles.containers} src="/hrpayroll/pic1.png"></img>
          </Col>


          
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 22,
              offset: 2,
            }}

            md={{
              span: 10,
              offset: 1,
            }}

            lg={{
              span: 8,
              offset: 0,
            }}
            xl={{
              span: 10,
              offset: 2,
            }}
            xxl={{

              span: 10,
              offset: 8,
            }}>


            <p className={styles.para10}>To tailor your paycheck to your company's needs and those of your employees, go to Payroll Settings. 
         Changes can be made to the liability and expenditure accounts as well as the bank account that is used for batch payments to employees under the Organisation tab.</p>

            {/* <Space>
              <Button className={styles.buttonres10}>Learn More</Button>
            </Space> */}

          </Col>

        </Row>

<div>
  <Contactmanager/>
</div>

      </Layout>




    </>
  );
}

export default HrPayroll;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "../components/layout/Layout";
import { Button, Space } from 'antd'
import Contactmanager from "../components/contactmanager";
import styles from "../styles/Hrpayroll.module.css";
import { Col, Row } from 'antd';
import { Breadcrumb } from 'antd';
import { Layout as L} from 'antd';

const { Content } = L;


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
                <Breadcrumb.Item >Index</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/#" >Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="#" >Hr Payroll</a>
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
              span: 20,
              offset: 2,
            }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 11,
              offset: 2,
            }}

            lg={{
              span: 11,
              offset: 2,
            }}
            xl={{
              span: 10,
              offset: 2,
            }}
            xxl={{

              span: 10,
              offset: 2,
            }}>   <h1 className={styles.headingsheader}>Hr Payroll</h1>

            <p className={styles.paraheader}>
            Shadobooks CRM offers hassle-free and seamless employee management with an easy-to-use HR Payroll interface. Be it your employee management, processing payrolls, calculating deductions, commissions or bonuses, the platform offers all of these operations under one roof.</p>



          </Col>

          <Col xs={{
            span: 10,
            offset: 8,
          }}

            sm={{
              span: 10,
              offset: 8,
            }}

            md={{
              span: 8,
              offset: 1,
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


            <p className={styles.para1}>
              <li>
              	Keeping accurate and current records of employee information, including personal details, job titles, and bank account.
              </li>
              <br></br>
              <li>

             
              	You can receive a particular employee information by entering their name, department, role, and date of hire, from the list of employees.
        </li>
        </p>


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
              span: 5,
              offset: 15,
            }}

            lg={{
              span: 7,
              offset: 0,
            }}
            xl={{
              span: 6,
              offset: 15,
            }}
            xxl={{

              span: 15,
              offset: 8,
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


            <p className={styles.para1}>
              <li>

              	ShadobooksERP allows for monitoring employee attendance, including by HR code and by month. 
              </li>
              <br></br>

              <li>

           
              It also provides the ability to update an employee's leave information, including the number of leaves taken, as well as paid and unpaid leaves.
         </li>
         <br></br>

         <li>

         	You can receive a particular employee attendance information by entering their name, department, role, and date of hire, from the list of employee’s attendance.
         </li>
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
              offset: 1,
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


            <p className={styles.para1}> 
            <li>
            	In ShadobooksERP the commission plan includes by setting commission rates, sales targets, and performance metrics.
          </li>
          <br></br>
          <li>

         
          Keeping track of commission earned by employees, including commission payments and commissions earned per sale.
          </li>

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
            <img className={styles.containers} src="/hrpayroll/pic4.png"></img>
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


            <p className={styles.para1}>
              <li>
              Our detection sub-module automatically calculates deductions such as taxes and other deductions from employees' salaries.
              </li>
              <br></br>

         <li>
         	The detection sub-module page includes, employee number, employee name and department name.
       </li>

       <br></br>
       <li>

         Payroll deductions are amounts employers take out of an employee's paycheck each pay period.
         </li></p>
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
              offset: 1,
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
            <img className={styles.containers} src="/hrpayroll/pic5.png"></img>
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


            <p className={styles.para1}>
              <li>
                
              	ShadobooksERP's bonus KPI page allows HR to enter a bonus for their employees.
              </li>
              <br></br>

              <li>

             
              	You can receive a particular employee information by entering their name, department, and hire date in order to give bonuses.


             </li>

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
              offset: 1,
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
            <img className={styles.containers} src="/hrpayroll/pic6.png"></img>
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


            <p className={styles.para1}>
              
              <li>

              	ShadobooksERP assists HR in maintaining insurance information for employees.
              </li>
              <br></br>

              <li>

             
              	Generating reports on insurance for employees by including employee number, employee name and department name.


          </li>
          </p>

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
              offset: 1,
            }}
            xxl={{

              span: 13,
              offset: 1,
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
            <img className={styles.containers} src="/hrpayroll/pic7.png"></img>
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


            <p className={styles.para1}>
              <li>
              	Payslip Management: Assisting HR in maintaining and tracking employee payslips information.
              </li>
              <br></br>
              <li>

              	Payslip Creation: Allowing HR to create new payslips by entering employee name and payment month details.
              </li>
              <br></br>

              <li>
              Payslip Viewing: Providing a home page for HR to view newly created payslips.

              </li>
            
        </p>

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
              offset: 11,
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
              offset: 7,
            }}>


            <p className={styles.para1}>
              <li>
              	Allowing HR to create new payslip templates by clicking the add button.
                </li>
                <br></br>
                <li>
                	Allowing HR to enter template name, department name, role, staff and except for staff details.
                </li>

                <br></br>
                <li>
                	Providing a home page for HR to view newly created payslip templates.


                </li>
        </p>

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
            <img className={styles.containers} src="/hrpayroll/pic8.png"></img>
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
            <img className={styles.containers} src="/hrpayroll/pic9.png"></img>
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


            <p className={styles.para1}>
              <li>
              ShadobooksERP enables management of income taxes by allowing the setting of tax for the year, income taxes, department name, and employee name.
                </li>
                <br></br>
                <li>
                	You can receive a particular employee tax by entering their name, department, role, from the list of employee’s taxes.



                </li>
                
          </p>

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
              span: 8,
              offset: 3,
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
            <img className={styles.containers} src="/hrpayroll/pic10.png"></img>
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
              offset: 1,
            }}
            xxl={{

              span: 10,
              offset: 8,
            }}>


            <p className={styles.para1}>
            Prior to managing HR payroll, the following details must be entered.
            <br></br>
            <br></br>
               
             
                <li>
                Payroll Columns,	
                </li>

                <br></br>
                <li>
                	Data Integration	
                </li>

                <br></br>
                <li>
                	Permissions	
                </li>
                <br></br>
                <li>
              Income Tax Rates,and Rebates
                </li>
                <br></br>
                <li>
                	Earnings List,	Salary Detection List and 	Insurance List

                </li>
                
         </p>

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

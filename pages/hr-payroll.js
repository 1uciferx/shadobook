/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});
function Home() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  return (
    <>
      {/* <Link href="/#">
                <a>Link</a></Link>
            </Link> */}
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-head-image" style={{ background: "url('assets/background5.jpg')" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1  style={{color:"white"}} className="text-display-2">
                    Hr Payroll
                  </h1>
                  <p style={{color:"white"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Shadobooks CRM offers hassle-free and seamless employee management with an easy-to-use HR Payroll interface. Be it your employee management, processing payrolls, calculating deductions, commissions or bonuses, the platform offers all of these operations under one roof.
                  </p>

                </div>
                <div className="col-lg-5 d-none d-xl-block">
                  <div className="">

                    <img style={{ bottom: "140px" }} className="img" alt="Agon" src="logo1/vector20.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">


              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>




          <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Employees
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <li>
              	Keeping accurate and current records of employee information, including personal details, job titles, and bank account.
              </li>
              <br></br>
              <li>

             
              	You can receive a particular employee information by entering their name, department, role, and date of hire, from the list of employees.
        </li>

                  </p>

                </div>

                <div className="col-lg-6 col-sm-12">
                  <img  className="bdrd-16 img-responsive mt-80" src="/reportpage/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>






          <section className="section-box">
            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <img  className="bdrd-16 img-responsive mt-200" src="/reportpage/pic2.png" alt="Agon" />
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Attendance
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
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

                </div>

              </div>
            </div>







            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Comission
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <li>
            	In ShadobooksERP the commission plan includes by setting commission rates, sales targets, and performance metrics.
          </li>
          <br></br>
          <li>

         
          Keeping track of commission earned by employees, including commission payments and commissions earned per sale.
          </li>

                  </p>

                </div>

                <div className="col-lg-6 col-sm-12">
                  <img  className="bdrd-16 img-responsive mt-100" src="/reportpage/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>





          
            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <img  className="bdrd-16 img-responsive mt-150" src="/reportpage/pic2.png" alt="Agon" />
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Deductions
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">

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
         </li>

                  </p>

                </div>

              </div>
            </div>







            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Bonus Kpi
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-30 pr-40">
                  <li>
                
              	ShadobooksERP's bonus KPI page allows HR to enter a bonus for their employees.
              </li>
              <br></br>

              <li>

             
              	You can receive a particular employee information by entering their name, department, and hire date in order to give bonuses.


             </li>

                  </p>

                </div>





                <div className="col-lg-6 col-sm-12 mt-100">
                  <img  className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>



            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-6 col-sm-12 mt-50">
                  <img className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Insurance
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                   
              <li>

ShadobooksERP assists HR in maintaining insurance information for employees.
</li>
<br></br>

<li>


Generating reports on insurance for employees by including employee number, employee name and department name.


</li>

                  </p>

                </div>

              </div>
            </div>










            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Payslip
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
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

                </div>

                <div className="col-lg-6 col-sm-12 mt-130">
                  <img className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>






            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-6 col-sm-12 mt-190">
                  <img  className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Payslip Templates 
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
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

                </div>

              </div>
            </div>

          </section>






          <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Income Taxes
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <li>
              ShadobooksERP enables management of income taxes by allowing the setting of tax for the year, income taxes, department name, and employee name.
                </li>
                <br></br>
                <li>
                	You can receive a particular employee tax by entering their name, department, role, from the list of employee’s taxes.



                </li>

                  </p>

                </div>

                <div className="col-lg-6 col-sm-12 mt-130">
                  <img  className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>








            <div style = {{ marginBottom:"100px"}} className="container mt-100">
              <div className="row">
                <div className="col-lg-6 col-sm-12 mt-150">
                  <img  className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Settings
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  Prior to managing HR payroll, the following details must be entered.
            <br></br>
            <br></br>
               
             
                <li>
                Payroll Columns,		Data Integration and  	Permissions	
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

                </div>

              </div>
            </div>
       </section>






      </Layout>

    </>
  )
}

export default Home;
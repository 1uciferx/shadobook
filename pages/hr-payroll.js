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

                  <h3 className="text-heading-2 mt-0">
                  Employees
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40 ">
                    <p>
                 
                  ➟ 	Keeping accurate and current records of employee information, including personal details, job titles, and bank account.
              </p>
              <br></br>
              <p>

             
              ➟ 	You can receive a particular employee information by entering their name, department, role, and date of hire, from the list of employees.
        </p>

                 </p>

                </div>

                <div className="col-lg-6 col-sm-12">
                  <img  className="bdrd-16 img-responsive mt-90" src="/reportpage/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>






          <section className="section-box">
            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <img  className="bdrd-16 img-responsive mt-150" src="/reportpage/pic2.png" alt="Agon" />
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-2 mt-30">
                  Attendance
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <p>

                  ➟ 	ShadobooksERP allows for monitoring employee attendance, including by HR code and by month. 
              </p>
              <br></br>

              <p>

           
              ➟   It also provides the ability to update an employee's leave information, including the number of leaves taken, as well as paid and unpaid leaves.
         </p>
         <br></br>

         <p>

        ➟   	You can receive a particular employee attendance information by entering their name, department, role, and date of hire, from the list of employee’s attendance.
         </p>

                  </p>

                </div>

              </div>
            </div>







            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-2 mt-30">
                  Commission
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <p>
                  ➟ 	In ShadobooksERP the commission plan includes by setting commission rates, sales targets, and performance metrics.
          </p>
          <br></br>
          <p>

         
          ➟  Keeping track of commission earned by employees, including commission payments and commissions earned per sale.
          </p>

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

                  <h3 className="text-heading-2 mt-30">
                  Deductions
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">

                     <p>
                     ➟   Our detection sub-module automatically calculates deductions such as taxes and other deductions from employees' salaries.
              </p>
              <br></br>

         <p>
         ➟   	The detection sub-module page includes, employee number, employee name and department name.
       </p>

       <br></br>
       <p>

       ➟   Payroll deductions are amounts employers take out of an employee's paycheck each pay period.
         </p>

                  </p>

                </div>

              </div>
            </div>







            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-2 mt-30">
                  Bonus Kpi
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-30 pr-40">
                  <p>
                
                  ➟  	ShadobooksERP's bonus KPI page allows HR to enter a bonus for their employees.
              </p>
              <br></br>

              <p>

             
              ➟ 	You can receive a particular employee information by entering their name, department, and hire date in order to give bonuses.


             </p>

                  </p>

                </div>





                <div className="col-lg-6 col-sm-12 mt-100">
                  <img  className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>




            {/* Insurance */}

            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-6 col-sm-12 mt-50">
                  <img className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Insurance
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                   
              <p>

              ➟ ShadobooksERP assists HR in maintaining insurance information for employees.
</p>
<br></br>

<p>


➟ Generating reports on insurance for employees by including employee number, employee name and department name.


</p>

                  </p>

                </div>

              </div>
            </div>







  {/* Payslip */}


            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-2 mt-30">
                  Payslip
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <p>
                  ➟ 	Payslip Management: Assisting HR in maintaining and tracking employee payslips information.
              </p>
              <br></br>
              <p>

              ➟ 	Payslip Creation: Allowing HR to create new payslips by entering employee name and payment month details.
              </p>
              <br></br>

              <p>
              ➟   Payslip Viewing: Providing a home page for HR to view newly created payslips.

              </p>
            
                  </p>

                </div>

                <div className="col-lg-6 col-sm-12 mt-130">
                  <img className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>






            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-6 col-sm-12 mt-100">
                  <img  className="bdrd-16 img-responsive" src="/reportpage/pic2.png" alt="Agon" />
                </div>
                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-2 mt-30">
                  Payslip Templates 
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <p>
                  ➟ 	Allowing HR to create new payslip templates by clicking the add button.
                </p>
                <br></br>
                <p>
                	Allowing HR to enter template name, department name, role, staff and except for staff details.
                  ➟  </p>

                <br></br>
                <li>
                ➟  	Providing a home page for HR to view newly created payslip templates.


                </li>

                  </p>

                </div>

              </div>
            </div>

          </section>






          <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-2 mt-30">
                  Income Taxes
                  </h3>
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <p>
                  ➟   ShadobooksERP enables management of income taxes by allowing the setting of tax for the year, income taxes, department name, and employee name.
                </p>
                <br></br>
                <p>
                ➟   	You can receive a particular employee tax by entering their name, department, role, from the list of employee’s taxes.



                </p>

                  </p>

                </div>

                <div className="col-lg-6 col-sm-12 mt-100">
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
                  <p style={{textAlign:"justify"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  ➟    Prior to managing HR payroll, the following details must be entered.
            <br></br>
            <br></br>
               
             
                <p>
                ➟   Payroll Columns,		Data Integration and  	Permissions	
                </p>

                <br></br>
                <p>
                ➟  Income Tax Rates,and Rebates
                </p>
                <br></br>
                <p>
                ➟  	Earnings List,	Salary Detection List and 	Insurance List

                </p>
                
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
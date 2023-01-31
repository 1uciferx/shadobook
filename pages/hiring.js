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
               
            <div className="section-box">

            <section className="section-box">
        
 <div className="banner-hero banner-head-image" style={{ background: "url('assets/background16.jpg')" }}>


            <div className="container">
              <div  className="row">
                <div className="">
                  <h1 style={{textAlign:"center",color:"white"}} className="text-display-2">
               Hiring
                  </h1>
                  <p style={{textAlign:"center",color:"white"}} className="text-body-lead-large color-gray-500 mt-40 pr-0">
                  ShadobooksERP Hiring features helps businesses to streamline their recruitment process, providing them with the tools to manage and track candidates, schedule interviews, and make hiring decisions more efficiently. The hiring module can include features such as job postings, applicant tracking, and candidate management.
                  </p>
                  
                </div>
                <div className="col-lg-5 d-none d-xl-block">
                  
                </div>
              </div>
            </div>
          </div>
        </section>






</div>


                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bg-5 bdrd-58  pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                                    <h2 className="text-heading-1 color-gray-900">
                                    Dashboard 
                                    </h2>
                                   
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            
                             
       
        
            
                <div className="bg-5 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                      
                        <p >
                        <li>
                ShadobooksERP offer HR management tools for tracking employee information, including hiring and onboarding processes.
              </li>

            <br></br>

             
              <li>
              With ShadobooksERP, you have the ability to oversee job listings, recruitment, candidate selection, interview sessions, and assess the performance of new hires.
              </li>
              <br></br>
              <li>
              The hiring dashboard can help streamline and simplify the recruitment process, making it easier to find and hire the best candidates.
              </li>
        
             

                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                     

                        <img  className="img-responsive mt-50" src="/hiring/pic1.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

         
   
                      
                  

          <div className="container mt-120">
                        <div className="bg-2 bdrd-48  pb-30">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                                    <h2 className="text-heading-1 color-gray-900">
                                    Campaign 
                                    </h2>
                                   
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            
                             
          <div className="container">
        
            
                <div className="bg-2 panel-box ">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized ">
                      
                        <p >
                        <li>
                 Quick and easy overview of the recruitment campaign, including the campaign's name, the position, the type of employment, the department, the number of positions, and the current status of the campaign.
              </li>
              <br></br>
              <li>
              Help to identify the campaign, the position, the recruitment process and the current status of the recruitment campaign.
              </li>
              <br></br>
              <li>
              Can be used to filter and search for specific campaigns, positions and department
              </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                   
              


                        <img className="img-responsive mt-50 " src="/hiring/pic2.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>




                   <div className="container mt-120">
                        <div className="bg-4 bdrd-58  pb-30">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                                    <h2 className="text-heading-1 color-gray-900">
                                    Candidate Profile
                                    </h2>
                                   
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            
                             
          <div className="container">
        
            
                <div className="bg-4 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                      
                        <p >
                        <li>
                  Track and organize candidate information using unique identifier (Candidate code)
                  </li>
                  <br></br>
                  <li>
                  Communicate and schedule interviews using candidate's contact information (name, email, phone number)
                  </li>
                  <br></br>
                
                  <li>
                     Understand candidate's stage in hiring process and make decisions (Status)
                  </li>
             
                 
                  <br></br>
                
                  <li>
                  Ensure smooth and efficient hiring process
                  </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-50">
                     
                 

                        <img className="img-responsive" src="/hiring/pic3.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
      





          <div className="container mt-120">
                        <div className="bg-6 bdrd-58  pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                                    <h2 className="text-heading-1 color-gray-900">
                                    Interview Schedule
                                    </h2>
                                   
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            
                             
          <div className="container">
        
            
                <div className="bg-6 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                      
                        <p >
                        <li>
                Specific recruiting campaign or job listing for which the interview is being scheduled (Hiring campaign)
                </li>
                <br></br>
               
                <li>
                Job position for which the candidate is being interviewed (Position)
                </li>
                <br></br>
                
               
                <li>
                The information is used to schedule and organize interviews for candidates and also to track the performance of recruiting campaigns using Shadobook ERP.
                </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-70">
                 
            


                        <img  className="img-responsive" src="/hiring/pic4.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>





          <div className="container mt-120">
                        <div className="bg-9 bdrd-58  pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                                    <h2 className="text-heading-1 color-gray-900">
                                    Hiring Channels
                                    </h2>
                                   
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            
                             
          <div className="container">
        
            
                <div className="bg-9 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                      
                        <p >
                        <li>
                   Form builder and Form information: Tool for creating and designing forms easily and efficiently.
                     </li>
                     <br></br>
                     <li>
                     Can create various forms such as surveys, registration forms, contact forms
                     </li>
                     <br></br>
                     <li>
                     Includes drag-and-drop functionality, templates, and customization options.
                     </li>
                     <br></br>
                     <li>
                     Allows for easy distribution and data collection
                     </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-70">
                  
                   


                        <img className="img-responsive" src="/hiring/pic5.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
  





          <div className="container mt-120">
                        <div className="bg-2 bdrd-58  pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                                    <h2 className="text-heading-1 color-gray-900">
                                    Hiring Portal 
                                    </h2>
                                   
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            
                             
          <div className="container">
        
            
                <div className="bg-2 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                      
                        <p >
                        <li>
                  Search by specific skills
              </li>
              <br></br>
              <li>
              Search by job title
              </li>
              <br></br>
              <li>
              Search by experience level
              </li>
              <br></br>
              <li>
              Search by location
              </li>
              <br></br>
              <li>
              Search by company,etc.
              </li>
              
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                 

                        <img className="img-responsive mt-30" src="/hiring/pic6.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
   




          <div style = {{ marginBottom:"100px"}} className="container mt-120">
                        <div className="bg-10 bdrd-58 pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-30">
                                    <h2 className="text-heading-1 color-gray-900">
                                    Settings
                                    </h2>
                                   
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            
                             
          <div className="container">
        
            
                <div className="bg-10 panel-box mt-30">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                      
                        <p >
                        <li>
                  Hiring Slots are periods of time that can be booked for venues in sheepSpaces, supporting multiple venues, restrictions and bespoke pricing.
                </li>

                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                     
                      


                        <img className="img-responsive mt=-100" src="/hiring/pic7.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        
                    
                </section>




            </Layout>

        </>
    )
}

export default Home;
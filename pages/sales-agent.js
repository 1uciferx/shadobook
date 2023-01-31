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
          <div className="banner-hero banner-head-image" style={{ background: "url('assets/background26.jpg')" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 style={{color:"white",marginTop:"0px"}} className="text-display-2">
                  Sales Agent
                  </h1>
                  <p style={{color:"white"}}  className="text-body-lead-large color-gray-500 mt-40 pr-40">
                   A person or corporation that represents an exporting firm (the principal) as a sales agent, promoting the products of the principal to potential customers in the external market in exchange for a commission based on the value of the business transactions arranged and paid to the principal.
                  </p>

                </div>
                <div className="col-lg-5 d-none d-xl-block">
                  <div className="">

                    <img className="img mt-40" alt="Agon" src="logo1/vector20.jpg" />
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
                  Dashboard
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  The sales agent dashboard in ShadobooksERP would likely show key data, including, 
          <br></br> <br></br>
            <li>
            	The number of agents, 

            </li>
            <br></br>
            <li>
            	The number of active and inactive agents, 
            </li>
            <br></br>
            <li>
            	The total number of programs, 
            </li>
            <br></br>
            <li>
            	The total number of programs, 
            </li>
            <br></br>
            <li>
            The number of orders that have been delivered
            </li>
                  </p>

                </div>

                <div className="col-lg-6 col-sm-12">
                  <img className="bdrd-16 img-responsive mt-200" src="/salesagent/pic1.png" alt="Agon" />
                </div>

              </div>
            </div>







            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Management
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <li>
            	In ShadobooksERP, a sales representative is a user with the ability to manage and track sales and customer interactions within the system.
            </li>
            <br></br>
            

            <li>
            In order to create a new sales agent in ShadobooksERP, you can follow these steps:

            </li>
            <br></br>
            <li>
            	Click on the "New Agent" button and
            	Fill in the necessary information for the new agent, including their name, contact information, and other relevant details.
              </li>
              <br></br>
              <li>
            	Click on the "Save" button to create the new agent.</li>
                  </p>

                </div>

                <div className="col-lg-6 col-sm-12">
                  <img  className="bdrd-16 img-responsive mt-200" src="/salesagent/pic2.png" alt="Agon" />
                </div>

              </div>
            </div>









            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Programs
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <li>
            	In ShadobooksERP an “Agent program” sub-module helps to manage agents, including 
            </li>
            <br></br>

            <li>
            	Creating new agents, 

           
            Updating agent information, and	Tracking agent performance.
 </li> <br></br>
            <li>

            	You can receive a particular agent information by entering their name and agent group from the list of agents.
            </li>
           
                  </p>

                </div>

                <div className="col-lg-6 col-sm-12">
                  <img className="bdrd-16 img-responsive mt-170" src="/salesagent/pic3.png" alt="Agon" />
                </div>

              </div>
            </div>








          

            <div className="container mt-100">
              <div className="row">
               



                <div className="col-lg-6 col-sm-12 block-we-do">

                  <h3 className="text-heading-1 mt-30">
                  Orders
                  </h3>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  <li>
            The order page displays all the orders placed by the agents.
              </li>
              <br></br>
              <li>
              	Use the search filters available to narrow down the order list to view the specific agent's order.
              </li>
              <br></br>
              <li>
              	You can also filter the orders by Agent.
              </li>
              <br></br>
              <li>
              	Click on the specific order to view the details.
              </li>
                  </p>

                </div>

                <div className="col-lg-6 col-sm-12">
                  <img  className="bdrd-16 img-responsive mt-100" src="/salesagent/pic4.png" alt="Agon" />
                </div>

              </div>
            </div>


</section>



      </Layout>

    </>
  )
}

export default Home;
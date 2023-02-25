/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
function Contracts() {
  return (
    <>
      <Layout>
      <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/single/contracts.jpg)",
              objectFit:"cover"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-display-2 text-center color-white">
                  Contracts
                  </h1>
                  <p className="text-body-lead-large color-white mt-40  text-center">
                  Shadobooks CRM offers a curated section that is dedicated to
                    maintaining and keeping track of all the agreements.
                    Everything from the creation of contracts, overlooking
                    business collaboration, managing documentation between the
                    signed parties, and tracking policies and renewal are some
                    of the features that the interface offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        

        <div className="section-box bg-7 mt-70">
          <div className="container mt-100 mb-50">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-2 mt-10">Contract Summary</h3>
                <p className="text-body-text color-gray-800 mt-30">
                  In Shadobook ERP, when clicking the contract module, the page
                  shows:
                  <br></br>
                  <br></br>➟ The option to add a new contract
                  <br></br>
                  <br></br>➟ A contract summary.
                  <br></br>
                  <br></br>➟ A contract by type.
                  <br></br>
                  <br></br>➟A contract value by type.
                  <br></br>
                  <br></br>➟A list of generated contracts.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/7/contractssum.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-70">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center mt-10">
            <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/convec.jpg "
                 
                />
            </div>
            
            <p className="text-body-lead-large color-gray-600 mt-20 text-center">
              CRM contracts are digital documents that formalise relationships
              between businesses and their customers.
            </p>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
        </div>

        <div className="section-box bg-5 mt-70">
          <div className="container mt-100 mb-50">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-2 mt-10">New Contract</h3>
                <p className="text-body-text color-gray-800 mt-30">
                  ➟ On this page, you can enter all the contract information
                  details such as customer, subject, contract value, contract
                  type, start date, end date, and contract description.
                  <br></br>
                  <br></br>➟ Click the save button to create the new contract in Shadobook ERP system.
                  
                </p>
              </div>
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/about/7/addcontract.png"
                    alt="Agon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-70">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center mt-10">
            <img
                  alt="Agon"
                  src="assets/imgs/page/homepage4/convec2.jpg "
                 
                />
            </div>
            <p className="text-body-lead-large color-gray-600 text-center mt-20">
            All your vendor list is updated here along with all the associated details like your purchases, pricing, overdue, invoice details, profile summary and their contact list.
            </p>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contracts;


import React, { useState } from 'react';
import styles from "../styles/Landpg.module.css";
import CardSlider from "../components/Slidecarelandpg";
import Layout from '../components/layout/Layout';
import Landpgslider1 from "../components/Landpgslider1";
import Landformpg from "../components/Landformpg";
import Landcustomerpg from "../components/Landcustomerpg";
import Indexslider from "../components/slider/NewLandpgslider";
import Landpgcontainer from "../components/Landpgcontainer";
import Landpgcard from "../components/Landpgcard";
import Link from "next/link";
import LandpgNewtry from '../components/LandpgNewtry';
import LandpgServingfor from '../components/LandpgServingfor';
function Landpg() {


  return (
    <>
      <Layout >
      <div className="container">
        <div className="section-box" style={{ marginTop: "9%" }}>
        <div className="banner-hero banner-homepage6">
        <div className="container">
        <div className="row">
          <div className="col-7  mt-50 pb-120" >
            <h1 className={styles.firsthead}>Top-Notch Accounting ERPSoftware- Shadobooks</h1>
            <p className={styles.firstpg}>Shadobooks ERP, a leading Accounting ERP software, offers businesses a smarter solution with real-time access to information. Our ERP platform delivers significant innovation, cost savings, and superior business processes to organizations in the Middle East, empowering them with up-to-date insights for informed decision-making.</p>
            <div >
              <div className={styles.btn3}>
                <Link href="/request-a-demo">
                  <button role="button" className={styles.btn1} >Start 90 day free trial  ➜ </button>
                </Link>
                <Link href="/request-a-demo">
                  <button role="button" className={styles.btn2}>Schedule a demo  ➜</button>
                </Link>
              </div>
            </div>
            <div className={styles.flex} >
            <div className="row" style={{}}>
              <div className="col-lg-2 col-md-4 col-sm-4 col-4" style={{ width: '20%' }}>
                <div className={styles.box1}>500+</div>
                <div className={styles.box2}>Happy  Clients</div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-4" style={{ width: '20%' }}>
                <div className={styles.box1}>756+</div>
                <div className={styles.box2}>Project  Done</div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-4" style={{ width: '20%' }}>
                <div className={styles.box1}>500%</div>
                <div className={styles.box2}>ClienSatisfaction</div>
              </div>
            </div>
            </div>
          </div>

          <div className="col-lg-5 d-lg-block">
                <div className={styles.mainmedia}>
                  <div className="block-1 ">
                    <div className={styles.heroimg22}> 
                      <div className={styles.heroimg}>
                        <Link href="tel:+971528722900">
                          <img
                            src="/assets/imgs/page/homepage2/phone1.png"
                            alt="Shadobooks erp"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.heroimg1}>
                    <img
                      className="img-responsive"
                      alt="Shadobooks erp"
                      src="assets/imgs/page/homepage2/landinghero.png"
                    />
                  </div>
                </div>
              </div>

        </div>
        </div>
        </div>
        </div>

        
        {/* <div className="row">
          <div className="col-6">
            <h1 className={styles.head2}>IT Support Industry</h1>
            <p className={styles.para2}>We offer a variety of products for companies in the IT support sector to automate their service desk, manage IT assets, and enhance service delivery.</p>
          </div>
          <div className="col-6">
            <div className={styles.profile}>
              <img src="assets\imgs\Frame 2 2.png" />
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-6">
            <div className={styles.profile}>
              <img src="assets\imgs\Frame 3 2 (1).png" />
            </div>
          </div>
          <div className="col-6">
            <h1 className={styles.head3}>Manufacturing Industry</h1>
            <p className={styles.para2}>In the manufacturing industry, Shadobooks ERP helps businesses streamline their production processes, track raw materials, and manage the entire supply chain.</p>
          </div>
        </div> */}
        {/* <div className="row">
            <div className="col-6 col-md-12">
                <h1 className={styles.head2}style={{   marginRight:'14%'}}>Retail & Wholesale Industry</h1>
                <p className={styles.para2}>For retailers and wholesalers, our software provides tools for managing inventory levels, processing orders, and handling multiple store locations.</p>
            </div>
            <div className="col-6">
            <div className={styles.profile}>
                <img src="assets\imgs\Frame 4 2 (1).png" />
              </div>
            </div>
        </div> */}





{/* 
        <div className="row">
          <div className="col-6">
            <div className={styles.profile}>
              <img src="assets\imgs\Group 38657 2 (1).png" />
            </div>
          </div>
          <div className="col-6">
            <h1 className={styles.head3}>Distribution Industry</h1>
            <p className={styles.para2}>In the distribution industry, our ERP  helps businesses streamline their warehouse operations, optimize their delivery routes, and track their sales and purchases.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h1 className={styles.head2}>Service Providers</h1>
            <p className={styles.para2}>Shadobooks ERP provides tailored solutions for service businesses with its ready-to-use Services and Appointments modules.</p>
          </div>
          <div className="col-6">
            <div className={styles.profile}>
              <img src="assets\imgs\Group 38659 2 (1).png " />

            </div>,
          </div>
        </div> */}
        <div>
         <LandpgServingfor/>
        </div>
        <div>
          <LandpgNewtry/>
        </div>
        <div>
          {/* < Landpgcontainer /> */}
        </div>
        {/* <div><Landpgcard />
        </div> */}
        {/* <div>
          <Landcustomerpg />
        </div> */}
        {/* <div>
          <Landformpg />
        </div> */}
      </div>
      </Layout>

    </>

  );
}
export default Landpg;
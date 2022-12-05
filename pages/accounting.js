/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import styles from "../styles/Accounting.module.css";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});
import { Button, Space, DatePicker, Card } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';



function Accounting() {


  return (
    <>
      <Layout>


        <section className="section-box">
          <div


          // style={{ backgroundColor: "#ffded3" }}
          >

            {/* Hero Section */}
            <div className="mt-90">

              



              {/* <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/ftrs-banner-bg.jpeg" className={styles.image}></img> */}

              <p className="text-center" style={{ color: "#90321B" }}>ShadoBooks</p>

              <h4 className="text-center">Cillum elit labore voluptate proident ad reprehenderit duis<br></br> nostrud ut ipsum.</h4>

            </div>


            <div className="mt-40 container">

              <img src="/accounting.jpg" className={styles.image}></img>
            </div>


            <div >
              <div>

              </div>

              <div>

              </div>
            </div>





          </div>
        </section>

      </Layout>
    </>
  );
}

export default Accounting;

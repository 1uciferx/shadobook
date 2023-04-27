import Landingpage from "../components/landingpage";
import Landingpage2 from "../components/landingpage2";
import Landingpage3 from "../components/landpage3";
import Landingpagecards from "../components/landingpagecards";
import Landingpage5 from "../components/landingpage5";
import Landingpage7 from "../components/landingpage7";
import Landingpage7mid from "../components/landingpage7mid";
import Landingpageform from "../components/landingpageform";
import Testimonalcards from "../components/testimonialcards";
import Head from "next/head";
import Newcomponent from "../components/newcomponent";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { initializeTagManager } from "../lib/gtm";
import styles from "../styles/landingpagetext.module.css";
function Landingpage1() {
  useEffect(() => {
    initializeTagManager();
  }, []);

  return (
    <>
      <Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Layout>
        <div className="container">
          <div>
            <Landingpage />
          </div>

          <div>
            <Landingpage2 />
          </div>

          <div>
            <Newcomponent />
          </div>

          <div style={{ marginTop: "5%" }}>
            <Landingpagecards />
          </div>

          <div style={{ marginTop: "5%" }}>
            <Landingpage5 />
          </div>

          <div>
            <Testimonalcards />
          </div>

          <div className={styles.normalsx}>
            <Landingpage7 />
          </div>

          <div className={styles.midxs}>
            <Landingpage7mid />
          </div>

          <div>
            <Landingpageform />
          </div>
          
        </div>
      </Layout>
    </>
  );
}

export default Landingpage1;

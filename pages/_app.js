import "../public/assets/css/app.2afad0c.bundle.css";
import "../public/assets/css/swiper-custom.css";
import "../public/assets/css/custom-style.css";
import React, { useEffect, useState } from "react";
import "react-modal-video/css/modal-video.css";
import TawkTo from "tawkto-react";
import "antd/dist/reset.css";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Preloader from '../components/elements/Preloader';
import 'react-modal-video/css/modal-video.css';
import 'antd/dist/reset.css';
import FlagApp from '../components/FlagApp';
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";



function MyApp({ Component, pageProps }) {


  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    var tawk = new TawkTo("6360f2c8b0d6371309cca7c1", "1ggpb8oj2");

    tawk.onStatusChange((status) => {
      console.log("-->", status);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>


      <Head>


        <title>Shadobooks</title>
        {/* <link href="https://fonts.cdnfonts.com/css/helvetica-neue-9" rel="stylesheet"/> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet" />



        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
      </Head>

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
      {!loading ?
        <>
          <ToastContainer position="bottom-left" />
          <Component {...pageProps} />
        </>
        :
        <Preloader />}

    </>
  );
}

export default MyApp;

import '../public/assets/css/app.2afad0c.bundle.css';
import "../public/assets/css/swiper-custom.css";
import "../public/assets/css/custom-style.css";
import React, { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';
import 'react-modal-video/css/modal-video.css';
import TawkTo from 'tawkto-react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    var tawk = new TawkTo("6360f2c8b0d6371309cca7c1", "1ggpb8oj2")

    tawk.onStatusChange((status) => 
    {
        console.log("-->",status)
    })

}, [])

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
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )}

    </>
  )
}

export default MyApp

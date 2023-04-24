import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/landingpagecards.module.css";

const Landingpagecards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
        
      },
    ],
  };

  return (
    <div style={{ height: "250px" }}>
      {" "}
      {/* set a fixed height for the Slider */}
      <Slider {...settings}>
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            <div className={`${styles.hovereffectt}`}>
              <a href="/reports-module-in-erp">
                <Image
                  src="/assets/imgs/page/homepage1/dash.png"
                  alt="Client 1"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Dashboard</p>
            </div>{" "}
          </div>{" "}
        </div>
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            <div className={`${styles.hovereffectt}`}>
              <a href="/contract-tracking-software">
                <Image
                  src="/assets/imgs/page/homepage1/trans.png"
                  alt="Client 2"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Transfer</p>
            </div>{" "}
          </div>{" "}
        </div>
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            <div className={`${styles.hovereffectt}`}>
              <a href="/expense-management-system">
                <Image
                  src="/assets/imgs/page/homepage1/budget.png"
                  alt="Client 3"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Budget</p>
            </div>{" "}
          </div>
        </div>{" "}
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            <div className={`${styles.hovereffectt}`}>
              <a href="/ticketing-system-in-erp">
                <Image
                  src="/assets/imgs/page/homepage1/transac.png"
                  alt="Client 4"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Transactions</p>
            </div>{" "}
          </div>
        </div>{" "}
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            {" "}
            <div className={`${styles.hovereffectt1}`}>
              <a href="/accounting-erp-software">
                <Image
                  src="/assets/imgs/page/homepage1/chart.png"
                  alt="Client 5"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Chart of Accounts </p>
            </div>{" "}
          </div>
        </div>
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            <div className={`${styles.hovereffectt}`}>
              <a href="/utility-management-software">
                <Image
                  src="/assets/imgs/page/homepage1/bank.png"
                  alt="Client 7"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Banking</p>
            </div>{" "}
          </div>
        </div>{" "}
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            {" "}
            <div className={`${styles.hovereffectt}`}>
              <a href="/Knowledge-management-software">
                <Image
                  src="/assets/imgs/page/homepage1/recon.png"
                  alt="Client 8"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Reconcile</p>
            </div>
          </div>
        </div>{" "}
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            <div className={`${styles.hovereffectt}`}>
              <a href="/best-hrms-software">
                <Image
                  src="/assets/imgs/page/homepage1/jentry.png"
                  alt="Client 9"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Journal Entry</p>
            </div>{" "}
          </div>
        </div>{" "}
       
      
      </Slider>
    </div>
  );
};

export default Landingpagecards;

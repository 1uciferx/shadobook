import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/newindexslider.module.css";

const Newslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
                  src="/assets/imgs/page/homepage1/Reports3.png"
                  alt="Client 1"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Reports</p>
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
                  src="/assets/imgs/page/homepage1/Contracts3.png"
                  alt="Client 2"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Contracts</p>
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
                  src="/assets/imgs/page/homepage1/Expenses4.png"
                  alt="Client 3"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Expenses</p>
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
                  src="/assets/imgs/page/homepage1/Support3.png"
                  alt="Client 4"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Support</p>
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
                  src="/assets/imgs/page/homepage1/Accountingvoucher2.png"
                  alt="Client 5"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Accounting voucher</p>
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
                  src="/assets/imgs/page/homepage1/Utilities4.png"
                  alt="Client 7"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Utilities</p>
            </div>{" "}
          </div>
        </div>{" "}
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            {" "}
            <div className={`${styles.hovereffectt1}`}>
              <a href="/Knowledge-management-software">
                <Image
                  src="/assets/imgs/page/homepage1/KnowledgeBase3.png"
                  alt="Client 8"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Knowledge Base</p>
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
                  src="/assets/imgs/page/homepage1/Hiring3.png"
                  alt="Client 9"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Hiring</p>
            </div>{" "}
          </div>
        </div>{" "}
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            {" "}
            <div className={`${styles.hovereffectt1}`}>
              <a href="/estimates-management-software">
                <Image
                  src="/assets/imgs/page/homepage1/EstimateRequest3.png"
                  alt="Client 10"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>Estimate Request</p>
            </div>
          </div>
        </div>{" "}
        <div style={{ height: "100%" }}>
          {" "}
          {/* set a fixed height for each slide */}
          <div className={`${styles.normalbg}`}>
            <div className={`${styles.hovereffectt}`}>
              <a href="/crm-software">
                <Image
                  src="/assets/imgs/page/homepage1/sales3.png"
                  alt="Client 10"
                  width={150}
                  height={140}
                />
              </a>
              <p className={styles.headone}>sales</p>
            </div>
          </div>{" "}
        </div>
      </Slider>
    </div>
  );
};

export default Newslider;

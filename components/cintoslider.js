import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../styles/Cintoslider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cintoslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/fre1.png"
          alt="Client 1"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/fre2.png"
          alt="Client 2"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/fre3.png"
          alt="Client 3"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/fre4.png"
          alt="Client 4"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/fre5.png"
          alt="Client 5"
          width={200}
          height={200}
        />
      </div>

      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/fre6.png"
          alt="Client 7"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/fre7.png"
          alt="Client 8"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/reig.png"
          alt="Client 9"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          className={styles.imgg1}
          src="/assets/imgs/page/homepage4/fre2.png"
          alt="Client 10"
          width={200}
          height={200}
        />
      </div>
    </Slider>
  );
};

export default Cintoslider;

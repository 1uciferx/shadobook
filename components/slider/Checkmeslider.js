/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Checkmeslider = () => {

    const data = [
        {
            img: "9.jpg",
            avatar: "1.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
    ];


    return (
        <>
            <div className="slider-news">
                <div className="swiper-container swiper-group-1">
                    <Swiper
                        slidesPerView={60}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5",
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide>
                                <div className="swiper-slide active">
                                    <div className="block-news">
                                        <div className="item-news">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="img-news">
                                                        <a><img src="/assets/imgs/page/blog/1/img-1.png" alt="Agon" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="right-news card-grid-style-4 mb-0"><span className="tag-dot">Marketing Event</span>
                                                        <a className="text-heading-4">We can blend colors multiple ways, the most common
                                                        </a>

                                                        <p className="text-body-text color-gray-500 text-desc-fix-h">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc. Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p>
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
            </div>


        </>
    );
};

export default Checkmeslider;

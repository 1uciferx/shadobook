/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"

SwiperCore.use([Autoplay, Navigation]);
const Sliderforprojects = () => {

    const data = [
        {
            avatar: "vendor.jpg",
            name: "Vendors",
            company: "Vendor-items in purchase refers to the items that a vendor has available to be purchased. This includes products, services, and other items.",
            quote: " ",
            bg: ""
        },
        {
            avatar: "gg4.jpg",
            name: "Purchase Request",
            company: "Purchase request that enables users to initiate a request for a product or service. It allows users to specify the desired quantity and unit price.",
            quote: " ",
            bg: "bd-bg-6"
        },
        {
            avatar: "gg3.jpg",
            name: "Quotations",
            company: "A purchase quotation is a document sent by a seller to a prospective buyer that includes the price and other details of a product or service.",
            quote: " ",
            bg: "bd-bg-10"
        },
        {
            avatar: "df1.jpg",
            name: "Purchase Order",
            company: "A purchase order is a document sent from a buyer to a supplier, indicating types, quantities, and agreed prices for products.",
            quote: " ",
            bg: "bd-bg-10"
        },
        {
            avatar: "df2.jpg",
            name: "Order Returns",
            company: "The process of returning merchandise purchased for a variety of reasons is known as order returns. This could be because of incorrect items.",
            quote: " ",
            bg: "bd-bg-8"
        },
        {
            avatar: "df3.jpg",
            name: "Purchase Contract",
            company: " Contracts in purchase are legally binding agreements that outline the terms and conditions of a purchase transaction between two or more.",
            quote: " ",
            bg: "bd-bg-6"
        },
        
        {
            avatar: "gg1.jpg",
            name: "Debit Notes",
            company: " A debit note is a document sent by a seller to a buyer notifying them of a debit in the buyer's account. This debit could be due to a variety of reasons.",
            quote: " ",
            bg: "bd-bg-10"
        },
        {
            avatar: "gg2.jpg",
            name: "Purchase Invoices",
            company: " An invoice in purchase is a document issued by a seller to a buyer that serves as proof of purchase. It contains the seller's contact.",
            quote: " ",
            bg: "bd-bg-6"
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-4",
                            nextEl: ".swiper-button-next-4"
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide>
                                <div className="swiper-slide active">
                                    <div className={`card-grid-style-3 hover-up ${item.bg}`}>
                                    <div className="grid-3-img">
                                            <img src={`/assets/imgs/page/homepage1/${item.avatar}`} alt="Agon" />
                                        </div>
                                        <h3 className="text-heading-6 mb-5 mt-20">{item.name}</h3>
                                        <span className="text-body-text  d-block">{item.company}</span>
                                        <p className="text-body-text text-desc color-gray-500 ">{item.quote}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-4" />
                <div className="swiper-button-prev swiper-button-prev-4" />
            </div>
        </>
    );
};

export default Sliderforprojects;


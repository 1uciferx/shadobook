/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from 'antd';
const { Meta } = Card;
import Link from "next/link"

SwiperCore.use([Autoplay, Navigation]);
const Indexslider = () => {

    const data = [
        // {
        //     avatar: "1.jpg",
        //     name: "Dashboard",
        //     company: "Louis Vuitton",
        //     quote: " ",
        //     bg: "hi"
        // },
        {
            avatar: "accounting123.png",
            name: "Accounting",
            company: "Nintendo",
            quote: "In Shadobooks CRM an organisational chart depicts the organisational structure by connecting distinct employees with their unit’s name, email, parent unit, IMAP Username, IMAP password, and the encryption details.",
            bg: "bd-bg-6"
        },
        {
            avatar: "utilities123.png",
            name: "Utilities",
            company: "Starbucks",
            quote: "The job description components in shadobooks CRM outline the primary functions and responsibilities of a certain position. This component is also in charge of the job selection processes and the publication.",
            bg: "bd-bg-10"
        },
        {
            avatar: "Knowledgebase123.png",
            name: "Knowledge Base",
            company: "Bank of America",
            quote: "Onboarding in CRM streamlines the process of introducing new employees to an organisation. To provide an effective onboarding experience for new employees, it often involves electronic signatures.",
            bg: "bd-bg-6"
        },
        {
            avatar: "Hrrecords123.png",
            name: "HR Records",
            company: "Bank of America",
            quote: "The HR records of shadobooks CRM contain the staff name, code, email, personnel qualifications by department, gender, job position, role, and contact information. You may also examine these details on a chart basis.",
            bg: "bd-bg-6"
        },
        {
            avatar: "Reports123.png",
            name: "Reports",
            company: "Bank of America",
            quote: "Human resource training programmes are specialised courses that include the name of the training programme, the training type, the training item, the department, the training libraries, minimum point, and the training results.",
            bg: "bd-bg-6"
           
        },
        {
            avatar: "Contracts123.png",
            name: "Contracts",
            company: "Bank of America",
            quote: "The process of operational contract management is carried out within an organisation using Shadobooks CRM. Human resource contract management includes the staff name.",
            bg: "bd-bg-6"
        },
        {
            avatar: "Expenses123.png",
            name: "Expenses",
            company: "Bank of America",
            quote: "Dependant refers to a staff member's spouse or child who is fully dependent on the employee for support. To create a new dependant in Shadobooks CRM, enter the employee dependant's details in the dependant’s form.",
            bg: "bd-bg-6"
        },
        {
            avatar: "Support123.png",
            name: "Support",
            company: "Bank of America",
            quote: "The purpose of the layoff checklist in shadobooks CRM is to provide a process for designating an employee for layoff. The layoff checklist includes the employee's name, email address, job position, department.",
            bg: "bd-bg-6"
        },
        {
            avatar: "Estimaterequest123.png",
            name: "Estimate Request",
            company: "Bank of America",
            quote: "Q&A management is a type of online documentation that provides guidance for resolving problems encountered by clients. This may be accomplished in Shadobooks CRM by providing subject.",
            bg: "bd-bg-6"
        },
        {
            avatar: "sales123.png",
            name: "Sales",
            company: "Bank of America",
            quote: "The HR reports include the following employee information: Layoffs of employees, Salary changes on the staff list, Staff changes by seniority, Staff changes by month.",
            bg: "bd-bg-6"
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={5}
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
                                    <Card hoverable
                                        style={{ width: 200, }} cover= {<img src={`assets/imgs/page/modulelogo/${item.avatar}`} alt="Agon" />} >
                                        <h5 style={{textAlign:"center"}}><b>{item.name}</b></h5>
                                        {/* <p>{item.quote}</p> */}
                                    </Card>
               
           
                                   


                                    {/* <div className={`card-grid-style-3 hover-up ${item.bg}`}>
                                        <div className="grid-3-img">
                                            <img src={`assets/imgs/page/homepage1/user-${item.avatar}`} alt="Agon" />
                                        </div>
                                        <h3 className="text-heading-6 mb-5 mt-20">{item.name}</h3>
                                        <span className="text-body-small d-block">{item.company}</span>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">{item.quote}</p>
                                    </div> */}
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

export default Indexslider;
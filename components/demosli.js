/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "antd";
import Slider from "react-slick";
const { Meta } = Card;
import Link from "next/link";

SwiperCore.use([Autoplay, Navigation]);
const Featureslider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1813,
            settings: {
              slidesToShow: 6,
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
  const data = [
    {
      avatar: "Reports3.png",
      name: "Reports",
      company: "Bank of America",
      quote:
        "Human resource training programmes are specialised courses that include the name of the training programme, the training type, the training item, the department, the training libraries, minimum point, and the training results.",
      bg: "bd-bg-6",
      link: "/reports-module-in-erp",
    },
    {
      avatar: "Contracts3.png",
      name: "Contracts",
      company: "Bank of America",
      quote:
        "The process of operational contract management is carried out within an organisation using Shadobooks CRM. Human resource contract management includes the staff name.",
      bg: "bd-bg-6",
      link: "/contract-tracking-software",
    },
    {
      avatar: "Expenses4.png",
      name: "Expenses",
      company: "Bank of America",
      quote:
        "Dependant refers to a staff member's spouse or child who is fully dependent on the employee for support. To create a new dependant in Shadobooks CRM, enter the employee dependant's details in the dependant’s form.",
      bg: "bd-bg-6",
      link: "/expense-management-system",
    },
    {
      avatar: "Support3.png",
      name: "Support",
      company: "Bank of America",
      quote:
        "The purpose of the layoff checklist in shadobooks CRM is to provide a process for designating an employee for layoff. The layoff checklist includes the employee's name, email address, job position, department.",
      bg: "bd-bg-6",
      link: "/ticketing-system-in-erp",
    },
    {
      avatar: "Accountingvoucher2.png",
      name: "Accounting",
      company: "Nintendo",
      quote:
        "In Shadobooks CRM an organisational chart depicts the organisational structure by connecting distinct employees with their unit’s name, email, parent unit, IMAP Username, IMAP password, and the encryption details.",
      bg: "bd-bg-6",
      link: "/accounting-erp-software",
    },
    {
      avatar: "Utilities4.png",
      name: "Utilities",
      company: "Starbucks",
      quote:
        "The job description components in shadobooks CRM outline the primary functions and responsibilities of a certain position. This component is also in charge of the job selection processes and the publication.",
      bg: "bd-bg-10",
      link: "/utility-management-software",
    },
    {
      avatar: "KnowledgeBase3.png",
      name: " Sales",
      company: "Bank of America",
      quote:
        "Onboarding in CRM streamlines the process of introducing new employees to an organisation. To provide an effective onboarding experience for new employees, it often involves electronic signatures.",
      bg: "bd-bg-6",
      link: "/sales-management-software",
    },
    {
      avatar: "Hiring3.png",
      name: "HR Records",
      company: "Bank of America",
      quote:
        "The HR records of shadobooks CRM contain the staff name, code, email, personnel qualifications by department, gender, job position, role, and contact information. You may also examine these details on a chart basis.",
      bg: "bd-bg-6",
      link: "/best-hrms-software",
    },
    {
      avatar: "EstimateRequest3.png",
      name: "Estimate Request",
      company: "Bank of America",
      quote:
        "Q&A management is a type of online documentation that provides guidance for resolving problems encountered by clients. This may be accomplished in Shadobooks CRM by providing subject.",
      bg: "bd-bg-6",
      link: "/estimates-management-software",
    },
    {
      avatar: "sales3.png",
      name: "Knowledge Base",
      company: "Bank of America",
      quote:
        "The HR reports include the following employee information: Layoffs of employees, Salary changes on the staff list, Staff changes by seniority, Staff changes by month.",
      bg: "bd-bg-6",
      link: "/knowledge-management-software",
    },
  ];

  return (
    <>
    <div className="mt-20  ">
      <div className="box-swiper">
      <div class="swiper-container swiper-group-4  " >
      <Slider {...settings}>
            {data.map((item, i) => (
              
                <div className="swiper-slide active shadow p-0 mb-0 bg-white rounded">
                  <Card hoverable style={{ width: 200, height: '245px' }}>
                    <a href={item.link}>
                      <img
                        src={`assets/imgs/page/homepage1/${item.avatar}`}
                        alt="shadobooks"
                      />

                      <h5 style={{ textAlign: "center", fontSize: "22px", fontFamily: 'Poppins', lineHeight:'33px'}}>
                        <b>{item.name}</b>
                      </h5>
                    </a>
                    {/* <p>{item.quote}</p> */}
                  </Card>
                </div>
             
            ))}
          </Slider>
        </div>
        {/* <div className="swiper-button-next swiper-button-next-4" />
        <div className="swiper-button-prev swiper-button-prev-4" /> */}
      </div>
      </div>
    </>
  );
};

export default Featureslider;

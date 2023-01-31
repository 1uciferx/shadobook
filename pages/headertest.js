import React from "react";
import styles from "../styles/Headtest.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Drawer, Radio, Space } from 'antd';
import Sidebar from "../components/layout/Sidebar";
import { slide as Menu } from 'react-burger-menu'


function Headertest() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
      });
    
      const handleToggle = (key) => {
        if (isActive.key === key) {
          setIsActive({
            status: false,
          });
        } else {
          setIsActive({
            status: true,
            key,
          });
        }
      };

      

    const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const [scroll, setScroll] = useState(0);

  const [shodan, setShodan] = useState("");
  const [ip, setIP] = useState("");

  async function getIP() {
    const { data } = await axios.get(
      "https://what-is-my-ip.functionapi.workers.dev"
    );
    setIP(data);
  }

  useEffect(() => {
    getIP();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const shodanData = async () => {
    const { data } = await axios.get(
      `https://api.shodan.io/shodan/host/${
        (ip && ip) || "103.78.237.6"
      }?key=MuWfcU97yw8u9XP08ZsROsYTiny7Ibcx`
    );

    setShodan(data);
  };

  useEffect(() => {
    shodanData();
  }, [getIP]);

  console.log("data", ip);

  console.log("country", shodan.country_code);
  return (
    <>
    {/* TOP */}
    
    <nav
        class="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          fontSize: "15px",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <div class="container">
        
            <a class="navbar-brand" href="#"    style={{margin:"auto"}}>
              {" "}
              <img
                width={150}
                alt="ShadoBooks"
                src="assets/imgs/page/homepage4/shadobookslogo.png "
             
              />
            </a>
          
          {/* <a
            href="#"
            style={{
              fontSize: "18px",
              padding: "0px 80px",

              color: "black",
            }}
            className="header-right"
          >
            <img
              src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${
                shodan.country_code || "IN"
              }.svg`}
              style={{
                marginRight: "15px",
                width: "30px",
                objectFit: "cover",
                marginBottom: "3px",
              }}
            ></img>
             📞 

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              style={{ height: "20px", width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <span style={{ diplay: "block" }}> +971 52 872 2900</span>
          </a> */}
          <div class="collapse navbar-collapse" id="navbarResponsive">
          
          </div>
        </div>
      </nav>
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
              <h1 class="fw-light">Vertically Centered Masthead Content</h1>
              <p class="lead">A great starter layout for a landing page</p>
            </div>
          </div>
        </div>
      </header>




      {/* BOTTOM */}
      <nav class="navbar navbar-expand-lg navbar-light fixed-bottom" style={{color:"white", backgroundColor:"white"}}>
        <div class="container">
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showDrawer}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <ul className="mobile-menu font-heading">
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(1)}
                        className="menu-expand"
                      >
                        {/* <i className="fi-rr-angle-small-down"></i> */}
                      </span>
                      <Link href="/">
                        <a className="active" style={{fontSize:"20px"}}>Home</a>
                      </Link>
                      {/* <ul
                        className={
                          isActive.key == 1
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/">
                            <a>Slider With Informations</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-2">
                            <a>Clients Show Up</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-3">
                            <a>Features</a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                      </ul> */}
                    </li>

                    <li
                      className={
                        isActive.key == 2
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(2)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                     
                        <a style={{fontSize:"20px"}}>Features</a>
                      
                      <ul
                        className={
                          isActive.key == 2
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                          <div>
                            <li>
                              <Link href="/accounting">
                                <a>
                                  
                                  Accounting
                                </a>
                              </Link>
                            </li>
                            {/* <li>
                              <Link href="/account-planning">
                                <a>
                                
                                  Account planning
                                </a>
                              </Link>
                            </li> */}
                            <li>
                              <Link href="/reports">
                                <a>
                                 
                                  Reports
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/sales">
                                <a>
                                 
                                  Sales
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="estimatesrequest">
                                <a>
                                  
                                  Estimates Request
                                </a>
                              </Link>
                            </li>

                            {/* <li>
                              <Link href="/customer-center">
                                <a>
                                 
                                  Customer Center
                                </a>
                              </Link>
                            </li> */}
                            <li>
                              <Link href="/purchase">
                                <a>
                                  
                                  Purchase
                                </a>
                              </Link>
                            </li>
                            {/* <li>
                              <Link href="/suppliers">
                                <a>
                                  
                                  Suppliers
                                </a>
                              </Link>
                            </li> */}
                            <li>
                              <Link href="/expenses">
                                <a>
                                  
                                  Expenses
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/contracts">
                                <a>
                                 
                                  Contracts
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/projects">
                                <a>
                                  
                                  Projects
                                </a>
                              </Link>
                            </li>
                            {/* <li>
                              <Link href="/project-roadmap">
                                <a>
                                 
                                  Project Roadmap
                                </a>
                              </Link>
                            </li> */}

                            <li>
                              <Link href="/inventory">
                                <a>
                                 
                                  Inventory
                                </a>
                              </Link>
                            </li>
                          </div>

                          <div>
                            {/* <li>
                              <Link href="/fixed-asset">
                                <a>
                                 
                                  Fixed Assets
                                </a>
                              </Link>
                            </li> */}

                            {/* <li>
                              <Link href="/commissions">
                                <a>
                                  
                                  commissions
                                </a>
                              </Link>
                            </li> */}

                            <li>
                              <Link href="/leads">
                                <a>
                                  
                                  Leads
                                </a>
                              </Link>
                            </li>
                            {/* <li>
                              <Link href="/lead-management">
                                <a>
                                  
                                  Lead Management
                                </a>
                              </Link>
                            </li> */}
                            {/* <li>
                              <Link href="/loyality">
                                <a>
                               
                                  Loyality
                                </a>
                              </Link>
                            </li> */}
                            <li>
                              <Link href="/task">
                                <a>
                                  
                                  Tasks
                                </a>
                              </Link>
                            </li>

                            {/* <li>
                              <Link href="/task-bookmarks">
                                <a>
                                  
                                  Task Bookmarks
                                </a>
                              </Link>
                            </li> */}

                            {/* <li>
                              <Link href="/mindmap">
                                <a>
                                 
                                  Mindmap
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/reminder">
                                <a>
                                 
                                  Reminder
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/appoinments">
                                <a>
                                 
                                  Appoinments
                                </a>
                              </Link>
                            </li> */}
                            <li>
                              <Link href="hrrecords">
                                <a>
                                 
                                  Hr Records
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/hr-payroll">
                                <a>
                                 
                                  HR Payroll
                                </a>
                              </Link>
                            </li>

                            {/* <li>
                              <Link href="/wikibooks">
                                <a>
                                 
                                  Wiki Books
                                </a>
                              </Link>
                            </li> */}
                         
                          

                          
                            {/* <li>
                              <Link href="oxy-task-filter">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  OXY task filter
                                </a>
                              </Link>
                            </li> */}

                            {/* <li>
                              <Link href="idea-hub">
                                <a>
                                 
                                  Idea Hub
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/feedback">
                                <a>
                                  
                                  Feedback
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/staff-booking">
                                <a>
                                  
                                  Staff Booking
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/staff-workload">
                                <a>
                                  
                                  Staff Workload
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/teampasswords">
                                <a>
                                
                                  Team passwords
                                </a>
                              </Link>
                            </li> */}

                            <li>
                              <Link href="/filemanager">
                                <a>
                                  
                                  File Manager
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/companyassets">
                                <a>
                                 
                                  Company Assets
                                </a>
                              </Link>
                            </li>


                            <li>
                              <Link href="/POS">
                                <a>
                                 
                                  Point of Sale
                                </a>
                              </Link>
                            </li>

                            {/* <li>
                              <Link href="/spreadsheet">
                                <a>
                                 
                                  Spreadsheet Online
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/setup">
                                <a>
                                  
                                  Setup
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="videolibrary">
                                <a>
                                 
                                  Video Library
                                </a>
                              </Link>
                            </li> */}

                            <li>
                              <Link href="webhooks">
                                <a>
                                 
                                  Web Hooks
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/manufacturing">
                                <a>
                                 
                                  Manufacturing
                                </a>
                              </Link>
                            </li>

                            {/* <li>
                              <Link href="/recruitment">
                                <a>
                                 
                                  Recruitment
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/objective">
                                <a>
                                 
                                  Objective
                                </a>
                              </Link>
                            </li> */}
                        </div>

                            <div>
                            <li>
                              <Link href="/support">
                                <a>
                                 
                                  Support
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/Utilities">
                                <a>
                                 
                                  Utilities
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/Knowledgebase">
                                <a>
                                 
                                  Knowledge Base
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/hiring">
                                <a>
                                 
                                  Hiring
                                </a>
                              </Link>
                            </li>

                          
                          </div>
                           
                            
                        
                       
                      </ul>
                    </li>

                    {/* <li className=" ">
                      <Link href="/page-about-1">
                        <a>Pricing</a>
                      </Link>
                    </li>

                    <li
                      className={
                        isActive.key == 3
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(3)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      <Link href="/page-service-1">
                        <a>Support</a>
                      </Link>
                      <ul
                        className={
                          isActive.key == 3
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/page-service-1">
                            <a className="closer">Contact us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-service-2">
                            <a className="closer">Technical Support</a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                      </ul>
                    </li> */}
                    {/* <li
                      className={
                        isActive.key == 4
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(4)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      
                        <a>Resources</a>
                      
                      <ul
                        className={
                          isActive.key == 4
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/page-contact">
                            <a>Videos </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-signup">
                            <a>FAQs </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-login">
                            <a>Documentation </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-reset">
                            <a>Support Portal </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/404">
                            <a>CRM Tips</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/404">
                            <a>Guided Tour</a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                      </ul>
                    </li> */}
                    <li
                      className={
                        isActive.key == 5
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(5)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      
                        <a style={{fontSize:"20px"}}>Solution</a>
                      
                      <ul
                        className={
                          isActive.key == 5
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/itsupport">
                            <a className="closer">IT & Support</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/oilandgas">
                            <a className="closer">OIL & GAS</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/manufacturing1">
                            <a>Manufacturing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/retailandwholesaler">
                            <a>Retail & Wholesalers</a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/blog-single">
                            <a>Hiring Agencies</a>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="/blog-single">
                            <a>Leads</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-single">
                            <a>Marketing</a>
                          </Link>
                        </li> */}
                        <li className="hr">
                          <span />
                        </li>
                      </ul>
                    </li>
                  </ul>
      </Drawer>
          </div>
       
      </nav>

      
    </>
  );
}

export default Headertest;

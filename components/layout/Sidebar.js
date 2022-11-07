/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Sidebar = ({ openClass }) => {
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
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="user-account">
              <img src="/assets/imgs/template/ava_1.png" alt="Agon" />
              <div className="content">
                <h6 className="user-name">
                  Hi <span className="text-brand">Steven !</span>
                </h6>
                <p className="font-xs text-muted">You have 5 new messages</p>
              </div>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
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
                        <a className="active">Home</a>
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

                     
                        <a>Features</a>
                      
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
                            <li>
                              <Link href="/account-planning">
                                <a>
                                
                                  Account planning
                                </a>
                              </Link>
                            </li>
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

                            <li>
                              <Link href="/customer-center">
                                <a>
                                 
                                  Customer Center
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/purchase">
                                <a>
                                  
                                  Purchase
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/suppliers">
                                <a>
                                  
                                  Suppliers
                                </a>
                              </Link>
                            </li>
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
                            <li>
                              <Link href="/project-roadmap">
                                <a>
                                 
                                  Project Roadmap
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/inventory">
                                <a>
                                 
                                  Inventory
                                </a>
                              </Link>
                            </li>
                          </div>

                          <div>
                            <li>
                              <Link href="/fixed-asset">
                                <a>
                                 
                                  Fixed Assets
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/commissions">
                                <a>
                                  
                                  commissions
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/leads">
                                <a>
                                  
                                  Leads
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/lead-management">
                                <a>
                                  
                                  Lead Management
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/loyality">
                                <a>
                               
                                  Loyality
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/task">
                                <a>
                                  
                                  Tasks
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/task-bookmarks">
                                <a>
                                  
                                  Task Bookmarks
                                </a>
                              </Link>
                            </li>

                            <li>
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
                            </li>
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

                            <li>
                              <Link href="/wikibooks">
                                <a>
                                 
                                  Wiki Books
                                </a>
                              </Link>
                            </li>
                         
                          

                          
                            {/* <li>
                              <Link href="oxy-task-filter">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  OXY task filter
                                </a>
                              </Link>
                            </li> */}

                            <li>
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
                            </li>

                            <li>
                              <Link href="/filesharing">
                                <a>
                                  
                                  File Sharing
                                </a>
                              </Link>
                            </li>

                            <li>
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
                            </li>

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

                            <li>
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
                            </li>
                        </div>

                            <div>
                            <li>
                              <Link href="/support">
                                <a>
                                 
                                  Support
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

                      
                        <a>Solution</a>
                      
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
                          <Link href="/manufacturing">
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
                </nav>
              </div>
              {/* <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link href="/#">
                      <a>Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a>Work Preferences</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a>My Boosted Shots</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a>My Collections</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a>Account Settings</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a>Go Pro</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/page-login">
                      <a>Sign Out</a>
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div className="site-copyright color-gray-400">
                Copyright 2022 © ShadoBooks
               
            
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Sidebar;

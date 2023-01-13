/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from 'axios';





const Header = ({ handleOpen, headerStyle }) => {



  const [scroll, setScroll] = useState(0);

  const [shodan, setShodan] = useState("");
  const [ip, setIP] = useState("");



  async function getIP() {
    const { data } = await axios.get('https://what-is-my-ip.functionapi.workers.dev')
    setIP(data)
  }


  useEffect(() => {
    getIP()
  }, [])





  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });


  });


  const shodanData = async () => {
    const { data } = await axios.get(`https://api.shodan.io/shodan/host/${ip && ip || "103.78.237.6"}?key=MuWfcU97yw8u9XP08ZsROsYTiny7Ibcx`)

    setShodan(data)

  }

  

  useEffect(() => {
    shodanData()
  }, [getIP])

  console.log("data", ip)

  console.log("country", shodan.country_code)


  return (


    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo ">
                <Link href="/">
                  <a className="d-flex">
                    {headerStyle ? (
                      <img
                        width={150}
                        alt="Shadobooks"
                        src="/assets/logo/Logo.png"
                      />
                    ) : (
                      <img width={150} alt="ShadoBooks" src="/assets/logo/logo.png" />
                    )}
                  </a>
                </Link>

              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block" style={{ marginLeft: "240px", marginTop: "10px" }}>
                  <ul className="main-menu">
                    <li className="">
                      <Link href="/">
                        <a className="active acuspad">Home</a>
                      </Link>
                    </li>
                    <li className="has-children">


                      <Link href="#">
                        <a className="acuspad">Features</a>
                      </Link>
                      <ul className="sub-menu" style={{ width: "750px" }}>
                        <div style={{ display: "flex" }}>
                          <div>
                            <li>
                              <Link href="/accounting">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Accounting
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Utilities">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Utilities
                                </a>
                              </Link>
                            </li>


                            <li>
                              <Link href="/reports">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Reports
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/sales">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Sales
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="estimatesrequest">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Estimates Request
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/customer-center">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Customer Center
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/purchase">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Purchase
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/suppliers">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Suppliers
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/expenses">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Expenses
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/contracts">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Contracts
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/projects">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Projects
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/project-roadmap">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Project Roadmap
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/inventory">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Inventory
                                </a>
                              </Link>
                            </li>
                          </div>

                          <div>
                            <li>
                              <Link href="/fixed-asset">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Fixed Assets
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/commissions">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  commissions
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/leads">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Leads
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/lead-manager">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Lead Manager
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/loyality">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Loyality
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/task">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Tasks
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/task-bookmarks">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Task Bookmarks
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/mindmap">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Mindmap
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/reminder">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Reminder
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/appoinments">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Appoinments
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="hrrecords">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  HR Records
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/hr-payroll">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  HR Payroll
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/wikibooks">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Wiki Books
                                </a>
                              </Link>
                            </li>
                          </div>

                          <div>
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
                                  <i className="fi fi-rr-star" />
                                  Idea Hub
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/feedback">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Feedback
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/staff-booking">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Staff Booking
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/staff-workload">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Staff Workload
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/teampasswords">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Team passwords
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/filemanager">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  File Manager
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/companyassets">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Company Assets
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/spreadsheet">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Spreadsheet Online
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/setup">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Setup
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="videolibrary">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Video Library
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="webhooks">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Web Hooks
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/manufacturing">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Manufacturing
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/POS">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Point Of Sales
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/recruitment">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Recruitment
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/objective">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Objective
                                </a>
                              </Link>
                            </li>
                          </div>

                          <div>
                            <li>
                              <Link href="/support">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Support
                                </a>
                              </Link>
                            </li>
                          </div>


                        </div>
                      </ul>
                    </li>
                    {/* <li className="">
                                            <Link href="/pricing"><a className="acuspad">Pricing</a></Link>   
                                        </li> */}

                    {/* <li className="has-children">
                                            <Link href="#"><a className="acuspad">Support</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-contact"><a><i className="fi fi-rr-paper-plane" />Contact us</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-signup"><a><i className="fi fi-rr-user-add" />Technical Support</a></Link>
                                                </li>
                                                
                                            </ul>
                                        </li> */}
                    {/* <li className="has-children">
                      <Link href="#">
                        <a className="acuspad">Resources</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/index-8">
                            <a className="closer">
                              <i className="fi fi-rr-edit" />
                              Videos
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-pricing-2">
                            <a className="closer">
                              <i className="fi fi-rr-edit" />
                              FAQs
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/page-service-2">
                            <a>
                              <i className="fi fi-rr-document-signed" />
                              Documentation
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <a>
                              <i className="fi fi-rr-document-signed" />
                              Support Portal{" "}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <a>
                              <i className="fi fi-rr-document-signed" />
                              CRM Tips
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <a>
                              <i className="fi fi-rr-document-signed" />
                              Guided Tour
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li className="has-children">
                      <a href="#" className="acuspad">
                        Solutions
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/itsupport">
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>IT & Support
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/oilandgas">
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>OIL & GAS
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/manufacturing1">
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>Manufacturing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/retailandwholesaler">
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>Retail &
                              Wholesalers
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/index-5">
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>Hiring Agencies
                            </a>
                          </Link>
                        </li>
                       
                        <li>
                          <Link href="/index-7">
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>Marketing
                            </a>
                          </Link>
                        </li> */}
                      </ul>
                    </li>






                    <a
                      href="#"
                      style={{
                        fontSize: "18px",
                        padding: "0px 80px",

                        color: "black",
                      }}

                      className="header-right"
                    >

                      <img src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${shodan.country_code || "IN"}.svg`} style={{
                        marginRight: "15px",
                        width: "30px",
                        objectFit: "cover",
                        marginBottom: "3px",
                      }}></img>
                    {/* 📞 */}

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
                  </a>
                </ul>
              </nav>


              <div
                className="burger-icon burger-icon-white cusburgericon"
                onClick={handleOpen}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>





          {/* <div className="header-right">
              <div className="block-signin">
                <Link href="/page-signup">
                  <span className="btn btn-default hover-up icon-arrow-right acuspad">
                    Get Started
                  </span>
                </Link>
              </div>
            </div> */}
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/header.module.css";
import { useRouter } from 'next/router';


const Header = ({ handleOpen, headerStyle }) => {

  const router = useRouter();
  const isHome = router.pathname === '/';


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
      `https://api.shodan.io/shodan/host/${(ip && ip) || "103.78.237.6"
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
      {/* this is the code to make the header to fix when scrollling */}
      {/* ? `${headerStyle} header sticky-bar stick ` */}
      <header
       className={
        !isHome
          ? `${headerStyle} header sticky-bar `
          : scroll
            ? `${headerStyle} header ${styles.head}`
            : `${headerStyle} header ${styles.head}`
      }>

      <div className="" style={{marginLeft:"40px"}}>
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
                    <img
                      width={200}
                      style={{marginLeft:"10px"}}
                      alt="ShadoBooks"
                      src="/assets/imgs/page/homepage4/shadobookslogo.png "
                    />
                  )}
                </a>
              </Link>
            </div>
            {/* header-nav */}
            <div className="header-nav">
              <nav
                className="nav-main-menu d-none d-xl-block"
                style={{ marginLeft: "20px", marginTop: "10px" }}
              >
                <ul className="main-menu">
                  <li className="">
                    <Link href="/">
                      <a className="active acuspad">Home</a>
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link href="/our-product">
                      <a className="acuspad">Features</a>
                    </Link>
                    <ul className="sub-menu" style={{ width: "600px", marginLeft: "-250px" }}>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <div >
                          <li>
                            <Link href="/accounting-erp-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Accounting
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/utility-management-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Utilities
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/knowledge-management-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Knowledge Base
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/sales-management-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Sales
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/estimates-management-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Estimates Request
                              </a>
                            </Link>
                          </li>

                          {/* <li>
                              <Link href="/customer-center">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Customer Center
                                </a>
                              </Link>
                            </li> */}
                          <li>
                            <Link href="/purchase-management-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Purchase
                              </a>
                            </Link>
                          </li>
                          {/* <li>
                              <Link href="/suppliers">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Suppliers
                                </a>
                              </Link>
                            </li> */}
                          <li>
                            <Link href="/expense-management-system">
                              <a>
                                <i className="fi fi-rr-star" />
                                Expenses
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/contract-tracking-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Contracts
                              </a>
                            </Link>
                          </li>

                          {/* <li>
                              <Link href="/project-roadmap">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Project Roadmap
                                </a>
                              </Link>
                            </li> */}
                        </div>

                        <div>
                          {/* <li>
                              <Link href="/fixed-asset">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Fixed Assets
                                </a>
                              </Link>
                            </li> */}

                          {/* <li>
                              <Link href="/commissions">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  commissions
                                </a>
                              </Link>
                            </li> */}

                          <li>
                            <Link href="/inventory-management-system">
                              <a>
                                <i className="fi fi-rr-star" />
                                Inventory
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/recruitment-management-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Hiring
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/lead-management-system">
                              <a>
                                <i className="fi fi-rr-star" />
                                Leads
                              </a>
                            </Link>
                          </li>
                          {/* <li>
                              <Link href="/lead-manager">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Lead Manager
                                </a>
                              </Link>
                            </li> */}
                          {/* <li>
                              <Link href="/loyality">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Loyality
                                </a>
                              </Link>
                            </li> */}
                          <li>
                            <Link href="/task-management-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Tasks
                              </a>
                            </Link>
                          </li>

                          {/* <li>
                              <Link href="/task-bookmarks">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Task Bookmarks
                                </a>
                              </Link>
                            </li> */}

                          {/* <li>
                              <Link href="/mindmap">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Mindmap
                                </a>
                              </Link>
                            </li> */}
                          {/* <li>
                              <Link href="/reminder">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Reminder
                                </a>
                              </Link>
                            </li> */}

                          {/* <li>
                              <Link href="/appoinments">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Appoinments
                                </a>
                              </Link>
                            </li> */}
                          <li>
                            <Link href="/best-hrms-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                HR Records
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/hr-and-payroll-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                HR & Payroll
                              </a>
                            </Link>
                          </li>

                          {/* <li>
                              <Link href="/wikibooks">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Wiki Books
                                </a>
                              </Link>
                            </li> */}

                          <li>
                            <Link href="/sales-rep-erp-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Sales Agent
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/project-management-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Projects
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

                          {/* <li>
                              <Link href="idea-hub">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Idea Hub
                                </a>
                              </Link>
                            </li> */}

                          {/* <li>
                              <Link href="/feedback">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Feedback
                                </a>
                              </Link>
                            </li> */}

                          {/* <li>
                              <Link href="/staff-booking">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Staff Booking
                                </a>
                              </Link>
                            </li> */}
                          {/* <li>
                              <Link href="/staff-workload">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Staff Workload
                                </a>
                              </Link>
                            </li> */}

                          {/* <li>
                              <Link href="/teampasswords">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Team passwords
                                </a>
                              </Link>
                            </li> */}

                          <li>
                            <Link href="/reports-module-in-erp">
                              <a>
                                <i className="fi fi-rr-star" />
                                Reports
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/erp-document-management">
                              <a>
                                <i className="fi fi-rr-star" />
                                File Manager
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/assets-management-erp-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Company Assets
                              </a>
                            </Link>
                          </li>

                          {/* <li>
                              <Link href="/spreadsheet">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Spreadsheet Online
                                </a>
                              </Link>
                            </li> */}
                          {/* <li>
                              <Link href="/setup">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Setup
                                </a>
                              </Link>
                            </li> */}
                          {/* <li>
                              <Link href="videolibrary">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Video Library
                                </a>
                              </Link>
                            </li> */}

                          <li>
                            <Link href="/webhook">
                              <a>
                                <i className="fi fi-rr-star" />
                                Web Hooks
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/manufacturing-erp-software">
                              <a>
                                <i className="fi fi-rr-star" />
                                Manufacturing
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/ticketing-system-in-erp">
                              <a>
                                <i className="fi fi-rr-star" />
                                Support
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link href="/point-of-sale-system">
                              <a>
                                <i className="fi fi-rr-star" />
                                Point Of Sales
                              </a>
                            </Link>
                          </li>

                          {/* <li>
                              <Link href="/recruitment">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Recruitment
                                </a>
                              </Link>
                            </li> */}

                          {/* <li>
                              <Link href="/objective">
                                <a>
                                  <i className="fi fi-rr-star" />
                                  Objective
                                </a>
                              </Link>
                            </li> */}
                        </div>
                      </div>
                    </ul>
                  </li>

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
                        <Link href="/it-erp-software">
                          <a className="closer">
                            <i className="fi fi-rr-edit"></i>IT & Support
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                          <Link href="/oilandgas">
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>OIL & GAS
                            </a>
                          </Link>
                        </li> */}
                      <li>
                        <Link href="/manufacturing-software">
                          <a className="closer">
                            <i className="fi fi-rr-edit"></i>Manufacturing
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/retail-erp-software">
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

                  <li className="">
                      <Link href="/blog">
                        <a className="acuspad">blog</a>
                      </Link>
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
                    <img
                      src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${shodan.country_code || "IN"
                        }.svg`}
                      style={{
                        marginRight: "15px",
                        width: "30px",
                        objectFit: "cover",
                        marginBottom: "3px",
                      }}
                    ></img>
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

              <div className={styles.sidebar}>
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
          </div>
          <div className={styles.mobera} style={{marginRight:"50px"}}>
            <Link href="/request-a-demo">
              <button className={styles.button86} role="button">Get free  demo</button>
            </Link>
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
    </header >
    </>
  );
};

export default Header;

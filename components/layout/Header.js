/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo ">
                                <Link href="/">
                                    <a className="d-flex">
                                        {headerStyle ? <img width={150} alt="Shadobooks" src="/assets/logo/logo.png" /> : <img width={150} alt="Agon" src="/assets/logo/logo.png" />}

                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="">
                                            <Link href="/"><a className="active acuspad">Home</a></Link>

                                        </li>
                                        <li className="has-children">
                                            <Link href="#"><a className="acuspad">Features</a></Link>
                                            <ul className="sub-menu" style={{ width: "900px" }}>
                                                <div style={{ display: "flex", justifyContent: "" }}>
                                                    <div>
                                                        <li>
                                                            <Link href="/analytics"><a><i className="fi fi-rr-star" />Sales</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/Automation"><a><i className="fi fi-rr-star" />Purchase</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />Expenses</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Accounting</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Reports</a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="/analytics"><a><i className="fi fi-rr-star" />Leads
                                                            </a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/Automation"><a><i className="fi fi-rr-star" />Lead Management</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />Fixed asset</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Customer center</a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />Fixed asset</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Customer center</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Loyality</a></Link>
                                                        </li>


                                                    </div>

                                                    <div>






                                                        <li>
                                                            <Link href="/Automation"><a><i className="fi fi-rr-star" />Appoinments</a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />Suppliers</a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Expenses</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Commissions</a></Link>
                                                        </li>



                                                        <li>
                                                            <Link href="/Automation"><a><i className="fi fi-rr-star" />Contracts</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />Projects</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Account planning</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Task</a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Task Bookmarks
                                                            </a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Estimates Request</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Accounting</a></Link>
                                                        </li>



                                                        <li>
                                                            <Link href="/Automation"><a><i className="fi fi-rr-star" />Reports</a></Link>
                                                        </li>



                                                    </div>




                                                    <div>

                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />HR Payroll</a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Project Roadmap</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Mindmap</a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Reminder
                                                            </a></Link>
                                                        </li>


                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />Staff Booking
                                                            </a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Staff Workload</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Hr Records</a></Link>
                                                        </li>



                                                        <li>
                                                            <Link href="/Automation"><a><i className="fi fi-rr-star" />Team passwords
                                                            </a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />Spreadsheet Online</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Setup</a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Video Library</a></Link>
                                                        </li>

                                                        <li>
                                                            <Link href="customization"><a><i className="fi fi-rr-star" />Web Hooks
                                                            </a></Link>
                                                        </li>

                                                    </div>




                                                    <div>
                                                        <li>
                                                            <Link href="/#"><a><i className="fi fi-rr-star" />wiki Books
                                                            </a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/process-management"><a><i className="fi fi-rr-star" />Manufacturing</a></Link>
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
                                        <li className="has-children">
                                            <Link href="#"><a className="acuspad">Resources</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/index-8"><a className="closer"><i className="fi fi-rr-edit" />Videos</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-pricing-2"><a className="closer"><i className="fi fi-rr-edit" />FAQs</a></Link>
                                                </li>

                                                <li>
                                                    <Link href="/page-service-2"><a><i className="fi fi-rr-document-signed" />Documentation</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><a><i className="fi fi-rr-document-signed" />Support Portal </a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><a><i className="fi fi-rr-document-signed" />CRM Tips</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><a><i className="fi fi-rr-document-signed" />Guided Tour</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="#" className="acuspad">Solutions</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/itsupport"><a className="closer"><i className="fi fi-rr-edit"></i>IT & Support</a></Link></li>
                                                <li><Link href="/page-service-2"><a className="closer"><i className="fi fi-rr-edit"></i>OIL & GAS</a></Link></li>
                                                <li><Link href="/index-3"><a className="closer"><i className="fi fi-rr-edit"></i>Manufacturing</a></Link></li>
                                                <li><Link href="/index-4"><a className="closer"><i className="fi fi-rr-edit"></i>Retail & Wholesalers</a></Link></li>
                                                <li><Link href="/index-5"><a className="closer"><i className="fi fi-rr-edit"></i>Hiring Agencies</a></Link></li>
                                                <li><Link href="/index-6"><a className="closer"><i className="fi fi-rr-edit"></i>Leads</a></Link></li>
                                                <li><Link href="/index-7"><a className="closer"><i className="fi fi-rr-edit"></i>Marketing</a></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white cusburgericon" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link href="/page-signup"><span className="btn btn-default hover-up icon-arrow-right acuspad">Get Started</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;
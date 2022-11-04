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
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/analytics"><a><i className="fi fi-rr-star" />Analytics</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/Automation"><a><i className="fi fi-rr-star" />Automated Marketing</a></Link>
                                                </li>
                                                {/* <li>
                                                    <Link href="/#"><a><i className="fi fi-rr-star" />Mobile App</a></Link>
                                                </li> */}
                                                <li>
                                                    <Link href="/process-management"><a><i className="fi fi-rr-star" />Process Management</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="customization"><a><i className="fi fi-rr-star" />Customization</a></Link>
                                                </li>
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
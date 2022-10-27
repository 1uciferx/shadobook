/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="user-account">
                            <img src="/assets/imgs/template/ava_1.png" alt="Agon" />
                            <div className="content">
                                <h6 className="user-name">
                                    Hi <span className="text-brand">Steven !</span>
                                </h6>
                                <p className="font-xs text-muted">
                                    You have 5 new messages
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>
                                            <Link href="/"><a className="active">Home</a></Link>
                                            <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/"><a>Slider With Informations</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-2"><a>Clients Show Up</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-3"><a>Features</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                            </ul>
                                        </li>


                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/page-about-1"><a>Features</a></Link>
                                            <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/page-about-1"><a>Analytics</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-about-2"><a>Automated Marketing</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-about-3"><a>Mobile App</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-about-3"><a>Process Management</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-about-3"><a>Customization</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                            </ul>
                                        </li>

                                        <li className=" ">
                                            

                                        <Link href="/page-about-1"><a>Pricing</a></Link>
                                            
                                        </li>


                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(3)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/page-service-1"><a>Support</a></Link>
                                            <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/page-service-1"><a className="closer">Contact us</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-service-2"><a className="closer">Technical Support</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(4)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/#"><a>Resources</a></Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/page-contact"><a>Videos </a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-signup"><a>FAQs </a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-login"><a>Documentation </a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-reset"><a>Support Portal </a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/404"><a>CRM Tips</a></Link>
                                                </li>

                                                <li>
                                                <Link href="/404"><a>Guided Tour</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/blog-1"><a>Solution</a></Link>
                                            <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/blog-1"><a className="closer">IT & Support</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/blog-2"><a className="closer">OIL & GAS</a></Link>
                                                </li>
                                                
                                                <li>
                                                    <Link href="/blog-single"><a>Manufacturing</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/blog-single"><a>Retail & Wholesalers</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/blog-single"><a>Hiring Agencies</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/blog-single"><a>Leads</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/blog-single"><a>Marketing</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/#"><a>Profile</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Work Preferences</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>My Boosted Shots</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>My Collections</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Account Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Go Pro</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/page-login"><a>Sign Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright color-gray-400">
                                Copyright 2022 © Agon - Agency Template.<br />Designed
                                by
                                <Link href="http://alithemes.com"><a>&nbsp; AliThemes</a></Link>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;
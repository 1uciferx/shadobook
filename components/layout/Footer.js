/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
    return (
        <>

            <footer className="footer mt-50" >
                <div className="container">
                    {/* <div className="footer-top">
                        <div className="row">
                            {/* <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link href="/">
                                    <a className="d-flex">
                                        <img width={150} alt="Shadobooks" src="/assets/logo/logo.png" />
                                    </a>
                                </Link>
                            </div> */}
                            {/* <div className="col-md-8 col-sm-6 text-center text-md-end"> */}


                            {/* <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">The Financial Shadow of your Company</span> */}

                            {/* <Link href="#">
                                
                                 <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">The Financial Shadow of your Company</span> 
                                
                                <Link href="#">
                                    <a className="btn btn-square">The Financial Shadow of your Company</a>
                                </Link>
                            </div> */}
                        {/* </div>
                    </div> */} 
                    <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">Office 903, 9th floor, Damas
                                Building, Al Maktoum Road, Dubai, UAE
                            </div>

                            <div className="mt-20 text-body-text color-gray-600"><a href="callto:+971 52 872 2900">+971 52 872 2900</a></div>
                            <div className="text-body-text color-gray-600"><a href="callto:+971 42 253 534">+971 42 253 534</a></div>
                            <div className="mt-20 text-body-text color-gray-600"><a href="mailto:info@shadobooks.com">info@shadobooks.com</a></div>

                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/request-a-demo">
                                        <a>Request a Demo</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-contact">
                                        <a>Contact us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://wa.me/00971528722900">
                                        <a>Whats App Us</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/#">
                                        <a>Press &amp; Media</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Advertising</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Testimonials</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Our Solutions</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/itsupport">
                                        <a>IT Solutions</a>
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
                                    <Link href="/#">
                                        <a>Cookie Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Office Center</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>News &amp; Events</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Discover</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#">
                                        <a>Our Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-terms">
                                        <a>Terms of Service</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/#">
                                        <a>Live Chatting</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Support Center</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/best-hrms-software">
                                        <a>Hr Records</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/expense-management-system">
                                        <a>Expenses</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/reports-module-in-erp">
                                        <a>Reports</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/task-management-software">
                                        <a>Tasks</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/#">
                                        <a>Stories</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-8">
                                <span className="color-gray-400 text-body-lead"> © ShadoBooks Pvt.Ltd</span>
                                <Link href="/privacy-policy">
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                {/* <Link href="/#">
                                    <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                                </Link> */}
                                <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link>
                            </div>
                            <div className="col-md-3 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://www.facebook.com/shadobookscrm">
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com/shadobooks_erp">
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com/shadobooks_crm/">
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/shadobooks/">
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>
                                    <Link href="https://wa.me/00971528722900">

                                        <a className="icon-socials icon-whatsapp"></a>
                                    </Link>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;
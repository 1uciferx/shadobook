import React from 'react'
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Requestademo() {
    return (
        <Layout>
            <section className="section-box">
                <div className="bg-6-opacity-30 pt-90">
                    <div className="container">
                        <div className="box-signup">
                            <h1 className="text-heading-3 mb-50 text-center">Request a demo</h1>
                      
                            <div className="box-form-signup mb-200">
                                <div className="form-group"><input className="form-control" placeholder="Your name *" />
                                    {/* <Link href="/#"><a className="link-edit text-body-text">Edit</a></Link> */}
                                </div>
                                <div className="form-group"><input className="form-control" placeholder="Your email *" /></div>

                                <div className="form-group"><input className="form-control" placeholder="Company Name" /></div>

                                <div className="form-group"><input className="form-control" placeholder="Phone *" /></div>

                                <div className="form-group"><textfield className="form-control" placeholder="Your email *" /></div>


                                <div className="form-group"><label className="text-body-small color-gray-500"><input className="chkbox" type="checkbox" /> Agree to
                                    <Link href="/#"><a>terms &amp; conditions</a></Link>
                                </label></div>
                                <div className="form-group"><button className="btn btn-green-full text-heading-6">Continue</button></div>

                            </div>
                        </div>
                    </div>
                    <div className="images-lists">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-6 pl-0"><img className="img-responsive img-full img-1" src="assets/imgs/page/signup/img-1.png" alt="Agon" /></div>
                            <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-2" src="assets/imgs/page/signup/img-2.png" alt="Agon" /></div>
                            <div className="col-lg-4 col-md-4 col-sm-12"><img className="img-responsive img-full img-3" src="assets/imgs/page/signup/img-3.png" alt="Agon" /></div>
                            <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-4" src="assets/imgs/page/signup/img-4.png" alt="Agon" /></div>
                            <div className="col-lg-2 col-md-2 col-sm-6 pr-0"><img className="img-responsive img-full img-5" src="assets/imgs/page/signup/img-5.png" alt="Agon" /></div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Requestademo
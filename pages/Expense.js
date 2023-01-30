/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";


function BlogSingle() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-head-image" style={{ background: 'url(assets/imgs/page/blog/single/banner.png)' }}>
                            <div className="container">
                                <div className="text-center">
                                    <h1 className="text-heading-1 color-white mt-30">Expenses</h1>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-50">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <div className="single-detail mt-50"><img className="img-responsive bdr-16" src="assets/imgs/page/homepage1/ggj.jpg" alt="shadobooks" />
                                        <p />

                                        <h2 className="text-heading-3">Benefits of Record Expenses</h2>
                                        <p>The following are the expenses benefits in Shadobooks CRM:
                                            <br /><br />
                                            ➟ Fewer delays and errors,
                                            <br /><br />
                                            ➟ Greater operational efficiency,
                                            <br /><br />
                                            ➟ Greater visibility,
                                            <br /><br />
                                            ➟ Simplified reporting,
                                            <br /><br />
                                            ➟ Greater compliance.</p>
                                        <p />
                                        <br /><br />

                                        <h3 className="text-heading-3">Direct Expenses</h3>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <p>➟ Direct expenses are expenses that a corporation can easily link to a specific "cost item," which could be a product, department, or project.
                                                    <br /><br />
                                                    ➟ This category may contain software, equipment, and raw materials.
                                                    <br /><br />
                                                    ➟ It can also involve labour, assuming the labour is specific to the product, department, or project.</p>
                                            </div>
                                            <div className="col-lg-4"><img className="img-responsive bdr-10 mt-10" src="assets/imgs/page/homepage1/dd.jpg" alt="Agon" /></div>
                                        </div>
                                        <p />



                                        <h3 className="text-heading-3">Indirect Expenses</h3>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <p>➟ Indirect expenses are those that cannot be determined directly within a given product or service.
                                                    <br /><br />
                                                    ➟ Indirect expenses include the costs of maintaining and running a business.
                                                    <br /><br />
                                                    ➟ These overhead costs are once left over the direct costs have been computed further.</p>
                                                <br /><br />
                                            </div>
                                            <div className="col-lg-4"><img className="img-responsive bdr-10 mt-10" src="assets/imgs/page/homepage1/ii.jpg" alt="shadobooks" /></div>
                                        </div>
                                        <p />

                                        <div className="single-detail mt-50"><img className="img-responsive bdr-16" src="assets/imgs/page/homepage1/ssd.png" alt="shadobooks" />
                                        </div>
                                        <p />

                                        <h2 className="text-heading-3">Overview and How to Record expenses in shadobooks CRM</h2>
                                        <p>➟ To add a new expense, select Expenses ⇢ Record Expense from the side menu.
                                            <br /><br />
                                            ➟ Fill out the details in the expenses form and save it.
                                            <br /><br />
                                            ➟ You can assign tasks to newly created expenses and attach 'expense receipts' as well.</p>
                                        <p />
                                        <br /><br />


                                    </div>

                                </div>

                            </div>

                        </div>



                    </section>


                </div>

            </Layout>

        </>
    )
}

export default BlogSingle;
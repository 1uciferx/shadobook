/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Pricing1() {
  const data = [
    // {
    //     avatar: "1.jpg",
    //     name: "Dashboard",
    //     company: "Louis Vuitton",
    //     quote: " ",
    //     bg: "hi"
    // },
    {
      standard: "Users 3",
      professional: "Users 2",
      premium: "Users 3",
      elite: "Users 3",
    },
    {
      standard: "Custom Modules ❌",
      professional: "Custom Modules ❌",
      premium: "Custom Modules 10",
      elite: "Custom Modules 10",
    },
    {
      standard: "Estimates ✔",
      professional: "Estimates ✔",
      premium: "Estimates ✔",
      elite: "Estimates ✔",
    },

    {
      standard: " Invoice ✔",
      professional: " Invoice ✔",
      premium: " Invoice ✔",
      elite: " Invoice ✔",
    },
    {
      standard: " Manage Clients ✔",
      professional: " Manage Clients ✔",
      premium: " Manage Clients ✔",
      elite: " Manage Clients ✔",
    },
    {
      standard: "Customer Portal ✔",
      professional: "Customer Portal ✔",
      premium: "Customer Portal ✔",
      elite: "Customer Portal ✔",
    },
    {
      standard: "Purchase Orders ✔",
      professional: "Purchase Orders ✔",
      premium: "Purchase Orders ✔",
      elite: "Purchase Orders ✔",
    },
    {
      standard: "Stock Tracking ✔",
      professional: "Stock Tracking ✔",
      premium: "Stock Tracking ✔",
      elite: "Stock Tracking ✔",
    },
    {
      standard: "Online Payments ✔",
      professional: "Online Payments ✔",
      premium: "Online Payments ✔",
      elite: "Online Payments ✔",
    },
    {
      standard: "Generate Payment Links ✔",
      professional: "Generate Payment Links ✔",
      premium: "Generate Payment Links ✔",
      elite: "Generate Payment Links ✔",
    },
    {
      standard: "Import PDF Statements ✔",
      professional: "Import PDF Statements ✔",
      premium: "Import PDF Statements ✔",
      elite: "Import PDF Statements ✔",
    },
    {
      standard: "Manual ✔",
      professional: "Manual ✔",
      premium: "Manual ✔",
      elite: "Manual ✔",
    },
    {
      standard: "Predefined User Roles ✔",
      professional: "Predefined User Roles ✔",
      premium: "Predefined User Roles ✔",
      elite: "Predefined User Roles ✔",
    },
    {
      standard: "Multi-Lingual Transactions ✔",
      professional: "Multi-Lingual Transactions ✔",
      premium: "Multi-Lingual Transactions ✔",
      elite: "Multi-Lingual Transactions ✔",
    },
    {
      standard: "Reports ✔",
      professional: "Reports ✔",
      premium: "Reports ✔",
      elite: "Reports ✔",
    },
    {
      standard: "Project Invoices ✔",
      professional: "Project Invoices ✔",
      premium: "Project Invoices ✔",
      elite: "Project Invoices ✔",
    },
    {
      standard: "Project Tasks ✔",
      professional: "Project Tasks ✔",
      premium: "Project Tasks ✔",
      elite: "Project Tasks ✔",
    },
    {
      standard: "E-Invoicing ✔",
      professional: "E-Invoicing ✔",
      premium: "E-Invoicing ✔",
      elite: "E-Invoicing ✔",
    },
    {
      standard: "Custom Fields ✔",
      professional: "Custom Fields ✔",
      premium: "Custom Fields ✔",
      elite: "Custom Fields ✔",
    },
    {
      standard: "Tasks ❌",
      professional: "Tasks ✔",
      premium: "Tasks ✔",
      elite: "Tasks ✔",
    },
    {
      standard: "Recurring Journals ❌",
      professional: "Recurring Journals ✔",
      premium: "Recurring Journals ✔",
      elite: "Recurring Journals ✔",
    },
    {
      standard: "Recurring Bills ❌",
      professional: "Recurring Bills",
      premium: "Recurring Bills ✔",
      elite: "Recurring Bills ✔",
    },
    {
      standard: "Customer Approval ❌",
      professional: "Customer Approval ✔",
      premium: "Customer Approval ✔",
      elite: "Customer Approval ✔",
    },
    {
      standard: "Sales Approval ❌",
      professional: "Sales Approval ✔",
      premium: "Sales Approval ✔",
      elite: "Sales Approval ✔",
    },
    {
      standard: "Purchase Approval ❌",
      professional: "Purchase Approval ✔",
      premium: "Purchase Approval ✔",
      elite: "Purchase Approval ✔",
    },
    {
      standard: "Custom Roles ❌",
      professional: "Custom Roles ✔",
      premium: "Custom Roles ✔",
      elite: "Custom Roles ✔",
    },
    {
      standard: "Vendor Portal ❌",
      professional: "Vendor Portal ❌",
      premium: "Vendor Portal ✔",
      elite: "Vendor Portal ✔",
    },
    {
      standard: "Warehouse Management ❌",
      professional: "Warehouse Management ❌",
      premium: "Warehouse Management ❌",
      elite: "Warehouse Management ✔",
    },
    {
      standard: "Print Shipping Label ❌",
      professional: "Print Shipping Label ❌",
      premium: "Print Shipping Label ❌",
      elite: "Print Shipping Label ✔",
    },
    {
      standard: "Shipment Tracking ❌",
      professional: "Shipment Tracking ❌",
      premium: "Shipment Tracking ❌",
      elite: "Shipment Tracking ✔",
    },
    {
      standard: "Twilio ❌",
      professional: "Twilio ❌",
      premium: "Twilio ✔",
      elite: "Twilio ✔",
    },
    {
      standard: "Razorpay ✔",
      professional: "Razorpay ✔",
      premium: "Razorpay ✔",
      elite: "Razorpay ✔",
    },
    {
      standard: "Paytm ✔",
      professional: "Paytm ✔",
      premium: "Paytm ✔",
      elite: "Paytm ✔",
    },
    {
      standard: "Email ✔",
      professional: "Email ✔",
      premium: "Email ✔",
      elite: "Email ✔",
    },
    {
      standard: "Voice ❌",
      professional: "Voice ✔",
      premium: "Voice ✔",
      elite: "Voice ✔",
    },
    {
      standard: "Chat ❌",
      professional: "Chat ❌",
      premium: "Chat ✔",
      elite: "Chat ✔",
    },
  ];
  return (
    <>
      <Layout>
        <section
          className="section-box mt-70"
          style={{ marginBottom: "150px" }}
        >
          <div className="container mt-50">
            <h3 className="text-heading-1 text-center mb-10">
              Choose The Best Plan
              <br className="d-lg-block d-none" />
              That’s For You
            </h3>
          </div>
          <div className="container mt-20">
            {/* <div className="text-center block-bill-2 mt-10"><span className="text-lg text-billed">Billed Monthly</span><label className="switch ml-20 mr-20"><input id="cb_billed_type" type="checkbox" name="billed_type" /><span className="slider round" /></label><span className="text-lg text-billed">Bill Annually</span></div> */}
            <div className="block-pricing block-pricing-2 mt-70">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      <div className="box-pricing-item hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            {" "}
                            AED 1000
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">STANDARD</h4>
                          <p className="text-body-small color-gray-400">
                            All the basics for businesses that are just getting
                            started.
                          </p>
                        </div>
                        {data.map((item, i) => (
                          <ul className="list-package-feature">
                            <li>{item.standard}</li>
                          </ul>
                        ))}
                        <div>
                          {/* <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="box-pricing-item  hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            AED 1500
                          </span>
                          <span className="text-heading-3 for-year">$1068</span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">PROFESSIONAL</h4>
                          <p className="text-body-small color-gray-400">
                            All the basics for businesses that are just getting
                            started.
                          </p>
                        </div>
                        {data.map((item, i) => (
                          <ul className="list-package-feature">
                            <li>{item.professional}</li>
                          </ul>
                        ))}
                        <div>
                          {/* <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="box-pricing-item hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            AED 1300
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">PREMIUM</h4>
                          <p className="text-body-small color-gray-400">
                            Avvanced features for pros who need more
                            customization.
                          </p>
                        </div>
                        {data.map((item, i) => (
                          <ul className="list-package-feature">
                            <li>{item.premium}</li>
                          </ul>
                        ))}
                        <div>
                          {/* <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="box-pricing-item hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            AED 1150
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">ELITE</h4>
                          <p className="text-body-small color-gray-400">
                            Avvanced features for pros who need more
                            customization.
                          </p>
                        </div>
                        {data.map((item, i) => (
                          <ul className="list-package-feature">
                            <li>{item.elite}</li>
                          </ul>
                        ))}
                        <div>
                          {/* <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Pricing1;

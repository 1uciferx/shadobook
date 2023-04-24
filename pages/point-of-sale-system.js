/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/Index.module.css";
import Newslider from "../components/newslider";
import Contactmanager from "../components/contactmanager";
import Head from "next/head";

function POS() {
  return (
    <>
      <Head>
        <title>Best Point of Sale System | Shadobooks ERP</title>
        <meta
          name="description"
          content="Our Point of Sale system simplifies electronic invoicing, sales tracking, and customer purchase tracking. It is device agnostic and works both online and offline."
        />
         <meta name="keywords" content="Point of Sale System"/>
      </Head>

      <Layout>
        <div className="page-homepage7-bg"></div>
        <div className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{ background: "url(assets/imgs/page/homepage4/POS.jpg)" }}
          >
            <div className="container mt-40">
              <div className="row">
                <div className="col-lg-6 mt-30">
                  <h1 className="text-display-4 color-white">Best Point of Sale System</h1>
                  <div className="list-social-banner">
                    <Link href="https://www.facebook.com/shadobookscrm">
                      <a className="social-banner facebook hover-up"></a>
                    </Link>

                    <Link href="https://www.instagram.com/shadobooks_crm/">
                      <a className="social-banner instagram hover-up"></a>
                    </Link>

                    <Link href="https://twitter.com/shado_books">
                      <a className="social-banner twitter hover-up"></a>
                    </Link>

                    <Link href="https://www.linkedin.com/company/shadobooks/">
                      <a className="social-banner linkedin hover-up"></a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 offset-xl-1 mt-30">
                  <p className="text-body-lead-large color-white">
                    "In ShadoBooks ERP, you can streamline your sales
                    operations, including product setup, trade discount
                    management, diary synchronization, point of sale
                    transactions, and e-commerce integration, all in one
                    centralized platform."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-90">
          <div className="row">
            <div className="col-lg-12 col-sm-12 pr-30">
              <div className="card-grid-style-4">
                <h2 className="text-heading-2">Order List</h2>
                <div className="grid-4-img">
                  {/* <Link href="#"> */}
                  <a>
                    <img src="assets/imgs/page/about/8/POSOL.png" alt="Point of Sale System" />
                  </a>

                  {/* </Link> */}
                </div>

                <p className="text-body-text color-gray-800 mt-20">
                  <p />
                  To create an order, go to the point of sale module in
                  Shadobook ERP
                  <br></br>
                  <br></br>
                  ➟ Click the "Order List" option, In the window that opens,
                  click the "Create Order" tab
                  <br />
                  <br />
                  ➟ To create a return order, click the "Create Return Order"
                  tab
                  <br />
                  <br />
                  ➟ Enter details such as the order return number, sales order,
                  phone number, order date, customer, etc.
                  <br />
                  <br />➟ Click the save button, The order list will now be
                  visible in list view.  After the sale is complete, if a consumer has a query about a product, they may quickly create a<span><a href="/estimates-management-software"> Ticket</a></span> from the POS. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <img
                  src="assets/imgs/page/about/8/Productsetup.png"
                  alt="Point of Sale System"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-2 ">Products Setup</h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      ERP in Shadobook offers product setup through POS, Portal,
                      WooCommerce, and Pre-Order channels
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Each channel has separate setting options.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      To create a product setup, go to the point of sale module
                      in Shadobook ERP, Click the "Product Setup" option.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      The channels will be visible in this window, and you can
                      select the desired channel to set up the product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <img src="assets/imgs/page/about/8/POSTD.png" alt="Point of Sale System" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-2 ">Trade Discount</h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      In the window, there is an option to create a trade
                      discount, There are separate tabs such as Promotions and
                      Vouchers.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      To add a new trade discount, click the "Add New" button in
                      each tab.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Enter fields such as the trade discount's name, start
                      date, formal discount, etc... , Click the save button.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      The trade discount list will now be visible in Shadobook
                      ERP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <img src="assets/imgs/page/about/8/POSDS.png" alt="Point of Sale System" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-2 ">Diary sync</h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      To get the diary sync in Shadobook ERP, go to the point of
                      sale module
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Click the "Diary Sync" option, From here, you can access
                      the following list options
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Product (from store information +
                      image),Description,Price,Orders and Inventory management.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Click on each tab to access the relevant information, All
                      information is displayed in list format.Product (from store information + image), Description, Price, Orders and<span><a href="/inventory-management-system"> Inventory</a></span> management. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <img src="assets/imgs/page/about/8/POSMOD.png" alt="Point of Sale System" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-2 ">Shift Management</h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      To access the shift management feature, select the option
                      by clicking on the point of sale module.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      To create a new shift, click the "Create Shift" button.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Enter the new open shift balance, Click the "Save" button.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Shift management list can be seen in list format.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <img src="assets/imgs/page/about/8/POSECOM.png" alt="Point of Sale System" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-2 ">E-Commerce</h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Shadobook ERP has an E-commerce option for conducting
                      business through an online store.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      To access this option, go to the point of sale module.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Select the E-commerce option.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      This will open the online store login window to conduct
                      business. Companies can monitor and gather information on sales and customer data that is associated with the use of<span><a href="/webhook"> Web hooks.</a></span> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <img src="assets/imgs/page/about/8/POSSET.png" alt="Point of Sale System" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-2 ">Settings</h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Setting in point of sale is the configuration of the
                      system
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Setting up the automatic sync config.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Order setting.
                    </p>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12 mt-10">
                    <p className="text-body-excerpt color-gray-600 icon-leaf">
                      Default setting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modslider}>
          <div className="mt-50">
            <Newslider />
            <div className="text-center">
              <Link href="/our-product">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    padding: "10px",
                    marginTop: "15px",
                    marginBottom: "30px",
                  }}
                >
                  Show More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Contactmanager />
        </div>
      </Layout>
    </>
  );
}

export default POS;

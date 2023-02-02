/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Home() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  return (
    <>
      {/* <Link href="/#">
                <a>Link</a></Link>
            </Link> */}
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-head-image" style={{ background: "url('assets/background27.jpg')" }}>

            <div className="container">
              <div className="row">
                <div className="col-lg-10">
                  <h1 style={{color:"white", marginTop:"-40px"}} className="text-display-2">
                  Accounting
                  </h1>
                  <p  style={{color:"white",objectFit:"cover"}} className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  ShadobooksERP provides a comprehensive accounting solution for companies, featuring various functions such as banking transactions, reconciliation, journal entries, transfers, budgeting, and chart of accounts. The system is highly customizable to meet the unique requirements of your organization, helping you to simplify your financial processes, improve accuracy, and gain valuable insights into your business's financial status.
                 </p>
                
                </div>
             
              </div>
            </div>
          </div>
        </section>


        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                <h2 className="text-heading-1 color-gray-900">
                Why choose us<br className="d-lg-block d-none" />
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                Today, businesses require an advanced ERP system. ShadobooksERP provides access to up-to-date information and has been bringing innovative solutions, cost reduction, and exceptional business processes to Middle Eastern organizations.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>

          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-5 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Dashboard
                        </h3>
                        <p >
                        
                        <li>
              	ShadobooksERP Accounting dashboard allows users to view and manage their financial data in an organized and visually appealing way. 
              </li>
              <br></br>
            <li>
            	It typically includes a variety of widgets and charts that display information such as income and expenses, profit and loss, and balances for different accounts. 
            </li>
            <br></br>
            <li>
            	Users can customize the dashboard to show the information that is most relevant to them, and can also set up alerts and notifications for specific events.
            </li>


                        </p>


                      </div>
                    </div>


                    <div className="col-lg-6 col-md-12">
                   



                        <img  className="img-responsive mt-120" src="/accountingpage/pic1.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        
        </section>

       
          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-2 panel-box mt-100">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Banking
                        </h3>
                        <p >
                        <li>
              	The Banking sub-module in ShadobooksERP Accounting feature allows users to manage their bank transactions within the software. 
                </li>
                <br></br>
                <li>	It includes features such as connecting to bank accounts, automatically importing bank transactions, reconciling bank statements.
                  </li>
                  <br></br>
                  <li>
                  	With this, user can easily track and manage their bank transactions, which can help them to make better-informed decisions. 
                  </li>
                  <br></br>
                  <li>
                  	Additionally, the it can help users automate their accounting processes and reduce errors, which can save them time and money.
                  </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                   
                      


                        <img  className="img-responsive mt-130" src="/accountingpage/pic2.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
  




          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-8 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Transactions
                        </h3>
                        <p >

                        <li>
              The Transactions sub-module in ShadobooksERP Accounting feature includes, creating and managing invoices, vouchers, estimates, purchase orders, payslips and credit notes. </li>
               
              <br></br>
                <li>
                	It allows users to track and manage their payments, and apply credits to invoices. 
                  </li>
                  <br></br>
                  <li>
                  	This feature also allows the user to generate reports on transactions, such as revenue, expenses, and outstanding invoices. 
                  </li>
                  <br></br>
                  <li>
                  	It can also automate accounting tasks, save time and reduce errors.
                  </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
               


                        <img  className="img-responsive mt-170" src="/accountingpage/pic3.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
    



          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-1 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Journal Entry
                        </h3>
                        <p >
                        <li>
              	The Journal Entry sub-module in ShadobooksERP Accounting feature enables users to record and manage their financial transactions in the form of journal entries. 
                </li>
                <br></br>
                <li>
                	It enables users to record journal entries, including the ability to create and manage journal entries, record and track payments, debits and apply credits to invoices.
                </li>
                <br></br>

                
                  <li>
                  	It can also help to maintain the integrity of financial records and ensure compliance with accounting principles.
                  </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                
                       


                        <img className="img-responsive mt-120" src="/accountingpage/pic4.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
      





          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-4 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Transfer
                        </h3>
                        <p >
                        <li>
              	In ShadobooksERP, this feature allows the user to record financial transactions such as transferring money from one account to another. 
                </li>
                <br></br>

                <li>
               	This will help users to keep track of their financial transactions and maintain the integrity of their financial records. 
                </li>
                <br></br>
                <li>
                	Additionally, this feature can also be used to record inter-company transactions.
                </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                     
                      

                        <img className="img-responsive mt-90" src="/accountingpage/pic5.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        







          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Chart of Accounts
                        </h3>
                        <p >
                        <li>
              	In ShadobooksERP the Chart of Accounts sub-module feature allows users to manage and organize their financial accounts. 
                </li>
                <br></br>
                <li>
                	This includes creating and managing different types of accounts, such as income, expense, asset, liability, and equity accounts. 
                  </li> 
                  <br></br>
                  <li>
                  This feature enables users to choose a ledger from the list of sub-ledgers
                  </li>
                  <br></br>
                  <li>
                  It can also help to maintain the integrity of financial records and ensure compliance with accounting principles.
                  </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                   
                      


                        <img  className="img-responsive mt-120" src="/accountingpage/pic6.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
      






          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-7 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Reconcile
                        </h3>
                        <p >
                        <li>
              	The Reconcile module allows users to match their bank and credit card transactions with the corresponding entries in their ShadobooksERP.
                </li>
                <br></br>
                <li>
                	It helps users to quickly match transactions and make any necessary adjustments. 
                </li>
                <br></br>
                <li>
                Additionally, the module can help users to reconcile their transactions with their general ledger, ensuring that their financial statements are accurate.
                </li>

                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                     
                       


                        <img  className="img-responsive mt-100" src="/accountingpage/pic7.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
         






          <div className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-9 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Budget
                        </h3>
                        <p >
                        <li>
               	The module enables users to set financial goals for various departments or divisions within their company, and then track their actual financial performance against those goals. </li>
                 <br></br>
                <li>
                	Users can create budgets for different time periods, such as monthly, quarterly, or annually, and can compare actual financial results with budgeted results in real-time. 
                </li>
                <br></br>
                <li>
                It allows users to monitor budget variances and take corrective actions if needed.


                </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    


                        <img className="img-responsive mt-120" src="/accountingpage/pic8.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
       






          <div  style = {{ marginBottom:"100px"}} className="container">
            <div className="tab-content">
              <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                <div className="bg-10 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-2">
                        Setting
                        </h3>
                        <p >
                        <li>
              	In ShadobooksERP, this module allows users to configure and customize various aspects of the accounting module to suit their organization's specific needs. 
                </li>
                <br></br>
                <li>
                	It enables users to set up their financial chart of accounts, define their tax codes, set up currency exchange rates, and more. 
                </li>
                <br></br>
                <li>
                	The module also allows users to make changes to the functionalities of the accounting module, such as the default account type, transaction numbering, and the default date format.
                </li>
                        </p>


                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 ">
                      


                        <img className="img-responsive mt-150" src="/accountingpage/pic9.png" alt="Agon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
       





          
              

      </Layout>

    </>
  )
}

export default Home;
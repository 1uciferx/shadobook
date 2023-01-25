/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Breadcrumb } from 'antd';
import { Col, Row } from 'antd';
import { Button, Space } from 'antd'
import Layout from "../components/layout/Layout";
import styles from "../styles/Accounting.module.css";
import { Layout as L } from 'antd';
import Contactmanager from "../components/contactmanager";

const { Content } = L;







function Accounting() {


  return (
    <>
      <Layout>


        <div className={styles.backgroundimg}

          style={{ backgroundImage: "url('assets/background5.jpg')" }} >




          <div className={styles.shadow1}>
            <Row  >
              <Col className={styles.breasdcrumb}
                xs={{
                  span: 16,
                  offset: 0,
                }}
                lg={{
                  span: 9,
                  offset: 0,
                }}
                md={{
                  span: 16,
                  offset: 0,
                }}
                sm={{
                  span: 17,
                  offset: 1,
                }}
                xl={{
                  span: 22,
                  offset: 1,
                }}
                xxl={{
                  span: 22,
                  offset: 1,
                }}>

                <Content  >
                  <Breadcrumb>
                    <Breadcrumb >
                      <Breadcrumb.Item style={{ fontWeight: "bold", color: "white" }} >Index</Breadcrumb.Item>
                      <Breadcrumb.Item >
                        <a href="/#" style={{ fontWeight: "bold", color: "white" }}>Features</a>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <a href="/" style={{ fontWeight: "bold", color: "white" }}>Accounting</a>
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </Breadcrumb>
                </Content>
              </Col>
            </Row>


            <Row>

              <Col

                xs={{
                  span: 20,
                  offset: 2,
                }}

                sm={{
                  span: 20,
                  offset: 2,
                }}

                md={{
                  span: 18,
                  offset: 3,
                }}

                lg={{
                  span: 10,
                  offset: 1,
                }}

                xl={{
                  span: 10,
                  offset: 1,
                }}

                xxl={{

                  span: 8,
                  offset: 3,
                }}>   <h1 className={styles.headingsheader}>Accounting</h1>

                <p className={styles.paraheader}>
                     
                        An ERP system ensures that your accounting is automated.
               
                        It simplifies operations related to accounts receivable,accounts payable, improves cash flow problems, and cash management.
                        It becomes pretty easier to manage the entire organization  by generating information and compiling it.
                        
                  
                     </p>

              </Col>



              <Col xs={{
                span: 20,
                offset: 3,
              }}

                sm={{
                  span: 18,
                  offset: 4,
                }}

                md={{
                  span: 14,
                  offset: 7,
                }}

                lg={{
                  span: 10,
                  offset: 1,
                }}
                xl={{
                  span: 10,
                  offset: 0,
                }}
                xxl={{

                  span: 8,
                  offset: 2,
                }}>
                <img className={styles.box} src="/logo1/vector2.png"></img>
              </Col>

            </Row>

          </div>

        </div>





        {/* Dashboard */}

        <Row className={styles.margintop1}>
        <Col xs={{
          span: 19,
          offset: 2,
        }}

          sm={{
            span: 18,
            offset: 3,
          }}

          md={{
            span: 10,
            offset: 7,
          }}

          lg={{
            span: 10,
            offset: 7,
          }}
          xl={{
            span: 12,
            offset: 6,
          }}
          xxl={{

            span: 6,
            offset: 9,
          }}>
            <h3 className={styles.headings}>Dashboard</h3>
          </Col>





          
        <Col xs={{
          span: 20,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 2,
          }}

          md={{
            span: 20,
            offset: 0,
          }}

          lg={{
            span: 20,
            offset: 0,
          }}
          xl={{
            span: 18,
            offset: 3,
          }}
          xxl={{

            span: 18,
            offset: 5,
          }}>
            <img className={styles.img1} src="/accountingpage/pic1.png"></img>
          </Col>

        
            
          <Col xs={{
          span: 21,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 2,
          }}

          md={{
            span: 20,
            offset: 2,
          }}

          lg={{
            span: 20,
            offset: 2,
          }}
          xl={{
            span: 18,
            offset: 3,
          }}
          xxl={{

            span: 15,
            offset: 5,
          }}>


            <p className={styles.para1}>
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

            {/* <Space>
            <Button className={styles.buttonres1}>Learn More</Button>
          </Space> */}

          </Col>

        </Row>







        {/* Banking */}

        <Row className={styles.margintop2}>
          <Col xs={{
            span: 18,
            offset: 3,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 18,
              offset: 3,
            }}

            lg={{
              span: 12,
              offset: 6,
            }}
            xl={{
              span: 12,
              offset: 2,
            }}
            xxl={{

              span: 14,
              offset: 2,
            }}>
            <h3 className={styles.headings}>Banking</h3>
          </Col>
        </Row>



        <Row>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 3,
            }}>
            <img className={styles.img2} src="/accountingpage/pic2.png"></img>
          </Col>


          <Col xs={{
            span: 23,
            offset: 1,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 8,
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 0,
            }}>


            <p className={styles.para2}>
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

            {/* <Space>
            <Button className={styles.buttonres2}>Learn More</Button>
          </Space> */}

          </Col>

        </Row>


        {/* 
          Transactions */}



        <Row className={styles.margintop3}>
          <Col xs={{
            span: 18,
            offset: 3,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 18,
              offset: 3,
            }}

            lg={{
              span: 12,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 2,
            }}
            xxl={{

              span: 7,
              offset: 5,
            }}>
            <h3 className={styles.headings}>Transactions</h3>
          </Col>
        </Row>




        <Row>


          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 22,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 3,
            }}>
            <img className={styles.img3} src="/accountingpage/pic3.png"></img>
          </Col>


          
         
        <Col xs={{
            span: 22,
            offset: 1,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 8,
              offset: 1,
            }}
            xl={{
              span: 8,
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 1,
            }}>

            <p className={styles.para3}>
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

            {/* <Space>
            <Button className={styles.buttonres3}>Learn More</Button>
          </Space> */}



          </Col>

        </Row>









        {/* Journal Entry */}

        <Row className={styles.margintop4}>
          <Col xs={{
            span: 19,
            offset: 3,
          }}

            sm={{
              span: 18,
              offset: 3,
            }}

            md={{
              span: 18,
              offset: 3,
            }}

            lg={{
              span: 10,
              offset: 7,
            }}
            xl={{
              span: 12,
              offset: 6,
            }}
            xxl={{

              span: 7,
              offset: 8,
            }}>
            <h3 className={styles.headings}>Journal Entry</h3>
          </Col>




          <Col xs={{
            span: 0,
            offset: 0,
          }}

            sm={{
              span: 0,
              offset: 0,
            }}

            md={{
              span: 0,
              offset: 0,
            }}

            lg={{
              span: 0,
              offset: 0,
            }}
            xl={{
              span: 0,
              offset: 0,
            }}
            xxl={{

              span: 0,
              offset: 0,
            }}>

            <img className={styles.logo} src="/logo1/vector1.png"></img>
          </Col>





          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 0,
            }}
            xl={{
              span: 18,
              offset: 3,
            }}
            xxl={{

              span: 13,
              offset: 5,
            }}>
            <img className={styles.img4} src="/accountingpage/pic4.png"></img>
          </Col>






        </Row>

        <Row>
          <Col xs={{
            span: 22,
            offset: 1,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 19,
              offset: 2,
            }}
            xl={{
              span: 18,
              offset: 3,
            }}
            xxl={{

              span: 13,
              offset: 5,
            }}>

            <p className={styles.para4}>
              <li>
              	The Journal Entry sub-module in ShadobooksERP Accounting feature enables users to record and manage their financial transactions in the form of journal entries. 
                </li>
                <br></br>
                <li>
                	It enables users to record journal entries, including the ability to create and manage journal entries, record and track payments, debits and apply credits to invoices.
                </li>
                <br></br>

                <li>

                It also allows the user to post journal entries to the general ledger and generate reports on journal entries.  
                  </li>
                  <br></br>
                  <li>
                  	It can also help to maintain the integrity of financial records and ensure compliance with accounting principles.
                  </li>
                  </p>

            {/* <Space>
            <Button className={styles.buttonres4}>Learn More</Button>
          </Space> */}

          </Col>

        </Row>




        {/* Transfer */}

        <Row className={styles.margintop5}>
          <Col xs={{
            span: 19,
            offset: 2,
          }}

            sm={{
              span: 18,
              offset: 3,
            }}

            md={{
              span: 18,
              offset: 3,
            }}

            lg={{
              span: 10,
              offset: 7,
            }}
            xl={{
              span: 12,
              offset: 6,
            }}
            xxl={{

              span: 7,
              offset: 8,
            }}>
            <h3 className={styles.headings}>Transfer</h3>
          </Col>





          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 0,
            }}
            xl={{
              span: 18,
              offset: 3,
            }}
            xxl={{

              span: 13,
              offset: 5,
            }}>
            <img className={styles.img5} src="/accountingpage/pic5.png"></img>
          </Col>

        </Row>



        <Row>
          <Col xs={{
            span: 22,
            offset: 1,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 19,
              offset: 2,
            }}
            xl={{
              span: 18,
              offset: 3,
            }}
            xxl={{

              span: 13,
              offset: 5,
            }}>


            <p className={styles.para5}>
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

            {/* <Space>
            <Button className={styles.buttonres5}>Learn More</Button>
          </Space> */}

          </Col>

        </Row>







        {/* Chart of Accounts */}

        <Row className={styles.margintop6}>
          <Col xs={{
            span: 18,
            offset: 3,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 18,
              offset: 3,
            }}

            lg={{
              span: 12,
              offset: 6,
            }}
            xl={{
              span: 12,
              offset: 2,
            }}
            xxl={{

              span: 14,
              offset: 1,
            }}>
            <h3 className={styles.headings}>Chart of Accounts</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 2,
            }}>
            <img className={styles.img6} src="/accountingpage/pic6.png"></img>
          </Col>


          <Col xs={{
            span: 23,
            offset: 1,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 8,
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 0,
            }}>


            <p className={styles.para6}>
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

            {/* <Space>
            <Button className={styles.buttonres6}>Learn More</Button>
          </Space> */}

          </Col>

        </Row>




        {/* 
          Reconcile */}



        <Row className={styles.margintop7}>
          <Col xs={{
            span: 18,
            offset: 3,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 7,
              offset: 4,
            }}>
            <h3 className={styles.headings}> Reconcile</h3>
          </Col>
        </Row>



        <Row>

          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 13,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 2,
            }}>
            <img className={styles.img7} src="/accountingpage/pic7.png"></img>
          </Col>





         
        <Col xs={{
            span: 22,
            offset: 1,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 8,
              offset: 1,
            }}
            xl={{
              span: 8,
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 1,
            }}>



            <p className={styles.para7}>
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

            {/* <Space>
            <Button className={styles.buttonres7}>Learn More</Button>
          </Space> */}
         

          </Col>

        </Row>




        {/* 
          Budget */}



        <Row className={styles.margintop8}>
          <Col xs={{
            span: 18,
            offset: 3,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 18,
              offset: 3,
            }}

            lg={{
              span: 12,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 2,
            }}
            xxl={{

              span: 8,
              offset: 4,
            }}>
            <h3 className={styles.headings}> Budget</h3>
          </Col>
        </Row>




        <Row>

          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 2,
            }}>
            <img className={styles.img8} src="/accountingpage/pic8.png"></img>
          </Col>


          <Col xs={{
            span: 22,
            offset: 1,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 8,
              offset: 1,
            }}
            xl={{
              span: 8,
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 1,
            }}>


            <p className={styles.para8}>
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
            {/* 
            <Space>
              <Button className={styles.buttonres8}>Learn More</Button>
            </Space> */}

          </Col>
        </Row>



        <Row>
          {/* <Col xs={{
            span: 24,
            offset: 0,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 13,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 2,
            }}>


            <p className={styles.para9}>A budget is an estimation of revenue and expenses over a specified future period of time and is usually compiled and re-evaluated on a periodic basis.</p>

            <Space>
            <Button className={styles.buttonres9}>Learn More</Button>
          </Space> 

          </Col> */}

        </Row>





        {/* 
         Setting */}



        <Row className={styles.margintop9}>
          <Col xs={{
            span: 18,
            offset: 3,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 12,
              offset: 6,
            }}
            xl={{
              span: 12,
              offset: 2,
            }}
            xxl={{

              span: 10,
              offset: 3,
            }}>
            <h3 className={styles.headings}> Setting</h3>
          </Col>
        </Row>



        <Row>

          <Col xs={{
            span: 20,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 12,
              offset: 0,
            }}
            xxl={{

              span: 12,
              offset: 2,
            }}>
            <img className={styles.img9} src="/accountingpage/pic9.png"></img>
          </Col>



        
         
        <Col xs={{
            span: 22,
            offset: 1,
          }}

            sm={{
              span: 20,
              offset: 2,
            }}

            md={{
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 8,
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 1,
            }}>


            <p className={styles.para10}>
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
            {/* 
          <Space>
            <Button className={styles.buttonres10}>Learn More</Button>
          </Space> */}

               

          </Col>



        </Row>

        <div>
          <Contactmanager />
        </div>


      </Layout>
    </>
  );
}

export default Accounting;

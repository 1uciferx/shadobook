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
                  span: 22,
                  offset: 1,
                }}
                lg={{
                  span: 9,
                  offset: 1,
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
                  offset: 1,
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

                <p className={styles.paraheader}> An ERP system ensures that your accounting is automated. It simplifies operations related to accounts receivable,accounts  payable, improves cash flow problems, and cash management. It becomes pretty easier to manage the entire organization by generating information and compiling it.</p>

              </Col>



              <Col xs={{
                span: 20,
                offset: 4,
              }}

                sm={{
                  span: 19,
                  offset: 2,
                }}

                md={{
                  span: 18,
                  offset: 5,
                }}

                lg={{
                  span: 10,
                  offset: 2,
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
              offset: 4,
            }}

            md={{
              span: 18,
              offset: 3,
            }}

            lg={{
              span: 10,
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 3,
            }}
            xxl={{

              span: 8,
              offset: 4,
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
              offset: 2,
            }}

            lg={{
              span: 14,
              offset: 0,
            }}
            xl={{
              span: 14,
              offset: 2,
            }}
            xxl={{

              span: 13,
              offset: 2,
            }}>
            <img className={styles.img1} src="/accountingpage/pic1.png"></img>
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
              span: 6,
              offset: 1,
            }}
            xl={{
              span: 6,
              offset: 0,
            }}
            xxl={{

              span: 6,
              offset: 1,
            }}>

            <img className={styles.logo} src="/logo1/vector5.jpg"></img>
          </Col>

        </Row>



        <Row>
          <Col xs={{
            span: 24,
            offset: 0,
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
              span: 14,
              offset: 2,
            }}
            xl={{
              span: 14,
              offset: 2,
            }}
            xxl={{

              span: 13,
              offset: 2,
            }}>


            <p className={styles.para1}>
              An accounting dashboard easily shows financial data or other metrics from multiple sources. For example, some information may be stored within your accounting system, while other information may be stored in your inventory system or CRM.
              In this accounting dashboard example, we get a real-time view of invoices, cashflow, accounts receivable and accounts payable, profit and loss, and much more.
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
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
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
              offset: 1,
            }}
            xxl={{

              span: 14,
              offset: 0,
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
              span: 14,
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
              span: 6,
              offset: 1,
            }}
            xl={{
              span: 8,
              offset: 0,
            }}
            xxl={{

              span: 8,
              offset: 0,
            }}>


            <p className={styles.para2}>An accounting ERP enables you to precisely setup the system so that all transactions are accurately recorded and automatically reported.The finance department mostly uses ERP accounting software.</p>

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
              offset: 1,
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
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 4,
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
              span: 20,
              offset: 2,
            }}

            lg={{
              span: 14,
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
            <img className={styles.img3} src="/accountingpage/pic3.png"></img>
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
              span: 6,
              offset: 1,
            }}
            xl={{
              span: 6,
              offset: 0,
            }}
            xxl={{

              span: 6,
              offset: 1,
            }}>

            <img className={styles.logo} src="/logo1/vector17.svg"></img>
          </Col>
        </Row>

        <Row>
          <Col xs={{
            span: 24,
            offset: 0,
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
              span: 14,
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


            <p className={styles.para3}>An accounting ERP enables you to precisely setup the system so that all transactions are accurately recorded and automatically reported.The finance department mostly uses ERP accounting software.</p>

            {/* <Space>
            <Button className={styles.buttonres3}>Learn More</Button>
          </Space> */}

          </Col>

        </Row>









        {/* Journal Entry */}

        <Row className={styles.margintop4}>
          <Col xs={{
            span: 19,
            offset: 2,
          }}

            sm={{
              span: 18,
              offset: 1,
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
            span: 24,
            offset: 0,
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

            <p className={styles.para4}>A Journal Entry is a standard accounting transaction that affects multiple Accounts and the sum of debits is equal to the sum of credits. A Journal Entry Impacts the main ledger. Journal Entries can be used for entering expenses, opening entries, contra entries, bank payments, excise entries, etc. </p>

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
              offset: 1,
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
            <img className={styles.img5} src="/accountingpage/pic4.png"></img>
          </Col>

        </Row>



        <Row>
          <Col xs={{
            span: 24,
            offset: 0,
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


            <p className={styles.para5}>Transfers are financial transactions that take place between two different funds but are neither receipts nor expenses Transfers are essentially a fund balance moving from one fund to another. Each side of the transaction utilises the same account code.</p>

            {/* <Space>
            <Button className={styles.buttonres5}>Learn More</Button>
          </Space> */}

          </Col>

        </Row>







        {/* Chart of Accounts */}

        <Row className={styles.margintop6}>
          <Col xs={{
            span: 18,
            offset: 2,
          }}

            sm={{
              span: 20,
              offset: 0,
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
              offset: 1,
            }}
            xxl={{

              span: 14,
              offset: 0,
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
              span: 19,
              offset: 0,
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
            <img className={styles.img6} src="/accountingpage/pic5.png"></img>
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
              span: 7,
              offset: 1,
            }}
            xl={{
              span: 8,
              offset: 1,
            }}
            xxl={{

              span: 7,
              offset: 0,
            }}>


            <p className={styles.para6}>An index of all the accounts in an accounting system is provided by a chart of accounts (COA), a financial and organisational tool. This gives information about all of the business's financial transactions. For each sort of asset, liability, equity, revenue, and expense, an account serves as a distinct reco</p>

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
            <img className={styles.img7} src="/accountingpage/pic6.png"></img>
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
              span: 6,
              offset: 2,
            }}
            xl={{
              span: 6,
              offset: 0,
            }}
            xxl={{

              span: 6,
              offset: 2,
            }}>

            <img className={styles.logo} src="/logo1/vector13.svg"></img>
          </Col>

        </Row>



        <Row>
          <Col xs={{
            span: 24,
            offset: 0,
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


            <p className={styles.para7}>The bank reconciliation report shows the discrepancy between the bank balance listed on an organization's bank statement and the amount listed in the chart of accounts. Check the report to see if the "Balance as per bank" field corresponds to the bank account statement.</p>

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
              offset: 1,
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
            <img className={styles.img8} src="/accountingpage/pic7.png"></img>
          </Col>


          <Col xs={{
            span: 24,
            offset: 0,
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

              span: 8,
              offset: 1,
            }}>


            <p className={styles.para8}>A budget is a financial plan that projects future earnings and costs. A budget, put simply, forecasts future spending and saving in addition to anticipated income and expenses.     </p>
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
              offset: 0,
            }}
            xl={{
              span: 12,
              offset: 0,
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
            <img className={styles.img9} src="/accountingpage/pic8.png"></img>
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
              span: 6,
              offset: 1,
            }}
            xl={{
              span: 6,
              offset: 1,
            }}
            xxl={{

              span: 6,
              offset: 1,
            }}>

            <img className={styles.logo} src="/logo1/vector9.jpg"></img>
          </Col>

        </Row>

        <Row>
          <Col xs={{
            span: 24,
            offset: 0,
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


            <p className={styles.para10}>There are various account settings in ERP Next to restrict and configure actions in the Accounting module.</p>
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

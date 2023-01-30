/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { Button, Space } from 'antd'
import { Col, Row } from 'antd';
import { Breadcrumb } from 'antd';
import "react-modal-video/css/modal-video.css";
import styles from "../styles/SalesAgent.module.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import Contactmanager from "../components/contactmanager";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import { Layout as L} from 'antd';

const { Content} = L;

function Leads() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
<Layout>


       
         <div className={styles.backgroundimg}

style={{ backgroundImage: "url('assets/background.jpg')"}}>




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
                <Breadcrumb.Item  >Index</Breadcrumb.Item>
                <Breadcrumb.Item >
                  <a href="/#"  >Features</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/" >Sales Agent</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
          </Content>
        </Col>



<Row>
     
     <Col
     
     xs={{
       span: 22,
       offset: 1,
   }}

sm={{
       span: 20,
       offset: 2,
     }}

md={{
      span: 12,
      offset: 1,
  }}

lg={{
      span: 10  ,
      offset: 2,
    }} 
xl={{
      span:8,
      offset:2,
    }}
xxl={{

      span:8,
      offset:3,
    }}>   <h1  className={styles.headingsheader}>Sales Agent</h1>

           <p  className={styles.paraheader}> A person or corporation that represents an exporting firm (the principal) as a sales agent, promoting the products of the principal to potential
          customers in the external market in exchange for a commission based on the value of the business transactions arranged and paid to the principal.

</p>
           
           {/* <Space>
            <Button className={styles.button}>Start Your Business</Button>
          </Space> */}

    </Col>

    <Col xs={{
  span: 20,
  offset: 1,
}}

  sm={{
    span: 20,
    offset: 1,
  }}

  md={{
    span: 9,
    offset: 1,
  }}

  lg={{
    span: 10,
    offset: 1,
  }}
  xl={{
    span: 10,
    offset: 2,
  }}
  xxl={{

    span: 8,
    offset: 2,
  }}>
  <img className={styles.box} src="/logo1/vector6.jpg"></img>
</Col>



</Row>


</div>





      {/* Dashboard */}

      <Row className={styles.margintop1}>
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
              span: 11,
              offset: 2,
            }}
            xxl={{

              span: 13,
              offset: 1,
            }}>
          <h3 className={styles.headings}>Dashboard</h3>
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
              span: 11,
              offset: 2,
            }}
            xxl={{

              span: 11,
              offset: 2,
            }}>
          <img className={styles.img1} src="/salesagent/pic1.png"></img>
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

              span: 8,
              offset: 1,
            }}>

          <p className={styles.para1}>
          The sales agent dashboard in ShadobooksERP would likely show key data, including, 
          <br></br> <br></br>
            <li>
            	The number of agents, 

            </li>
            <br></br>
            <li>
            	The number of active and inactive agents, 
            </li>
            <br></br>
            <li>
            	The total number of programs, 
            </li>
            <br></br>
            <li>
            	The total number of programs, 
            </li>
            <br></br>
            <li>
            The number of orders that have been delivered
            </li>
         </p>
{/* 
          <Space>
            <Button className={styles.buttonres1}>Learn More</Button>
          </Space> */}

        </Col>

      </Row>







      {/* Management */}

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
              span: 11,
              offset: 2,
            }}
            xxl={{

              span: 13,
              offset: 1,
            }}>
          <h3 className={styles.headings}>Management</h3>
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
              span: 11,
              offset: 2,
            }}
            xxl={{

              span: 11,
              offset: 2,
            }}>
          <img className={styles.img2} src="/salesagent/pic2.png"></img>
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

              span: 8,
              offset: 1,
            }}>

          <p className={styles.para1}>
            <li>
            	In ShadobooksERP, a sales representative is a user with the ability to manage and track sales and customer interactions within the system.
            </li>
            <br></br>
            

            <li>
            In order to create a new sales agent in ShadobooksERP, you can follow these steps:

            </li>
            <p>•	Click on the "New Agent" button.</p>
            <p>•	Fill in the necessary information for the new agent, including their name, contact information, and other relevant details.</p>
            <p>
            •	Click on the "Save" button to create the new agent.
            </p>
             </p>
{/* •	
          <Space>
            <Button className={styles.buttonres2}>Learn More</Button>
          </Space> */}

        </Col>

      </Row>


      {/* 
          Programs */}



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
              offset: 6,
            }}
            xl={{
              span: 11,
              offset: 2,
            }}
            xxl={{

              span: 13,
              offset: 1,
            }}>
          <h3 className={styles.headings3}>Programs</h3>
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
              span: 11,
              offset: 2,
            }}
            xxl={{

              span: 11,
              offset: 2,
            }}>
          <img className={styles.img3} src="/salesagent/pic3.png"></img>
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

              span: 8,
              offset: 1,
            }}>


          <p className={styles.para1}>
            <li>
            	In ShadobooksERP an “Agent program” sub-module helps to manage agents, including 
            </li>
            <br></br>

            <li>
            	Creating new agents, 

           
            Updating agent information, and	Tracking agent performance.
 </li> <br></br>
            <li>

            	You can receive a particular agent information by entering their name and agent group from the list of agents.
            </li>
           

         </p>
{/* 
          <Space>
            <Button className={styles.buttonres3}>Learn More</Button>
          </Space> */}

        </Col>

      </Row>









      {/* Orders */}

      <Row className={styles.margintop4}>
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
              span: 11,
              offset: 2,
            }}
            xxl={{

              span: 13,
              offset: 1,
            }}>
          <h3 className={styles.headings4}>Orders</h3>
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
              span: 11,
              offset: 2,
            }}
            xxl={{

              span: 11,
              offset: 2,
            }}>
          <img className={styles.img4} src="/salesagent/pic4.png"></img>
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

              span: 8,
              offset: 1,
            }}>

          <p className={styles.para1}>
            <li>
            The order page displays all the orders placed by the agents.
              </li>
              <br></br>
              <li>
              	Use the search filters available to narrow down the order list to view the specific agent's order.
              </li>
              <br></br>
              <li>
              	You can also filter the orders by Agent.
              </li>
              <br></br>
              <li>
              	Click on the specific order to view the details.
              </li>
              </p>
{/* 
          <Space>
            <Button className={styles.buttonres4}>Learn More</Button>
          </Space> */}

        </Col>




      </Row>

      
<dv>
  <Contactmanager/>
</dv>

      </Layout>

    </>
  );
}

export default Leads;

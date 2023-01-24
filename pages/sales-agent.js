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
          span: 19,
          offset: 2,
        }}

          sm={{
            span: 18,
            offset: 3,
          }}

          md={{
            span: 10,
            offset: 6,
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

            span: 9,
            offset: 7,
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
            offset: 3,
          }}>
          <img className={styles.img1} src="/salesagent/pic1.png"></img>
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
            span: 18,
            offset: 3,
          }}
          xxl={{

            span: 18,
            offset: 3,
          }}>


          <p className={styles.para1}>
            <li>
            A dashboard is a piece of sales technology that shows the most recent performance information visually. 

            </li>
            <br></br>
            <li>
            It provides you with a succinct overview of data that is based on results, such as sales-to-date, sales by region, lead conversion rate, sales growth, and so on.
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
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 2,
          }}

          md={{
            span: 10,
            offset: 7,
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
          <img className={styles.img2} src="/salesagent/pic3.png"></img>
        </Col>


        <Col xs={{
          span: 20,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 0,
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
            span: 8,
            offset: 1,
          }}
          xxl={{

            span: 8,
            offset: 1,
          }}>


          <p className={styles.para1}>
            <li>
            Sales representatives typically have a great deal of autonomy to set prices, terms, and conditions of sale and are contractually empowered
          to sell all of a manufacturer's output.
            </li>
            <br></br>

            <li>
            Despite working on a commission basis, they occasionally carry out the responsibilities of a manufacturer's marketing department.

            </li>
             </p>
{/* 
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
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 2,
          }}

          md={{
            span: 10,
            offset: 7,
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
          <img className={styles.img3} src="/salesagent/pic1.png"></img>
        </Col>

       
        <Col xs={{
          span: 20,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 0,
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
            span: 8,
            offset: 1,
          }}
          xxl={{

            span: 8,
            offset: 1,
          }}>



          <p className={styles.para1}>
            <li>
            A sales programme is a sizable collection of coordinated, repeatable, and conventional activities that promote incremental new business.
            </li>
            <br></br>
            <li>

            Sales programmes frequently depend on multiple organisations. 
            </li>
            <br></br>
            <li>
            Each organisation must comprehend, accept, and carry out its specific sales programme 
          component in order for the programme to be effective.
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
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 1,
          }}

          md={{
            span: 13,
            offset: 5,
          }}

          lg={{
            span: 10,
            offset: 7,
          }}
          xl={{
            span: 12,
            offset: 0,
          }}
          xxl={{

            span: 7,
            offset: 8,
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
            offset: 1,
          }}

          md={{
            span: 20,
            offset: 2,
          }}

          lg={{
            span: 18,
            offset: 3,
          }}
          xl={{
            span: 14,
            offset: 5,
          }}
          xxl={{

            span: 12,
            offset: 6,
          }}>


          <p className={styles.para1}>To assess orders from a sales agent, use this InfoSource, which comprises data for the billing dataset and sales agent assignments for the order.</p>
{/* 
          <Space>
            <Button className={styles.buttonres4}>Learn More</Button>
          </Space> */}

        </Col>




        <Col xs={{
          span: 20,
          offset: 2,
        }}

          sm={{
            span: 20,
            offset: 1,
          }}

          md={{
            span: 22,
            offset: 0,
          }}

          lg={{
            span: 18,
            offset: 3,
          }}
          xl={{
            span: 15,
            offset: 5,
          }}
          xxl={{

            span: 12,
            offset: 6,
          }}>
          <img className={styles.img4} src="/salesagent/pic1.png"></img>
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

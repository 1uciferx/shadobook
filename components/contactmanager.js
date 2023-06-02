/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/Layout";
import styles from "../styles/contactmanager.module.css";
import { Breadcrumb, Layout as L } from "antd";
const { Content } = L;
import { useRouter } from "next/router";


import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";





function Contactmanager() {

  const router = useRouter();


  const [value, setValue] = React.useState("");
  const [mail, setMail] = React.useState("");


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMail = (event) => {
    setMail(event.target.value);
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i31nnpg', 'template_yjmz3r7', e.target, 'user_Gls3jtD0r0QAmYpbwL05y')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()

    toast.success("Message send");
    router.push("/thankyou");

  };




  return (


    <div className={styles.bodycontainer}>
      <div className={styles.body}>
        <Content style={{ padding: "0 50px" }}>
          <div>
            <Row>
              <Col
                xs={{
                  span: 24,
                  offset: 1,
                }}
                lg={{
                  span: 9,
                  offset: 1,
                }}
                md={{
                  span: 22,
                  offset: 4,
                }}
                sm={{
                  span: 22,
                  offset: 1,
                }}
                xl={{
                  span: 10,
                  offset: 1,
                }}
                xxl={{
                  span: 8,
                  offset: 1,
                }}
              >
                <div className={styles.paraheadcontainer}>
                  <p className={styles.parahead}>
                    Get in Touch with Us
                  </p>
                </div>

               
              </Col>






              <Col
                xs={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 10,
                  offset: 3,
                }}
                md={{
                  span: 20,
                  offset: 2,
                }}
                sm={{
                  span: 22,
                  offset: 1,
                }}
                xl={{
                  span: 10,
                  offset: 3,
                }}
                xxl={{
                  span: 10,
                  offset: 5,
                }}
              >

                <div className={styles.mobile}>

                  <form class="form" style={{ padding: "40px" }} onSubmit={sendEmail}>

                    {/* <h5>CONTACT US</h5> */}

                    <label style={{ color: " " }}>Name</label>

                    <input style={{ width: "100%", padding: "5px", marginBottom: "15px" }} placeholder="Name..."
                      name="name" value={value} onChange={handleChange}>
                    </input>

                    <label style={{ color: " " }}>Email</label>

                    <input style={{ width: "100%", padding: "5px", marginBottom: "15px" }}
                      placeholder="Email..." name="email" value={mail} onChange={handleMail}>
                    </input>

                    <label style={{ color: " " }}>Message</label>

                    <textarea style={{ width: "100%", padding: "5px" }}
                      placeholder="Specify your requirement to help us prepare batter.." rows="4" cols="2" name="message"></textarea>

                    <button variant="contained" type="submit"
                      style={{ backgroundColor: "#903310", padding: "10px", marginTop: "15px", width: "40%", color: "white", border: "none" }} disabled={!value || !mail}>Send</button>


                    {/* <input disabled={!value} onClick={close} 
style={{cursor:"pointer",padding:"10px",marginTop:"15px"}}
    type="submit" value="Send Message"></input> */}
                    {/* <button disabled={!value} type="submit">Let me in</button> */}


                  </form>
                </div>
              </Col>
            </Row>
          </div>

        </Content>
      </div>


    </div>





  )
}







export default Contactmanager;

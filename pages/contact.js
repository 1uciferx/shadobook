/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Layout from "../components/layout/Layout";
import styles from "../styles/SalesAgent.module.css";
import { Breadcrumb, Layout as L } from "antd";
const { Content } = L;

import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


function Contact() {
  const [form] = Form.useForm();

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

  };


  const onFinish = (values) => {

    emailjs.sendForm('service_qz5ctkl', 'template_g67xs4p', values, 'user_Gls3jtD0r0QAmYpbwL05y')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    // values.reset()

    console.log("Received values of form: ", values);

  };



  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="91">+91</Option>
        <Option value="971">+971</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Layout>
     
        <section  >
          <div className={styles.container1}>
           
         
         
         <div className={styles.container}>
         <img className={styles.img} src="/logo1/vector9.jpg"></img>
          <div className={styles.formBx}>
            <form onSubmit={sendEmail}  className={styles.form}>
           
              <div className={styles.inputBox}>
                <input onChange={handleChange} type= "text" name="" required="required"/>
                <span>Name</span>
              </div>

              <div className={styles.inputBox}>
                <input onChange={handleMail} type= "email" name="" required="required"/>
                <span>Email</span>
              </div>

              <div className={styles.inputBox}>
                <input type= "text" name="" required="required"/>
                <span>Business Type</span>
              </div>


              <div className={styles.inputBox}>
                <input type= "text" name="" required="required"/>
                <span>Destination</span>
              </div>

              <div className={styles.inputBox}>
                <input type= "text" name="" required="required"/>
                <span>Subject</span>
              </div>

              <div className={styles.inputBox}>
                <textarea  required="required"></textarea>
                <span>Message</span>
              </div>


              <div className={styles.buttoncontainer}>
                {/* <input  type="submit" value="send" name=""/>
              */}   <button className={styles.send} type="submit" value="send">Send</button>
              </div>
           
           
         
          
            </form>
          </div>
         </div>
         </div>
</section>

</Layout>

     

    </>
  )
}

export default Contact;
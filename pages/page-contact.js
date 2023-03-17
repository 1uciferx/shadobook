/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/Layout";
import styles from "../styles/Contact.module.css";
import { Breadcrumb, Layout as L } from "antd";
const { Content } = L;
import React, { useState } from "react";
import {
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
import emailjs from "@emailjs/browser";
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

    emailjs
      .sendForm(
        "service_i31nnpg",
        "template_yjmz3r7",
        e.target,
        "user_Gls3jtD0r0QAmYpbwL05y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    toast.success("Message send");
  };

  const onFinish = (values) => {
    emailjs
      .sendForm(
        "service_qz5ctkl",
        "template_g67xs4p",
        values,
        "user_Gls3jtD0r0QAmYpbwL05y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
        <div className={styles.mobile}>
          <div className={styles.formcontainer}>
            <form class="form" onSubmit={sendEmail} style={{ padding: "10px" }}>
              {/* <h5>CONTACT US</h5> */}
              <label>Name*</label>

              <input
                style={{ width: "100%", padding: "5px", marginBottom: "15px" }}
                placeholder="Name..."
                name="name"
                value={value}
                onChange={handleChange}
                required
              ></input>

              <label>Email*</label>

              <input
                style={{ width: "100%", padding: "5px", marginBottom: "15px" }}
                placeholder="Email.."
                name="email"
                value={mail}
                onChange={handleMail}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              ></input>

              <label>Message</label>
              <textarea
                style={{ width: "100%", padding: "5px" }}
                placeholder="Specify your requirement to help us prepare better..."
                rows="4"
                cols="2"
                name="message"
              ></textarea>

              <button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#90321B",
                  padding: "10px",
                  marginTop: "15px",
                  width: "30%",
                  color: "white",
                }}
              >
                Send
              </button>
              {/* <input disabled={!value} onClick={close} style={{cursor:"pointer",padding:"10px",marginTop:"15px"}} type="submit" value="Send Message"></input> */}
              {/* <button disabled={!value} type="submit">Let me in</button>  */}
            </form>
          </div>
        </div>

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
                        Welcome to ShadoBooks! We are here to help you.
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
                      span: 9,
                      offset: 5,
                    }}
                  >
                    <div className={styles.formcontainer}>
                      <form
                        class="form"
                        onSubmit={sendEmail}
                        style={{ padding: "10px" }}
                      >
                        {/* <h5>CONTACT US</h5> */}
                        <label>Name*</label>

                        <input
                          style={{
                            width: "100%",
                            padding: "5px",
                            marginBottom: "15px",
                          }}
                          placeholder="Name.."
                          name="name"
                          value={value}
                          onChange={handleChange}
                          required
                        ></input>

                        <label>Email*</label>

                        <input
                          style={{
                            width: "100%",
                            padding: "5px",
                            marginBottom: "15px",
                          }}
                          placeholder="Email......"
                          name="email"
                          value={mail}
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          onChange={handleMail}
                          required
                        ></input>

                        <label>Message</label>
                        <textarea
                          style={{ width: "100%", padding: "5px" }}
                          placeholder="Specify your requirement to help us prepare better..."
                          rows="4"
                          cols="2"
                          name="message"
                          required
                        ></textarea>

                        <button
                          variant="contained"
                          type="submit"
                          style={{
                            backgroundColor: "#90321B",
                            padding: "10px",
                            marginTop: "15px",
                            width: "30%",
                            color: "white",
                          }}
                        >
                          Send
                        </button>
                        {/* <input disabled={!value} onClick={close} style={{cursor:"pointer",padding:"10px",marginTop:"15px"}} type="submit" value="Send Message"></input> */}
                        {/* <button disabled={!value} type="submit">Let me in</button>  */}
                      </form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Content>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;

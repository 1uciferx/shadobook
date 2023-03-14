import React from "react";
import Link from "next/link";
import styles from "../styles/Hrrecords.module.css";
import Layout from "../components/layout/Layout";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
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

const { Option } = Select;

function Requestademo() {
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
    <Layout>
      <section className="section-box">
        <div className="bg-6-opacity-30 pt-40">
          <div className="container">
            <div className="box-signup">
              <h1 className="text-heading-3 mb-50 text-center">
                Sign Up For a Free Demo
              </h1>

          
                <div className="box-form-signup mb-200">
                <form class="form" onSubmit={sendEmail}>
                  <div className="form-group">
                 
                    <input
                      className="form-control"
                      placeholder="Your name *"
                      name="name"
                      value={value}
                      onChange={handleChange}
                    />
                    {/* <Link href="/#"><a className="link-edit text-body-text">Edit</a></Link> */}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      placeholder="Your email *"
                      value={mail}
                      onChange={handleMail}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="form-group">
                    <input className="form-control" placeholder="Phone *" />
                  </div>

                  <div className="form-group">
                    <textarea
                      className="form-control"
                      style={{ background: "#f2f2f2" }}
                      placeholder="What would you like to tell us.."
                      rows="4"
                      cols="50"
                      name="message"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label className="text-body-small color-gray-500">
                      <input className="chkbox" type="checkbox" />I Agree to
                      <Link href="/#">
                        <a> terms &amp; conditions</a>
                      </Link>
                    </label>
                  </div>
                  <div className="form-group">
                    <button
                     variant="contained"
                      className="btn btn-green-full text-heading-6"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                 </form> 
                </div>
          
            </div>
          </div>
          <div className="images-lists">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-6 pl-0">
                <img
                  className="img-responsive img-full img-1"
                  src="assets/imgs/page/signup/img-1.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6">
                <img
                  className="img-responsive img-full img-2"
                  src="assets/imgs/page/signup/img-2.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img
                  className="img-responsive img-full img-3"
                  src="assets/imgs/page/signup/img-3.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6">
                <img
                  className="img-responsive img-full img-4"
                  src="assets/imgs/page/signup/img-4.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 pr-0">
                <img
                  className="img-responsive img-full img-5"
                  src="assets/imgs/page/signup/img-5.png"
                  alt="Agon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Requestademo;

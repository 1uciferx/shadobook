import React from "react";
import styles from "../styles/Landingpageform.module.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
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

function Landingpageform() {
  const router = useRouter();
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
        "service_lmycj2c",
        "template_8meutqn",
        e.target,
        "KBrOj98vL5IH-kEz2"
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

    toast.success("Request has been submitted successfully");

    router.push("/thankyou");
  };

  const onFinish = (values) => {
    emailjs
      .sendForm(
        "service_lmycj2c",
        "template_8meutqn",
        values,
        "KBrOj98vL5IH-kEz2"
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
      <div className={styles.container}>
        <h2 className={styles.heading1}>
          Have a Customized Accounting ERP Software
        </h2>

        <div className={styles.paraparent}>
          <p className={styles.para1}>
            Create your own Accounting ERP software according to your company's
            demands, adding specialized features and capabilities to provide
            effective financial management, simplified procedures, and increased
            productivity.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-9 col-md-6 col-xs-12 col-lg-6 col-xl-6">
          <div>
            <img
              className={styles.contactimage}
              alt="Agon"
              src="assets/imgs/page/landingpage/contact.png "
            />
          </div>
        </div>

        <div className="col-sm-9 col-md-6 col-xs-12 col-lg-6 col-xl-6">
          <div className={styles.form}>
            <div className="box-signup">
              <div className={styles.title}>Contact Us</div>
              <div className="  mb-200">
                <form class="form" onSubmit={sendEmail}>
                  <div className={styles.inputcontainer1}>
                    {" "}
                    <input
                      className="form-control"
                      placeholder="Name... *"
                      name="name"
                      required
                    />
                    <label for="name" className={styles.placeholder}>
                      Name
                    </label>
                  </div>

                  <div className={styles.inputcontainer2}>
                    {" "}
                    <input
                      className="form-control"
                      placeholder="Email... *"
                      required
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <label for="email" className={styles.placeholder}>
                      Email
                    </label>
                  </div>

                  <div className={styles.inputcontainer2}>
                    {" "}
                    <input
                      className="form-control"
                      input
                      type="number"
                      placeholder="Phone *"
                      name="phnumber"
                      required
                      // pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    />
                    <label for="phonenumber" className={styles.placeholder}>
                      Phone number
                    </label>
                  </div>

                  <div className={styles.textareacontainer}>
                    {" "}
                    <input
                      className="form-control"
                      placeholder="Requirements"
                      name="companyname"
                    />
                    <label for="Requirements" className={styles.placeholder}>
                      Requirements
                    </label>
                  </div>

                  <div className={styles.submitbtncontainer}>
                    <div className="form-group">
                      {/* <div className={styles.submit}> */}
                      <button
                        variant="contained"
                        // style={{ backgroundColor: "#90331c" }}
                        // className="btn btn-green-full text-heading-6"
                        className={styles.submit}
                        type="submit"
                      >
                        Talk with us now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpageform;

/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/Layout";
import styles from "../styles/contact.module.css";
import { Breadcrumb, Layout as L } from "antd";
const { Content } = L;
import React, { useRef, useState } from "react";
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
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

// function LocalStorage(){
//   const data=useRef();
//   const handleClick=()=>{
//     console.log(data.current.value,"initial Value")
//   }
// }



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


// const Result=()=>{
//   return(
//     <p>your message has been send</p>
//   )
// }

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

    emailjs.sendForm('service_sqz7ayr', 'template_1c71gzm', form.current, 'QlaSLTiRcANhwlSL_')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

    toast.success("Message send");

  };


  const onFinish = (values) => {

    emailjs.sendForm('service_sqz7ayr', 'template_1c71gzm', form.current, 'QlaSLTiRcANhwlSL_')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    // values.reset()

    console.log("Received values of form: ", values);

  };











  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select
  //       style={{
  //         width: 70,
  //       }}
  //     >
  //       <Option value="86">+86</Option>
  //       <Option value="87">+87</Option>
  //       <Option value="91">+91</Option>
  //       <Option value="971">+971</Option>
  //     </Select>
  //   </Form.Item>
  // );

  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  // const onWebsiteChange = (value) => {
  //   if (!value) {
  //     setAutoCompleteResult([]);
  //   } else {
  //     setAutoCompleteResult(
  //       [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
  //     );
  //   }
  // };
  // const websiteOptions = autoCompleteResult.map((website) => ({
  //   label: website,
  //   value: website,
  // }));

  return (
    <>
      <Layout>


{/* 
        <div className={styles.mobile}>
          <div className={styles.formcontainer}>


            <form class="form" onSubmit={sendEmail} style={{ padding: "10px" }}>
              {/* <h5>CONTACT US</h5> */}
              {/* <label>Name</label>

              <input style={{ width: "100%", padding: "5px", marginBottom: "15px" }} placeholder="Write your name here.." name="name" value={value} onChange={handleChange}>
              </input>

              <label>Email</label>

              <input style={{ width: "100%", padding: "5px", marginBottom: "15px" }} placeholder="Let us know how to contact you back..@gmail" name="email" value={mail} onChange={handleMail} ></input>

              <label>Message</label>
              <textarea style={{ width: "100%", padding: "5px" }} placeholder="What would you like to tell us.." rows="4" cols="2" name="message"></textarea>

              <button variant="contained" type="submit" style={{ backgroundColor: "#90321B", padding: "10px", marginTop: "15px", width: "30%", color: "white" }}  >
                Send
              </button>
              {/* <input disabled={!value} onClick={close} style={{cursor:"pointer",padding:"10px",marginTop:"15px"}} type="submit" value="Send Message"></input> */}
              {/* <button disabled={!value} type="submit">Let me in</button>  */}


{/* 
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

                    {/* <div>
                    <iframe   className={styles.msggif} src="https://embed.lottiefiles.com/animation/74453"></iframe>
                    </div> */}
                  {/* </Col>

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
                  > */}
                    {/* <div className={styles.formcontainer}> */} 
                      {/* <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                          residence: ["zhejiang", "hangzhou", "xihu"],
                          prefix: "86",
                        }}
                        scrollToFirstError
                      >
                        <Form.Item
                          name="nickname"
                          label="Your Name"
                          // tooltip="What do you want others to call you?"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Name!",
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          name="email"
                          label="Your E-mail"
                          rules={[
                            {
                              type: "email",
                              message: "The input is not valid E-mail!",
                            },
                            {
                              required: true,
                              message: "Please input your E-mail!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          name="intro"
                          label="Message"
                          rules={[
                            {
                              required: true,
                              message: "Please Type a Message",
                            },
                          ]}
                        >
                          <Input.TextArea showCount maxLength={100} />
                        </Form.Item>




                        <Form.Item {...tailFormItemLayout}>
                          <Button type="primary" htmlType="submit">
                            Send
                          </Button>
                        </Form.Item>
                      </Form> */}

<div className={styles.body}>
<section  >
          <div className={styles.container1}>
           
         
         
         <div className={styles.container}>
         <img className={styles.img} src="/logo1/vector23.jpg"></img>
          <div className={styles.formBx}>
            <form ref={form}  onSubmit={sendEmail}  className={styles.form}>
             
           
              <div className={styles.inputBox}>
              <div> <h5 className={styles.h5}>CONTACT US</h5></div>
                <input  type= "text" name="From_Name"  required="required"/>
                <span>Name</span>
              </div>

              <div className={styles.inputBox}>
                <input  type= "email" name="user_Email" required="required"/>
                <span>Email</span>
              </div>

              <div className={styles.inputBox}>
                <input  type= "text" name="phone" required="required"/>
                <span>Phone Number</span>
              </div>


              <div className={styles.inputBox}>
                <input type= "text" name="Destination" required="required"/>
                <span>Destination</span>
              </div>

              <div  className={styles.inputBox}>
                <input type= "text" name="Subject" required="required"/>
                <span>Subject</span>
              </div>

              <div className={styles.inputBox}>
                <textarea type="text" name="message" required="required"></textarea>
                <span>Message</span>
              </div>


              <div className={styles.buttoncontainer}>
                {/* <input  type="submit" value="send" name=""/>
              */}   <button className={styles.send} type="submit" value="send">Send</button>
              </div>
           
           
         {/* <div className="row">{result ? <Result/> : null}</div> */}
          
            </form>
          </div>
         </div>
         </div>
</section>
</div>

      </Layout>
    </>
  );
}

export default Contact;

{
  /* <section className="section-box">
          <div className="banner-hero banner-1 bg-4 ">
            <div className="container text-center">
                <h1  className="text-heading-1 color-gray-1000 mb-20"> 
                    Welcome to ShadoBooks! <br></br> We are here to help you.</h1>
                   
                        
        <section className="section-box mt-100  mb-80 bg-3 img-responsive shape-1" style={{borderRadius:"80px", }}>         
          <div className="container ">
            <div className="row ">
              <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                <h2 className="text-heading-1 color-gray-900 mb-20">
                  Our Location
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  In a professional context it often happens that private or
                  <br className="d-lg-block d-none" />
                  corporate clients order a publication to publish news.
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-100 ">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 "   style={{backgroundColor:"white", marginBottom:"30px", borderRadius:"30px", marginLeft:"100px", }}>
                <div className="list-icons hover-up mt-3">
                  
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis2.png"
                        alt="ShadoBooks" style={{height:"75px"}}
                      />
                    </span>
                    <h4 className="text-heading-4">Office</h4>
                    <p className="text-body-text color-gray-2000 mt-15">
                    Office 903, 9th floor, 
                      <br />
                      Damas Building,
                      <br />
                      Al Maktoum Road,
                      <br />
                       Dubai, UAE
                     

                    </p>
                  </div>
                </div>
              
              <div className="col-lg-3 col-md-12 col-sm-12"   style={{backgroundColor:"white", marginBottom:"30px", borderRadius:"30px", marginLeft:"60px"}}>
                <div className="list-icons hover-up mt-3" >
                 
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis1.png"
                        alt="ShadoBooks"  style={{height:"75px" , textAlign:"left"}}
                      />
                    </span>
                    <h4 className="text-heading-4">Phone</h4>
                    <p className="text-body-text color-gray-1100 mt-15">
                    +971 52 872 2900
                      <br />
                      +971 42 253 534
                    </p>
                    
                  </div>
               
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12"  style={{backgroundColor:"white", marginBottom:"30px" , borderRadius:"30px", marginLeft:"60px"}}>
                <div className="list-icons hover-up mt-3">
                 
                    <span className="icon-left">
                      <img
                         src="/assets/imgs/page/homepage2/icon-acquis3.png"
                         alt="ShadoBooks" style={{height:"75px"}}
                      />
                    </span>
                    <h4 className="text-heading-4">Mail</h4>
                    <p className="text-body-text color-gray-1100 mt-15">
                   
                      
                    info@shadobooks.com
                    </p>
                  </div>
                </div>
             
            </div>
          </div>
        </section>
               <h1 className="text-heading-2 color-gray-1000 mb-20">About Us</h1>
              <p className="text-body-text color-gray-500">
                Shadobooks presents a functionally powerful CRM that caters to
                the end-to-end operational needs of any business. The tool is
                designed by a group of experts coming from diverse fields and
                thus offers a comprehensive solution that covers all aspects of
                finance, accounting and HRM in one. From its inception ten years
                ago, the developers of Shadobooks continuously strived to update
                the software to offer the best futuristic version at all times.
                Being a competitive alternative option, they offer all of its
                features at a way cheaper subscription. With impeccable customer
                support, an easy-to-use interface and complete implementation
                assistance, Shadobooks will offer you all the assistance you’re
                looking for at ease. We have also built the tool for flexible
                customisation and easy operations. The CRM offers a wide range
                of functionalities and features that can aid different
                operations like billing, invoice tracking, inventory, expenses
                or revenue management on the go.
              </p> 
            </div>
          </div>
        </section> 
        <section className="section-box bg-4 mt-200">
          <div className="container mb-80 mt-80 ">
            <div className="bdrd-58 box-gray-100 icon-wave">
              <div className="row">
                <div className="col-lg-12 mb-60">
                  <span className="text-body-capitalized text-uppercase">
                    Contact us
                  </span>
                  <h2 className="text-heading-3 color-gray-900 mt-10">
                    Ask Queries?
                  </h2>
                  <p className="text-body-text color-gray-600 mt-20">
                    The right move at the right time saves your investment.
                    <br className="d-lg-block d-none" />
                    live the dream of expanding your business.
                  </p>
                </div>
              <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 mb-10 mt-10">ShadoBooks</h4>
                                    <p className="text-body-text color-gray-600">Office 903, 9th Floor,<br />Damas Building,
                                                Al Maktoum Road, <br />
                                                Dubai, UAE</p><br />
                                                <h4 className="text-heading-6 color-gray-900 mb-10 mt-10">Phone</h4>
                                    <p className="text-body-text color-gray-600">+971 52 872 2900
                                    <br />+971 42 253 534</p>
                                    <br />
                                    <h4 className="text-heading-6 color-gray-900 mb-10 mt-10">Mail</h4>
                                    <p className="text-body-text color-gray-600"> info@shadobooks.com</p>
                                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Company (Optional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Tell us about yourself"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                      <button
                        className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                        type="submit"
                      >
                        Send Message
                      </button>
                      <br className="d-lg-none d-block" />
                      <span className="text-body-text-md color-gray-500 mb-20">
                        By clicking contact us button, you agree our terms and
                        policy,
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import Contactmanager from "../components/contactmanager";
import dynamic from "next/dynamic";
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import Intro2 from "../components/slider/Intro2";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});
function Index6() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <div className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/single/banner.png)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-50 pb-120">
                  <h1 className="text-display-2 mt-20 color-white">
                    Web Hooks
                  </h1>
                  <p className="text-body-lead-large color-white mt-30 pr-40">
                    Shadobooks CRM offers webhooks services that will allow HTTP
                    requests for connecting web APIs and services with a
                    subscribe or publish model.
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-2 shape-3">
                      <img
                        src="assets/imgs/page/homepage1/llo.jpg"
                        alt="Shadobooks"
                      />
                    </div>
                    <img
                      className="img-banner img-responsive shape-2"
                      alt="Agon"
                      src="assets/imgs/page/homepage1/llp.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-90">
          <div className="row">
            <div className="col-lg-12 col-sm-12 pr-30">
              <div className="card-grid-style-4">
                <span className="tag-dot">Webhooks</span>
                <div className="text-heading-4">What are Web Hooks ?</div>
                <div className="grid-4-img">
                  {/* <Link href="#"> */}
                  <a>
                    <img src="assets/imgs/page/homepage1/az1.png" alt="Agon" />
                  </a>

                  {/* </Link> */}
                </div>
                <div className="text-heading-7">
                  <p />
                  ➟ Shadobooks CRM supports multiple action hooks across the
                  code to provide the greatest experience for buyers.
                  <br />
                  <br />
                  ➟ Webhooks are a helpful tool for businesses that want to
                  execute code in response to a particular event.
                  <br />
                  <br />
                  ➟ Webhooks are most commonly used by web application
                  platforms.
                  <br />
                  <br />➟ The goal is that vendors will find it simple to
                  integrate.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-90">
          <div className="row">
            <div className="col-lg-12 col-sm-12 pr-30">
              <div className="card-grid-style-4">
                <span className="tag-dot">New Webhook</span>
                <div className="text-heading-4">
                  How to Create a New Webhook ?
                </div>
                <div className="grid-4-img">
                  {/* <Link href="#"> */}
                  <a>
                    <img src="assets/imgs/page/homepage1/az2.png" alt="Agon" />
                  </a>

                  {/* </Link> */}
                </div>
                <div className="text-heading-7">
                  <p />
                  To create a new webhook in Shadobooks CRM,
                  <br />
                  <br />
                  ➟ Go to General Section ⇢ Webhooks ⇢ Webhooks to establish a
                  new webhook. <br />
                  <br />
                  ➟ On the Webhooks page, click the New Webhook button. <br />
                  <br />
                  ➟ Fill out all of the required parameters on the New Webhook
                  page. <br />
                  <br />➟ Click Save.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-90">
          <div className="row">
            <div className="col-lg-12 col-sm-12 pr-30">
              <div className="card-grid-style-4">
                <span className="tag-dot">Log History</span>
                <div className="text-heading-4">What is Log History ?</div>
                <div className="grid-4-img">
                  {/* <Link href="#"> */}
                  <a>
                    <img src="assets/imgs/page/homepage1/az3.png" alt="Agon" />
                  </a>

                  {/* </Link> */}
                </div>
                <div className="text-body-text">
                  <p />
                  ➟ Using the webhook logs, you can keep track of all activity
                  in Shadobooks CRM.
                  <br />
                  <br />
                  ➟ Webhook logs provide a record of every webhook attempt made
                  by our system, as well as information on the call's success or
                  failure.
                  <br />
                  <br />➟ Webhooks can be enabled or disabled in the developer
                  options.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modslider}>
          <div className="mt-50">
            <Indexslider />
            <div className="text-center">
              <Link href="/modules">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                    padding: "10px",
                    marginTop: "-15px",
                    marginBottom: "30px",
                  }}
                >
                  Show More
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div>
          <Contactmanager/>
        </div>
      </Layout>
    </>
  );
}

export default Index6;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/Index.module.css";
import Indexslider from "../components/indexslider";
import Contactmanager from "../components/contactmanager";
import Head from 'next/head';

function knowledgeBaseKB() {
  return (
    <>

<Head>
        <title>Revamp Business with Advanced Knowledge Management Software</title>
        <meta
          name="description"
          content="Drive success with our Knowledge Management Software. Centralize information management, collaboration & maximize business potential."
        />
      </Head>



      <Layout>
        <div className="page-homepage7-bg"></div>
        <div className="section-box">
        <div className="banner-hero banner-head-image" style={{ background: 'url(/assets/imgs/page/homepage4/qqa.jpg)' }}>
            <div className="container mt-40">
              <div className="row">
                <div className="col-lg-6 mt-30">
                  <h1 className="text-display-4 color-white">
                    Knowledge Base
                  </h1>
                  <div className="list-social-banner">
                    <Link href="https://www.facebook.com/shadobookscrm">
                      <a className="social-banner facebook hover-up"></a>
                    </Link>

                    <Link href="https://www.instagram.com/shadobooks_crm/">
                      <a className="social-banner instagram hover-up"></a>
                    </Link>

                    <Link href="https://twitter.com/shado_books">
                      <a className="social-banner twitter hover-up"></a>
                    </Link>

                    <Link href="https://www.linkedin.com/company/shadobooks/">
                      <a className="social-banner linkedin hover-up"></a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 offset-xl-1 mt-30">
                  <p className="text-body-lead-large color-white">
                  The knowledge base in ShadobooksERP can be used to enhance the overall user experience and streamline support processes, improving the efficiency and productivity of the organization.
                  </p>
                  <div className="mt-40">
                    {/* <Link href="#">
                      <a className="btn btn-black shape-square ">
                        How it works
                      </a>
                    </Link> */}

                    {/* <Link href="#">
                      <a className="btn btn-link icon-triangle color-gray-900 ml-40">
                        How it works
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>







        <div className="section-box mt-140">
          <div className="container text-start">
            <h2 className="text-heading-3 color-gray-900">
              What is Knowledge Base
            </h2>
            <p className="text-body-text color-gray-600 mt-20">
              <br /><br />
              ➟ Shadobooks CRMs can also assist you to develop other types of information, such as a knowledge base.
              <br /><br />
              ➟ A knowledge base is useful because it allows customers to get the answers they want and need on their own schedule.
              <br /><br />
              ➟ You may not only create, share, and update your knowledge base, but you can also report on and analyze it to learn how customers use it, which pages are most frequently requested, and the overall impact it has on your audience.
            </p>
          </div>
        </div>


        <div className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <img src="/assets/imgs/page/homepage4/sa1.png" alt="Knowledge management software"/>
              </div>
              {/* <div className="col-lg-5">
                <img src="/assets/imgs/page/homepage4/asas.jpg" />
              </div> */}
            </div>
          </div>
        </div>


        <div className="section-box mt-140">
          <div className="container text-start">
            <h2 className="text-heading-3 color-gray-900">
              How to Create an Article
            </h2>
            <p className="text-body-text color-gray-600 mt-20">
              ➟ To create a new knowledge base article, go to the main menu and select Knowledge Base ⇢ Articles.
              <br /><br />
              ➟ A new window will open; click the top left button New Article.
              <br /><br />
              ➟ Fill out the article form with your information and save it.
              <br /><br />
              ➟ Following the creation of the knowledge base article, each content will have a unique slug that users can access directly.
            </p>
          </div>
        </div>


        <div className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <img src="/assets/imgs/page/homepage4/sa2.png" alt="Knowledge management software" />
               
              </div>
              <div className="col-lg-5">
                <img src="/assets/imgs/page/homepage4/asq.jpg" alt="Knowledge management software"/>
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
                    style={{ padding: "10px", marginTop:"-15px" , marginBottom:"30px" }}
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

export default knowledgeBaseKB;

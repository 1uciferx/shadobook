import React from 'react'
import Layout from '../components/layout/Layout';
import Accordion from "../components/elements/Accordion";
import Link from "next/link";
import Accordion2 from './Accordion2';
import Newcard1 from './Newcard';
import styles from "../styles/Newcard.module.css";
function Faqpage() {
  return (
    <div>
        <Layout >
          <div>
              <div className="section-box">
                  <div
                     className="hero"style={{height:'500px', width: '100%',
                     backgroundColor:'#f7f2f7 '}}
            
                    >
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-7 mt-200 pb-20 " >
                              <h1 className='next-1 'style={{fontSize:'20px',color:'red'}}>The faqs.</h1>
                              <h1 className="text-display-3 color-#36556e mt-10 "  >Help Center</h1>
                               <p className="text-body-lead-large color-#36556e mt-30 pr-30">
                                Everything you need to known about the product and billing.
                               </p>
                             </div>
                              <div className="col-lg-5 mt-20 "> </div>
                          </div>
                      </div>
                   </div>
             </div>
             <section className="section-box pt-130 pb-50">
            <div className="containe ml-40 mr-40" >
              <div className="row">
                <div className="col-lg-5 mb-40 ">
                  
                <h1 className='next-1'style={{fontSize:'20px', color:'red'}}>support</h1>
                  <h3 className="text-heading-1">FAQS</h3>
                  <p className="text-body-text color-gray-600 mt-30">
                    Feeling inquisitive? Have a read through some of our FAQs or
                    contact our supporters for help
                  </p> 
               </div>
                <div className="col-lg-7 ">
                  <Accordion2 />
                </div>
              </div>
              <div className='sub'style={{height:'200px', width: '100%',
                     backgroundColor:'#f2f5fa ', borderRadius: '20px' }}
                                >
                <div className='row'>
                  <div className='col-6'>
                  <h2 className='next-2 'style={{fontSize:'25px ',display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>join 2,000+Subscribers</h2>
                  <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'20px' ,marginTop:'-50px'}}>stay in the loop with everything you need to now!</h1>
                  </div>
                  <div className='col-6'>
                  <div className="email" >
                  <label for="exampleFormControlInput1" className="form-label"></label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com " style={{width:'45%',marginTop:'20px', borderRadius: '5px',border:'2px solid #b7bdc4'}}    />
                  <div class="col-auto" style={{marginLeft:'300px' }}>
                                  <button type="submit" class="btn btn-primary mb-3"style={{marginLeft:'70px',marginTop:'-60px',borderRadius: '5px',padding:'17px 25px',fontSize:'15px',display:'flex' }}>Subscribe</button>
    
                  </div>
                     <p style={{marginTop:'-10px'}}> we care about  your data in over <u>privacy policy</u> </p>
                  </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
         
          <section>
            
          <div className="Blog" style={{height:'650px', width: '100%',
                     backgroundColor:'white ',marginTop:'0'}}
            >
          <div className="mt-20">
              <div className="row " style={{marginTop:'px'}}>
                <div className="col-lg-7 col-md-12 ">
                  {/* <div className="box-optimized"> */}
                  <h3 className="text-heading-50 mt-50 ml-40"  >Proposal</h3>
                  <p className="text  ml-40 "style={{color:" ",fontSize:"20px",fontFamily:"serif",display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    To view a proposal in Shadobook ERP, navigate to the sales
                    module, Click the "New Proposal" tab to create a new
                    proposal.Fill out all of the necessary details such as the
                    subject, To Whom, date, projects, etc.
                  </p>
                  <p className="text   ml-40"style={{color:" ",fontSize:"20px",fontFamily:"serif"}}>
                    Once the proposal is saved, it will appear in the form of a
                    list in the proposal overview page. You can view all the
                    proposals in the form of a list in the proposal overview
                    page.
                  </p>

                  {/* </div>  */}
                   

                <button type="button" class="btn btn-primary btn-lg mt-20 ml-50"style={{color:" ",fontSize:"25px",fontFamily:"",padding:"20px 40px"}}>Get started</button>
                <h3 className="text-heading-20 mt-2 ml-40"  >Why we're better</h3>
                <p className="text   ml-40 mt-20 text-dark"style={{color:" ",fontSize:"20px",fontFamily:"serif"}}>
                    To view a proposal in Shadobook ERP, navigate to the sales
                    module, Click the "New Proposal" tab to create a new
                    proposal.Fill out all of the necessary details such as the
                    subject, To Whom, date, projects, etc.
                  </p>
                  <p className="text   ml-40 mt-20 text-dark"style={{color:" ",fontSize:"20px",fontFamily:"serif"}}>
                    To view a proposal in Shadobook ERP, navigate to the sales
                    module, Click the "New Proposal" tab to create a new
                    proposal.Fill out all of the necessary details such as the
                    subject, To Whom, date, projects, etc.
                  </p>
                </div>
                <div className="col-lg-5 col-md-12 mt-90 ml-70"style={{height:'500px', width: '500px'}}>
                  <img
                    className="img-responsive"style={{maxWidth: '100%',width: '700px',height:'500px'}}
                    src="https://images.pexels.com/photos/15860716/pexels-photo-15860716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 
                    alt="CRM software UAE"
                  />
                  
                </div>
              </div>
            </div>
            </div>
          </section>
           </div>
          
       
        </Layout>
    
    </div>
  )
};

export default Faqpage;
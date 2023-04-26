import React from 'react';
import styles from "../styles/brownbox.module.css";

function Brownbox() {
  return (
    <div>
        <div className="container-fluid1 ">
            <div className={styles.boxhead}>
             
             <div class="container">
              <div class="container">
                        <h1 className={styles.boxhead1}>What Benefits We Can Add to Our
                  Customers</h1>
                                <div className={styles.parahead1}>
                              <p>Upgrade to Shadobooks ERP for improved client management, marketing, and sales. Improve sales, marketing, and customer management by using a smart system that automates critical business procedures and gives you more power.</p>
                            </div> 
              </div>
                 <div className={styles.childhead}>
                    <div className='row'>
                         <div className="col-6 col-md-4">
                          <div className={styles.box1}>
                          <img src="/as11.png" />
                          <p className={styles.p1}>Efficient workflow management</p>
                          </div>
                          
                          </div>
                          <div className="col-6 col-md-4">
                          <div className={styles.box1}>
                          <img src="/as12.png" />
                          <p className={styles.p1}>Real-time dashboard and business intelligence reports</p>
                          </div>
                          </div>
                          <div className="col-6 col-md-4">
                          <div className={styles.box1}>
                          <img src="/as13.png" />
                          <p className={styles.p1} >Seamless integration with renowned ERP systems</p>
                          </div>
                          </div>
                      </div>
                      <div className='row'>
                         <div className="col-6 col-md-4">
                          <div className={styles.box1}>
                          <img src="/as14.png" />
                          <p className={styles.p1}>Comprehensive and accurate reports, budgeting, and cash flow management</p>
                          </div>
                          
                          </div>
                          <div className="col-6 col-md-4">
                          <div className={styles.box1}>
                          <img src="/as15.png" />
                          <p className={styles.p1}>Multi-currency transactions, inventory control, and human capital management</p>
                          </div>
                          </div>
                          <div className="col-6 col-md-4">
                          <div className={styles.box1}>
                          <img src="/as16.png" />
                          <p className={styles.p1} >Industry specific Customization</p>
                          </div>
                          </div>
                      </div>
                  </div>
        
              </div>
           </div>
        </div>
    </div>
  );
}

export default Brownbox;
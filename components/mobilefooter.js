import React from 'react'
import styles from "../styles/Mobilefooter.module.css";


function Mobilefooter() {
  return (
<footer>
  <div class="container" style={{margin:"auto",textAlign:"center"}}>
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-6">
        <div>
        <img
       className={styles.logo}
              alt=""
              src="/assets/imgs/page/homepage4/shadobookslogo.png "
            />
          {/* <p class="mb-30 footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta facilis
            eos quia optio iusto odit atque eum tempore, quisquam officiis vero veniam hic,</p> */}
        </div>
      </div>
      <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
        <div class="">
          <h4 className={styles.heading}>Quick Link</h4>
          <ul class="list-unstyled">
            <li>
              <a href="/#" class={styles.para}>Home</a>
            </li>
            <li >
              <a href="/pricing" class={styles.para}>Pricing</a>
            </li>
            <li>
              <a href="/privacy-policy" class={styles.para}>Privacy Policy</a>
            </li>
            <li >
              <a href="/page-contact" class={styles.para}>Contact Us</a>
            </li>
            <li >
              <a href="/page-terms" class={styles.para}>Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4 className={styles.heading}>Solutions</h4>
          <ul class="list-unstyled">
            <li >
              <a href="/it-erp-software" class={styles.para}>IT & Support</a>
            </li>
            <li >
              <a href="/oilandgas" class={styles.para}>Oil & Gas</a>
            </li>
            <li >
              <a href="/manufacturing-software" class={styles.para}>Manufacturing</a>
            </li>
            <li >
              <a href="/retail-erp-software" class={styles.para} >Retail & Wholesaler</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4 className={styles.heading}>Address</h4>
          <ul class="list-unstyled">
           
            <li>
              <p className={styles.para}><a href="mailto:info@shadobooks.com">info@shadobooks.com</a>
              </p>
            </li>
            <li>
              <p className={styles.para}>Office 903, 9th floor, Damas Building, <br></br>Al Maktoum Road, Dubai, UAE</p>
            </li>
            <li>
              <p className={styles.num}><a href="callto:+971 52 872 2900">+971 52 872 2900</a></p>
              <p className={styles.num}><a href="callto:+971 42 253 534">+971 42 253 534</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">

      <div class="copyright">
     <p style={{color:"#90331c",marginBottom:"80px"}}>© ShadoBooks Pvt.Ltd</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Mobilefooter;
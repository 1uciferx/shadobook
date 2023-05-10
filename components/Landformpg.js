import React from 'react'
import styles from "../styles/Landformpg.module.css";
import Landpgslider1 from './Landpgslider1';
function Landformpg() {
  return (
    <div>
        <div class="container">
 <h1 className={styles.head1}>Have a Customized Accounting ERP Software</h1>
  <div className={styles.parahead}>
    <p>Create your own Accounting ERP software according to your company's demands, adding specialized features and capabilities to provide effective financial management, simplified procedures, and increased productivity.</p>
  </div> 
</div>
    <div className='row'>
        <div className='col-6'>
        <div className={styles.profile}>
                <img src="assets\imgs\Frame 1 2 (1).png"/>
               
              </div>
        </div>
        <div className='col-6'>
            <Landpgslider1/>
        </div>
    </div>

         
    </div>
  );
}

export default Landformpg;
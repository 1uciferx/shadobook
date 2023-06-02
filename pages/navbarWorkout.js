import React from 'react'
import styles from "../styles/Navbarwt.module.css";
import Bannerwt from '../components/Bannerwt';
import Wtrowpost from '../components/Wtrowpost';

function navbarWorkout() {
  return (
    <>
    <div className={styles.navbar}>
        <img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'/>
        <img className={styles.avatar} src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'/>
    </div>
         <div>
             <Bannerwt/>
        </div>
        <div style={{marginTop:'0%'}}>
          <Wtrowpost/>
          </div>
        </>
  );
}

export default navbarWorkout;
import React from 'react'
import { useState } from "react";
import styles from "../styles/Landform.module.css";
function Landpgslider1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);
    // add code here to handle form submission
  }
  return (

  <>
       <form onSubmit={handleSubmit}>
           <div className={styles.formbox}>
            <div className={styles.head}>CONTACT  US</div>
           <div class="mb-3">
  <label for="formGroupExampleInput" className={styles.formlabel}>Name</label>
  <input type="text" className={styles.formcontrol} id="formGroupExampleInput" placeholder="Name"  value={name}   onChange={(e) => setName(e.target.value)}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" className={styles.formlabel}>Email</label>
  <input type="email" className={styles.formcontrol} id="formGroupExampleInput1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" className={styles.formlabel}>Phone Number</label>
  <input type="tel"  className={styles.formcontrol} id="formGroupExampleInput2" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" className={styles.formlabel}>Message</label>
  <textarea value={message} onChange={(e) => setMessage(e.target.value)}className={styles.formcontrol} id="formGroupExampleInput3" placeholder="Message"/>
</div>
<button className={styles.btn} type="submit">Talk with us now</button>
</div>
       </form>



  </>
);
}

export default Landpgslider1;
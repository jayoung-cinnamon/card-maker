import React from 'react';
import styles from './right_nav.module.css';

const RightNav = (props) =>{
  return(
    <div className={styles.rightNav}>
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Sign Up</li>
      </ul>
    </div>
  )
};

export default RightNav;
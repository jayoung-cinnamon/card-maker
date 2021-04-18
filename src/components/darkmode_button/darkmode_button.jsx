import React, { useState } from 'react';
import styles from './darkmode_button.module.css';

const DarkModeButton = ({handleModeChange,isDark}) => {

 

  return(
      <section className={styles.btnBox}>
        <button 
            className={`${styles.darkBtn} ${isDark?styles.dark:''}`} 
            onClick={handleModeChange}
            isDark={isDark}
        >
          {isDark ? 'light' : 'dark'}
       
        </button>
       
      </section>
  )
};

export default DarkModeButton;

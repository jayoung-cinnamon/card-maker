import React from 'react';
import { Link, Route,  Router } from 'react-router-dom';
import styles from './greeting.module.css'

const Greeting = ({isDark}) => {
  return (
   
   <div className={`${styles.greeting} ${isDark?styles.dark:''}`}>
     <div className={styles.container}>

         <div className={styles.leftContainer}>
            <div className={styles.greetingText}>
                BETTER LIFE <br/>
                WITH YOU 
            </div>
           
           <div className={styles.subText}>
           Card maker will make your life more convenient!
           </div>

            <div className={styles.imgContainer}>
              <img className={styles.confetti1} src='../../images/confetti1.png' alt="" />
              <img className={styles.confetti2} src='../../images/confetti2.png' alt="" />
              <img className={styles.confetti3} src='../../images/confetti3.png' alt="" />
              <img className={styles.confetti4} src='../../images/confetti4.png' alt="" />
              <img className={styles.confetti5} src='../../images/confetti5.png' alt="" />
              <img className={styles.confetti6} src='../../images/confetti6.png' alt="" />
              <img className={styles.confetti7} src='../../images/confetti7.png' alt="" />
              <img className={styles.confetti8} src='../../images/confetti8.png' alt=""/>
            </div>

              <Link to='/login'>
                <button className={styles.startBtn}> 
                  get Started Free!
                </button>
              </Link>


          </div>


          <div className={styles.rightContainer}>
              <img className={styles.cardImage} src='../../images/card.png' alt="" />
              <div className={styles.shadow}></div>
              <div className={styles.box}></div>
          </div>



     </div>
    </div>
   

  )
};


export default Greeting;
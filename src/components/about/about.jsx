import React from 'react';
import styles from './about.module.css';

const About = () => {
  return(
    <section className={styles.about}>
      <div className={styles.container}>
            <div className={styles.leftContainer}>
              <div className={styles.aboutText}>
                Would you
                like to <br/>
                join us?
              </div>
            </div>

            <div className={styles.rightContainer}>hello</div>
      </div>
    </section>
  )
};

export default About;
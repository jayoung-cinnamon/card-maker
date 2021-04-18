import React, { useEffect} from 'react';
import styles from './features.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const Features = ({isDark}) => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

  
  
  return (
    
    <section className={`${styles.features} ${isDark?styles.dark:''}`}>
      <div className={styles.container}>

        <div className={styles.leftContainer}>
          <img className={styles.macBook} src="../../images/macbook.png" alt="macbook"/>
        </div>


        <div className={styles.rightContainer}>

          <div className={styles.featuresText}> 
              How to Use?
          </div>

          <div className={styles.stepBox}>

            <p data-aos="fade-up" className={styles.steps}> 1</p>
            <p data-aos="fade-up"> Lorem,  adipisicing elit. Facilis hic fuga totam
               magnam tempore architecto sed commodi fugiat facere repellat. Est
                nobis quae
            </p>
            <p data-aos="fade-up" className={styles.steps}> 2</p>
            <p data-aos="fade-up"> Lorem,  adipisicing elit. Facilis hic fuga totam
               magnam tempore architecto sed commodi fugiat facere repellat. Est
                nobis quae
            </p>
           
           
          </div>

        </div>



      </div>


    </section>
  )
};

export default Features;
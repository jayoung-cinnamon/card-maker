import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService,handleModeChange,isDark}) => {
  const history = useHistory();
  const goToMaker = (userId)=>{
    history.push({
      pathname:'/dashboard',
      state:{id:userId},
    });
  };
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data=>goToMaker(data.user.uid));
  };


  useEffect(()=>{
    authService.onAuthChange(
      user=>{user && goToMaker(user.id);
    });
  });

  return (
    <section className={`${styles.login} ${isDark?styles.dark:''}`}>
      <Header  isDark={isDark} handleModeChange={handleModeChange}/>
      

        <div className={`${styles.container} ${isDark?styles.dark:''}`}>

            <div className={`${styles.leftContainer} ${isDark?styles.dark:''}`}>

              <div className={`${styles.loginContainer} ${isDark?styles.dark:''}`}>

                  <div className={styles.textContainer}>
                    <div className={styles.subTitle}>Welcome to CardMaker!</div>
                    <div className={styles.subTitle2}>Login</div>
                  </div>

                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <button className={`${styles.button} ${isDark?styles.dark:''}`} onClick={onLogin}>
                        Google
                      </button>
                    </li>
                    <li className={styles.item}>
                      <button className={`${styles.button} ${isDark?styles.dark:''}`} onClick={onLogin}>
                        Github
                      </button>
                    </li>
                  </ul>

              </div>

            


            </div>
          
            <div className={`${styles.rightContainer} ${isDark?styles.dark:''}`}>
              <img className={styles.cardImage1} src='../../images/card.png' alt="" />
              <img className={styles.cardImage2} src='../../images/card.png' alt="" />
              <img className={styles.cardImage3} src='../../images/card.png' alt="" />
            </div>

        </div>
       
        
    
     
      <Footer />
    </section>
  );
};

export default Login;

import React,{useState}from 'react';
import Features from '../features/features';
import Footer from '../footer/footer';
import Greeting from '../greeting/greeting';
import Header from '../header/header';
import styles from './home.module.css';


const Home = ({onLogout,handleModeChange,isDark}) => {

 

  return (
    <section className={styles.home}>
      <Header isDark={isDark} onLogout={onLogout} handleModeChange={handleModeChange}/>
      <Greeting isDark={isDark} handleModeChange={handleModeChange}/>
      <Features isDark={isDark} handleModeChange={handleModeChange}/>
      <Footer/>
    </section>
  )


}

export default Home;
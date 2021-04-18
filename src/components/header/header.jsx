import React, { memo, useState } from 'react';
import styles from './header.module.css';
import Hamburger from 'hamburger-react';
import '@szhsin/react-menu/dist/index.css';
import { Link } from 'react-router-dom';
import DarkModeButton from '../darkmode_button/darkmode_button';


const Header = memo(({onLogout,handleModeChange,isDark}) => {

      const [isOpen, setOpen] = useState(false);


      return(

      <header className={styles.header}>
        
     

       <Link to='/'>
         <h1 className={styles.title}>Business Card Maker</h1>
       </Link>
      
        
        <div className={styles.rightContainer}>

           <ul className={styles.menu}>

             <Link to='/dashboard'>
              <li>dashboard</li>
             </Link>
            
            <Link to='/maker'>
              <li>make</li>
            </Link>
            

            <Link to='/'>
              <li>preview</li>
            </Link>

          </ul>

          <DarkModeButton isDark={isDark} handleModeChange={handleModeChange} />

        {onLogout ?

            <button className={styles.logout} onClick={onLogout}>
                Logout
            </button> : 

            <Link to='/login'>
               <button className={styles.login} >
               Login
             </button> 
            </Link>
          }

         

          {/* <div className={styles.hamburger} >
            <Hamburger toggled={isOpen} toggle={setOpen} /> 
          </div> */}

        </div>
         

        
          

       

       </header>
      )
    }  
  );
      
    
  

export default Header;
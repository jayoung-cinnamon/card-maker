import React,{useCallback, useState} from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import styles from './app.module.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import DashBoard from './components/dashBoard/dashBoard';
import Preview from './components/preview/preview';
import CardCollection from './components/card_collection/cardCollection';
import DarkModeButton from './components/darkmode_button/darkmode_button';
import classNames from 'classnames';

function App({FileInput, authService,cardRepository}) {

  const [isDark, setIsDark] = useState('darkMode'); 

  const darkMode = JSON.parse(localStorage.getItem('DARK_MODE'));
  
  const handleModeChange = () => {
    if(!darkMode){
      setIsDark(isDark);
    }
    else {
      setIsDark(isDark);
     }
    setIsDark((!darkMode));
    localStorage.setItem('DARK_MODE',!darkMode);
    console.log(isDark);
    
  };

 
  
  return (

        <div className={`${styles.app} ${isDark ? styles.dark : styles.app}`} >
          <BrowserRouter>
            <Switch>

              <Route exact path="/">
                <Home isDark={isDark} handleModeChange={handleModeChange} authService={authService}/>
              </Route>

              <Route path="/login">
                <Login isDark={isDark} handleModeChange={handleModeChange} authService={authService}/>
              </Route>

              <Route path="/maker">
                <Maker
                    isDark={isDark}
                    handleModeChange={handleModeChange}
                    FileInput={FileInput} 
                    authService={authService}
                    cardRepository={cardRepository}
                />
              </Route>

              <Route path='/dashboard'>
                <DashBoard
                    handleModeChange={handleModeChange}
                    FileInput={FileInput} 
                    authService={authService}
                    cardRepository={cardRepository}
                />
              </Route>

              <Route path='/preview'>
                  <Preview 
                    FileInput={FileInput} 
                    authService={authService}
                    cardRepository={cardRepository}
                  />
              </Route>

              <Route path='/cardcollection'>
                <CardCollection
                  FileInput={FileInput} 
                  authService={authService}
                  cardRepository={cardRepository}
                />
              </Route>

              <Route path='/button'>
                <DarkModeButton />
              </Route>


            </Switch>
          </BrowserRouter>
        </div>

  
   
    
    
   


  )

}

export default App;

import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './dashBoard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome ,faEdit,faAddressBook,faSearchDollar} from "@fortawesome/free-solid-svg-icons";


const DashBoard = ({FileInput, authService,cardRepository,handleModeChange}) => {

  const history = useHistory();
  const historyState = useHistory().state;

  const onLogout = useCallback(
    ()=>{authService.logout();
      } ,[authService]
  );
  
  const [cards,setCards] = useState({});
  const [userId,setUserId] = useState(historyState && historyState.id);

  useEffect(()=>{
    if(!userId){
      return;
    }
    const stopSync = cardRepository.syncCards(userId,cards=>{
      setCards(cards);
    })
    
    return () => stopSync();

  },[userId,cardRepository]);

  useEffect(()=>{
    authService.onAuthChange(user=>{
      if(user){
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    })
  },[userId,authService]);

  const createOrUpdateCard = (card) => {
    setCards(cards=>{
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId,card);
  }

  const deleteCard = (card) => {
    setCards(cards=>{
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId,card);
  }

  useEffect(()=>{
    authService.onAuthChange(user=>{
      if(user){
        setUserId(user.uid);
      } else {
        history.push('/login');
      }
    })
  },[userId,authService]);


  return(
    <section className={styles.dashBoard}>
      <Header onLogout={onLogout} handleModeChange={handleModeChange}/>
        <div className={styles.container}>


          <div className={styles.leftContainer}>

            {/* <Link to='/'>
              <div className={styles.index}>
                <FontAwesomeIcon icon={faHome} size="2x" />
              </div>
            </Link>

            <Link to='/'>
              <div className={styles.index}>
                <FontAwesomeIcon icon={faEdit} size="2x" />
              </div>
            </Link>

            <div className={styles.index}>
              <FontAwesomeIcon icon={faAddressBook} size="2x" />
            </div>

            <div className={styles.index}>
                  <FontAwesomeIcon icon={faSearchDollar} size="2x" />
             </div>
             */}
          </div>


          <div className={styles.rightContainer}>
            <div className={styles.makerContainer}>

              <div className={styles.editSecond}>
                <img className={styles.editImage} src='../../images/edit.jpg' alt="" />
                <div className={styles.text}> Create business cards in a simple way!</div>
                  <Link to='/maker'>
                      <button className={styles.btn}> ...go to Maker!</button> 
                  </Link>
              </div>

              <div className={styles.editor}>
                <Editor
                    FileInput={FileInput}
                    cards={cards} 
                    addCard={createOrUpdateCard} 
                    updateCard={createOrUpdateCard} 
                    deleteCard={deleteCard}
                />
              </div>
           
             

            </div>
            
            <div className={styles.previewContainer}>
               <img className={styles.previewImage} src='../../images/preview.jpg' alt="" />
                <div className={styles.text}>You can see a collection of business cards here!</div>
                <Link to='/maker'>
                    <button className={styles.btn}> ...go to Preview!</button> 
                </Link>
            </div>
            
 
          </div>


        </div> 
      <Footer />
    </section>
  )

};

export default DashBoard;
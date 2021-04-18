import React, { useCallback, useEffect,useState} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import SearchResult from '../search_result/searchResult';
import styles from './cardCollection.module.css';

const CardCollection = ({FileInput, authService,cardRepository}) => {


  const history = useHistory();
  const historyState = useHistory().state;

  const onLogout = useCallback(
    ()=>{authService.logout();
      } ,[authService]
  );

  const [cards,setCards] = useState({});
  const [userId,setUserId] = useState(historyState && historyState.id);

  useEffect(()=>{
    //mount되었을때, 사용자의 id가 변경이 될때 마다 사용
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

  return(

    <section className={styles.cardCollection}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <div className={styles.cardContainer}> 
           <Preview cards={cards}/>
          </div>  
          <div className={styles.cardSearch}> 
            <SearchResult cards={cards} />
          </div>
        </div> 
      <Footer/>
    </section>

  )
};

export default CardCollection;
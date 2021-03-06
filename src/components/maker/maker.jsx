import React, { useCallback, useEffect,useState} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService,cardRepository,handleModeChange}) => {
  const history = useHistory();
  const historyState = useHistory().state;

  const onLogout = useCallback(
    ()=>{authService.logout();
      } ,[authService]
    // 주의점: useCallback은 컴포넌트가 업데이트 되어도 prop이 변경이 되거나
    // state가 변경이 되어도 한번 만들어진 함수를 재사용한다는 뜻이다.
    // authService가 변경이 되어도 예전에 사용된 authService를 사용한다는것.
    // 따라서 변경될 값을 따로 지정해줘야함 [authService]
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
  //내가 쓰는 데이터들이 업데이트 될때만 변경되도록 작성을 해주는 것이 좋다.

  const createOrUpdateCard = (card) => {
    setCards(cards=>{
      const updated = {...cards};
      //기존의 cards 전부 다 복사.
      updated[card.id] = card;
      //update되는 card의 key를 이용해서 오브젝트 전체를 변경한다.
      return updated;
    });
    //이전 상태의 것을 배경으로 해서 값을 업데이트 할때
    //컴포넌트 안에 있는 스테이트를 이용해서 업데이트 할때는 스테이트가 오래된것일 수 도 있다.
    //setCards를 정의한 부분에서 콜백을 전달해서 쓰거나, 예전의 cards=>를 받아서 새로운 값으로 리턴한다.
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} handleModeChange={handleModeChange}/>
      <div className={styles.container}>
        <Editor 
            FileInput={FileInput}
            cards={cards} 
            addCard={createOrUpdateCard} 
            updateCard={createOrUpdateCard} 
            deleteCard={deleteCard}
        />
        <Preview cards={cards}/>
      </div>
      <Footer/>
    </section>
  )
};

export default Maker;
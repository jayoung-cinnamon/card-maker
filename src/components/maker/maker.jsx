import React, { useEffect,useState} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';

const Maker = ({authService}) => {
  const [cards,setCards] = useState( {
    '1':{
      //key는 card의 id이고, value가 card object자체가 될것.
      
        id:'1',
        name:'Ellie',
        company:'Samsung',
        theme:'dark',
        title:'software engineer',
        email:'ellie@gmail.com',
        message:'go for it',
        fileName:'ellie',
        fileURL:null
      
    },
    '2':{
      
        id:'2',
        name:'ja-young',
        company:'nothing',
        theme:'light',
        title:'software engineer',
        email:'jayoung@gmail.com',
        message:'slow but steady',
        fileName:'ja-young',
        fileURL:null
      
    },
    '3' : {
      id:'3',
      name:'ji-soo',
      company:'weather',
      theme:'colorful',
      title:'predictor',
      email:'jisoo@gmail.com',
      message:'hi',
      fileName:'ji-soo',
      fileURL:null
    }
  });

  const history = useHistory();
  const onLogout = ()=>{
    authService.logout();

  };

  useEffect(()=>{
    authService.onAuthChange(user=>{
      if(!user){
        history.push('/');
      }
    })
  })

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
  }

  const deleteCard = (card) => {
    setCards(cards=>{
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    })
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor 
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
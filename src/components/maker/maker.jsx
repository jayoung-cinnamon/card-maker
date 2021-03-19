import React, { useEffect,useState} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';

const Maker = ({authService}) => {
  const [cards,setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  const addCard = (card) => {
    const updated = [...cards,card];
    setCards(updated);
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}/>
        <Preview cards={cards}/>
      </div>
      <Footer/>
    </section>
  )
};

export default Maker;
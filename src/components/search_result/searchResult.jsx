import React, { useState } from 'react';
import Card from '../card/card';
import SearchBox from '../search_box/search_box';
import styles from './searchResult.module.css';

const SearchResult = ({cards}) => {


  const [userInput,setUserInput] = useState('');
  const [searchResults,setSearchResults] = useState([]);

  //SearchBox에 props로 넘겨줄 handleChange메소드.
  const handleInput = (e)=>{
   setUserInput(e.target.value);
   console.log(userInput);
 }

 const clickedCard = (e) =>{
  console.log(e.target.getAttribute('${e.target.className}'));
}

const results = (()=>{
  cards.filter(card=>card.toLowerCase().includes(userInput));
  setSearchResults(results);
});

// const filterCard = cards.filter(card=>cards[key] !== null);
  // const filterCard = cards.filter((cards)=>{
  //  cards.name.toLowerCase().includes(userInput);
  //  })


  return (
    <section className={styles.search}>
      <div className={styles.searchSpace}>
        <SearchBox handleChange={handleInput} />
         <h1 className={styles.title}>Search Result</h1>
            <div className={styles.resultSpace } >


                  <ul  className={styles.cards} onClick={clickedCard} >
                    {Object.keys(cards).map(key=>(
                      <Card  key={key} card={cards[key]}  />
                      ))
                    }
                  </ul>


                  
            </div>
       </div>
    </section>
  )

};

export default SearchResult;
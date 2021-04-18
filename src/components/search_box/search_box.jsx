import React from 'react';
import styles from './search_box.module.css';

const SearchBox = ({handleChange,userInput}) => {

  return(

    <div className={styles.search}>
    
      <input
            className={styles.searchInput}
            type="search"
            placeholder="Search!"
            onChange={handleChange}
            
          />
    
          <button >Search</button>
           <div>{userInput}</div>
         
      
    </div>

  )

};

export default SearchBox;
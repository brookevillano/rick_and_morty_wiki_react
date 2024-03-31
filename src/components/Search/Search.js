import React from 'react';
import styles from './Search.module.scss'

const Search = ({updatePageNumber, updateSearch}) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };
    return(
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input  
                onChange={e=>{
                    updatePageNumber(1);
                    updateSearch(e.target.value); 
                }}
                placeholder="Search for Characters"
                type="text" 
                className={styles.input} 
            />
            <button 
                onClick={searchBtn} 
                className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
            
        </form>
    )
}

export default Search; 
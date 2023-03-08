import styles from './Search.module.css';
function Search({changeInput, inputValue}) {
    return (
    <div className={styles.search_good}>  
        <h1 className={styles.main_title} >
            {(inputValue) ? <p>Пошук по запиту: {inputValue}</p> : "Всі товари" }
        </h1>
        <div className={styles.input_search}>
            <label className={styles.search_label} htmlFor="search">
                <img className={styles.img_loop} src="/images/search.svg" alt="search" />
            </label>
            <input onChange={changeInput}
                   className={styles.search_input} 
                   name="search" 
                   id="search" 
                   placeholder="  пошук..." 
                   type="text"/>
        </div>
    </div>   
    )}
    export default Search;
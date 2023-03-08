import styles from './Favorites.module.css';
import React from 'react';
import { useState,  } from 'react'; 
function Favorites({onPlusFav,deleteFav,company,title,urlImg,price,id,count,changeInputCount }) {
    let [isAdd, setIsAdd] = useState(false);
    let [isPress, setIsPress] = useState(false);
    let clickAddCard = () =>{
        setIsAdd(!isAdd);
       if (isAdd == false)onPlusFav({urlImg,title,company, price, id,count})
    };
    return (
        <div className={styles.wrapper} >
            <div className={styles.Goods}>
                <div className={styles.goodItem}>
                    <img onClick={()=>deleteFav(id)} className={styles.favor} src={"/images/blacklike.png"}/>
                    <input onChange={changeInputCount} type="number" min={1} max={1000}  />
                    <img width={133} height={112} src={urlImg}/>
                    <div className={styles.goodDecr}>
                        <p className={styles.descrGood}>{title}</p>
                        <p className={styles.modelGood }>{company}</p>
                        <p className={styles.price}>ціна</p>    
                        <div className={styles.priceContainer}>
                            <p className={styles.goodPrice}>{price} грн</p>
                            <img onClick={clickAddCard} src= {isAdd ? "/images/addGood.png" : "/images/addGood2.png" } /> 
                       </div>
                    </div>
                    </div>
                </div>
        </div>
    )}
    export default Favorites;
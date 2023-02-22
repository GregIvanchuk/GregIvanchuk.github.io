import styles from './Buys.module.css';
import React from 'react';
import {Link} from "react-router-dom";
import { useState,  } from 'react'; 
import EmptyBuys from './EmptyBuys/EmptyBuys';
function Buys({buysGoods,onPlus, }) {
    let [isAdd, setIsAdd] = useState(false);
    let  [isPress, setIsPress] = useState(false);
    let clickAddCard = () =>{
        setIsAdd(!isAdd);
        // if (isAdd == false) onPlus({urlImg,title,company, price, id})
    };
    let pressAddFav = () => {
        setIsPress(!isPress);
    }
    return (
       (buysGoods.length==0) ? <EmptyBuys/> :
        <div className={styles.wrapper} >
        <div className={styles.head}>
       <Link to="/">
                    <img width={30} height={30} src="/images/arrow.png" />
                    </Link>
        <h1>Мої покупки</h1>
        </div>
            <div className={styles.Goods}>
                {buysGoods.map((obj)=>(
                    <div className={styles.goodItem}>
                    {/* <img onClick={pressAddFav} className={styles.favor} src={isPress ? "/images/blacklike.png" : "/images/opacitylike.png"}/> */}
                        <img width={133} height={112} src={obj.urlImg}/>
                        <div className={styles.goodDecr}>
                            <p className={styles.descrGood}>{obj.title}</p>
                            <p className={styles.modelGood }>{obj.company}</p>
                            <p className={styles.price}>ціна</p>    
                            <div className={styles.priceContainer}>
                            <p className={styles.goodPrice}>{obj.price} грн</p>
                            {/* <img onClick={clickAddCard} src= {isAdd ? "/images/addGood.png" : "/images/addGood2.png" } />  */}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}
    export default Buys;
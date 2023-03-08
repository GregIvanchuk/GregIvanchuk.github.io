import styles from './Card.module.css';
import React from 'react';
import ContentLoader from "react-content-loader"
import { useState,  } from 'react'; 
function Card({urlImg,title, company, price,id ,count, onPlus, onHeart, changeInputCount,added, loading }) {
    let [isAdd, setIsAdd] = useState(added);
    let [isPress, setIsPress,] = useState(false);
    let clickAddCard = () => {
        setIsAdd(!isAdd);
        if (isAdd == false) onPlus({urlImg,title,company, price, id,count})
    };
    let pressAddFav = () => {
        setIsPress(!isPress);
        if (isPress == false) onHeart({urlImg,title,company, price, id})
    }
    return (
    <div className={styles.Goods}>
        { loading ? 
        <div className={styles.goodItem}>
            <ContentLoader 
                speed={0.8}
                width={210}
                height={260}
                viewBox="0 0 210 260"
                backgroundColor="black"
                foregroundColor="#c3b7b7"
            >
                <rect x="40" y="18" rx="0" ry="0" width="133" height="112" /> 
                <rect x="40" y="165" rx="0" ry="0" width="105" height="20" /> 
                <rect x="40" y="212" rx="0" ry="0" width="82" height="25" /> 
                <rect x="40" y="135" rx="0" ry="0" width="134" height="20" /> 
                <rect x="140" y="208" rx="0" ry="0" width="32" height="32" />
            </ContentLoader>
        </div>:
            <div className={styles.goodItem}>
                <div className={styles.head}>
                    <img onClick={pressAddFav} className={styles.favor} 
                    src={isPress ? "/images/blacklike.png" : "/images/opacitylike.png"}/>
                    <input onChange={changeInputCount} type="number" min={1} max={1000}  />
                </div>
                <img width={133} height={112} src={urlImg}/>
                <div className={styles.goodDecr}>
                    <p className={styles.descrGood}>{title}</p>
                    <p className={styles.modelGood }>{company}</p>
                    <p className={styles.price}>ціна</p>    
                    <div className={styles.priceContainer}>
                        <p className={styles.goodPrice}>{price} грн</p>
                        <img onClick={clickAddCard} 
                        src= {isAdd ? "/images/addGood.png" : "/images/addGood2.png" } /> 
                </div>
                </div>
            </div>
            }
    </div>
    )}
    export default Card;
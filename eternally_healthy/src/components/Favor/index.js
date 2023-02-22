import Favorites from "./Favorites";
import styles from "./Favor.module.css"
import React from "react";
import {Link} from "react-router-dom";
import EmptyFavorites from "./EmptyFavorites";
import { useState } from "react";
import { AppContext } from "../../App";
function Favor ({deleteFav,pullOutDataFar}) {
    const {favor} = React.useContext(AppContext);
    let  [count, setCount] = useState(1);
    const  onAddFarToCart = (obj) =>{
        pullOutDataFar(obj);
     }
     let  changeInputCount = (event) => {
        setCount(event.target.value)
    }
    return (
    (favor.length == 0) ? <EmptyFavorites/> : 
    <div className={styles.wrapper}>
         <div className={styles.head}>
       <Link to="/">
                    <img width={30} height={30} src="/images/arrow.png" />
                    </Link>
        <h1>Мої вподобання</h1>
        </div >
         <div className={styles.items}>
        {favor.map((obj) => <Favorites changeInputCount={changeInputCount} deleteFav={deleteFav} key={obj.id} id={obj.id}
                         count = {count}company={obj.company} title={obj.title} price={obj.price} urlImg={obj.urlImg}   onPlusFav={(obj)  => onAddFarToCart(obj)}/>)}
                         </div>
    </div>
)}

export default Favor;
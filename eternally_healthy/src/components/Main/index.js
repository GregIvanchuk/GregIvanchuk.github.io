import styles from "./Main.module.css";
import Card from "./Card"
import axios from "axios";
import Slider from "./Slider";
import Search from "./Search";
import { useState,useEffect } from "react";
function Main({pullOutData,
                 openDescr,
               pullOutFavor,
               pullOutId,
               setItemsCart,
               added = false, 
               itemsCart,
               items,
               setItems,
               isLoading,
               slides })
                {
    let [inputValue, setInputValue] = useState("");
    let  [count, setCount] = useState(1);
    const onAddToCart = (obj) =>{
        pullOutData(obj);
    }
    const onDescrId = (id) =>{
        pullOutId(id);
     };
     const onAddToFavor = (obj) =>{
        pullOutFavor(obj);
     };
    let  changeInput = (event) => {
        setInputValue(event.target.value)
    }
    let  changeInputCount = (event) => {
        setCount(event.target.value)
    }
    const renderItems = () => {
        const filtredItems = items.filter((item) =>
         item.title.toLowerCase().includes(inputValue.toLowerCase())
         || item.company.toLowerCase().includes(inputValue.toLowerCase())
         || item.price.toLowerCase().includes(inputValue.toLowerCase()),
         ) 
        return ( isLoading ? [1,2,3,4,5,6,7,8,9,10] : filtredItems).map((obj,index) => 
                    <Card  
                    openDescr={openDescr}
                    onDescr = {(obj)  => onDescrId(obj)} 
                    added = {itemsCart.some((item) => obj.id === item.id)}
                    loading={ isLoading}
                    changeInputCount = {changeInputCount}
                    count={count}
                    key = {index} 
                    id  =  {obj.id}
                    onPlus={(obj)  => onAddToCart(obj)} 
                    onHeart={(obj) => onAddToFavor(obj)} 
                    title={obj.title} 
                    company={obj.company} 
                    price={obj.price} 
                    urlImg={obj.urlImg} 
                       />  
                 )
    }
    return (
      <div>
                <Slider slides={slides}/>  
                <Search changeInput={changeInput} inputValue={inputValue}/> 
                <main className={styles.main}>            
                {renderItems()}
        </main>
        </div>
    );
} 
export default Main;
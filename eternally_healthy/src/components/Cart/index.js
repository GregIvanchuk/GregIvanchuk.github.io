import styles from './Cart.module.css';
import FullCart from './FullCart';
import EmptyCart from './EmptyCart';
import axios from "axios"
function Cart({openCart,setItemsCart,itemsCart,removeItem,sum,addFramedGoods,onFramed}) {
    return (
 <div  className={styles.overlay}>
   {(itemsCart.length === 0 && onFramed === false) ? <EmptyCart openCart = {openCart}/>
   :  <FullCart sum = {sum} removeItem={removeItem}  openCart = {openCart} addFramedGoods={addFramedGoods } onFramed={onFramed} itemsCart = {itemsCart} setItemsCart ={setItemsCart}/>}  
</div> 
    )}
    export default Cart;
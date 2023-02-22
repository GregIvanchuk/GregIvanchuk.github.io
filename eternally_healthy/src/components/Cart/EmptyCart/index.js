import styles from "./EmptyCart.module.css";
function EmptyCart (props) {
    return (
        <div className={styles.drawer}>
              <div className={styles.cart_Items}>
                <h1>Кошик</h1>
                 <div className={styles.empty_block}>
                    <img src="/images/empty_box.png" />
                    <div className={styles.empty_block_text}>
                    <h3>Корзина порожня</h3>
                    <p>Добавте принаймні один товар, для того щоб зробити замовлення</p>
                    <button onClick={props.openCart} className={styles.but_back}>Повернутися назад</button>
                 </div>
                </div> 
            </div>   
        </div>
    );
}
export default EmptyCart;

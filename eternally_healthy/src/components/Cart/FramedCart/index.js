import styles from "./FramedCart.module.css";
function FramedCart ({openCart}) {
    return (
        <div className={styles.drawer}>
        <div className={styles.cart_Items}>
           <div className={styles.empty_block}>
              <img src="/images/confirm.png" />
              <div className={styles.empty_block_text}>
              <h3>Ваше замовлення прийнято!</h3>
              <p>Найближчим часом ваше замовлення буде доставлено</p>
              <button onClick={openCart} className={styles.but_back}>Повернутися назад</button>
           </div>
          </div> 
      </div>   
  </div>
    );
}
export default FramedCart;

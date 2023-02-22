import styles from "./FullCart.module.css";
import { useState } from "react";
import FramedCart from "../FramedCart";
import OrdersForm from "../OrdersForm";
function FullCart({
    openCart,
    onFramed,
    addFramedGoods,
    itemsCart,
    setItemsCart,
    removeItem,
    sum,
}) {
    return onFramed ? (
        <OrdersForm openCart={openCart} itemsCart={itemsCart} setItemsCart={setItemsCart} sum={sum} />
    ) : (
        <div className={styles.drawer}>
            <div className={styles.top_drawer}>
                <img
                    onClick={openCart}
                    className={styles.close_button}
                    width={16}
                    height={16}
                    src="/images/hrestuk.svg"
                    alt="close"
                />
                <h1>Кошик</h1>
                <div className={styles.cart_Items}>
                    {itemsCart.map((item) => (
                        <div className={styles.item_cart}>
                            <img
                                width={50}
                                height={50}
                                src={item.urlImg}
                                alt=""
                            />
                            <div className={styles.item_cart_descr}>
                                <span>{item.title}</span>
                                <br />
                                <span>{item.company}</span>
                                <p className={styles.in_cart_price1}>
                                    {item.price} грн.
                                </p>
                                <p className={styles.in_cart_price2}>
                                    {item.price * item.count} грн. ({item.count}{" "}
                                    шт.)
                                </p>
                            </div>
                            <button
                                onClick={() => removeItem(item.id)}
                                className={styles.b_del}
                            >
                                <img src="/images/hrestuk.svg" alt="delete" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.draw_footer}>
                <span>
                    Загальна вартість: {sum} грн.
                </span>
                <span>
                    Податок 5% : {(5 * sum) / 100}{" "}
                    грн.
                </span>
                <button
                    onClick={() => addFramedGoods(itemsCart)}
                    className={styles.confirm_button}
                >
                    Оформити замовлення
                </button>
            </div>
        </div>
    );
}
export default FullCart;

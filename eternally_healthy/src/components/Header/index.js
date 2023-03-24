import styles from "./Header.module.css";
import React from "react";
import {Link} from "react-router-dom";
function Header(props) {
    let  [open,setOpen] = React.useState("true")
    let openHandler = () => {
        setOpen(!open);
      }
    return (
    <header className={styles.header}>
        <div className={styles.leftHeader}>
            <img width={110} height={110} src="/images/Logo.jpg" />
            <div className={styles.store_title}>
                <h3 className={styles.title_store}>Eternally Healthy</h3>
                <p>Найкращий вибір вітамінів та спортивних добавок</p>
            </div>
        </div>
        <div className={open ? styles.menu : styles.menu + " " + styles.active }>
        <ul onClick={() => openHandler()} className={styles.rigthHeader}>
        <li>
            <Link to="/">
                    ГОЛОВНА
                </Link>
            </li>
            <li>
                <Link to="/favorites">
                    ЗАКЛАДКИ
                </Link>
            </li>
            <li>
            <Link to="/buys">
                    ПРИДБАНЕ
                </Link>
            </li>
            <li className={styles.cartIcon}>
                <div className={styles.cart} onClick={props.openCart}>
                <span>КОРЗИНА</span>
                    {/* <span>{props.sum} грн.</span> */}
                </div>
            </li>
        </ul>
        </div>
        <div onClick={() => openHandler()}  className={ open ? styles.burger :  styles.burger + " " + styles.active}>
        <span></span>
      </div>
    </header>
    );
}
export default Header;

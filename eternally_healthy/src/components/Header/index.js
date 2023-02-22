import styles from "./Header.module.css";
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.leftHeader}>
                <img width={110} height={110} src="/images/Logo.jpg" />
                <div className={styles.store_title}>
                    <h3 className={styles.title_store}>Eternally Healthy</h3>
                    <p>Найкращий вибір вітамінів та спортивних добавок</p>
                </div>
            </div>
            <ul className={styles.rigthHeader}>
                <li className={styles.cartIcon}>
                    <div className={styles.cart} onClick={props.openCart}>
                        <img height={32} width={32} src="/images/cart.png" alt="" />
                        <span>{props.sum} грн.</span>
                    </div>
                </li>
                <li>
                    <Link to="/favorites">
                        {" "}
                        <img width={32} height={32} src="/images/like.png" />
                    </Link>
                </li>
                <li>
                <Link to="/buys">
                        {" "}
                        <img width={40} height={40} src="/images/user.png" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}
export default Header;

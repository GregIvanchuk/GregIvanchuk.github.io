import styles from "./EmptyBuys.module.css"
import { Link } from "react-router-dom";
function EmptyBuys () {
    return (
        <div className={styles.content}>
           <img src="/images/smile2.png"/>
           <h3>У вас немає замовлень ):</h3>
           <span>Оформіть принаймні одне  замовлення</span>
           <Link to="/">
                    <button className={styles.btn}>Повернутися назад</button>
                    </Link>
        </div>
    )
}
export default EmptyBuys;
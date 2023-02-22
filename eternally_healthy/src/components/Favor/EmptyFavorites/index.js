import styles from "./EmptyFavorites.module.css"
import { Link } from "react-router-dom";
function EmptyFavorites () {
    return (
        <div className={styles.content}>
           <img src="/images/smile.png"/>
           <h3>Закладок немає ):</h3>
           <span>Ви нічого не добавляли в закладки</span>
           <Link to="/">
                    <button className={styles.btn}>Повернутися назад</button>
                    </Link>
        </div>
    )
}
export default EmptyFavorites;
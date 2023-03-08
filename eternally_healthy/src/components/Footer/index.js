import styles from './Footer.module.css';
function Footer() {
    return(
           <footer className={styles.footer}>
                <div className={styles.footer_contacts}>
                    <img width={25} height={25} src="/images/phone.png" alt="phone"/>
                    <p>0968336006</p>
                </div>
                <div className={styles.footer_contacts}>
                    <img width={25} height={25} src="/images/gmail.png" alt="gmail"/>
                    <a href="mailto:gregiv99@gmail.com?subject=Питання від покупця"> Написати повідомлення</a>
                </div>
                <div className={styles.footer_contacts}>
                    <img width={25} height={25} src="/images/instagram.png" alt="gmail"/>
                    <a href="https://www.instagram.com/eternally__healthy_/"> eternally__healthy </a>
                </div>
            </footer>
            )};
export default Footer;
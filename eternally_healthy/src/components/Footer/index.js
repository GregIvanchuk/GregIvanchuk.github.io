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
                    <a href="http://gregiv99@gmail.com"> gregiv99@gmail.com</a>
                </div>
                <div className={styles.footer_contacts}>
                    <img width={25} height={25} src="/images/instagram.png" alt="gmail"/>
                    <a href="http://https://instagram.com/eternally__healthy_?igshid=YWJhMjlhZTc="> eternally__healthy </a>
                </div>
            </footer>
            )};
export default Footer;
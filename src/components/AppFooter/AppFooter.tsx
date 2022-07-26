import FooterMiddle from './FooterMiddle';
import ArrowJump from "../ArrowJump";
import styles from './AppFooter.module.scss';

const AppFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <ArrowJump />
            </div>
            <div className={styles.footerMiddle}>
                <FooterMiddle />
            </div>
            <div className={styles.footerBottom}>
                <small>&copy; Copyrights 2022. Created by RajmundTech</small>
            </div>
        </footer>
    )
}

export default AppFooter;
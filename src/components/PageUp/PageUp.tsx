import { isBrowser } from '../../utils/helpers';
import styles from './PageUp.module.scss';

const PageUp = () => {
    const scrollUpHandler = () => {
        if (isBrowser()) window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className={styles.container} onClick={scrollUpHandler}>
            <div className={styles.arrow}></div>
        </div>
    );
};

export default PageUp;

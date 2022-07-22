import cx from 'classnames';
import styles from './Burger.module.scss';

interface IBurger {
    onClick: () => void;
    show: boolean;
}

const Burger = ({ onClick, show }: IBurger) => {
    const handleClick = () => {
        onClick();
    }
    return (
        <div className={cx(styles.container, { [styles.closeIcon]: show })} onClick={handleClick}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
        </div>
    )
}

export default Burger;
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
            <div className={cx(styles.line, styles.one)}></div>
            <div className={cx(styles.line, styles.two)}></div>
            <div className={cx(styles.line, styles.three)}></div>
        </div>
    )
}

export default Burger;
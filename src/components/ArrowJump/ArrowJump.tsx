import { CSSProperties } from 'react';
import { isBrowser } from '../../utils/helpers';
import cx from 'classnames';
import styles from './ArrowJump.module.scss';


interface IArrowJump {
    arrowDown?: boolean;
    containerStyle?: CSSProperties;
}

const ArrowJump = ({ arrowDown, containerStyle }: IArrowJump) => {
    const scrollUpHandler = (down: boolean | undefined) => {
        if (isBrowser()) {
            down
                ? window.scrollBy({
                    top: 600,
                    behavior: 'smooth'
                })
                : window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <div
            className={cx(styles.container, { [styles.down]: arrowDown })}
            style={containerStyle}
            onClick={() => scrollUpHandler(arrowDown)}
        >
            <div className={styles.arrow}></div>
        </div>
    );
};

export default ArrowJump;

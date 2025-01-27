// import classNames from 'classnames';
import clsx from 'clsx';

import styles from './Header.module.scss';

function Header() {
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}></div>
        </header>
    );
}

export default Header;

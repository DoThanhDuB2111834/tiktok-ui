import clsx from 'clsx';

import styles from './SideBar.module.scss';

function SideBar() {
    return (
        <aside className={clsx(styles.wrapper)}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default SideBar;

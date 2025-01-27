import clsx from 'clsx';

import Header from '@/components/Layouts/components/Header';
import SideBar from './SideBar';

import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <SideBar />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

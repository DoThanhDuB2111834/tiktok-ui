import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import styles from './Header.module.scss';
import images from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';

function Header() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setSearchResults([1, 2]);
    }, []);

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo} alt='tiktok' />
                </div>
                <Tippy
                    interactive
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div
                            className={clsx(styles.searchResult)}
                            tabIndex='-1'
                            {...attrs}>
                            <PopperWrapper>
                                <h4 className={clsx(styles.searchTitle)}>
                                    account
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}>
                    <div className={clsx(styles.search)}>
                        <input placeholder='search account and video' />
                        <button className={clsx(styles.clear)}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={clsx(styles.loading)}
                            icon={faSpinner}
                        />
                        <button className={clsx(styles.searchButton)}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={clsx(styles.actions)}></div>
            </div>
        </header>
    );
}

export default Header;

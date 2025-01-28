import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import styles from './Header.module.scss';
import images from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const handleMenuChange = (val) => {
        // Xử lý khi thay đổi
    };

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo} alt='tiktok' />
                </div>
                <Tippy
                    interactive
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
                <div className={clsx(styles.actions)}>
                    <Button text>Log in</Button>
                    <Button primary>Register</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={clsx(styles.moreButtons)}>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}></FontAwesomeIcon>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

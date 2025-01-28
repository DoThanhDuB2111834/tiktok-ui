import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';

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
    const currentUser = true;
    const handleMenuChange = (val) => {
        // Xử lý khi thay đổi
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
        },
    ];

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo} alt='tiktok' />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={clsx(styles.actions)}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content='Upload video'
                                placement='bottom'>
                                <button className={clsx(styles.actionBtn)}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <button className={clsx(styles.actionBtn)}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Log in</Button>
                            <Button primary>Register</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={clsx(styles.userAvt)}
                                src='https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/e7179a80746ed2dfcf9bdd5dbe0dc1a0.jpeg?lk3s=a5d48078&nonce=68981&refresh_token=cf9d3f74caf53aac71ba1db407cea34a&x-expires=1738141200&x-signature=sNphKTR2%2FIXq0oVl3mU7PgDRgmU%3D&shp=a5d48078&shcp=81f88b70'
                                alt='Đỗ Thanh Dũ'
                            />
                        ) : (
                            <button className={clsx(styles.moreButtons)}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

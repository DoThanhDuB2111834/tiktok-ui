import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () =>
        current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });

    return (
        <Tippy
            delay={[0, 500]}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            hideOnClick={false}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={clsx(styles.menuList)} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title='Language'
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1)
                                    );
                                }}
                            />
                        )}
                        <div className={clsx(styles.menuBody)}>
                            {renderItems()}
                        </div>
                    </PopperWrapper>
                </div>
            )}>
            {children}
        </Tippy>
    );
}

export default Menu;

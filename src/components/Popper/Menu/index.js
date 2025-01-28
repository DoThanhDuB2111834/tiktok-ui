import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
    const renderItems = () =>
        items.map((item, index) => <MenuItem key={index} data={item} />);

    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={clsx(styles.menuList)} tabIndex='-1' {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}>
            {children}
        </Tippy>
    );
}

export default Menu;

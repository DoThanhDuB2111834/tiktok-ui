import clsx from 'clsx';

import Button from '@/components/Button';
import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            className={clsx(styles.menuItem)}
            onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;

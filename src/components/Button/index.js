import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Button.module.scss';

function Button({
    to,
    href,
    primary,
    outline,
    text,
    rounded,
    children,
    size = 'medium',
    disable,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Xóa bỏ lắng nghe sự kiện nếu có trường disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function')
                delete props[key];
        });
    }

    const classes = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.text]: text,
        [styles.disable]: disable,
        [styles.rounded]: rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
            <span className={clsx(styles.title)}>{children}</span>
            {rightIcon && (
                <span className={clsx(styles.icon)}>{rightIcon}</span>
            )}
        </Comp>
    );
}

export default Button;

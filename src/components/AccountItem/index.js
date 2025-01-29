import clsx from 'clsx';

import styles from './AccountItem.module.scss';
import Image from '../Image';

function AccountItem({ data }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Image
                src='https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/e7179a80746ed2dfcf9bdd5dbe0dc1a0.jpeg?lk3s=a5d48078&nonce=68981&refresh_token=cf9d3f74caf53aac71ba1db407cea34a&x-expires=1738141200&x-signature=sNphKTR2%2FIXq0oVl3mU7PgDRgmU%3D&shp=a5d48078&shcp=81f88b70'
                alt={data.name}
                className={clsx(styles.avt)}
            />
            <div className={clsx(styles.infor)}>
                <h4 className={clsx(styles.name)}>{data.name}</h4>
                <span className={clsx(styles.username)}>{data.username}</span>
            </div>
        </div>
    );
}

export default AccountItem;

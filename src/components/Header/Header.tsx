import { Link } from 'react-router-dom'

import IconLogo from '../../assets/icons/logo.svg'
import IconUser from '../../assets/icons/user.svg'

import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.logo}>
                <img
                    src={IconLogo}
                    alt='Логотип Wrench CRM'
                    title='вернуться на главную страницу'
                />
            </Link>
            <div className={styles.user}>
                <div className={styles.user_img}>
                    <img src={IconUser} alt='Владислав Коледа' />
                </div>
                <div className={styles.user_name}>Владислав Коледа</div>
            </div>
        </header>
    )
}

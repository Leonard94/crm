import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { Burger } from './components/Burger'

import { ReactComponent as IconHome } from '../../assets/icons/home.svg'
import { ReactComponent as IconSearch } from '../../assets/icons/search.svg'
import { ReactComponent as IconTables } from '../../assets/icons/tables.svg'
import { ReactComponent as IconCalendar } from '../../assets/icons/calendar.svg'
import { ReactComponent as IconLocation } from '../../assets/icons/location.svg'
import { ReactComponent as IconWidgets } from '../../assets/icons/widgets.svg'
import { ReactComponent as IconSettings } from '../../assets/icons/settings.svg'
import { ReactComponent as IconExit } from '../../assets/icons/exit.svg'
import { ReactComponent as IconUser } from '../../assets/icons/user-menu.svg'
import { ReactComponent as IconFinance } from '../../assets/icons/finance.svg'
import { ReactComponent as IconArrow } from '../../assets/icons/arrow.svg'

import styles from './styles.module.scss'

export const Menu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenAccordion, setOpenAccordion] = useState(false)

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const toggleAccordion = () => {
        setOpenAccordion(!isOpenAccordion)
    }

    const arrowClasses = cn(styles.arrow, {
        [styles.arrow_open]: isOpenAccordion,
    })

    const menuClasses = cn(styles.menu, {
        [styles.menu_closed]: !isOpenMenu,
    })

    return (
        <nav className={menuClasses}>
            <Burger onClick={toggleMenu} isActive={isOpenMenu} />
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Меню</h3>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_item}>
                        <NavLink to='/' end className={styles.link}>
                            <IconHome />
                            <span>Главная</span>
                        </NavLink>
                    </li>
                    <li className={styles.menu_item}>
                        <NavLink to='/address' className={styles.link}>
                            <IconSearch />
                            <span>Поиск адресов</span>
                        </NavLink>
                    </li>
                    <li className={styles.menu_item}>
                        <NavLink to='/tables' className={styles.link}>
                            <IconTables />
                            <span>Таблицы</span>
                        </NavLink>
                    </li>
                    <li className={styles.menu_item}>
                        <NavLink to='/calendar' className={styles.link}>
                            <IconCalendar />
                            <span>Календарь</span>
                        </NavLink>
                    </li>
                    <li className={styles.menu_item}>
                        <NavLink to='/maps' className={styles.link}>
                            <IconLocation />
                            <span>Карты</span>
                        </NavLink>
                    </li>
                    <li className={styles.menu_item}>
                        <NavLink to='/widgets' className={styles.link}>
                            <IconWidgets />
                            <span>Виджеты</span>
                        </NavLink>
                    </li>
                    <li className={styles.menu_item}>
                        <div className={styles.link} onClick={toggleAccordion}>
                            <IconSettings />
                            <span>Настройки</span>
                            <IconArrow className={arrowClasses} />
                        </div>
                        {isOpenAccordion && (
                            <ul className={styles.accordion}>
                                <li
                                    className={cn(
                                        styles.menu_item,
                                        styles.accordion_item
                                    )}
                                >
                                    <NavLink
                                        to='/settings'
                                        className={styles.link}
                                    >
                                        <IconUser />
                                        Настройки профиля
                                    </NavLink>
                                </li>
                                <li
                                    className={cn(
                                        styles.menu_item,
                                        styles.accordion_item
                                    )}
                                >
                                    <NavLink
                                        to='/finance'
                                        className={styles.link}
                                    >
                                        <IconFinance />
                                        Управление финансами
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={styles.menu_item}>
                        <NavLink to='/exit' className={styles.link}>
                            <IconExit />
                            <span>Выход</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

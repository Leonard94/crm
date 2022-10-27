import styles from './styles.module.scss'

import cn from 'classnames'

interface IBurger {
    onClick: () => void
    isActive: boolean
}

export const Burger: React.FC<IBurger> = ({ onClick, isActive }) => {
    return (
        <div
            className={cn(styles.burger, { [styles.burger_active]: isActive })}
            onClick={onClick}
        >
            <span className={styles.line} />
            <span className={styles.line2} />
            <span className={styles.line3} />
        </div>
    )
}

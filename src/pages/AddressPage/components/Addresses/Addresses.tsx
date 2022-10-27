import { TAddress } from '../../AddressPage'

import styles from './styles.module.scss'

type TProps = {
    list: TAddress[] | null
}

export const Addresses: React.FC<TProps> = ({ list }) => {
    if (list === null) {
        return null
    }
    if (list.length === 0) {
        return <div>Ничего не найдено, попробуйте изменить запрос</div>
    }
    return (
        <div className={styles.addresses}>
            <p className={styles.title}>Адреса</p>
            <ul className={styles.list}>
                {list.map((item: TAddress) => (
                    <li key={item.data.geo_lat}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

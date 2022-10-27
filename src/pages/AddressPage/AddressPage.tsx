import { useState } from 'react'

import { SearchSection } from './components/SearchSection/SearchSection'
import { Addresses } from './components/Addresses/Addresses'

import styles from './styles.module.scss'
import { getAdresses } from '../../api/api'

export type TAddress = {
    data: {
        geo_lat: number
    }
    value: string
}

export const AddressPage = () => {
    const [isLoading, setLoading] = useState(false)
    const [list, setList] = useState(null)

    const onSubmit = (request: string) => {
        setLoading(true)
        getAdresses(request)
            .then((data) => setList(data))
            .catch((e) => console.error(e.message))
            .finally(() => setLoading(false))
    }

    return (
        <section className={styles.address}>
            <h1 className='title'>Поиск адресов</h1>
            <div className={styles.search}>
                <SearchSection onSubmit={onSubmit} isLoading={isLoading} />
            </div>
            {isLoading ? (
                <div className={styles.loader} />
            ) : (
                <Addresses list={list} />
            )}
        </section>
    )
}

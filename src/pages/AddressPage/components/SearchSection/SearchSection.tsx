import React, { useState } from 'react'
import cn from 'classnames'

import { ReactComponent as IconSearch } from '../../../../assets/icons/search.svg'

import styles from './styles.module.scss'

interface ISearchSection {
    onSubmit: (value: string) => void
    isLoading?: boolean
}

export const SearchSection: React.FC<ISearchSection> = ({
    onSubmit,
    isLoading,
}) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (error) {
            setError('')
        }
        setValue(e.target.value)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (value.trim().length < 3) {
            setError('Поле должно содержать не менее 3 символов')
        } else {
            onSubmit(value)
        }
    }

    const inputClasses = cn(styles.input, {
        [styles.input_error]: error,
    })

    return (
        <>
            <h2 className={styles.title}>Введите интересующий вас адрес</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type='text'
                    className={inputClasses}
                    value={value}
                    onChange={handleInputChange}
                    onFocus={() => setError('')}
                    placeholder={
                        isLoading
                            ? 'Ищем адрес . . .'
                            : 'Введите интересующий вас адрес'
                    }
                    disabled={isLoading}
                />
                {error && <p className={styles.error}>{error}</p>}
                <button
                    type='submit'
                    title='начать поиск адресов'
                    className={styles.btn}
                    disabled={isLoading}
                >
                    <IconSearch />
                    <span>Поиск</span>
                </button>
            </form>
        </>
    )
}

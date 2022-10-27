import { Routes, Route } from 'react-router-dom'

import { Header } from '../Header/Header'
import { Menu } from '../Menu/Menu'
import { HomePage } from '../../pages/HomePage/HomePage'
import { AddressPage } from '../../pages/AddressPage/AddressPage'

import styles from './styles.module.scss'

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Menu />
                <main className={styles.content}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/address' element={<AddressPage />} />
                        <Route path='*' element={<p>Такой страницы ещё не существует</p>} />
                    </Routes>
                </main>
            </div>
        </div>
    )
}

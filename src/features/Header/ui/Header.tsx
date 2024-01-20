import Link from 'next/link'
import { Menubar } from '@/shared/ui'
import styles from './Header.module.scss'
import { APP_NAME } from '@/shared/consts/app'
import { Routes } from '@/shared/config/routes'

export const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.items}>
                <Link href={Routes.DASHBOARD} >
                    {APP_NAME}
                </Link>

                <Menubar />
            </div>
        </header>
    )
}

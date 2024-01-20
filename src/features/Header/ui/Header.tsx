import styles from './Header.module.scss'
import { APP_NAME } from '@/shared/consts/app'
import Link from 'next/link'
import { Routes } from '@/shared/config/routes'
import { NavMenuCompound } from '@/shared/ui/NavMenu/NavMenuCompound'

export const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.items}>
                <Link href={Routes.DASHBOARD} >
                    {APP_NAME}
                </Link>

                <NavMenuCompound />
            </div>
        </header>
    )
}

import Link from 'next/link'
import { Menubar } from '@/shared/ui'
import styles from './Header.module.scss'
import { APP_NAME } from '@/shared/consts/app'
import { Routes } from '@/shared/config/routes'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const pathname = usePathname()

    return (
        <header className={styles.Header}>
            <div className={styles.items}>
                <Link href={Routes.DASHBOARD} >
                    {APP_NAME}
                </Link>

                {
                    pathname !== Routes.AUTH
                        ? <Menubar />
                        : null
                }
            </div>
        </header>
    )
}

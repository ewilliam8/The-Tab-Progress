import styles from './Navbar.module.scss'
import { useLogout } from '@/entities/Session/api/useLogout'
import { Button } from '@/shared/ui/Button'
import { APP_NAME } from '@/shared/consts/app'
import Link from 'next/link'
import { Routes } from '@/shared/config/routes'

export const Navbar = () => {
    const { onLogOut } = useLogout()

    return (
        <header className={styles.Navbar}>
            <div className={styles.items}>
                <Link href={Routes.DASHBOARD} >
                    {APP_NAME}
                </Link>

                <Button
                    onClick={onLogOut}
                    variant={'secondary'}
                >
                    Log Out
                </Button>
            </div>
        </header>
    )
}

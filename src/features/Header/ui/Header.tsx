import styles from './Header.module.scss'
import { useLogout } from '@/entities/Session/api/useLogout'
import { Button } from '@/shared/ui/Button'
import { APP_NAME } from '@/shared/consts/app'
import Link from 'next/link'
import { Routes } from '@/shared/config/routes'

export const Header = () => {
    const { onLogOut } = useLogout()

    return (
        <header className={styles.Header}>
            <div className={styles.items}>
                <Link href={Routes.DASHBOARD} >
                    {APP_NAME}
                </Link>

                <Button
                    onClick={onLogOut}
                    variant={'ghost'}
                >
                    Log Out
                </Button>
            </div>
        </header>
    )
}

import { memo } from 'react'
import { clsx } from 'clsx'
import { APP_NAME } from '@/shared/consts/app'
import { navigation } from '@/shared/config/navigation'
import styles from './LandingHeader.module.scss'
import { Button } from '@/shared/ui'
import Link from 'next/link'

export const LandingHeader = memo(() => {
    return (
        <div className={styles.LandingHeader}>
            <div className={clsx(styles.items, 'align-middle')}>
                {APP_NAME}
                <Button variant="outline">
                    <Link href={navigation.DASHBOARD.path}>{navigation.DASHBOARD.name}</Link>
                </Button>
            </div>
            <div className={styles.color} />
        </div>
    )
})

LandingHeader.displayName = 'LandingHeader'

import styles from './Navbar.module.scss'

import {logOut} from '@/shared/api/logOut'
import {Button, ButtonTheme} from '@/shared/ui/Button'

export const Navbar = () => {
    const {onLogOut} = logOut()

    return (
        <div className={styles.Navbar}>
            <div className={styles.items}>
                The Tab Progress
                <Button
                    onClick={onLogOut}
                    theme={ButtonTheme.CLEAR}
                >
                    Log Out
                </Button>
            </div>
        </div>
    )
}

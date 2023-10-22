import {memo} from "react"

// Styles
import styles from './LandingHeader.module.scss'

// Components
import {Box} from "@/shared/ui/Box"
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink"

export const LandingHeader = memo(() => {
    return (
        <div className={styles.LandingHeader}>
            <Box alignItems classname={styles.items}>
                The Tab Progress
                <AppLink
                    to={'/dashboard'}
                    theme={AppLinkTheme.OUTLINED}
                >
                    Dashboard
                </AppLink>
            </Box>
            <div className={styles.color} />
        </div>
    )
})

LandingHeader.displayName = 'LandingHeader';

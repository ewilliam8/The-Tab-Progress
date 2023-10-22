import {memo} from "react"
import Image from "next/dist/client/legacy/image"

import styles from './LandingHeader.module.scss'

// Components
import {Box} from "@/shared/ui/Box";
import {Button, ButtonTheme} from "@/shared/ui/Button/ui/Button";

export const LandingHeader = memo(() => {
    return (
        <div className={styles.LandingHeader}>
            <Box alignItems justifyContent>
                <Image
                    alt="Logo"
                    fill="#fff"
                    width={32}
                    height={32}
                    src="/assets/icons/infinity.svg"
                />
                The Tab Progress
                <Button theme={ButtonTheme.ROUNDED}>Dashboard</Button>
            </Box>
        </div>
    )
})

LandingHeader.displayName = 'LandingHeader';

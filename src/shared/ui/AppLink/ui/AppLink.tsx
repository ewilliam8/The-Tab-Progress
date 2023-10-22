import {memo} from "react";
import Link from "next/link";
import type {PropsWithChildren} from 'react'

// styles
import {clsx} from "clsx";
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
    OUTLINED = 'outlined'
}

interface AppLinkProps extends PropsWithChildren {
    to: string
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme,
    } = props

    return (
        <Link
            className={clsx({
                className,
                [styles[theme]]: theme
            })}
            href={to}
        >
            {children}
        </Link>
    )
})

AppLink.displayName = 'AppLink';

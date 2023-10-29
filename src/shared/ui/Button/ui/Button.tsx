import {memo} from 'react'
import type {PropsWithChildren, MouseEvent} from 'react'

// styles
import {clsx} from 'clsx'
import styles from './Button.module.scss'
import Image from 'next/dist/client/legacy/image'

export enum ButtonTheme {
    ROUNDED = 'rounded',
    OUTLINED = 'outlined',
    CLEAR = 'clear',
}

interface ButtonProps extends PropsWithChildren{
    type?: 'submit' | 'reset' | 'button'
    theme?: ButtonTheme
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    icon?: string
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        type,
        icon,
        theme,
        onClick,
        ...otherProps
    } = props

    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(styles.Button, [theme && styles[theme]])}
            {...otherProps}
        >
            {icon &&
                <Image
                    src={icon}
                    height={15}
                    width={15}
                    className={styles.icon}
                    alt={'icon'}
                />
            }
            {children}
        </button>
    )
})

Button.displayName = 'Button'

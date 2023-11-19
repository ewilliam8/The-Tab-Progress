import {memo} from 'react'
import type {
    ReactNode,
    MouseEvent,
    PropsWithChildren
} from 'react'

// styles
import {clsx} from 'clsx'
import styles from './Button.module.scss'

export enum ButtonTheme {
    ROUNDED = 'rounded',
    OUTLINED = 'outlined',
    CLEAR = 'clear',
}

interface ButtonProps extends PropsWithChildren{
    type?: 'submit' | 'reset' | 'button'
    theme?: ButtonTheme
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    icon?: ReactNode
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
            {icon && icon}
            {children}
        </button>
    )
})

Button.displayName = 'Button'

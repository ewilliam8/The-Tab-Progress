import {memo} from 'react'
import type {PropsWithChildren} from 'react'

// styles
import {clsx} from 'clsx'
import styles from './Button.module.scss'

export enum ButtonTheme {
    ROUNDED = 'rounded',
    OUTLINED = 'outlined'
}

interface ButtonProps extends PropsWithChildren{
    type?: 'submit' | 'reset' | 'button'
    theme?: ButtonTheme
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        type,
        theme,
    } = props

    return (
        <button
            type={type}
            className={clsx([theme && styles[theme]])}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button';

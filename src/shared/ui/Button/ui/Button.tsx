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
        ...otherProps
    } = props

    return (
        <button
            type={type}
            className={clsx(styles.Button, [theme && styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button';

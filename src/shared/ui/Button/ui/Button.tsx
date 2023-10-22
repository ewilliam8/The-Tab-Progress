import React, {memo} from "react"
import type {PropsWithChildren} from "react"
import styles from './Button.module.scss'
import {clsx} from "clsx"

export enum ButtonTheme {
    ROUNDED= 'rounded'
}

interface ButtonProps extends PropsWithChildren{
    children: React.ReactNode
    type?: 'submit' | 'reset' | 'button'
    theme?: ButtonTheme
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        type,
        theme,
    } = props
    console.log(theme)
    return (
        <button
            type={type}
            className={clsx({
                [styles[theme]]: theme
            })}
        >
            {children}
        </button>
    )
})


Button.displayName = 'Button';

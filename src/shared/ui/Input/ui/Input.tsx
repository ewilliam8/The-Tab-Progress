import { ChangeEvent } from 'react'
import styles from './Input.module.scss'

interface InputProps {
    value: string
    onChange: (value: string) => void
    type?: 'password' | string
}

export const Input = (props: InputProps) => {
    const {
        type,
        value,
        onChange
    } = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            className={styles.Input}
        />
    )
}

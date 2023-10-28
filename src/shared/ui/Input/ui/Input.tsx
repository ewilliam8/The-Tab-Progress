import type {ChangeEvent} from 'react'
import styles from './Input.module.scss'

enum InputType {
    PASSWORD= 'password'
}

interface InputProps {
    value: string
    onChange: (value: string) => void
    type?: InputType.PASSWORD | string
    name?: string
}

export const Input = (props: InputProps) => {
    const {
        type,
        value,
        onChange,
        name,
    } = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <div
            className={styles.InputWrp}
        >
            {name &&
                <label
                    htmlFor={name}
                    className={styles.label}
                >{name}</label>
            }
            <input
                id={name}
                type={type}
                value={value}
                onChange={handleChange}
                className={styles.Input}
                autoComplete={type === InputType.PASSWORD ? 'on' : 'off'}
            />
        </div>
    )
}

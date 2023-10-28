'use client'

import {useRouter} from 'next/navigation'
import {type MouseEvent, useCallback, useState} from 'react'
import {supabase} from '@/shared/config/supabaseClient'

import styles from './AuthForm.module.css'
import logIn from '../../../../public/assets/icons/log-in.svg'
import cornerRight from '../../../../public/assets/icons/corner-right.svg'

// Components
import {Input} from '@/shared/ui/Input'
import {Button} from '@/shared/ui/Button'

export const AuthForm = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const onClickSignUp = useCallback(async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: pass,
        })
        if (error) {
            setError(String(error))
            return
        }
        if (data) {
            router.push('/dashboard')
        }
    }, [email, pass, router])

    const onClickSignIn = useCallback(async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pass,
        })
        if (error) {
            setError(String(error))
            return
        }
        if (data) {
            router.push('/dashboard')
        }
    }, [email, pass, router])

    return (
        <form className={styles.AuthForm}>

            <Input
                name='Email'
                value={email}
                onChange={setEmail}
            />

            <Input
                value={pass}
                name='Password'
                type={'password'}
                onChange={setPass}
            />

            <div className={styles.buttons}>
                <Button
                    type='submit'
                    icon={logIn}
                    onClick={onClickSignIn}
                >
                    Sign In
                </Button>
                <Button
                    type='submit'
                    icon={cornerRight}
                    onClick={onClickSignUp}
                >
                    Sign Up
                </Button>
            </div>
            {error
                ? <p className={styles.error}>{error}</p>
                : null
            }
        </form>
    )
}

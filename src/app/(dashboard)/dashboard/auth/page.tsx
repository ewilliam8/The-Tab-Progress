'use client'

import {useCallback, useState, type MouseEvent} from 'react';
import {supabase} from '@/shared/config/supabaseClient';
import styles from './AuthPage.module.scss'

// Components
import {Input} from '@/shared/ui/Input';
import {Button} from '@/shared/ui/Button';

export default function Auth() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const onClickSignUp = useCallback(async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: pass,
        })
        if (error) setError(String(error))
    }, [email, pass])

    const onClickSignIn = useCallback(async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pass,
        })
        if (error) setError(String(error))
    }, [email, pass])

    return (
        <div className={styles.AuthPage}>
            <form className={styles.AuthForm}>
                <Input
                    value={email}
                    onChange={setEmail}
                />
                <Input
                    value={pass}
                    type={'password'}
                    onChange={setPass}
                />
                <div className={styles.buttons}>
                    <Button
                        type='submit'
                        onClick={onClickSignIn}
                    >
                        Sign In
                    </Button>
                    <Button
                        type='submit'
                        onClick={onClickSignUp}
                    >
                        Sign Up
                    </Button>
                </div>
                {error
                    ? <p>{error}</p>
                    : null
                }
            </form>
        </div>
    )
}

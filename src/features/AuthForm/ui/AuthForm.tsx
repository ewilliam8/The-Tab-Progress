'use client'

import { useRouter } from 'next/navigation'
import { supabase } from '@/shared/config/supabaseClient'
import { Routes } from '@/shared/config/routes'
import { type MouseEvent, useCallback, useState } from 'react'
import styles from './AuthForm.module.css'
import { CornerDownRight, LogIn } from 'lucide-react'
import { Button, Input } from '@/shared/ui'

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
            options: {
                emailRedirectTo: window.location + Routes.DASHBOARD,
            },
        })
        if (error) {
            setError(String(error))
            return
        }
        if (data) {
            router.push(Routes.DASHBOARD)
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
            router.push(Routes.DASHBOARD)
        }
    }, [email, pass, router])

    return (
        <form className={styles.AuthForm}>

            <Input
                name='Email'
                value={email}
                onChange={(val) => setEmail(val.target.value)}
            />

            <Input
                value={pass}
                name='Password'
                type={'password'}
                onChange={(val) => setPass(val.target.value)}
            />

            <div className={styles.buttons}>
                <Button
                    type='submit'
                    onClick={onClickSignIn}
                >
                    <LogIn width={14} height={14}/>
                    <span className="ml-2">
                        Sign In
                    </span>
                </Button>
                <Button
                    type='submit'
                    onClick={onClickSignUp}
                >
                    <CornerDownRight width={14} height={14}/>
                    <span className="ml-2">
                        Sign Up
                    </span>
                </Button>
            </div>
            {error
                ? <p className={styles.error}>{error}</p>
                : null
            }
        </form>
    )
}

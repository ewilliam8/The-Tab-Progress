import {
    useState,
    useEffect,
    useCallback,
} from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/shared/config/supabaseClient'
import { Routes } from '@/shared/config/routes'
import { sessionActions } from '@/entities/Session'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { Session } from './types'

export const useAuth = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [isFirstTime, setIsFirstTime] = useState(true)
    const [session, setSession] = useState<Session | null>(null)

    const getSession = useCallback(async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession()

        if (!session)
            router.push(Routes.AUTH)

        setSession(session)
        const userId = session?.user?.id || ''
        dispatch(sessionActions.setUserId(userId))
    }, [dispatch, router])

    useEffect(() => {
        if (isFirstTime) {
            getSession()
            setIsFirstTime(false)
        }
    }, [getSession, isFirstTime])

    return {
        session,
    }
}

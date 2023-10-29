import {
    useState,
    useEffect,
    useCallback,
} from 'react'
import {useRouter} from 'next/navigation'
import {supabase} from '@/shared/config/supabaseClient'
import {Routes} from '@/shared/config/routes'
import {Session} from '@/shared/types/app'

/*
 * useAuth - redirect unauthorized
 * users to the registration page
 */

export const useAuth = () => {
    const router = useRouter()
    const [isFirstTime, setIsFirstTime] = useState(true)
    const [session, setSession] = useState<Session | null>(null)

    const getSession = useCallback(async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession()

        if (!session)
            router.push(Routes.AUTH)

        setSession(session)
    }, [router])

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

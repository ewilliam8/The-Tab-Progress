import {
    useState,
    useEffect,
    useCallback,
} from 'react'
import {useRouter} from 'next/navigation'
import {supabase} from '@/shared/config/supabaseClient'
import {Routes} from '@/shared/config/routes'

/*
 * useAuth - redirect unauthorized
 * users to the registration page
 */

export const useAuth = () => {
    const router = useRouter()
    const [isFirstTime, setIsFirstTime] = useState(true)

    const getSession = useCallback(async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession()

        if (!session)
            router.push(Routes.AUTH)
    }, [router])

    useEffect(() => {
        if (isFirstTime) {
            getSession()
            setIsFirstTime(false)
        }
    }, [getSession, isFirstTime])
}

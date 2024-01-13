import {supabase} from '@/shared/config/supabaseClient'
import {Routes} from '@/shared/config/routes'

export const useLogout = () => {

    const onLogOut = async () => {
        await supabase.auth.signOut()
        window.location.href = Routes.AUTH
    }

    return {
        onLogOut,
    }
}

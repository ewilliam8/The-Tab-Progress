import {supabase} from '@/shared/config/supabaseClient'
import {Routes} from '@/shared/config/routes'

export const logOut = () => {

    const onLogOut = async () => {
        const { error } = await supabase.auth.signOut()
        window.location.href = Routes.AUTH
    }

    return {
        onLogOut,
    }
}

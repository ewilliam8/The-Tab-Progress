import {supabase} from '@/shared/config/supabaseClient'

export const selectAll = async () => {

    const {data, error} = await supabase
        .from('progress')
        .select('*')

    return {
        data,
        error,
    }
}

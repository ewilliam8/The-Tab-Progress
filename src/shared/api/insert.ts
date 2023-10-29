import {supabase} from '@/shared/config/supabaseClient'

export const insert = async (
    value: number,
    userId?: string
) => {

    const {data, error} = await supabase
        .from('progress')
        .insert({value, user_id: userId})

    return {
        data,
        error,
    }
}

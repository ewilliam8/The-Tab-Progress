import { supabase } from '@/shared/config/supabaseClient'

export const getAll = async () => {

    let { data: investments, error } = await supabase
        .from('investments')
        .select('*')
        .range(0, 35)

    return {
        investments,
        error,
    }
}

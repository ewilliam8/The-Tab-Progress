import { supabase } from '@/shared/config/supabaseClient'

export const insertItem = async (
    amount: number,
    currency: string,
    userId: string,
) => {

    const { data, error } = await supabase
        .from('investments')
        .insert([
            { user_id: userId, amount, currency },
        ])
        .select()

    return {
        data,
        error,
    }
}

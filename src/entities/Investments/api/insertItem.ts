import { supabase } from '@/shared/config/supabaseClient'

export const insertItem = async (
    amount: number,
    currency: string,
    userId: string,
    type: string,
) => {

    const { data, error } = await supabase
        .from('investments')
        .insert([
            { user_id: userId, amount, currency, type },
        ])
        .select()

    return {
        data,
        error,
    }
}

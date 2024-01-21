import { supabase } from '@/shared/config/supabaseClient'

export const getCurrencies = async () => {

    const { data: currencies, error } = await supabase
        .from('investments')
        .select('currency')

    return {
        currencies,
        error,
    }
}

import { supabase } from '@/shared/config/supabaseClient'

export const deleteItem = async (
    id: number | string
) => {

    const { error } = await supabase
        .from('progress')
        .delete()
        .eq('id', id)

    return {
        error,
    }
}

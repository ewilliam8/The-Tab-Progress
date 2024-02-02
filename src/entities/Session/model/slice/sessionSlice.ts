import { createSlice } from '@reduxjs/toolkit'
import { SessionSchema } from '../../model/types/session'

const initialState: SessionSchema = {
    user: {
        id: ''
    }
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.user.id = action.payload
        }
    }
})

export const { actions: sessionActions } = sessionSlice
export const { reducer: sessionReducer } = sessionSlice

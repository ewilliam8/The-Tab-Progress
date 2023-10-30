import { configureStore } from '@reduxjs/toolkit'
import { sessionSlice } from '@/entities/Session'

export const store = configureStore({
    reducer: {
        [sessionSlice.name]: sessionSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = ReturnType<typeof configureStore>['dispatch']

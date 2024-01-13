import {FC, ReactNode} from 'react'
import {useAuth} from '@/entities/Session'

type AuthProviderProps = {
    children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    useAuth()

    return (
        <>
            {children}
        </>
    )
}

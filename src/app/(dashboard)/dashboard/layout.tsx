'use client'

import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/(dashboard)/providers/StoreProvider'
import { AuthProvider } from '@/app/(dashboard)/providers/AuthProvider'
import { Header } from '@/features/Header'

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <Provider store={store}>
            <AuthProvider>
                <div className="layout">
                    <Header />
                    {children}
                </div>
            </AuthProvider>
        </Provider>
    )
}

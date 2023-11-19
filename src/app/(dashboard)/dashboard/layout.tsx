'use client'

import type {ReactNode} from 'react'
import {Provider} from 'react-redux'
import {store} from '@/app/(dashboard)/providers/StoreProvider'

export default function RootLayout({
    children,
}: {
  children: ReactNode
}) {
    return (
        <Provider store={store}>
            <div className="layout app app_dark_theme">
                {children}
            </div>
        </Provider>
    )
}

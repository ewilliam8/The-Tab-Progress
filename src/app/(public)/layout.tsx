import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './styles/index.scss'
import { APP_DESC, APP_NAME } from '@/shared/consts/app';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: APP_NAME,
    description: APP_DESC,
}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    )
}

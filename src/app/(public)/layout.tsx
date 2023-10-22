import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import './styles/index.scss'

export const metadata: Metadata = {
    title: 'The Tab Progress',
    description: 'Track your activity',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    )
}

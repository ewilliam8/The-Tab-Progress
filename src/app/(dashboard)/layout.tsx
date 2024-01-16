import type { ReactNode } from 'react'
import './styles/index.scss'
import {
    APP_DESC,
    APP_NAME
} from '@/shared/consts/app'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Dashboard: ' + APP_NAME,
    description: APP_DESC,
}

export default function RootLayout({
    children,
}: {
  children: ReactNode
}) {
    return (
        <html lang="en">
            <body className={clsx('app dark', inter.className)}>{children}</body>
            <Analytics />
        </html>
    )
}

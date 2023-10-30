import type {ReactNode} from 'react'
import './styles/index.scss'
import {
    APP_DESC,
    APP_NAME
} from '@/shared/consts/app'

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
            <body>{children}</body>
        </html>
    )
}

import type {ReactNode} from 'react';
import {APP_DESC, APP_NAME} from '@/shared/consts/app';

export const metadata = {
    title: 'Dashboard: ' + APP_NAME,
    description: 'Dashboard: ' + APP_DESC,
}

export default function RootLayout({
    children,
}: {
  children: ReactNode
}) {
    return (
        <div className="layout app app_light_theme">
            {children}
        </div>
    )
}

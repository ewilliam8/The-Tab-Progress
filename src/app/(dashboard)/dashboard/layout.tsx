import {APP_DESC, APP_NAME} from '@/shared/config/consts'
import './styles/index.scss'

export const metadata = {
    title: APP_NAME,
    description: APP_DESC,
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="app app_light_theme">
                <div className="layout">
                    {children}
                </div>
            </body>
        </html>
    )
}

import {APP_DESC, APP_NAME} from '@/shared/config/consts'

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
            <body>{children}</body>
        </html>
    )
}

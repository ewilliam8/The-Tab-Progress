import Link from 'next/link'
import { Menubar } from '@/shared/ui'
import { APP_NAME } from '@/shared/consts/app'
import { Routes } from '@/shared/config/routes'
import { usePathname } from 'next/navigation'
import { cn } from '@/shared/lib/cn';

type HeaderProps = {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const pathname = usePathname()

    return (
        <header className={cn('fixed z-10 p-3 top-0', className)}>
            <Link href={Routes.DASHBOARD} >
                {APP_NAME}
            </Link>

            {
                pathname !== Routes.AUTH
                    ? <Menubar />
                    : null
            }
        </header>
    )
}

import {
    MenubarRoot,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from './MenubarRoot'
import * as React from 'react'
import { useLogout } from '@/entities/Session'
import { LogOut, Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { navigation } from '@/shared/config/navigation'

export function MenubarCompound() {
    const { onLogOut } = useLogout()
    const router = useRouter()

    return (
        <MenubarRoot>
            <MenubarMenu>
                <MenubarTrigger className="gap-3">
                    Menu
                    <Menu width={14} height={14} />
                </MenubarTrigger>
                <MenubarContent align='end'>
                    <MenubarItem onClick={() => router.push(navigation.DASHBOARD.path)} className="gap-2">
                        {navigation.DASHBOARD.icon}
                        {navigation.DASHBOARD.name}
                    </MenubarItem>

                    <MenubarItem onClick={() => router.push(navigation.PROGRESS.path)} className="gap-2">
                        {navigation.PROGRESS.icon}
                        {navigation.PROGRESS.name}
                    </MenubarItem>

                    <MenubarItem onClick={() => router.push(navigation.INVESTMENTS.path)} className="gap-2">
                        {navigation.INVESTMENTS.icon}
                        {navigation.INVESTMENTS.name}
                    </MenubarItem>

                    <MenubarSeparator />

                    <MenubarItem onClick={onLogOut} className="gap-2">
                        <LogOut width={14} height={14} />
                        Log Out
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </MenubarRoot>
    )
}



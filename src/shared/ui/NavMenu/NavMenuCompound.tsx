'use client'

import * as React from 'react'
import { cn } from '@/shared/lib/utils'
import {
    NavMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './NavMenu'
import { Button } from '@/shared/ui/Button'
import { useLogout } from '@/entities/Session'
import { Routes } from '@/shared/config/routes'
import { navigation } from '@/shared/config/navigation'

export function NavMenuCompound() {
    const { onLogOut } = useLogout()

    return (
        <NavMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex-row gap-2 p-2 md:w-[300px]">
                            <ListItem href={navigation.DASHBOARD.path} className="flex" >
                                {navigation.DASHBOARD.name}
                                {navigation.DASHBOARD.icon}
                            </ListItem>

                            <ListItem href={Routes.PROGRESS} title="Progress" />
                            <ListItem href={Routes.INVESTMENTS} title="Investments" />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button
                        onClick={onLogOut}
                        variant={'ghost'}
                    >
                        Log Out
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'

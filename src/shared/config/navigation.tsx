import { LayoutGrid } from 'lucide-react'
import { Routes } from '@/shared/config/routes'

export const navigation = {
    DASHBOARD: {
        name: 'Dashboard',
        path: Routes.DASHBOARD,
        icon: <LayoutGrid />,
    },
    PROGRESS: {
        name: 'Progress',
        path: Routes.PROGRESS,
        icon: <LayoutGrid />,
    },
    INVESTMENTS: {
        name: 'Investments',
        path: Routes.INVESTMENTS,
        icon: <LayoutGrid />,
    },
}

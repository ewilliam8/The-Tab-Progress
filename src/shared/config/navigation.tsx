import { LayoutGrid, LineChart, Wallet } from 'lucide-react'
import { Routes } from '@/shared/config/routes'

export const navigation = {
    DASHBOARD: {
        name: 'Dashboard',
        path: Routes.DASHBOARD,
        icon: <LayoutGrid width={14} height={14} />,
    },
    PROGRESS: {
        name: 'Progress',
        path: Routes.PROGRESS,
        icon: <LineChart  width={14} height={14} />,
    },
    INVESTMENTS: {
        name: 'Investments',
        path: Routes.INVESTMENTS,
        icon: <Wallet  width={14} height={14} />,
    },
}

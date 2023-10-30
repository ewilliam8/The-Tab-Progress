'use client'

// Hooks
import {useAuth} from '@/shared/hooks/useAuth'

// Components
import {Navbar} from '@/features/Navbar'
import {Dashboard} from '@/features/Dashboard'

export default function DashboardPage() {
    useAuth()

    return (
        <div>
            <Navbar />
            <Dashboard />
        </div>
    )
}

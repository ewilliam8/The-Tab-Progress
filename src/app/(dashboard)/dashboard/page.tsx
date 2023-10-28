'use client'

import {Navbar} from '@/features/Navbar'
import {useAuth} from '@/shared/hooks/useAuth'

export default function DashboardPage() {
    useAuth()

    return (
        <div>
            <Navbar />
        </div>
    )
}

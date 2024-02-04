'use client'

import { InvestAddCard } from '@/features/Investments/InvestAddCard'
import { getAll } from '@/entities/Investments'
import { useLayoutEffect, useState } from 'react'
import { Tables } from '@/shared/types/database.types'

export default function InvestmentPage() {
    const [dataList, setDataList] = useState<Tables<'investments'>[] | null>(null)
    const onUpdateList = async () => {
        const { investments } = await getAll()
        setDataList(investments)
    }

    useLayoutEffect(() => {
        onUpdateList()
    }, [])

    return (
        <div className="flex flex-col gap-8">
            Investments Page
            <InvestAddCard/>
            <div>
                {dataList && dataList.map(element => {
                    return <div key={element.id} className="flex gap-4">
                        <div>{element.amount}</div>
                        <div>{element.currency}</div>
                        <div>{element.type}</div>
                        <div>{element.created_at}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

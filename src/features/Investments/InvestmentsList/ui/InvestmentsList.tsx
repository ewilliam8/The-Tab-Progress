import { useLayoutEffect, useState } from 'react'
import { Tables } from '@/shared/types/database.types'
import { getAll } from '@/entities/Investments'

type InvestmentsListProps = {
    sliceCount?: number
}

export const InvestmentsList = ({ sliceCount }: InvestmentsListProps) => {
    const [dataList, setDataList] = useState<Tables<'investments'>[] | null>(null)

    const onUpdateList = async () => {
        const { investments } = await getAll()

        let investmentsArr = investments?.reverse() || null
        if (sliceCount && investmentsArr) {
            investmentsArr = investmentsArr.slice(0, sliceCount)
        }

        setDataList(investmentsArr)
    }

    useLayoutEffect(() => {
        onUpdateList()
    }, [])

    return (
        <div className="flex flex-col gap-2">
            {dataList && dataList.map(element => {
                return <div key={element.id} className="flex gap-4 border rounded-md p-3 border-secondary">
                    <div>{element.amount}</div>
                    <div>{element.currency}</div>
                    <div>{element.type}</div>
                    <div>{new Date(element.created_at).toLocaleDateString('ru-RU')}</div>
                </div>
            })}
        </div>
    )
}

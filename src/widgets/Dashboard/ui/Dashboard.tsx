import { ProgressChart } from '@/features/Progress'
import { useCallback, useLayoutEffect, useState } from 'react'
import { selectAll } from '@/entities/Progress'
import { Tables } from '@/shared/types/database.types'
import { InvestmentsList } from '@/features/Investments/InvestmentsList';

export const Dashboard = () => {
    const [dataList, setDataList] = useState<Tables<'progress'>[] | null>(null)

    const onUpdateList = useCallback(async () => {
        const { data: dataSelect } = await selectAll()
        setDataList(dataSelect)
    }, [])

    useLayoutEffect(() => {
        onUpdateList()
    }, [onUpdateList])

    return (
        <>
            {/* ADD PHOTOS BLOCK */}

            {dataList && <>
                <h2>Progress</h2>
                <ProgressChart dataList={dataList} />
            </>}

            <h2>Investments</h2>
            <InvestmentsList sliceCount={8} />
        </>
    )
}

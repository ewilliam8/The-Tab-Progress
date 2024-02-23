import { useCallback, useLayoutEffect, useState } from 'react'
import { Tables } from '@/shared/types/database.types'
import { selectAll } from '@/entities/Progress'
import { ProgressList, ProgressChart } from '@/features/Progress'

export const Progress = () => {
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
            <ProgressChart dataList={dataList} />

            <ProgressList
                slice={7}
                dataList={dataList}
                onUpdateList={onUpdateList}
            />
        </>
    )
}

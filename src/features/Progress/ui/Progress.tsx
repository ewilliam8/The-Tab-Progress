import { useCallback, useLayoutEffect, useState } from 'react'
import { ProgressList } from '@/widgets/ProgressList'
import { Tables } from '@/shared/types/database.types'
import { selectAll } from '@/entities/Progress'
import { ProgressChart } from './ProgressChart'

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
            {/* ADD PHOTOS BLOCK */}

            <ProgressChart dataList={dataList} />

            <ProgressList
                slice={7}
                dataList={dataList}
                onUpdateList={onUpdateList}
            />
        </>
    )
}

import styles from './Dashboard.module.css'
import { useCallback, useLayoutEffect, useState } from 'react'
import { ProgressList } from '@/widgets/ProgressList'
import { Chart } from '@/features/Dashboard/components/Chart'
import { Tables } from '@/shared/types/database.types'
import { selectAll } from '@/entities/Progress'

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
        <div className={styles.dashboard}>
            {/* ADD PHOTOS BLOCK */}

            <Chart dataList={dataList} />

            <ProgressList
                slice={7}
                dataList={dataList}
                onUpdateList={onUpdateList}
            />
        </div>
    )
}

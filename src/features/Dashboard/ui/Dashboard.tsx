import styles from './Dashboard.module.css'

// React, Redux
import { useCallback, useLayoutEffect, useState } from 'react'
import { IDataProgressType } from '@/shared/types/app'
import { selectAll } from '@/shared/api/selectAll'
import { ProgressList } from '@/widgets/ProgressList'
import { Chart } from '@/features/Dashboard/components/Chart'
import { Button } from '@/shared/ui'

export const Dashboard = () => {
    const [dataList, setDataList] = useState<IDataProgressType>(null)

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

            <Button
                onClick={onUpdateList}
                variant={'secondary'}
            >
                Update list
            </Button>
            <ProgressList
                slice={7}
                list={dataList}
            />
        </div>
    )
}

import styles from './Dashboard.module.css'

// React, Redux
import {useCallback, useLayoutEffect, useState,} from 'react'

// Types
import {IDataProgressType} from '@/shared/types/app'

// Hooks and Api
import {selectAll} from '@/shared/api/selectAll'

// Components
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {ProgressList} from '@/widgets/ProgressList'
import {Chart} from '@/features/Dashboard/components/Chart';


export const Dashboard = () => {
    const [dataList, setDataList] = useState<IDataProgressType>(null)

    const onUpdateList = useCallback(async () => {
        const {data: dataSelect} = await selectAll()
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
                theme={ButtonTheme.OUTLINED}
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

import styles from './Dashboard.module.css'

// React, Redux
import {useCallback, useLayoutEffect, useState,} from 'react'

// Types
import {IDataProgressType} from '@/shared/types/app'

// Hooks and Api
import {selectAll} from '@/shared/api/selectAll'

// Components
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
import {ProgressList} from '@/widgets/ProgressList'

// TODO use TinyAreaChart

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

            <div className={styles.chart}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={dataList || []}
                        margin={{
                            right: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 4" />
                        <XAxis dataKey="created_at" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="var(--accent-color)" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

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

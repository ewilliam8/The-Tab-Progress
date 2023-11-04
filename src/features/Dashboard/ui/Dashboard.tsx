import styles from './Dashboard.module.css'

// React, Redux
import {
    useState,
    useCallback,
} from 'react'

// Types
import {IDataProgressType} from '@/shared/types/app'

// Hooks and Api
import {selectAll} from '@/shared/api/selectAll'

// Components
import {Button} from '@/shared/ui/Button'
import {
    Line,
    YAxis,
    XAxis,
    Tooltip,
    LineChart,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts'
import {ProgressList} from '@/widgets/ProgressList'

// TODO use TinyAreaChart

export const Dashboard = () => {
    const [dataList, setDataList] = useState<IDataProgressType>(null)

    const onUpdateList = useCallback(async () => {
        const {data: dataSelect} = await selectAll()
        setDataList(dataSelect)
    }, [])

    return (
        <div className={styles.dashboard}>
            {/* ADD PHOTOS BLOCK */}

            <div className={styles.chart}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={dataList || []}
                        margin={{
                            right: 30,
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
            >
                update list fn()
            </Button>
            <ProgressList
                slice={7}
                list={dataList}
            />
        </div>
    )
}

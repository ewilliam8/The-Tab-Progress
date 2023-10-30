import styles from './Dashboard.module.css'

// React, Redux
import {
    useState,
    useCallback,
} from 'react'
import {useSelector} from 'react-redux'
import {getSessionUserId} from '@/entities/Session'

// Types
import {IDataProgress} from '@/shared/types/app'

// Hooks and Api
import {insert} from '@/shared/api/insert'
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

// TODO use TinyAreaChart

export const Dashboard = () => {
    const userId = useSelector(getSessionUserId)
    const [dataList, setDataList] = useState<IDataProgress[] | null>(null)

    const onInsert = useCallback(async () => {
        await insert(Math.floor(Math.random() * 200), userId)
    }, [userId])

    const onUpdateList = useCallback(async () => {
        const {data: dataSelect} = await selectAll()
        setDataList(dataSelect)
    }, [])

    return (
        <div className={styles.dashboard}>
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
                onClick={onInsert}
            >
                insert fn()
            </Button>
            <Button
                onClick={onUpdateList}
            >
                update list fn()
            </Button>
            {dataList &&
                dataList.map(elem => <p key={elem.id}>{elem.value}</p>)
            }
        </div>
    )
}

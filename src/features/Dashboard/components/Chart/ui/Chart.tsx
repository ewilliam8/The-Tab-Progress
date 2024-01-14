import { memo } from 'react'
import styles from './Chart.module.scss'

import {
    Area,
    XAxis,
    YAxis,
    Tooltip,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts'
import { IDataProgressType } from '@/shared/types/app'

interface ChartProps {
    dataList: IDataProgressType
}

// TODO to widgets
export const Chart = memo(({ dataList }: ChartProps) => {
    return (
        <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={dataList || []}
                    margin={{
                        right: 10,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="1" y1="1" x2="1" y2="0">
                            <stop offset="25%" stopColor="var(--background)" stopOpacity={0.28} />
                            <stop offset="95%" stopColor="var(--accent)" stopOpacity={0.28} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="1 4" />
                    <XAxis dataKey="created_at" />
                    <YAxis />
                    <Tooltip contentStyle={{
                        backgroundColor: 'var(--background)',
                        borderRadius: 'var(--radius)',
                        borderColor: 'var(--secondary)'
                    }} />
                    <Area type="monotone" dataKey="value" stroke="var(--accent)" fill="url(#colorUv)"  />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
})

Chart.displayName = 'Chart'

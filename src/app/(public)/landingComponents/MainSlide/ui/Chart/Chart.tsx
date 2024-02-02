'use client'

import {
    Area,
    AreaChart
} from 'recharts'
import { useEffect, useState } from 'react';

const data = [
    {
        name: '1',
        uv: 0
    },
    {
        name: '2',
        uv: 275
    },
    {
        name: '3',
        uv: 325
    },
    {
        name: '4',
        uv: 600
    }
]

export const Chart = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {isClient
                ? (
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                                <stop offset="25%" stopColor="var(--background)" stopOpacity={0.5} />
                                <stop offset="95%" stopColor="var(--foreground)" stopOpacity={0.5} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="uv" stroke="var(--accent)" fill="url(#colorUv)"/>
                    </AreaChart>)
                : null
            }
        </>
    )
}

Chart.displayName = 'Chart'



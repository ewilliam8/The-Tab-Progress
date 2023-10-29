'use client'

import {Navbar} from '@/features/Navbar'
import {useAuth} from '@/shared/hooks/useAuth'
import {insert} from '@/shared/api/insert'
import {useCallback, useRef, useState} from 'react'
import {Button} from '@/shared/ui/Button'
import {selectAll} from '@/shared/api/selectAll'
import {IDataSelect} from '@/shared/types/app';

export default function DashboardPage() {
    const {session} = useAuth()
    const userId = useRef(session?.user?.id)
    const [dataList, setDataList] = useState<IDataSelect[] | null>(null)

    const onInsert = useCallback(async () => {
        await insert(Math.floor(Math.random() * 200), userId.current)
    }, [userId])

    const onUpdateList = useCallback(async () => {
        const {data: dataSelect} = await selectAll()
        setDataList(dataSelect)
    }, [])

    return (
        <div>
            <Navbar />
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
            {/*{error && <p>{error}</p>}*/}
        </div>
    )
}

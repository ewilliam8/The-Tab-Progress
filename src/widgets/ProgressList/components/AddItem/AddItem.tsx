import { useSelector } from 'react-redux'
import { useCallback, useState } from 'react'
import styles from './AddItem.module.scss'
import { getSessionUserId } from '@/entities/Session'
import { Plus } from 'lucide-react'
import { Input, Button } from '@/shared/ui'
import { insert } from '@/entities/Progress'

export const AddItem = ({ onUpdateList }: { onUpdateList: () => void }) => {
    const userId = useSelector(getSessionUserId)
    const [n, setN] = useState('')

    const onInsert = useCallback(async () => {
        await insert(Number(n), userId)
        onUpdateList() // TODO: delete Props drilling
    }, [n, onUpdateList, userId])

    return (
        <div className={styles.AddItem}>
            <Input
                value={n}
                onChange={(val) => setN(val.target.value)}
            />
            <Button
                onClick={onInsert}
                variant={'secondary'}
                size={'icon'}
            >
                <Plus width={14} height={14} />
            </Button>
        </div>
    )
}

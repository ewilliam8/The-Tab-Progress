import { useSelector } from 'react-redux'
import { useCallback, useState } from 'react'
import styles from './AddItem.module.scss'
import { getSessionUserId } from '@/entities/Session'
import { Plus } from 'lucide-react'

// Api
import { insert } from '@/shared/api/insert'

// Components
import { Input, Button } from '@/shared/ui'

export const AddItem = () => {
    const userId = useSelector(getSessionUserId)
    const [n, setN] = useState('')

    const onInsert = useCallback(async () => {
        await insert(n, userId)
    }, [n, userId])

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

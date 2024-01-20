import { useCallback } from 'react'
import { deleteItem } from '@/shared/api/deleteItem'
import styles from './ListItem.module.scss'
import { Trash2, Pencil } from 'lucide-react'
import { Button } from '@/shared/ui'
import { Tables } from '@/shared/types/database.types'

interface ListItemProps extends Tables<'progress'>{
    isEditable?: boolean
}

export const ListItem = (props: ListItemProps) => {
    const {
        id,
        value,
        created_at,
        isEditable,
    } = props

    const onDelete = useCallback(async () => {
        await deleteItem(id)
    }, [id])

    return (
        <div className={styles.ListItem}>
            <div className={styles.info}>
                <span className={styles.value}>
                    {value}
                </span>
                {created_at}
            </div>
            {isEditable &&
                <div className={styles.control}>
                    <Button
                        variant={'secondary'}
                        size={'icon'}
                    >
                        <Pencil width={14} height={14} />
                    </Button>
                    <Button
                        onClick={onDelete}
                        variant={'secondary'}
                        size={'icon'}
                    >
                        <Trash2 width={14} height={14} />
                    </Button>
                </div>
            }
        </div>
    )
}

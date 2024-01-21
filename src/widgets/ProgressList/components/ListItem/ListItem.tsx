import { useCallback } from 'react'
import styles from './ListItem.module.scss'
import { Trash2, Pencil } from 'lucide-react'
import { AlertDialog, Button } from '@/shared/ui'
import { Tables } from '@/shared/types/database.types'
import { deleteItem } from '@/entities/Progress'

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
                    <AlertDialog
                        trigger={
                            <Button
                                variant={'secondary'}
                                size={'icon'}
                            >
                                <Trash2 width={14} height={14} />
                            </Button>}
                        title="Are you absolutely sure?"
                        description="This action cannot be undone. This will permanently delete progress data from our servers."
                        onSubmit={onDelete} />
                </div>
            }
        </div>
    )
}

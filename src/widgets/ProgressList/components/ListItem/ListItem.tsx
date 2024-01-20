import { useCallback } from 'react'
import { deleteItem } from '@/shared/api/deleteItem'
import { IDataProgress } from '@/shared/types/app'
import styles from './ListItem.module.scss'
import { Trash2, Pencil } from 'lucide-react'
import { Button } from '@/shared/ui'

interface ListItemProps extends IDataProgress{
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

import {useCallback} from 'react'

// Api
import {deleteItem} from '@/shared/api/deleteItem'

// Types
import {IDataProgress} from '@/shared/types/app'

// Styles and Images
import styles from './ListItem.module.scss'
import Pencil from '../../../../../public/assets/icons/pencil.svg'
import Trash from '../../../../../public/assets/icons/trash.svg'

// Components
import {Button, ButtonTheme} from '@/shared/ui/Button'

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

    const onEdit = useCallback(() => {
        // TODO Add modal for edit
    }, [])

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
                        icon={<Pencil width={14} height={14} />}
                        onClick={onEdit}
                        theme={ButtonTheme.OUTLINED}
                    />
                    <Button
                        icon={<Trash width={14} height={14} />}
                        onClick={onDelete}
                        theme={ButtonTheme.OUTLINED}
                    />
                </div>
            }
        </div>
    )
}

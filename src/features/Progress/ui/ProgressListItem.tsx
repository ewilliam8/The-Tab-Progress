import { useCallback } from 'react'
import { Trash2, Pencil } from 'lucide-react'
import { AlertDialog, Button } from '@/shared/ui'
import { Tables } from '@/shared/types/database.types'
import { deleteItem } from '@/entities/Progress'

interface ProgressListItemProps extends Tables<'progress'>{
    isEditable?: boolean
}

export const ProgressListItem = (props: ProgressListItemProps) => {
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
        <div className="flex my-2 p-3 rounded-md border justify-between items-center border-secondary">
            <div className="flex flex-col text-secondary">
                <span className="text-2xl text-accent">
                    {value}
                </span>
                {created_at}
            </div>
            {isEditable &&
                <div className="flex flex-row gap-3">
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

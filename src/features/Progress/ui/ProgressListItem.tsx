import { useCallback } from 'react'
import { Trash2, Pencil } from 'lucide-react'
import { AlertDialog, Button } from '@/shared/ui'
import { Tables } from '@/shared/types/database.types'
import { deleteItem } from '@/entities/Progress'

interface ProgressListItemProps extends Tables<'progress'> {
    isEditable?: boolean
}

export const ProgressListItem = ({ id, value, created_at, isEditable, }: ProgressListItemProps) => {
    const onDelete = async () => {
        await deleteItem(id)
    }

    return (
        <div className="flex my-2 p-3 rounded-md border justify-between items-center border-secondary relative overflow-hidden">
            <div className="flex flex-col text-secondary ml-24">
                <span className="text-accent text-5xl absolute left-0 top-1 my-auto">
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
                        <Pencil size={14}/>
                    </Button>
                    <AlertDialog
                        trigger={
                            <Button
                                variant={'secondary'}
                                size={'icon'}
                            >
                                <Trash2 size={14}/>
                            </Button>}
                        title="Are you absolutely sure?"
                        description="This action cannot be undone. This will permanently delete progress data from our servers."
                        onSubmit={onDelete}/>
                </div>
            }
        </div>
    )
}

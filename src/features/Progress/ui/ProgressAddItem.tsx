import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getSessionUserId } from '@/entities/Session'
import { Plus } from 'lucide-react'
import { Input, Button } from '@/shared/ui'
import { insert } from '@/entities/Progress'

export const ProgressAddItem = ({ onUpdateList }: { onUpdateList: () => void }) => {
    const userId = useSelector(getSessionUserId)
    const [n, setN] = useState('')

    const onInsert = async () => {
        await insert(Number(n), userId)
        onUpdateList() // TODO: delete Props drilling
        setN('')
    }

    return (
        <div className="flex w-full gap-5">
            <Input
                value={n}
                onChange={(val) => setN(val.target.value)}
            />
            <Button
                onClick={onInsert}
                variant='secondary'
                size='icon'
                className='grow'
            >
                <Plus size={14} />
            </Button>
        </div>
    )
}

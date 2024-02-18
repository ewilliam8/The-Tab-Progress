import { Tables } from '@/shared/types/database.types'
import { ProgressListItem } from './ProgressListItem'
import { ProgressAddItem } from './ProgressAddItem'

interface ProgressListProps {
    dataList: Tables<'progress'>[] | null
    onUpdateList: () => void
    slice?: number
}

export const ProgressList = (props: ProgressListProps) => {
    const {
        dataList,
        onUpdateList,
        slice,
    } = props

    if (!dataList) return null

    return (
        <>
            <ProgressAddItem onUpdateList={onUpdateList} />
            {dataList
                .toReversed()
                .slice(0, slice || -1)
                .map((item, i) =>
                    <ProgressListItem
                        key={item.id}
                        isEditable={i === 0}
                        {...item}
                    />)
            }
        </>
    )
}

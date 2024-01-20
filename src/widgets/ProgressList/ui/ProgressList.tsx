import styles from './ProgressList.module.scss'
import { AddItem } from '../components/AddItem/AddItem'
import { ListItem } from '../components/ListItem/ListItem'
import { Tables } from '@/shared/types/database.types'

interface ProgressListProps {
    dataList: Tables<'progress'>[] | null
    slice?: number
}

export const ProgressList = (props: ProgressListProps) => {
    const {
        dataList,
        slice,
    } = props

    if (!dataList) return null

    return (
        <div className={styles.ProgressList}>
            <AddItem />
            {dataList
                .toReversed()
                .slice(0, slice || -1)
                .map((item, i) =>
                    <ListItem
                        key={item.id}
                        isEditable={i === 0}
                        {...item}
                    />)
            }
        </div>
    )
}

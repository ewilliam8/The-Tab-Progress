
import styles from './ProgressList.module.scss'

// Types
import {IDataProgressType} from '@/shared/types/app'

// Components
import {AddItem} from '../components/AddItem/AddItem'
import {ListItem} from '../components/ListItem/ListItem'

interface ProgressListProps {
    list: IDataProgressType
    slice?: number
}

export const ProgressList = (props: ProgressListProps) => {
    const {
        list,
        slice,
    } = props

    if (!list) return null
    return (
        <div className={styles.ProgressList}>
            <AddItem />
            {list
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

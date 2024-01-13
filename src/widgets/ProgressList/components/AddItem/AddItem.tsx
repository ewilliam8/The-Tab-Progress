import {useSelector} from 'react-redux'
import {useCallback, useState} from 'react'
import styles from './AddItem.module.scss'
import Plus from '../../../../../public/assets/icons/plus.svg'
import {getSessionUserId} from '@/entities/Session';

// Api
import {insert} from '@/shared/api/insert'

// Components
import {Input} from '@/shared/ui/Input/Input'
import {Button, ButtonTheme} from '@/shared/ui/Button'

export const AddItem = () => {
    const userId = useSelector(getSessionUserId)
    const [n, setN] = useState('')

    const onInsert = useCallback(async () => {
        await insert(n, userId)
    }, [n, userId])

    return (
        <div className={styles.AddItem}>
            <Input
                value={n}
                onChange={setN}
            />
            <Button
                theme={ButtonTheme.OUTLINED}
                icon={<Plus width={14} height={14} />}
                onClick={onInsert}
            />
        </div>
    )
}

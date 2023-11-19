import {useSelector} from 'react-redux'
import {useCallback, useState} from 'react'
import {getSessionUserId} from '@/entities/Session'

import styles from './AddItem.module.scss'
import Plus from '../../../../../public/assets/icons/plus.svg'

// Api
import {insert} from '@/shared/api/insert'

// Components
import {Input} from '@/shared/ui/Input'
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

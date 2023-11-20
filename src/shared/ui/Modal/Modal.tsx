import {clsx} from 'clsx'
import {useEffect, useState} from 'react'
import styles from './Modal.module.scss'

// Components
import {Portal} from '@/shared/ui/Portal/Portal'

interface ModalProps {
    lazy?: boolean
    isOpen?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        lazy,
        isOpen = false,
    } = props

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if(isOpen) setIsMounted(true)
    }, [isOpen])

    if (lazy && !isMounted) return null

    return (
        <Portal>
            <div className={clsx(styles.modal, [isOpen && styles.opened])}>
                ABC
            </div>
        </Portal>
    )
}

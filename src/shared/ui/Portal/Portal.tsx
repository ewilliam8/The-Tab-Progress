import {
    useRef,
    useState,
    useEffect,
    type ReactNode
} from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props

    const ref = useRef<Element>(element)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // ref.current = document.querySelector<HTMLElement>('#portal')
        setMounted(true)
    }, [])

    return (
        mounted
            ? createPortal(children, ref.current)
            : null
    )
}

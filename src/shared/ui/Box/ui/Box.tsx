import React, {memo} from 'react';
import type {PropsWithChildren} from 'react';

import styles from './Box.module.scss'
import { clsx } from 'clsx'

interface BoxProps extends PropsWithChildren {
    classname?: string
    alignItems?: boolean
    justifyContent?: boolean,
}

export const Box = memo((props: BoxProps) => {
    const {
        children,
        classname,
        alignItems,
        justifyContent
    } = props

    return (
        <div className={clsx([classname], {
            [styles.alignItems] : alignItems,
            [styles.justifyContent] : justifyContent,
        })}>
            {children}
        </div>
    )
})

Box.displayName = 'Box';

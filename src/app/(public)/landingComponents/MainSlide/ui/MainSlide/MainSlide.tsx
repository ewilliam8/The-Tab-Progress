import {memo} from 'react'
import styles from './MainSlide.module.scss'
import {APP_DESC} from '@/shared/consts/app'

import {Chart} from '../Chart/Chart'

export const MainSlide = memo(() => {
    return (
        <div className={styles.MainSlide}>
            <h1 className={styles.title}>{APP_DESC}</h1>
            <p className={styles.desc}>
                *Achieve your aim tracking activity
            </p>
            <div className={styles.chart}>
                <Chart />
            </div>
        </div>
    )
})

MainSlide.displayName = 'MainSlide'

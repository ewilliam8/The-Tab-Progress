import {memo} from 'react'
import styles from './MainSlide.module.scss'
import {APP_DESC} from '@/shared/config/consts';

export const MainSlide = memo(() => {
    return (
        <div className={styles.MainSlide}>
            <h1 className={styles.title}>{APP_DESC}</h1>
            <p className={styles.desc}>
                *Achieve your aim tracking activity
            </p>
        </div>
    )
})

MainSlide.displayName = 'MainSlide';

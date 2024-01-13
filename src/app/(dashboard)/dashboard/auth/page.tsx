import styles from './AuthPage.module.scss'
import { AuthForm } from '@/features/AuthForm'

export default function Auth() {
    return (
        <div className={styles.AuthPage}>
            <AuthForm />
        </div>
    )
}

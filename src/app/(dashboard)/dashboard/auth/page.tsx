import styles from './AuthPage.module.scss'
import { AuthForm } from '@/features/AuthForm'
import { APP_DESC, APP_NAME } from '@/shared/consts/app';

export const metadata = {
    title: 'Login: ' + APP_NAME,
    description: APP_DESC,
}

export default function Auth() {
    return (
        <div className={styles.AuthPage}>
            <AuthForm />
        </div>
    )
}

import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink'
import {Routes} from '@/shared/config/routes'

export const Navbar = () => {
    return (
        <div>
            <AppLink
                to={Routes.AUTH}
                theme={AppLinkTheme.OUTLINED}
            >
                Auth
            </AppLink>
        </div>
    )
}

import { SheetCompound } from '@/shared/ui/Sheet/SheetCompound';

type NavbarProps = {
    className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    return <div className={className}><SheetCompound /></div>
}

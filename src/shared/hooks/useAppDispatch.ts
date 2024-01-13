import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/(dashboard)/providers/StoreProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()

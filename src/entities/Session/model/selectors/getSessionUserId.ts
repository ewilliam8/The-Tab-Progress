import { StateSchema } from '@/app/(dashboard)/providers/StoreProvider';

export const getSessionUserId = (state: StateSchema) => state.session.user.id

export interface IDataProgress {
    id: string
    value: number
    user_id: string
    created_at: string
}

export type IDataProgressType = IDataProgress[] | null

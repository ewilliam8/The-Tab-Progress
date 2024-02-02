export interface user {
    id: string
    aud?: 'authenticated' | string
    role?: 'authenticated' | string
    email?: string
    email_confirmed_at?: string
    phone?: string
    confirmation_sent_at?: string
    confirmed_at?: string
    last_sign_in_at?: string
}

export interface SessionSchema {
    access_token?: string
    token_type?: 'bearer'
    expires_in?: number
    expires_at?: number
    refresh_token?: string
    user: user
}

export type Role = 'mahasiswa' | 'admin' | 'pic'

export interface LoginCredentials {
    nim: string
    password: string
    role: Role
}

export interface AuthUser {
    id: string
    name: string
    nim: string
    role: Role
}

export interface LoginResult {
    success: boolean
    message?: string
    user?: AuthUser
}
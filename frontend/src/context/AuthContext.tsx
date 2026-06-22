import React, { createContext, useState, useEffect, useContext } from 'react'
import type { Role, AuthUser, LoginResult } from '../features/auth/types'
import api from '../services/api'

interface AuthContextType {
    user: AuthUser | null
    loading: boolean
    login: (nim: string, password: string, role: Role) => Promise<LoginResult>
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const savedUser = localStorage.getItem('user')
        if (token && savedUser) {
            setUser(JSON.parse(savedUser))
        }
        setLoading(false)
    }, [])

    const login = async (nim: string, password: string, role: Role): Promise<LoginResult> => {
        try {
            const response = await api.post('/login', { nim, password, role })
            const { user, token } = response.data

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)

            return { success: true, user }
        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login gagal'
            }
        }
    }

    const logout = async () => {
        try {
            await api.post('/logout')
        } catch (error) {
            console.error('Logout error:', error)
        }
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}
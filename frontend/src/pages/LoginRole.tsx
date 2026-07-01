import { useParams, Navigate } from 'react-router-dom'
import type { Role } from '../features/auth/types'
import LoginPage from '../features/auth/index'

const validRoles: Role[] = ['mahasiswa', 'admin', 'pic']

const LoginRole = () => {
    const { role } = useParams<{ role: string }>()

    if (!role || !validRoles.includes(role as Role)) {
        return <Navigate to="/login" />
    }

    return <LoginPage />
}

export default LoginRole
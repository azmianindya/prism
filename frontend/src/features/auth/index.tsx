import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import type { Role } from './types'
import RoleSelector from './roleSelector'
import LoginForm from './loginForm'
import Logo from '../../assets/logo.png'
import Kampus from '../../assets/kampus.png'

const LoginPage = () => {
    const [role, setRole] = useState<Role>('mahasiswa')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async (nim: string, password: string) => {
        const result = await login(nim, password, role)
        if (result.success) {
            if (role === 'admin') navigate('/admin/dashboard')
            else if (role === 'pic') navigate('/pic/dashboard')
            else navigate('/dashboard')
        }
        return result
    }

    return (
        <div className="h-screen flex">
            {/* Kiri - Form */}
            <div className="w-1/2 bg-white flex items-center justify-center p-10">
                <div className="w-full max-w-sm">
                    <div className="mb-4 flex justify-center">
                        <img src={Logo} alt="PRISM Logo" className="w-20 h-20 object-contain" />
                    </div>
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl font-bold text-gray-800">Sistem Absensi &</h1>
                        <h1 className="text-2xl font-bold text-gray-800">Monitoring Piket Mahasiswa</h1>
                        <p className="text-sm text-gray-400 mt-1">Login untuk melanjutkan</p>
                    </div>
                    <RoleSelector role={role} setRole={setRole} />
                    <LoginForm onSubmit={handleLogin} role={role} />
                </div>
            </div>

            {/* Kanan - Foto */}
            <div className="w-1/2 relative">
                <img
                    src={Kampus}
                    alt="Ilustrasi Piket"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default LoginPage
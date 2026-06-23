import { useState } from 'react'
import type { Role, LoginResult } from './types'

const LoginForm = ({ onSubmit, role }: { onSubmit: (nim: string, password: string) => Promise<LoginResult>, role: Role }) => {
    const [nim, setNim] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const placeholder = role === 'mahasiswa' ? 'Masukkan NIM' : role === 'admin' ? 'Masukkan Username' : 'Masukkan NIP/NIM'
    const label = role === 'mahasiswa' ? 'NIM' : role === 'admin' ? 'Username' : 'NIP/NIM'

    const handleSubmit = async () => {
        setError('')
        setLoading(true)
        const result = await onSubmit(nim, password)
        if (!result.success) setError(result.message || 'NIM atau password salah')
        setLoading(false)
    }

    return (
        <div className="space-y-4 mt-6">
            {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                    ⚠️ {error}
                </div>
            )}

            <div className="flex flex-col gap-1">
                <div className="text-sm text-gray-600">{label}</div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    disabled={loading}
                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 w-full"
                />
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-sm text-gray-600">Password</div>
                <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 w-full"
                />
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 accent-blue-600"
                />
                <label htmlFor="remember" className="text-sm text-gray-500">Ingat Saya</label>
            </div>

            <div
                onClick={!loading ? handleSubmit : undefined}
                className="w-full bg-blue-600 text-white rounded-xl py-3 text-sm font-semibold text-center cursor-pointer hover:bg-blue-700 transition-colors"
            >
                {loading ? 'Loading...' : 'Login'}
            </div>
        </div>
    )
}

export default LoginForm
import type { Role } from './types'

const roles = [
    { id: 'mahasiswa' as Role, label: 'Mahasiswa', icon: '🎓' },
    { id: 'admin' as Role, label: 'Admin', icon: '🛡️' },
    { id: 'pic' as Role, label: 'PIC', icon: '👤' },
]

const RoleSelector = ({ role, setRole }: { role: Role, setRole: (role: Role) => void }) => {
    return (
        <div className="flex gap-2 p-1.5 bg-gray-100 rounded-xl border border-gray-200">
            {roles.map((r) => (
                <div
                    key={r.id}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-300 ${
                        role === r.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-400 hover:text-gray-600'
                    }`}
                    onClick={() => setRole(r.id)}
                >
                    <span>{r.icon}</span>
                    <span>{r.label}</span>
                </div>
            ))}
        </div>
    )
}

export default RoleSelector
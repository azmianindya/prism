import { RiDashboardLine, RiCalendarLine, RiHistoryLine, RiMapPinLine } from 'react-icons/ri'
import Logo from '../../assets/logo.png'

const menus = [
    { icon: <RiDashboardLine />, label: 'Dashboard', path: '/dashboard' },
    { icon: <RiCalendarLine />, label: 'Jadwal Piket', path: '/jadwal' },
    { icon: <RiHistoryLine />, label: 'Riwayat Absensi', path: '/riwayat' },
    { icon: <RiMapPinLine />, label: 'Informasi Area Piket', path: '/area' },
]

const Sidebar = ({ active }: { active: string }) => {
    return (
        <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
                <img src={Logo} alt="PRISM" className="w-15 h-15 object-contain" />
                <div>
                    <div className="text-sm font-bold text-gray-800">Sistem Absensi</div>
                    <div className="text-sm font-bold text-gray-800">Mahasiswa</div>
                </div>
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-1 px-3 py-4">
                {menus.map((menu) => (
                    <div
                        key={menu.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all ${
                            active === menu.path
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        <span className="text-lg">{menu.icon}</span>
                        <span>{menu.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
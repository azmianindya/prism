import { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const Header = ({ title, name }: { title: string, name: string }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }

    return (
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 relative">
            <div className="flex items-center gap-3">
                <IoMenuOutline size={25} className="text-xl text-gray-500 cursor-pointer" />
                <div className="text-lg font-semibold text-gray-800">{title}</div>
            </div>
            <div className="flex items-center gap-3">
                <IoMdNotificationsOutline size={30} className="text-xl text-gray-500 cursor-pointer" />
                <div className="relative">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <CgProfile size={30} className="text-2xl text-gray-500"/>
                        <div>
                            <div className="text-sm font-semibold text-gray-800">{name}</div>
                            <div className="text-xs text-gray-400">Admin</div>
                        </div>
                        <FaAngleDown size={20} className={`text-sm text-gray-400 transition-transform duration-200 ${ isDropdownOpen ? 'rotate-180' : '' }`}/>
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div>
                            <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}/>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20 top-full">
                                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150">
                                    <FiLogOut size={18} /><div>Logout</div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
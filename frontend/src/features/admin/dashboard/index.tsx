import { useState } from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import Sidebar from '../../../components/admin/Sidebar'
import Header from '../../../components/admin/Header' 

const DashboardAdmin = () => {
    const [attendanceData] = useState([
        { id: 1, name: 'Budi Santoso', nim: '2021001', area: 'Area A', time: '06:30' },
        { id: 2, name: 'Siti Rahayu', nim: '2021002', area: 'Area B', time: '06:45' },
        { id: 3, name: 'Bayu Wijaya', nim: '2021003', area: 'Area A', time: '06:50' },
    ]);

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar active="/dashboard" />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header title="Dashboard" name="Arief" />

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {/* Greeting */}
                    <div className="mb-6">
                        <div className="text-2xl font-bold text-gray-800">Selamat Pagi, Arief!</div>
                        <div className="text-sm text-gray-400">Monitoring pelaksanaan piket mahasiswa hari ini</div>
                    </div>

                    {/* DIV 1: Statistik Cards */}
                    <div className="grid grid-cols-4 gap-6 mb-6">
                        {/* Total Mahasiswa Piket */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="text-sm text-gray-400 font-medium">Total Mahasiswa Piket</div>
                                    <div className="text-2xl font-bold text-gray-800 mt-2">10</div>
                                    <div className="text-xs text-gray-400 mt-1">Mahasiswa</div>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <FaUserGraduate className="text-blue-500 text-2xl" />
                                </div>
                            </div>
                        </div>

                        {/* Hadir (Tervalidasi) */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="text-sm text-gray-400 font-medium">Hadir (Tervalidasi)</div>
                                    <div className="text-2xl font-bold text-gray-800 mt-2">2</div>
                                    <div className="text-xs text-gray-400 mt-1">Mahasiswa</div>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <FaCheckCircle className="text-green-500 text-2xl" />
                                </div>
                            </div>
                        </div>

                        {/* Menunggu Validasi */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="text-sm text-gray-400 font-medium">Menunggu Validasi</div>
                                    <div className="text-2xl font-bold text-gray-800 mt-2">5</div>
                                    <div className="text-xs text-gray-400 mt-1">Mahasiswa</div>
                                </div>
                                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                                    <FaRegClock className="text-yellow-500 text-2xl" />
                                </div>
                            </div>
                        </div>

                        {/* Belum Absen */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="text-sm text-gray-400 font-medium">Belum Absen</div>
                                    <div className="text-2xl font-bold text-gray-800 mt-2">3</div>
                                    <div className="text-xs text-gray-400 mt-1">Mahasiswa</div>
                                </div>
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                    <FaUserSlash className="text-red-500 text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DIV 2: Absensi Menunggu Validasi */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-lg font-bold text-gray-800">Absensi Menunggu Validasi</div>
                            <div className="text-sm text-blue-600 hover:text-blue-700 font-medium">Lihat Semua</div>
                        </div>

                        {/* List Absensi */}
                        <div className="space-y-3">
                            {attendanceData.map((item, index) => (
                                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm text-gray-400 w-6">{index + 1}</span>
                                        <div>
                                            <div className="text-sm font-medium text-gray-800">{item.name}</div>
                                            <div className="text-xs text-gray-400">{item.nim}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-sm text-gray-600">{item.area}</div>
                                        <div className="text-sm text-gray-600">{item.time}</div>
                                        <div className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">Menunggu Validasi</div>
                                        <div className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline">Validasi</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DIV 3: Monitoring Area Piket */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-lg font-bold text-gray-800">Monitoring Area Piket</div>
                            <div className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"><BiMap className="text-lg" />Lihat Peta Lengkap</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <div className="text-sm font-medium text-gray-700">Area A</div>
                                </div>
                                <div className="text-xs text-gray-400">3 mahasiswa</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="text-sm font-medium text-gray-700">Area B</div>
                                </div>
                                <div className="text-xs text-gray-400">2 mahasiswa</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="text-sm font-medium text-gray-700">Area C</div>
                                </div>
                                <div className="text-xs text-gray-400">5 mahasiswa</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <div className="text-sm font-medium text-gray-700">Area D</div>
                                </div>
                                <div className="text-xs text-gray-400">0 mahasiswa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardAdmin
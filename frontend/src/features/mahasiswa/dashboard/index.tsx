import { useState } from 'react'
import { TbMapSearch } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { IoCamera } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import Sidebar from '../../../components/mahasiswa/Sidebar'
import Header from '../../../components/mahasiswa/Header'

const DashboardMahasiswa = () => {
    const [wilayah, setWilayah] = useState('')
    const [_, setShowCamera] = useState(false)

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar active="/dashboard" />

            {/* Main */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Header */}
                <Header title="Dashboard" name="Ahmad" />

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {/* Greeting */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Selamat Pagi, Ahmad!</h1>
                        <p className="text-sm text-gray-400">Semangat melaksanakan piket</p>
                    </div>

                    <div className="flex gap-6">
                        {/* Kiri - Status Piket */}
                        <div className="flex-1">
                            <div className="bg-white border-2 border-blue-500 rounded-2xl p-6">
                                <h2 className="text-base font-bold text-gray-800 mb-5">Status Piket Hari Ini</h2>

                                <div className="flex flex-col gap-5">
                                    {/* Wilayah */}
                                    <div className="flex items-start gap-4">
                                        <TbMapSearch className="text-2xl text-gray-400 mt-1" />
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500 mb-1">Wilayah</div>
                                            <select
                                                value={wilayah}
                                                onChange={(e) => setWilayah(e.target.value)}
                                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                                            >
                                                <option value="">Pilih Wilayah Piket</option>
                                                <option value="a">Wilayah A</option>
                                                <option value="b">Wilayah B</option>
                                                <option value="c">Wilayah C</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Jadwal */}
                                    <div className="flex items-start gap-4">
                                        <FaRegClock className="text-2xl text-gray-400 mt-1" />
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Jadwal</div>
                                            <div className="text-sm font-bold text-gray-800">06.00 - 06:15</div>
                                        </div>
                                    </div>

                                    {/* Hari & Tanggal */}
                                    <div className="flex items-start gap-4">
                                        <BiCalendar className="text-2xl text-gray-400 mt-1" />
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Hari - Tanggal</div>
                                            <div className="text-sm font-bold text-gray-800">Senin, 22 Juni 2026</div>
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div className="flex items-start gap-4">
                                        <FiEdit3 className="text-2xl text-gray-400 mt-1" />
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Status</div>
                                            <div className="bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
                                                Belum Absen
                                            </div>
                                        </div>
                                    </div>

                                    {/* Upload Foto */}
                                    <div
                                        onClick={() => setShowCamera(true)}
                                        className="bg-gray-100 rounded-xl h-40 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 transition-colors"
                                    >
                                        <IoCamera className="text-3xl text-gray-400" />
                                        <div className="text-sm text-gray-400">Klik untuk memuat bukti</div>
                                    </div>

                                    {/* Tombol Absen */}
                                    <div className="w-full bg-blue-600 text-white rounded-xl py-3 text-sm font-semibold text-center cursor-pointer hover:bg-blue-700 transition-colors">
                                        Absen Sekarang
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kanan */}
                        <div className="w-72 flex flex-col gap-5">
                            {/* Ringkasan Kehadiran */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-100">
                                <h2 className="text-base font-bold text-gray-800 mb-4">Ringkasan Kehadiran</h2>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                            <FaRegCalendarCheck className="text-green-500 text-xl" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-800">Hadir</div>
                                            <div className="text-sm text-gray-400">20 Hari</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                            <FaRegCalendarTimes className="text-red-500 text-xl" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-800">Alpha</div>
                                            <div className="text-sm text-gray-400">1 Hari</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Area */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-100">
                                <h2 className="text-base font-bold text-gray-800 mb-4">Status Area</h2>
                                <div className="bg-gray-100 rounded-xl p-4 h-48 flex flex-col justify-between">
                                    <div className="text-sm text-gray-400">Denah Poltek</div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-xs text-gray-400">Status :</div>
                                        <div className="text-xs text-gray-400">• Merah → Belum Selesai</div>
                                        <div className="text-xs text-gray-400">• Kuning → Hampir Selesai</div>
                                        <div className="text-xs text-gray-400">• Hijau → Selesai</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMahasiswa
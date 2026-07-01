import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import LoginRole from './pages/LoginRole'
import Home from './pages/index'
import MahasiswaDashboard from './pages/mahasiswa/Dashboard'
import PicDashboard from './pages/pic/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login/:role" element={<LoginRole />} />
                    <Route path="/dashboard" element={<MahasiswaDashboard />} />
                    <Route path="/pic/dashboard" element={<PicDashboard />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
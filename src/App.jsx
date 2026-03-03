
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Component/Pages/Dashboard'
import Appointment from './Component/Pages/Appointment'
import BookingProvider from './Context/BookingContext'
import { Toaster } from 'sonner'
import ScrollToHash from './Context/ScrollContext'
import AdminSignupPage from './Component/Pages/AdminSignupPage'
import AdminLoginPage from './Component/Pages/AdminLoginPage'
import AuthProvider from './Context/AuthContext'
import AdminPage from './Component/Pages/AdminPage'
import ProtectedRoutes from './Router/ProtectedRoutes'

function App() {

  return (
    <>
    <Toaster closeButton position='top-right' richColors />
    <BrowserRouter>
    <AuthProvider>
    <BookingProvider>
      <ScrollToHash/>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/appointment' element={<Appointment/>}/>
    <Route element={<ProtectedRoutes/>}>
    <Route path='/admin-dashboard' element={<AdminPage/>}/>
    </Route>
    <Route path='/admin-login' element={<AdminLoginPage/>}/>
    <Route path='/admin-signup' element={<AdminSignupPage/>}/>
    </Routes>
    </BookingProvider>
    </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App

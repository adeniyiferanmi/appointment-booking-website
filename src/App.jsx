
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Component/Pages/Dashboard'
import Appointment from './Component/Pages/Appointment'
import BookingProvider from './Context/BookingContext'
import { Toaster } from 'sonner'
// import SuccessPage from './Component/Pages/successPage'
import ScrollToHash from './Context/ScrollContext'
import SuccessPage from './Component/Pages/SuccessPage'

function App() {

  return (
    <>
    <Toaster closeButton position='top-right' richColors />
    <BrowserRouter>
    <BookingProvider>
      <ScrollToHash/>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/appointment' element={<Appointment/>}/>
    <Route path='/successpage' element={<SuccessPage/>}/>
    </Routes>
    </BookingProvider>
    </BrowserRouter>
    </>
  )
}

export default App

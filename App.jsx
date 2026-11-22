import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ReservationPage from './pages/ReservationPage'
import MenuPage from './pages/MenuPage'
import ConfirmationPage from './pages/ConfirmationPage'
import KDSPage from './pages/KDSPage'
import AnalyticsPage from './pages/AnalyticsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reserve" element={<ReservationPage />} />
            <Route path="/menu/:reservationId" element={<MenuPage />} />
            <Route path="/confirmation/:reservationId" element={<ConfirmationPage />} />
            <Route path="/kds" element={<KDSPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

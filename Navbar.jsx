import { Link, useLocation } from 'react-router-dom'
import { UtensilsCrossed, ChefHat, BarChart3, CalendarCheck } from 'lucide-react'

export default function Navbar() {
  const { pathname } = useLocation()
  const link = (to, label, Icon) => (
    <Link
      to={to}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
        ${pathname === to ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'}`}
    >
      <Icon size={16} />
      {label}
    </Link>
  )

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-orange-600 text-lg">
          <UtensilsCrossed size={22} />
          <span>SpiceTrack <span className="text-gray-800">TableTurn</span></span>
        </Link>
        <div className="flex items-center gap-1">
          {link('/reserve', 'Reserve', CalendarCheck)}
          {link('/kds', 'Kitchen', ChefHat)}
          {link('/analytics', 'Analytics', BarChart3)}
        </div>
      </div>
    </nav>
  )
}

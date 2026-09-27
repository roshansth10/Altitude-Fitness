import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/gym', label: 'Gym' },
  { to: '/membership', label: 'Membership' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/50'
            : 'bg-black/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="relative">
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
                  <polygon
                    points="16,2 30,26 2,26"
                    fill="none"
                    stroke="#c6ff00"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-sm tracking-[0.15em] uppercase">
                  ALTITUDE
                </span>
                <span className="text-[#c6ff00] font-bold text-[9px] tracking-[0.2em] uppercase">
                  FITNESS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-[#c6ff00]'
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/membership"
                className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] transition-all duration-200"
              >
                JOIN NOW
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/98 backdrop-blur-md border-t border-gray-800 px-4 py-6 space-y-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block text-base font-medium tracking-wide py-2 border-b border-gray-800 transition-colors ${
                    isActive ? 'text-[#c6ff00]' : 'text-gray-300'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/membership"
              className="block w-full text-center px-5 py-3 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide mt-4"
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

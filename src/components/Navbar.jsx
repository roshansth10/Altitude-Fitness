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

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      const onKeyDown = (e) => {
        if (e.key === 'Escape') setMobileOpen(false)
      }
      window.addEventListener('keydown', onKeyDown)
      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', onKeyDown)
      }
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/50'
            : 'bg-black/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#c6ff00] rounded-lg p-1"
            >
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
                    `text-sm font-medium tracking-wide py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#c6ff00] rounded-md px-1 ${
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
                className="hidden sm:inline-flex items-center min-h-[44px] px-5 py-2 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c6ff00]"
              >
                JOIN NOW
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop & Drawer */}
        {mobileOpen && (
          <div
            className="fixed inset-0 top-16 bg-black/60 backdrop-blur-xs lg:hidden z-40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
        <div
          id="mobile-navigation"
          role="region"
          aria-label="Mobile Navigation Menu"
          className={`lg:hidden transition-all duration-300 overflow-hidden relative z-50 ${
            mobileOpen ? 'max-h-[calc(100svh-4rem)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-black/98 backdrop-blur-md border-t border-gray-800 px-5 py-6 space-y-2">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-semibold tracking-wide py-3 border-b border-gray-800/80 transition-colors min-h-[44px] flex items-center ${
                    isActive ? 'text-[#c6ff00]' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-4">
              <Link
                to="/membership"
                onClick={() => setMobileOpen(false)}
                className="block w-full min-h-[48px] text-center px-5 py-3 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-[#c6ff00]"
              >
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

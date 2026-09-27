import { Link } from 'react-router-dom'
import { Globe, Share2, Play, Mail } from 'lucide-react'

const footerLinks = {
  Pages: [
    { to: '/', label: 'Home' },
    { to: '/programs', label: 'Programs' },
    { to: '/trainers', label: 'Trainers' },
    { to: '/gym', label: 'Gym' },
    { to: '/membership', label: 'Membership' },
    { to: '/contact', label: 'Contact' },
  ],
  Programs: [
    { to: '/programs', label: 'Strength Training' },
    { to: '/programs', label: 'Hypertrophy' },
    { to: '/programs', label: 'Fat Loss' },
    { to: '/programs', label: 'Conditioning' },
    { to: '/programs', label: 'Personal Training' },
  ],
  Contact: [
    { label: 'Lazimpat, Kathmandu, Nepal' },
    { label: '+977 984-123-4567' },
    { label: 'info@altitudefitness.com' },
    { label: 'Mon–Sun: 5:00 AM – 10:00 PM' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
                <polygon
                  points="16,2 30,26 2,26"
                  fill="none"
                  stroke="#c6ff00"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-sm tracking-[0.15em] uppercase">
                  ALTITUDE
                </span>
                <span className="text-[#c6ff00] font-bold text-[9px] tracking-[0.2em] uppercase">
                  FITNESS
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kathmandu's premier fitness club. Training harder, living better, 
              and pushing every limit — together.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, Share2, Play, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#c6ff00] hover:border-[#c6ff00] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Pages
            </h4>
            <ul className="space-y-3">
              {footerLinks.Pages.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-gray-400 text-sm hover:text-[#c6ff00] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.Programs.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-gray-400 text-sm hover:text-[#c6ff00] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.Contact.map(({ label }) => (
                <li key={label} className="text-gray-400 text-sm">
                  {label}
                </li>
              ))}
            </ul>
            <Link
              to="/membership"
              className="inline-flex items-center mt-6 px-5 py-2.5 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] transition-all duration-200"
            >
              JOIN NOW
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Altitude Fitness. All rights reserved.
          </p>

          {/* DX Studio credit */}
          <a
            href="https://dxcreativestudio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group hover:opacity-80 transition-opacity duration-200"
            aria-label="Designed and developed by DX Creative Studio"
          >
            <span className="text-white text-xs font-medium tracking-wide whitespace-nowrap">
              Designed &amp; Developed by
            </span>
            <img
              src="/img/dx-studio-white.png"
              alt="DX Creative Studio"
              className="h-8 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

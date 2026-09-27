import { useEffect, useState } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Contact | Altitude Fitness – Kathmandu'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?w=1600&q=90"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/75 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-white font-black uppercase text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none mb-4">
            VISIT OUR
            <br />
            KATHMANDU LOCATION
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Have questions or ready to start? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ====== CONTACT GRID ====== */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info + Form */}
            <div className="space-y-10">
              {/* Contact details */}
              <div className="space-y-6">
                <h2 className="text-white font-black uppercase text-2xl tracking-wide">
                  Contact Info
                </h2>
                {[
                  {
                    icon: MapPin,
                    title: 'Location',
                    lines: ['Lazimpat, Kathmandu, Nepal', 'Near Lazimpat Chowk'],
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    lines: ['+977 984-123-4567', '+977 01-4444555'],
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    lines: ['info@altitudefitness.com', 'train@altitudefitness.com'],
                  },
                  {
                    icon: Clock,
                    title: 'Hours',
                    lines: ['Mon – Sun: 5:00 AM – 10:00 PM', 'Open every day including holidays'],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#c6ff00]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                        {title}
                      </p>
                      {lines.map((l) => (
                        <p key={l} className="text-white text-sm">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Directions button */}
              <a
                href="https://maps.google.com/?q=Lazimpat+Kathmandu+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_25px_rgba(198,255,0,0.4)] transition-all duration-300"
              >
                GET DIRECTIONS <ArrowRight size={16} />
              </a>
            </div>

            {/* Right: Map */}
            <div className="space-y-8">
              {/* Map iframe */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 h-80 lg:h-96">
                <iframe
                  title="Altitude Fitness Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8012!2d85.3193!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74f8a5c1%3A0x7de8cbf4d10c8bbf!2sLazimpat%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Custom pin overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                  <div className="bg-[#c6ff00] text-black text-xs font-black px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                    Altitude Fitness
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-[#c6ff00]" />
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 lg:p-8">
                <h3 className="text-white font-black uppercase text-xl tracking-wide mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c6ff00] transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c6ff00] transition-colors"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c6ff00] transition-colors"
                  />
                  <textarea
                    placeholder="Your message..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c6ff00] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_25px_rgba(198,255,0,0.4)] transition-all duration-300"
                  >
                    {sent ? 'MESSAGE SENT! ✓' : (<><Send size={16} /> SEND MESSAGE</>)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== NIGHT EXTERIOR ====== */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=90"
          alt="Gym exterior night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl text-center">
            TRAIN TOGETHER.{' '}
            <span className="text-[#c6ff00]">GROW TOGETHER.</span>
          </h2>
        </div>
      </section>
    </div>
  )
}

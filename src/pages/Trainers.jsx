import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Share2, Mail } from 'lucide-react'

const trainers = [
  {
    name: 'Arjun Thapa',
    specialty: 'Strength & Conditioning',
    experience: '8 Years Experience',
    img: '/img/trainer_arjun.jpg',
    social: ['instagram', 'facebook', 'twitter'],
  },
  {
    name: 'Sabina Shrestha',
    specialty: 'Weight Loss Specialist',
    experience: '6 Years Experience',
    img: '/img/trainer_sabina.jpg',
    social: ['instagram', 'facebook', 'twitter'],
  },
  {
    name: 'Rohit Shakya',
    specialty: 'Bodybuilding Coach',
    experience: '10 Years Experience',
    img: '/img/trainer_rohit.jpg',
    social: ['instagram', 'facebook', 'twitter'],
  },
  {
    name: 'Anita Karki',
    specialty: 'Functional Training',
    experience: '5 Years Experience',
    img: '/img/trainer_anita.jpg',
    social: ['instagram', 'facebook', 'twitter'],
  },
]

const SocialIcon = ({ type }) => {
  const Icon = type === 'instagram' ? Globe : type === 'facebook' ? Share2 : Mail
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-[#c6ff00] hover:border-[#c6ff00] transition-all duration-200"
    >
      <Icon size={14} />
    </a>
  )
}

export default function Trainers() {
  useEffect(() => {
    document.title = 'Expert Trainers | Altitude Fitness'
  }, [])

  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/trainer_arjun.jpg"
            alt="Trainer hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Meet the Coaches
            </p>
            <h1 className="text-white font-black uppercase text-4xl sm:text-6xl lg:text-7xl leading-none mb-6">
              EXPERT
              <br />
              TRAINERS
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Our certified trainers are here to guide, motivate and help you achieve your goals.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('trainers-grid')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#c6ff00] text-[#c6ff00] font-bold text-sm tracking-wide hover:bg-[#c6ff00] hover:text-black transition-all duration-300"
            >
              VIEW ALL TRAINERS <ArrowRight size={16} />
            </button>
          </div>
          {/* Coach label */}
          <div className="hidden lg:flex justify-end items-end pb-8">
            <div className="text-right">
              <p className="text-[#c6ff00] font-black text-xs tracking-[0.3em] uppercase">COACH</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRAINER GRID ====== */}
      <section id="trainers-grid" className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-10 lg:mb-14">
            <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              Our Team
            </p>
            <h2 className="text-white font-black uppercase text-3xl sm:text-4xl lg:text-5xl">
              MEET YOUR COACHES
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {trainers.map(({ name, specialty, experience, img, social }) => (
              <div
                key={name}
                className="group relative bg-[#111111] border border-gray-800/50 rounded-2xl overflow-hidden hover:border-[#c6ff00]/30 transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-white font-black text-lg">{name}</h3>
                    <p className="text-[#c6ff00] text-sm font-medium">{specialty}</p>
                  </div>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    {experience}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    {social.map((s) => (
                      <SocialIcon key={s} type={s} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== JOIN US CTA ====== */}
      <section className="py-16 lg:py-20 bg-[#111111] border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-white font-black uppercase text-3xl sm:text-4xl lg:text-5xl">
            Train With The Best.
            <br />
            <span className="text-[#c6ff00]">Become The Best.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Book a free consultation with one of our expert coaches and take the first step toward your transformation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_30px_rgba(198,255,0,0.4)] transition-all duration-300"
          >
            BOOK A CONSULTATION <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

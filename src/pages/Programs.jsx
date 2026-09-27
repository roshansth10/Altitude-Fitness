import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const programs = [
  {
    id: '01',
    title: 'Strength',
    label: 'STRENGTH',
    description:
      'Build raw strength and power with progressive training. Our strength program uses compound movements, progressive overload, and expert coaching to maximize your performance and muscle development.',
    bullets: ['Compound movements', 'Progressive overload', 'Expert coaching'],
    img: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=900&q=90',
  },
  {
    id: '02',
    title: 'Hypertrophy',
    label: 'HYPERTROPHY',
    description:
      'Maximize muscle growth with targeted hypertrophy training. Scientific programming designed to stimulate maximum muscle fiber recruitment and growth.',
    bullets: ['Volume-based training', 'Muscle isolation techniques', 'Nutrition synergy'],
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=90',
  },
  {
    id: '03',
    title: 'Fat Loss',
    label: 'FAT LOSS',
    description:
      'Shed body fat while preserving lean muscle. Our fat loss program combines metabolic conditioning, resistance training, and nutrition strategy.',
    bullets: ['Metabolic conditioning', 'HIIT protocols', 'Nutrition planning'],
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=90',
  },
  {
    id: '04',
    title: 'Conditioning',
    label: 'CONDITIONING',
    description:
      'Build cardiovascular endurance and athletic performance. This program elevates your work capacity and functional fitness.',
    bullets: ['Cardio programming', 'Athletic drills', 'Functional movements'],
    img: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=900&q=90',
  },
  {
    id: '05',
    title: 'Athlete',
    label: 'ATHLETE',
    description:
      'Elite sport-specific training for competitive athletes. Developed to enhance power, speed, agility and sport performance.',
    bullets: ['Sport-specific drills', 'Explosive training', 'Competition prep'],
    img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=90',
  },
  {
    id: '06',
    title: 'Personal Training',
    label: 'PERSONAL TRAINING',
    description:
      'One-on-one sessions with certified coaches tailored to your exact goals, fitness level, and schedule.',
    bullets: ['Customized programs', '1-on-1 coaching', 'Goal-specific focus'],
    img: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=900&q=90',
  },
]

export default function Programs() {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    document.title = 'Training Programs | Altitude Fitness'
  }, [])

  const prog = programs[selected]

  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=1600&q=90"
            alt="Programs hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Our Programs
          </p>
          <h1 className="text-white font-black uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none">
            TRAINING
            <br />
            PROGRAMS
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl">
            Customized training programs for every goal. Choose your path, and let's build a stronger you.
          </p>
        </div>
      </section>

      {/* ====== PROGRAM SELECTOR ====== */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-0 min-h-[600px]">
            {/* Left: program list */}
            <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gray-800/50 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-0 scrollbar-hide">
                {programs.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(i)}
                    className={`flex-shrink-0 lg:flex-shrink lg:w-full flex items-center justify-between py-4 lg:py-5 px-4 lg:px-0 border-b border-gray-800/40 text-left group transition-all duration-200 ${
                      i === selected
                        ? 'border-[#c6ff00]/40'
                        : 'hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 lg:gap-5">
                      <span
                        className={`text-xs font-bold tracking-widest ${
                          i === selected ? 'text-[#c6ff00]' : 'text-gray-600'
                        }`}
                      >
                        {p.id}
                      </span>
                      <span
                        className={`font-bold text-sm lg:text-base tracking-wide uppercase whitespace-nowrap ${
                          i === selected ? 'text-white' : 'text-gray-400 group-hover:text-white'
                        }`}
                      >
                        {p.title}
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`flex-shrink-0 hidden lg:block transition-all ${
                        i === selected
                          ? 'text-[#c6ff00] translate-x-1'
                          : 'text-gray-700 group-hover:text-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: program detail */}
            <div className="lg:col-span-3 lg:pl-12 pt-8 lg:pt-0 space-y-8">
              <div>
                <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                  {prog.id}
                </p>
                <h2 className="text-white font-black uppercase text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                  {prog.title}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  {prog.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {prog.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#c6ff00] flex-shrink-0" />
                      <span className="text-gray-300">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_30px_rgba(198,255,0,0.4)] transition-all duration-300"
                >
                  GET STARTED <ArrowRight size={16} />
                </Link>
              </div>

              {/* Program photo */}
              <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80">
                <img
                  key={prog.img}
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== BOTTOM CTA ====== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90"
            alt="Mountain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black uppercase text-4xl sm:text-5xl mb-6">
            YOUR GOALS. OUR SUPPORT.
            <br />
            <span className="text-[#c6ff00]">TRAIN SMART. SEE REAL RESULTS.</span>
          </h2>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_30px_rgba(198,255,0,0.5)] transition-all duration-300"
          >
            CHOOSE YOUR PLAN <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

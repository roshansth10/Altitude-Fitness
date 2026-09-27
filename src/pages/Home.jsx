import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '2.5K+', label: 'Happy Members' },
  { value: '20+', label: 'Certified Trainers' },
  { value: '50+', label: 'Premium Equipment' },
]

const features = [
  {
    title: 'STRENGTH',
    description: 'Build raw strength and power with science-backed programming and expert guidance.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    title: 'CONDITIONING',
    description: 'Maximize endurance, stamina, and athletic performance with intensive conditioning.',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  },
  {
    title: 'COMMUNITY',
    description: 'Train alongside like-minded individuals who push each other to grow together.',
    img: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80',
  },
]

const transformations = [
  {
    name: 'Eliza Shrestha',
    since: 'Member since 2023',
    quote:
      '"Altitude Fitness has completely changed my lifestyle. The trainers are incredible and the community keeps me motivated every day."',
    weeks: '12 Weeks',
    fat: '-6.3',
    muscle: '+5% Muscle',
    before: 'https://images.unsplash.com/photo-1580086319619-3ed498161c77?w=300&q=80',
    after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80',
  },
  {
    name: 'Raj Kumar',
    since: 'Member since 2022',
    quote:
      '"The structured programming here is unmatched. I gained 15 lbs of muscle in 6 months with expert coaching."',
    weeks: '24 Weeks',
    fat: '-4.1',
    muscle: '+12% Muscle',
    before: 'https://images.unsplash.com/photo-1609899465382-c3d1bbe4b957?w=300&q=80',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&q=80',
  },
]

const trainingPillars = [
  {
    id: '01',
    title: 'STRENGTH',
    tagline: 'Power & Progressive Overload',
    description:
      'Science-backed compound lifting protocols engineered to maximize raw strength, stimulate lean muscle hypertrophy, and improve bone density.',
    points: [
      'Barbell compound movements & periodization',
      'Olympic lifting stations & calibrated bumper plates',
      'Form calibration with certified strength coaches',
    ],
    linkText: 'EXPLORE STRENGTH',
    linkTo: '/programs',
  },
  {
    id: '02',
    title: 'CONDITIONING',
    tagline: 'Endurance & High-Yield Stamina',
    description:
      'High-output cardiovascular and metabolic circuits crafted to elevate your aerobic threshold, accelerate fat burn, and increase athletic work capacity.',
    points: [
      'HIIT, EMOM & metabolic conditioning circuits',
      'SkiErgs, air bikes & curved non-motorized speedmills',
      'Heart-rate zone conditioning for VO2 max optimization',
    ],
    linkText: 'EXPLORE CONDITIONING',
    linkTo: '/programs',
  },
  {
    id: '03',
    title: 'NUTRITION',
    tagline: 'Metabolic Fueling & Optimization',
    description:
      'Precision dietary strategies tailored around your biometric markers, training frequency, and body composition targets for lasting energy.',
    points: [
      'Personalized macronutrient & caloric profiling',
      'Nutrient timing for muscle protein synthesis & recovery',
      '1-on-1 nutritional consultation & lifestyle meal planning',
    ],
    linkText: 'NUTRITION GUIDANCE',
    linkTo: '/contact',
  },
  {
    id: '04',
    title: 'RECOVERY',
    tagline: 'Restoration & Longevity Protocols',
    description:
      'Advanced recovery modalities designed to reduce muscular fatigue, optimize central nervous system reset, and prevent repetitive strain injuries.',
    points: [
      'Targeted myofascial release & dedicated mobility zones',
      'Post-workout contrast & active cool-down protocols',
      'Guided mobility workshops & nervous system reset',
    ],
    linkText: 'EXPLORE RECOVERY',
    linkTo: '/gym',
  },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activePillar, setActivePillar] = useState(0)

  useEffect(() => {
    document.title = 'Altitude Fitness | Premium Gym in Kathmandu'
  }, [])

  const prev = () =>
    setCurrentTestimonial((c) => (c - 1 + transformations.length) % transformations.length)
  const next = () =>
    setCurrentTestimonial((c) => (c + 1) % transformations.length)

  const t = transformations[currentTestimonial]

  return (
    <div className="overflow-hidden">
      {/* ====== HERO ====== */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=90"
            alt="Gym"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        </div>

        {/* Watermark text */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <p className="text-white/10 font-black text-[80px] leading-none tracking-widest rotate-90 select-none uppercase">
            DISCIPLINE BUILDS FREEDOM
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl">
            <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Premium Fitness Club in Kathmandu
            </p>
            <h1 className="font-black uppercase leading-none">
              <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl block">
                PUSH YOUR
              </span>
              <span
                className="text-[#c6ff00] text-5xl sm:text-6xl md:text-7xl lg:text-8xl block"
                style={{ textShadow: '0 0 40px rgba(198,255,0,0.3)' }}
              >
                LIMITS
              </span>
            </h1>
            <p className="text-gray-300 text-lg mt-6 mb-8 font-medium">
              Stronger Body. Sharper Mind. Better You.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_30px_rgba(198,255,0,0.5)] transition-all duration-300"
              >
                START TRAINING <ArrowRight size={16} />
              </Link>
              <Link
                to="/gym"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-bold text-sm tracking-wide hover:border-white hover:bg-white/5 transition-all duration-300"
              >
                EXPLORE THE GYM
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full border-2 border-[#c6ff00] flex items-center justify-center text-[#c6ff00] hover:bg-[#c6ff00]/10 transition-all duration-200">
                <Play size={18} fill="currentColor" />
              </button>
              <span className="text-white font-semibold text-sm">Watch Video</span>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-8 sm:bottom-12 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
            <div className="max-w-7xl mx-auto flex flex-row items-end justify-end gap-4">
              <div className="text-right">
                <p className="text-[#c6ff00] text-xs font-bold tracking-[0.2em] uppercase">
                  OPEN DAILY
                </p>
                <p className="text-white text-xs sm:text-sm font-medium">5:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS BAR ====== */}
      <section className="bg-[#111111] border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label} className="space-y-1">
                <p className="text-[#c6ff00] font-black text-3xl lg:text-4xl">{value}</p>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MISSION STATEMENT ====== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-black uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="text-white block">WE DON'T TRAIN</span>
                <span className="text-white block">FOR THE MIRROR.</span>
                <span className="text-[#c6ff00] block">WE TRAIN FOR</span>
                <span className="text-[#c6ff00] block">WHAT'S NEXT.</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Altitude Fitness, we believe fitness is more than just a goal — it's a lifestyle. 
                Our modern facility, expert trainers and supportive community help you become the 
                best version of yourself.
              </p>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-sm tracking-wider uppercase">
                  Premium Fitness Club · Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURE CARDS ====== */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ title, description, img }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl bg-[#111111] border border-gray-800/50 hover:border-[#c6ff00]/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-black text-xl tracking-wide mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-1 text-[#c6ff00] text-sm font-bold tracking-wide hover:gap-2 transition-all duration-200"
                  >
                    LEARN MORE <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MOUNTAIN CTA SECTION ====== */}
      <section className="relative min-h-[75vh] flex items-center py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90"
            alt="Mountain landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-start lg:items-center gap-12">
            <div>
              <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Core Training Pillars
              </p>
              <h2 className="font-black uppercase text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                YOUR GOALS.
                <br />
                OUR SUPPORT.
                <br />
                <span className="text-[#c6ff00]">TRAIN SMART.</span>
                <br />
                SEE REAL RESULTS.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mt-6 max-w-md leading-relaxed">
                Click any pillar to explore our methodology, specialized equipment, and tailored coaching systems.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-white/10">
              {trainingPillars.map((pillar, i) => {
                const isActive = activePillar === i
                return (
                  <div
                    key={pillar.id}
                    className="transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setActivePillar(isActive ? null : i)}
                      className="w-full flex items-center justify-between py-4 sm:py-5 text-left group cursor-pointer transition-all"
                      aria-expanded={isActive}
                    >
                      <span
                        className={`text-sm sm:text-base font-bold mr-4 transition-colors duration-200 ${
                          isActive ? 'text-[#c6ff00]' : 'text-white/40 group-hover:text-white/80'
                        }`}
                      >
                        {pillar.id}
                      </span>
                      <span
                        className={`font-black text-lg sm:text-2xl tracking-wide flex-1 transition-colors duration-200 ${
                          isActive ? 'text-[#c6ff00]' : 'text-white group-hover:text-[#c6ff00]'
                        }`}
                      >
                        {pillar.title}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'border-[#c6ff00] bg-[#c6ff00] text-black rotate-90 shadow-[0_0_15px_rgba(198,255,0,0.5)]'
                            : 'border-white/20 text-white/60 group-hover:border-[#c6ff00] group-hover:text-[#c6ff00]'
                        }`}
                      >
                        <ArrowRight size={16} />
                      </div>
                    </button>

                    {/* Expandable content */}
                    {isActive && (
                      <div className="pb-6 pt-1">
                        <div className="bg-[#111111]/90 backdrop-blur-md border border-[#c6ff00]/30 rounded-2xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
                            <p className="text-[#c6ff00] text-xs font-bold tracking-[0.2em] uppercase">
                              {pillar.tagline}
                            </p>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed mb-5">
                            {pillar.description}
                          </p>

                          {/* Bullet highlights */}
                          <ul className="space-y-2.5 mb-6">
                            {pillar.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="text-[#c6ff00] flex-shrink-0 mt-0.5"
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA link */}
                          <Link
                            to={pillar.linkTo}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#c6ff00] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#d4ff00] hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] transition-all duration-200"
                          >
                            {pillar.linkText} <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRANSFORMATIONS / TESTIMONIALS ====== */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Transformations
              </p>
              <h2 className="text-white font-black uppercase text-4xl sm:text-5xl leading-tight">
                REAL PEOPLE.
                <br />
                REAL PROGRESS.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#c6ff00] hover:text-[#c6ff00] transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#c6ff00] hover:text-[#c6ff00] transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Before / After */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={t.before}
                    alt="Before"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-wide">
                    Before
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={t.after}
                    alt="After"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#c6ff00]/90 px-3 py-1 rounded text-black text-xs font-bold uppercase tracking-wide">
                    After
                  </div>
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Duration', value: t.weeks },
                  { label: 'Fat Lost', value: `${t.fat}%` },
                  { label: 'Muscle', value: t.muscle },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-[#111111] border border-gray-800 rounded-xl p-4 text-center"
                  >
                    <p className="text-[#c6ff00] font-black text-xl">{value}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#c6ff00] fill-[#c6ff00]" />
                ))}
              </div>
              <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                What Our Members Say
              </h3>
              <blockquote className="text-white text-xl lg:text-2xl leading-relaxed font-medium">
                {t.quote}
              </blockquote>
              <div>
                <p className="text-white font-bold">— {t.name}</p>
                <p className="text-gray-500 text-sm">{t.since}</p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                {transformations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === currentTestimonial
                        ? 'bg-[#c6ff00] w-8'
                        : 'bg-gray-700 w-4'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA BAND ====== */}
      <section className="bg-[#c6ff00] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <h2 className="text-black font-black uppercase text-3xl sm:text-4xl text-center sm:text-left">
            Ready to Transform
            <br />
            Your Life?
          </h2>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-bold text-sm tracking-wide hover:bg-gray-900 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex-shrink-0"
          >
            JOIN NOW <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'

const gymCategories = [
  {
    title: 'Free Weights',
    tagline: 'Strength training area',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    title: 'Cardio',
    tagline: 'Stay fit & active',
    img: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&q=80',
  },
  {
    title: 'Functional',
    tagline: 'Move better, perform better',
    img: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80',
  },
  {
    title: 'Lockers',
    tagline: 'Your stuff, always safe',
    img: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=600&q=80',
  },
  {
    title: 'Recovery',
    tagline: 'Rest. Recover. Grow.',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
  },
]

export default function Gym() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    document.title = 'Our Gym | Altitude Fitness'
  }, [])

  const onMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }
  const onMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }
  const onMouseUp = () => setIsDragging(false)

  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=90"
            alt="Gym interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Our Gym
          </p>
          <h1 className="text-white font-black uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none mb-4">
            A SPACE BUILT FOR
            <br />
            <span className="text-[#c6ff00]">SERIOUS TRAINING</span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-xl text-lg">
            Modern equipment, clean environment and a motivating atmosphere — everything you need to reach your goals.
          </p>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#c6ff00] text-[#c6ff00] font-bold text-sm tracking-wide hover:bg-[#c6ff00] hover:text-black transition-all duration-300"
          >
            EXPLORE EQUIPMENT <ArrowRight size={16} />
          </Link>
        </div>

        {/* Drag hint */}
        <div className="absolute right-8 bottom-16 z-10 hidden lg:flex items-center gap-2 text-gray-500 text-xs tracking-widest uppercase">
          <span>DRAG TO EXPLORE</span>
          <ChevronRight size={14} />
        </div>
      </section>

      {/* ====== GYM INTERIOR FULL ====== */}
      <section className="relative overflow-hidden">
        <div className="h-[50vh] lg:h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?w=1800&q=90"
            alt="Gym interior wide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
      </section>

      {/* ====== HORIZONTAL CATEGORY CARDS ====== */}
      <section className="py-16 lg:py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-white font-black uppercase text-3xl sm:text-4xl">
            Our Facilities
          </h2>
          <p className="text-gray-400 mt-2 text-sm tracking-widest uppercase">
            Drag to explore →
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 cursor-grab active:cursor-grabbing select-none scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {gymCategories.map(({ title, tagline, img }) => (
            <div
              key={title}
              className="flex-shrink-0 relative w-64 sm:w-72 h-80 rounded-2xl overflow-hidden group border border-gray-800/50 hover:border-[#c6ff00]/30 transition-all duration-300"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-black text-lg">{title}</h3>
                <p className="text-gray-400 text-sm">{tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== FEATURES GRID ====== */}
      <section className="py-16 bg-[#111111] border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Premium Equipment' },
              { value: '10K+', label: 'Sq ft Space' },
              { value: '24/7', label: 'Security' },
              { value: '100%', label: 'AC Facility' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-[#c6ff00] font-black text-4xl">{value}</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NIGHT EXTERIOR / TAGLINE ====== */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?w=1600&q=90"
            alt="Gym exterior night"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-white font-black uppercase text-4xl sm:text-5xl lg:text-6xl leading-tight">
            TRAIN TOGETHER.
            <br />
            <span className="text-[#c6ff00]">GROW TOGETHER.</span>
          </h2>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_30px_rgba(198,255,0,0.5)] transition-all duration-300"
          >
            JOIN NOW <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

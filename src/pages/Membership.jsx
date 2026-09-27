import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const plans = {
  monthly: [
    {
      name: 'Essential',
      price: 'NPR 2,500',
      period: '/month',
      popular: false,
      features: [
        'Gym access',
        'Locker facility',
        'Fitness assessment',
        'Basic support',
      ],
    },
    {
      name: 'Performance',
      price: 'NPR 4,000',
      period: '/month',
      popular: true,
      features: [
        'Unlimited gym access',
        'Training program',
        'Progress tracking',
        'Nutrition guidance',
        'Group classes',
        'Priority support',
      ],
    },
    {
      name: 'Elite',
      price: 'NPR 8,000',
      period: '/month',
      popular: false,
      features: [
        'Personal coaching (4x/week)',
        'Customized program',
        'Nutrition planning',
        'Priority booking',
        'Recovery sessions',
        'Body composition analysis',
      ],
    },
  ],
  yearly: [
    {
      name: 'Essential',
      price: 'NPR 22,500',
      period: '/year',
      popular: false,
      features: [
        'Gym access',
        'Locker facility',
        'Fitness assessment',
        'Basic support',
      ],
    },
    {
      name: 'Performance',
      price: 'NPR 36,000',
      period: '/year',
      popular: true,
      features: [
        'Unlimited gym access',
        'Training program',
        'Progress tracking',
        'Nutrition guidance',
        'Group classes',
        'Priority support',
      ],
    },
    {
      name: 'Elite',
      price: 'NPR 72,000',
      period: '/year',
      popular: false,
      features: [
        'Personal coaching (4x/week)',
        'Customized program',
        'Nutrition planning',
        'Priority booking',
        'Recovery sessions',
        'Body composition analysis',
      ],
    },
  ],
}

export default function Membership() {
  const [billing, setBilling] = useState('monthly')

  useEffect(() => {
    document.title = 'Membership Plans | Altitude Fitness'
  }, [])

  const currentPlans = plans[billing]

  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=90"
            alt="Membership"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <p className="text-[#c6ff00] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Choose Your Plan
          </p>
          <h1 className="text-white font-black uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none mb-4">
            MEMBERSHIP
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Flexible plans for every fitness journey. No hidden fees. Just real results.
          </p>
        </div>
      </section>

      {/* ====== PLANS ====== */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="flex justify-center mb-14">
            <div className="flex items-center gap-0 bg-[#111111] border border-gray-800 rounded-full p-1">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200 ${
                  billing === 'monthly'
                    ? 'bg-[#c6ff00] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200 ${
                  billing === 'yearly'
                    ? 'bg-[#c6ff00] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 text-[10px] font-bold text-[#c6ff00] bg-[#c6ff00]/10 px-2 py-0.5 rounded-full">
                  SAVE 25%
                </span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {currentPlans.map(({ name, price, period, popular, features }) => (
              <div
                key={name}
                className={`relative rounded-2xl border transition-all duration-300 ${
                  popular
                    ? 'border-[#c6ff00] bg-[#0f1a00] shadow-[0_0_40px_rgba(198,255,0,0.15)]'
                    : 'border-gray-800/50 bg-[#111111] hover:border-gray-700'
                }`}
              >
                {/* Popular badge */}
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c6ff00] text-black text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-white font-black text-xl uppercase tracking-wide mb-2">
                    {name}
                  </h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-white font-black text-3xl sm:text-4xl">{price}</span>
                    <span className="text-gray-400 text-sm mb-1">{period}</span>
                  </div>

                  <div className="my-6 h-px bg-gray-800" />

                  <ul className="space-y-3 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className={`flex-shrink-0 mt-0.5 ${
                            popular ? 'text-[#c6ff00]' : 'text-gray-500'
                          }`}
                        />
                        <span className="text-gray-300 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                      popular
                        ? 'bg-[#c6ff00] text-black hover:bg-[#d4ff00] hover:shadow-[0_0_25px_rgba(198,255,0,0.4)]'
                        : 'border border-gray-700 text-white hover:border-[#c6ff00] hover:text-[#c6ff00]'
                    }`}
                  >
                    CHOOSE PLAN
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              All plans include a{' '}
              <span className="text-[#c6ff00] font-bold">7-day free trial</span>. No contracts.
              Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ====== FAQ or compare ====== */}
      <section className="py-16 bg-[#111111] border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-white font-black uppercase text-3xl sm:text-4xl">
            Not Sure Which Plan?
          </h2>
          <p className="text-gray-400">
            Come in for a free consultation and we'll help you choose the right program for your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c6ff00] text-black font-bold text-sm tracking-wide hover:bg-[#d4ff00] hover:shadow-[0_0_30px_rgba(198,255,0,0.4)] transition-all duration-300"
          >
            GET FREE CONSULTATION <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

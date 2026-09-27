import { useState, useEffect, useRef } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(1)
  const [isFading, setIsFading] = useState(false)
  const [isMounted, setIsMounted] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    // Check user preference for motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Lock page scroll while preloader is active
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Set video playback rate to 0.6x for a slower, cinematic athletic motion
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted in some browsers; muted handles most
      })
    }

    let isPageReady = typeof document !== 'undefined' && document.readyState === 'complete'
    const handleLoad = () => {
      isPageReady = true
    }

    if (!isPageReady && typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad)
    }

    const startTime = performance.now()
    const MIN_DURATION = prefersReducedMotion ? 800 : 3800 // Slower tempo (~4.0s total)
    const stepInterval = prefersReducedMotion ? 12 : 40 // Slower tick per percent (40ms)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }

        const elapsed = performance.now() - startTime

        // Hold smoothly around 90-95% if minimum time has not elapsed or page is still loading
        if (prev >= 90 && (!isPageReady || elapsed < MIN_DURATION * 0.8)) {
          return prev < 95 ? prev + 1 : prev
        }

        return prev + 1
      })
    }, stepInterval)

    return () => {
      clearInterval(interval)
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleLoad)
      }
      document.body.style.overflow = originalOverflow
    }
  }, [])

  // Handle completion fade out once 100% is reached
  useEffect(() => {
    if (progress < 100) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const holdTime = prefersReducedMotion ? 80 : 360
    const fadeDuration = prefersReducedMotion ? 200 : 700

    const holdTimer = setTimeout(() => {
      setIsFading(true)
      const unmountTimer = setTimeout(() => {
        setIsMounted(false)
        document.body.style.overflow = ''
      }, fadeDuration)

      return () => clearTimeout(unmountTimer)
    }, holdTime)

    return () => clearTimeout(holdTimer)
  }, [progress])

  if (!isMounted) return null

  return (
    <aside
      aria-label="Loading Altitude Fitness"
      aria-live="polite"
      aria-busy={!isFading}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center p-4 sm:p-6 select-none transition-opacity duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#050505',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-xl mx-auto my-auto text-center px-4">
        {/* 1. Altitude Fitness Brand Logo */}
        <div className="flex items-center gap-2.5 mb-2 sm:mb-4 opacity-90 transition-opacity">
          <div className="relative flex-shrink-0">
            <svg width="30" height="26" viewBox="0 0 32 28" fill="none">
              <polygon
                points="16,2 30,26 2,26"
                fill="none"
                stroke="#C6FF00"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-white font-black text-xs sm:text-sm tracking-[0.15em] uppercase">
              ALTITUDE
            </span>
            <span
              className="font-bold text-[8px] sm:text-[9px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--accent-color, #C6FF00)' }}
            >
              FITNESS
            </span>
          </div>
        </div>

        {/* 2. Bench Press Athlete Animation */}
        <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] h-[32vh] sm:h-[38vh] md:h-[42vh] flex items-center justify-center my-2 sm:my-3">
          <video
            ref={videoRef}
            src="/Loader/Loader.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.6
            }}
            className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
            }}
          />
        </div>

        {/* 3. Loading Percentage */}
        <div
          className="font-black text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none mt-2 sm:mt-3 tabular-nums select-none"
          style={{
            color: 'var(--accent-color, #C6FF00)',
            fontFamily: "'Inter', 'Montserrat', system-ui, sans-serif",
          }}
        >
          {progress}%
        </div>

        {/* 4. Horizontal Progress Bar */}
        <div
          className="mt-3 sm:mt-4 w-52 sm:w-64 md:w-80 h-[3.5px] rounded-full overflow-hidden"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="h-full rounded-full transition-all duration-75 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: 'var(--accent-color, #C6FF00)',
              boxShadow: '0 0 12px rgba(198, 255, 0, 0.5)',
            }}
          />
        </div>

        {/* 5. Minimal Subtitle */}
        <p className="mt-3 sm:mt-3.5 text-[10px] sm:text-xs font-semibold tracking-[0.28em] sm:tracking-[0.3em] uppercase text-gray-400 select-none">
          PREPARING YOUR WORKOUT
        </p>
      </div>
    </aside>
  )
}

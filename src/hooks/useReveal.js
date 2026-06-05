import { useEffect, useRef, useState } from 'react'

// Scroll ile görünür olunca tek seferlik açılış animasyonunu tetikler.
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true)
        obs.unobserve(el)
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, shown }
}

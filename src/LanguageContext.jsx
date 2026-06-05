import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './i18n'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'tr'
    return localStorage.getItem('lang') || 'tr'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    const t = translations[lang]
    return {
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'tr' ? 'en' : 'tr')),
      t,
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

import { SANATCI } from '../i18n'

// Önceden doldurulmuş bir WhatsApp sohbet bağlantısı üretir.
export function waLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${SANATCI.whatsapp}?text=${text}`
}

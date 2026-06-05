# Bağlama Sanatçısı — Premium Dijital Vitrin

Konservatuvar mezunu profesyonel bir bağlama sanatçısı için geliştirilmiş, premium segment, tek sayfalık (one-page) Türkçe web uygulaması. Hem **Özel Ders** talepleri hem de **Düğün & Kurumsal Organizasyon** rezervasyonları toplar.

## Öne çıkanlar

- **Tasarım:** Koyu antrasit + gece mavisi zemin, premium gold (#D4AF37) ve bakır vurgular. Glassmorphism, yumuşak hover/scroll animasyonları, asimetrik düzen, bol beyaz alan.
- **Dönüşüm:** Hero’da otorite vurgusu ve iki zıt CTA (`Özel Ders Talebi` / `Organizasyon Rezervasyonu`), sosyal kanıt (referanslar), form → WhatsApp aktarımı.
- **SEO:** Semantik HTML5 (`header/main/section/article/h1-h2`), meta + Open Graph, JSON-LD yapısal verisi.
- **i18n:** TR (varsayılan) / EN dil değişimi, `localStorage` kalıcılığı.
- **Erişilebilirlik:** Odak halkaları, `aria` etiketleri, `prefers-reduced-motion` desteği, 44px+ dokunma hedefleri.

## Teknolojiler

React 18 · Vite · Tailwind CSS · lucide-react

## Kurulum

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # üretim derlemesi (dist/)
npm run preview
```

## Yapılandırma

Sanatçı bilgileri (isim, WhatsApp numarası, e-posta, şehir) tek noktadan: [src/i18n.js](src/i18n.js) içindeki `SANATCI` nesnesi. Tüm metinler aynı dosyadaki `translations` sözlüğünde.

> WhatsApp numarasını `SANATCI.whatsapp` alanında ülke kodu dahil, `+` ve boşluk olmadan girin (örn. `905551112233`).

## Proje yapısı

```
src/
  components/   Header, Hero, About, Services, Gallery, Testimonials, Contact, Footer, WhatsAppButton, SectionHeading
  hooks/        useReveal (scroll reveal)
  lib/          whatsapp (önceden doldurulmuş mesaj linki)
  i18n.js       SANATCI bilgileri + TR/EN sözlük
  LanguageContext.jsx
  App.jsx
```

## Lisans

Telif Hakkı © 2026 **Ömer Bozkurt**. Tüm hakları saklıdır.

Bu proje **tescilli (proprietary)** bir lisansla korunmaktadır. Hak sahibinin
önceden yazılı izni olmadan kopyalanması, dağıtılması, değiştirilmesi veya
ticari amaçla kullanılması yasaktır. Ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

İzin / lisans talepleri: 25omerbozkurt@gmail.com

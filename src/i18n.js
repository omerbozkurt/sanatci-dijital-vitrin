// Basit, bağımlılıksız i18n sözlüğü (TR varsayılan, EN ikincil).
// i18n-localization: tüm metinler tek kaynakta; bileşenler t() ile tüketir.

export const SANATCI = {
  isim: 'Emirhan Şenol',
  unvan: { tr: 'Bağlama Sanatçısı & Eğitmen', en: 'Bağlama Artist & Instructor' },
  whatsapp: '905551112233', // ülke kodu dahil, + ve boşluk olmadan
  eposta: 'iletisim@baglamasanatcisi.com',
  sehir: { tr: 'Adana', en: 'Adana' },
}

// public/ içindeki bir varlığı base yoluna göre çözer (GitHub Pages alt yolu için şart).
// dev: '/dosya'  |  build: '/sanatci-dijital-vitrin/dosya'
export const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

// Görsel kaynakları tek noktada — hepsi yerel (public/), bağlama temalı.
export const MEDIA = {
  portrait: asset('emirhansenol.png'), // Hakkımda — Emirhan Şenol portresi
  hero: asset('baglama/hero.jpg'), // sıcak ortamda bağlama icrası
  gallery: [
    asset('baglama/g1.jpg'), // sahnede solo icra (gala)
    asset('baglama/g2.jpg'), // bağlama icrası
    asset('baglama/g3.jpg'), // stüdyo / ev icrası
    asset('baglama/g4.jpg'), // farklı boylarda bağlamalar (müfredat)
    asset('baglama/g5.jpg'), // bağlama yakın çekim (uzun hava)
    asset('baglama/g6.jpg'), // ekiple sahne (festival)
  ],
}

export const translations = {
  tr: {
    nav: {
      about: 'Hakkımda',
      services: 'Hizmetler',
      gallery: 'Galeri',
      testimonials: 'Referanslar',
      faq: 'S.S.S.',
      contact: 'İletişim',
      cta: 'Rezervasyon',
    },
    hero: {
      kicker: 'Konservatuvar Mezunu Profesyonel İcra',
      titleA: 'Telden dökülen',
      titleB: 'ustalık',
      titleC: 've akademik disiplin',
      desc: 'Konservatuvar mezunu profesyonel bağlama hocası ve düğün bağlama sanatçısı. Birebir bağlama dersinden sahne icrasına; geleneğin ruhunu akademik bir titizlikle buluşturuyorum. Adana’da yüz yüze ve tüm Türkiye’ye online.',
      ctaLesson: 'Özel Ders Talebi',
      ctaEvent: 'Organizasyon Rezervasyonu',
      trust: 'Ücretsiz ön görüşme · 24 saat içinde dönüş · Taahhüt yok',
      stat1: 'Yıl Sahne Deneyimi',
      stat2: 'Mezun Öğrenci',
      stat3: 'Organizasyon',
      scroll: 'Keşfet',
    },
    about: {
      tag: 'Hakkımda',
      title: 'Akademiden sahneye uzanan bir yolculuk',
      p1: 'Müziğe çocuk yaşta başladım; devlet konservatuvarı Türk Halk Müziği bölümünden derece ile mezun oldum. Bağlamanın yalnızca bir enstrüman değil, bir anlatım dili olduğuna inanıyorum.',
      p2: 'On yılı aşkın sürede, birebir bağlama dersi verdiğim yüzlerce öğrenciyi sıfırdan icra seviyesine taşıdım; aynı zamanda düğün bağlama sanatçısı olarak nişan, kına ve kurumsal galalarda canlı performanslar sergiledim. Her öğrenciye özel müfredat, her sahneye özel repertuvar hazırlıyorum.',
      points: [
        'Konservatuvar Türk Halk Müziği — Derece ile mezuniyet',
        'Geleneksel ve modern bağlama tekniklerinde uzmanlık',
        'Bireye özel müfredat ve ölçülebilir ilerleme takibi',
        'Profesyonel sahne ve stüdyo kayıt deneyimi',
      ],
      quote:
        '“Bir telin tınısı, doğru elde bir hikâyeye dönüşür. Benim işim o hikâyeyi sizinle birlikte yazmak.”',
    },
    services: {
      tag: 'Hizmetler',
      title: 'İki uzmanlık, tek bir titizlik',
      subtitle: 'İhtiyacınıza göre tasarlanmış premium hizmet konseptleri.',
      lesson: {
        badge: 'Eğitim',
        title: 'Özel Ders Müfredatı',
        desc: 'Sıfırdan başlayanlar ve seviye atlamak isteyenler için yapılandırılmış, birebir bağlama eğitimi.',
        items: [
          'Bireye özel seviye tespiti ve yol haritası',
          'Yüz yüze veya online esnek ders saatleri',
          'Nota, tezene ve düzen teknikleri',
          'Repertuvar oluşturma ve sınav hazırlığı',
        ],
        cta: 'Ders Programını Talep Et',
      },
      event: {
        badge: 'Sahne',
        title: 'Sahne & Organizasyon Konseptleri',
        desc: 'Düğün, nişan, kına ve kurumsal etkinlikler için unutulmaz canlı bağlama icrası.',
        items: [
          'Düğün, nişan ve kına özel repertuvarı',
          'Kurumsal gala ve açılış performansları',
          'Solo icra veya ekiple sahne düzeni',
          'Mekâna özel ses ve repertuvar planlaması',
        ],
        cta: 'Etkinlik İçin Rezervasyon',
      },
      popular: 'En Çok Tercih Edilen',
    },
    gallery: {
      tag: 'Performans Galerisi',
      title: 'Sahneden ve stüdyodan kareler',
      subtitle: 'İcradan kısa kesitler ve canlı performans anları.',
      items: [
        { title: 'Açılış Taksimi — Canlı', meta: 'Kurumsal Gala' },
        { title: 'Düğün Performansı', meta: 'Sahne Kaydı' },
        { title: 'Stüdyo İcrası', meta: 'Tek Çekim' },
        { title: 'Öğrenci Resitali', meta: 'Yıl Sonu' },
        { title: 'Uzun Hava', meta: 'Solo' },
        { title: 'Ekiple Sahne', meta: 'Festival' },
      ],
      play: 'Videoyu Oynat',
    },
    testimonials: {
      tag: 'Referanslar',
      title: 'Öğrencilerin ve etkinlik sahiplerinin gözünden',
      list: [
        {
          quote:
            'Notayı bilmeden başladım, altı ayda düğünümüzde kendi çaldığım türküyü söyledim. Sabırlı ve gerçekten alanında uzman bir hoca.',
          name: 'Elif K.',
          role: 'Özel Ders Öğrencisi',
        },
        {
          quote:
            'Kurumsal galamız için yaptığı açılış icrası geceye bambaşka bir hava kattı. Profesyonellik ve mekâna özel repertuvar mükemmeldi.',
          name: 'Burak Yıldız',
          role: 'Etkinlik Yöneticisi',
        },
        {
          quote:
            'Kınamızda çaldığı uzun hava herkesi büyüledi. Zamanlama, iletişim ve sahne hâkimiyeti kusursuzdu. Gönül rahatlığıyla öneririm.',
          name: 'Zeynep & Mert',
          role: 'Düğün Organizasyonu',
        },
      ],
    },
    faq: {
      tag: 'Sıkça Sorulan Sorular',
      title: 'Aklınızdaki soruların yanıtı',
      subtitle: 'Bağlama dersi ve organizasyon rezervasyonu hakkında en çok merak edilenler.',
      list: [
        {
          q: 'Hiç müzik bilgim yok, bağlama dersine sıfırdan başlayabilir miyim?',
          a: 'Kesinlikle. Öğrencilerin çoğu nota bilmeden başlıyor. İlk derste seviye tespiti yapıp size özel bir yol haritası çıkarıyorum; tezene tutuşundan ilk türkünüzü çalmaya kadar adım adım ilerliyoruz.',
        },
        {
          q: 'Bağlama dersleri yüz yüze mi, online mı?',
          a: 'İkisi de mümkün. Adana içinde yüz yüze, Türkiye’nin her yerinden ve yurt dışından ise görüntülü (online) bağlama dersi veriyorum. Ders saatleri programınıza göre esnek ayarlanır.',
        },
        {
          q: 'Düğün, nişan veya kına için bağlama sanatçısı olarak geliyor musunuz?',
          a: 'Evet. Düğün, nişan, kına ve kurumsal etkinlikler için solo ya da ekiple canlı bağlama icrası sunuyorum. Mekâna ve konsepte özel repertuvar hazırlanır; ses sistemi ihtiyaçları önceden planlanır.',
        },
        {
          q: 'Organizasyon rezervasyonunu ne kadar önceden yapmalıyım?',
          a: 'Tarihlerin dolmaması için en az 3-4 hafta önceden iletişime geçmenizi öneririm. Yine de son dakika talepleri için müsaitliğimi WhatsApp üzerinden hızlıca teyit edebilirsiniz.',
        },
        {
          q: 'Ücretler nasıl belirleniyor?',
          a: 'Özel derste ders sıklığına ve formata, organizasyonda ise etkinlik süresi, mekân ve repertuvara göre net bir teklif sunuyorum. Formu doldurun veya WhatsApp’tan yazın; 24 saat içinde size özel fiyatla dönüş yapıyorum.',
        },
      ],
    },
    contact: {
      tag: 'Rezervasyon & İletişim',
      title: 'Hayalinizdeki ders ya da sahne için ilk adım',
      subtitle:
        'Formu doldurun, en kısa sürede size özel bir teklifle dönüş yapayım. Acele durumlar için WhatsApp en hızlı yoldur.',
      typeLabel: 'Talep Türü',
      typeLesson: 'Özel Ders',
      typeEvent: 'Organizasyon',
      name: 'Ad Soyad',
      namePh: 'Adınız ve soyadınız',
      phone: 'Telefon',
      phonePh: '05xx xxx xx xx',
      date: 'Tercih Edilen Tarih',
      message: 'Mesajınız',
      messagePh: 'Talebinizi kısaca anlatın (seviye, etkinlik tarihi, mekân vb.)',
      submit: 'Talebi Gönder',
      whatsapp: 'WhatsApp ile Yaz',
      success: 'Talebiniz hazırlandı! WhatsApp üzerinden göndererek tamamlayın.',
      directCall: 'Hemen Ara',
    },
    footer: {
      tagline: 'Konservatuvar mezunu profesyonel bağlama sanatçısı.',
      rights: 'Tüm hakları saklıdır.',
      made: 'Sanata adanmış bir dijital vitrin.',
      nav: 'Sayfa',
      contact: 'İletişim',
    },
    wa: {
      lessonMsg:
        'Merhaba, web siteniz üzerinden *Özel Ders* hakkında bilgi almak istiyorum.',
      eventMsg:
        'Merhaba, web siteniz üzerinden bir *Organizasyon* için rezervasyon yapmak istiyorum.',
    },
  },

  en: {
    nav: {
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      testimonials: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book Now',
    },
    hero: {
      kicker: 'Professional Performance by a Conservatory Graduate',
      titleA: 'Mastery from the strings',
      titleB: 'craft',
      titleC: 'and academic discipline',
      desc: 'A professional bağlama (saz) teacher and wedding performer, graduate of a state conservatory. From one-to-one lessons to live stage performance, I blend the soul of tradition with academic precision. In-person in Adana and online across the world.',
      ctaLesson: 'Request Private Lessons',
      ctaEvent: 'Book an Event',
      trust: 'Free intro call · Reply within 24 hours · No commitment',
      stat1: 'Years on Stage',
      stat2: 'Students Taught',
      stat3: 'Events',
      scroll: 'Explore',
    },
    about: {
      tag: 'About',
      title: 'A journey from academy to stage',
      p1: 'I began music as a child and graduated with honors from the Turkish Folk Music department of a state conservatory. I believe the bağlama is not merely an instrument, but a language of expression.',
      p2: 'Over more than a decade I have taught hundreds of students from scratch to performance level, while performing live at weddings, engagements and corporate galas. Every student gets a tailored curriculum; every stage gets a bespoke repertoire.',
      points: [
        'Conservatory, Turkish Folk Music — Honors graduate',
        'Expertise in traditional and modern bağlama techniques',
        'Personalised curriculum with measurable progress',
        'Professional stage and studio recording experience',
      ],
      quote:
        '“In the right hands, the tone of a string becomes a story. My job is to write that story with you.”',
    },
    services: {
      tag: 'Services',
      title: 'Two specialties, one standard of care',
      subtitle: 'Premium service concepts designed around your needs.',
      lesson: {
        badge: 'Education',
        title: 'Private Lesson Curriculum',
        desc: 'Structured one-to-one bağlama training for absolute beginners and those leveling up.',
        items: [
          'Personal level assessment and roadmap',
          'Flexible in-person or online schedule',
          'Notation, plectrum and tuning techniques',
          'Repertoire building and exam preparation',
        ],
        cta: 'Request Lesson Plan',
      },
      event: {
        badge: 'Stage',
        title: 'Stage & Event Concepts',
        desc: 'Unforgettable live bağlama performance for weddings, engagements and corporate events.',
        items: [
          'Bespoke wedding and engagement repertoire',
          'Corporate gala and opening performances',
          'Solo performance or full ensemble setup',
          'Venue-specific sound and repertoire planning',
        ],
        cta: 'Book for Your Event',
      },
      popular: 'Most Requested',
    },
    gallery: {
      tag: 'Performance Gallery',
      title: 'Moments from stage and studio',
      subtitle: 'Short cuts from performances and live moments.',
      items: [
        { title: 'Opening Taksim — Live', meta: 'Corporate Gala' },
        { title: 'Wedding Performance', meta: 'Stage Recording' },
        { title: 'Studio Session', meta: 'One Take' },
        { title: 'Student Recital', meta: 'Year-End' },
        { title: 'Uzun Hava', meta: 'Solo' },
        { title: 'Ensemble Stage', meta: 'Festival' },
      ],
      play: 'Play Video',
    },
    testimonials: {
      tag: 'Reviews',
      title: 'Through the eyes of students and hosts',
      list: [
        {
          quote:
            'I started without reading a single note and within six months I played and sang my own song at our wedding. A patient, truly expert teacher.',
          name: 'Elif K.',
          role: 'Private Student',
        },
        {
          quote:
            'The opening he performed for our corporate gala gave the night a completely different atmosphere. Professionalism and a venue-tailored repertoire were perfect.',
          name: 'Burak Yıldız',
          role: 'Event Manager',
        },
        {
          quote:
            'The uzun hava he played at our henna night mesmerised everyone. Timing, communication and stage command were flawless. Highly recommended.',
          name: 'Zeynep & Mert',
          role: 'Wedding Event',
        },
      ],
    },
    faq: {
      tag: 'Frequently Asked Questions',
      title: 'Answers to your questions',
      subtitle: 'The most common questions about bağlama lessons and event bookings.',
      list: [
        {
          q: 'I have no musical background — can I start bağlama lessons from scratch?',
          a: 'Absolutely. Most students start without reading any notation. In the first lesson I assess your level and build a personal roadmap, progressing step by step from holding the plectrum to playing your first piece.',
        },
        {
          q: 'Are the bağlama lessons in person or online?',
          a: 'Both. I teach in person in Adana and online (video) for students across Turkey and abroad. Lesson times are arranged flexibly around your schedule.',
        },
        {
          q: 'Do you perform as a bağlama artist at weddings, engagements or henna nights?',
          a: 'Yes. I offer live bağlama performance — solo or with an ensemble — for weddings, engagements, henna nights and corporate events. The repertoire is tailored to the venue and concept, and sound requirements are planned in advance.',
        },
        {
          q: 'How far in advance should I book an event?',
          a: 'I recommend reaching out at least 3-4 weeks ahead so dates don’t fill up. For last-minute requests, you can quickly confirm my availability via WhatsApp.',
        },
        {
          q: 'How are the fees determined?',
          a: 'For lessons, pricing depends on frequency and format; for events, on duration, venue and repertoire. Fill in the form or message me on WhatsApp and I’ll send a tailored quote within 24 hours.',
        },
      ],
    },
    contact: {
      tag: 'Booking & Contact',
      title: 'The first step toward your lesson or stage',
      subtitle:
        'Fill in the form and I will get back with a tailored offer shortly. For urgent matters, WhatsApp is the fastest way.',
      typeLabel: 'Request Type',
      typeLesson: 'Private Lesson',
      typeEvent: 'Event',
      name: 'Full Name',
      namePh: 'Your full name',
      phone: 'Phone',
      phonePh: '+90 5xx xxx xx xx',
      date: 'Preferred Date',
      message: 'Your Message',
      messagePh: 'Briefly describe your request (level, event date, venue, etc.)',
      submit: 'Send Request',
      whatsapp: 'Message on WhatsApp',
      success: 'Your request is ready! Complete it by sending on WhatsApp.',
      directCall: 'Call Now',
    },
    footer: {
      tagline: 'Professional bağlama artist, conservatory graduate.',
      rights: 'All rights reserved.',
      made: 'A digital showcase devoted to the art.',
      nav: 'Pages',
      contact: 'Contact',
    },
    wa: {
      lessonMsg:
        'Hello, I would like to get information about *Private Lessons* via your website.',
      eventMsg:
        'Hello, I would like to make a booking for an *Event* via your website.',
    },
  },
}

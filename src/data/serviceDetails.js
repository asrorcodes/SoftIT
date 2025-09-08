// src/data/serviceDetails.js (yoki kerakli joyga qo'y)
export const serviceDetails = [
  {
    id: "web-development",
    title: {
      en: "Web Development",
      ru: "Веб-разработка",
      uz: " Veb Dasturlash"
    },
    description: {
      en: "We create fast, secure, and scalable websites tailored to your business goals.",
      ru: "Мы создаём быстрые, безопасные и масштабируемые веб-сайты под цели вашего бизнеса",
      uz: "Biz tez, xavfsiz va kengaytiriladigan veb-saytlarni sizning biznes maqsadlaringizga mos tarzda yaratamiz."
    },
    longDesc:{
      en:"Our team builds modern, responsive, SEO-optimized websites that work perfectly across devices. Whether it’s a simple landing page or a complex e-commerce platform, we use cutting-edge technologies like React, Laravel, and Next.js to deliver exceptional performance and design.",
      ru:"Наша команда разрабатывает современные, адаптивные и SEO-оптимизированные сайты. Мы создаём как лендинги, так и сложные платформы, используя новейшие технологии (React, Next.js и др.).",
      uz:"Mutaxassislarimiz zamonaviy, mobil qurilmalarga mos, SEO optimallashtirilgan va to‘liq sozlanadigan veb-saytlarni ishlab chiqishadi. Oddiy sahifalardan tortib murakkab e-commerce platformalarigacha — biz zamonaviy texnologiyalardan (React, Laravel, Next.js va boshqalar) foydalanamiz."
    },

    icon: "web", // matches the key in serviceIcons
  },
  {
    id: "mobile apps",
    title: {
      en: "Mobile Apps",
      ru: "Мобильные приложения",
      uz: "Mobil Ilovalar"
    },
    description: {
      en: "We build high-quality mobile apps that bring your ideas to users' fingertips.",
      ru: "Мы разрабатываем мобильные приложения, которые воплощают ваши идеи в руки пользователей.",
      uz: "Biz sizning g‘oyalaringizni foydalanuvchi telefoniga olib boruvchi mobil ilovalar yaratamiz."
    },
    longDesc:{
      en:"Whether for Android, iOS, or cross-platform, we develop fast and intuitive apps using Flutter and React Native. Whether it’s an MVP or a complex platform, we provide a seamless user experience and reliable backend.",
      ru:"Мы создаём Android, iOS и кросс-платформенные приложения с использованием Flutter и React Native. Обеспечиваем надёжность, производительность и удобный пользовательский интерфейс.",
      uz:"Android, iOS yoki kross-platformali ilovalarmi? Biz Flutter va React Native orqali tez, ishonchli va chiroyli ilovalarni yaratamiz. Ilovangiz MVP bo‘ladimi yoki katta hajmdagi tizimmi — biz siz bilanmiz."
    },
    icon: "mobile", // matches the key in serviceIcons
  },
  {
    id: "crm systems",
    title: {
      en: "CRM Systems",
      ru: "CRM-системы",
      uz: "CRM Tizimlar"
    },
    description: {
      en: "Automate and grow your business with custom CRM solutions.",
      ru: "Автоматизируйте и развивайтесь с помощью кастомных CRM-систем.",
      uz: "Biznesingizni avtomatlashtiring va rivojlantiring moslashtirilgan CRM tizimlar bilan."
    },
    longDesc:{
      en:"We design custom CRM systems that streamline sales, customer management, and operations. Our CRMs are secure, scalable, and tailored to your workflow. We also integrate with your existing platforms",
      ru:"Разрабатываем CRM-системы для управления клиентами, продажами и процессами. Они безопасны, масштабируемы и интегрируются с вашими существующими решениями.",
      uz:"Savdo, mijozlar va xizmat jarayonlarini boshqarish uchun maxsus CRM tizimlar yaratamiz. Ular xavfsiz, kengaytiriladigan va sizning ish jarayonlaringizga mos bo‘ladi."
    },
    icon: "backend", // matches the key in serviceIcons
  },
  {
    id: "it pm",
    title: {
      en: "IT Project Management",
      ru: "Управление IT-проектами",
      uz: "IT Loyihalarni Boshqarish"
    },
    description: {
      en: "We ensure your IT projects are delivered on time and within budget.",
      ru: "Обеспечиваем выполнение IT-проектов в срок и в рамках бюджета.",
      uz: "IT loyihalaringizni o‘z vaqtida va sifatli bajarilishini ta'minlaymiz."
    },
    longDesc:{
      en:"Our certified project managers (Agile, Scrum, PMP) plan, coordinate, and execute your projects efficiently. We handle team management, timelines, risks, and client communication.",
      ru:"Наши менеджеры (Agile, Scrum, PMP) организуют весь процесс: от планирования до сдачи. Управляют командой, сроками, рисками и коммуникацией с заказчиком.",
      uz:"Sertifikatlangan menejerlarimiz (Agile, Scrum, PMP) sizning loyihalaringizni samarali boshqaradi. Ular jamoa, vaqt va resurslarni boshqarib, natijaga olib chiqadi."
    },
    icon: "pm", // matches the key in serviceIcons
  },
  {
    id:"ui ux design",
    title: {
      en: "UI/UX Design",
      ru: "Дизайн UI/UX",
      uz: "UI/UX Dizayn"
    },
    description: {
      en: "We design intuitive and beautiful interfaces that users love",
      ru: "Создаём удобные и привлекательные интерфейсы, которые нравятся пользователям.",
      uz: "Foydalanuvchi uchun qulay va chiroyli interfeyslar yaratamiz."
    },
    longDesc:{
      en:"Our designers create wireframes, user flows, and prototypes focused on user behavior. We balance aesthetics with usability to deliver a smooth digital experience",
      ru:"Мы проектируем макеты, прототипы и пользовательские сценарии, уделяя внимание каждой детали. Наши решения сочетают эстетику и функциональность",
      uz:"Dizaynerlarimiz prototiplar, foydalanuvchi yo‘llari va interfeyslarni ishlab chiqadi. Qulaylik va go‘zallik uyg‘unligiga e’tibor qaratamiz."
    },
    icon: "brand", // matches the key in serviceIcons
  },
  {
    id: "it consulting",
    title: {
      en: "IT Consulting",
      ru: "IT-консалтинг",
      uz: "IT Konsalting"
    },
    description: {
      en: "We guide you with the right IT strategy for your business growth",
      ru: "Подбираем IT-стратегии для роста и оптимизации вашего бизнеса",
      uz: "Biznesingiz o‘sishi uchun to‘g‘ri IT strategiyasini taklif qilamiz."
    },
    longDesc:{
        en:"Our experts help you choose the right tech stack, improve IT infrastructure, implement digital transformation, and secure your systems.",
        ru:"Консультируем по выбору технологий, модернизации IT-инфраструктуры, цифровой трансформации и кибербезопасности.",
        uz:"Texnologiya tanlovi, infratuzilma takomillashtirish, raqamli transformatsiya va axborot xavfsizligi bo‘yicha maslahat beramiz."
    },
    icon: "analytics", // matches the key in serviceIcons
  },

];

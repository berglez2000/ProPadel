export const languages = {
  sl: 'Slo',
  en: 'En',
} as const;

export const defaultLang = 'sl' as const;

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string) {
    return translations[lang][key] || translations[defaultLang][key] || key;
  }
}

export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.rules': 'Rules',
    'nav.equipment': 'Equipment',
    'nav.playgrounds': 'Playgrounds',
    'nav.contact': 'Contact',
    'hero.title': 'The Future of Racquet Sports',
    'hero.subtitle': 'Padel is the fastest-growing sport worldwide, combining the best elements of tennis, squash, and badminton. Experience the next generation of racquet sports that\'s taking the world by storm.',
    'hero.primaryButton': 'Start Playing Today',
    'hero.secondaryButton': 'Watch Highlights',
    'features.title': 'Why Choose Padel?',
    'features.subtitle': 'Discover the unique advantages that make padel the perfect sport for everyone',
    'rules.title': 'Game Rules',
    'rules.subtitle': 'Learn the essential rules to get started with padel',
    'equipment.title': 'Essential Equipment',
    'equipment.subtitle': 'Everything you need to start playing padel',
    'playgrounds.title': 'Find Courts Near You',
    'playgrounds.subtitle': 'Discover padel courts and clubs in your area',
    'footer.copyright': '© 2024 Padel. All rights reserved.',
    'footer.description': 'The next generation of racquet sports.',
    'lang.switch': 'Switch Language',
  },
  sl: {
    'nav.home': 'Domov',
    'nav.features': 'Značilnosti',
    'nav.rules': 'Pravila',
    'nav.equipment': 'Oprema',
    'nav.playgrounds': 'Igrišča',
    'nav.contact': 'Kontakt',
    'hero.title': 'Prihodnost Raketnih Športov',
    'hero.subtitle': 'Padel je najhitreje rastoči šport po vsem svetu, ki združuje najboljše elemente tenisa, squasha in badmintona. Doživite naslednjo generacijo raketnih športov, ki osvaja svet.',
    'hero.primaryButton': 'Začni Igrati Danes',
    'hero.secondaryButton': 'Oglej Si Vrhunce',
    'features.title': 'Zakaj Izbrati Padel?',
    'features.subtitle': 'Odkrijte edinstvene prednosti, ki naredijo padel popoln šport za vse',
    'rules.title': 'Pravila Igre',
    'rules.subtitle': 'Naučite se osnovnih pravil za začetek z padlom',
    'equipment.title': 'Osnovna Oprema',
    'equipment.subtitle': 'Vse, kar potrebujete za začetek igranja padla',
    'playgrounds.title': 'Najdi Igrišča Blizu Tebe',
    'playgrounds.subtitle': 'Odkrijte padel igrišča in klube v vaši okolici',
    'footer.copyright': '© 2024 Padel. Vse pravice pridržane.',
    'footer.description': 'Naslednja generacija raketnih športov.',
    'lang.switch': 'Spremeni Jezik',
  },
} as const; 
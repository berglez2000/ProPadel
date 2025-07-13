# 🌍 Internationalization (i18n) Setup

This Astro website supports **Slovenian** (default) and **English** languages with a comprehensive internationalization system.

## 📁 File Structure

```
src/
├── content/
│   ├── sl/          # Slovenian content (default)
│   │   ├── hero/
│   │   ├── features/
│   │   ├── rules/
│   │   ├── equipment/
│   │   ├── playgrounds/
│   │   └── footer/
│   └── en/          # English content
│       ├── hero/
│       ├── features/
│       ├── rules/
│       ├── equipment/
│       ├── playgrounds/
│       └── footer/
├── pages/
│   ├── sl/          # Slovenian pages (default)
│   │   └── index.astro
│   ├── en/          # English pages
│   │   └── index.astro
│   └── index.astro  # Redirects to /sl/
└── i18n/
    └── config.ts    # Language configuration
```

## 🌐 URL Structure

- **Slovenian (default)**: `http://localhost:4321/sl/`
- **English**: `http://localhost:4321/en/`
- **Root**: `http://localhost:4321/` (redirects to Slovenian)

## 🔧 How It Works

### 1. Language Detection
The system automatically detects the language from the URL path using `getLangFromUrl()`. If no language is specified, it defaults to Slovenian.

### 2. Content Loading
Components fetch content based on the current language:
```astro
---
import { getLangFromUrl } from '../i18n/config';
const lang = getLangFromUrl(Astro.url);
const hero = await getEntry(`${lang}/hero`, 'hero');
---
```

### 3. Language Switching
Users can switch languages using the dropdown in the navigation bar.

## 📝 Adding Content

### For Slovenian (default):
Edit files in `src/content/sl/[section]/[section].md`

### For English:
Edit files in `src/content/en/[section]/[section].md`

### Content Schema
Each content file follows this structure:
```yaml
---
title: "Section Title"
subtitle: "Section subtitle"
# Additional fields based on section type
---
```

## 🎨 Adding New Languages

1. **Add language to config** (`src/i18n/config.ts`):
```typescript
export const languages = {
  sl: 'Slovenščina', // Default language
  en: 'English',
  fr: 'Français', // New language
} as const;
```

2. **Create content directory**: `src/content/fr/`

3. **Create page directory**: `src/pages/fr/`

4. **Add translations** to the `translations` object

5. **Update content config** (`src/content/config.ts`) to include new collections

## 🔄 Translation Keys

The system uses translation keys for dynamic content:
```typescript
export const translations = {
  sl: { // Default language first
    'nav.home': 'Domov',
    'nav.features': 'Značilnosti',
    // ... more translations
  },
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    // ... more translations
  }
};
```

## 🚀 Usage

### In Components:
```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/config';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
```

### In Content Files:
```astro
---
import { getLangFromUrl } from '../i18n/config';
const lang = getLangFromUrl(Astro.url);
const content = await getEntry(`${lang}/hero`, 'hero');
---

<h1>{content.data.title}</h1>
```

## ✅ Features

- ✅ URL-based language routing
- ✅ Automatic language detection (defaults to Slovenian)
- ✅ Fallback to Slovenian for missing translations
- ✅ SEO-friendly with proper `lang` attributes
- ✅ Easy language switching in navigation
- ✅ Content management per language
- ✅ Type-safe translations

## 🐛 Troubleshooting

If you see content schema errors:
1. Check that all content files match the schema in `src/content/config.ts`
2. Ensure all required fields are present in markdown frontmatter
3. Verify icon names are valid Font Awesome icons (without `fas fa-` prefix)

## 📚 Resources

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Astro i18n Best Practices](https://docs.astro.build/en/guides/internationalization/) 
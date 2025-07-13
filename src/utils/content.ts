import { getEntry } from 'astro:content';
import { getLangFromUrl, type Lang } from '../i18n/config';

export async function getContentByLang<T extends string>(
  collection: T,
  entry: string,
  lang?: Lang
) {
  const currentLang = lang || getLangFromUrl(new URL(window?.location?.href || 'http://localhost:4321'));
  
  try {
    return await getEntry(`${currentLang}/${collection}`, entry);
  } catch (error) {
    // Fallback to default language if content doesn't exist
    console.warn(`Content not found for ${currentLang}/${collection}/${entry}, falling back to English`);
    return await getEntry(`en/${collection}`, entry);
  }
}

export function getCurrentLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  return getLangFromUrl(new URL(window.location.href));
} 
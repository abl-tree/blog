export async function loadTranslations(lang = 'en') {
    try {
      const translations = await import(`../locales/${lang}.json`);
      return translations.default;
    } catch (error) {
      console.error(`Could not load translations for language: ${lang}`, error);
      return {};
    }
  }
  
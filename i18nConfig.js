const fallbackLng = 'en'
const languages = [fallbackLng, 'es', 'zh', 'hi', 'ar', 'fr', 'de', 'pt', 'ru', 'ja', 'it', 'ko', 'tr', 'vi', 'pl']

const i18nConfig = {
    debug: process.env.NODE_ENV === 'development',
    locales: languages,
    defaultLocale: fallbackLng,
    prefixDefault: true,
    routingStrategy: "dynamicSegment",
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = i18nConfig;
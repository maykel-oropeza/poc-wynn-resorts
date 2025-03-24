import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export const initI18nextTranslations = (lng) => {
    const i18nInstance = createInstance();

    i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language) => import(`@/locales/${language}/${language}.json`)))
        .init({
            lng: lng,
            fallbackLng: i18nInstance.fallbackLng,
            supportedLngs: i18nInstance.languages
        })

    return i18nInstance
}


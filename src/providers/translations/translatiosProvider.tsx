'use client';

import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { I18nextProvider } from "react-i18next";
import i18nConfig from "../../../i18nConfig";
import { useEffect } from "react";

type ITranslationsProviderProps = {
    children: React.ReactNode;
    locale: string
}

const i18n = createInstance();

i18n.use(
    resourcesToBackend(
        (language: string) =>
            import(`@/locales/${language}/${language}.json`)
    )
);
i18n.init({
    lng: i18nConfig.defaultLocale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
});

export const TranslationsProvider = ({
    children,
    locale
}: ITranslationsProviderProps) => {

    useEffect(() => {
        i18n.language !== locale && i18n.changeLanguage(locale);
    }, [locale]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default TranslationsProvider;
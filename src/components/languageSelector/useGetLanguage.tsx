import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

export const LANGUAGES = [
    { key: 'en', value: "EN", description: "English" },
    { key: 'ar', value: "AR", description: "العربية (Arabic)" },
    { key: 'zh', value: "ZH", description: "中文 (Chinese)" },
    { key: 'hi', value: "HI", description: "हिन्दी (Hindi)" },
    { key: 'fr', value: "FR", description: "Français (French)" },
    { key: 'de', value: "DE", description: "Deutsch (German)" },
    { key: 'pt', value: "PT", description: "Português (Portuguese)" },
    { key: 'ru', value: "RU", description: "Русский (Russian)" },
    { key: 'ja', value: "JA", description: "日本語 (Japanese)" },
    { key: 'es', value: "ES", description: "Español" },
    { key: 'it', value: "IT", description: "Italiano (Italian)" },
    { key: 'ko', value: "KO", description: "한국어 (Korean)" },
    { key: 'tr', value: "TR", description: "Türkçe (Turkish)" },
    { key: 'vi', value: "VI", description: "Tiếng Việt (Vietnamese)" },
    { key: 'pl', value: "PL", description: "Polski (Polish)" }
];

export const useGetLanguage = () => {

    const { i18n } = useTranslation();

    const getLanguage = useCallback((key: string) => {
        return LANGUAGES.find((lng) => lng.key === key)?.value || "";
    }, []);

    const i18nlanguageSelected = getLanguage(i18n.language);

    const [languagesSelected, setLanguageSelected] = useState<string>(i18nlanguageSelected)

    return { i18nlanguageSelected, getLanguage, languagesSelected, setLanguageSelected }
}
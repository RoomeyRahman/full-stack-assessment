import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            
        },
        /* default language when load the website in browser */
        // lng: localStorage.getItem('i18nextLng') || "en",
        /* When react i18next not finding any language to as default in borwser */
        fallbackLng: "en",
        /* debugger For Development environment */
        // debug: true,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: ".",
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            bindI18n: 'languageChanged',
            bindI18nStore: '',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
            useSuspense: false,
        }
    })

export default i18n;
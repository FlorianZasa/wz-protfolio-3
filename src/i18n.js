import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJSON from './locale/en.json';
import deJSON from './locale/de.json';
import nlJSON from './locale/nl.json';
import plJSON from './locale/pl.json';

const resources = {
    en: { ...enJSON },
    pl: { ...plJSON },
    nl: { ...nlJSON },
    de: { ...deJSON },
};

// Function to get the initial language
const getInitialLanguage = () => {
    // Use the stored language if it exists
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang) {
        return savedLang;
    }

    // Otherwise, fall back to the browser's language
    const browserLang = navigator.language.split('-')[0];
    return resources[browserLang] ? browserLang : 'en';
};

let initialLang = getInitialLanguage();

//TODO: REMOVE FOLLOWING:
initialLang = 'en'

i18n.use(initReactI18next).init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
});

// Listen for language changes and store the selected language
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
});

// Check if the page is loaded fresh or just reloaded
window.addEventListener('beforeunload', () => {
    localStorage.setItem('lastVisited', new Date().toISOString());
});

export default i18n;

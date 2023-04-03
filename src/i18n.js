import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            filters__title: 'Filters',
            header__title: 'Users',
            filters__search: 'Search',
        },
    },
    pl: {
        translation: {
            filters__title: 'Filtry',
            header__title: 'Użytkownicy',
            filters__search: 'Szukaj',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'pl',
    fallbackLng: 'en',
});

export default i18n;

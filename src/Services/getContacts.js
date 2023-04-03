import getRequestConfig from './config';

const getContacts = async (page = 1, search = '') => {
    const urlString = 'http://localhost:3004/users';
    const newUrl = new URL(urlString);
    newUrl.searchParams.set('_page', page);
    newUrl.searchParams.set('_limit', 10);
    newUrl.searchParams.set('_order', 'asc');
    newUrl.searchParams.set('_sort', 'last_name');
    newUrl.searchParams.set('q', search);

    const response = await fetch(newUrl.href, getRequestConfig);
    if (!response) return false;

    return response.json();
};

export default getContacts;

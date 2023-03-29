import getRequestConfig from './config'

const getContacts = async () => {
    const URL = "http://localhost:3004/users"
    console.log('users', URL)
    const response = await fetch(URL, getRequestConfig)
    if (!response) return false

    return response.json()
}

export default getContacts
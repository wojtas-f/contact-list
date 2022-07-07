import getRequestConfig from './config'

const getContacts = async () => {
    const URL = "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
    const response = await fetch(URL, getRequestConfig)
    if (!response) return false

    return response.json()
}

export default getContacts
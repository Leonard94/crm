import axios from 'axios'

export const getAdresses = async (request: string) => {
    const URL = process.env.REACT_APP_API_URL
    const data = { query: request, count: 20 }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${process.env.REACT_APP_AUTH_TOKEN}`,
        },
    }

    if (URL) {
        const response = await axios.post(URL, data, config)
        return response.data.suggestions
    }
}

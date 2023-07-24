import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default api

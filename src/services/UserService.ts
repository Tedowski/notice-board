import api from './api'

export default {
    list () {
        return api.get(`/users`)
    },
    get (userId: number) {
        return api.get(`/users/${userId}`)
    }
}

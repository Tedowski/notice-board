import api from './api'

export default {
    list () {
        return api.get(`/posts`)
    },
    get (postId: number) {
        return api.get(`/posts/${postId}`)
    }
}

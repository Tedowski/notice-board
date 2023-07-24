import api from './api'

export default {
    list (postId: number) {
        return api.get(`/comments?postId=${postId}`)
    },
}

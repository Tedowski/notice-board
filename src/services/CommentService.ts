import { type AxiosPromise } from 'axios'
import { Comment } from '../types/Comment'
import api from './api'

export default {
    list (postId: number): AxiosPromise<Comment[]> {
        return api.get(`/comments?postId=${postId}`)
    },
}

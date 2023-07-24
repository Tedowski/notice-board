import { Post } from '../types/Post'
import api from './api'
import { type AxiosPromise } from 'axios'

export default {
    list (): AxiosPromise<Post[]> {
        return api.get(`/posts`)
    },
    get (postId: number): AxiosPromise<Post> {
        return api.get(`/posts/${postId}`)
    }
}

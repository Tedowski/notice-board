import { User } from '../types/User'
import api from './api'
import { type AxiosPromise } from 'axios'

export default {
    list (): AxiosPromise<User[]> {
        return api.get(`/users`)
    },
    get (userId: number): AxiosPromise<User> {
        return api.get(`/users/${userId}`)
    }
}

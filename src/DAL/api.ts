import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3001/`,
    // baseURL: `https://jsonplaceholder.typicode.com/`,
})

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string|null, password: string|null, rememberMe: boolean=false) {
        return instance.post('auth/login', {email, password, rememberMe}).then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login').then(res => res.data)
    },
}

export const usersAPI = {
    getUsers() {
        return instance.get<UserType[]>(`users`)
    },
    deleteUser(userId: number) {
        debugger
        return instance.delete<UserType[]>(`users/${userId}`);
    },

    updateUser(userId: number, newUserData: UserType) {
        return instance.put<UserType>(`users/${userId}`, {...newUserData});

    },
    createUser(newUser: UserType) {
        return instance.post(`users`, {...newUser});
    },
}

export type UserType = {
    id: number,
    name: string,
    avatar: string,
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type MeResponseType = {
    id: number,
    email: string,
    login: string,
}

export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
}
import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-key': 'eccbb3eb-58c4-4ed7-895f-7ce56bc6ba31'
    }

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
        return instance.get(`users`)
            .then(res => res.data)
    },
    deleteUser(userId: string) {
        return instance.delete<ResponseType>(`users/${userId}`);
    },
    createUser(userId: string, title: string) {
        return instance.post<{ title: string }, { data: ResponseType<{ item: UserType }> }>(`users/${userId}/user`, {title});
    },
    updateUser(userId: string) {
        return instance.put< { data: ResponseType<{ item: UserType }> }>(`todo-lists/${userId}/tasks/`);
    }
}

export type UserType = {
    id: string,
    avatar: string,
    name: string,
    city: string,
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
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
import {Dispatch} from 'redux';
import {usersAPI, UserType} from '../DAL/api';
import {log} from 'util';
import {v1} from 'uuid';


const SET_USERS = 'USERS/SET-USERS'
const REMOVE_USER = 'USERS/REMOVE-USER'
const ADD_USER = 'USERS/ADD-USER'
const UPDATE_USER = 'USERS/UPDATE-USER'
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USERS/TOGGLE-IS-FOLLOWING-PROGRESS'


const initialState: UserType[] = []


const usersReducer = (state = initialState, action: ActionCreatorTypes): UserType[] => {
    switch (action.type) {
        case SET_USERS: {
            return [...state, ...action.payload.users]
        }
        /*        case TOGGLE_IS_FETCHING:
                    return {...state, ...action.payload}*/

        case REMOVE_USER: {
            debugger
            return [...state.filter(u => u.id !== action.payload.userId)]
        }
        case UPDATE_USER: {
            debugger
            return [
                ...state.map(u => u.id === action.payload.userId ? {...u, name: action.payload.name} : u)
            ]
        }
        case ADD_USER: {
            debugger
            return [...state, action.payload.newUser,]
        }
        default:
            return state
    }
}

// actions

export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, payload: {users}} as const)
export const removeUserAC = (userId: number) => ({type: REMOVE_USER, payload: {userId}} as const)
export const addUserAC = (newUser: UserType) => ({type: ADD_USER, payload: {newUser}} as const)
export const updateUserAC = (userId: number, name: string) => ({
    type: UPDATE_USER,
    payload: {userId, name}
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const)
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)


// thunks
export const fetchUsersTC = () => {
    return async (dispatch: Dispatch<ActionCreatorTypes>) => {
        debugger
        dispatch(toggleIsFetchingAC(true))
        const data = await usersAPI.getUsers()
        debugger
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.data))
        debugger
        console.log(data.data);
    }
}

export const removeUserTC = (userId: number) => {
    return async (dispatch: Dispatch<ActionCreatorTypes>) => {
        const res = await usersAPI.deleteUser(userId)
        if (res.status === 200) {
            dispatch(removeUserAC(userId))
        }
    }
}

export const updateUserTC = (userId: number, name: string) => {
    debugger
    return async (dispatch: Dispatch<ActionCreatorTypes>) => {
        const res = await usersAPI.updateUser(userId, name)
        debugger
        if (res.data.resultCode === 200) {
            dispatch(updateUserAC(userId, name))
        }
    }
}

export const createUserTC = (newValue: string) => {
    debugger
    return async (dispatch: Dispatch<ActionCreatorTypes>) => {
        debugger
        const newUser = {
            id: Date.now(),
            name: newValue,
            avatar: ''

        }
        const res = await usersAPI.createUser(newUser)
        dispatch(addUserAC(res.data))
    }
}

export default usersReducer

// types
type SetUsersType = ReturnType<typeof setUsersAC>
type RemoveUserType = ReturnType<typeof removeUserAC>
type AddUserType = ReturnType<typeof addUserAC>
type UpdateUserType = ReturnType<typeof updateUserAC>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>


export type ActionCreatorTypes =
    SetUsersType
    | RemoveUserType
    | AddUserType
    | UpdateUserType
    | ToggleIsFetchingType

import {Dispatch} from 'redux';
import {usersAPI} from '../DAL/api';


const SET_USERS = 'USERS/SET-USERS'
const UPDATE_USER = 'USERS/UPDATE-USERS'
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USERS/TOGGLE-IS-FOLLOWING-PROGRESS'


const initialState: UsersDataType = {
    users: [
        {
            id: '0',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '0',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '0',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '0',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '0',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '0',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '0',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        }
    ],
    isFetching: true,
}

const usersReducer = (state: UsersDataType = initialState, action: ActionCreatorTypes): UsersDataType => {
    switch (action.type) {
        case SET_USERS:
        case TOGGLE_IS_FETCHING:
        case UPDATE_USER:
            return {...state, ...action.payload}

        /*        case TOGGLE_IS_FOLLOWING_PROGRESS:
                    return {
                        ...state,
                        followingInProgress: action.isFetching
                            ? [...state.followingInProgress, action.userId]
                            : state.followingInProgress.filter(id => id !== action.userId)
                    }*/
        default:
            return state
    }
}

// actions

export const setUsers = (users: UserType[]) => ({type: SET_USERS, payload: {users}} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const)
export const changeNameUser = (title: string) => ({type: UPDATE_USER, payload: {title}} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)


// thunks
/*export const requestUsers = () => {
    return async (dispatch: Dispatch<ActionCreatorTypes>) => {
        dispatch(toggleIsFetching(true))
        const data = await usersAPI.getUsers()
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data));
    }
}*/

export default usersReducer

// types
export type UserType = {
    id: string,
    name: string,
    city: string
    avatar: string,
}

export type UsersDataType = {
    users: UserType[],
    isFetching: boolean

}

type SetUsersType = ReturnType<typeof setUsers>
type ChangeNameUserType = ReturnType<typeof changeNameUser>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>


export type ActionCreatorTypes =
    SetUsersType
    | ToggleIsFetchingType
    | ChangeNameUserType



const SET_USERS = 'USERS/SET-USERS'
const REMOVE_USER = 'USERS/REMOVE-USER'
const ADD_USER = 'USERS/ADD-USER'
const UPDATE_USER = 'USERS/UPDATE-USER'
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
            id: '1',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '2',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '3',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '4',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '5',
            name: 'Dmitry',
            city: 'Pushkino',
            avatar: '',
        },
        {
            id: '6',
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
            return {...state, ...action.payload}

        case REMOVE_USER: {
            debugger
            return {...state, users: state.users.filter(u=> u.id !== action.payload.userId)}
        }
        case UPDATE_USER: {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, name: action.payload.newValue} : u)
            }
        }
        case ADD_USER: {
            const newUser = {
                id: '10',
                name: action.payload.title,
                city: 'Pushkino',
                avatar: '',
            }
            return {
                ...state, users: [newUser, ...state.users]
            }
        }
        default:
            return state
    }
}

// actions

export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, payload: {users}} as const)
export const removeUserAC = (userId: string) => ({type: REMOVE_USER, payload: {userId}} as const)
export const addUserAC = (title: string) => ({type: ADD_USER, payload: {title}} as const)
export const updateUserAC = (userId: string, newValue: string) => ({type: UPDATE_USER, payload: {userId, newValue}} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const)
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)


// thunks
/*export const requestUsers = () => {
    return async (dispatch: Dispatch<ActionCreatorTypes>) => {
        dispatch(toggleIsFetchingAC(true))
        const data = await usersAPI.getUsers()
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data));
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

import React, {ChangeEvent, useCallback} from 'react';
import s from './User.module.css';
import userAvatarDefault from './images/avatar.jpg'
import {UserType} from '../../../BLL/users-reducer';

import IconButton from '@mui/material/IconButton';
import {Delete} from '@mui/icons-material';
import { EditableSpan } from '../../common/EditableSpan/EditableSpan';


export type UserPropsType = {
    userId:string,
    user: UserType
    changeUserTitle: (userId: string, newValue: string) => void
    removeUser: (taskId: string) => void
}

export const User = (
    {
        user,
        removeUser,
        userId,
        changeUserTitle,
        ...props
    }: UserPropsType) => {


    const onClickHandler = () => {
        debugger
        removeUser(userId)
    }

    const onChangeHandler = (newValue: string) => {
        changeUserTitle(userId, newValue)
    }

    return (
        <div >
            <div className={s.userTop}>
                <img className={s.userPhoto} src={user.avatar !== '' ? user.avatar : userAvatarDefault}
                />
                <IconButton onClick={onClickHandler}>
                    <Delete/>
                </IconButton>
            </div>
            <div>
                <EditableSpan
                    title={'Name'}
                    value={user.name}
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <EditableSpan
                    title={'City'}
                    value={user.city}
                    onChange={onChangeHandler}/>
            </div>
        </div>)
}



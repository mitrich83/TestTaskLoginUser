import React from 'react';
import s from './User.module.css';
import userAvatarDefault from './images/avatar.jpg'
import {UserType} from '../../../DAL/api';
import IconButton from '@mui/material/IconButton';
import {Delete} from '@mui/icons-material';
import {EditableSpan} from '../../common/EditableSpan/EditableSpan';


export type UserPropsType = {
    userId: number,
    user: UserType
    changeUserTitle: (userId: number, newValue: string) => void
    removeUser: (taskId: number) => void
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
        removeUser(userId)
    }

    const onChangeHandler = (newValue: string) => {
        debugger
        changeUserTitle(userId, newValue)
    }

    return (
        <div>
            <div className={s.userTop}>
                <img className={s.userPhoto} src={user.avatar ? user.avatar : userAvatarDefault}/>
                <IconButton onClick={onClickHandler}>
                    <Delete/>
                </IconButton>
            </div>
            <div className={s.user}>
                <EditableSpan
                    title={'Name'}
                    value={user.name}
                    onChange={onChangeHandler}
                />
            </div>
        </div>)
}



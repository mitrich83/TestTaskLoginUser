import React from 'react';
import {User} from './user/User';
import {UserType} from '../../DAL/api';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../BLL/store';
import s from './Users.module.css'
import Grid from '@mui/material/Grid';
import {Paper} from '@mui/material';


export const Users = () => {
    const allUsers = useSelector<AppRootStateType, UserType[]>(state => state.users.users)
    const dispatch = useDispatch()

    const changeUserTitle = (newTitle: string) => {

    }

    const removeUser = (userId: string) => {

    }

    return (
        <div>
            <h2 className={s.title}>Users</h2>
            <Grid container spacing={3}>
                    {
                        allUsers.map(u => {
                            return <Grid item key={u.id}>
                                <Paper style={{padding: '10px'}}>
                                    <User key={u.id}
                                          user={u}
                                          userId={u.id}
                                          changeUserTitle={changeUserTitle}
                                          removeUser={removeUser}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
            </Grid>

        </div>
    )
}



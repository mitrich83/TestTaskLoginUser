import React, {useEffect} from 'react';
import {User} from './user/User';
import {UserType} from '../../DAL/api';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../BLL/store';
import s from './Users.module.css'
import Grid from '@mui/material/Grid';
import {Paper} from '@mui/material';
import {
    addUserAC,
    createUserTC,
    fetchUsersTC,
    removeUserAC,
    removeUserTC,
    updateUserAC,
    updateUserTC
} from '../../BLL/users-reducer';
import {AddItemForm} from '../common/AddItemForm/AddItemForm';
import {CreateNewUser} from './CreateNewUser/CreateNewUser';


export const Users = () => {
    const allUsers = useSelector<AppRootStateType, UserType[]>(state => state.users)
    const dispatch = useDispatch()

  useEffect(()=> {
      dispatch(fetchUsersTC())
  },[])

    const removeUser = (userId: number) => {
        dispatch(removeUserTC(userId))
    }

    const changeUserTitle = (userId: number, newValue: string) => {
        debugger
        dispatch(updateUserTC(userId, newValue))
    }

    const addUser = (title: string)=> {
        debugger
        dispatch(createUserTC(title))
    }

    return (
        <div>
            <h2 className={s.title}>Users</h2>
            <div className={s.itemForm}>
                <AddItemForm addItem={addUser} label={'Name'}/>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    allUsers.map(u => {
                        return <Grid item xs={2} sm={4} md={4} key={u.id}>
                            <Paper style={{padding: '10px'}}>
                                <div>
                                    <User key={u.id}
                                          user={u}
                                          userId={u.id}
                                          changeUserTitle={changeUserTitle}
                                          removeUser={removeUser}
                                    />
                                </div>
                            </Paper>
                        </Grid>
                    })
                }
            </Grid>

        </div>
    )
}



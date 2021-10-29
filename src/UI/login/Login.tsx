import React from 'react';
import {LoginForm} from './LoginForm';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import {AppRootStateType} from '../../BLL/store';
import s from './Login.module.css'

export const Login = ()=> {
    const isAuth = useSelector<AppRootStateType>(state=>state.auth.isAuth)
    console.log('Login', isAuth)
    if(isAuth) {
        return <Redirect to={'/'} />
    }

    return <div>
        <h1 className={s.login}>LOGIN</h1>
        <LoginForm />
    </div>
}

import React from 'react';
import {AddItemForm} from '../../common/AddItemForm/AddItemForm';

type CreateNewUserType = {
    callback: (title: string)=> void
}

export const CreateNewUser = (props: CreateNewUserType) => {
    const form = ( label:string)=>{
        return <>
            <AddItemForm addItem={props.callback} label={label}/>
        </>
    }
    return (
        <>
            {form( 'Name')}
            {form( 'Email')}
            {form( 'Phone')}
        </>
    )
}

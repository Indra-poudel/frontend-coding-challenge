import React from 'react'
import { selectUsers, addUser } from '../../app/store/user'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IUser } from '../../types/user';

const Homepage = () => {
    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();

    console.log(users);

    const listOfUser: Array<IUser> = [{
        id: users.length + 1,
        email: 'indra.poudel1998@gmail.com',
        role: {
            value: 1,
            label: 'user'
        }
    }]

    const inviteUser = () => {
        dispatch(addUser(listOfUser))
    }

    return (
        <>
            <div>Example of Add</div>
            <button onClick={() => inviteUser()}> Click to Add item</button>
        </>
    )
}

export default Homepage
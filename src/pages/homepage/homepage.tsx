import { addUserAction } from '../../app/store/user'
import { useAppDispatch } from '../../hooks/redux'
import { IUser } from '../../types/user';

import * as Yup from 'yup'

import uuid from 'uuid-random';

import {
    Formik,
    FieldArray,
    FormikErrors,
} from 'formik';

import Button from '../../components/Button';
import { Add, Delete } from '@material-ui/icons';
import TextField from '../../components/TextField';
import Dropdown from '../../components/Dropdown';


import './homepage.css'
import { DEFAULT_PLACEHOLDER_FIELD, USER_TYPE } from '../../constants';


const schema = Yup.object().shape({
    users: Yup.array()
        .of(
            Yup.object().shape({
                email: Yup.string().required(`Required`),
                role: Yup.object().shape({
                    value: Yup.string().required('Required'),
                }).required('Required'),
            })
        )
});


const Homepage = () => {

    const dispatch = useAppDispatch()

    return (
        <div className='form-wrapper'>
            <Formik
                validationSchema={schema}
                initialValues={{ users: [DEFAULT_PLACEHOLDER_FIELD] }}
                onSubmit={(values) => {
                    dispatch(addUserAction(values.users))
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    setStatus,
                    status,
                }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <FieldArray
                                name="users"
                            >
                                {({ push, remove }) => {
                                    const users = errors.users as FormikErrors<IUser>[]
                                    return (
                                        <>
                                            {
                                                values.users.map((user, index) => (
                                                    <div className='item-row' key={user.id}>
                                                        <TextField
                                                            errorMessage={(status && status[`users.${index}.email`]) || (users && users[index] && users[index].email)}
                                                            placeholder={'indra.poudel1998@gmail.com'} label='Email' type='email' inputId={`users.${index}.email`}
                                                            onChange={(event) => {
                                                                const value = event.target.value;
                                                                const isDuplicateEmail = values.users.find((user) => user.email === value)
                                                                if (isDuplicateEmail) {
                                                                    setStatus({
                                                                        [`users.${index}.email`]: `Can't use same email multiple times`
                                                                    }
                                                                    )
                                                                }
                                                                else {
                                                                    setStatus(null)
                                                                }
                                                                handleChange(event)
                                                            }} />
                                                        <Dropdown
                                                            label='Role'
                                                            errorMessage={users && users[index] && users[index].role?.value}
                                                            dropdownId={`users.${index}.role`}
                                                            onChange={(role) => { setFieldValue(`users.${index}.role`, role) }}
                                                            options={USER_TYPE}
                                                            placeholder={'Please select a role'}
                                                        />
                                                        <Delete className='delete-icon' fontSize='small' onClick={() => remove(index)} />
                                                    </div>
                                                ))
                                            }
                                            <div className='add-another-btn-wrapper'>
                                                <Button buttonRoleType='button' icon={<Add fontSize='small' />} type={'text'} onClick={() => push({
                                                    ...DEFAULT_PLACEHOLDER_FIELD,
                                                    id: uuid()
                                                })} title='Add another' />
                                            </div>
                                            <div className='submit-btn-wrapper'>
                                                <Button onClick={handleSubmit} buttonRoleType="submit" title={'INVITES MEMBER'} />
                                            </div>
                                        </>

                                    );
                                }}
                            </FieldArray>
                        </form>
                    )
                }}
            </Formik>
        </div >
    )
}

export default Homepage
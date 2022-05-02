import React from 'react'
import { selectUsers, addUser } from '../../app/store/user'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IUser } from '../../types/user';

// import AddIcon from '@mui/icons-material/Add';

import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';

import { string } from 'yup';

import Button from '../../components/Button';
import { Add, Delete } from '@material-ui/icons';
import TextField from '../../components/TextField';
import Dropdown from '../../components/Dropdown';
import { UserType } from '../../constants';

import './homepage.css'


interface MyFormValues {
    firstName: string;
}

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
        <div className='form-wrapper'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {

                    const errors: {
                        email: string,
                        password: string,
                    } = {
                        email: '',
                        password: ''
                    };

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='item-row'>
                            <TextField placeholder='indra.poudel1998@gmail.com' label='Email' errorMessage={errors.email} type='email' inputId='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            <Dropdown
                                label='Role'
                                id="roleDropdown"
                                onChange={(role) => { console.log("selected", role) }}
                                onBlur={handleBlur}
                                options={UserType}
                                placeholder={'Select role'}
                            />
                            <Delete className='delete-icon' fontSize='small' />
                        </div>

                        {/* <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        /> */}
                        {/* {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button> */}
                        {/* <Button icon={<Add fontSize='small' />} type={'text'} onClick={() => []} title='Add another' /> */}
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Homepage
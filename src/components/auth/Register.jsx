import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/Register.css';
import { registerAction } from '../../app/actions/login.actions';
import LoadingScreen from '../LoadingScreen';
import { useNavigate } from 'react-router-dom';

// ------------ Yup Validation ------------ //

const SignupSchema = Yup.object().shape({
   email: Yup.string()
      .email('Invalid email')
      .required('Please Enter your email'),
   password: Yup.string()
      .required('Please Enter your password')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be less than 20 characters'),
   passwordConfirm: Yup.string()
      .required('Please Enter your password')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be less than 20 characters')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
   name: Yup.string()
      .required('Please Enter your name')
      .min(3, 'Name must be at least 3 characters')
      .max(20, 'Name must be less than 20 characters'),
});

// ------------ End Yup Validation ------------ //

const Register = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const login = useSelector((state) => state.login);

   if (login.isLoading) {
      return <LoadingScreen />;
   }

   return (
      <div className='auth-main-container'>
         <div className='register-main-box'>
            <div className='advertisement-main-box'>
               <img
                  src='https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png'
                  alt='image'
               />
            </div>
            <div className='register-content'>
               <h1>Registro</h1>
               <Formik
                  initialValues={{
                     email: '',
                     password: '',
                     passwordConfirm: '',
                     name: '',
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                     dispatch(
                        registerAction(
                           values.email,
                           values.password,
                           values.name
                        )
                     );
                  }}>
                  {({ errors, touched }) => (
                     <Form>
                        {errors.name && touched.name ? (
                           <div>{errors.name}</div>
                        ) : null}
                        <Field
                           className='mb-3 form-control name-input'
                           type='name'
                           name='name'
                           placeholder='Nombre'
                           autoComplete='name'
                        />
                        {errors.email && touched.email ? (
                           <div>{errors.email}</div>
                        ) : null}
                        <Field
                           className='mb-3 form-control email-input'
                           name='email'
                           placeholder='Email'
                           autoComplete='off'
                        />

                        {errors.password && touched.password ? (
                           <div>{errors.password}</div>
                        ) : null}
                        <Field
                           className='mb-3 form-control password-input'
                           type='password'
                           name='password'
                           placeholder='Contraseña'
                           autoComplete='off'
                        />

                        {errors.passwordConfirm && touched.passwordConfirm ? (
                           <div>{errors.passwordConfirm}</div>
                        ) : null}
                        <Field
                           className='mb-3 form-control password-input'
                           type='password'
                           name='passwordConfirm'
                           placeholder='Confirmar Contraseña'
                           autoComplete='off'
                        />

                        <div className='d-grid gap-2'>
                           <button
                              className='register-input'
                              variant='primary'
                              type='Submit'>
                              Registrarse
                           </button>
                        </div>
                     </Form>
                  )}
               </Formik>
               <div
                  style={{
                     fontWeight: '700',
                     fontSize: '14px',
                     lineHeight: '20px',
                  }}>
                  <span style={{ color: 'white' }}>¿Ya tienes una cuenta?</span>
                  <span
                     style={{
                        color: '#87AE39',
                        cursor: 'pointer',
                        marginLeft: '5px',
                     }}
                     onClick={() => navigate('/login')}
                     >
                     Iniciar sesión
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;

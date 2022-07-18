import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import '../../styles/LogIn.css';
import { useDispatch, useSelector } from 'react-redux';
import {
   loginWithGoogle,
   loginAction,
   loginWithFacebook,
} from '../../app/actions/login.actions';
import { useNavigate } from 'react-router-dom';

// ------------ Yup Validations ------------ //

const SignupSchema = Yup.object().shape({
   email: Yup.string()
      .email('Invalid email')
      .required('Please Enter your email'),
   password: Yup.string()
      .required('Please Enter your password')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be less than 20 characters'),
});

// ------------ End Yup Validation ------------ //

const LogIn = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const loginInfo = useSelector((state) => state.login);
   const login = useSelector((state) => state.login);

   if (login.isLoading) {
      return <LoadingScreen />;
   }

   return (
      <div className='auth-main-container'>
         <div className='login-main-box'>
            <div className='advertisement-main-box'>
               <img
                  src='https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png'
                  alt='image'
               />
            </div>
            <div className='login-content'>
               <h1>Inicio de sesion</h1>
               <Formik
                  initialValues={{
                     email: '',
                     password: '',
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                     dispatch(loginAction(values.email, values.password));
                  }}>
                  {({ errors, touched }) => (
                     <Form>
                        <Field
                           className='mb-3 form-control email-input'
                           type='email'
                           name='email'
                           placeholder='Email'
                           autoComplete='off'
                        />
                        {errors.email && touched.email ? (
                           <div>{errors.email}</div>
                        ) : null}

                        <Field
                           className='mb-3 form-control password-input'
                           type='password'
                           name='password'
                           placeholder='Contraseña'
                           autoComplete='current-password'
                        />
                        {errors.password && touched.password ? (
                           <div>{errors.password}</div>
                        ) : null}

                        <div className='d-grid gap-2'>
                           <button
                              variant='primary'
                              type='Submit'
                              className='logIn-input'>
                              Inicia Sesion
                           </button>
                        </div>
                     </Form>
                  )}
               </Formik>
               <div className='social-media-buttons'>
                  <h2>O Tambien</h2>
                  <div>
                     <button
                        onClick={() => dispatch(loginWithGoogle())}
                        className='google-button'>
                        <img
                           src='https://res.cloudinary.com/gartners/image/upload/v1658112708/DemoDay/Google_s7nswk.svg'
                           alt='google'
                        />
                        Login via Google
                     </button>
                     <button
                        onClick={() => dispatch(loginWithFacebook())}
                        className='facebook-button'>
                        <img
                           src='https://res.cloudinary.com/gartners/image/upload/v1658112708/DemoDay/Facebook_sesmhm.svg'
                           alt='facebook'
                        />
                        Login via Facebook
                     </button>
                  </div>
                  <div
                     style={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '20px',
                     }}>
                     <span style={{ color: 'white' }}>
                        ¿No tienes una cuenta?
                     </span>
                     <span
                        style={{
                           color: '#87AE39',
                           cursor: 'pointer',
                           marginLeft: '5px',
                        }}
                        onClick={() => navigate('/register')}>
                        {' '}
                        Registrate
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LogIn;

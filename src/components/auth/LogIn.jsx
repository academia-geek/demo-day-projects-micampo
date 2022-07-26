import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
   loginWithGoogle,
   loginAction,
   loginWithFacebook,
} from '../../app/actions/login.actions';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen';

// ------------ Yup Validations ------------ //

const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Email invalido').required('Email requerido'),
   password: Yup.string()
      .required('Contraseña requerida')
      .min(6, 'Contraseña muy corta')
      .max(20, 'Contraseña muy larga'),
});

// ------------ End Yup Validation ------------ //

const LogIn = () => {
   const [error, setError] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const login = useSelector((state) => state.login);

   useEffect(() => {
      if (login.isError) {
         switch (login.message.code) {
            case 'auth/account-exists-with-different-credential':
               setError('Ya hay una cuenta registrada con este email');
               break;
            case 'auth/invalid-email':
               setError('Email invalido');
               break;
            case 'auth/user-not-found':
               setError('Usuario no encontrado');
               break;
            case 'auth/wrong-password':
               setError('Contraseña incorrecta');
               break;
            case 'auth/user-disabled':
               setError('Usuario deshabilitado');
               break;
            default:
               setError('Error de autenticación');
               break;
         }
      }
   }, [login]);

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
               {login.isError && (
                  <p>
                     <span
                        style={{
                           color: 'red',
                           fontWeight: 'bold',
                           fontSize: '1.2rem',
                        }}>
                        {error}
                     </span>
                  </p>
               )}
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
                           className='email-input'
                           type='email'
                           name='email'
                           placeholder='Email'
                           autoComplete='off'
                        />
                        {errors.email && touched.email ? (
                           <div className='form-error'>{errors.email}</div>
                        ) : null}

                        <Field
                           className='password-input'
                           type='password'
                           name='password'
                           placeholder='Contraseña'
                           autoComplete='current-password'
                        />
                        {errors.password && touched.password ? (
                           <div className='form-error'>{errors.password}</div>
                        ) : null}

                        <div>
                           <button type='Submit' className='logIn-input'>
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
                        onClick={() =>
                           dispatch(loginWithFacebook()).catch((error) => {
                              console.log(error);
                           })
                        }
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

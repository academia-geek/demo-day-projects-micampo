import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../app/actions/login.actions';
import LoadingScreen from '../LoadingScreen';
import { useNavigate } from 'react-router-dom';

// ------------ Yup Validation ------------ //

const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Email no válido').required('Email requerido'),
   password: Yup.string()
      .required('Contraseña requerida')
      .min(6, 'Contraseña debe tener al menos 6 caracteres')
      .max(20, 'Contraseña debe tener máximo 20 caracteres'),
   passwordConfirm: Yup.string()
      .required('Confirmar contraseña requerida')
      .min(6, 'Contraseña debe tener al menos 6 caracteres')
      .max(20, 'Contraseña debe tener máximo 20 caracteres')
      .oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden'),
   name: Yup.string()
      .required('Nombre requerido')
      .min(3, 'Nombre debe tener al menos 3 caracteres')
      .max(20, 'Nombre debe tener máximo 20 caracteres'),
});

// ------------ End Yup Validation ------------ //

const Register = () => {
   const [error, setError] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const login = useSelector((state) => state.login);

   useEffect(() => {
      console.log(login)
      if (login.isError) {
         switch (login.message.code) {
            case 'auth/account-exists-with-different-credential':
               setError('El email ya existe');
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
         <div className='register-main-box'>
            <div className='advertisement-main-box'>
               <img
                  src='https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png'
                  alt='image'
               />
            </div>
            <div className='register-content'>
               <h1>Registro</h1>
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
                        <Field
                           className='name-input'
                           type='name'
                           name='name'
                           placeholder='Nombre'
                           autoComplete='name'
                        />
                        {errors.name && touched.name ? (
                           <div className='form-error'>{errors.name}</div>
                        ) : null}

                        <Field
                           className='email-input'
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
                           autoComplete='off'
                        />
                        {errors.password && touched.password ? (
                           <div className='form-error'>{errors.password}</div>
                        ) : null}

                        <Field
                           className='password-input'
                           type='password'
                           name='passwordConfirm'
                           placeholder='Confirmar Contraseña'
                           autoComplete='off'
                        />
                        {errors.passwordConfirm && touched.passwordConfirm ? (
                           <div className='form-error'>
                              {errors.passwordConfirm}
                           </div>
                        ) : null}
                        <div>
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
                     onClick={() => navigate('/login')}>
                     Iniciar sesión
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;

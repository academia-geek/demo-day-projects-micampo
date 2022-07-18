import React, { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Form } from 'react-bootstrap';
import { setUpRecaptcha } from '../../app/actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';

const ValidatePhone = () => {
   const user = useSelector((state) => state.user);

   const [error, setError] = useState('');
   const [number, setNumber] = useState('');
   const [flag, setFlag] = useState(false);
   const [otp, setOtp] = useState('');
   const [result, setResult] = useState('');
   const dispatch = useDispatch();

   const getOtp = (e) => {
      e.preventDefault();
      setError('');
      if (number.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)) {
         try {
            const response = dispatch(setUpRecaptcha(user.data, number));
            setResult(response);
            setFlag(true);
         } catch (err) {
            setError(err.message);
         }
      } else {
         return setError('Porfavor ingrese un numero de telefono valido');
      }
   };

   const verifyOtp = async (e) => {
      e.preventDefault();
      setError('');
      if (otp.match(/^\d{6}$/)) {
         setError('');
         try {
            await result.confirm(otp);
            alert('Codigo de verificacion correcto');
         } catch (err) {
            setError(err.message);
         }
      } else {
         return setError('Porfavor ingrese un codigo de verificacion valido');
      }
   };

   return (
      <>
         <h1>Telefono</h1>
         <h2>
            Escribe tu numero telefonico para que los demas puedan contactarte
         </h2>
         <Form onSubmit={getOtp} style={{ display: !flag ? 'block' : 'none' }}>
            <Form.Group controlId='formPhone'>
               <PhoneInput
                  required
                  defaultCountry='CO'
                  placeholder='Escribe tu numero telefonico'
                  value={number}
                  onChange={setNumber}
                  maxLength='11'
               />
               {error && <p>{error}</p>}
            </Form.Group>
            <button type='submit'>Enviar SMS</button>
            <p>te contactaremos por sms para validar tu numero telefonico</p>
         </Form>
         <div id='recaptcha-container'></div>

         <Form
            onSubmit={verifyOtp}
            style={{ display: flag ? 'block' : 'none' }}>
            <Form.Group controlId='formOtp'>
               <Form.Label>
                  Ingresa el codigo que te enviamos por sms
               </Form.Label>
               {error && <p>{error}</p>}
               <Form.Control
                  required
                  type='number'
                  placeholder='Ingresa el codigo'
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength='6'
               />
            </Form.Group>
            <button type='submit'>Verificar</button>
         </Form>
      </>
   );
};

export default ValidatePhone;

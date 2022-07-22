import React from 'react';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

const TypeUserSchema = Yup.object().shape({
   type: Yup.string().required('Tipo de usuario requerido'),
});

const TypeUserValidation = () => {
   return (
      <>
         <Formik
            initialValues={{
               type: '',
            }}
            validationSchema={TypeUserSchema}
            onSubmit={(values) => {
               console.log(values);
            }}>
            {({ errors, touched }) => (
               <Form>
                  <Field
                     className='email-input'
                     type='text'
                     name='type'
                     placeholder='Tipo de usuario'
                     autoComplete='off'
                  />
               </Form>
            )}
         </Formik>
      </>
   );
};

export default TypeUserValidation;

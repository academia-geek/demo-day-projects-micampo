import React from 'react';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

const GenderSchema = Yup.object().shape({
  gender: Yup.string().required('Tipo de usuario requerido'),
});

const GenderValidation = () => {
   return (
   <>
      gender
   </>
   );
};

export default GenderValidation;

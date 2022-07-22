import React from 'react'
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

const AgeSchema = Yup.object().shape({
  age: Yup.string().required('Tipo de usuario requerido'),
});

const AgeValidation = () => {
  return (
    <div>AgeValidation</div>
  )
}

export default AgeValidation
import React from 'react'
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

const UbicationSchema = Yup.object().shape({
   ubication: Yup.string().required('Ubicación requerida'),
});

const UbicationValidation = () => {
  return (
    <div>UbicationValidation</div>
  )
}

export default UbicationValidation
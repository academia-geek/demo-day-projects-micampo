import React from 'react'
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { imgUpload } from '../helpers/imgUpload';
import { addProdAsync } from '../redux/actions/actionAddProduct';
import { ToastContainer, toast } from 'react-toastify';

const AddProducto = () => {
   const dispatch = useDispatch();
   const [value, reset, handleChange] = useForm({
      img: '',
      nombre: '',
      des: '',
      fecha: Date()
   })

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(value);
      dispatch(addProdAsync(value))
      reset();
      toast.success("Producto agregado con exito!");
   }

   const handleFileChange = (e) => {
      const file = e.target.files[0]
      imgUpload(file)
         .then((resp) => {
            value.img = resp
            console.log(resp)
         })
         .catch((error) => { console.warn(error) });
   }

   return (
      <div className='container'>
         <ToastContainer />
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Eliga una Imagen del producto</Form.Label>
               <Form.Control name='img' onChange={handleFileChange} required accept="image/*" type="file" placeholder="Ingrese nombre del producto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Nombre del Producto</Form.Label>
               <Form.Control name='nombre' value={value.nombre} onChange={handleChange} required type="text" placeholder="Ingrese nombre del producto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Descripcion del Producto</Form.Label>
               <FloatingLabel controlId="floatingTextarea2" label="Descipcion del Producto...">
                  <Form.Control
                     name='des' value={value.des} onChange={handleChange}
                     as="textarea"
                     required
                     placeholder="Descripcion del Producto..."
                     style={{ height: '100px' }}
                  />
               </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Fecha</Form.Label>
               <Form.Control name='fecha' value={Date()} disabled onChange={handleChange} required type="text" />
            </Form.Group>

            <Button variant="outline-success" type="submit">  Enviar   </Button>
         </Form>
      </div>
   )
}

export default AddProducto
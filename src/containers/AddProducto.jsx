import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { imgUpload } from '../helpers/imgUpload';
import { addProdAsync, listarPro } from '../app/actions/actionAddProduct';
import { ToastContainer, toast } from 'react-toastify';
import { BotonAdd } from '../Styles/Home';
import { misPro } from '../filter/misPro';

const AddProducto = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [pro, setPro] = useState([])

   const { uid } = useSelector(store => store.user)

   useEffect(() => {
      listarPro().then(res => setPro(res))
   }, [pro])

   useEffect(() => {
      console.log(pro);
      const r = misPro(pro, uid);
      console.log(r);
   }, [])



   const dispatch = useDispatch();

   const [value, reset, handleChange] = useForm({
      img: '',
      nombre: '',
      des: '',
      user: uid,
      fecha: Date()
   })

   const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(value);
      dispatch(addProdAsync(value))
      reset();
      toast.success("Producto agregado con exito!");
   }

   const handleFileChange = (e) => {
      const file = e.target.files[0]
      imgUpload(file)
         .then((resp) => {
            value.img = resp
            //console.log(resp)
         })
         .catch((error) => { console.warn(error) });
   }

   return (
      <div className='container'>
         <ToastContainer />
         <br /> <h2 className='text-center'>Mis Productos</h2>

         <BotonAdd onClick={handleShow}>Agregar producto</BotonAdd>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Agrega Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                  <BotonAdd type="submit">  Agregar   </BotonAdd>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="outline-danger" onClick={handleClose}>                  Close               </Button>
            </Modal.Footer>
         </Modal>
      </div >
   )
}

export default AddProducto
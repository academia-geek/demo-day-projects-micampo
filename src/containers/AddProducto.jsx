import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, FloatingLabel, Form, Modal } from "react-bootstrap";
import { imgUpload } from '../helpers/imgUpload';
import { addProdAsync, deletePro, listarPro } from '../app/actions/actionAddProduct';
import { ToastContainer, toast } from 'react-toastify';
import { BotonAdd, ContMispro } from '../Styles/Home';
import { misPro } from '../filter/misPro';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const AddProducto = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [pro, setPro] = useState([])
   const [misProd, setMisProd] = useState([])

   const { uid } = useSelector(store => store.user)

   useEffect(() => {
      listarPro().then(res => setPro(res));
      const miData = misPro(pro, uid);
      setMisProd(miData);
   }, [pro])


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

   const handleDeletePro = (name) => {
      toast.error("Producto eliminado")
      dispatch(deletePro(name))
   }

   return (
      <div className='container' style={{minHeight: '60vh'}}>
         <ToastContainer />
         <br /> <h2 className='text-center'>Mis Productos</h2>

         <BotonAdd onClick={handleShow}>Agregar producto</BotonAdd> <br />

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

         <ContMispro >
            {
               misProd.map((res, index) =>

                  <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
                     <Card.Img variant="top" src={res.img} />
                     <Card.Body>
                        <Card.Title> {res.nombre} </Card.Title>
                        <div className='d-flex justify-content-between'>
                           <Button variant="outline-danger" onClick={() => handleDeletePro(res.nombre)}> <AiFillDelete /> </Button>
                           <Button variant="outline-warning" > <FaEdit /> </Button>
                        </div>

                     </Card.Body>
                  </Card>
               )
            }
         </ContMispro>

      </div >
   )
}

export default AddProducto
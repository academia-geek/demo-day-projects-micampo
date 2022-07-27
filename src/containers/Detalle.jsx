import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { listarPro } from '../app/actions/actionAddProduct';
import { BotonAdd } from '../Styles/Home';

const Detalle = () => {
   const [pro, setPro] = useState([]);
   const { nombre } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      listarPro().then(res => setPro(res))
   }, [])

   const captura = pro.filter(productos => productos.nombre == nombre)

   return (
      <div className='container mt-5'>
         <BotonAdd onClick={() => navigate(-1)}>Atras</BotonAdd>
         {
            captura.map((res, index) =>
               <div key={index} className="container d-flex mt-3 justify-content-center">
                  <img src={res.img} alt="" />
                  <section className='mb-5'>
                     <h1>{res.nombre}</h1>
                     <div className='d-flex align-items-center mt-5'> <h6>Publicado:</h6> <h5>{res.fecha}</h5></div>
                     <p className='mb-5'>{res.nombre}</p>
                  </section>
               </div>
            )
         }
      </div>
   )
}

export default Detalle
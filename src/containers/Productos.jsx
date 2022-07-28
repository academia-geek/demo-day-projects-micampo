import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import App from '../components/Dropdown';
import Search1 from '../components/Search';
import { db } from '../firebase/firebaseConfig';
import { TbTruckDelivery } from 'react-icons/tb';
import {
   Agro,
   BotVerde,
   ContImagen,
   Divi,
   H4,
   Image,
   Imagro,
   Linea,
   ProdImg,
   ProductosA,
   Search,
   Tarjeta,
   Tercera,
   Texto,
   TituloCont,
} from '../Styles/Home';
import { useSelector } from 'react-redux';
import { collectionAgricultor, collectionData } from '../helpers/collection';
import Carrousel from '../components/Carrousel';

const Productos = () => {
   const [productos, setProductos] = useState([]);
   const [agroinsumos, setAgroinsumos] = useState([]);
   const [agricultores, setAgricultores] = useState([]);
   const [value, setValue] = useState('');
   const navigate = useNavigate();
   const logged = useSelector((state) => state.loginCheck.loginCheck);
   const prod6 = productos.slice(0, 3);
   const agro6 = agroinsumos.slice(0, 3);
   const agri6 = agricultores.slice(0, 3);

   const handleOnChange = (e) => {
      setValue(e.target.value);
   };

   const getProductos = async () => {
      collectionData('productos').then((res) => setProductos(res));
      collectionData('agroinsumos').then((res) => setAgroinsumos(res));
      collectionAgricultor().then((res) => setAgricultores(res));
   };

   useEffect(() => {
      getProductos();
   }, []);

   useEffect(() => {
      const filter = productos.filter((producto) => {
         return producto.nombre.toLowerCase().includes(value.toLowerCase());
      });
      setProductos(filter);
      if (value === '') {
         getProductos();
         setProductos(productos);
      }
   }, [value]);

   return (
      <>
         <Search>
            {/* <Search1 /> */}
            {/* <App /> */}
         </Search>
         <div className='search-section'>
            <input
               type='text'
               placeholder='Buscar'
               value={value}
               onChange={handleOnChange}
            />
         </div>
         <Tercera>
            <TituloCont>
               <ProductosA>Productos agrícolas</ProductosA>
               <Image
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658099454/MiCampo/Vector_lgqq8t.png'
                  alt=''
               />
            </TituloCont>
            <Linea>
               {productos.map((element, index) => (
                  <ContImagen key={index}>
                     <ProdImg src={element.img} alt='' />
                     <div>
                        <p>
                           <strong>{element.nombre}</strong>
                           <br />
                           Localización
                        </p>
                     </div>
                  </ContImagen>
               ))}
            </Linea>
         </Tercera>
         <Tercera style={{ alignItems: 'center' }}>
            <TituloCont>
               <ProductosA>También podría interesarte</ProductosA>
            </TituloCont>
            <Carrousel />
         </Tercera>
      </>
   );
};

export default Productos;

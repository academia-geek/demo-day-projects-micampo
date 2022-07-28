import React, { useEffect, useState } from 'react';
import App from '../components/Dropdown';
import Search1 from '../components/Search';
import {
   Search,
   Tercera,
   ProductosA,
   Linea,
   TituloCont,
   Negro,
   Image,
   Enter,
   Ali,
   Spali,
   Agroin,
   Agro,
   Divi,
   Tarjeta,
   Imagro,
   Texto,
   H4,
} from '../Styles/Home';
import { GoLocation } from 'react-icons/go';
import { BsArrowRightShort } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import Carrousel from '../components/Carrousel';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { db } from '../firebase/firebaseConfig';
import { collectionAgricultor, collectionData } from '../helpers/collection';
import { useSelector } from 'react-redux';
const Agroinsumos = () => {
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
   const filterByAgroInsumos = (e) => {
      e.preventDefault();
      const filter = agroinsumos
         .filter((agroinsumo) => {
            return agroinsumo.nombre
               .toLowerCase()
               .includes(value.toLowerCase());
         })
         .slice(0, 3);
      setAgroinsumos(filter);
   };

   const handleOnSubmit = (e) => {
      e.preventDefault();
      navigate('/search', { state: { value } });
   };

   const getAgroInsumos = async () => {
      collectionData('productos').then((res) => setProductos(res));
      collectionData('agroinsumos').then((res) => setAgroinsumos(res));
      collectionAgricultor().then((res) => setAgricultores(res));
   };

   useEffect(() => {
      getAgroInsumos();
   }, []);

   useEffect(() => {
      const filter = agroinsumos
         .filter((agroinsumo) => {
            return agroinsumo.nombre
               .toLowerCase()
               .includes(value.toLowerCase());
         })
         .slice(0, 3);
      setAgroinsumos(filter);
      if (value === '') {
        getAgroInsumos();
         setAgroinsumos(agroinsumos);
      }
   }, [value]);

   return (
      <>
         <Search>
            <Search1 />
            <App />
         </Search>
         <input type='text' value={value} onChange={handleOnChange} />
         <Tercera>
            <TituloCont>
               <ProductosA>AgroInsumos</ProductosA>
               <Image
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658431991/MiCampo/Vector_1_cfagxz.png'
                  alt=''
               />
            </TituloCont>
            <Linea>
               {agroinsumos.map((element, index) => (
                  <Agroin key={index}>
                     <img src={element.img} alt='' />
                     <Negro>
                        {' '}
                        <Ali>
                           {element.nombre} <br />{' '}
                           <Spali>
                              <GoLocation />
                              {element.ubi}
                           </Spali>
                        </Ali>{' '}
                        <Enter>
                           Contactar Aliado <BsArrowRightShort />
                        </Enter>
                     </Negro>
                  </Agroin>
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

export default Agroinsumos;

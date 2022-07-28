import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
   Agro,
   Divi,
   Fondo,
   H4,
   Imagro,
   Tarjeta,
   Texto,
   Grande,
   Productos,
   ContBotones,
   Search,
   Tercera,
   ProductosA,
   Linea,
   ContImagen,
   ProdImg,
   BotVerde,
   TituloCont,
   Cuarta,
   Aliado,
   TarjetaAliado,
   Negro,
   Text,
   Image,
   Enter,
   Ali,
   Spali,
   Agroin,
   Quinta,
   Tarjetas,
   Iconos,
   Icono,
   TextP,
   BotN,
   Boton,
} from '../Styles/Home';
import Search1 from '../components/Search';
import { TbTruckDelivery, TbMessages } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { BsLayoutSidebar, BsArrowRightShort } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import App from '../components/Dropdown';
import Footer from '../components/Footer';
import Nosotros from '../components/Nosotros';
import { useSelector } from 'react-redux';
import { collectionAgricultor, collectionData } from '../helpers/collection';
import {AiOutlineLogin} from 'react-icons/ai';
import Carrousel from '../components/Carrousel';

const Home = () => {
   const [productos, setProductos] = useState([]);
   const [agroinsumos, setAgroinsumos] = useState([]);
   const [agricultores, setAgricultores] = useState([]);
   const navigate = useNavigate();
   const logged = useSelector((state) => state.loginCheck.loginCheck);
   const prod6 = productos.slice(0, 3);
   const agro6 = agroinsumos.slice(0, 3);
   const agri6 = agricultores.slice(0, 3);

   useEffect(() => {
      collectionData('productos').then((res) => setProductos(res));
      collectionData('agroinsumos').then((res) => setAgroinsumos(res));
      collectionAgricultor().then((res) => setAgricultores(res));
   }, []);
   return (
      <>
         <Fondo>
            <Carrousel />
            <div className='carousel'>
               <Grande>Compra, cultiva y desarrolla</Grande>
               <Text>
                  Bienvenido a MiCampo, una app en la que podras vender o
                  comprar productos agrícolas de todo tipo, podrás ver el
                  movimiento del mercado de cualquier producto, y podras
                  contactarte con cualquiera de nuestros aliados.
               </Text>
               <ContBotones>
                  <Productos
                     onClick={() =>
                        navigate(logged ? '/productos' : '/lg/productos')
                     }>
                     Productos <BsLayoutSidebar />
                  </Productos>
                  <Productos>
                     <TbMessages />
                  </Productos>
               </ContBotones>
            </div>
         </Fondo>
         <Search>
            <Search1 /> <App />
         </Search>

         <Tercera>
            <TituloCont>
               <ProductosA>Productos agrícolas</ProductosA>
               <Image
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658099454/MiCampo/Vector_lgqq8t.png'
                  alt=''
               />
            </TituloCont>
            <Linea>
               {prod6.map((element, index) => (
                  <ContImagen key={index} as={Link} to={`/detalle/${element.nombre}`}>
                     <ProdImg src={element.img} alt='' />
                     <div>
                        <TextP>
                           {element.nombre}
                        </TextP>
                     </div>
                  </ContImagen>
               ))}
            </Linea>
            <BotVerde
               onClick={() =>
                  navigate(logged ? '/productos' : '/lg/productos')
               }>
               Ver más
            </BotVerde>
         </Tercera>

         <Cuarta>
            <TituloCont>
               <ProductosA>Agricultores</ProductosA>
               <Image
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658259882/MiCampo/Group_anru90.png'
                  alt=''
               />
            </TituloCont>
            <Linea>
               {agri6.map((element, index) => (
                  <TarjetaAliado key={index}>
                     <Aliado src={element.data.photoURL} alt='' />
                     <Negro>
                        <Ali>
                           {element.data.name}
                           <br />
                           <Spali>
                              <GoLocation />
                              {element.data.ubication.textPosition}
                           </Spali>
                        </Ali>
                        <Enter>
                           Contactar Agricultor <BsArrowRightShort />
                        </Enter>
                     </Negro>
                  </TarjetaAliado>
               ))}
            </Linea>
            <BotVerde
               onClick={() => navigate(logged ? '/aliados' : '/lg/aliados')}>
               Ver más
            </BotVerde>
         </Cuarta>

         <Tercera>
            <TituloCont>
               <ProductosA>AgroInsumos</ProductosA>
               <Image
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658431991/MiCampo/Vector_1_cfagxz.png'
                  alt=''
               />
            </TituloCont>
            <Linea>
               {agro6.map((element, index) => (
                  <Agroin key={index}>
                     <img src={element.img} alt='' />
                     <Negro>
                        <Ali>
                           {element.nombre} <br />
                           <Spali>
                              <GoLocation />
                              {element.ubi}
                           </Spali>
                        </Ali>
                        <Enter>
                           Ver <BsArrowRightShort />
                        </Enter>
                     </Negro>
                  </Agroin>
               ))}
            </Linea>
            <BotVerde
               onClick={() =>
                  navigate(logged ? '/agroinsumos' : '/lg/agroinsumos')
               }>
               Ver más
            </BotVerde>
         </Tercera>
         <Quinta>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658494100/MiCampo/icon-park-solid_good-two_apuvrk.png'
                  alt=''
               />
               <h4>Calidad</h4>
               <p>
                  Te garantizamos los mejores productos al mejor precio.
               </p>
            </Tarjetas>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493982/MiCampo/Vector_3_agq7y3.png'
                  alt=''
               />
               <h4>Ubicación</h4>
               <p>
                  Decide el proveedor según la cercanía al lugar en el que estés.
               </p>
            </Tarjetas>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658099454/MiCampo/Vector_lgqq8t.png'
                  alt=''
               />
               <h4>Productos agrícolas</h4>
               <p>
                  Gran variedad de productos disponibles para tu negocio.
               </p>
            </Tarjetas>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493981/MiCampo/carbon_delivery_emoz5p.png'
                  alt=''
               />
               <h4>Velocidad</h4>
               <p>
                  Obtén lo que buscas en tiempos óptimos.
               </p>
            </Tarjetas>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493980/MiCampo/ic_baseline-security_gxhy2w.png'
                  alt=''
               />
               <h4>Seguridad</h4>
               <p>
                  Seleccionamos nuestros vendedores cuidadosamente para el bienestar de tu negocio. 
               </p>
            </Tarjetas>
            <Tarjetas>
               <h4> Te ayudamos a empezar </h4>
               {!logged && (
                           <Boton onClick={() => navigate(!logged && '/login')}>
                              Iniciar Sesión <AiOutlineLogin />{' '}
                           </Boton>
                        )}
            </Tarjetas>
         </Quinta>
         <Nosotros />
      </>
   );
};

export default Home;

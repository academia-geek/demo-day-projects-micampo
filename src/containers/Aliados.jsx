import React, { useEffect, useState } from 'react';
import Search1 from '../components/Search';
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
} from '../Styles/Home';
import { GoLocation } from 'react-icons/go';
import { BsArrowRightShort } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import { useNavigate } from 'react-router-dom';

const Aliados = () => {
   const logged = useSelector((state) => state.loginCheck.loginCheck);
   const isLoading = useSelector((state) => state.users.isLoading);
   const users = useSelector((state) => state.users.users);
   const navigate = useNavigate();
   const [value, setValue] = useState('');

   const [agricultores, setAgricultores] = useState([]);

   const filterAgricultores = () => {
      const agricultores = users.filter(
         (user) => user.data.type === 'agricultor'
      );
      setAgricultores(agricultores);
   };

   const handleChange = (e) => {
      setValue(e.target.value);
   };
   const filterByName = () => {
      const agricultores = users.filter((user) =>
         user.data.name.toLowerCase().includes(value.toLowerCase())
      );
      setAgricultores(agricultores);
   };

   useEffect(() => {
      if (!isLoading) {
         filterAgricultores();
      }
   }, [users]);

   useEffect(() => {
      if (!isLoading) {
         if (value !== '') {
            filterByName();
         }
         if (value === '') {
            filterAgricultores();
         }
      }
   }, [value]);

   if (isLoading) {
      return <LoadingScreen />;
   }

   return (
      <>
         {isLoading ? (
            <LoadingScreen />
         ) : (
            <>
               <Search>
                  <Search1 />
               </Search>
               <Cuarta>
                  <TituloCont>
                     <ProductosA>Nuestros aliados</ProductosA>
                     <input
                        type='text'
                        placeholder='Buscar'
                        value={value}
                        onChange={handleChange}
                     />
                     <Image
                        src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658259882/MiCampo/Group_anru90.png'
                        alt=''
                     />
                  </TituloCont>
                  <Linea>
                     {agricultores.map((user) => {
                        return (
                           <TarjetaAliado
                              key={user.data.uid}
                              id={user.data.uid}
                              onClick={() =>
                                 navigate(
                                    logged
                                       ? `/aliado/${user.data.name}/${user.data.uid}`
                                       : `/lg/aliado/${user.data.name}/${user.data.uid}`
                                 )
                              }>
                              <Aliado
                                 src={
                                    user.data.photoURL
                                       ? user.data.photoURL
                                       : 'https://res.cloudinary.com/gartners/image/upload/v1658122846/DemoDay/146-1468843_profile-icon-orange-png-transparent-png_qsx0un.png'
                                 }
                                 alt=''
                              />
                              <Negro>
                                 <Ali>
                                    {user.data.name}
                                    <br />
                                    <Spali>
                                       <GoLocation />
                                       {user.data.ubication.textPosition}
                                    </Spali>
                                 </Ali>
                                 <Enter>
                                    Contactar Aliado <BsArrowRightShort />
                                 </Enter>
                              </Negro>
                           </TarjetaAliado>
                        );
                     })}
                  </Linea>
               </Cuarta>
            </>
         )}
      </>
   );
};

export default Aliados;

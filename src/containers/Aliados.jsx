import React, { useEffect } from 'react';
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
   const isLoading = useSelector((state) => state.users.isLoading);
   const users = useSelector((state) => state.users.users);
   const navigate = useNavigate();

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
                     <Image
                        src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658259882/MiCampo/Group_anru90.png'
                        alt=''
                     />
                  </TituloCont>
                  <Linea>
                     {users.map((user) => {
                        return (
                           <TarjetaAliado
                              key={user.data.uid}
                              onClick={() =>
                                 navigate('/aliado/' + user.data.uid)
                              }>
                              <Aliado src={user.data.photoURL} alt='' />
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

import React from 'react'
import Nosotros from '../components/Nosotros'
import { Cuarta, Icono, Linea, Quinta, Tarjetas } from '../Styles/Home'
import { Back, Letras, Señor, Titu,H4, Parr } from '../Styles/Nosotros'

const QuienesSomos = () => {
   return (
      <><Back><Señor src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658714169/MiCampo/Dise%C3%B1o_sin_t%C3%ADtulo_1_imf7pk.png" alt="" /><Letras>
         <Titu>Sobre Nosotros</Titu>
         <H4>¿Quiénes Somos?</H4>
         <Parr>Somos una plataforma que busca acercar a los campesinos colombianos con sus compradores ideales. Estamos comprometidos con el crecimiento de la economía campesina.</Parr></Letras></Back>
         <Linea>
            <div><h3>Productos Agrícolas</h3> <img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658897137/MiCampo/Group_3_vgxpss.png" alt="" /> <p>Te acercamos a los mejores proveedores del país </p></div>
         </Linea>
         <Quinta> <Tarjetas> <Icono src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658494100/MiCampo/icon-park-solid_good-two_apuvrk.png" alt="" /> <h4>Calidad</h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Tarjetas><Tarjetas> <Icono src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493982/MiCampo/Vector_3_agq7y3.png" alt="" /><h4>Ubicación</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> </Tarjetas><Tarjetas> <Icono src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658099454/MiCampo/Vector_lgqq8t.png" alt="" /> <h4>Productos agrícolas</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> </Tarjetas><Tarjetas> <Icono src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493981/MiCampo/carbon_delivery_emoz5p.png" alt="" /><h4>Velocidad</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> </Tarjetas><Tarjetas> <Icono src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493980/MiCampo/ic_baseline-security_gxhy2w.png" alt="" /><h4>Seguridad</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> </Tarjetas><Tarjetas>
             <Icono src="" alt="" /> </Tarjetas>  </Quinta>
         <Nosotros/> 
         </>
   )
}

export default QuienesSomos
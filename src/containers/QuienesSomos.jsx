import React from 'react'
import Nosotros from '../components/Nosotros'
import { Cuarta, Icono, Linea, Quinta, Tarjetas } from '../Styles/Home'
import { Back, Letras, Señor, Titu,H4, Parr, Hor, Logui } from '../Styles/Nosotros'

const QuienesSomos = () => {
   return (
      <><Back><Señor src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658714169/MiCampo/Dise%C3%B1o_sin_t%C3%ADtulo_1_imf7pk.png" alt="" /><Letras>
         <Titu>Sobre Nosotros</Titu>
         <H4>¿Quiénes Somos?</H4>
         <Parr>Somos una plataforma que busca acercar a los campesinos colombianos con sus compradores ideales. Estamos comprometidos con el crecimiento de la economía campesina.</Parr></Letras></Back>
         <Linea>
            <div><Hor><h3>Productos Agrícolas</h3> <Logui src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658897137/MiCampo/Group_3_vgxpss.png" alt="" /></Hor> <p>Te acercamos a los mejores proveedores del país </p></div>
            <div><Hor><h3>Productos e Agroinsumos</h3> <Logui src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658897140/MiCampo/Vector_4_uqroud.png" alt="" /></Hor> <p>Productos adecuados para tu negocio o tu cultivo</p></div>
            <div><Hor><h3>Mejores Compradores</h3> <Logui src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658963480/MiCampo/Vector_8_x2acxn.png" alt="" /></Hor> <p>Compradores experimentados en el sector </p></div>
         </Linea>
         <Quinta>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658494100/MiCampo/icon-park-solid_good-two_apuvrk.png'
                  alt=''
               />
               <h4 className='pe'>Calidad</h4>
               <p className='pe'>
                  Te garantizamos los mejores productos al mejor precio.
               </p>
            </Tarjetas>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493982/MiCampo/Vector_3_agq7y3.png'
                  alt=''
               />
               <h4 className='pe'>Ubicación</h4>
               <p className='pe'>
                  Decide el proveedor según la cercanía al lugar en el que estés.
               </p>
            </Tarjetas>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658099454/MiCampo/Vector_lgqq8t.png'
                  alt=''
               />
               <h4 className='pe'>Productos agrícolas</h4>
               <p className='pe'>
                  Gran variedad de productos disponibles para tu negocio.
               </p>
            </Tarjetas>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493981/MiCampo/carbon_delivery_emoz5p.png'
                  alt=''
               />
               <h4 className='pe'>Velocidad</h4>
               <p className='pe'>
                  Obtén lo que buscas en tiempos óptimos.
               </p>
            </Tarjetas>
            <Tarjetas>
               <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658493980/MiCampo/ic_baseline-security_gxhy2w.png'
                  alt=''
               />
               <h4 className='pe'>Seguridad</h4>
               <p className='pe'>
                  Seleccionamos nuestros vendedores cuidadosamente para el bienestar de tu negocio. 
               </p>
            </Tarjetas>
            <Tarjetas>
            <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658960106/MiCampo/Vector_5_a2u4mp.png'
                  alt=''
               />
               <h4 className='pe'>Buenos precios</h4>
               <p className='pe'>
                 Te brindamos asesoría para que obtengas los precios más competitivos del mercado 
               </p>
            </Tarjetas>
            <Tarjetas>
            <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658960114/MiCampo/akar-icons_health_auwutq.png'
                  alt=''
               />
               <h4 className='pe'>Salud y Nutrición</h4>
               <p className='pe'>
                 Te brindamos asesoría para que obtengas los precios más competitivos del mercado 
               </p>
            </Tarjetas>
            <Tarjetas>
            <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658961852/MiCampo/Vector_7_ft1hik.png'
                  alt=''
               />
               <h4 className='pe'>Frescura y Sabor </h4>
               <p className='pe'>
                 Productos del campo a tu negocio. 
               </p>
            </Tarjetas>
            <Tarjetas>
            <Icono
                  src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658960104/MiCampo/Vector_6_c5vyb8.png'
                  alt=''
               />
               <h4 className='pe'>Trato Profesional</h4>
               <p className='pe'>
                  Te ayudamos a crear alianzas basadas en el respeto y la responsabilidad.  
               </p>
            </Tarjetas>
         </Quinta><Cuarta >
         <h2 className='final' >¿Como trabajamos?</h2>
         <Linea>
            <div className='numero'><h1 className='tarverd'>01</h1><h3>Problema</h3><p>Queremos reducir la intermediación en tus compras y ventas</p></div>
            <div className='tarverde tarved1'><h1 className='tarverd' style={{color:'white'}}>02</h1><h3  style={{color:'white'}}>Presentación</h3><p  style={{color:'white'}}>Te presentamos una plataforma completa y fácil de navegar  </p></div>
            <div className='numero'><h1 className='tarverd'>03</h1><h3>Desarrollo</h3><p>Te acercamos a los mejores proveedores del país </p></div>
         </Linea>
         </Cuarta>
         <Nosotros/> 
         </>
   )
}

export default QuienesSomos
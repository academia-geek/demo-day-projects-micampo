import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Agro, Divi, Fondo, H4, Imagro, Tarjeta, Texto, Grande, Productos, ContBotones, Search, Tercera, ProductosA, Linea, ContImagen, ProdImg, BotVerde, TituloCont, Cuarta, Aliado, TarjetaAliado, Negro, Text, Image, Enter, Ali, Spali, Agroin, Quinta, Tarjetas, Iconos, Icono } from '../Styles/Home'
import { Link, useNavigate } from 'react-router-dom';
import Search1 from '../components/Search';
import { TbTruckDelivery, TbMessages } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { BsLayoutSidebar, BsArrowRightShort } from 'react-icons/bs';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import App from '../components/Dropdown';
import { useSelector } from 'react-redux';

const Home = () => {
  const [productos, setProductos] = useState([])
  const [agroinsumos, setAgroinsumos] = useState([])
  const navigate = useNavigate()
  const logged = useSelector((state) => state.loginCheck.loginCheck);
  const collectionData = async (coleccion) => {
    const DatosCol = await getDocs(collection(db, coleccion))
    const datos = []
    DatosCol.forEach(element => {
      datos.push({ ...element.data() })
    })
    return datos
  }
  const prod6 = productos.slice(0, 5)
  const agro6 = agroinsumos.slice(0, 5)

  //console.log(prod6, "prod6", agro6)

  useEffect(() => {
    collectionData('productos').then((res) => setProductos(res));
    collectionData('agroinsumos').then((res) => setAgroinsumos(res));
  }, []);
  return (
    <>
      <Fondo>
        <Carousel fade className='carousel'>
          <Carousel.Item>
            <Agro>Productos</Agro>
            <Divi>
              {prod6.map((element, index) => (
                <Tarjeta key={index}>
                  <Imagro src={element.img} alt='' />{' '}
                  <Texto>
                    <H4>
                      {element.nombre}
                      <br />
                      <TbTruckDelivery />
                      Envío Nacional
                    </H4>
                  </Texto>
                </Tarjeta>
              ))}
            </Divi>
          </Carousel.Item>
          <Carousel.Item>
            <Agro>Agroinsumos</Agro>
            <Divi>
              {agro6.map((element, index) => (
                <Tarjeta key={index}>
                  <Imagro src={element.img} alt='' />{' '}
                  <Texto>
                    <H4>
                      {element.nombre}
                      <br />
                      <TbTruckDelivery />
                      Envío Nacional
                    </H4>
                  </Texto>
                </Tarjeta>
              ))}
            </Divi>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=Third slide&bg=20232a'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='carousel'>
          <Grande>Compra, cultiva y desarrolla</Grande>{' '}
          <Text>
            Bienvenido a MiCampo, una app en la que podras vender o
            comprar productos agrícolas de todo tipo, podrás ver el
            movimiento del mercado de cualquier producto, y podras
            contactarte con cualquiera de nuestros aliados.
          </Text>
          <ContBotones>
            <Productos onClick={() => navigate('/aliados')}>
              Productos <BsLayoutSidebar />
            </Productos>
            <Productos>
              <TbMessages />
            </Productos>
          </ContBotones>
        </div>
      </Fondo>
      <Search>
        <Search1 /> <App />{' '}
      </Search>

      <Agro>Agroinsumos</Agro>

      {
        agro6.map((element, index) => (
          <Tarjeta key={index}><Imagro src={element.img} alt="" /> <Texto><H4>{element.nombre}
            <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta>
        ))
      }
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
              {' '}
              <ProdImg src={element.img} alt='' />
              <div>
                <p>
                  Nombre
                  <br />
                  Localización{' '}
                </p>
              </div>
            </ContImagen>
          ))}
        </Linea>
        <BotVerde
          onClick={() => navigate(logged ? 'productos' : '/lg/productos')}>
          Ver más
        </BotVerde>
      </Tercera>

      <Cuarta>
        <TituloCont>
          <ProductosA>Nuestros aliados</ProductosA>
          <Image
            src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658259882/MiCampo/Group_anru90.png'
            alt=''
          />
        </TituloCont>
        <Linea>
          <TarjetaAliado>
            <Aliado
              src='https://res.cloudinary.com/dcsn54xoj/image/upload/v1658260704/MiCampo/image_2_poo7fg.png'
              alt=''
            />
            <Negro>
              {' '}
              <Ali>
                {' '}
                Don Carlos <br />{' '}
                <Spali>
                  <GoLocation />
                  Finca el rocío
                </Spali>
              </Ali>{' '}
              <Enter>
                Contactar Aliado <BsArrowRightShort />
              </Enter>
            </Negro>
          </TarjetaAliado>
        </Linea>
        <BotVerde
          onClick={() => navigate(logged ? '/aliados' : '/lg/aliados')}>
          Ver más
        </BotVerde>
      </Cuarta>

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
      <Search>
        <Search1 /> <App /> </Search>
    </>
  )
}

export default Home

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Agro, Divi, Fondo, H4, Imagro, Tarjeta, Texto, Grande } from '../Styles/Home'
import {TbTruckDelivery} from 'react-icons/tb'
const Home = () => {
  return (
   <>
    <Fondo>
    <Carousel fade className='carousel'>
      <Carousel.Item>
        <Agro>Agroinsumos</Agro>
        <Divi><Tarjeta> <Imagro src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658000712/MiCampo/image_1_qzzjzf.png" alt="" /> <Texto><H4>Agroinsumo
        <br/> $28,000 <br/><TbTruckDelivery/>Envío Nacional</H4></Texto></Tarjeta><Tarjeta> <Imagro src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658000712/MiCampo/image_1_qzzjzf.png" alt="" /> <Texto><H4>Agroinsumo
        <br/> $28,000 <br/><TbTruckDelivery/>Envío Nacional</H4></Texto></Tarjeta><Tarjeta> <Imagro src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658000712/MiCampo/image_1_qzzjzf.png" alt="" /> <Texto><H4>Agroinsumo
        <br/> $28,000 <br/><TbTruckDelivery/>Envío Nacional</H4></Texto></Tarjeta><Tarjeta> <Imagro src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658000712/MiCampo/image_1_qzzjzf.png" alt="" /> <Texto><H4>Agroinsumo
        <br/> $28,000 <br/><TbTruckDelivery/>Envío Nacional</H4></Texto></Tarjeta></Divi>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="carousel"><Grande>Compra, cultiva y desarrolla</Grande> <p>Bienvenido a MiCampo, una app en la que podras vender o comprar productos agricolar de todo tipo, podras ver el movimiento de cualquier producto, y podras hablar con cualquiera de nuestros aliados.</p></div>
</Fondo>
    
    </>
  )
}

export default Home
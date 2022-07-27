import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Cuarta } from '../Styles/Home'
import { GoLocation } from 'react-icons/go'
import { BsArrowRightShort } from 'react-icons/bs'

const Nosotros = () => {
  return (
    <><Cuarta className='carousel2'> <h2>¿Que piensan las personas sobre nosotros?</h2>
    <Carousel fade className='opiniones' variant="dark">
      <Carousel.Item>
        <div className='item'>
        <img
        className='imgC'
        src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658260704/MiCampo/image_2_poo7fg.png"
        />
        <div><h1>"</h1><p>MiCampo me cambió la vida y la de mi familia haciendo más fácil la venta de nuestros cultivos. </p> <img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658695538/MiCampo/Group_1_pm1dc1.png" alt="" /><p>Don Juan</p></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='item'>
        <img
        className='imgC'
        src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658887993/MiCampo/000256088W_cafdoe.jpg"
        />
        <div><h1>"</h1><p>Gracias a MiCampo logramos terminar de pagar el préstamo para expandir la cosecha y tenemos más clientes.</p> <img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658695538/MiCampo/Group_1_pm1dc1.png" alt="" /><p>Doña Maria</p></div>
        </div>


      </Carousel.Item>
      <Carousel.Item>
      <div className='item'>
        <img
        className='imgC'
        src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658888222/MiCampo/BR4LUWLMTZEWBBZDW7JIKC4H4M_s6t9uy.jpg"
        />
        <div><h1>"</h1><p>MiCampo nos ayudó a concretar clientes en Bogotá sin necesidad de intermediarios, tenemos un negocio más grande y una buena relación con nuestros clientes</p> <img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658695538/MiCampo/Group_1_pm1dc1.png" alt="" /><p>José y Marina</p></div>
        </div>


      </Carousel.Item>
    </Carousel>
</Cuarta></>
  )
}

export default Nosotros
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
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />


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
</Cuarta></>
  )
}

export default Nosotros
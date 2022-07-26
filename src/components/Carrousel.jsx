import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Agro, Divi, H4, Imagro, Tarjeta, Texto } from '../Styles/Home'
import {TbTruckDelivery} from 'react-icons/tb'

const Carrousel = ({titulo1,titulo2,titulo3, arreglo1,arreglo2,arreglo3}) => {
  return (
    <Carousel fade className='carousel'>
          <Carousel.Item>
            <Agro>{titulo1}</Agro>
            <Divi >
              {
                arreglo1.map((element, index) => (
                  <Tarjeta key={index}><Imagro src={element.img} alt="" /> <Texto><H4>{element.nombre}
                    <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta>
                ))
              }

            </Divi>
          </Carousel.Item>
          <Carousel.Item>
          <Agro>{titulo2}</Agro>
            <Divi >
              {
                arreglo2.map((element, index) => (
                  <Tarjeta key={index}><Imagro src={element.img} alt="" /> <Texto><H4>{element.nombre}
                    <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta>
                ))
              }

            </Divi>
          </Carousel.Item>
          <Carousel.Item>
          <Agro>{titulo3}</Agro>
            <Divi >
              {
                arreglo3.map((element, index) => (
                  <Tarjeta key={index}><Imagro src={element.img} alt="" /> <Texto><H4>{element.nombre}
                    <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta>
                ))
              }

            </Divi>
          </Carousel.Item>
        </Carousel>
  )
}

export default Carrousel
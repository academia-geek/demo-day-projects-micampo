import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import App from '../components/Dropdown'
import Search1 from '../components/Search'
import { db } from '../firebase/firebaseConfig'
import {TbTruckDelivery} from 'react-icons/tb'
import { Agro, BotVerde, ContImagen, Divi, H4, Image, Imagro, Linea, ProdImg, ProductosA, Search, Tarjeta, Tercera, Texto, TituloCont } from '../Styles/Home'

const Productos = () => {
    const [productos, setProductos] = useState([])
  const navigate = useNavigate()
  const collectionData = async () => {
    const DatosCol = await getDocs(collection(db, "productos"))
    const datos = []
    DatosCol.forEach(element => {
      datos.push({ ...element.data() })
    })
    console.log(datos)
    return datos
  }
  const prod6= productos.slice(0,5)
  console.log(prod6)

  useEffect(() => {
    collectionData().then(res => setProductos(res))

  }, [])
  return (
    <>
    <Search> 
     <Search1/>
      <App/> 
      </Search> 
      <Tercera><TituloCont><ProductosA>Productos agrícolas</ProductosA><Image src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658099454/MiCampo/Vector_lgqq8t.png" alt="" /></TituloCont><Linea>{prod6.map((element, index) =>
        <ContImagen key={index}> <ProdImg src={element.img} alt="" /><div><p>Nombre<br />Localización </p></div></ContImagen>)}</Linea></Tercera>
        <Tercera style={{alignItems:'center'}}><TituloCont><ProductosA>También podría interesarte</ProductosA></TituloCont>
      <Carousel fade className='carousel'>
          <Carousel.Item>
            <Agro>Productos</Agro>
            <Divi>
              {
                prod6.map((element, index) => (
                  <Tarjeta key={index}><Imagro src={element.img} alt="" /> <Texto><H4>{element.nombre}
                    <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta>
                ))
              }

            </Divi>
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
        </Carousel></Tercera>
    </>
  )
}

export default Productos
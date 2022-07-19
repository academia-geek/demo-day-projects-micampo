import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Agro, Divi, Fondo, H4, Imagro, Tarjeta, Texto, Grande, Productos, ContBotones, Search, Tercera, ProductosA, Linea, ContImagen, ProdImg, BotVerde, TituloCont, Cuarta, Aliado, TarjetaAliado, Negro } from '../Styles/Home'
// import Search1 from '../components/Search'
import { TbTruckDelivery, TbMessages } from 'react-icons/tb'
import { BsLayoutSidebar } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
// import App from '../components/Dropdown';



const Home = () => {
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

  useEffect(() => {
    collectionData().then(res => setProductos(res))

  }, [])
  return (
    <>
      <Fondo>
        <Carousel fade className='carousel'>
          <Carousel.Item>
            <Agro>Agroinsumos</Agro>
            <Divi><Tarjeta> <Imagro src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658000712/MiCampo/image_1_qzzjzf.png" alt="" /> <Texto><H4>Agroinsumo
              <br /> $28,000 <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta><Tarjeta> <Imagro src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658000712/MiCampo/image_1_qzzjzf.png" alt="" /> <Texto><H4>Agroinsumo
                <br /> $28,000 <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta><Tarjeta> <Imagro src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658000712/MiCampo/image_1_qzzjzf.png" alt="" /> <Texto><H4>Agroinsumo
                  <br /> $28,000 <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta><Tarjeta> <Imagro src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658000712/MiCampo/image_1_qzzjzf.png" alt="" /> <Texto><H4>Agroinsumo
                    <br /> $28,000 <br /><TbTruckDelivery />Envío Nacional</H4></Texto></Tarjeta></Divi>
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
        <div className="carousel"><Grande>Compra, cultiva y desarrolla</Grande> <p>Bienvenido a MiCampo, una app en la que podras vender o comprar productos agrícolas de todo tipo, podrás ver el movimiento del mercado de cualquier producto, y podras contactarte con cualquiera de nuestros aliados.</p>
          <ContBotones><Productos onClick={() => navigate('/aliados')}>Productos <BsLayoutSidebar /></Productos><Productos><TbMessages /></Productos></ContBotones></div>
      </Fondo>
      {/* <Search> 
     <Search1/> <App/> </Search> */}
      <Tercera><TituloCont><ProductosA>Productos agrícolas</ProductosA><img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658099454/MiCampo/Vector_lgqq8t.png" alt="" /></TituloCont><Linea>{productos.map((element, index) =>
        <ContImagen key={index}> <ProdImg src={element.img} alt="" /><div><p>Nombre<br/>Localización </p></div></ContImagen>)}</Linea><BotVerde onClick={()=>navigate("/aliados")}>Ver más</BotVerde></Tercera>
        <Cuarta><TituloCont><ProductosA>Nuestros aliados</ProductosA><img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658259882/MiCampo/Group_anru90.png" alt="" /></TituloCont><Linea>
          <TarjetaAliado><Aliado src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658260704/MiCampo/image_2_poo7fg.png" alt="" /><Negro><h6>Don Carlos</h6> <p>Finca el rocío</p></Negro></TarjetaAliado></Linea></Cuarta>
    </>
  )
}

export default Home
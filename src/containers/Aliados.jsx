import React from 'react'
import Search1 from '../components/Search'
import { Agro, Divi, Fondo, H4, Imagro, Tarjeta, Texto, Grande, Productos, ContBotones, Search, Tercera, ProductosA, Linea, ContImagen, ProdImg, BotVerde, TituloCont, Cuarta, Aliado, TarjetaAliado, Negro, Text, Image, Enter, Ali, Spali, Agroin, Quinta, Tarjetas, Iconos, Icono } from '../Styles/Home'
import {GoLocation} from 'react-icons/go'
import {BsArrowRightShort} from 'react-icons/bs'
const Aliados = () => {
  return (
    <><Search><Search1/></Search>
    <Cuarta><TituloCont><ProductosA>Nuestros aliados</ProductosA><Image src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658259882/MiCampo/Group_anru90.png" alt="" /></TituloCont><Linea>
        <TarjetaAliado><Aliado src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658260704/MiCampo/image_2_poo7fg.png" alt="" /><Negro> <Ali> Don Carlos <br /> <Spali><GoLocation />Finca el rocío</Spali></Ali> <Enter>Contactar Aliado <BsArrowRightShort /></Enter></Negro></TarjetaAliado></Linea></Cuarta>
    </>
  )
}

export default Aliados
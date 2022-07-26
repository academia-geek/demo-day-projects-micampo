import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContFoot, Foot, Lista } from '../Styles/Footer'
import {useSelector} from 'react-redux'
const Footer = () => {
   const navigate= useNavigate()
   const logged = useSelector((state) => state.loginCheck.loginCheck);
   useEffect(() => {
      console.log(logged, 'navbar');
   }, [logged]);
  return (
    <Foot><ContFoot><div><img src="https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png" alt="" width="60" height="60"/>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias odit mollitia quam quae corrupti est numquam aliquid.</p></div>
    <Lista><a onClick={()=>navigate(logged?'/home':'/lg/home')}>Inicio</a>
    <a onClick={()=>navigate(logged?'agroinsumos':'/lg/agroinsumos')}>Agroinsumos</a> 
    <a onClick={()=>navigate(logged?'/aliados':'/lg/aliados')}>Aliados</a>
    <a onClick={()=>navigate(logged?'/mercado':'/lg/mercado')}>Mercado</a></Lista>
    <Lista><a onClick={()=>navigate(logged?'/home':'/lg/home')}>Sobre Nosotros</a>
    <a onClick={()=>navigate(logged?'/sobre-nosotros':'/lg/sobre-nosotros')}>Nuestro Equipo</a> 
    <a onClick={()=>navigate(logged?'/aliados':'/lg/aliados')}>Testimonios</a></Lista>      
    </ContFoot><hr/></Foot>

  )}


export default Footer
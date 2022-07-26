import React, { useEffect, useState } from "react";
import App from "../components/Dropdown";
import Search1 from "../components/Search";
import {
  Search,
  Tercera,
  ProductosA,
  Linea,
  TituloCont,
  Negro,
  Image,
  Enter,
  Ali,
  Spali,
  Agroin,
  Agro,
  Divi,
  Tarjeta,
  Imagro,
  Texto,
  H4,
} from "../Styles/Home";
import { GoLocation } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Carrousel from "../components/Carrousel";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { db } from "../firebase/firebaseConfig";
const Agroinsumos = () => {
  const [productos, setProductos] = useState([]);
  const [agroinsumos, setAgroinsumos] = useState([]);
  const navigate = useNavigate();
  const collectionData = async (coleccion) => {
    const DatosCol = await getDocs(collection(db, coleccion));
    const datos = [];
    DatosCol.forEach((element) => {
      datos.push({ ...element.data() });
    });
    return datos;
  };
  const prod6 = productos.slice(0, 5);

  useEffect(() => {
    collectionData("productos").then((res) => setProductos(res));
    collectionData("agroinsumos").then((res) => setAgroinsumos(res));
  }, []);
  return (
    <>
      <Search>
        <Search1 />
        <App />
      </Search>
      <Tercera>
        <TituloCont>
          <ProductosA>AgroInsumos</ProductosA>
          <Image
            src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658431991/MiCampo/Vector_1_cfagxz.png"
            alt=""
          />
        </TituloCont>
        <Linea>
          { agroinsumos.map((element, index) => (
            <Agroin key={index}>
              <img src={element.img} alt="" />
              <Negro>
                {" "}
                <Ali>
                  {element.nombre} <br />{" "}
                  <Spali>
                    <GoLocation />
                    {element.ubi}
                  </Spali>
                </Ali>{" "}
                <Enter>
                  Contactar Aliado <BsArrowRightShort />
                </Enter>
              </Negro>
            </Agroin>
          ))}
        </Linea>
      </Tercera>

      <Tercera style={{ alignItems: "center" }}>
        <TituloCont>
          <ProductosA>También podría interesarte</ProductosA>
        </TituloCont>
        <Carousel fade className="carousel">
          <Carousel.Item>
            <Agro>Productos</Agro>
            <Divi>
              {prod6.map((element, index) => (
                <Tarjeta key={index}>
                  <Imagro src={element.img} alt="" />{" "}
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
      </Tercera>
    </>
  );
};

export default Agroinsumos;
